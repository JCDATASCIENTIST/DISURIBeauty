# Product Copy Audit — 2026-06-25

**Owner:** Claude Code (Shopify admin) · **Source of truth:** [`catalog.js`](../design-kit/claude-design/catalog.js)  
**Method:** Live PDP fetch + catalog-aligned rewrite script  
**Related:** [storefront-audit-2026-06-25.md](storefront-audit-2026-06-25.md)

---

## Summary

| Metric | Before audit | After push (2026-06-25) |
|--------|--------------|-------------------------|
| Products audited | 10 | 10 |
| Em dashes in body | 9 / 10 | **0 / 10** |
| Phantom $50/$100 tiers | 0 | 0 |
| Catalog-aligned copy | 1 / 10 (barrier-rescue partial) | **10 / 10** |

---

## Pre-audit findings (live `body_html`)

| Handle | Title | Body len | Em dash | Phantom tier | Issue |
|--------|-------|----------|---------|--------------|-------|
| `triple-collagen-firming-cream` | Triple Collagen Firming Cream | 13,105 | Yes | No | Legacy long-form urban copy |
| `disuri-beauty-ultimate-snail-mucin-cream` | Ultimate Snail Mucin Cream | 15,859 | Yes | No | Old "Urban Luxe" marketing block |
| `hyaluronic-acid-intense-hydration-firming-cream` | HA Intense Hydration Cream | 2,572 | Yes | No | Em dashes, verbose |
| `triple-collagen-korean-face-wash` | Triple Collagen Firming Foam | 8,994 | Yes | No | Legacy anti-aging hype |
| `triple-collagen-firming-toner` | Triple Collagen Firming Toner | 2,702 | Yes | No | Em dashes |
| `triple-collagen-firming-essence` | Triple Collagen Firming Essence | 1,506 | Yes | No | Emoji bullets, drug-adjacent claims |
| `triple-collagen-eye-cream-korean-anti-aging` | Triple Collagen Eye Cream | 727 | Yes | No | Thin but off-voice |
| `the-complete-disuri-system` | Complete DISURI System | 23,543 | Yes | No | Zipify-era long HTML |
| `the-anti-aging-power-duo` | Anti-Aging Power Duo | 695 | Yes | No | Em dash in subtitle |
| `the-barrier-rescue-system` | Barrier Rescue System | 105 | No | No | **Too thin** — needs full bundle copy |

---

## Rewrite approach

Each PDP body replaced with catalog-aligned HTML:

- **SKUs:** benefit paragraph · size · ingredients · usage `<ul>` · compliance `<em>`
- **Bundles:** benefit · save line · ritual steps · ingredients · usage · compliance
- **Rules:** No em dashes · appearance-only claims · ppm stats from catalog · no phantom gift tiers

**Automation:** [`scripts/update-product-descriptions.mjs`](../../scripts/update-product-descriptions.mjs)

```bash
# Preview HTML locally
node scripts/update-product-descriptions.mjs --dry-run

# Export paste-ready HTML files (done 2026-06-25)
node scripts/update-product-descriptions.mjs --export
# → DISURI Beauty/theme-rebuild/product-copy-bodies/*.html

# Apply to Shopify (requires store auth with write_products or SHOPIFY_ADMIN_ACCESS_TOKEN)
node scripts/update-product-descriptions.mjs --allow-mutations

# Post-push verification via Admin API
node scripts/update-product-descriptions.mjs --verify-only
```

Run from `DISURIBeauty` repo; uses `shopify store execute` (CLI 4.2.0) or Admin API token against `7874da-0f.myshopify.com`.

---

## Post-update verification

1. Hard refresh each PDP (`Cmd+Shift+R`)
2. Search page source for `—` and `$50` / `$100` gift language
3. Confirm theme snippets (`disuri-catalog-benefit`) still match admin body tone
4. Re-run [`scripts/storefront-audit.mjs`](../../scripts/storefront-audit.mjs) on `/products/*` URLs

---

## Status checklist

- [x] Audit complete (10 handles)
- [x] Rewrite script authored (`update-product-descriptions.mjs`)
- [x] HTML bodies exported to [`product-copy-bodies/`](product-copy-bodies/) (10 files)
- [x] Admin bodies updated via `shopify store execute` + `write_products` (2026-06-25)
- [x] Live spot-check: all 10 PDPs — 0 em dashes, no Urban Luxe, Barrier Rescue 1,123 chars, Complete System 1,420 chars

**2026-06-25 push (Cursor):** Re-authed `shopify store auth` with `write_products`. Fixed script CLI arg joining + GraphQL response unwrapping. All 10 `productUpdate` mutations succeeded. API `--verify-only` and cache-busted live fetch confirm catalog-aligned bodies on disuribeauty.com.

---

## Post-push body lengths (Admin `descriptionHtml`)

| Handle | Chars | Em dash | Urban Luxe |
|--------|-------|---------|------------|
| `disuri-beauty-ultimate-snail-mucin-cream` | 683 | 0 | No |
| `triple-collagen-firming-cream` | 585 | 0 | No |
| `hyaluronic-acid-intense-hydration-firming-cream` | 565 | 0 | No |
| `triple-collagen-firming-toner` | 587 | 0 | No |
| `triple-collagen-korean-face-wash` | 703 | 0 | No |
| `triple-collagen-eye-cream-korean-anti-aging` | 535 | 0 | No |
| `triple-collagen-firming-essence` | 995 | 0 | No |
| `the-complete-disuri-system` | 1,420 | 0 | No |
| `the-anti-aging-power-duo` | 1,141 | 0 | No |
| `the-barrier-rescue-system` | 1,123 | 0 | No |

---

## Handoff — Claude Code

1. Run mutation script or paste dry-run HTML into Shopify Admin → Products → Description
2. Confirm Zipify OCU and Klaviyo playbooks in same Phase 3 batch:
   - [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md)
   - [zipify-ocu-complete-system-playbook.md](zipify-ocu-complete-system-playbook.md)
