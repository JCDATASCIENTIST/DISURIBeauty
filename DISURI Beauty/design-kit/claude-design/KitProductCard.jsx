// ProductCard.jsx, kit-internal card (renamed KitProductCard to avoid
// colliding with the design-system components/ProductCard on the namespace).

const KitProductCard = ({ product, onClick, lang = 'en' }) => (
  <article className="product-card" onClick={onClick}>
    <div className="product-card-img">
      <Bottle image={product.image} />
      <div className="product-card-badges">
        {product.badges?.map((b, i) => (
          <Badge key={i} tone={b.tone}>{b.label}</Badge>
        ))}
      </div>
    </div>
    <div className="product-card-body">
      <h3 className="product-card-name">{product.name}</h3>
      <p className="product-card-sub">{lang === 'es' ? (product.benefitEs || product.benefit) : product.benefit}</p>
      <div className="product-card-foot">
        <span className="product-card-price">${product.price}</span>
        <Button variant="tertiary" size="sm">{L(lang, 'Add to Bag', 'Agregar')}</Button>
      </div>
    </div>
  </article>
);

Object.assign(window, { KitProductCard });
