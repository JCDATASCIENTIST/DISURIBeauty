---
name: disuri-email-marketing
description: Generate email marketing content for DISURI Beauty — welcome flows, abandoned cart sequences, post-purchase education series, Queen recruitment nurture, re-engagement campaigns, product launch announcements, and seasonal promotions. Use whenever the user mentions "DISURI email", "email sequence", "email flow", "welcome email", "abandoned cart", "post-purchase", "win-back email", "re-engagement", "email campaign", "Klaviyo", "email marketing", or any email-related request for DISURI Beauty skincare products. Also triggers on "Queen recruitment email", "Queen nurture sequence", "product launch email", or "DISURI newsletter".
---

# DISURI Beauty Email Marketing Skill

Generate on-brand email sequences and campaigns for DISURI Beauty's two audiences: consumers (B2C) and Queen partners (B2B).

## Quick Start

1. **Identify audience:** Consumer (DTC) or Queen (partner)
2. **Select flow type:** Welcome, abandoned cart, post-purchase, launch, re-engagement, nurture, or custom
3. **Determine platform:** Klaviyo (primary), Shopify Email, or platform-agnostic
4. **Generate emails** using brand voice and templates below
5. **Apply compliance rules** — all product claims must be appearance-based only

## Before You Start

Read the brand voice guidelines if available:
- Check `.claude/brand-voice-guidelines.md` for voice, tone, and terminology rules
- All emails follow DISURI's voice: warm authority, education-first, radically transparent

## Audience Segmentation

### Consumer (B2C) Emails
**Who:** End customers buying DISURI skincare
**Tone:** Warm, educational, empowering — "the friend who knows her ingredients"
**Goal:** Educate → Convert → Retain → Refer

### Queen (B2B) Emails
**Who:** DISURI Queens (partners) and Queen prospects
**Tone:** Professional but still warm — "the mentor who's invested in your success"
**Goal:** Recruit → Onboard → Train → Retain → Celebrate

---

## Email Flow Templates

### 1. Consumer Welcome Flow (5 emails)

Triggers when a new subscriber joins the list (pop-up, footer signup, or first purchase).

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | Immediate | Welcome + brand story | Introduce DISURI, K-beauty philosophy, offer a welcome discount (10-15%) |
| 2 | Day 2 | Ingredient education | "Why Korean barrier science matters" — teach one key concept |
| 3 | Day 4 | Product quiz/recommendation | Help them find their ideal product based on skin concern |
| 4 | Day 7 | Social proof + testimonials | Real customer results (appearance-based language only) |
| 5 | Day 10 | Urgency on welcome offer | Reminder that welcome discount expires, include bestsellers |

**Email 1 Template Structure:**
```
Subject: Welcome to DISURI — your skin's about to learn something new
Preview: Korean barrier science meets urban glow

HERO IMAGE: Product flatlay or brand lifestyle shot

HEADLINE: Glow Like You Own The City

BODY:
- Welcome message (2-3 sentences, warm and direct)
- What makes DISURI different (Korean-manufactured, ingredient transparency, barrier science)
- Your welcome offer: [DISCOUNT CODE] for [X]% off your first order
- Quick product recommendation: Start with [bestseller]

CTA: Shop Now with Your Welcome Offer

FOOTER: Bilingual tagline (English/Spanish), social links, unsubscribe
```

**Key rules for consumer welcome flow:**
- Never say "treats," "cures," or "heals" — always "helps improve the appearance of"
- Include "Made in Korea" at least once in the sequence
- Every email should teach something (ingredient science, routine tips, barrier health)
- Spanish translation option for bilingual subscribers
- Welcome discount should have a clear expiration (10 days)

### 2. Abandoned Cart Flow (3 emails)

Triggers when a shopper adds to cart but doesn't complete checkout.

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | 1 hour | "Still thinking about it?" | Cart reminder with product image, address common hesitations |
| 2 | 24 hours | Education-based nudge | Teach about the key ingredient in their cart item — why it matters |
| 3 | 48 hours | Final reminder + incentive | Social proof + small incentive (free shipping or 10% off) |

**Key rules for abandoned cart:**
- Email 1 is a gentle reminder, not a hard sell
- Email 2 is the differentiator — use education to overcome hesitation (this is what makes DISURI emails different from generic cart recovery)
- Email 3 can include an incentive but should lead with social proof
- Never use scarcity tactics that aren't true ("Only 2 left!" unless actually true)
- Include easy checkout link with cart items pre-loaded

### 3. Post-Purchase Education Series (4 emails)

Triggers after first purchase. The goal is to turn a buyer into a repeat customer by making them successful with the product.

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | Day 1 (post-delivery) | "Your DISURI routine starts now" | How to use their specific product, routine placement, tips |
| 2 | Day 7 | "What to expect in week 1" | Set expectations — what they should feel/see, when results appear |
| 3 | Day 14 | "Level up your routine" | Cross-sell complementary product with educational angle |
| 4 | Day 30 | "Your skin after 30 days" | Check-in, request review, reorder reminder |

**Key rules for post-purchase:**
- Product-specific content based on what they bought (use Klaviyo dynamic content or product-conditional logic)
- Education is the primary value — "here's how to get the most out of what you bought"
- Cross-sell suggestions should be genuinely helpful, not aggressive upselling
- Review request in Email 4 should offer a small incentive (discount on next order)
- Reorder timing based on product size (~6 weeks for creams, ~8 weeks for toner/essence)

### 4. Queen Recruitment Nurture (4 emails)

