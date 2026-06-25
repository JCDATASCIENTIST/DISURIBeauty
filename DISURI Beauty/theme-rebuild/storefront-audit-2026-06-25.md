# Storefront Audit — 2026-06-25

**Method:** Live HTTP scan + theme inventory (`scripts/storefront-audit.mjs`, session `659020`)  
**Brand ref:** `DISURI Beauty/brand-voice-guidelines.md` (warm authority, radical transparency, no hype)

## Hypotheses tested

| ID | Hypothesis | Verdict |
|----|------------|---------|
| H-404 | Footer/gift-strip links point to pages that do not exist | **CONFIRMED** — `/pages/shipping` was 404; gift-strip `trust_link` fixed → `/policies/shipping-policy` |
| H-EMPTY | Shopify pages exist but have no body → theme shows placeholder | **CONFIRMED** — `/pages/cj-affiliate`, `/pages/faqs` were empty; populated via Admin API |
| H-COPY | Customer-facing HTML still contains em dashes | **CONFIRMED** on PDP variant select/thumbs; fixed `product.liquid` (middot ·) |
| H-SEO | Collection pages use `<h2>` instead of `<h1>` | **CONFIRMED** — fixed `collection.liquid` |
| H-GIFT | Gift page headline did not match weekly shade | **CONFIRMED** — H1 now shade name; product line below |

## Live page status (after fixes)

| URL | Status | Notes |
|-----|--------|-------|
| `/` | 200 | Hero `rested`, 13 sections, newsletter + Queens CTA |
| `/collections/skincare` | 200 | H1: Korean barrier science / Measured in ppm |
| `/pages/gift-of-the-week` | 200 | H1: shade name (Forbidden Red) |
| `/pages/cj-affiliate` | 200 | Queens/Affiliate copy added |
| `/pages/faqs` | 200 | GWP, shipping, returns, transparency FAQ |
| `/policies/*` | 200 | Legal policies live (use these, not `/pages/privacy-policy`) |
| `/pages/shipping` | 404 | **Do not link here** — use `/policies/shipping-policy` |
| `/pages/about-the-brands` | 200 | Rewritten + published (Brand Strategy v3 voice) |
| `/blogs/news` | 404 | Blog not published |

## Theme sections (homepage)

| Section | Status |
|---------|--------|
| hero | Live — `rested` headline |
| gift-strip | Fixed trust link |
| featured-collection (skincare) | Live |
| featured-bundles | Live |
| science-strip | Live (ppm stats) |
| skin-guide | Copy fix (removed "coming soon") |
| featured-collection-2 | Live |
| testimonials | Live |
| newsletter | Weekly gift aligned |
| queens-cta | Links `/pages/cj-affiliate` |

## Remaining backlog (Claude Code / admin)

1. ~~**Legacy pages**~~ — 16 off-brand pages unpublished (Fenty, flash sales, empty landers). App pages (Swym wishlist, Searchanise) kept published.
2. ~~**About page**~~ — `/pages/about-the-brands` rewritten and published.
3. **OCU stack** — Complete System → subscription → Queens (see `gift-funnel-vision.md`); playbooks ready, Zipify/Klaviyo admin build pending
4. **Klaviyo popup** — verify in incognito (not in theme HTML)
5. **Product data** — HTML exported to `product-copy-bodies/`; paste into Shopify admin (see `product-copy-audit-2026-06-25.md`)
6. **Cart order bump** — live in theme v1 (toner when skincare &lt; $25)
6. **Loox / ReCharge / Affirm** — deferred per AGENTS.md

## Fixes applied this session

- Gift-strip `trust_link` → shipping policy
- PDP em dashes → middot
- Collection `<h1>` semantics
- Gift-of-week H1 = weekly shade
- Skin guide + empty-page locale copy
- 404 page copy (brand voice)
- `/pages/cj-affiliate` + `/pages/faqs` body content in Shopify admin
- **`/pages/about-the-brands`** — clean HTML, published (replaced Zipify legacy)
- **16 legacy pages unpublished** (fenty-beauty, 30-off-35, matte-blast-flash-sale, about-the-brands-1, quiz, etc.)
- **Footer** — "About DISURI" link in Brand column fallback nav
