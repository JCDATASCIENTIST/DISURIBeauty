# Weekly Gift Rotation — "Red of the Week"

**Cadence:** weekly, Thursdays ~10 AM ET. **Theme:** rotate product type
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
| 8 | Aug 20 | Liquid | Devil in a New Dress † | 8770034499823 |
| 9 | Aug 27 | Bullet | Ruby Noir #19 | 8860843671791 |
| 10 | Sep 3 | Gloss | Passion Wine (deep red) | 8769981022447 |
| 11 | Sep 10 | Liquid | Crave Me † | 8770024964335 |
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

## Current live state (Wk 1)
- Discount title: "Free Forbidden Red Lip Gloss — Spend $25 on Skincare"
- `disuri.gift_of_week` = Forbidden Red (8769977778415), allocation 100
- Klaviyo campaign `01KVY92M0C2PFAXRCDZFPSVW1W` ("Forbidden Red, Wk of Jul 2"), template `TmyjVj`
