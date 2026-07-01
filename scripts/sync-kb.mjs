#!/usr/bin/env node
/**
 * Sync product copy from Obsidian KB (reference/kb submodule) into catalog.js.
 *
 * Usage:
 *   node scripts/sync-kb.mjs --dry-run
 *   node scripts/sync-kb.mjs --product snail
 *   node scripts/sync-kb.mjs --allow-write
 *   node scripts/sync-kb.mjs --allow-write --verify
 *   node scripts/sync-kb.mjs --scaffold-kb
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { loadCatalogFromFile } from './lib/parse-catalog.mjs';
import { parseKbMarkdownPair, scaffoldKbMarkdown } from './lib/parse-kb-markdown.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const MAP_PATH = join(REPO_ROOT, 'scripts/kb-sync-map.json');

const dryRun = process.argv.includes('--dry-run') || !process.argv.includes('--allow-write');
const allowWrite = process.argv.includes('--allow-write');
const scaffoldKb = process.argv.includes('--scaffold-kb');
const verify = process.argv.includes('--verify');
const productArgIdx = process.argv.indexOf('--product');
const productFilter = productArgIdx !== -1 ? process.argv[productArgIdx + 1] : null;

function loadMap() {
  return JSON.parse(readFileSync(MAP_PATH, 'utf8'));
}

function vaultRoot() {
  return process.env.KB_ROOT || join(REPO_ROOT, 'reference/kb');
}

function kbPath(map, entry) {
  return join(vaultRoot(), '3-Resources/DISURI-Beauty-Knowledge-Base', entry.kbFile);
}

function catalogPath(map) {
  return join(REPO_ROOT, map.catalogPath);
}

function submoduleHint() {
  return [
    'reference/kb submodule is missing or not initialized.',
    'Run:',
    '  git submodule update --init --recursive',
    'Or clone with:',
    '  git clone --recurse-submodules https://github.com/JCDATASCIENTIST/DISURIBeauty.git',
  ].join('\n');
}

function ensureSubmodule(map) {
  if (process.env.KB_ROOT) return;
  const root = join(REPO_ROOT, 'reference/kb');
  if (!existsSync(root)) {
    console.error(submoduleHint());
    process.exit(1);
  }
}

function getKbSha() {
  try {
    return execSync('git -C reference/kb rev-parse --short HEAD', {
      cwd: REPO_ROOT,
      encoding: 'utf8',
    }).trim();
  } catch {
    return 'unknown';
  }
}

function escapeString(s) {
  return String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function serializeValue(value, depth) {
  const pad = '  '.repeat(depth);
  const padInner = '  '.repeat(depth + 1);

  if (value === null || value === undefined) return 'null';
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (typeof value === 'string') return `'${escapeString(value)}'`;

  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const lines = value.map((item) => {
      if (typeof item === 'string') return `${padInner}${serializeValue(item, depth + 1)}`;
      if (typeof item === 'object' && item !== null) {
        return `${padInner}${serializeValue(item, depth + 1)}`;
      }
      return `${padInner}${serializeValue(item, depth + 1)}`;
    });
    return `[\n${lines.join(',\n')},\n${pad}]`;
  }

  if (typeof value === 'object') {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    const lines = entries.map(
      ([key, val]) => `${padInner}${key}: ${serializeValue(val, depth + 1)}`
    );
    return `{\n${lines.join(',\n')},\n${pad}}`;
  }

  return `'${escapeString(String(value))}'`;
}

function serializeArray(items, depth = 0) {
  const pad = '  '.repeat(depth);
  const padInner = '  '.repeat(depth + 1);
  const blocks = items.map((item) => `${padInner}${serializeValue(item, depth + 1)}`);
  return `[\n${blocks.join(',\n')},\n${pad}]`;
}

function patchCatalogSource(src, CATALOG, BUNDLES) {
  let out = src;
  out = out.replace(/window\.CATALOG = \[[\s\S]*?\n\];/, `window.CATALOG = ${serializeArray(CATALOG, 0)};`);
  out = out.replace(/window\.BUNDLES = \[[\s\S]*?\n\];/, `window.BUNDLES = ${serializeArray(BUNDLES, 0)};`);
  return out;
}

function allEntries(map) {
  return [...map.products, ...map.bundles];
}

function filterEntries(entries) {
  if (!productFilter) return entries;
  return entries.filter((e) => e.catalogId === productFilter);
}

function mergeFields(target, source, fields) {
  const changes = [];
  for (const field of fields) {
    if (source[field] === undefined || source[field] === null || source[field] === '') continue;
    const before = JSON.stringify(target[field]);
    target[field] = source[field];
    const after = JSON.stringify(target[field]);
    if (before !== after) changes.push({ field, before: target[field], after: source[field] });
  }
  return changes;
}

function readKbEntry(map, entry) {
  const path = kbPath(map, entry);
  if (!existsSync(path)) return { path, missing: true, data: null };
  const enText = readFileSync(path, 'utf8');
  const esPath = path.replace(/\.md$/, '.es.md');
  const esText = existsSync(esPath) ? readFileSync(esPath, 'utf8') : null;
  return { path, missing: false, data: parseKbMarkdownPair(enText, esText) };
}

function runScaffold(map) {
  ensureSubmodule(map);
  const { CATALOG, BUNDLES } = loadCatalogFromFile(catalogPath(map));
  const byId = Object.fromEntries([...CATALOG, ...BUNDLES].map((item) => [item.id, item]));
  const entries = filterEntries(allEntries(map));
  let written = 0;

  for (const entry of entries) {
    const item = byId[entry.catalogId];
    if (!item) {
      console.warn(`No catalog entry for ${entry.catalogId}`);
      continue;
    }
    const path = kbPath(map, entry);
    mkdirSync(dirname(path), { recursive: true });
    const content = scaffoldKbMarkdown(item, entry.catalogId);
    if (dryRun) {
      console.log(`[scaffold dry-run] would write ${path}`);
    } else {
      writeFileSync(path, content, 'utf8');
      console.log(`[scaffold] wrote ${path}`);
      written += 1;
    }
  }

  console.log(
    dryRun
      ? `\nScaffold dry-run complete (${entries.length} files). Re-run with --scaffold-kb --allow-write to write.`
      : `\nScaffold complete (${written} files written in reference/kb). Commit in obsidian-vault separately.`
  );
}

function runSync(map) {
  ensureSubmodule(map);
  const catPath = catalogPath(map);
  const { src, CATALOG, BUNDLES } = loadCatalogFromFile(catPath);
  const entries = filterEntries(allEntries(map));
  const updatedIds = [];
  const diffs = [];

  for (const entry of entries) {
    const isBundle = map.bundles.some((b) => b.catalogId === entry.catalogId);
    const collection = isBundle ? BUNDLES : CATALOG;
    const idx = collection.findIndex((item) => item.id === entry.catalogId);
    if (idx === -1) {
      console.warn(`Missing catalog entry for ${entry.catalogId}`);
      continue;
    }

    const kb = readKbEntry(map, entry);
    if (kb.missing) {
      if (!entry.optional) console.warn(`KB file missing: ${kb.path}`);
      continue;
    }

    const item = { ...collection[idx] };
    const fieldChanges = [];
    for (const field of entry.fields) {
      if (kb.data[field] === undefined || kb.data[field] === null || kb.data[field] === '') continue;
      const before = JSON.stringify(item[field]);
      item[field] = kb.data[field];
      const after = JSON.stringify(item[field]);
      if (before !== after) {
        fieldChanges.push(field);
        diffs.push({ catalogId: entry.catalogId, field, path: kb.path });
      }
    }

    if (fieldChanges.length > 0) {
      collection[idx] = item;
      updatedIds.push(entry.catalogId);
      console.log(`  ${entry.catalogId}: ${fieldChanges.join(', ')}`);
    }
  }

  if (updatedIds.length === 0) {
    console.log('\nNo changes detected.');
    return;
  }

  const sha = getKbSha();
  const msg = [
    'chore: sync product copy from KB',
    '',
    `- Updated catalog.js from reference/kb @ ${sha}`,
    `- Products: ${updatedIds.join(', ')}`,
    'Source: DISURI-Beauty-Knowledge-Base/6-Product-Library',
  ].join('\n');

  console.log(`\n${updatedIds.length} item(s) would update: ${updatedIds.join(', ')}`);
  console.log('\nSuggested commit message:\n');
  console.log(msg);

  if (dryRun) {
    console.log('\nDry-run only — re-run with --allow-write to patch catalog.js');
    return;
  }

  const patched = patchCatalogSource(src, CATALOG, BUNDLES);
  writeFileSync(catPath, patched, 'utf8');
  console.log(`\nWrote ${catPath}`);

  if (verify) {
    console.log('\nRunning update-product-descriptions.mjs --verify-only ...');
    execSync('node scripts/update-product-descriptions.mjs --verify-only', {
      cwd: REPO_ROOT,
      stdio: 'inherit',
    });
  }
}

function main() {
  const map = loadMap();

  if (scaffoldKb) {
    runScaffold(map);
    return;
  }

  console.log(dryRun ? 'KB sync (dry-run)\n' : 'KB sync (write mode)\n');
  runSync(map);
}

main();
