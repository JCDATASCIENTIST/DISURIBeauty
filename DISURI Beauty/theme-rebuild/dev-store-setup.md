# Dev Store Setup — DISURI Theme

Run these steps once to create your sandbox store for theme development.

## 1. Create dev store

1. Open [Dev Dashboard](https://dev.shopify.com/dashboard)
2. Click **Dev Stores** → **Add dev store**
3. Store name: `disuri-dev` (creates `disuri-dev.myshopify.com`)
4. Enable **Generate test data for store**
5. Click **Create store**

## 2. Authenticate Shopify CLI

```bash
npm i -g @shopify/cli@latest
shopify auth login
shopify theme list --store disuri-dev.myshopify.com
```

## 3. Start local development

```bash
cd /Users/joelcastillo/Documents/_1_DISURIBeauty/DISURI-Beauty-Theme
shopify theme dev --environment development
```

Or explicitly:

```bash
shopify theme dev --store disuri-dev.myshopify.com
```

## 4. Set visitor password (for sharing previews)

1. Dev store admin → **Online Store** → **Preferences**
2. **Password protection** → set a visitor password
3. Share password with reviewers (separate from admin login)

## Environment config

Theme repo includes `shopify.theme.toml`:

```toml
[environments.development]
store = "disuri-dev.myshopify.com"

[environments.production]
store = "disuri-beauty.myshopify.com"
```

Update `disuri-beauty.myshopify.com` to your actual live store URL if different.

## Status

- [ ] Dev store created in Partner Dashboard
- [ ] CLI authenticated
- [ ] `shopify theme list` succeeds on dev store
- [ ] `shopify theme dev` preview loads homepage

**Note:** Live store (`DISURI BEAUTY`) is already connected to Shopify CLI on this machine. Dev store is optional but recommended for safe QA before pushing to production.
