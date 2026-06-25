# Ajax APIs for Themes

Source: https://shopify.dev/docs/api/ajax

Shopify provides Ajax endpoints for cart and content updates without full page reloads.

## Cart API

Base: `/cart.js`, `/cart/add.js`, `/cart/change.js`, `/cart/update.js`, `/cart/clear.js`

```javascript
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ items: [{ id: variantId, quantity: 1 }] })
})
```

Returns JSON cart object. Use for AJAX add-to-cart on product pages.

## Section Rendering API

Update a section's HTML without reloading the page:

```
GET /?sections=section-id
```

Or POST with `sections` parameter to get rendered HTML for specific section instances.

Use case: update cart drawer, product recommendations, or dynamic filters.

```javascript
fetch(`${window.location.pathname}?sections=cart-drawer`)
  .then(r => r.json())
  .then(data => {
    document.getElementById('cart-drawer').innerHTML = data['cart-drawer'];
  });
```

## Product recommendations

```
GET /recommendations/products.json?product_id=ID&limit=4
```

## Predictive search

```
GET /search/suggest.json?q=query&resources[type]=product
```

## DISURI usage

Skeleton theme uses standard form POST for add-to-cart. Future enhancement: AJAX cart drawer using Cart API + Section Rendering API.

References:
- https://shopify.dev/docs/api/ajax
- https://shopify.dev/docs/api/ajax/section-rendering
