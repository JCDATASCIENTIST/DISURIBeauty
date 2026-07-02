#!/usr/bin/env node
/**
 * Generate catalog-aligned product body HTML and update via Shopify Admin GraphQL.
 *
 * Auth (first match wins):
 *   1. SHOPIFY_ADMIN_ACCESS_TOKEN + SHOPIFY_STORE in env or .env.local
 *   2. shopify store execute (requires: shopify store auth --scopes read_products,write_products)
 *
 * Usage:
 *   node scripts/update-product-descriptions.mjs --dry-run
 *   node scripts/update-product-descriptions.mjs --export
 *   node scripts/update-product-descriptions.mjs --verify-only
 *   node scripts/update-product-descriptions.mjs --allow-mutations
 */
import { readFileSync, mkdirSync, writeFileSync, mkdtempSync, rmSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const STORE = process.env.SHOPIFY_STORE || '7874da-0f.myshopify.com';
const API_VERSION = process.env.SHOPIFY_API_VERSION || '2025-04';

const dryRun = process.argv.includes('--dry-run');
const allowMutations = process.argv.includes('--allow-mutations');
const exportOnly = process.argv.includes('--export');
const verifyOnly = process.argv.includes('--verify-only');

const HANDLE_TO_CATALOG = {
  'disuri-beauty-ultimate-snail-mucin-cream': 'snail',
  'triple-collagen-firming-cream': 'collagen',
  'hyaluronic-acid-intense-hydration-firming-cream': 'ha',
  'triple-collagen-firming-toner': 'toner',
  'triple-collagen-korean-face-wash': 'foam',
  'triple-collagen-eye-cream-korean-anti-aging': 'eye',
  'triple-collagen-firming-essence': 'essence',
  'the-complete-disuri-system': 'complete-system',
  'the-anti-aging-power-duo': 'anti-aging-duo',
  'the-glass-skin-starter': 'glass-starter',
};

const FIND_QUERY = `
  query ProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      descriptionHtml
    }
  }
`;

const UPDATE_MUTATION = `
  mutation ProductUpdate($input: ProductInput!) {
    productUpdate(input: $input) {
      product { id handle }
      userErrors { field message }
    }
  }
`;

loadEnvFile(join(REPO_ROOT, '.env.local'));

function loadEnvFile(path) {
  try {
    const text = readFileSync(path, 'utf8');
    for (const line of text.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      let val = trimmed.slice(eq + 1).trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = val;
    }
  } catch {
    // optional file
  }
}

function loadCatalog() {
  const catalogPath = join(REPO_ROOT, 'DISURI Beauty/design-kit/claude-design/catalog.js');
  const src = readFileSync(catalogPath, 'utf8');
  const catalogMatch = src.match(/window\.CATALOG = (\[[\s\S]*?\]);/);
  const bundlesMatch = src.match(/window\.BUNDLES = (\[[\s\S]*?\]);/);
  if (!catalogMatch || !bundlesMatch) throw new Error('Could not parse catalog.js');
  // eslint-disable-next-line no-eval
  const CATALOG = eval(catalogMatch[1]);
  // eslint-disable-next-line no-eval
  const BUNDLES = eval(bundlesMatch[1]);
  return Object.fromEntries([...CATALOG, ...BUNDLES].map((p) => [p.id, p]));
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildSkuHtml(item) {
  return [
    `<p>${esc(item.benefit)}</p>`,
    `<p><strong>Size:</strong> ${esc(item.size)} · <strong>Made in Korea</strong></p>`,
    `<p><strong>Key ingredients:</strong> ${esc(item.ingredients)}</p>`,
    '<p><strong>How to use</strong></p>',
    '<ul>',
    ...item.usage.map((u) => `<li>${esc(u)}</li>`),
    '</ul>',
    `<p><em>${esc(item.compliance)}</em></p>`,
  ].join('\n');
}

function buildBundleHtml(item) {
  const stepLines =
    item.steps?.map(
      (s) =>
        `<li><strong>Step ${s.num} (${esc(s.label)}):</strong> ${esc(s.product)} · ${esc(s.why)}</li>`
    ) ?? [];
  return [
    `<p>${esc(item.benefit)}</p>`,
    `<p><strong>${esc(item.subtitle || '')}</strong> · ${esc(item.size)}</p>`,
    item.saves ? `<p><strong>Save $${item.saves.toFixed(2)}</strong> vs buying separately.</p>` : '',
    '<p><strong>The ritual</strong></p>',
    '<ul>',
    ...stepLines,
    '</ul>',
    `<p><strong>Ingredients:</strong> ${esc(item.ingredients)}</p>`,
    '<p><strong>How to use</strong></p>',
    '<ul>',
    ...(item.usage || []).map((u) => `<li>${esc(u)}</li>`),
    '</ul>',
    `<p><em>${esc(item.compliance)}</em></p>`,
  ]
    .filter(Boolean)
    .join('\n');
}

function countEmDash(text) {
  return (text.match(/—/g) || []).length;
}

async function shopifyGraphqlViaApi(query, variables = {}) {
  const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  if (!token) throw new Error('SHOPIFY_ADMIN_ACCESS_TOKEN not set');

  const res = await fetch(`https://${STORE}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': token,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Admin API HTTP ${res.status}: ${JSON.stringify(json)}`);
  }
  if (json.errors?.length) {
    throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  }
  return json;
}

function resolveThemeDir() {
  if (process.env.DISURI_THEME_DIR) return process.env.DISURI_THEME_DIR;
  const candidates = [
    join(REPO_ROOT, '../Documents/_1_DISURIBeauty/DISURI-Beauty-Theme'),
    join(REPO_ROOT, '../DISURI-Beauty-Theme'),
    REPO_ROOT,
  ];
  for (const dir of candidates) {
    try {
      readFileSync(join(dir, 'config', 'settings_schema.json'), 'utf8');
      return dir;
    } catch {
      // try next
    }
  }
  return REPO_ROOT;
}

function shopifyGraphqlViaCli(query, variables = {}) {
  const themeDir = resolveThemeDir();
  const tmp = mkdtempSync(join(tmpdir(), 'disuri-gql-'));
  const queryFile = join(tmp, 'query.graphql');
  const varFile = join(tmp, 'variables.json');
  writeFileSync(queryFile, query.trim(), 'utf8');
  writeFileSync(varFile, JSON.stringify(variables), 'utf8');

  try {
    const args = [
      'npx',
      '@shopify/cli@4.2.0',
      'store',
      'execute',
      '-s',
      STORE,
      '-j',
      '--query-file',
      queryFile,
      '--variable-file',
      varFile,
    ];
    if (allowMutations) args.push('--allow-mutations');
    const out = execSync(args.join(' '), {
      encoding: 'utf8',
      cwd: themeDir,
      maxBuffer: 10 * 1024 * 1024,
      shell: '/bin/bash',
    });
    return JSON.parse(out);
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

async function shopifyGraphql(query, variables = {}) {
  if (process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) {
    return shopifyGraphqlViaApi(query, variables);
  }
  return shopifyGraphqlViaCli(query, variables);
}

function unwrapGraphqlData(result) {
  if (result?.data && typeof result.data === 'object') return result.data;
  return result;
}

async function findProduct(handle) {
  const result = await shopifyGraphql(FIND_QUERY, { handle });
  return unwrapGraphqlData(result)?.productByHandle ?? null;
}

async function updateProduct(productId, descriptionHtml) {
  const result = await shopifyGraphql(UPDATE_MUTATION, {
    input: { id: productId, descriptionHtml },
  });
  return unwrapGraphqlData(result)?.productUpdate;
}

function authMode() {
  if (process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) return 'admin-api-token';
  return 'shopify-store-execute';
}

async function verifyHandle(handle) {
  const product = await findProduct(handle);
  if (!product) {
    return { handle, ok: false, error: 'not found' };
  }
  const html = product.descriptionHtml || '';
  return {
    handle,
    ok: true,
    title: product.title,
    length: html.length,
    emDash: countEmDash(html),
    urbanLuxe: /urban luxe/i.test(html),
  };
}

async function main() {
  const byId = loadCatalog();
  const exportDir = join(REPO_ROOT, 'DISURI Beauty/theme-rebuild/product-copy-bodies');

  if (verifyOnly) {
    console.log(`Verify mode (${authMode()}) — ${STORE}\n`);
    const rows = [];
    for (const handle of Object.keys(HANDLE_TO_CATALOG)) {
      try {
        rows.push(await verifyHandle(handle));
      } catch (err) {
        rows.push({ handle, ok: false, error: err.message });
      }
    }
    console.table(rows);
    const failed = rows.filter((r) => !r.ok || r.emDash > 0 || r.urbanLuxe || r.length < 200);
    if (failed.length) {
      console.error(`\n${failed.length} handle(s) need attention.`);
      process.exit(1);
    }
    console.log('\nAll handles pass verification.');
    return;
  }

  const results = [];

  for (const [handle, catalogId] of Object.entries(HANDLE_TO_CATALOG)) {
    const item = byId[catalogId];
    if (!item) {
      console.warn(`Missing catalog entry for ${handle} (${catalogId})`);
      continue;
    }
    const bodyHtml = item.family === 'bundle' ? buildBundleHtml(item) : buildSkuHtml(item);

    if (dryRun || exportOnly) {
      if (exportOnly) {
        mkdirSync(exportDir, { recursive: true });
        writeFileSync(join(exportDir, `${handle}.html`), bodyHtml, 'utf8');
        console.log(`Exported: ${handle}.html`);
      } else {
        console.log(`\n=== ${handle} (${bodyHtml.length} chars) ===\n${bodyHtml.slice(0, 400)}...\n`);
      }
      continue;
    }

    if (!allowMutations) {
      console.error('Pass --allow-mutations to write to Shopify');
      process.exit(1);
    }

    try {
      const product = await findProduct(handle);
      if (!product?.id) {
        results.push({ handle, status: 'fail', error: 'product not found' });
        continue;
      }

      const update = await updateProduct(product.id, bodyHtml);
      const errors = update?.userErrors;
      if (errors?.length) {
        results.push({ handle, status: 'fail', error: errors.map((e) => e.message).join('; ') });
      } else {
        results.push({ handle, status: 'ok', chars: bodyHtml.length });
        console.log(`Updated: ${handle}`);
      }
    } catch (err) {
      results.push({ handle, status: 'fail', error: err.message });
      console.error(`Failed: ${handle} — ${err.message}`);
    }
  }

  if (!dryRun && !exportOnly && allowMutations) {
    console.log(`\nAuth: ${authMode()}`);
    console.table(results);
    const fails = results.filter((r) => r.status !== 'ok');
    if (fails.length) process.exit(1);
  }
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
