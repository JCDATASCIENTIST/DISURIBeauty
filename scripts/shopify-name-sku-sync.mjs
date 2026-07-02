#!/usr/bin/env node
/**
 * Sync canonical product names + UPC SKUs/barcodes from the product master
 * into Shopify.
 *
 * Master: DISURI Beauty/product-master/product-master.csv
 *         (rebuild with: python3 scripts/build-product-master.py)
 *
 * Auth (first match wins):
 *   1. SHOPIFY_ADMIN_ACCESS_TOKEN + SHOPIFY_STORE in env or .env.local
 *   2. shopify store execute (requires: shopify store auth --scopes read_products,write_products)
 *
 * Usage:
 *   node scripts/shopify-name-sku-sync.mjs --export           # pull full catalog -> source/shopify-catalog.json
 *   node scripts/shopify-name-sku-sync.mjs --dry-run          # match + write shopify-sync-report.md (no writes)
 *   node scripts/shopify-name-sku-sync.mjs --allow-mutations  # apply title/sku/barcode updates
 *   node scripts/shopify-name-sku-sync.mjs --allow-mutations --include-skincare-titles
 *
 * Guardrails:
 *   - Handles are NEVER touched (SEO/links).
 *   - Shipping profiles are never touched.
 *   - Skincare + bundle titles are SEO-crafted; they are kept as-is unless
 *     --include-skincare-titles is passed. SKU/barcode still get the UPC.
 *   - Products that cannot be confidently matched to a GTIN are reported,
 *     never guessed.
 */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { tmpdir } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const PM_DIR = join(REPO_ROOT, 'DISURI Beauty/product-master');
const MASTER_CSV = join(PM_DIR, 'product-master.csv');
const CATALOG_JSON = join(PM_DIR, 'source/shopify-catalog.json');
const REPORT_MD = join(PM_DIR, 'shopify-sync-report.md');
const STORE = process.env.SHOPIFY_STORE || '7874da-0f.myshopify.com';
const API_VERSION = process.env.SHOPIFY_API_VERSION || '2025-04';

const exportOnly = process.argv.includes('--export');
const dryRun = process.argv.includes('--dry-run');
const allowMutations = process.argv.includes('--allow-mutations');
const includeSkincareTitles = process.argv.includes('--include-skincare-titles');

// Handles whose live titles are deliberately SEO-crafted; keep titles unless
// --include-skincare-titles. SKU/barcode are still synced.
const PROTECTED_TITLE_HANDLES = new Set([
  'disuri-beauty-ultimate-snail-mucin-cream',
  'triple-collagen-firming-cream',
  'hyaluronic-acid-intense-hydration-firming-cream',
  'triple-collagen-firming-toner',
  'triple-collagen-korean-face-wash',
  'triple-collagen-eye-cream-korean-anti-aging',
  'triple-collagen-firming-essence',
  'the-complete-disuri-system',
  'the-anti-aging-power-duo',
  'the-barrier-rescue-system',
  'the-glass-skin-starter',
]);

// Skincare + bundle handles -> GTIN-12 (bundles get GTINs once GS1 assigns them;
// see scripts/build-gs1-import.py which proposes the next three).
const HANDLE_TO_GTIN = {
  'hyaluronic-acid-intense-hydration-firming-cream': '850064676310',
  'triple-collagen-firming-toner': '850064676327',
  'triple-collagen-firming-cream': '850064676334',
  'triple-collagen-eye-cream-korean-anti-aging': '850064676341',
  'triple-collagen-firming-essence': '850064676358',
  'triple-collagen-korean-face-wash': '850064676365',
  'disuri-beauty-ultimate-snail-mucin-cream': '850064676372',
  'shimmer-glam-collection': '850066107270',
  'candy-crush-collection': '850066107263',
  // Bundles registered in GS1 Data Hub 2026-07-02; 386 was edited in Data Hub
  // from Barrier Rescue (discontinued, never traded) to Glass Skin Starter.
  'the-complete-disuri-system': '850066107362',
  'the-anti-aging-power-duo': '850066107379',
  'the-glass-skin-starter': '850066107386',
};

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

// ---------------------------------------------------------------- GraphQL

