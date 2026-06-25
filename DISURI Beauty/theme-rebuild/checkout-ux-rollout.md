# Checkout UX — Phase A & B rollout

**Store:** disuribeauty.com · **Theme:** `#161833353455`

## Phase A (theme — deployed via theme push)

- [x] Shop Pay / wallet buttons on PDP, cart page, cart drawer
- [x] Pre-checkout trust strip (EN/ES)
- [x] `@app` block slot on cart summary (Affirm, Zipify)

### Admin steps (you)

1. **Settings → Payments** — confirm Shop Pay, Apple Pay, Google Pay enabled
2. **Theme editor → App embeds** — enable **Affirm**, **Zipify OCU**
3. **Product template** — Add block → Affirm (above Add to Bag if needed)
4. **Cart template** — Add block → Zipify if cart upsell desired
5. Hard refresh and test wallets on PDP + `/cart`

## Phase B (Plus — checkout app)

Repo: `../disuri-checkout-app/`

```bash
cd ../disuri-checkout-app
shopify app init   # or link existing custom app
shopify app deploy
```

Then **Settings → Checkout → Customize** → add **DISURI checkout trust** + **DISURI thank you** blocks.

Branding: run `scripts/checkout-branding.graphql` in GraphiQL (Plus).

## QA

- [ ] PDP: Add to Bag + Shop Pay visible
- [ ] Cart drawer: Checkout + wallets
- [ ] `/cart`: Checkout + wallets + trust copy
- [ ] Checkout: trust banners (Plus extension)
- [ ] Thank you: ritual banner (Plus extension)
- [ ] ES locale: checkout extension strings in Spanish
