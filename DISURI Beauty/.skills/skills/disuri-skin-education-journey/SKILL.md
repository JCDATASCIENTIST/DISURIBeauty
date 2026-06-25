---
name: disuri-skin-education-journey
description: Design and implement DISURI Beauty's education-first customer journey — concern-based skin guidance, routine building, bundle/AOV packaging, and future AI chat. Use whenever the user mentions skin guide, education journey, concern mapping, routine builder, "source of skincare", teen skincare, AI skin advisor, quiz flow, or wants homepage/UX that teaches before it sells. Also trigger for AOV via bundles, customer value journey, or "help people understand their skin."
---

# DISURI Skin Education Journey

DISURI's mission is to be the **source of skincare knowledge** — not just a product catalog. Every touchpoint should teach first, then recommend verifiable formulas (ppm-level transparency), then package into rituals/bundles for higher AOV.

## Core principles

1. **Educate before you sell** — Explain what the customer is seeing on their skin (appearance language only). Never diagnose or treat.
2. **Map concerns → routine → products → bundle** — One clear path; bundles are the easy "yes" after education.
3. **Compliance** — Appearance-based claims only. Include cosmetics disclaimer on educational surfaces. See `brand-voice-guidelines.md`.
4. **Bilingual** — EN/ES via locale keys under `disuri.skin_guide.*` in theme locales.
5. **Future AI** — Short-term: concern chips + ask form → contact. Long-term: embed AI on `/pages/quiz` or app block; keep concern→product mapping in one place.

## Theme implementation (live)

| Asset | Purpose |
|-------|---------|
| `sections/skin-guide.liquid` | Homepage concern tabs, education, product cards, bundle CTA, ask form |
| `assets/disuri-skin-guide.js` | Tab switching; prepends selected concern to contact form |
| `locales/en.default.json` + `es.json` | All copy under `disuri.skin_guide` |
| `templates/index.json` | Section order: after `science_strip`, before `featured_bundles` |

## Concern → bundle mapping (default)

| Concern | Bundle handle |
|---------|---------------|
| Dry, texture, barrier | `the-barrier-rescue-system` |
| Dull, firmness | `the-anti-aging-power-duo` |
| Build routine | `the-complete-disuri-system` |

Product handles live in section block settings — edit in Theme Editor or locale keys.

## Customer value journey

```
Hero (promise) → Products (proof) → Science strip (ppm) → Skin guide (education + concern)
  → Bundles (packaged AOV) → Testimonials → Queens → Newsletter
```

## When extending

- **New concern**: Add block in `skin-guide` + locale keys for label, title, education, 3 steps.
- **AI chat**: Replace ask form action with quiz/app embed; keep concern chips as conversation starters.
- **FAQ/Quiz pages**: Populate empty `/pages/faqs` and `/pages/quiz` in Shopify Admin; link from skin guide.
- **Email/Klaviyo**: Mirror concern copy in post-quiz flows (`disuri-email-marketing` skill).

## Voice checklist

- [ ] Teaches something specific (ingredient, step order, why barrier matters)
- [ ] Uses ppm or verifiable facts where relevant
- [ ] No medical/treatment/anti-acne cure language
- [ ] Bundle CTA framed as "complete ritual" not pressure
- [ ] Teen/parent scenarios use supportive, non-alarmist tone
