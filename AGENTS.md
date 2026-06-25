## Learned User Preferences

- Build the new theme on the existing Shopify store (`7874da-0f.myshopify.com`), not via a new store or dev-store transfer.
- Match the live storefront to the Claude Design Shopify UI kit in `DISURI Beauty/design-kit/claude-design/`, not generic Skeleton styling.
- Audit typography and responsive UX across the full shopping journey; apply rigorous mobile QA on every page. Keep product images 1:1; mobile hero = headline + CTAs only—no long subtext overlapping imagery.
- Defer ReCharge, Loox, and Affirm until ready; keep Loox reviews hidden until enough reviews (target end Q3 via Theme settings → App integrations, `show_loox_reviews: false` by default).
- After theme pushes, verify changes with a hard refresh (`Cmd+Shift+R`) on disuribeauty.com.
- Prefer hybrid migration: port commerce behavior from the old Dawn theme into v1 while keeping Claude Design styling.
- The active theme to update is **DISURI Beauty Theme v1** (`#161833353455`); do not confuse it with duplicate draft copies in admin.
- Storefront promo copy (hero, gift-strip, cart ladder) must reflect only real live offers—no false free-shipping or phantom $50/$100 gift tiers.
- Collapse gift-strip to a single honest **$25 → free lip gloss** tier; keep the section (do not remove it).
- Weekly gift Klaviyo popup (admin-side, not theme) should drive weekly gloss alerts toward a first **$25+ Skincare** order—not generic welcome copy.
- Homepage hero style is **`rested`** ("Skin that looks / rested. Every day."), not `ritual`.
- Do not create git commits unless explicitly asked.

## Learned Workspace Facts

- This workspace (`DISURIBeauty`) is the business/ops repo; Shopify theme source is `/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme/`.
- **Cursor** owns the theme repo and live pushes to `#161833353455`; **Claude Code** owns commerce/ops (products, collections, discounts, Klaviyo forms/popups/flows, Zipify OCU config, product copy, business docs).
- Live store: `7874da-0f.myshopify.com` (disuribeauty.com); live theme **DISURI Beauty Theme v1** `#161833353455`; rollback old Dawn `#142349074671` kept unpublished.
- Live theme push: `npx @shopify/cli@4.2.0 theme push --allow-live --theme 161833353455 --store 7874da-0f.myshopify.com` (use npx when global `shopify` is not on PATH). Admin GraphQL (products, pages) uses `shopify store execute` with write scopes—CLI 4.2.0 has no separate `graphql` subcommand. Product copy push: `scripts/update-product-descriptions.mjs` (Admin API token if set, else CLI).
- Live GWP: spend **$25 on Skincare collection** → 1 free lip gloss per order (automatic discount; weekly shade from `disuri.gift_of_week` shop metafields—theme announcement bar + cart ladder read these).
- 175 lip products are **unlisted** as the weekly gift pool (hidden from browse/collections; purchasable by direct link only).
- Homepage bundles grid uses the `bundles` smart collection populated by `bundle` product tags on skincare bundle SKUs.
- Docs: `DISURI Beauty/theme-rebuild/` (gift funnel, Klaviyo/Zipify playbooks, product-copy-bodies); research: `DISURI Beauty/research/` (Consensus library synced to theme via `scripts/build-research-asset.mjs` → `disuri-research-library.json`; collection filter education panel live); design kit: `DISURI Beauty/design-kit/claude-design/` (`catalog.js` via `disuri-catalog-*` snippets). Hero falls back to `the-complete-disuri-system` featured image when no Theme Editor background is set.
- Cart drawer shell is fixed in `layout/theme.liquid`; inner content refreshes via Section Rendering API. **Cart order bump** (Skincare < $25 → toner) in `disuri-cart-order-bump.liquid`; default handle `triple-collagen-firming-toner`.
- Collection filters use curated catalog-based tags (`disuri-product-filter-tags.liquid` + JS), not raw Shopify product tags alone.
- Gift funnel primary KPI: first **$25+ Skincare** order; post-checkout **Zipify OCU** stack = Complete System → subscription → Queens community.
- Order Value Booster app may still inject false free-shipping messaging on PDPs—disable or reconfigure in admin, not theme code.
