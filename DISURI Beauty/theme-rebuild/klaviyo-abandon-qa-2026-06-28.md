# Klaviyo Abandon QA — 2026-06-28

**Automated audit:** `node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs qa-report`  
**Build sheet:** [klaviyo-abandon-conversion-build-sheet.md](klaviyo-abandon-conversion-build-sheet.md)

---

## Phase 1 — Integration

| Check | Result | Evidence |
|-------|--------|----------|
| Klaviyo onsite embed on live theme | **PASS** | `static.klaviyo.com/onsite/js/SgaEqb/klaviyo.js` on disuribeauty.com; theme `#161833353455` |
| Added to Cart events enabled | **PASS** | Klaviyo web pixel `enableAddedToCartEvents: true`; metric `S2gK56` |
| Checkout Started metric | **PASS** | `TTk3dS` (Shopify) |
| Placed Order metric | **PASS** | `SHVck2` (Shopify) |
| Abandon flows live | **PASS** | 4 flows: Add to Cart, Checkout, Browse, Site |
| Post-purchase Thank You live | **PASS** | `TS4Hir`, `T4mpSR` |

---

## Phase 1 — Manual tests (Joel to complete)

| Test | Status | Notes |
|------|--------|-------|
| B. Checkout abandon (test email, wait 20m) | **PENDING** | Incognito → toner → checkout email → stop |
| C. Cart abandon (subscribed, no checkout) | **PENDING** | Requires marketing opt-in profile |
| D. Purchase suppression | **PENDING** | Complete order before Email 2 |
| E. Recovery URL loads cart | **PENDING** | Verify merge tag in live email |
| F. Mobile render | **PENDING** | iOS Mail + Gmail app |

---

## Phase 2 — Flow architecture gaps (admin work)

| Item | Current | Required action |
|------|---------|-----------------|
| Checkout 4th email | ~~Live~~ | **DONE** — trimmed to 3 emails |
| Placed Order exit splits (checkout) | **3 splits verified** | ✅ |
| Placed Order exit splits (cart) | Unknown | Add before each email + Checkout Started on Email 1 |
| Browse + Site abandon | Live | Pause after checkout optimized |
| Welcome vs weekly-gift | Both live | Filter `RDHVm8` exclude `weekly-gift-signup` |
| Flow naming | ~~Forman~~ | **DONE** — renamed in Klaviyo |
| Smart Sending | Assumed ON | Verify in each flow Settings |

Run: `node scripts/klaviyo-abandon-verify.mjs`

**Latest audit:** Checkout **`RVN5dj`** now **3 emails** (`15m → 23h → 1d`) — trim confirmed via API. Splits still not visible via API; Joel verified 3 Placed Order splits on canvas.

---

## Phase 3–4 — Copy deliverables

Skincare-first HTML ready in [klaviyo-abandon-email-bodies/](klaviyo-abandon-email-bodies/):

- `checkout-email-1-reminder.html`
- `checkout-email-2-education.html`
- `checkout-email-3-proof.html`
- `cart-email-1-reminder.html`
- `post-purchase-email-1-thank-you.html`
- `post-purchase-email-2-week-one.html`
- `post-purchase-email-3-cross-sell.html`
- `post-purchase-email-4-reorder.html`
- `browse-abandon-email-1.html`

Paste into Klaviyo flow templates; preview with real Checkout Started event.

---

## Phase 5 — Deliverability

| Item | Status |
|------|--------|
| SPF/DKIM/DMARC | **VERIFY in Klaviyo → Settings → Domains** |
| CAN-SPAM footer | Included in email bodies |
| Sunset segment 90d | **CREATE in Klaviyo** |

---

## Phase 6 — Measurement

Baseline template in [klaviyo-abandon-measurement.md](klaviyo-abandon-measurement.md). Fill 30-day RPR before admin changes go live.

---

## Sign-off

- [x] Cursor: automated integration audit + deliverables  
- [x] Joel: Forman names removed in Klaviyo  
- [x] Joel: checkout Placed Order splits (3) before Emails 1–3  
- [x] Joel: delete checkout Email 4 + 3d wait (discount tail)  
- [ ] Joel: paste checkout + cart copy ([walkthrough](klaviyo-abandon-admin-walkthrough.md) Step 3–5)  
- [ ] Joel: manual tests B–F  
- [ ] Joel: baseline metrics captured  
