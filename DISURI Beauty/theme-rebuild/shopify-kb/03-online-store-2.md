# Online Store 2.0

Source: https://shopify.dev/docs/storefronts/themes/os20

Online Store 2.0 (OS 2.0) is the modern theme architecture enabling:

- JSON templates on all page types
- Sections on every template (not just homepage)
- **App blocks** via `@app` type in section/block schema
- **Theme blocks** via `@theme` type referencing `/blocks/` folder

## App blocks

Sections can accept app-injected content:

```json
"blocks": [{ "type": "@app" }, { "type": "@theme" }]
```

When an app is uninstalled, its blocks are removed automatically — no orphaned Liquid in theme files.

## Theme blocks vs section blocks

| Feature | Section-local blocks | Theme blocks (`/blocks/`) |
|---------|---------------------|---------------------------|
| Location | Defined in section schema | Separate files in `/blocks/` |
| Reuse | Only in parent section | Any section with `@theme` |
| Nesting | Limited | Up to 8 levels via `{% content_for 'blocks' %}` |

## Migration checklist

- [ ] Convert `.liquid` templates to `.json` where possible
- [ ] Move reusable components to `/blocks/`
- [ ] Add `@app` support to key sections (header, product, footer)
- [ ] Add `"presets"` to all custom sections

## DISURI strategy

All new sections include `@app` block support in footer/product sections. Custom DISURI blocks (ingredient callout) live in `/blocks/` for reuse on product and collection pages.
