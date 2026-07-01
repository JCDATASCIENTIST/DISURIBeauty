# Klaviyo Abandon — Admin Walkthrough (Next Steps)

**Owner:** Joel / Claude Code  
**Verify:** `node scripts/klaviyo-abandon-verify.mjs` (API may still show `splits: 0` — trust canvas)

---

## Session checklist

| # | Task | Flow | Status |
|---|------|------|--------|
| 1 | Placed Order splits ×3 before Emails 1–3 | Checkout `RVN5dj` | ✅ Done |
| 2 | Delete Wait 3d + discount Email 4 | Checkout `RVN5dj` | ✅ Done |
| 3 | Paste checkout HTML + subjects | Checkout `RVN5dj` | ⬜ Email 1 ✅ · Email 2 stuck (reset template) · Email 3 pending |
| 4 | Cart splits (4 total — see below) | Cart `QWdays` | ⬜ |
| 5 | Paste cart Email 1 HTML | Cart `QWdays` | ⬜ |
| 6 | Welcome trigger filter `weekly-gift-signup` | Welcome `RDHVm8` | ⬜ |
| 7 | Set Browse + Site to Manual | `Uyagdk`, `WLsFs6` | ⬜ |
| 8 | Smart Sending ON on all live flows | All | ⬜ |
| 9 | Paste First Thank You HTML | `TS4Hir` | ⬜ |
| 10 | Manual inbox test B–F | Live store | ⬜ |

**Current live names:**

| ID | Name |
|----|------|
| `RVN5dj` | EMAIL \| Abandoned Cart Checkout |
| `QWdays` | EMAIL \| Abandoned Add to Cart |
| `Uyagdk` | EMAIL \| Browse Abandonment |
| `WLsFs6` | EMAIL \| Site Abandonment |
| `RDHVm8` | EMAIL \| Welcome Series |
| `TS4Hir` | EMAIL \| First Customer Thank You |
| `T4mpSR` | EMAIL \| Second Customer Thank You |

---

## Priority 1 — Exit splits (15 min, highest ROI)

**Problem:** Buyers can get abandon emails after purchasing unless every email is gated by a **Placed Order since flow start** split.

### Checkout flow (`RVN5dj`) — verified 2026-06-28

**Done (Joel):**

- Three **Placed Order since flow start** splits before Emails 1–3 (Yes → End, No → continue)
- **Email 4 + 3d wait removed** — flow ends after Email 3
- Live timing: **15m → 23h → 1d** (API confirmed)

### Cart flow (`QWdays`) — do after checkout trim

**Trigger:** Added to Cart · **Current:** 3 emails @ 5m → 1d → 1d

**Target canvas:**

```
Trigger
  → [Split A: Checkout Started since flow start?]
       Yes → End
       No  → [Split B: Placed Order since flow start?]
                Yes → End
                No  → Wait 5m → Email 1
  → Wait 1d → [Split C: Placed Order since flow start?]
       Yes → End
       No  → Email 2
  → Wait 1d → [Split D: Placed Order since flow start?]
       Yes → End
       No  → Email 3 → End
```

**Split A (checkout dedupe — only before Email 1):**

1. **+** right after trigger  
2. **Conditional split** → **What someone has done**  
3. **Checkout Started** → **at least once** → **since starting this flow**  
4. **Yes** → End · **No** → continue to Split B  

**Splits B, C, D (same as checkout):**

- **Placed Order** → **at least once** → **since starting this flow**  
- **Yes** → End · **No** → next wait/email  

| Split | Position |
|-------|----------|
| A | After trigger — **Checkout Started** (Email 1 path only) |
| B | After trigger path, before Wait 5m → Email 1 |
| C | After Wait 1d → before Email 2 |
| D | After Wait 1d → before Email 3 |

**Verify:** Profile that reaches checkout should exit cart flow on Split A. Profile that purchases should exit on any Placed Order Yes branch.

**Note:** API `flow-audit` may still show `splits: 0` — Klaviyo does not always expose conditional splits via API. Trust the canvas.

---

## Priority 2 — Trim checkout to 3 emails ✅

**Live canvas:**

```
Trigger → [split] → 15m → Email 1 → 23h → [split] → Email 2 → 1d → [split] → Email 3 → End
```

Completed 2026-06-28. No discount Email 4 tail.

---

## Priority 3 — Paste skincare-first copy

For each email: **Edit** → **Content** → source/HTML mode → paste file contents → set subject in email settings (not in HTML).

### Checkout (`RVN5dj`)

