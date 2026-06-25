# DISURI Beauty — Design Tokens

Source: [brand-voice-guidelines.md](../brand-voice-guidelines.md) (Brand Style Guide PDF, Nov 2025)

These tokens map directly to Shopify theme settings and CSS custom properties in the DISURI theme.

## Color palette

| Token | CSS variable | HEX | Usage |
|-------|--------------|-----|-------|
| Power Crimson | `--color-crimson` | `#b82024` | Primary brand, CTAs, Collagen line accent |
| Midnight Hydration Blue | `--color-hydration-blue` | `#1f3f5c` | HA line, trust/science, secondary accent |
| Deep Charcoal Noir | `--color-charcoal` | `#2a2a2a` | Primary text, dark backgrounds |
| Molten Copper | `--color-copper` | `#b5673c` | Warm accent, icons, pillar markers |
| Soft Porcelain | `--color-porcelain` | `#f4f2ee` | Default page background |
| White | `--color-white` | `#ffffff` | Cards, reversed text areas |
| Black | `--color-black` | `#000000` | Maximum contrast, logo on light |

### Color principles

- Hero colors: Power Crimson and Midnight Hydration Blue — bold but not equal weight on the same surface.
- Default background: Soft Porcelain (not pure white).
- Maintain WCAG AA contrast on all text/background pairs.

## Typography

| Level | Font family | CSS variable | Fallback stack |
|-------|-------------|--------------|----------------|
| Display / H1 | Bodoni Book | `--font-display` | `"Bodoni Moda", "Bodoni 72", "Didot", serif` |
| Subhead / H2 | Mrs Eaves | `--font-subhead` | `"Libre Baskerville", Georgia, serif` |
| Body / UI | Frutiger | `--font-body` | `"Nunito Sans", "Helvetica Neue", sans-serif` |

**Note:** Bodoni Book, Mrs Eaves, and Frutiger are licensed fonts. Theme uses Google Font fallbacks until webfont files are added to `assets/`.

### Type scale

| Token | Size | Line height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-xs` | 0.75rem | 1.4 | 400 | Labels, captions |
| `--text-sm` | 0.875rem | 1.5 | 400 | Secondary body |
| `--text-base` | 1rem | 1.6 | 400 | Body copy |
| `--text-lg` | 1.125rem | 1.5 | 400 | Lead paragraphs |
| `--text-xl` | 1.25rem | 1.4 | 400 | Small headings |
| `--text-2xl` | 1.5rem | 1.3 | 400 | Section titles (Mrs Eaves) |
| `--text-3xl` | 2rem | 1.2 | 400 | Page titles |
| `--text-4xl` | 2.5rem | 1.1 | 400 | Hero headlines (Bodoni) |
| `--text-5xl` | 3.25rem | 1.05 | 400 | Homepage hero |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 0.25rem | Tight inline gaps |
| `--space-2` | 0.5rem | Icon gaps |
| `--space-3` | 0.75rem | Compact padding |
| `--space-4` | 1rem | Default padding |
| `--space-6` | 1.5rem | Card padding |
| `--space-8` | 2rem | Section inner padding |
| `--space-12` | 3rem | Section vertical rhythm |
| `--space-16` | 4rem | Large section gaps |
| `--space-24` | 6rem | Hero vertical padding |

## Radii & shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 2px | Buttons, inputs |
| `--radius-md` | 4px | Cards |
| `--radius-lg` | 8px | Modals, images |
| `--shadow-sm` | `0 1px 3px rgba(42,42,42,0.08)` | Cards |
| `--shadow-md` | `0 4px 12px rgba(42,42,42,0.12)` | Dropdowns |

## Component inventory

| Component | Shopify implementation | Priority |
|-----------|------------------------|----------|
| Announcement bar | `sections/announcement-bar.liquid` | P0 |
| Header | `sections/header.liquid` + menu blocks | P0 |
| Hero | `sections/hero.liquid` | P0 |
| Featured collection | `sections/featured-collection.liquid` | P0 |
| Product card | `snippets/product-card.liquid` | P0 |
| Ingredient transparency | `blocks/ingredient-callout.liquid` | P0 |
| PDP gallery + info | `sections/main-product.liquid` | P0 |
| Queens community CTA | `sections/queens-cta.liquid` | P1 |
| Testimonials | `sections/testimonials.liquid` | P1 |
| Newsletter | `sections/newsletter.liquid` | P1 |
| Footer | `sections/footer.liquid` | P0 |
| Bilingual toggle note | `snippets/locale-note.liquid` | P2 |

## Messaging tokens (copy patterns)

| Pattern | Example |
|---------|---------|
| Hero headline | Glow Like You Own The City |
| Hero subhead | Korean skincare science you can verify — ingredient transparency down to the ppm. |
| CTA primary | Shop the collection |
| CTA secondary | Become a Queen |
| Product proof | We don't just say it works — we show you exactly what's inside. |
| Anti-urgency | No countdown timers, no "last chance" language |

## Product line color mapping

| Product family | Accent color |
|----------------|--------------|
| Triple Collagen | Power Crimson `#b82024` |
| Hyaluronic Acid | Midnight Hydration Blue `#1f3f5c` |
| Snail Mucin | Molten Copper `#b5673c` |

## Bilingual requirement

All consumer-facing strings must support EN/ES. Theme uses Shopify locale files:

- `locales/en.default.json` — English (default)
- `locales/es.json` — Spanish

Tagline ES: *Brilla como si fueras la dueña de la ciudad.*
