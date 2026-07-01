# Weekly Gift Rotation — "Red of the Week"

**Program start:** **Thursday, July 2, 2026** (aligns with Klaviyo Wk 1 email + Shopify BXGY discounts).  
**Cadence:** New shade every **Thursday 00:00 ET** (04:00 UTC). Weekly email send target: **~10 AM ET Thursday**.  
**Theme:** auto-rotates by date via `snippets/disuri-gift-week-current.liquid` (live as of 2026-07-01).  
**Type rotation:** Gloss → Matte Liquid → Matte Bullet (always a red shade).

---

## Launch schedule (12 weeks + Klaviyo)

**Your Klaviyo build:** 12 weekly campaign drafts are done (Wk 1–12). Wk 1 is tied to **Jul 2**.  
**July 10 (Fri)** falls on **Week 2** (Red Wine) — the Jul 9 Thu rollover already switched the gift.  
If you want a **Friday Jul 10 “launch moment”** for marketing, promote **Red Wine** that day, not Forbidden Red.

| Wk | Rollover (Thu ET) | Email send (Thu ~10 AM ET) | Shade | Type | Klaviyo campaign ID | Template |
|----|-------------------|----------------------------|-------|------|---------------------|----------|
| 1 | **Jul 2** | Jul 2 | **Forbidden Red** ✅ | Gloss | `01KVY92M0C2PFAXRCDZFPSVW1W` | `TmyjVj` |
| 2 | Jul 9 | Jul 9 | **Red Wine** | Liquid | `01KVY9CX1G49XSHZCHVR0W8Z4C` | `S8CYf7` |
| 3 | Jul 16 | Jul 16 | **Crimson Luxe #11** | Bullet | `01KVY9H822RAEKQPA1KXSQE3E7` | `RcSEmY` |
| 4 | Jul 23 | Jul 23 | **Royal Red** | Gloss | `01KVY9RYFJTXFS0SEX4WTKSWNN` | `W48wD7` |
| 5 | Jul 30 | Jul 30 | **Blood Orange** | Liquid | `01KVY9S30H7R9CMW98FRE0DAKT` | `RfQUzL` |
| 6 | Aug 6 | Aug 6 | **Ruby Fever #06** | Bullet | `01KVY9S7JA8Z91YPRSHPYCQBQ2` | `XiKRUH` |
| 7 | Aug 13 | Aug 13 | **Ruby Rose** | Gloss | `01KVYAA5KNPFRA8EZ6MAF8BBBE` | `UkNDup` |
| 8 | Aug 20 | Aug 20 | **Crave Me** | Liquid | `01KVYAAB8187RPVQFH8EEWVP23` | `R4sTGu` |
| 9 | Aug 27 | Aug 27 | **Ruby Noir #19** | Bullet | `01KVYAAG0D7C6P960ADKF10VJQ` | `XP29Zs` |
| 10 | Sep 3 | Sep 3 | **Passion Wine** | Gloss | `01KVYAHMWWP2H2P0SQDHNRGJ23` | `Y7gVd4` |
| 11 | Sep 10 | Sep 10 | **Berry Temptation** | Liquid | `01KVYAHTR5DB7KT9QC6X6A8EFB` | `R9sa4M` |
| 12 | Sep 17 | Sep 17 | **Bold Garnet #08** | Bullet | `01KVYAHZYFA3YW7MXDB6TMS0Y1` | `XTZqmK` |

**13 email assets:** Welcome Email 1 (immediate on popup signup) + 12 weekly Thu campaigns above.  
**After Sep 24:** Wk 13+ shades TBD; theme falls back to Forbidden Red until next calendar is built.

### Joel’s go-live checklist

**Jul 2 (Thu) — Week 1 kickoff**
- [ ] Schedule/send Klaviyo campaign `01KVY92M0C2PFAXRCDZFPSVW1W` (~10 AM ET)
- [ ] Popup image → Forbidden Red; Welcome Email 1 shade/image matches
- [ ] Storefront shows Forbidden Red (theme auto-rotate — no metafield swap needed)
- [ ] Test order: $25+ skincare → Forbidden Red auto-adds + $0 at checkout

**Each following Thu (Jul 9 … Sep 17)**
- [ ] Test-send + schedule that week’s Klaviyo draft (~10 AM ET)
- [ ] Update popup + Welcome Email 1 to new shade/image
- [ ] Optional: publish new shade on Online Store; return prior shade to UNLISTED
- [ ] Theme + discounts rotate automatically — verify announcement bar + cart ladder shade

