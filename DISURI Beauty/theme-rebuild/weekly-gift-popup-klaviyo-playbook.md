# Weekly Gift Popup + Signup Funnel — Klaviyo Playbook

**Owner:** Claude Code (commerce / Klaviyo)  
**Theme alignment:** Cursor updated homepage newsletter locales to match this copy (EN/ES).  
**Related:** [gift-funnel-vision.md](gift-funnel-vision.md) (Brunson model, primary KPI, OCU stack), [klaviyo-weekly-gift-build-sheet.md](klaviyo-weekly-gift-build-sheet.md) (field-by-field form + Welcome Email 1 HTML), [gift-of-the-week-landing-page.md](gift-of-the-week-landing-page.md), [gift-rotation-calendar.md](gift-rotation-calendar.md)

## Goal

Replace the generic Klaviyo popup ("Welcome to your best skin journey / Count me in") with a **weekly free gift alert** signup that feeds a **first $25+ order** funnel (primary KPI — see [gift-funnel-vision.md](gift-funnel-vision.md)):

1. Builds the Master List with a `weekly-gift-signup` tag
2. Educates the $25 Skincare → free lip gloss mechanic (honest, no fake scarcity)
3. Drives clicks to `/pages/gift-of-the-week` and `/collections/skincare`
4. Increases AOV by recommending what to add when close to $25
5. **Converts leads to buyers** — success = first order ≥ $25 Skincare + free gloss redeemed (`first-order-25-plus` tag)

The popup is **not in theme code**. It is served by Klaviyo onsite embed (`company_id=SgaEqb`).

---

## Funnel map

```
Klaviyo popup signup
  → Master List (RbYjU5) + tag weekly-gift-signup
  → Welcome Email 1 (immediate)
  → /pages/gift-of-the-week
  → /collections/skincare (+ skin guide / bundles if short of $25)
  → Cart gift ladder at $25
  → ★ First $25+ order + free gloss (PRIMARY KPI → tag first-order-25-plus)
  → OCU #1: Complete DISURI System
  → OCU #2: Subscription (ReCharge)
  → OCU #3: Queens community
  → Weekly drop email (Thu, template TmyjVj)
  → /pages/gift-of-the-week (repeat)
```

Full strategy: [gift-funnel-vision.md](gift-funnel-vision.md).

---

## Part 1 — Sign-up form copy

Edit the **active popup** in Klaviyo Admin → **Sign-up forms** (desktop + mobile).

### English

| Element | Copy |
|---------|------|
| Eyebrow | GIFT OF THE WEEK |
| Headline | Get the weekly free lip gloss alert. |
| Body | Every Thursday we feature a new shade. Spend $25 on skincare and it is yours, free. We will email you the shade, the claim link, and a short list of what to add if you are close to $25. |
| Primary CTA | Send me the weekly gift |
| Success headline | You are on the list. |
| Success body | This week's gift is live. See the shade and how to claim it. |
| Success CTA | See this week's gift → |
| Success CTA URL | `https://disuribeauty.com/pages/gift-of-the-week` |
| Micro trust (footer) | Made in Korea · Unsubscribe anytime · No spam |

### Spanish

Use a locale-targeted form variant or Klaviyo locale rules for ES visitors.

| Element | Copy |
|---------|------|
| Eyebrow | REGALO DE LA SEMANA |
| Headline | Recibe la alerta semanal del labial gratis. |
| Body | Cada jueves presentamos un tono nuevo. Gasta $25 en skincare y es tuyo, gratis. Te enviaremos el tono, el enlace para reclamarlo y una lista breve de qué agregar si te falta poco para $25. |
| Primary CTA | Enviar el regalo semanal |
| Success headline | Ya estás en la lista. |
| Success body | El regalo de esta semana ya está activo. Mira el tono y cómo reclamarlo. |
| Success CTA | Ver el regalo de esta semana → |
| Success CTA URL | `https://disuribeauty.com/pages/gift-of-the-week?locale=es` |
| Micro trust (footer) | Hecho en Corea · Cancela cuando quieras · Sin spam |

### Copy rules (Brand KB)

- No em dashes. Use periods, commas, colons, middot (·), or arrows (→).
- No countdown timers, "last chance," or fake scarcity.
- Do not promise free shipping or phantom gift tiers ($50/$100).
- Live mechanic only: **$25 on Skincare collection → 1 free lip gloss per order** (automatic discount).

---

## Part 2 — Klaviyo admin checklist

### A. Form settings

1. Open **Sign-up forms** → edit the live popup (replace "Welcome to your best skin journey").
2. Paste EN copy above; add ES variant if using locale targeting.
3. **Publish** the form after edits.

### B. Styling (match Claude Design where Klaviyo allows)

