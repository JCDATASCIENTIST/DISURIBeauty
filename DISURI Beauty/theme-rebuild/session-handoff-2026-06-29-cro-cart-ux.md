# Session handoff — CRO + cart UX (2026-06-29)

**Status:** Shipped live on **DISURI Beauty Theme v1** `#161833353455` (`7874da-0f.myshopify.com` / disuribeauty.com)

**Theme repo:** `/Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme/`

**Push command:**
```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme && \
npx @shopify/cli@4.2.0 theme push --allow-live --theme 161833353455 --store 7874da-0f.myshopify.com
```

Verify every time with hard refresh (`Cmd+Shift+R`) on disuribeauty.com.

---

## Shipped this session

### Skin guide (homepage `#skin-guide`)

- Concern **card grid** (3×2), bundle-first result panel, collapsed “Why this ritual” + ask form
- **Files:** `sections/skin-guide.liquid`, `snippets/disuri-skin-guide-{concern-card,bundle-hero,product-row}.liquid`, `assets/disuri-skin-guide.js`, `.skin-guide-*` CSS in `assets/disuri-shopify.css`, locale keys in `locales/en.default.json` + `es.json`
- P0 CRO: panel title “Your matched ritual”, GWP line under price, removed empty `featured_collection_2` from `templates/index.json`

### Skin guide bundle checkout card

- Full-width **Add ritual · $XX** → post-add **Added to your bag** + **Checkout now** + View full bag
- Bundle quick-add **does not** auto-open cart drawer (`disuri-cart.js`: `openDrawer: false` when `[data-bundle-hero]`)
- Cart sync on load + `cart:updated` via `disuri-skin-guide.js`
- **Files:** `snippets/disuri-skin-guide-bundle-hero.liquid`, `assets/disuri-cart.js`, `assets/disuri-skin-guide.js`

### Product cards (all grids)

- Replaced invisible `btn-tertiary` with full-width primary **Add to Bag · $XX** (fixes Pre-built Rituals **noir** section)
- **Files:** `snippets/disuri-product-card.liquid`, `.product-card-cta` CSS, locale `disuri.product.add_to_bag_price`

### Cart drawer v2

- **Layout:** header (title + count) → scroll (line items **first** → compact promos → links) → **pinned footer**
- Footer: subtotal + **Checkout · $total** + secure line; Shop Pay **removed** from drawer (still on PDP + full cart page)
- Compact gift ladder in drawer: `{% render 'disuri-gift-ladder', drawer: true %}` → `gift-ladder--drawer`
- Fixed line-item thumbnails (`cart-drawer-line-img__photo`, square white tile)
- **Files:** `snippets/disuri-cart-drawer-contents.liquid`, `snippets/disuri-gift-ladder.liquid`, `assets/disuri-shopify.css`, `assets/disuri-cart.js`, locale `disuri.cart_drawer.checkout_total`

---

## QA checklist (resume verification)

1. Hard refresh homepage
2. **Pre-built Rituals:** crimson **Add to Bag · $XX** visible without hover (noir section)
3. **Featured collection:** same primary CTA on light cards
4. **Skin guide:** pick concern → **Add ritual · $XX** → card shows **Checkout now** (drawer should **not** open)
5. **Skin guide singles:** still small tertiary + opens drawer (known gap)
6. **Cart drawer:** add any product from homepage card → items at top, **Checkout · $total** pinned at bottom without scrolling
7. Under $25 Skincare subtotal: compact gift ladder + order bump below items
8. EN + ES spot-check on skin guide + drawer strings

---

## Known gaps / next work

| Priority | Item | Notes |
|----------|------|--------|
| **P0** | Cart drawer polish | User feedback: still “doesn’t look good” after v2. Get desktop/mobile screenshot; candidates: promo density, line spacing, footer weight, collapsible Shop Pay |
| **P1** | Skin guide singles CTA parity | `disuri-skin-guide-product-row.liquid` still `btn-tertiary btn-sm` + standard drawer |
| **P1** | Skin guide CRO audit leftovers | Bundle vs singles price anchor; reduce concerns to 4–5; mobile sticky **Add ritual · $XX** after scroll |
| **Handoff** | Gift-of-week date auto-rotate | Spec: `gift-rotation-calendar.md` — see `AGENTS.md` Open Handoffs |
| **Deferred** | Best Sellers nav 404 | `new-bestsellers` collection empty; needs curation/discovery |
| **Ops** | Continual-learning index | Parent transcript processed in this save; index refreshed 2026-06-29 |

---

## Suggested next task

1. **If checkout UX is the blocker:** cart drawer polish (Joel screenshot → iterate layout/tokens)
2. **If skin guide is the focus:** align singles rows + optional mobile sticky bundle CTA

---

## Related docs

- [phase3-qa-2026-06-25.md](phase3-qa-2026-06-25.md) — cart order bump, Klaviyo/Zipify QA
- [next-up-storefront-honesty-and-logo.md](next-up-storefront-honesty-and-logo.md) — partially superseded by live honesty/gift-strip work
- [gift-rotation-calendar.md](gift-rotation-calendar.md) — date-based GWP display handoff
- Design kit: `DISURI Beauty/design-kit/claude-design/`
- Skill: `DISURI Beauty/.skills/skills/disuri-skin-education-journey/SKILL.md`
