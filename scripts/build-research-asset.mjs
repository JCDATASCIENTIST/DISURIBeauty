#!/usr/bin/env node
/**
 * Compile filter education copy for theme asset (no Consensus sources).
 *
 * Usage:
 *   node scripts/build-research-asset.mjs
 *   node scripts/build-research-asset.mjs --output ../DISURI-Beauty-Theme/assets/disuri-filter-education.json
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const RESEARCH = join(REPO_ROOT, 'DISURI Beauty/research');
const outputArg = process.argv.indexOf('--output');
const outputPath =
  outputArg !== -1
    ? process.argv[outputArg + 1]
    : join(REPO_ROOT, '../DISURI-Beauty-Theme/assets/disuri-filter-education.json');

function loadJson(name) {
  return JSON.parse(readFileSync(join(RESEARCH, name), 'utf8'));
}

const education = loadJson('education-copy.json');
const taxonomy = loadJson('taxonomy.json');

const asset = {
  version: education.version,
  updated: new Date().toISOString().slice(0, 10),
  disclaimer_en: taxonomy.disclaimer_en,
  disclaimer_es: taxonomy.disclaimer_es,
  filters: education.filters,
};

writeFileSync(outputPath, JSON.stringify(asset), 'utf8');
console.log(`Wrote filter education (${Object.keys(asset.filters).length} filters) → ${outputPath}`);
