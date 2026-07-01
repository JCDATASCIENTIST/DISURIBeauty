#!/usr/bin/env node
/**
 * Print Zipify OCU relaunch QA checklist and verify theme embed state.
 * Usage: node scripts/zipify-ocu-qa-checklist.mjs
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');
const themeSettings = join(
  repoRoot,
  '../DISURI-Beauty-Theme/config/settings_data.json'
);

function checkThemeEmbeds() {
  if (!existsSync(themeSettings)) {
    console.log('⚠ Theme settings not found at', themeSettings);
    return;
  }
  const raw = readFileSync(themeSettings, 'utf8').replace(/^\/\*[\s\S]*?\*\/\s*/, '');
  const data = JSON.parse(raw);
  const blocks = data.current?.blocks ?? {};
  let appEmbed = null;
  let cartDrawer = null;
  for (const block of Object.values(blocks)) {
    const type = block.type ?? '';
    if (type.includes('one-click-upsell/blocks/app-embed')) appEmbed = block;
    if (type.includes('one-click-upsell/blocks/cart-drawer')) cartDrawer = block;
  }
  console.log('=== Theme OCU embed state ===\n');
  console.log(
    'Global app-embed:',
    appEmbed?.disabled === true ? '✓ DISABLED (correct)' : '✗ ENABLED (should be OFF)'
  );
  console.log(
    'Cart-drawer embed:',
    cartDrawer?.disabled === false ? '✓ ENABLED (correct)' : '✗ DISABLED (should be ON)'
  );
  console.log('');
}

const checklist = `
=== Zipify OCU QA Checklist ===

PRE-FLIGHT (Admin)
[ ] All In Checkout funnels paused/deleted in Zipify OCU
[ ] Post-purchase funnels A (Barrier), B (Firming), C (Catch-all) published
[ ] Funnel priority: Barrier=1, Firming=2, Catch-all=3
[ ] Cart drawer funnel: skincare $25–$75 only; no lip, no Complete System
[ ] Shopify Settings → Checkout → Post-purchase → Zipify OCU enabled

CHECKOUT (no overlay)
[ ] Add $27 skincare SKU → checkout completes without purple overlay
[ ] Checkout URL has NO _su_rec parameter
[ ] Pay now / express checkout buttons work

POST-PURCHASE
[ ] Complete test order → post-purchase page loads
[ ] Barrier buyer sees Barrier Rescue (Funnel A)
[ ] Collagen buyer sees Anti-Aging Duo (Funnel B)
[ ] Generic $25–$60 buyer sees Complete System (Funnel C)
[ ] Accept Upsell 1 → Upsell 2 appears; one-click charge succeeds
[ ] Decline Upsell 1 → Downsell at 10% off appears
[ ] Bundle already in cart → no post-purchase funnel

CART DRAWER
[ ] Cart $30 skincare → drawer shows toner OR barrier duo (not lip)
[ ] Cart under $25 → theme order bump only (no Zipify drawer duplicate)
[ ] Cart with bundle → no drawer upsell

KLAVIYO
[ ] Accept Complete System → tag system-buyer within 5 min
[ ] Accept Anti-Aging Duo → tag duo-buyer
[ ] Accept Barrier Rescue → tag barrier-buyer

Log results in: DISURI Beauty/theme-rebuild/zipify-ocu-baseline-metrics.md
`;

console.log(checklist);
checkThemeEmbeds();
