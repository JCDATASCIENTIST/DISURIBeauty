# Klaviyo Abandon — Measurement & A/B Plan

**Owner:** Joel · **Review:** Weekly (Mon)  
**Companion:** [klaviyo-abandon-conversion-build-sheet.md](klaviyo-abandon-conversion-build-sheet.md)

---

## North-star metrics

| Metric | Where | 90-day target |
|--------|-------|---------------|
| **Revenue per recipient** (checkout flow) | Klaviyo → Flows → Abandoned Checkout → Analytics | +15–25% vs baseline |
| **Placed order rate** (checkout flow) | Same | Baseline + 15% |
| **Add-to-cart → checkout rate** | Klaviyo + Shopify | +10% |
| `weekly-gift-signup` → `first-order-25-plus` | [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md) | Track weekly |
| Unsubscribe rate per send | Flow analytics | < 0.1% |
| Spam complaint rate | Klaviyo deliverability | < 0.01% |

---

## Baseline capture (Week 0)

Record these **before** copy/filter changes:

| Flow ID | Flow name | 30d recipients | 30d RPR | 30d placed order rate | 30d unsub rate |
|---------|-----------|----------------|---------|----------------------|----------------|
| `RVN5dj` | Abandoned Checkout | | | | |
| `QWdays` | Abandoned Cart | | | | |
| `TS4Hir` | First Thank You | | | | |

**Path:** Klaviyo → Analytics → Flows → select flow → Last 30 days → export or screenshot.

---

## Weekly dashboard (5 cards)

Create Klaviyo dashboard **"DISURI Abandon Recovery"**:

1. **Checkout flow revenue** — line chart, 30 days  
2. **Checkout placed order rate** — vs previous period  
3. **Cart flow revenue** — bar chart  
4. **First-order-25-plus tags** — profile count this week (manual segment or KPI flow)  
5. **Flow unsubscribe rate** — checkout + cart combined  

Optional: Shopify **Reports → Marketing** for attributed revenue cross-check.

---

## Timing A/B test (Week 3+, after baseline)

**Flow:** `RVN5dj` Abandoned Checkout — Email 1 delay only.

| Variant | Email 1 delay | Traffic |
|---------|---------------|---------|
| A (control) | 15 minutes | 50% |
| B | 45 minutes | 50% |

**Primary success metric:** Revenue per recipient (Email 1 send cohort)  
**Secondary:** Click rate, placed order rate within 7 days  
**Duration:** 4 weeks minimum  
**Winner:** Apply to cart flow (`QWdays`) second

Document results in this file under **Results** section below.

---

## Copy A/B backlog (after timing test)

| Test | Variable | Hypothesis |
|------|----------|------------|
| Subject skincare vs product name | Subject line | Skincare-first subject lifts opens for cold traffic |
| Education email ingredient block | Email 2 | Dynamic toner vs cream copy lifts clicks |
| Email 3 incentive | Footnote only vs 10% code (cold only) | Code lifts conversion but may hurt margin |

No gloss-led subjects or heroes in any variant.

---

## SMS phase 2 (defer 4–6 weeks)

After email RPR baseline stable:

- One SMS on **Checkout Started** only  
- Delay: 45–60 min  
- Opt-in subscribers only  
- Copy: "Your DISURI order is waiting: [link]"  
- Measure incremental RPR vs email-only cohort  

---

## Results log

| Date | Change | Checkout RPR | Notes |
|------|--------|--------------|-------|
| 2026-06-28 | Baseline + build sheet + skincare copy bodies | TBD | Automated QA PASS (metrics + embed) |

---

## CLI audit (repeat weekly)

```bash
cd DISURIBeauty
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs qa-report
node ~/.cursor/skills/klaviyo/scripts/klaviyo-api.mjs flow-audit
```