| Token | Value | Use |
|-------|-------|-----|
| Porcelain | `#F5F0EB` | Background |
| Crimson | `#B82024` | Primary button |
| Noir | `#1A1A1A` | Headline text |
| Bodoni Moda (or closest serif) | — | Headline |
| Cabin (or closest sans) | — | Body |

Keep layout simple: eyebrow → headline → body → email field → CTA → trust line.

### C. List, tag, and trigger

| Setting | Value |
|---------|-------|
| List | Master List `RbYjU5` |
| Tag on submit | `weekly-gift-signup` |
| Trigger delay | 8–12 seconds |
| Show on | Homepage, collection pages (Skincare, Bundles) |
| Suppress | Existing subscribers, recent purchasers (Smart Sending) |
| Do not show | Checkout, cart drawer |

### D. Welcome flow — Email 1 (immediate)

Replace generic "skin journey" welcome with weekly-gift education.

**Subject (EN):** `This week's free lip gloss (+ how to claim it)`  
**Subject (ES):** `El labial gratis de esta semana (+ cómo reclamarlo)`

**Structure:**

1. **Hero:** Current gift product image (from `disuri.gift_of_week` metafield / live PDP)
2. **Headline:** `[Shade name] is this week's gift.`
3. **Mechanic:** `Spend $25 on Skincare → this gloss is yours, free.`
4. **Primary CTA:** `See this week's gift` → `https://disuribeauty.com/pages/gift-of-the-week`
5. **Secondary CTA:** `Shop skincare` → `https://disuribeauty.com/collections/skincare`
6. **AOV block (static recommendations):**
   - "Not sure what to add?" → **Triple Collagen Firming Toner** ($27.99) clears $25 in one item
   - Or **The Complete DISURI System** ($101.97) for the full ritual
   - Link to skin guide: `https://disuribeauty.com/#skin-guide`
7. **Footer:** Made in Korea · Unsubscribe · No countdown offers

**Do not include** unless Joel explicitly requests: "% off first order" or expiration countdown.

### E. Weekly campaign alignment

- Master template: `TmyjVj` ("Weekly Free Gift — Miami Splash")
- Ensure popup subscribers are in the weekly send audience (Master List included, Recent Buyers `SA55Ku` excluded per runbook)
- Primary CTA in weekly email: `/pages/gift-of-the-week` (shows live "X of Y claimed" counter)
- Clone + update each week per [gift-rotation-calendar.md](gift-rotation-calendar.md)

---

## Part 3 — Welcome Email 1 draft (EN)

Use as starting HTML/text in Klaviyo. Swap `[SHADE]` and image URL weekly from live gift product.

```
Subject: This week's free lip gloss (+ how to claim it)

[GIFT PRODUCT IMAGE]

THIS WEEK'S GIFT: [SHADE NAME]

Spend $25 on Skincare → this lip gloss is yours, free.

Every Thursday we feature a new shade. This week: [SHADE NAME].
See the live counter and claim link on the Gift of the Week page.

[ See this week's gift → ]  → /pages/gift-of-the-week
[ Shop skincare → ]         → /collections/skincare

Need help hitting $25?
• Triple Collagen Firming Toner ($27.99) — one item, threshold cleared
• The Complete DISURI System — full 3-step ritual
• Build your ritual → disuribeauty.com/#skin-guide

Made in Korea · Ships from Miami in 1–2 business days.
Unsubscribe anytime.
```

---

## Part 4 — QA before go-live

- [ ] Popup shows new copy (incognito, hard refresh)
- [ ] Test submit → profile on Master List with `weekly-gift-signup` tag
- [ ] Welcome Email 1 sends within 5 minutes; links resolve (no 404)
- [ ] Success state CTA goes to `/pages/gift-of-the-week`
- [ ] Homepage newsletter block matches popup promise (theme locales pushed)
- [ ] No em dashes in form or email copy
- [ ] No false free-shipping or $50/$100 tier messaging

---

## Part 5 — Storefront references (theme, already live)

| Surface | URL / key |
|---------|-----------|
| Gift of the Week page | `/pages/gift-of-the-week` |
| Skincare collection | `/collections/skincare` |
| Skin guide (AOV) | `/#skin-guide` |
| Bundles | `/collections/bundles` |
| Cart ladder copy | `disuri.cart.ladder_25`, `ladder_complete` |
| Homepage newsletter | `disuri.newsletter.*` locales (aligned with popup) |

---

## Handoff note for Joel

After Claude Code publishes the Klaviyo form, hard refresh (`Cmd+Shift+R`) or use incognito on disuribeauty.com to confirm the popup. Theme newsletter copy is already aligned on the homepage footer section.
