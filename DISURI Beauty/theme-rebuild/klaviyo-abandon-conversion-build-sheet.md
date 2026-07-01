# Klaviyo Abandon + Nurture — Admin Build Sheet

**Owner:** Joel / Claude Code (Klaviyo admin)  
**Verify:** Cursor via `node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs qa-report`  
**Companion:** [klaviyo-abandoned-cart-playbook.md](klaviyo-abandoned-cart-playbook.md), [klaviyo-abandon-measurement.md](klaviyo-abandon-measurement.md)  
**Copy bodies:** [klaviyo-abandon-email-bodies/](klaviyo-abandon-email-bodies/)

---

## Brand rule (non-negotiable)

**Lead with Korean skincare.** Lip gloss is a time-boxed GWP footnote only, not the brand hero. Long-term identity = barrier science, collagen ritual, Complete System.

---

## Live flow inventory

| Name (live 2026-06-28) | ID | Action |
|------------------------|-----|--------|
| EMAIL \| Abandoned Add to Cart | `QWdays` | Add exit splits + paste copy |
| EMAIL \| Abandoned Cart Checkout | `RVN5dj` | **Primary** — trim to 3 emails, splits |
| EMAIL \| Browse Abandonment | `Uyagdk` | **Pause** (manual/draft) |
| EMAIL \| Site Abandonment | `WLsFs6` | **Pause** (manual/draft) |
| EMAIL \| Welcome Series | `RDHVm8` | Exclude tag `weekly-gift-signup` |
| EMAIL \| First Customer Thank You | `TS4Hir` | Paste post-purchase copy |
| EMAIL \| Second Customer Thank You | `T4mpSR` | Reorder / repeat buyer |

**Step-by-step admin:** [klaviyo-abandon-admin-walkthrough.md](klaviyo-abandon-admin-walkthrough.md)

Delete or ignore drafts: `VBNbv4`, `Vz2QpH`, `S93eue`, `SJ3gWk`, `VHSZvc`.

---

## Phase 2 — Flow architecture (Klaviyo admin)

### A. Abandoned Checkout (`RVN5dj`) — PRIMARY

**Trigger:** Metric → **Checkout Started** (Shopify) `TTk3dS`

**Before Email 1 (conditional split):**
```
Has Placed Order at least once since starting this flow? → YES → Exit flow
```

**Trim to 3 emails** (remove 4th if present). Current delays: 15m → ~23h → 24h → 72h. Target:

| Step | Delay | Action |
|------|-------|--------|
| Split | 0 | Placed Order since start? → exit |
| Email 1 | **15m** (A/B test 45m later) | [checkout-email-1-reminder.html](klaviyo-abandon-email-bodies/checkout-email-1-reminder.html) |
| Split | 0 | Placed Order since start? → exit |
| Email 2 | **24h** | [checkout-email-2-education.html](klaviyo-abandon-email-bodies/checkout-email-2-education.html) |
| Split | 0 | Placed Order since start? → exit |
| Email 3 | **48h** total from trigger | [checkout-email-3-proof.html](klaviyo-abandon-email-bodies/checkout-email-3-proof.html) |

**Segmentation split before Email 2 (optional, high ROI):**

| Branch | Condition | Email 2 variant |
|--------|-----------|-----------------|
| Gift signup | Profile has tag `weekly-gift-signup` | Shorter path to first skincare order |
| Cold | No tag | Barrier science + toner CTA |
| High AOV | `$value` ≥ 50 on trigger event | Complete System narrative |
| Low AOV | `$value` < 25 | Add toner to reach skincare threshold |

**Smart Sending:** ON (Flow → Settings).

**Recovery URL merge tag:** Use Klaviyo's dynamic **Checkout URL** block or `{{ event.extra.checkout_url }}` — preview with real Checkout Started event.

---

### B. Abandoned Cart (`QWdays`)

**Trigger:** Metric → **Added to Cart** (Shopify) `S2gK56`

**Profile filter at trigger:**
- Email is set
- Accepts Marketing = true (or split subscribed vs not)

