#!/usr/bin/env node
/**
 * Compile Consensus research library for theme asset.
 *
 * Usage:
 *   node scripts/build-research-asset.mjs
 *   node scripts/build-research-asset.mjs --output ../DISURI-Beauty-Theme/assets/disuri-research-library.json
 *   node scripts/build-research-asset.mjs --approved-only
 */
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const RESEARCH = join(REPO_ROOT, 'DISURI Beauty/research');
const approvedOnly = process.argv.includes('--approved-only');
const outputArg = process.argv.indexOf('--output');
const outputPath =
  outputArg !== -1
    ? process.argv[outputArg + 1]
    : join(REPO_ROOT, '../DISURI-Beauty-Theme/assets/disuri-research-library.json');

function stripEmDash(text) {
  return String(text)
    .replace(/\s*—\s*/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function loadJson(name) {
  return JSON.parse(readFileSync(join(RESEARCH, name), 'utf8'));
}

function compactSource(source) {
  return {
    id: source.id,
    title: source.title,
    authors: source.authors,
    year: source.year,
    journal: source.journal,
    study_type: source.study_type,
    citation_count: source.citation_count || 0,
    url: source.url,
    summary_en: stripEmDash(source.summary_en),
    summary_es: stripEmDash(source.summary_es),
    tags: source.tags,
  };
}

const library = loadJson('research-library.json');
const education = loadJson('education-copy.json');
const taxonomy = loadJson('taxonomy.json');

const sources = library.sources
  .filter((s) => (approvedOnly ? s.approved === true : true))
  .map(compactSource);

const asset = {
  version: library.version,
  updated: new Date().toISOString().slice(0, 10),
  disclaimer_en: taxonomy.disclaimer_en,
  disclaimer_es: taxonomy.disclaimer_es,
  filters: education.filters,
  sources,
};

writeFileSync(outputPath, JSON.stringify(asset), 'utf8');
console.log(`Wrote ${sources.length} sources → ${outputPath}`);