| Email | HTML file | Subject (use A for launch) |
|-------|-----------|----------------------------|
| 1 @ 15m | [checkout-email-1-reminder.html](klaviyo-abandon-email-bodies/checkout-email-1-reminder.html) | `Your {{ event.Name }} is still waiting` |
| 2 @ ~24h | [checkout-email-2-education.html](klaviyo-abandon-email-bodies/checkout-email-2-education.html) | `Why collagen matters for your barrier` |
| 3 @ ~48h | [checkout-email-3-proof.html](klaviyo-abandon-email-bodies/checkout-email-3-proof.html) | `See what others noticed in week one` |

**Merge tags to keep intact:**

- Checkout CTA: `{{ event.extra.checkout_url }}`  
- Product name: `{{ event.Name }}`  
- Email 2 uses `{% if "Toner" in event.Name %}` syntax — preview with a Toner checkout profile  

**Klaviyo Liquid:** Use `"needle" in field` — **not** `field contains "needle"`. The latter triggers HTTP 400: *Unused 'contains' at end of if expression.*

**If Email 2 Save fails:** Reset template → paste [checkout-email-2-education.html](klaviyo-abandon-email-bodies/checkout-email-2-education.html) (now uses `in` syntax) → Save → confirm **200**.

| Email 1 | ✅ Saved |
| Email 2 | ⬜ Apply `in` syntax + save (see above) |
| Email 3 | ⬜ Paste [checkout-email-3-proof.html](klaviyo-abandon-email-bodies/checkout-email-3-proof.html) |

### Cart (`QWdays`)

| Email | HTML file | Subject |
|-------|-----------|---------|
| 1 @ 5m | [cart-email-1-reminder.html](klaviyo-abandon-email-bodies/cart-email-1-reminder.html) | `Still thinking about it?` |

Cart Emails 2–3: keep existing or lightly edit toward barrier science (no discount codes). Priority is Email 1 + checkout sequence.

### First Thank You (`TS4Hir`)

| Email | HTML file | Subject |
|-------|-----------|---------|
| 1 @ 3h | [post-purchase-email-1-thank-you.html](klaviyo-abandon-email-bodies/post-purchase-email-1-thank-you.html) | `Your DISURI routine starts now` |

**Preview checklist:**

- [ ] Checkout Started profile → Email 1 shows product name + **Complete your order** opens cart  
- [ ] `{% unsubscribe %}` renders in footer  
- [ ] Mobile width ~560px, tap targets ≥44px  

---

## Priorities 4–6 — Quick batch (~10 min)

Do these in one pass after copy is pasted:

### 4. Welcome vs weekly gift (`RDHVm8`)

1. **Welcome Series** → **Edit** → **Trigger** (Added to List)  
2. **Trigger filters** → Add **AND**: Tags → **does not contain** → `weekly-gift-signup`  
3. Save  

### 5. Pause browse + site

1. **Browse Abandonment** (`Uyagdk`) → **⋮** → **Set to manual**  
2. **Site Abandonment** (`WLsFs6`) → same  

Re-enable browse later with [browse-abandon-email-1.html](klaviyo-abandon-email-bodies/browse-abandon-email-1.html).

### 6. Smart Sending

For **Checkout, Cart, Welcome, First Thank You** → **Settings** → **Smart Sending** = **ON**.

---

## Priority 7 — Post-purchase education (optional new flow)

**First Customer Thank You** (`TS4Hir`) only has 1 email @ 3h. Add a new flow or extend:

| Email | Delay | File |
|-------|-------|------|
| 1 (existing) | 3h | post-purchase-email-1-thank-you.html |
| 2 | Day 3 | post-purchase-email-2-week-one.html |
| 3 | Day 7 | post-purchase-email-3-cross-sell.html |
| 4 | Day 30 | post-purchase-email-4-reorder.html |

**Trigger:** Placed Order, filter `Placed Order` count = 1.  
**Do not** duplicate Zipify OCU Complete System pitch same hour.

**First $25 KPI:** Build [klaviyo-first-order-kpi-playbook.md](klaviyo-first-order-kpi-playbook.md) flow separately → tag `first-order-25-plus`.

---

## Priority 8 — Deliverability

1. **Settings → Domains** — SPF, DKIM, DMARC all green  
2. **Audience → Segments → Create**  
   - Name: `Sunset 90d unengaged`  
   - Definition: Opened email **zero times** in last **90 days** AND is subscribed  
3. Exclude segment from abandon + campaign sends (not transactional)

---

## Priority 9 — Manual test (your test email)

| Step | Action | Pass? |
|------|--------|-------|
| B | Incognito → add Toner → checkout → enter test email → abandon | |
| C | Wait 20m → Email 1 in inbox, skincare-first copy | |
| D | Complete order → no Email 2 | |
| E | Recovery link opens cart with item | |
| F | Mobile preview OK | |

---

## Re-verify

```bash
cd DISURIBeauty
node scripts/klaviyo-abandon-verify.mjs
```

**Success criteria:** Cart + Checkout flows show **splits ≥ 3** each.