Triggers when someone expresses interest in becoming a Queen (fills out interest form, clicks Queen CTA).

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | Immediate | "So you want to build a glow empire?" | What being a Queen means, the three tiers, anti-MLM positioning |
| 2 | Day 2 | "The toolkit that makes the difference" | AI-powered marketing system, content calendar, prompt library |
| 3 | Day 5 | "Meet your future community" | Queen testimonials, community preview, what support looks like |
| 4 | Day 7 | "Ready to start? Here's how" | Application/enrollment CTA, starter kit options, next steps |

**Key rules for Queen recruitment:**
- NEVER use MLM language (team building, downline, passive income, ground floor)
- Focus on product sales earnings, not recruitment
- Emphasize the AI toolkit as a differentiator — "we don't just give you products, we give you a marketing system"
- Show realistic expectations — no income guarantees
- FTC-compliant earnings language only

### 5. Re-Engagement Flow (3 emails)

Triggers for subscribers who haven't opened/clicked in 60+ days.

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | Day 60 of inactivity | "We miss your glow" | What's new at DISURI, new products or content they missed |
| 2 | Day 67 | "Something for your comeback" | Exclusive re-engagement offer (15-20% off) |
| 3 | Day 74 | "Last chance to stay in the loop" | Clear opt-out option, sunset if no engagement |

**Key rules for re-engagement:**
- Respect the subscriber's attention — if they're not interested, let them go
- Never guilt-trip or use desperate language
- Email 3 should include a clear unsubscribe option and explain what they'll miss
- Sunset unengaged subscribers after Email 3 to protect deliverability

### 6. Product Launch Flow (3 emails)

Triggers for new product or bundle launches.

| # | Timing | Subject Line Direction | Content Focus |
|---|--------|----------------------|---------------|
| 1 | Pre-launch (3-5 days before) | "Something new is coming" | Teaser with ingredient science, problem it solves |
| 2 | Launch day | "It's here — [Product Name]" | Full product reveal, hero ingredients, launch offer |
| 3 | Post-launch (3 days after) | "Why [Product] is already a bestseller" | Social proof, FAQ, how it fits into routines |

---

## Email Design Guidelines

### Visual Identity
- **Primary colors:** Power Crimson (#9B1B30), Midnight Hydration Blue (#1B2A4A), Molten Copper (#B87333)
- **Accent colors:** Essence Pearl (#F5EDE3), Glow Gold (#D4A853)
- **Typography:** Bodoni Book for headlines, Frutiger for body text (use web-safe alternatives: Georgia for serif, Arial/Helvetica for sans-serif)
- **Imagery:** Urban landscapes, K-beauty textures, diverse skin tones, product flatlay on natural surfaces
- **Layout:** Clean, premium, generous white space — never cluttered

### Email Structure Template
```
PREHEADER: [50-100 chars, extends the subject line]

HEADER: DISURI Beauty logo (centered or left-aligned)

HERO: Full-width image or product shot
HEADLINE: [Bodoni-style serif, large]

BODY: 2-3 short paragraphs (education + value)
- Paragraph 1: Hook — why this matters to their skin
- Paragraph 2: The science/ingredient story
- Paragraph 3: What to do next

CTA BUTTON: [Power Crimson background, white text]

SECONDARY CONTENT: Product grid, testimonial, or routine tip

FOOTER:
- Social media icons
- Bilingual tagline: "Glow Like You Own The City" / "Brilla Como Dueña De La Ciudad"
- Unsubscribe link
- Physical address (CAN-SPAM)
```

### Subject Line Rules
- 40-60 characters ideal (mobile preview)
- Lead with value or curiosity, never clickbait
- Personalization with first name where data exists
- A/B test subject lines on every send (Klaviyo makes this easy)
- Avoid spam triggers: ALL CAPS, excessive punctuation, "FREE!!!"

---

## Compliance Rules for All Emails

### FDA/FTC
- All product claims must be appearance-based: "helps improve the appearance of" not "treats" or "cures"
- No income claims in Queen recruitment emails without substantiation
- Required: Physical mailing address in footer (CAN-SPAM)
- Required: Working unsubscribe link
- Queen-related emails must include clear anti-MLM positioning

### Brand Voice
- Education-first: every email teaches something
- Warm authority: confident but not condescending
- Transparency: honest about what products do and don't do
- Never use spa-whisper tone — this is urban energy
- Bilingual option (English/Spanish) for relevant segments

### Terminology
**Always use:** Queens, partner with, barrier science, helps improve the appearance of, Korean-manufactured, urban luxe, glow
**Never use:** Reps, distributors, join my team, passive income, treats, cures, heals, anti-aging (as treatment claim), luxury (alone — use "urban luxe")

---

## Klaviyo-Specific Notes

If generating for Klaviyo:
- Use Klaviyo's conditional logic for product-specific content: `{% if event.items.0.product_name == "Snail Mucin Cream" %}`
- Dynamic product recommendations via Klaviyo's catalog integration
- Segment by purchase history, engagement level, and Queen status
- Use Klaviyo's A/B testing for subject lines on all flows
- Set up proper UTM parameters for attribution tracking

---

## Output Format

Generate emails as markdown with clear sections:

```markdown
## Email [#]: [Name]
**Trigger:** [What triggers this email]
**Timing:** [When it sends relative to trigger]
**Subject Line:** [Primary subject]
**Subject Line B (A/B test):** [Alternative subject]
**Preview Text:** [Preheader text]

### Content

[Full email body copy]

**CTA:** [Button text] → [Link destination]

### Design Notes
[Any visual/layout instructions]
```

When generating for a specific platform (Klaviyo, HubSpot), include platform-specific code or configuration notes.