**Jul 10 (Fri) — optional marketing push**
- [ ] If promoting on social/ads this day, message is **Red Wine** (Wk 2), not Forbidden Red

---

**Cadence (reference):** weekly, Thursdays ~10 AM ET. **Theme:** rotate product type
**Gloss → Matte Liquid → Matte Bullet**, always a **red** shade (locked by user, June 2026).
All shades are in the UNLISTED gift pool, ~85–100 units each.

Each week = run the rotation runbook in `gift-of-the-week-landing-page.md`: publish that
shade (ACTIVE + Online Store), repoint discount `DiscountAutomaticNode/1591628660975` to it,
set `disuri.gift_of_week` metafield + allocation, clone+update the Klaviyo campaign, send.
Return the prior shade to UNLISTED.

| Wk | Date (Thu) | Type | Shade | Product ID |
|----|-----------|------|-------|-----------|
| 1 | Jul 2 | Gloss | **Forbidden Red** ✅ LIVE | 8769977778415 |
| 2 | Jul 9 | Liquid | **Red Wine** | 8770060484847 |
| 3 | Jul 16 | Bullet | **Crimson Luxe #11** | 8860827746543 |
| 4 | Jul 23 | Gloss | Royal Red | 8769972928751 |
| 5 | Jul 30 | Liquid | Blood Orange | 8770008809711 |
| 6 | Aug 6 | Bullet | Ruby Fever #06 | 8860816539887 |
| 7 | Aug 13 | Gloss | Ruby Rose | 8769905950959 |
| 8 | Aug 20 | Liquid | **Crave Me** | 8770024964335 |
| 9 | Aug 27 | Bullet | Ruby Noir #19 | 8860843671791 |
| 10 | Sep 3 | Gloss | Passion Wine (deep red) | 8769981022447 |
| 11 | Sep 10 | Liquid | **Berry Temptation** | 8770019361007 |
| 12 | Sep 17 | Bullet | Bold Garnet #08 | 8860821717231 |

† **Verify shade color before use** — Red Wine & Blood Orange are clearly red/red-orange;
"Devil in a New Dress" and "Crave Me" are likely reds by name but confirm the swatch. Other
bullet reds in reserve: Daring Desire #04 (8859229454575). Other liquid candidate: Seductive
(8770014609647).

## Constraint note
- **Gloss** reds: 4 (Forbidden Red, Royal Red, Ruby Rose, Passion Wine).
- **Bullet** reds: 5+ (Crimson Luxe, Ruby Fever, Ruby Noir, Bold Garnet, Daring Desire).
- **Liquid** reds are the limiter (~2 clear: Red Wine, Blood Orange; +2 tentative). After ~Wk
  8 the liquid slot may need a berry/wine tone or a repeat. Re-evaluate at Wk 6.

## Pre-built (queued, NOT scheduled)
- **Wk 2 — Red Wine** liquid lipstick ($14.97): Klaviyo draft campaign
  `01KVY9CX1G49XSHZCHVR0W8Z4C`, template `S8CYf7`. Email is done. **Store swap deferred to
  Jul 9** (publishing Red Wine + repointing the discount/metafield now would override Wk 1).
  Jul 9 rollover steps: Forbidden Red → UNLISTED; Red Wine (`Product/8770060484847`) →
  ACTIVE + publish; discount + `disuri.gift_of_week` → Red Wine; test-send + schedule.
- **Wk 3 — Crimson Luxe #11** bullet lipstick ($12.97): Klaviyo draft campaign
  `01KVY9H822RAEKQPA1KXSQE3E7`, template `RcSEmY`. Email done. Jul 16 rollover: Red Wine →
  UNLISTED; Crimson Luxe (`Product/8860827746543`) → ACTIVE + publish; discount +
  `disuri.gift_of_week` → Crimson Luxe; test-send + schedule.
- **Wk 4 — Royal Red** gloss ($12.97): campaign `01KVY9RYFJTXFS0SEX4WTKSWNN`, template `W48wD7`,
  product `8769972928751`. Rollover Jul 23.
- **Wk 5 — Blood Orange** liquid ($14.97): campaign `01KVY9S30H7R9CMW98FRE0DAKT`, template
  `RfQUzL`, product `8770008809711`. Rollover Jul 30.
- **Wk 6 — Ruby Fever #06** bullet ($12.97): campaign `01KVY9S7JA8Z91YPRSHPYCQBQ2`, template
  `XiKRUH`, product `8860816539887`. Rollover Aug 6.

