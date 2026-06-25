# Development Stores

Source: https://shopify.dev/docs/storefronts/themes/tools/development-stores

## Create a dev store

1. [Dev Dashboard](https://dev.shopify.com/dashboard) → **Dev Stores** → **Add dev store**
2. Enter store name (becomes `name.myshopify.com`)
3. Select plan type
4. **Recommended:** Enable **Generate test data for store**
5. Click **Create store**

## Generated test data includes

Products, collections, customers, orders, and Plus-specific features for realistic theme testing.

Reference: https://shopify.dev/docs/storefronts/themes/tools/development-stores/generated-data

## Features

- Unlimited test orders (Bogus gateway or test mode)
- Unlimited products
- Up to 10 custom apps
- Custom domain support

## Limitations

- Password page always shown to visitors (cannot remove)
- Only free and Partner-friendly apps installable
- No real payment transactions
- Feature preview stores may lack domain access

## Password access

1. Online Store → Preferences → Password protection
2. Set visitor password (different from admin password)
3. Share password with reviewers

Admin users and theme editor bypass the password page.

## CLI requirement

You must be **store owner** or have a **staff account** with Themes permission to use Shopify CLI with a dev store.

## DISURI workflow

1. Build and QA on dev store with test data
2. Push to live store as unpublished theme
3. Publish when approved
