# Ultimate Snail Mucin Cream — FTC-safe testimonial copy

**Product:** `disuri-beauty-ultimate-snail-mucin-cream`  
**Use for:** Loox review (when launched), PDP pull quote, email/social (with permission)  
**Updated:** 2026-06-29

---

## What the customer told you (internal — do not publish verbatim)

> Their daughter’s eczema got better and she was able to start wearing makeup.

That story is real and powerful. On the storefront we translate it into **appearance + experience** language only. Cosmetics cannot claim to treat, cure, or heal eczema.

---

## Recommended Loox review (primary)

**Rating:** 5 stars  
**Reviewer name:** Use first name + last initial only unless you have written permission for full name (e.g. *Maria T.*)  
**Title (optional):** *Makeup goes on smoother now*

**Review body:**

> I bought this for my teenage daughter’s dry, reactive patches on her cheeks. After a few weeks of using it morning and night, her skin **looks** calmer and less flaky — and she’s finally comfortable wearing makeup again. It layers well under foundation without pilling. We’re not claiming it fixed a medical condition; it just helped her skin **look and feel** more comfortable day to day.

**Required cosmetic disclaimer (Loox footer or below review if the app allows):**

> Individual results vary. Cosmetic product for external use only. Not intended to diagnose, treat, cure, or prevent any disease.

---

## Shorter Loox version (mobile-friendly)

> My daughter’s cheeks used to look so dry and patchy that makeup never sat right. This cream helped her skin **look** smoother and calmer — she actually enjoys getting ready now. Cosmetic use only; not a treatment for eczema.

---

## PDP pull quote (paste under price or in product description)

**Option A — recommended**

> *“My daughter’s skin looks calmer and less flaky — makeup finally goes on the way she wants it to.”*  
> — Verified customer

**Option B — shorter**

> *“Helped her dry, reactive patches look smoother. Makeup sits better now.”*  
> — Parent of a teen customer

**Option C — barrier-focused (no teen mention)**

> *“Dry, reactive areas look calmer. Foundation glides on instead of catching on flakes.”*  
> — Verified customer

Add one line below any pull quote on the PDP:

> *Cosmetic moisturizer. Helps improve the appearance of skin with consistent use. Not a treatment for eczema or any medical condition.*

---

## Spanish (ES)

**Loox review:**

> Compré esta crema para las zonas secas y reactivas de mi hija adolescente. Después de unas semanas usándola mañana y noche, su piel **se ve** más calmada y con menos descamación — por fin se siente cómoda usando maquillaje otra vez. Se aplica bien bajo la base sin grumos. Producto cosmético; no trata ninguna condición médica.

**PDP pull quote:**

> *“La piel de mi hija se ve más calmada y con menos descamación — el maquillaje por fin se aplica como ella quiere.”*  
> — Cliente verificada

---

## Do not publish (rewrite if you see these)

| ❌ Avoid | ✅ Use instead |
|--------|----------------|
| Her eczema got better | Her skin **looks** calmer / less flaky |
| Cleared her eczema | Helped improve the **appearance** of dry, reactive patches |
| Healed her skin | Helped her skin **look and feel** more comfortable |
| Fixed her barrier / cured | Supports the **look** of a stronger barrier |
| Medical outcome guaranteed | Individual results vary |

---

## Before you go live — checklist

- [ ] **Written permission** from the customer to use the quote (email reply is fine). Keep on file.
- [ ] Review is tied to a **verified purchase** in Loox when possible.
- [ ] No “eczema cured” language in review, PDP, or ads.
- [ ] Loox remains **hidden** until you flip `show_loox_reviews` in Theme settings (target end Q3 per AGENTS.md), unless you add the pull quote to product description HTML first.
- [ ] If you feature this on Instagram/TikTok, same appearance-based rules apply.

---

## Where to paste (when ready)

| Surface | Action |
|---------|--------|
| **Loox admin** | Import or manually add review on `disuri-beauty-ultimate-snail-mucin-cream` |
| **Shopify product description** | Append pull quote + disclaimer to [product-copy-bodies/disuri-beauty-ultimate-snail-mucin-cream.html](product-copy-bodies/disuri-beauty-ultimate-snail-mucin-cream.html), then run `scripts/update-product-descriptions.mjs` |
| **Homepage testimonials** | Theme Editor → Testimonials section → add block (optional; keep quote short) |
| **Abandon / post-purchase email** | Do not use until Loox is live and review is verified; never as a cure claim |

---

## Suggested HTML snippet (product description)

```html
<blockquote class="disuri-testimonial" style="margin:24px 0;padding:20px 22px;border:1px solid #e8e4df;border-radius:4px;background:#faf8f5;">
  <p class="disuri-testimonial__quote" style="font-style:italic;margin:0 0 12px;">“My daughter’s skin looks calmer and less flaky — makeup finally goes on the way she wants it to.”</p>
  <cite class="disuri-testimonial__author" style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;font-style:normal;color:rgba(42,42,42,0.56);">Verified customer</cite>
</blockquote>
<p><em>Cosmetic moisturizer. Helps improve the appearance of skin with consistent use. Not a treatment for eczema or any medical condition. Individual results vary.</em></p>
```
