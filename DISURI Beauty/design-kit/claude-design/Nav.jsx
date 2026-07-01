// Nav.jsx, top navigation with cart count + EN/ES toggle

const Nav = ({ route, setRoute, cartCount, lang, setLang }) => {
  // Map nav labels → routes. "Active" matches the actual route for legitimate routes
  // (Shop/Collections), but ambient nav items (Science, Journal) never light up
  // since they don't have dedicated screens in this prototype.
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="nav-links">
          <span className={`nav-link ${route === 'home' ? 'active' : ''}`} onClick={() => setRoute('home')}>Shop</span>
          <span className={`nav-link ${route === 'collection' ? 'active' : ''}`} onClick={() => setRoute('collection')}>Collections</span>
          <span className="nav-link" onClick={() => setRoute('home')}>Science</span>
          <span className="nav-link" onClick={() => setRoute('home')}>Journal</span>
        </div>
        <div className="nav-logo" onClick={() => setRoute('home')} style={{ cursor: 'pointer' }} aria-label="DISURI Beauty">
          <span className="nav-wordmark" aria-hidden="true">
            <span className="nav-wordmark__brand">DISURI</span>
            <span className="nav-wordmark__label">BEAUTY</span>
          </span>
        </div>
        <div className="nav-actions">
          <span className="lang-toggle">
            <span className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} style={{ cursor: 'pointer' }}>EN</span>
            <span style={{ margin: '0 6px' }}>/</span>
            <span className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')} style={{ cursor: 'pointer' }}>ES</span>
          </span>
          <button aria-label="Search"><Icon name="search" /></button>
          <button aria-label="Account"><Icon name="user" /></button>
          <button aria-label="Bag" onClick={() => setRoute('cart')}>
            <Icon name="bag" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ lang = 'en' }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <img src="../../assets/logos/primary-light.png" alt="DISURI BEAUTY" style={{ height: 88, marginBottom: 8 }} />
          <p className="footer-tagline">{L(lang, 'Glow, made in Korea.', 'Brillo, hecho en Corea.')}</p>
        </div>
        <div>
          <h4>{L(lang, 'Shop', 'Comprar')}</h4>
          <ul>
            <li><a>{L(lang, 'All products', 'Todos los productos')}</a></li>
            <li><a>Triple Collagen</a></li>
            <li><a>{L(lang, 'Hydration', 'Hidratación')}</a></li>
            <li><a>Snail Mucin</a></li>
            <li><a>{L(lang, 'Gift sets', 'Sets de regalo')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{L(lang, 'Brand', 'Marca')}</h4>
          <ul>
            <li><a>{L(lang, 'Our story', 'Nuestra historia')}</a></li>
            <li><a>{L(lang, 'Made in Korea', 'Hecho en Corea')}</a></li>
            <li><a>Journal</a></li>
            <li><a>{L(lang, 'Press', 'Prensa')}</a></li>
          </ul>
        </div>
        <div>
          <h4>{L(lang, 'Help', 'Ayuda')}</h4>
          <ul>
            <li><a>{L(lang, 'Shipping', 'Envíos')}</a></li>
            <li><a>{L(lang, 'Returns', 'Devoluciones')}</a></li>
            <li><a>{L(lang, 'Contact', 'Contacto')}</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-legal">{L(lang, '© 2026 DISURI Beauty · Made in Korea · US · MX · CO', '© 2026 DISURI Beauty · Hecho en Corea · US · MX · CO')}</span>
        <div className="footer-social">
          <a><Icon name="instagram" size={20} /></a>
          <a><Icon name="tiktok" size={20} /></a>
          <a><Icon name="youtube" size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Nav, Footer });