- **Wk 7 — Ruby Rose** gloss ($12.97): campaign `01KVYAA5KNPFRA8EZ6MAF8BBBE`, template `UkNDup`,
  product `8769905950959`. Rollover Aug 13.
- **Wk 8 — Crave Me** liquid ($14.97, "earthy red"): campaign `01KVYAAB8187RPVQFH8EEWVP23`,
  template `R4sTGu`, product `8770024964335`. Rollover Aug 20.
- **Wk 9 — Ruby Noir #19** bullet ($12.97): campaign `01KVYAAG0D7C6P960ADKF10VJQ`, template
  `XP29Zs`, product `8860843671791`. Rollover Aug 27.

All Wk 2–9 email drafts are DONE (logo, correct product image/price/copy/link, reply-to
customersupport@disuribeauty.com). Each week's store swap (publish shade + repoint discount +
metafield + return prior shade to UNLISTED) runs at its rollover date.

- **Wk 10 — Passion Wine** gloss ($12.97, "deep wine red"): campaign `01KVYAHMWWP2H2P0SQDHNRGJ23`,
  template `Y7gVd4`, product `8769981022447`. Rollover Sep 3.
- **Wk 11 — Berry Temptation** liquid ($14.97, "rich berry red" — Option A, berry counts):
  campaign `01KVYAHTR5DB7KT9QC6X6A8EFB`, template `R9sa4M`, product `8770019361007`. Rollover Sep 10.
- **Wk 12 — Bold Garnet #08** bullet ($12.97, "deep garnet red"): campaign `01KVYAHZYFA3YW7MXDB6TMS0Y1`,
  template `XTZqmK`, product `8860821717231`. Rollover Sep 17.

**FULL 12-WEEK CALENDAR NOW BUILT (through Sep 17).** Actual liquid slots used: Wk2 Red Wine,
Wk5 Blood Orange, Wk8 Crave Me, Wk11 Berry Temptation (berry). True-red liquids are spent;
any Wk 13+ continuation needs a new shade/type decision (e.g. drop liquid, or widen palette).

## ⚠️ DISCOUNTS ARE NOW PRE-SCHEDULED (updated 2026-06-28)

All 12 weekly BXGY discounts now exist as **separate scheduled automatic discounts**
($25 Skincare → 1 free shade @100% off, 1/order, non-combining), with contiguous
Thu→Thu windows (00:00 ET = 04:00 UTC). They auto-activate/expire — **do NOT repoint the
old shared discount `1591628660975` anymore** (it was capped to end Jul 9 04:00 UTC and only
covers Wk 1). Verified live: Wk1 checkout zeroes the gloss correctly (−$12.97).

Discount node IDs by week: Wk2 Red Wine `1592615534831`, Wk3 Crimson Luxe `1592615567599`,
Wk4 Royal Red `1592615600367`, Wk5 Blood Orange `1592615665903`, Wk6 Ruby Fever `1592615698671`,
Wk7 Ruby Rose `1592615731439`, Wk8 Crave Me `1592615764207`, Wk9 Ruby Noir `1592615796975`,
Wk10 Passion Wine `1592615829743`, Wk11 Berry Temptation `1592615862511`, Wk12 Bold Garnet `1592615895279`.

**Still manual each week:** the storefront "Gift of the Week" display (`disuri.gift_of_week`
metafield) does NOT auto-rotate — update it weekly (or it shows the wrong gift). Gift products
are currently UNLISTED-but-purchasable (reachable by direct/email link), so the weekly
publish/unlist step is optional for checkout; only needed for storefront merchandising.
**Customers must add the gift to cart themselves — BXGY does not auto-add it; the email/landing must drive that.**

**Update (2026-07-01):** Theme now **auto-adds** the correct week's gift variant via `disuri-cart.js` when skincare subtotal ≥ $25. BXGY still zeroes price at checkout.
Email audit + upgrade 2026-06-28: all 12 templates link to the Skincare collection AND a one-click
**cart-add permalink** for the correct shade (`/cart/{variantId}:1`) — gift goes straight to cart.
Done by creating new templates + `assign_template_to_campaign_message` (the Update Template API 404s
on campaign-message template clones — GET works, PATCH does not). Originals backed up in scratchpad.

## Current live state (Wk 1)

