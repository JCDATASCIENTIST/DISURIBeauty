## Learned User Preferences

- Build the new theme on the existing Shopify store (`7874da-0f.myshopify.com`), not via a new store or dev-store transfer.
- Match the live storefront to the Claude Design Shopify UI kit in `DISURI Beauty/design-kit/claude-design/`, not generic Skeleton styling.
- Audit typography and responsive UX across the full shopping journey; apply rigorous mobile QA on every page. Keep product images 1:1; mobile hero = headline + CTAs only—no long subtext overlapping imagery.
- Defer ReCharge, Loox, and Affirm until ready; keep Loox reviews hidden until enough reviews (target end Q3 via Theme settings → App integrations, `show_loox_reviews: false` by default).
- After theme pushes, verify changes with a hard refresh (`Cmd+Shift+R`) on disuribeauty.com.
- The active theme to update is **DISURI Beauty Theme v1** (`#161833353455`); do not confuse it with duplicate draft copies in admin.
- Core skincare SKUs must stay on the **Shopify Collective** shipping profile for retailer network sales—do not reassign them to General profile.
- Storefront promo, gift-strip, and weekly-gift messaging must reflect only the real **$25 Skincare → free lip gloss** offer (single tier; keep gift-strip section).
- Homepage hero style is **`rested`** ("Skin that looks / rested. Every day."), not `ritual`.
- Weekly gift Klaviyo popup (admin-side, not theme) should drive weekly gloss alerts toward a first **$25+ Skincare** order—not generic welcome copy.
- Add-to-bag CTAs must be always visible—full-width primary buttons, not ghost `btn-tertiary` on dark/noir sections.
- Checkout after add must be obvious: inline **Checkout** on skin-guide bundle hero; pinned **Checkout · $total** in cart drawer; skin-guide bundle quick-add does not auto-open the drawer.
- Do not create git commits unless explicitly asked.

## Open Handoffs → Cursor (theme)

- **SKU/name sync — DONE incl. bundles (2026-07-02).** Product master + scripts in
 `DISURI Beauty/product-master/` + `scripts/build-product-master.py`,
 `scripts/shopify-name-sku-sync.mjs`, `scripts/build-gs1-import.py`; skill:
 `.cursor/skills/disuri-sku-sync/`. Shopify: 173 products renamed/UPC'd (SKU=barcode=UPC),
 verified converged; 16 plumpers + `shimmer-glam-lip-gloss` dup archived. GS1 corrected
 file uploaded; bundle GTINs confirmed: Complete System 850066107362, Anti-Aging Duo
 850066107379, Glass Skin Starter 850066107386. Joel's remaining manual items:
 (1) Data Hub edit of 850066107386 Barrier→Glass (see `gs1-386-edit-instructions.md`),
 (2) archive dup GTINs 850066107188 (Essence) + 850066107195 (Ultra Plumping Mango),
 (3) skim `conflict-review.md` (74 GS1-default shade conflicts; Citrus Queen + Sugar Pie
 confirmed GS1-correct). Shopify auth: CLI 4.2.0 stored session (`store auth`); 4.3.0
 can't read it — stay on 4.2.0.

- **Barrier Rescue System ELIMINATED → Glass Skin Starter (2026-07-02).** Joel keeps
 Glass Skin Starter ($67.48 snail+HA duo, now ACTIVE); Barrier Rescue archived on
 Shopify and swapped everywhere: theme (skin-guide, collection cards, catalog snippets,
 locales, filter education — pushed live), Obsidian KB vault (notes moved to
 `4-Archives/DISURI-Product-Library/`, new `Bundle-Glass-Skin-Starter.md/.es.md`,
 pushed to vault main), `catalog.js` (`glass-starter` id), `kb-sync-map.json`,
 `update-product-descriptions.mjs`. Never resurrect handle `the-barrier-rescue-system`.
 Still referencing it (Claude Code/admin side): Zipify OCU funnels + Klaviyo abandon
 emails + historical playbooks in `theme-rebuild/`.

