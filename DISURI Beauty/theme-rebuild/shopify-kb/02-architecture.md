# Theme Architecture

Source: https://shopify.dev/docs/storefronts/themes/architecture

## Directory roles

| Folder | Contains |
|--------|----------|
| `layout/` | Wrapper HTML (`theme.liquid`); outputs `content_for_layout` |
| `templates/` | Page-type definitions (`.json` for OS 2.0, `.liquid` for legacy) |
| `sections/` | Liquid + schema; rendered via `{% sections 'group' %}` or template JSON |
| `blocks/` | Theme blocks reusable across sections |
| `snippets/` | `{% render 'snippet-name' %}` partials |
| `assets/` | Static files referenced via `asset_url` filter |
| `config/` | `settings_schema.json` (schema), `settings_data.json` (values) |
| `locales/` | i18n JSON keyed by translation namespace |

## JSON templates (OS 2.0)

Templates are JSON files listing section instances:

```json
{
  "sections": {
    "hero": { "type": "hero", "settings": { "heading": "Glow Like You Own The City" } }
  },
  "order": ["hero"]
}
```

Merchants can add/remove/reorder sections in the theme editor when sections declare `"presets"`.

## Section groups

Header and footer use group JSON files (`header-group.json`, `footer-group.json`) referenced from `layout/theme.liquid`:

```liquid
{% sections 'header-group' %}
{{ content_for_layout }}
{% sections 'footer-group' %}
```

## Section schema essentials

```liquid
{% schema %}
{
  "name": "Hero",
  "settings": [
    { "type": "text", "id": "heading", "label": "Heading" }
  ],
  "presets": [{ "name": "Hero" }]
}
{% endschema %}
```

## Grid layout pattern (Skeleton)

Skeleton uses CSS grid on `.shopify-section` with a centered content column and optional `.full-width` utility for edge-to-edge sections.

## Product template

Product pages use `templates/product.json` pointing to a product section. Variant selection, media gallery, and add-to-cart form live in the section Liquid.

Reference: https://shopify.dev/docs/storefronts/themes/architecture/templates/product
