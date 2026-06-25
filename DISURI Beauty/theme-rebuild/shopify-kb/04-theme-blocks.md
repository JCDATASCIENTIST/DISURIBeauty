# Theme Blocks

Source: https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks

## Quick start

1. Create `/blocks/my-block.liquid`
2. Add Liquid markup + `{% schema %}` with `"presets"`
3. Reference in section schema: `"blocks": [{ "type": "@theme" }]` or `"blocks": [{ "type": "my-block" }]`
4. Render child blocks: `{% content_for 'blocks' %}`

## Example block

```liquid
<div class="text-block">
  {{ block.settings.text }}
</div>

{% schema %}
{
  "name": "Text",
  "settings": [
    { "type": "richtext", "id": "text", "label": "Text" }
  ],
  "presets": [{ "name": "Text" }]
}
{% endschema %}
```

## Block schema attributes

| Attribute | Purpose |
|-----------|---------|
| `name` | Title in theme editor |
| `settings` | Merchant-configurable inputs |
| `blocks` | Nested child blocks (`@app`, `@theme`, or specific types) |
| `presets` | Preconfigured instances for block picker |
| `tag` | HTML wrapper element |
| `class` | CSS class on wrapper |

## Nesting

Theme blocks can nest up to **8 levels**. Use targeting to restrict which blocks appear where.

## DISURI blocks

- `ingredient-callout.liquid` — ppm transparency callout for product pages

Reference: https://shopify.dev/docs/storefronts/themes/architecture/blocks/theme-blocks/quick-start
