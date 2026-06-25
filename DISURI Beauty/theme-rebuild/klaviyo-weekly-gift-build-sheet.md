# Klaviyo Weekly Gift — One-Page Build Sheet

**Owner:** Claude Code (Klaviyo admin)  
**Companion:** [weekly-gift-popup-klaviyo-playbook.md](weekly-gift-popup-klaviyo-playbook.md)  
**Store:** `7874da-0f.myshopify.com` · Klaviyo `company_id=SgaEqb`

Use this doc field-by-field in Klaviyo. Tokens match the live Claude Design theme (`#F4F2EE` porcelain, `#B82024` crimson, `#2A2A2A` noir).

---

## Live this week (verified 2026-06-25)

Pulled from [disuribeauty.com/pages/gift-of-the-week](https://disuribeauty.com/pages/gift-of-the-week).

| Field | Value |
|-------|-------|
| **Shade name (headline)** | **Forbidden Red** |
| **Product title (full)** | DISURI Beauty Glossy Blast Lip Gloss - Forbidden Red |
| **Page H1** | Glossy Blast Lip Gloss |
| **Counter** | 0 of 100 gifts claimed this week |
| **Gift image (popup + email)** | `https://disuribeauty.com/cdn/shop/files/GLOSSY-BLAST-LG-61-1_1.jpg?v=1728533150&width=600` |
| **Gift image (hero, high-res)** | `https://disuribeauty.com/cdn/shop/files/GLOSSY-BLAST-LG-61-1_1.jpg?v=1728533150&width=1200` |
| **Gift PDP** | `https://disuribeauty.com/products/disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-forbidden-red-m61` |
| **Gift of the Week page** | `https://disuribeauty.com/pages/gift-of-the-week` |
| **Skincare collection** | `https://disuribeauty.com/collections/skincare` |

**Popup image:** Upload or paste the `width=600` URL above into Klaviyo form image block.

**Announcement bar:** Theme reads `disuri.gift_of_week` metafield automatically (fixed 2026-06-25). Shows shade name from product title suffix or `gift_of_week_label` metafield.

**Logo note:** Live nav uses a **text logo** (DISURI Beauty), not an image file. Welcome email uses matching text masthead below (no logo PNG required).

### Pre-filled Welcome Email 1 (EN) — paste into Klaviyo now

**Subject:** `Forbidden Red is this week's free lip gloss (+ how to claim it)`  
**Preview:** `Spend $25 on skincare. Forbidden Red is yours, free.`

See **Section C-ready** at the bottom of this doc for full HTML with all URLs filled in.

---

## A. Sign-up form — Klaviyo editor map

**Path:** Klaviyo → **Sign-up forms** → edit the live popup → **Desktop** and **Mobile** tabs (style both; mobile inherits unless overridden).

### A1. Form type and layout

| Klaviyo setting | Value |
|-----------------|-------|
| Form type | Popup (modal) |
| Layout | **Single column**, text + optional image on top |
| Image | **This week:** `https://disuribeauty.com/cdn/shop/files/GLOSSY-BLAST-LG-61-1_1.jpg?v=1728533150&width=600` (Forbidden Red). Update weekly with rotation. |
| Image position | Top (mobile + desktop) |
| Overlay / backdrop | Black at **40%** opacity |
| Modal width (desktop) | **480px** max |
| Modal padding | **32px** all sides |
| Border radius | **2px** (not rounded pill) |
| Drop shadow | Off or very subtle (`0 4px 12px rgba(42,42,42,0.08)`) |
| Close button | Top-right **×**, color `#2A2A2A` at 60% opacity |

### A2. Colors (global form styles)

| Element | Hex | Notes |
|---------|-----|-------|
| Form background | `#F4F2EE` | Soft Porcelain |
| Headline text | `#2A2A2A` | Deep Charcoal Noir |
| Body text | `#2A2A2A` at **72%** opacity (or `#5C5C5C`) | Muted, readable |
| Eyebrow text | `rgba(42,42,42,0.6)` or `#6B6B6B` | Uppercase label |
| Input background | `#FFFFFF` | White field on porcelain |
| Input border | `rgba(42,42,42,0.18)` or `#D4D0CB` | Hairline |
| Input text | `#2A2A2A` | |
| Input placeholder | `rgba(42,42,42,0.45)` | "Your email address" |
| Primary button background | `#B82024` | Power Crimson |
| Primary button text | `#FFFFFF` | |
| Primary button hover | `#2A2A2A` | Matches site `.btn-primary:hover` |
| Link color | `#B82024` | If any inline links |
| Error text | `#9C2A2A` | Brand error token |

### A3. Typography (per text block)

Klaviyo may not load licensed Bodoni/Mrs Eaves. Use these **Google Font substitutes** (available in Klaviyo custom fonts):

| Role | Klaviyo font | Weight | Size (desktop) | Size (mobile) | Other |
|------|--------------|--------|----------------|---------------|-------|
| Eyebrow | **Cabin** | 600 | 12px | 11px | ALL CAPS, letter-spacing **0.18em**, color muted |
| Headline | **Bodoni Moda** (fallback: **Libre Baskerville**) | 400 | **28px** | **24px** | Line-height **1.2**, color `#2A2A2A` |
| Body | **Cabin** | 400 | **16px** | **15px** | Line-height **1.5** |
| Email label (if shown) | **Cabin** | 500 | 14px | 14px | Optional; placeholder-only is fine |
| Button | **Cabin** | 600 | **14px** | **14px** | ALL CAPS, letter-spacing **0.08em** |
| Trust line (footer) | **Cabin** | 400 | **12px** | **11px** | Color muted, centered |

**Custom font import (if Klaviyo allows):**
```
https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400&family=Cabin:wght@400;500;600&display=swap
```

### A4. Copy blocks — English (paste exactly)

| Block | Text |
|-------|------|
| Eyebrow | `GIFT OF THE WEEK` |
| Headline | `Get the weekly free lip gloss alert.` |
| Body | `Every Thursday we feature a new shade. Spend $25 on skincare and it is yours, free. We will email you the shade, the claim link, and a short list of what to add if you are close to $25.` |
| Email placeholder | `Your email address` |
| Submit button | `Send me the weekly gift` |
| Trust line | `Made in Korea · Unsubscribe anytime · No spam` |

**Spacing between blocks:** 12px eyebrow→headline, 16px headline→body, 24px body→email, 12px email→button, 20px button→trust.

### A5. Success step — English

| Block | Text |
|-------|------|
| Headline | `You are on the list.` |
| Body | `This week's gift is live. See the shade and how to claim it.` |
| Button | `See this week's gift →` |
| Button URL | `https://disuribeauty.com/pages/gift-of-the-week` |
| Optional subline | `Spend $25 on skincare · gloss added free at checkout.` |

Success step styling: same porcelain background, same fonts. Swap primary button for secondary-style link if Klaviyo supports it; otherwise keep crimson button.

### A6. Copy blocks — Spanish (locale variant)

| Block | Text |
|-------|------|
| Eyebrow | `REGALO DE LA SEMANA` |
| Headline | `Recibe la alerta semanal del labial gratis.` |
| Body | `Cada jueves presentamos un tono nuevo. Gasta $25 en skincare y es tuyo, gratis. Te enviaremos el tono, el enlace para reclamarlo y una lista breve de qué agregar si te falta poco para $25.` |
| Submit button | `Enviar el regalo semanal` |
| Trust line | `Hecho en Corea · Cancela cuando quieras · Sin spam` |
| Success headline | `Ya estás en la lista.` |
| Success body | `El regalo de esta semana ya está activo. Mira el tono y cómo reclamarlo.` |
| Success CTA | `Ver el regalo de esta semana →` |
| Success URL | `https://disuribeauty.com/pages/gift-of-the-week?locale=es` |

### A7. Behavior, list, and tags

| Setting | Value |
|---------|-------|
| Subscribe to | Master List `RbYjU5` |
| Tag on submit | `weekly-gift-signup` |
| Trigger | **8–12 seconds** after page load |
| Show on URLs | Homepage `/`, `/collections/skincare`, `/collections/bundles`, `/pages/gift-of-the-week` |
| Do not show | Cart, checkout |
| Suppress | Existing subscribers, recent purchasers (Smart Sending) |
| Teaser / sticky bar | Off (keep one interrupt only) |
| Countdown timer | **Off** |
| Discount code on signup | **Off** (unless Joel explicitly requests) |
| SMS / phone step | **Off** |
| Publish | **Publish** after both desktop + mobile reviewed |

---

## B. Welcome Email 1 — flow setup

**Path:** Klaviyo → **Flows** → Welcome Series (or create **Weekly Gift Welcome**) → trigger: **Subscribed to list** Master List + filter **Tag equals** `weekly-gift-signup` (or segment popup signups).

| Setting | Value |
|---------|-------|
| Trigger | Subscribed to Master List |
| Filter (recommended) | Profile has tag `weekly-gift-signup` |
| Send delay | **Immediate** (0 minutes) |
| Smart Sending | On |

### B1. Email settings (EN)

| Field | Value |
|-------|-------|
| From name | `DISURI Beauty` |
| From email | (existing brand sender) |
| Reply-to | (support inbox) |
| Subject | `This week's free lip gloss (+ how to claim it)` |
| Preview text | `Spend $25 on skincare. This week's shade is yours, free.` |

### B2. Email settings (ES)

| Field | Value |
|-------|-------|
| Subject | `El labial gratis de esta semana (+ cómo reclamarlo)` |
| Preview text | `Gasta $25 en skincare. El tono de esta semana es tuyo, gratis.` |

### B3. Email design tokens (match popup)

| Element | Value |
|---------|-------|
| Body background | `#F4F2EE` |
| Content card (optional inner) | `#FFFFFF` with 2px radius |
| Max content width | **600px** |
| Headline font | Bodoni Moda / Libre Baskerville, 28px, `#2A2A2A` |
| Body font | Cabin / Helvetica, 16px, `#2A2A2A` |
| Eyebrow | Cabin 12px uppercase, letter-spacing 0.18em, muted |
| Primary CTA button | `#B82024` bg, white text, 14px uppercase, full width on mobile |
| Secondary CTA | Text link `#B82024` with arrow → |
| Divider | 1px `#D4D0CB` |
| Footer | 12px muted, unsubscribe link required |

**Dynamic content (update weekly):**
- `[SHADE_NAME]` — from `shop.metafields.disuri.gift_of_week` product title
- `[GIFT_IMAGE_URL]` — featured image URL from that product (1:1 crop)
- `[GIFT_PDP_URL]` — product URL on disuribeauty.com

---

## C. Welcome Email 1 — HTML body (EN)

Paste into Klaviyo drag-and-drop or HTML block. Replace `[SHADE_NAME]` and `[GIFT_IMAGE_URL]` each week (or use Klaviyo Shopify product block pointed at gift-of-week product).

```html
<!-- DISURI Weekly Gift Welcome Email 1 — EN -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F2EE;margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding-bottom:24px;">
            <a href="https://disuribeauty.com" style="text-decoration:none;">
              <img src="https://cdn.shopify.com/s/files/1/0612/3456/7890/files/disuri-logo.png" alt="DISURI Beauty" width="140" style="display:block;border:0;" />
            </a>
          </td>
        </tr>

        <!-- Hero image -->
        <tr>
          <td align="center" style="padding-bottom:24px;">
            <img src="[GIFT_IMAGE_URL]" alt="[SHADE_NAME]" width="280" style="display:block;border:0;border-radius:2px;max-width:100%;" />
          </td>
        </tr>

        <!-- Eyebrow -->
        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#6B6B6B;padding-bottom:12px;">
            Gift of the week
          </td>
        </tr>

        <!-- Headline -->
        <tr>
          <td align="center" style="font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#2A2A2A;padding-bottom:16px;">
            [SHADE_NAME] is this week's gift.
          </td>
        </tr>

        <!-- Mechanic -->
        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#2A2A2A;padding:0 24px 24px;">
            Spend <strong>$25 on Skincare</strong> and this lip gloss is yours, free.<br><br>
            Every Thursday we feature a new shade. See the live counter and claim link on the Gift of the Week page.
          </td>
        </tr>

        <!-- Primary CTA -->
        <tr>
          <td align="center" style="padding-bottom:12px;">
            <a href="https://disuribeauty.com/pages/gift-of-the-week" style="display:inline-block;background-color:#B82024;color:#FFFFFF;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:2px;">
              See this week's gift →
            </a>
          </td>
        </tr>

        <!-- Secondary CTA -->
        <tr>
          <td align="center" style="padding-bottom:32px;">
            <a href="https://disuribeauty.com/collections/skincare" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#B82024;text-decoration:none;">
              Shop skincare →
            </a>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="border-top:1px solid #D4D0CB;padding-top:24px;padding-bottom:16px;">
            <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;color:#2A2A2A;margin:0 0 12px;text-align:center;">
              Need help hitting $25?
            </p>
            <p style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#2A2A2A;margin:0 0 8px;padding:0 24px;">
              • <strong>Triple Collagen Firming Toner</strong> ($27.99) — one item, threshold cleared<br>
              • <strong>The Complete DISURI System</strong> — full 3-step ritual<br>
              • <a href="https://disuribeauty.com/#skin-guide" style="color:#B82024;text-decoration:none;">Build your ritual →</a>
            </p>
          </td>
        </tr>

        <!-- Trust footer -->
        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#6B6B6B;padding-top:16px;">
            Made in Korea · Ships from Miami in 1–2 business days<br>
            {% unsubscribe %} · {% manage_preferences %}
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
```

**Note:** Replace logo `src` with the live Shopify Files URL if different. Klaviyo unsubscribe tags may use `{% unsubscribe_link %}` depending on editor version.

---

## D. Welcome Email 1 — plain text (EN)

```
DISURI Beauty — Gift of the week

[SHADE_NAME] is this week's gift.

Spend $25 on Skincare and this lip gloss is yours, free.

Every Thursday we feature a new shade. See the live counter and claim link:
https://disuribeauty.com/pages/gift-of-the-week

Shop skincare:
https://disuribeauty.com/collections/skincare

Need help hitting $25?
• Triple Collagen Firming Toner ($27.99) — one item, threshold cleared
• The Complete DISURI System — full 3-step ritual
• Build your ritual: https://disuribeauty.com/#skin-guide

Made in Korea · Ships from Miami in 1–2 business days.
```

---

## E. Welcome Email 1 — HTML body (ES)

Same structure; swap copy:

| Block | Text |
|-------|------|
| Eyebrow | `Regalo de la semana` |
| Headline | `[SHADE_NAME] es el regalo de esta semana.` |
| Mechanic | `Gasta <strong>$25 en Skincare</strong> y este labial es tuyo, gratis.` |
| Body line 2 | `Cada jueves presentamos un tono nuevo. Mira el contador en vivo y el enlace para reclamarlo.` |
| Primary CTA | `Ver el regalo de esta semana →` |
| Primary URL | `https://disuribeauty.com/pages/gift-of-the-week?locale=es` |
| Secondary CTA | `Ver skincare →` |
| AOV header | `¿Te falta poco para $25?` |
| Footer | `Hecho en Corea · Enviamos desde Miami en 1–2 días hábiles` |

**ES headline this week:** `Forbidden Red es el regalo de esta semana.`

---

## C-ready. Welcome Email 1 — pre-filled HTML (Forbidden Red, 2026-06-25)

Copy-paste into Klaviyo HTML block. No placeholders left.

```html
<!-- DISURI Weekly Gift Welcome Email 1 — EN — Forbidden Red -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4F2EE;margin:0;padding:0;">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <tr>
          <td align="center" style="padding-bottom:24px;">
            <a href="https://disuribeauty.com" style="font-family:Georgia,'Times New Roman',serif;font-size:18px;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;color:#2A2A2A;">
              DISURI <span style="color:#B82024;">Beauty</span>
            </a>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding-bottom:24px;">
            <a href="https://disuribeauty.com/pages/gift-of-the-week">
              <img src="https://disuribeauty.com/cdn/shop/files/GLOSSY-BLAST-LG-61-1_1.jpg?v=1728533150&amp;width=600" alt="Forbidden Red lip gloss" width="280" style="display:block;border:0;border-radius:2px;max-width:100%;" />
            </a>
          </td>
        </tr>

        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#6B6B6B;padding-bottom:12px;">
            Gift of the week
          </td>
        </tr>

        <tr>
          <td align="center" style="font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.25;color:#2A2A2A;padding-bottom:16px;">
            Forbidden Red is this week's gift.
          </td>
        </tr>

        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:16px;line-height:1.5;color:#2A2A2A;padding:0 24px 24px;">
            Spend <strong>$25 on Skincare</strong> and this lip gloss is yours, free.<br><br>
            Every Thursday we feature a new shade. See the live counter and claim link on the Gift of the Week page.
          </td>
        </tr>

        <tr>
          <td align="center" style="padding-bottom:12px;">
            <a href="https://disuribeauty.com/pages/gift-of-the-week" style="display:inline-block;background-color:#B82024;color:#FFFFFF;font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:14px 32px;border-radius:2px;">
              See this week's gift →
            </a>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding-bottom:32px;">
            <a href="https://disuribeauty.com/collections/skincare" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#B82024;text-decoration:none;">
              Shop skincare →
            </a>
          </td>
        </tr>

        <tr>
          <td style="border-top:1px solid #D4D0CB;padding-top:24px;padding-bottom:16px;">
            <p style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;color:#2A2A2A;margin:0 0 12px;text-align:center;">
              Need help hitting $25?
            </p>
            <p style="font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#2A2A2A;margin:0 0 8px;padding:0 24px;">
              • <strong>Triple Collagen Firming Toner</strong> ($27.99) — one item, threshold cleared<br>
              • <strong>The Complete DISURI System</strong> — full 3-step ritual<br>
              • <a href="https://disuribeauty.com/#skin-guide" style="color:#B82024;text-decoration:none;">Build your ritual →</a>
            </p>
          </td>
        </tr>

        <tr>
          <td align="center" style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:#6B6B6B;padding-top:16px;">
            Made in Korea · Ships from Miami in 1–2 business days<br>
            {% unsubscribe %} · {% manage_preferences %}
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
```

### C-ready plain text (EN)

```
DISURI Beauty — Gift of the week

Forbidden Red is this week's gift.

Spend $25 on Skincare and this lip gloss is yours, free.

Every Thursday we feature a new shade. See the live counter and claim link:
https://disuribeauty.com/pages/gift-of-the-week

Shop skincare:
https://disuribeauty.com/collections/skincare

See the shade:
https://disuribeauty.com/products/disuri-beauty-glossy-blast-lip-gloss-ultra-shiny-non-sticky-vegan-cruelty-free-formula-forbidden-red-m61

Need help hitting $25?
• Triple Collagen Firming Toner ($27.99) — one item, threshold cleared
• The Complete DISURI System — full 3-step ritual
• Build your ritual: https://disuribeauty.com/#skin-guide

Made in Korea · Ships from Miami in 1–2 business days.
```

---

## F. Visual reference (popup wireframe)

```
┌──────────────────────────────────┐
│                            [×]   │
│      ┌────────────────────┐      │
│      │  [gift product 1:1]│      │
│      └────────────────────┘      │
│                                  │
│      GIFT OF THE WEEK            │
│      Get the weekly free         │
│      lip gloss alert.            │
│                                  │
│      Every Thursday we feature   │
│      a new shade. Spend $25 on   │
│      skincare and it is yours,   │
│      free. We will email you…    │
│                                  │
│      ┌────────────────────┐      │
│      │ Your email address │      │
│      └────────────────────┘      │
│      ┌────────────────────┐      │
│      │ SEND ME THE WEEKLY │      │
│      │       GIFT         │      │
│      └────────────────────┘      │
│                                  │
│   Made in Korea · Unsubscribe    │
│   anytime · No spam              │
└──────────────────────────────────┘
     Background: #F4F2EE
     Button: #B82024 → hover #2A2A2A
```

---

## G. QA checklist (5 minutes)

- [ ] Popup: porcelain bg, crimson button, Bodoni/Cabin fonts, no countdown
- [ ] Popup copy matches homepage newsletter (`disuri.newsletter.*`)
- [ ] Test submit → Master List + tag `weekly-gift-signup`
- [ ] Success step → `/pages/gift-of-the-week`
- [ ] Welcome Email 1 sends within 5 min; `[SHADE_NAME]` and image correct
- [ ] All links 200 (gift page, skincare, skin guide)
- [ ] No em dashes anywhere
- [ ] No false free-shipping or $50/$100 tier copy
- [ ] Incognito hard refresh on disuribeauty.com

---

## H. Weekly maintenance (Claude Code)

Each Thursday rotation:

1. Update popup image to new shade (Sign-up forms → image block).
2. Update Welcome Email 1 dynamic product/image (or swap `[SHADE_NAME]` + `[GIFT_IMAGE_URL]`).
3. Clone weekly campaign from template `TmyjVj` per [gift-rotation-calendar.md](gift-rotation-calendar.md).

**Handoff:** After publish, Joel verifies with `Cmd+Shift+R` or incognito on disuribeauty.com.
