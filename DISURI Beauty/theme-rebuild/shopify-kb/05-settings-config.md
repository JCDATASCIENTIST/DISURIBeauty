# Settings & Config

Source: https://shopify.dev/docs/storefronts/themes/architecture/config

## settings_schema.json

Located in `config/`. Array of setting categories shown in **Theme settings** (global):

```json
[
  {
    "name": "Colors",
    "settings": [
      { "type": "color", "id": "color_crimson", "label": "Power Crimson", "default": "#b82024" }
    ]
  }
]
```

Access in Liquid: `{{ settings.color_crimson }}`

## settings_data.json

Stores current values for all theme settings. Updated by theme editor and `shopify theme push`. Do not hand-edit unless you know the schema.

## Setting types (common)

| Type | Use |
|------|-----|
| `color` | Hex color picker |
| `font_picker` | Shopify font library |
| `range` | Slider with min/max/step |
| `text` / `textarea` / `richtext` | Copy |
| `image_picker` | Image upload |
| `link_list` | Navigation menu |
| `collection` / `product` | Resource picker |
| `checkbox` | Boolean toggle |
| `header` / `paragraph` | Sidebar info (non-input) |

## Section vs theme settings

- **Theme settings** — Global (`settings` object)
- **Section settings** — Per section instance (`section.settings`)
- **Block settings** — Per block instance (`block.settings`)

## CSS variables pattern

Skeleton uses `snippets/css-variables.liquid` to map settings to `:root` CSS custom properties. DISURI extends this with full brand token set.

Reference: https://shopify.dev/docs/storefronts/themes/architecture/settings
