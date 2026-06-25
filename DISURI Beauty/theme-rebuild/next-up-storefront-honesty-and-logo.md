# Next Up (queued) — Storefront honesty pass + logo in email

**Status:** PLANNED, not started. Hold until the other in-flight agent tasks are done,
then execute. All edits go on the **unpublished preview theme**, never live, until approved.

## Context (already done in the Week-1 pilot)
- Live offer: spend **$25 on Skincare** → 1 free **Miami Splash** gloss (BXGY discount
  `DiscountAutomaticNode/1591628660975`).
- Cart gift-ladder already reconciled to the single honest tier on preview theme
  **`OnlineStoreTheme/161846329583`** ("DISURI Beauty — Gift Ladder Preview").
  Live MAIN theme = `OnlineStoreTheme/161833353455`.
- Klaviyo draft campaign `01KVY05HWXEXE04PCDQRAYN45H` (email template still uses a text
  wordmark, not the logo).
- See [[lip-gwp-strategy]] memory for full state.

## Task 1 — Reconcile remaining storefront claims to the one real offer
Edit on preview theme `161846329583` via `themeFilesUpsert` (whole-file replace). Goal:
remove every promise the store can't honor (no free shipping threshold; no $50/$100 gift
tiers exist as discounts).

| File / key | Current (false) | Change to |
|---|---|---|
| `locales/en.default.json` → `disuri.hero.eyebrow` | "Free gift in every order · Free shipping over $25 · Made in Korea" | "Free lip gloss with $25 skincare orders · Made in Korea" |
| `locales/es.json` → `disuri.hero.eyebrow` | "...· Envío gratis +$25 · ..." | "Labial gratis con pedidos de $25 · Hecho en Corea" |
| `sections/gift-strip.liquid` | 4 tiers incl. $50 "2 free products", $100 "10 free products", "Up to $400" | Collapse to the single $25 → free lip gloss message (or remove the section from `templates/index.json`) |
| `disuri.promo.free_shipping` / `up_to_400` / `at_100` (en + es) | shipping + $400 gift claims | repurpose to the gloss offer, or drop once gift-strip no longer references them |

Note: `gift-strip.liquid` reads several `disuri.promo.*` keys via `disuri-text`.
**DECISION (locked by user, June 2026): collapse gift-strip to the single $25 → free-gloss
tier** — keep the section on the homepage, rewrite it to show one honest tier (and update
the `disuri.promo.*` keys accordingly). Do NOT remove it from `templates/index.json`.

## Task 2 — Put the real logo in the email (and have it hosted for reuse)
- Source PNG (413×348 RGBA, transparent): `…/DISURI-Beauty/DISURI_Beauty/Product_Assets/disuri-beauty-logo.png`
  (Google Drive). TIF version is print/CMYK — ignore for web.
- Upload to Shopify CDN: `stagedUploadsCreate` (IMAGE) → PUT bytes via curl → `fileCreate`
  (contentType IMAGE) → get the CDN URL.
- Update the Klaviyo email: replace the text "DISURI BEAUTY" wordmark in template with an
  `<img>` of the hosted logo. Logo has transparency, but place on a **Noir `#2A2A2A`** or
  black band (the mark reads on dark). Klaviyo campaign `01KVY05HWXEXE04PCDQRAYN45H`,
  message `01KVY05HX7V7X0XP37MVJ5HZEQ` — re-assign updated template.

## After both tasks
1. Final review of preview theme `161846329583` (cart + homepage, EN/ES).
2. On approval: publish preview theme (user action / `themePublish`).
3. Bulk-unarchive + publish the other **175** lip products for weekly rotation.
4. User sends the Klaviyo campaign when ready (Claude never sends).

## Design system reference
Tokens in `design-kit/claude-design/colors_and_type.css`: crimson `#B82024` (CTAs/fill),
midnight `#1F3F5C` (promo/trust), copper `#B5673C` (accents), porcelain `#F4F2EE` (bg),
noir `#2A2A2A` (text/dark). Fonts: Bodoni / Mrs Eaves / Frutiger (Libre Baskerville +
Cabin web fallbacks).
