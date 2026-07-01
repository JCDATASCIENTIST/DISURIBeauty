# Klaviyo Abandoned Cart + Post-Purchase Playbook

**Store:** `7874da-0f.myshopify.com` · Klaviyo `company_id=SgaEqb` · Master List `RbYjU5`  
**Companion:** [klaviyo-abandon-conversion-build-sheet.md](klaviyo-abandon-conversion-build-sheet.md), [klaviyo-abandon-measurement.md](klaviyo-abandon-measurement.md), [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md), [gift-funnel-vision.md](gift-funnel-vision.md)  
**Brand email spec:** `DISURI Beauty/.skills/skills/disuri-email-marketing/SKILL.md`  
**Copy bodies:** [klaviyo-abandon-email-bodies/](klaviyo-abandon-email-bodies/)

---

## Brand rule — skincare first

**Do not build the brand on lip gloss in email.** Gloss is a time-boxed GWP footnote. Long-term identity = Korean barrier science, collagen ritual, Complete System. Primary KPI = first **$25+ Skincare** order.

| Email | Lead with | Gloss mention |
|-------|-----------|---------------|
| Abandon 1 | Cart SKU + routine | Optional footnote only |
| Abandon 2 | Ingredient education | None |
| Abandon 3 | Social proof + Complete System path | One line if cart ≥ $25 |
| Post-purchase | How to use purchased skincare | None |

---

## Live flow map (2026-06-28)

| ID | Name (rename in admin) | Role |
|----|------------------------|------|
| `RVN5dj` | DISURI \| Abandoned Checkout | **Primary** recover |
| `QWdays` | DISURI \| Abandoned Cart | Secondary (identified, no checkout) |
| `Uyagdk` | DISURI \| Browse Abandon | Pause after optimize |
| `WLsFs6` | DISURI \| Site Abandon | Pause or 1 email |
| `RDHVm8` | DISURI \| Welcome (non-gift) | Exclude `weekly-gift-signup` |
| `TS4Hir` | DISURI \| Post-Purchase 1 | First order thank you |

**QA:** [klaviyo-abandon-qa-2026-06-28.md](klaviyo-abandon-qa-2026-06-28.md) · **Admin next steps:** [klaviyo-abandon-admin-walkthrough.md](klaviyo-abandon-admin-walkthrough.md) · **Verify:** `node scripts/klaviyo-abandon-verify.mjs`

---

## Goal

Recover revenue when shoppers leave with items in cart or checkout, nurture until **Placed Order**, then hand off to post-purchase education — all via **Klaviyo ↔ Shopify** sync (not theme code).

---

## Architecture (Shopify + Klaviyo)

| Layer | What it does |
|-------|----------------|
| **Klaviyo Shopify app** | Syncs customers, products, orders; sends **Placed Order**, **Checkout Started**, **Ordered Product** metrics |
| **Klaviyo onsite JS** | Theme **App embed** (admin) tracks **Added to Cart**, **Viewed Product**, identifies email from popup/checkout |
| **Flows** | Trigger → time delay → conditional split (placed order?) → emails → repeat until purchase or timeout |
| **Theme v1** | No cart-abandon logic in Liquid — only honest promo copy ($25 Skincare → free gloss, no phantom free shipping) |

---

## Phase 0 — Integration checklist (do first)

### Shopify admin

1. **Apps → Klaviyo** — installed, connected to `7874da-0f.myshopify.com`
2. **Sync settings** — Customers, Orders, Products enabled; historical sync complete
3. **Online Store → Themes → DISURI Beauty Theme v1 → Customize → App embeds** — **Klaviyo** ON

### Klaviyo admin

1. **Integrations → Shopify** — Connected, green status
2. **Settings → Account → API keys** — private key with `flows:read` for Cursor audits
3. **Analytics → Metrics** — confirm these exist (Shopify-branded names):
   - `Added to Cart` (optional but recommended)
   - `Checkout Started` (required for checkout abandon)
   - `Placed Order` (required for exit + post-purchase)

### Enable Added to Cart (Shopify)

Klaviyo → **Integrations → Shopify → Settings** (or **Manage integration**) → enable **Track behavioral events** / **Added to Cart** if not already on. Without this, only **Checkout Started** fires (misses ~50% of abandoners who never reach checkout email step).

---

## Phase 1 — Abandoned **Cart** flow (Added to Cart)

**Trigger:** Metric → **Added to Cart** (Shopify integration)

**Profile filters (trigger):**
- Has **email** (is set)
- **Accepts Marketing** = true *or* use conditional split after trigger for subscribed vs non-subscribed (non-subscribed: skip or use transactional where allowed)

**Flow filters (recommended):**
- Placed Order **zero times** in last 30 days (optional — avoids emailing recent buyers testing cart)

### Timing (DISURI — fast first touch)

User asked for “immediate.” Klaviyo + Shopify sync is **not instant**; use:

| Email | Delay after trigger | Notes |
|-------|---------------------|-------|
| 1 | **30 minutes** | Earliest practical; test 1h if sync lag |
| 2 | **24 hours** | Ingredient education for cart SKU |
| 3 | **48 hours** | Social proof; optional small incentive (not false free shipping) |

Pre-built Klaviyo template defaults to **4 hours** — change first delay to **30 min** or **1 hour**.

### Conditional splits (each email)

Before every send:

```
Has Placed Order at least once since starting this flow? → YES → Exit
Has Started Checkout at least once since starting this flow? → optional branch for hotter leads
```

### Email 1 content (cart)

- Dynamic cart block / product image from event
- **Checkout link** with cart recovery URL (`{{ event.extra.checkout_url }}` or Klaviyo cart merge tags — verify in preview)
- Mention honest offer only: **$25 Skincare → free weekly lip gloss** (if subtotal qualifies in copy, don’t promise auto-add)
- No em dashes; appearance-based claims only