**Before Email 1 — ADD if missing:**
```
Has Checkout Started at least once since starting this flow? → YES → Exit flow
Has Placed Order at least once since starting this flow? → YES → Exit flow
```

Current delays: 5m → 24h → 24h. Keep 5m or test 30m in A/B.

Copy: [cart-email-1-reminder.html](klaviyo-abandon-email-bodies/cart-email-1-reminder.html) + reuse checkout emails 2–3.

---

### C. Browse + Site abandon (`Uyagdk`, `WLsFs6`)

**Recommendation:** Set to **Manual** / pause until checkout flow conversion baseline recorded (2 weeks).

If kept live: one email max, skincare education, no gloss hero, Smart Sending ON.

---

### D. Welcome conflict (`RDHVm8` vs weekly gift)

| Profile | Flow |
|---------|------|
| Has tag `weekly-gift-signup` | **Weekly Gift Welcome** only ([weekly-gift-popup-klaviyo-playbook.md](weekly-gift-popup-klaviyo-playbook.md)) — do NOT also enter generic welcome |
| No tag | `RDHVm8` renamed welcome |

**How:** Add trigger filter on `RDHVm8`: **does not have tag** `weekly-gift-signup`.

---

## Phase 3 — Paste copy

All HTML in [klaviyo-abandon-email-bodies/](klaviyo-abandon-email-bodies/). Paste into each live flow email template.

**Subject lines (A/B later):**

| Email | Subject A | Subject B |
|-------|-----------|-----------|
| Checkout 1 | `Your {{ event.Name }} is still waiting` | `Finish your DISURI routine` |
| Checkout 2 | `Why collagen matters for your barrier` | `The science in your cart` |
| Checkout 3 | `See what others noticed in week one` | `One step left in your routine` |

---

## Phase 4 — Post-purchase + KPI

### First Customer Thank You (`TS4Hir`)

- Trigger: **Placed Order**, filter `Placed Order` count = 1
- Delay: 3h → paste [post-purchase-email-1-thank-you.html](klaviyo-abandon-email-bodies/post-purchase-email-1-thank-you.html)
- Suppress if profile in active abandon flow (Placed Order split handles this)

### First $25 Skincare KPI flow

Build per [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md) — tag `first-order-25-plus` on qualifying first order.

### Post-purchase education (merge or new flow)

| Email | Delay from order | Content |
|-------|------------------|---------|
| 2 | Day 3 | How to use purchased SKU |
| 3 | Day 7 | Week-one expectations |
| 4 | Day 14 | Cross-sell complementary SKU |
| 5 | Day 30 | Review + reorder |

Do **not** duplicate Zipify OCU Complete System pitch in same hour as checkout upsell.

---

## Phase 5 — Deliverability

Klaviyo → **Settings → Domains** — verify SPF, DKIM, DMARC green for sending domain.

**Every email footer:**
```
DISURI BEAUTY
1211 Old Okeechobee Road, #12, West Palm Beach, FL 33401
{% unsubscribe %} · {% manage_preferences %}
Made in Korea · Ships from Florida in 1–2 business days
```

**Sunset segment:** Create segment "Sunset 90d" — no open in 90 days → exclude from marketing (not transactional).

---

## Phase 6 — Measurement

See [klaviyo-abandon-measurement.md](klaviyo-abandon-measurement.md).

**Timing A/B (launch after 2-week baseline):**
- Control: Cart 5m / Checkout 15m
- Variant B: Cart 30m / Checkout 45m
- Run 4 weeks, winner by revenue per recipient on checkout flow

---

## Manual test checklist (Joel)

- [ ] Checkout abandon test (incognito, test email, wait 20m)
- [ ] Purchase suppression (complete order before Email 2)
- [ ] Cart abandon (subscribed profile, add to cart, no checkout)
- [ ] Recovery link opens cart with items
- [ ] No false free shipping in any email body
- [ ] Mobile preview: single column, large CTA

Automated pre-check: `node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs qa-report`