- Discount title: "Free Forbidden Red Lip Gloss — Spend $25 on Skincare"
- `disuri.gift_of_week` = Forbidden Red (8769977778415), allocation 100
- Klaviyo campaign `01KVY92M0C2PFAXRCDZFPSVW1W` ("Forbidden Red, Wk of Jul 2"), template `TmyjVj`

## 🔧 Theme auto-rotate — IMPLEMENTED (2026-07-01)

**Live:** `snippets/disuri-gift-week-line.liquid` resolves handle + variant + shade from date (render + capture pattern).
Consumers: `disuri-gift-week-shade`, `disuri-gift-ladder`, `gift-of-the-week`, `gift-strip`, announcement bar.
Cart auto-add uses the same variant ID as the active week (matches Klaviyo cart-add permalinks).

**Optional:** `disuri.gift_of_week_label` metafield still overrides the **display name** only.
**No longer required:** weekly `disuri.gift_of_week` product metafield updates for storefront display.

## 🔧 HANDOFF → Cursor (theme): make Gift-of-Week auto-rotate by date — DONE

**Goal:** stop the weekly manual `disuri.gift_of_week` metafield update. Make the storefront
derive the current gift shade **from the date**, matching the discount windows exactly, so the
display rotates on its own with no recurring job. Keep the metafield as an optional manual override
(if `disuri.gift_of_week` is set, prefer it; else fall back to the date-derived shade).

**Files that currently read the metafield (update these to use a shared date→shade resolver):**
`snippets/disuri-gift-week-shade.liquid` (shade label), the announcement bar, the cart ladder
(`snippets/disuri-gift-ladder.liquid`), `sections/gift-of-the-week.liquid`, `sections/gift-strip.liquid`.

**Window logic:** each shade is active from its **Thursday 00:00 America/New_York (= 04:00 UTC)**
to the next Thursday 04:00 UTC — identical to the Shopify discount `startsAt/endsAt`. Compare
`'now'` (shop tz = ET) against the boundaries below. Before Jul 2 and after Sep 24, fall back to Wk1
(Forbidden Red) or a generic "free gloss" message.

| Wk | Active from (ET Thu) | Shade | Type | Product handle | Variant (cart-add) |
|----|----|----|----|----|----|
| 1 | Jul 2 2026 | Forbidden Red | gloss | `disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-forbidden-red-m61` | 45876380893423 |
| 2 | Jul 9 | Red Wine | liquid | `disuri-beauty-liquid-lipstick-non-sticky-vegan-cruelty-free-formula-red-wine-53` | 45876640743663 |
| 3 | Jul 16 | Crimson Luxe #11 | bullet | `matte-lipstick-crimson-luxe-11` | 46172049375471 |
| 4 | Jul 23 | Royal Red | gloss | `disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-royal-red-m60` | 45876369981679 |
| 5 | Jul 30 | Blood Orange | liquid | `disuri-beauty-liquid-lipstick-non-sticky-vegan-cruelty-free-formula-blood-orange-2` | 45876464681199 |
| 6 | Aug 6 | Ruby Fever #06 | bullet | `matte-lipstick-ruby-fever-06` | 46172031975663 |
| 7 | Aug 13 | Ruby Rose | gloss | `disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-ruby-rose-m41` | 45876197589231 |
| 8 | Aug 20 | Crave Me | liquid | `disuri-beauty-liquid-lipstick-non-sticky-vegan-cruelty-free-formula-crave-me-13` | 45876511342831 |
| 9 | Aug 27 | Ruby Noir #19 | bullet | `matte-lipstick-ruby-noir-19` | 46172073623791 |
| 10 | Sep 3 | Passion Wine | gloss | `disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-passion-wine-m62` | 45876390035695 |
| 11 | Sep 10 | Berry Temptation | liquid | `disuri-beauty-liquid-lipstick-berry-temptation-11` | 45876492271855 |
| 12 | Sep 17 (→ Sep 24 end) | Bold Garnet #08 | bullet | `matte-lipstick-bold-garnet-08` | 46172037873903 |

**Notes for Cursor:** shades are unlisted but reachable by direct link, so the section can link the
gift via `/cart/{variant}:1` (one-click add, matches the emails) or the product handle. Discount/email
already auto-rotate on these exact windows — only the theme display needs this change. Suggest a single
`snippets/disuri-gift-week-current.liquid` resolver returning {handle, variant, shade label, type} that
the other snippets/sections consume, so there's one source of truth. Past Sep 24, Wk 13+ shades TBD.