Subject direction: *Still thinking about it?* (see email skill)

---

## Phase 2 — Abandoned **Checkout** flow (Checkout Started)

**Trigger:** Metric → **Checkout Started** (Shopify)

Same delay/split pattern as Phase 1. Copy differs slightly — they already entered email at checkout.

| Email | Delay |
|-------|-------|
| 1 | **30 minutes** |
| 2 | **20–24 hours** |
| 3 | **48 hours** |

**Critical split before email 1:**

```
Has Placed Order at least once since starting this flow? → YES → Exit
```

Do **not** rely only on flow-level filters; use conditional splits so purchasers exit immediately.

---

## Phase 3 — Post-purchase nurture (after Placed Order)

Separate from abandon flows. Does not replace **weekly gift welcome** or **first-order-25-plus** KPI flows.

**Trigger:** **Placed Order** (Shopify)

**Filter example:** First-time buyer — `Placed Order` count equals 1 (same pattern as [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md))

| Email | Timing | Focus |
|-------|--------|-------|
| 1 | **1 hour** after order | Order confirmation tone + what happens next (ships Miami 1–2 biz days) |
| 2 | **Day 3** | How to use purchased SKU |
| 3 | **Day 7** | Week-one expectations |
| 4 | **Day 14** | Cross-sell complementary product |
| 5 | **Day 30** | Review + reorder |

Tag purchasers **`purchased-customer`** (optional) and suppress abandon flows via “Placed Order since flow start” splits.

---

## Phase 4 — Flow conflict map

| Flow | Trigger | Must not duplicate |
|------|---------|-------------------|
| Weekly gift welcome | List subscribe + `weekly-gift-signup` | Generic welcome (`RDHVm8`) — **exclude tag on RDHVm8 trigger** |
| Abandoned cart | Added to Cart | Checkout flow if **Checkout Started since flow start** |
| Abandoned checkout | Checkout Started | — |
| First order KPI | Placed Order + $25 skincare | Post-purchase tag logic |
| Post-purchase education | Placed Order | Welcome series for same trigger — use **priority** or single merged flow |
| Browse / Site abandon | Viewed product / Active on Site | **Pause** until checkout flow optimized |

**De-dupe rule (cart flow):** Before Email 1 → if **Checkout Started since flow start** → exit (checkout flow owns lead).

**Klaviyo → Flows → [flow] → Settings → Smart Sending** — enable to prevent email fatigue across flows.

---

## Phase 5 — Test protocol

Use a **test email** you control (not a real customer). Klaviyo → **Preview as profile** or live test.

### A. Verify metrics (5 min)

1. Klaviyo → **Analytics → Metrics**
2. Open **Checkout Started** → **Activity feed** — should show events after test checkout
3. Open **Added to Cart** — should show after add-to-cart on site (if behavioral tracking on)
4. Open **Placed Order** — should show after test order

CLI audit (from ops repo):

```bash
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs flows
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs metrics-abandon
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs qa-report
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs flow-audit
node scripts/klaviyo-abandon-verify.mjs
```

### B. Abandoned checkout test (identified user)

1. Incognito → disuribeauty.com → add **Triple Collagen Firming Toner**
2. Go to checkout → enter **test email** → stop before paying
3. Wait **35–60 min** (sync + first delay)
4. Klaviyo → flow → **Activity** — profile entered?
5. Inbox — Email 1 received? Cart link works? **Complete purchase** → flow exits, no Email 2

### C. Abandoned cart test (no checkout)

1. Incognito → subscribe via footer or weekly gift popup with test email
2. Add product to cart → leave site (don’t checkout)
3. Wait **35–60 min**
4. Confirm **Added to Cart** flow fires (only if behavioral tracking enabled)

### D. Purchase suppression test

1. Enter abandon flow (step B, stop at checkout)
2. Complete order within 30 min
3. Confirm **no** abandon email sends (conditional split exit)

### E. Post-purchase test

1. Place test order (use Shopify **Bogus Gateway** or draft order in dev if available)
2. Confirm **Placed Order** flow Email 1 within 1 hour
3. Profile tags / segments updated as expected

---

## Phase 6 — Go-live checklist

- [ ] Klaviyo app embed ON on live theme `#161833353455`
- [ ] **Added to Cart** tracking enabled in Klaviyo ↔ Shopify settings
- [ ] **Abandoned Cart** flow LIVE (Added to Cart trigger, 30m / 24h / 48h)
- [ ] **Abandoned Checkout** flow LIVE (Checkout Started, same delays + exit splits)
- [ ] **Post-purchase** flow LIVE (Placed Order nurture)
- [ ] Smart Sending ON across flows
- [ ] Test B + D passed on live store
- [ ] Copy audited: no false free shipping, honest $25 gloss tier only
- [ ] SMS abandon (optional) — defer unless Klaviyo SMS configured

---

## Cursor vs Claude Code

| Owner | Work |
|-------|------|
| **Claude Code / Joel (Klaviyo admin)** | Build flows, copy, delays, splits, test orders |
| **Cursor** | Theme app embed verification, honest cart/checkout UX, `/klaviyo` API audits |

---

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| No **Checkout Started** events | Klaviyo app disconnected; re-auth Shopify integration |
| No **Added to Cart** | Enable behavioral tracking; confirm app embed on live theme |
| Email never sends | Flow in Draft; profile not subscribed; Smart Sending throttled |
| Email sends after purchase | Add “Placed Order since flow start” split before each email |
| Wrong products in email | Dynamic product block tied to event `$value` / line items — preview with real event |
