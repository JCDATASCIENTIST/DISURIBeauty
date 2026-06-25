# Theme Best Practices

Source: https://shopify.dev/docs/storefronts/themes/best-practices

## Performance

- Minimize JavaScript; prefer CSS for interactions where possible
- Use `font_display: 'swap'` for web fonts
- Preload critical fonts and CSS only
- Lazy-load below-fold images with native `loading="lazy"`
- Avoid render-blocking scripts in `<head>`

## Accessibility

- Semantic HTML (`header`, `nav`, `main`, `footer`)
- Alt text on all product/content images
- Sufficient color contrast (WCAG AA minimum)
- Keyboard-navigable menus and forms
- Focus states on interactive elements

## Merchant experience

- Expose meaningful settings in schema (not hardcoded values)
- Use `"presets"` so sections appear in theme editor picker
- Group settings logically with `"header"` sidebar settings
- Provide sensible defaults matching brand guidelines

## Code organization

- Snippets for repeated markup (product cards, buttons)
- Theme blocks for merchant-composable content
- Locale files for all user-facing strings
- Scoped CSS via `{% stylesheet %}` tags in sections/blocks

## Security

- Never expose API secrets in theme files
- Sanitize user-generated content
- Use Shopify's built-in cart/checkout (don't roll custom payment)

## DISURI-specific

- No countdown timers or urgency UI (brand voice)
- Ingredient ppm data via metafields or section settings
- Bilingual strings in locale files (EN + ES)
- Anti-MLM language in all CTA copy (see brand guidelines)

Reference: https://shopify.dev/docs/storefronts/themes/best-practices/performance
