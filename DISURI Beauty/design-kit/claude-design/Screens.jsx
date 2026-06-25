// Screens.jsx, Home / Collection / PDP / Cart compositions
// Reads product catalog from window.CATALOG (defined in index.html).
// Single-locale rendering: every screen takes `lang` ('en' | 'es') and shows
// ONE language at a time via the L(lang, en, es) helper, never both stacked.

// Gift-with-purchase ladder strip, shown under the hero. Single-locale.
const GiftLadderStrip = ({ lang }) => {
  const p = window.PROMO;
  const items = [
    { k: 'gift', big: L(lang, 'Free gift', 'Regalo gratis'), sub: L(lang, 'in every order', 'en cada pedido') },
    ...p.tiers.map(t => ({
      k: t.threshold,
      big: lang === 'es' ? t.rewardEs : t.reward,
      sub: '$' + t.threshold + '+',
    })),
  ];
  return (
    <section className="gift-strip">
      <div className="container">
        <div className="gift-strip-row">
          {items.map((it, i) => (
            <div className="gift-step" key={it.k}>
              <span className="gift-step-big">{it.big}</span>
              <span className="gift-step-sub">{it.sub}</span>
            </div>
          ))}
          <div className="gift-step gift-step-value">
            <span className="gift-step-big">{L(lang, 'Up to $400', 'Hasta $400')}</span>
            <span className="gift-step-sub">{L(lang, 'in gifts at $100', 'en regalos a $100')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeScreen = ({ setRoute, openPDP, lang, heroStyle = 'rested' }) => (
  <>
    <section className="hero">
      <div className="hero-img"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-eyebrow">{L(lang,
          'Free gift in every order · Free shipping over $25 · Made in Korea',
          'Regalo gratis en cada pedido · Envío gratis +$25 · Hecho en Corea')}</p>
        <h1>{(() => {
          const h = (window.HERO_HEADLINES && window.HERO_HEADLINES[heroStyle]) || window.HERO_HEADLINES.rested;
          const lines = lang === 'es' ? h.es : h.en;
          return <>{lines[0]}<br />{lines[1]}</>;
        })()}</h1>
        <div className="hero-cta">
          <Button variant="primary" onClick={() => setRoute('collection')}>{L(lang, 'Shop the Collection', 'Ver la colección')}</Button>
          <Button variant="tertiary" onClick={() => setRoute('collection')}>{L(lang, 'Read the ingredient list →', 'Ver la lista de ingredientes →')}</Button>
        </div>
      </div>
    </section>

    <GiftLadderStrip lang={lang} />

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{L(lang, 'The Collection', 'La colección')}</p>
            <h2>{L(lang,
              <>Seven formulas. One ritual.<br/>Published in ppm.</>,
              <>Siete fórmulas. Un ritual.<br/>Publicado en ppm.</>)}</h2>
          </div>
          <p>{L(lang,
            'Build a barrier-first routine you can verify.',
            'Crea una rutina centrada en la barrera que puedes verificar.')}</p>
        </div>
        <div className="product-grid">
          {[window.CATALOG[1], window.CATALOG[0], window.CATALOG[2]].map(p => (
            <KitProductCard key={p.id} product={p} lang={lang} onClick={() => openPDP(p.id)} />
          ))}
        </div>
      </div>
    </section>

    <section className="section porc" style={{ padding: '0' }}>
      <div className="science">
        <div>
          <p className="num">1,000<span style={{fontSize:'0.4em',marginLeft:'0.2em'}}>ppm</span></p>
          <h3>{L(lang, '92% Snail filtrate', '92% filtrado de caracol')}</h3>
          <p>{L(lang,
            'Ultimate Snail Mucin Cream, supports the appearance of a stronger barrier.',
            'Ultimate Snail Mucin Cream, apoya la apariencia de una barrera más fuerte.')}</p>
        </div>
        <div>
          <p className="num">3,500<span style={{fontSize:'0.4em',marginLeft:'0.2em'}}>ppm</span></p>
          <h3>{L(lang, 'Triple collagen complex', 'Complejo de triple colágeno')}</h3>
          <p>{L(lang,
            'Triple Collagen Firming Cream, for the look of firmer, denser skin.',
            'Triple Collagen Firming Cream, para una piel de aspecto más firme y densa.')}</p>
        </div>
        <div>
          <p className="num">10,000<span style={{fontSize:'0.4em',marginLeft:'0.2em'}}>ppm</span></p>
          <h3>{L(lang, 'Hyaluronic acid prep', 'Preparación con ácido hialurónico')}</h3>
          <p>{L(lang,
            'Triple Collagen Firming Toner, primes for everything that follows.',
            'Triple Collagen Firming Toner, prepara la piel para todo lo que sigue.')}</p>
        </div>
      </div>
    </section>

    <section className="section noir">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow" style={{color:'rgba(242,239,231,0.7)'}}>{L(lang, 'Pre-built rituals', 'Rituales armados')}</p>
            <h2 style={{color:'var(--color-porcelain)'}}>{L(lang, 'The bundles. Save up to $17.96.', 'Los sets. Ahorra hasta $17.96.')}</h2>
          </div>
          <p style={{color:'rgba(242,239,231,0.78)'}}>{L(lang,
            'Customers using bundles see faster, more dramatic results than single-product users. Cleanse · prep · hydrate · firm · repair.',
            'Quienes usan sets ven resultados más rápidos y notables que con un solo producto. Limpia · prepara · hidrata · reafirma · repara.')}</p>
        </div>
        <div className="product-grid">
          {window.BUNDLES.map(p => (
            <KitProductCard key={p.id} product={p} lang={lang} onClick={() => openPDP(p.id)} />
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{L(lang, 'Now in the routine', 'Ahora en rotación')}</p>
            <h2>{L(lang, 'The rest of the ritual.', 'El resto del ritual.')}</h2>
          </div>
        </div>
        <div className="product-grid">
          {[window.CATALOG[3], window.CATALOG[4], window.CATALOG[5], window.CATALOG[6]].map(p => (
            <KitProductCard key={p.id} product={p} lang={lang} onClick={() => openPDP(p.id)} />
          ))}
        </div>
      </div>
    </section>
  </>
);

const CollectionScreen = ({ openPDP, lang }) => {
  const [filter, setFilter] = React.useState('all');
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">{L(lang, 'All products', 'Todos los productos')}</p>
            <h2>{L(lang,
              <>Korean barrier science.<br />Measured in ppm.</>,
              <>Ciencia coreana de barrera.<br />Medida en ppm.</>)}</h2>
          </div>
          <p>{L(lang,
            'Filter by skin goal to find your edit.',
            'Filtra por objetivo de piel para encontrar tu edición.')}</p>
        </div>
        <div className="chips">
          {[
            ['all', L(lang, 'All', 'Todo')],
            ['bundle', L(lang, 'Bundles', 'Sets')],
            ['collagen', 'Triple Collagen'],
            ['hydration', L(lang, 'Hydration', 'Hidratación')],
            ['barrier', L(lang, 'Barrier repair', 'Reparación de barrera')],
            ['cleanse', L(lang, 'Cleanse', 'Limpieza')],
          ].map(([id, label]) => (
            <button
              key={id}
              className={`chip ${filter === id ? 'active' : ''}`}
              onClick={() => setFilter(id)}
            >{label}</button>
          ))}
        </div>
        <div className="product-grid">
          {(filter === 'all' ? window.ALL_OFFERINGS : window.ALL_OFFERINGS.filter(p => p.family === filter)).map(p => (
            <KitProductCard key={p.id} product={p} lang={lang} onClick={() => openPDP(p.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PDPScreen = ({ productId, addToCart, setRoute, lang }) => {
  const product = window.ALL_OFFERINGS.find(p => p.id === productId) || window.CATALOG[0];
  const isBundle = product.family === 'bundle';
  const [thumb, setThumb] = React.useState(0);
  return (
    <section className="pdp">
      <div className="container">
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(42,42,42,0.6)', marginBottom: 32 }}>
          <span onClick={() => setRoute('home')} style={{ cursor: 'pointer' }}>{L(lang, 'Home', 'Inicio')}</span> · <span onClick={() => setRoute('collection')} style={{ cursor: 'pointer' }}>{L(lang, 'Collections', 'Colección')}</span> · <span style={{ color: 'var(--color-noir)' }}>{product.name}</span>
        </div>
        <div className="pdp-grid">
          <div className="pdp-gallery">
            <div className="pdp-main-img">
              <Bottle image={product.image} />
            </div>
            <div className="pdp-thumbs">
              {[0,1,2,3,4,5].map(i => (
                <div
                  key={i}
                  className={`pdp-thumb ${thumb === i ? 'active' : ''}`}
                  onClick={() => setThumb(i)}
                />
              ))}
            </div>
          </div>
          <div className="pdp-info">
            <p className="pdp-eyebrow">{product.eyebrow}</p>
            <h1 className="pdp-name">{product.name}</h1>
            <p className="pdp-benefit">{lang === 'es' ? (product.benefitEs || product.benefit) : product.benefit}</p>
            <div className="pdp-chips">
              {product.badges?.map((b, i) => (
                <Badge key={i} tone={b.tone}>{b.label}</Badge>
              ))}
              <Badge tone="porcelain">{product.size || '50 ml · 1.7 fl oz'}</Badge>
            </div>
            <div className="pdp-price">
              ${product.price.toFixed(2)} USD
              {isBundle && (
                <span style={{fontFamily:'var(--font-ui)',fontSize:14,letterSpacing:'0.08em',textTransform:'uppercase',color:'var(--color-crimson)',marginLeft:16}}>
                  {L(lang, `Save $${product.saves.toFixed(2)} vs. à la carte ($${product.retail.toFixed(2)})`, `Ahorra $${product.saves.toFixed(2)} vs. por separado ($${product.retail.toFixed(2)})`)}
                </span>
              )}
            </div>
            <Button variant="primary" block onClick={() => addToCart(product.id)}>{L(lang, 'Add to Bag', 'Agregar a la bolsa')}</Button>
            <div className="pdp-divider"></div>
            <div className="pdp-section">
              <h4>{L(lang, 'Key ingredients', 'Ingredientes clave')}</h4>
              <p>{lang === 'es' ? (product.ingredientsEs || product.ingredients) : product.ingredients}</p>
            </div>
            <div className="pdp-divider"></div>
            <div className="pdp-section">
              <h4>{L(lang, 'How to use', 'Cómo usar')}</h4>
              <ol>
                {(lang === 'es' && product.usageEs ? product.usageEs : product.usage).map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </div>
            <p className="pdp-compliance">{lang === 'es' ? (product.complianceEs || product.compliance) : product.compliance}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// In-cart gift ladder: live progress toward the next reward + the always-on free gift.
const CartGiftLadder = ({ subtotal, lang }) => {
  const p = window.PROMO;
  const tiers = p.tiers;
  const max = tiers[tiers.length - 1].threshold;
  const pct = Math.min(100, (subtotal / max) * 100);
  const next = tiers.find(t => subtotal < t.threshold);
  const remaining = next ? (next.threshold - subtotal) : 0;
  const message = next
    ? L(lang,
        `Add $${remaining.toFixed(2)} to unlock ${next.reward.toLowerCase()}.`,
        `Agrega $${remaining.toFixed(2)} para desbloquear ${next.rewardEs.toLowerCase()}.`)
    : L(lang, 'You\u2019ve unlocked every gift. Enjoy.', 'Has desbloqueado todos los regalos. Disfruta.');
  return (
    <div className="gift-ladder">
      <div className="gift-ladder-head">
        <span className="gift-ladder-gift">{L(lang, '\u2713 Free gift included in every order', '\u2713 Regalo gratis incluido en cada pedido')}</span>
        <span className="gift-ladder-msg">{message}</span>
      </div>
      <div className="gift-ladder-track">
        <div className="gift-ladder-fill" style={{ width: pct + '%' }}></div>
        {tiers.map(t => {
          const reached = subtotal >= t.threshold;
          return (
            <div
              key={t.threshold}
              className={'gift-ladder-node' + (reached ? ' reached' : '')}
              style={{ left: (t.threshold / max * 100) + '%' }}
            >
              <span className="gift-ladder-dot"></span>
              <span className="gift-ladder-label">
                <b>${t.threshold}</b>
                {lang === 'es' ? t.rewardEs : t.reward}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const CartScreen = ({ cart, updateQty, removeLine, setRoute, lang }) => {
  const lines = Object.entries(cart).map(([id, qty]) => ({ ...window.ALL_OFFERINGS.find(p => p.id === id), qty }));
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const shipping = subtotal >= window.PROMO.freeShippingThreshold ? 0 : 6.95;
  const total = subtotal + shipping;
  const itemWord = lang === 'es'
    ? `${lines.length} artículo${lines.length === 1 ? '' : 's'}`
    : `${lines.length} item${lines.length === 1 ? '' : 's'}`;
  return (
    <section className="cart">
      <div className="container">
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 48, lineHeight: 1.1, margin: '0 0 12px', fontWeight: 400 }}>{L(lang, 'Your Bag', 'Tu bolsa')}</h1>
        <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 18, color: 'rgba(42,42,42,0.72)', margin: '0 0 48px' }}>{itemWord}</p>
        {lines.length > 0 && <CartGiftLadder subtotal={subtotal} lang={lang} />}
        {lines.length === 0 ? (
          <div className="cart-empty">
            {L(lang, 'Your bag is empty. ', 'Tu bolsa está vacía. ')}<a onClick={() => setRoute('collection')} style={{ textDecoration: 'underline', cursor: 'pointer' }}>{L(lang, 'Shop the Collection →', 'Ver la colección →')}</a>
          </div>
        ) : (
          <div className="cart-grid">
            <div>
              {lines.map(l => (
                <div className="cart-line" key={l.id}>
                  <div className="cart-line-img"><Bottle image={l.image} /></div>
                  <div>
                    <h3 className="cart-line-name">{l.name}</h3>
                    <div className="cart-line-meta">{L(lang, '50 ml · Made in Korea', '50 ml · Hecho en Corea')}</div>
                    <div className="cart-line-qty">
                      <button onClick={() => updateQty(l.id, l.qty - 1)}><Icon name="minus" size={14} /></button>
                      <span>{l.qty}</span>
                      <button onClick={() => updateQty(l.id, l.qty + 1)}><Icon name="plus" size={14} /></button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="cart-line-price">${(l.price * l.qty).toFixed(2)}</div>
                    <button
                      onClick={() => removeLine(l.id)}
                      style={{ background: 'none', border: 'none', fontFamily: 'var(--font-ui)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(42,42,42,0.56)', marginTop: 12, padding: 0, cursor: 'pointer' }}
                    >{L(lang, 'Remove', 'Quitar')}</button>
                  </div>
                </div>
              ))}
            </div>
            <aside className="cart-summary">
              <h3>{L(lang, 'Summary', 'Resumen')}</h3>
              <div className="cart-row"><span>{L(lang, 'Subtotal', 'Subtotal')}</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="cart-row"><span>{L(lang, 'Shipping', 'Envío')}</span><span>{shipping === 0 ? L(lang, 'Free', 'Gratis') : `$${shipping.toFixed(2)}`}</span></div>
              {shipping === 0 && (
                <div className="cart-promo">{L(lang, '✓ Free shipping unlocked', '✓ Envío gratis incluido')}</div>
              )}
              <div className="cart-row total"><span>{L(lang, 'Total', 'Total')}</span><span>${total.toFixed(2)} USD</span></div>
              <div style={{ marginTop: 24 }}>
                <Button variant="primary" block>{L(lang, 'Checkout', 'Pagar')}</Button>
              </div>
              <p className="cart-trust">{L(lang, 'Made in Korea · Ships from US distribution centers in 1–2 business days.', 'Hecho en Corea · Envíos desde centros de distribución en EE. UU. en 1 a 2 días hábiles.')}</p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { HomeScreen, CollectionScreen, PDPScreen, CartScreen });