async function shopifyGraphqlViaApi(query, variables = {}) {
  const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const res = await fetch(`https://${STORE}/admin/api/${API_VERSION}/graphql.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Shopify-Access-Token': token },
    body: JSON.stringify({ query, variables }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`Admin API HTTP ${res.status}: ${JSON.stringify(json)}`);
  if (json.errors?.length) throw new Error(`GraphQL errors: ${JSON.stringify(json.errors)}`);
  return json.data ?? json;
}

function shopifyGraphqlViaCli(query, variables = {}) {
  const tmp = mkdtempSync(join(tmpdir(), 'disuri-gql-'));
  const queryFile = join(tmp, 'query.graphql');
  const varFile = join(tmp, 'variables.json');
  writeFileSync(queryFile, query.trim(), 'utf8');
  writeFileSync(varFile, JSON.stringify(variables), 'utf8');
  try {
    const args = [
      'npx', '@shopify/cli@4.2.0', 'store', 'execute',
      '-s', STORE, '-j',
      '--query-file', queryFile,
      '--variable-file', varFile,
    ];
    if (allowMutations) args.push('--allow-mutations');
    const out = execSync(args.join(' '), {
      encoding: 'utf8',
      cwd: REPO_ROOT,
      maxBuffer: 20 * 1024 * 1024,
      shell: '/bin/bash',
    });
    const parsed = JSON.parse(out);
    return parsed?.data ?? parsed;
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

async function shopifyGraphql(query, variables = {}) {
  if (process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) return shopifyGraphqlViaApi(query, variables);
  return shopifyGraphqlViaCli(query, variables);
}

// ---------------------------------------------------------------- Export

const PRODUCTS_QUERY = `
  query Products($cursor: String) {
    products(first: 100, after: $cursor) {
      pageInfo { hasNextPage endCursor }
      nodes {
        id
        title
        handle
        status
        productType
        variants(first: 20) {
          nodes { id title sku barcode }
        }
      }
    }
  }
`;

async function exportCatalog() {
  const all = [];
  let cursor = null;
  for (;;) {
    const data = await shopifyGraphql(PRODUCTS_QUERY, { cursor });
    const page = data.products;
    for (const p of page.nodes) {
      all.push({
        id: p.id,
        title: p.title,
        handle: p.handle,
        status: p.status,
        product_type: p.productType,
        variants: p.variants.nodes.map((v) => ({
          id: v.id,
          title: v.title,
          sku: v.sku || '',
          barcode: v.barcode || '',
        })),
      });
    }
    if (!page.pageInfo.hasNextPage) break;
    cursor = page.pageInfo.endCursor;
  }
  writeFileSync(CATALOG_JSON, JSON.stringify(all, null, 2));
  console.log(`Exported ${all.length} products -> ${CATALOG_JSON}`);
  return all;
}

// ---------------------------------------------------------------- Master CSV

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== '' || row.length) { row.push(field); rows.push(row); }
  const [hdr, ...rest] = rows;
  return rest.map((r) => Object.fromEntries(hdr.map((h, i) => [h, r[i] ?? ''])));
}

function loadMaster() {
  return parseCsv(readFileSync(MASTER_CSV, 'utf8'));
}

// ---------------------------------------------------------------- Matching

const norm = (s) => (s || '').toLowerCase().replace(/[’'"“”]/g, "'").replace(/\s+/g, ' ').trim();
const slugify = (s) =>
  norm(s).replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function buildMasterIndexes(master) {
  const byGtin = new Map();
  const byCode = new Map(); // "<prefix-normalized code>" -> rows[]
  const byShade = new Map(); // slug(shade) -> rows[]
  for (const m of master) {
    if ((m.notes || '').includes('INVALID GTIN')) continue; // never write a bad UPC
    byGtin.set(m.gtin12, m);
    if (m.internal_code) {
      const key = m.internal_code.replace('#', '').toLowerCase();
      if (!byCode.has(key)) byCode.set(key, []);
      byCode.get(key).push(m);
    }
    for (const shade of new Set([m.shade_name])) {
      if (!shade) continue;
      const key = slugify(shade);
      if (!byShade.has(key)) byShade.set(key, []);
      byShade.get(key).push(m);
    }
  }
  return { byGtin, byCode, byShade };
}

function lineMatchesTitle(masterRow, title) {
  const t = norm(title);
  const line = norm(masterRow.product_line);
  if (!line) return false;
  if (t.includes(line)) return true;
  // Loose family checks (Shopify titles are messy).
  if (line.includes('glossy blast') && t.includes('glossy')) return true;
  if (line.includes('shimmer blast') && t.includes('shimmer')) return true;
  if (line.includes('liquid lipstick') && t.includes('liquid lipstick')) return true;
  if (line.includes('matte bullet') && (t.includes('bullet') || t.includes('matte lipstick'))) return true;
  if (line.includes('nail polish') && t.includes('nail polish')) return true;
  if (line.includes('plumping') && t.includes('plumping')) return true;
  if (line.includes('lip liner') && t.includes('lip liner')) return true;
  if (line.includes('lip mask') && t.includes('lip mask')) return true;
  return false;
}

function gtinMatch(p, idx) {
  for (const v of p.variants) {
    for (const cand of [v.barcode, v.sku]) {
      const digits = (cand || '').replace(/\D/g, '');
      if (digits.length === 12 && idx.byGtin.has(digits)) {
        return { row: idx.byGtin.get(digits), how: `gtin:${cand === v.barcode ? 'barcode' : 'sku'}` };
      }
      if (digits.length === 13 && idx.byGtin.has(digits.slice(1))) {
        return { row: idx.byGtin.get(digits.slice(1)), how: 'gtin13' };
      }
    }
  }
  return null;
}

function codeMatch(p, idx) {
  // Internal code at the end of the handle (e.g. ...-forbidden-red-m61, ...-27).
  // Handles were auto-generated from the original product names, which
  // embedded the true internal code — more trustworthy than hand-typed barcodes.
  const hm = p.handle.match(/-((?:s|m)\d{1,3}|\d{1,3})$/i);
  if (!hm) return null;
  const code = hm[1].toLowerCase();
  const rows = idx.byCode.get(code) || [];
  const fit = rows.filter((r) => lineMatchesTitle(r, p.title));
  if (fit.length === 1) return { row: fit[0], how: `handle-code:${code}` };
  return null;
}

function matchProduct(p, idx) {
  const byGtin = gtinMatch(p, idx);
  const byCode = codeMatch(p, idx);
  // Barcode and handle-code disagree -> the barcode was entered wrong in
  // Shopify (seen in the wild: two products sharing one barcode). Handle wins.
  if (byGtin && byCode && byGtin.row.gtin12 !== byCode.row.gtin12) {
    return { ...byCode, how: `${byCode.how} (WRONG barcode ${byGtin.row.gtin12} on product — will be corrected)` };
  }
  if (byGtin) return byGtin;
  // Known handle map (skincare, bundles).
  if (HANDLE_TO_GTIN[p.handle]) {
    return { row: idx.byGtin.get(HANDLE_TO_GTIN[p.handle]), how: 'handle-map' };
  }
  if (byCode) return byCode;
  // Shade name from title suffix ("... - Shade Name").
  const tm = p.title.match(/-\s*([^-]+?)\s*$/);
  if (tm) {
    const key = slugify(tm[1]);
    const rows = idx.byShade.get(key) || [];
    const fit = rows.filter((r) => lineMatchesTitle(r, p.title));
    if (fit.length === 1) return { row: fit[0], how: `shade:${tm[1].trim()}` };
  }
  return null;
}

// ---------------------------------------------------------------- Plan

function buildPlan(catalog, master) {
  const idx = buildMasterIndexes(master);
  const plan = [];
  const unmatched = [];
  const usedGtins = new Set();
  const gtinOwners = new Map();

  const active = catalog.filter((p) => p.status !== 'ARCHIVED'); // archived products are never touched
  const matches = active.map((p) => ({ p, m: matchProduct(p, idx) }));

  // Safety: if two products resolve to the same GTIN, neither is touched.
  for (const { p, m } of matches) {
    if (m?.row) {
      if (!gtinOwners.has(m.row.gtin12)) gtinOwners.set(m.row.gtin12, []);
      gtinOwners.get(m.row.gtin12).push(p.handle);
    }
  }

  for (const { p, m: rawMatch } of matches) {
    let m = rawMatch;
    if (m?.row && gtinOwners.get(m.row.gtin12).length > 1) {
      console.warn(
        `GTIN collision on ${m.row.gtin12}: ${gtinOwners.get(m.row.gtin12).join(', ')} — skipping both`
      );
      m = null;
    }
    if (!m || !m.row) {
      unmatched.push(p);
      continue;
    }
    usedGtins.add(m.row.gtin12);
    const protectedTitle = PROTECTED_TITLE_HANDLES.has(p.handle) && !includeSkincareTitles;
    const wantTitle = protectedTitle ? p.title : m.row.canonical_name;
    const changes = {
      title: wantTitle !== p.title ? wantTitle : null,
      variants: p.variants
        .filter((v) => v.sku !== m.row.gtin12 || v.barcode !== m.row.gtin12)
        .map((v) => ({ id: v.id, sku: m.row.gtin12, barcode: m.row.gtin12 })),
    };
    if (changes.title || changes.variants.length) {
      plan.push({ product: p, master: m.row, how: m.how, changes, protectedTitle });
    }
  }
  const masterUnmatched = master.filter(
    (r) => !usedGtins.has(r.gtin12) && r.status !== 'Archived'
  );
  return { plan, unmatched, masterUnmatched };
}

function writeReport({ plan, unmatched, masterUnmatched }, catalog) {
  const lines = [
    '# Shopify sync report',
    '',
    `Generated ${new Date().toISOString()} by scripts/shopify-name-sku-sync.mjs`,
    '',
    `- Shopify products: ${catalog.length}`,
    `- Matched with pending changes: ${plan.length}`,
    `- Shopify products with no confident master match (NOT touched): ${unmatched.length}`,
    `- Master GTINs with no Shopify product: ${masterUnmatched.length}`,
    '',
    '## Pending changes',
    '',
    '| Handle | Match via | Title change | SKU/barcode -> |',
    '|---|---|---|---|',
  ];
  for (const item of plan) {
    const t = item.changes.title
      ? `"${item.product.title}" -> "${item.changes.title}"`
      : item.protectedTitle
        ? '(protected — kept)'
        : '(already correct)';
    const v = item.changes.variants.length ? item.master.gtin12 : '(already correct)';
    lines.push(`| ${item.product.handle} | ${item.how} | ${t.replace(/\|/g, '/')} | ${v} |`);
  }
  lines.push('', '## Shopify products with no confident match (manual review)', '');
  lines.push('| Handle | Title | Current SKU |', '|---|---|---|');
  for (const p of unmatched) {
    lines.push(`| ${p.handle} | ${p.title.replace(/\|/g, '/')} | ${p.variants[0]?.sku || ''} |`);
  }
  lines.push('', '## Master GTINs not found in Shopify', '');
  lines.push('| GTIN-12 | Canonical name | Status |', '|---|---|---|');
  for (const r of masterUnmatched) {
    lines.push(`| ${r.gtin12} | ${r.canonical_name.replace(/\|/g, '/')} | ${r.status} |`);
  }
  lines.push('');
  writeFileSync(REPORT_MD, lines.join('\n'));
  console.log(`Report -> ${REPORT_MD}`);
}

// ---------------------------------------------------------------- Mutations

const SYNC_MUTATION = `
  mutation SyncProduct($product: ProductInput!, $productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productUpdate(input: $product) {
      product { id handle title }
      userErrors { field message }
    }
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      productVariants { id sku barcode }
      userErrors { field message }
    }
  }
`;

const TITLE_ONLY_MUTATION = `
  mutation SyncTitle($product: ProductInput!) {
    productUpdate(input: $product) {
      product { id handle title }
      userErrors { field message }
    }
  }
`;

const VARIANTS_ONLY_MUTATION = `
  mutation SyncVariants($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
    productVariantsBulkUpdate(productId: $productId, variants: $variants) {
      productVariants { id sku barcode }
      userErrors { field message }
    }
  }
`;

async function applyPlan(plan) {
  const results = [];
  let i = 0;
  for (const item of plan) {
    i++;
    const { product, changes } = item;
    try {
      let data;
      if (changes.title && changes.variants.length) {
        data = await shopifyGraphql(SYNC_MUTATION, {
          product: { id: product.id, title: changes.title },
          productId: product.id,
          variants: changes.variants.map((v) => ({
            id: v.id,
            barcode: v.barcode,
            inventoryItem: { sku: v.sku },
          })),
        });
      } else if (changes.title) {
        data = await shopifyGraphql(TITLE_ONLY_MUTATION, {
          product: { id: product.id, title: changes.title },
        });
      } else {
        data = await shopifyGraphql(VARIANTS_ONLY_MUTATION, {
          productId: product.id,
          variants: changes.variants.map((v) => ({
            id: v.id,
            barcode: v.barcode,
            inventoryItem: { sku: v.sku },
          })),
        });
      }
      const errors = [
        ...(data?.productUpdate?.userErrors || []),
        ...(data?.productVariantsBulkUpdate?.userErrors || []),
      ];
      if (errors.length) {
        results.push({ handle: product.handle, status: 'fail', error: errors.map((e) => e.message).join('; ') });
        console.error(`[${i}/${plan.length}] FAIL ${product.handle}: ${errors.map((e) => e.message).join('; ')}`);
      } else {
        results.push({ handle: product.handle, status: 'ok' });
        console.log(`[${i}/${plan.length}] ok ${product.handle}`);
      }
    } catch (err) {
      results.push({ handle: product.handle, status: 'fail', error: err.message });
      console.error(`[${i}/${plan.length}] FAIL ${product.handle}: ${err.message}`);
    }
  }
  return results;
}

// ---------------------------------------------------------------- Main

async function main() {
  if (exportOnly) {
    await exportCatalog();
    return;
  }

  const catalog = JSON.parse(readFileSync(CATALOG_JSON, 'utf8'));
  const master = loadMaster();
  const result = buildPlan(catalog, master);
  writeReport(result, catalog);

  console.log(`\nMatched w/ changes: ${result.plan.length} | unmatched Shopify: ${result.unmatched.length} | master-only: ${result.masterUnmatched.length}`);

  if (dryRun || !allowMutations) {
    if (!dryRun && !allowMutations) console.log('\nDry run (pass --allow-mutations to write).');
    return;
  }

  const results = await applyPlan(result.plan);
  const fails = results.filter((r) => r.status !== 'ok');
  console.log(`\nDone: ${results.length - fails.length} ok, ${fails.length} failed.`);
  if (fails.length) process.exit(1);
}

main().catch((e) => {
  console.error(e.message || e);
  process.exit(1);
});
