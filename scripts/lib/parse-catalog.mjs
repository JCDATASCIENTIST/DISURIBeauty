import { readFileSync } from 'fs';

export function loadCatalogFromFile(catalogPath) {
  const src = readFileSync(catalogPath, 'utf8');
  const catalogMatch = src.match(/window\.CATALOG = (\[[\s\S]*?\n\]);/);
  const bundlesMatch = src.match(/window\.BUNDLES = (\[[\s\S]*?\n\]);/);
  if (!catalogMatch || !bundlesMatch) {
    throw new Error('Could not parse window.CATALOG / window.BUNDLES from catalog.js');
  }
  // eslint-disable-next-line no-eval
  const CATALOG = eval(catalogMatch[1]);
  // eslint-disable-next-line no-eval
  const BUNDLES = eval(bundlesMatch[1]);
  return { src, CATALOG, BUNDLES };
}

export function catalogById(CATALOG, BUNDLES) {
  return Object.fromEntries([...CATALOG, ...BUNDLES].map((item) => [item.id, item]));
}