- **PDP gallery fixed (2026-07-02).** Root cause: `disuri-pdp.js` targeted wrong id
 (`pdp-featured-image` exists now; also cleared `srcset` on swap) — thumbnails now
 switch main image; click-to-zoom lightbox added (`.pdp-lightbox` in
 `disuri-shopify.css`). Verified live via browser. Theme repo re-pulled fresh to
 `~/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme/` (old copy had vanished) —
 now a fresh local-only git repo (no remote yet; old origin was read-only
 skeleton-theme). Create a GitHub remote before relying on it as backup.
 Live theme on Shopify (#161833353455) is the source of truth.

- **Auto-rotate Gift-of-Week by date — DONE (2026-07-01).** Theme uses
  `snippets/disuri-gift-week-line.liquid` (Thu 00:00 ET windows, matches BXGY + Klaviyo).
  Launch schedule: `DISURI Beauty/theme-rebuild/gift-rotation-calendar.md`.

- **Cart drawer polish (2026-06-29):** v2 layout shipped (items first, pinned checkout footer) but UX
  still not approved by Joel — see `DISURI Beauty/theme-rebuild/session-handoff-2026-06-29-cro-cart-ux.md`.

## Learned Workspace Facts

- This workspace (`DISURIBeauty`) is the business/ops repo; Shopify theme source is `/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme/`.
- **Cursor** owns the theme repo, live pushes to `#161833353455`, and Klaviyo REST API via `/klaviyo` skill (`~/.cursor/skills/klaviyo/`, `KLAVIYO_API_KEY` in `.env.local`); **Claude Code** owns commerce/ops admin (products, discounts, Klaviyo forms/popups/flows UI, Zipify OCU, product copy, business docs).
- Live store: `7874da-0f.myshopify.com` (disuribeauty.com); live theme **DISURI Beauty Theme v1** `#161833353455`; rollback old Dawn `#142349074671` kept unpublished.
- Live theme push: `npx @shopify/cli@4.2.0 theme push --allow-live --theme 161833353455 --store 7874da-0f.myshopify.com` (use npx when global `shopify` is not on PATH). Admin GraphQL (products, pages) uses `shopify store execute` with write scopes—CLI 4.2.0 has no separate `graphql` subcommand. Product copy push: `scripts/update-product-descriptions.mjs` (Admin API token if set, else CLI).
- Live GWP: spend **$25 on Skincare collection** → 1 free lip product per order (automatic BXGY discount + theme auto-add). Weekly shade from date resolver (`disuri-gift-week-line.liquid`); optional `disuri.gift_of_week_label` overrides display name only.
- 175 lip products are **unlisted** as the weekly gift pool (hidden from browse/collections; purchasable by direct link only).
- Shipping profiles: **Shopify Collective** = core skincare (retailer network); **General** = lip glosses/DTC; both US zones include **Standard US Shipping $5.95** flat fallback when carrier rates fail.
- Docs: `DISURI Beauty/theme-rebuild/` (gift funnel, Klaviyo/Zipify playbooks, product-copy-bodies); design kit: `DISURI Beauty/design-kit/claude-design/` (`catalog.js` via `disuri-catalog-*` snippets). Hero falls back to `the-complete-disuri-system` featured image when no Theme Editor background is set.
- **KB copy workflow:** Obsidian vault is a git submodule at `reference/kb` (`JCDATASCIENTIST/obsidian-vault`). Author product copy in `6-Product-Library/*.md`; sync with `node scripts/sync-kb.mjs` → `catalog.js` → `update-product-descriptions.mjs`. Fresh clones: `git clone --recurse-submodules`. Playbook: `DISURI Beauty/theme-rebuild/kb-sync-playbook.md`. Cursor command: `.cursor/commands/sync-kb-copy.md`.
- **Skin guide** on homepage `#skin-guide`: concern card grid, bundle-first panel; bundle hero uses `data-bundle-hero` + `disuri-skin-guide.js` for post-add checkout state.
- **Product cards** use `product-card-cta` with locale `disuri.product.add_to_bag_price` (**Add to Bag · $XX**).
- Cart drawer shell in `layout/theme.liquid`; inner content via Section Rendering API. Layout: `cart-drawer-head` → scroll (`cart-drawer-lines` → `cart-drawer-promos` → links) → pinned `cart-drawer-foot` with **Checkout · $total**; compact ladder via `{% render 'disuri-gift-ladder', drawer: true %}`. Order bump in `disuri-cart-order-bump.liquid` (default `triple-collagen-firming-toner`).
- Collection filters use curated catalog-based tags (`disuri-product-filter-tags.liquid` + JS), not raw Shopify product tags alone.
- Gift funnel primary KPI: first **$25+ Skincare** order; post-checkout **Zipify OCU** stack = Complete System → subscription → Queens community.
- **Zipify OCU relaunch (2026-07-01):** In Checkout OFF (blocked checkout). Post-purchase funnels A/B/C + cart drawer only. Global OCU app-embed OFF; cart-drawer embed ON. Admin: `DISURI Beauty/theme-rebuild/zipify-ocu-admin-walkthrough.md`. QA: `node scripts/zipify-ocu-qa-checklist.mjs`.
- Theme repo `DISURI-Beauty-Theme`: old clone (with skeleton-theme origin) vanished from disk; re-pulled fresh from live theme 2026-07-02 and re-initialized as a local-only git repo — needs a GitHub remote for backup.
