// Shared atoms, Button, Badge, Bilingual, Bottle (product image mock)

// Locale helper: render ONE language at a time (/en or /es), never both.
// Accepts strings OR JSX nodes so headlines with <br/> work too.
const L = (lang, en, es) => (lang === 'es' ? es : en);

const Button = ({ variant = 'primary', size, block, children, onClick, type = 'button' }) => {
  const cls = ['btn', `btn-${variant}`, block && 'btn-block', size === 'sm' && 'btn-sm'].filter(Boolean).join(' ');
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
};

const Badge = ({ tone = 'porcelain', children }) => (
  <span className={`badge badge-${tone}`}>{children}</span>
);

const Bilingual = ({ en, es, sizeRatio = 0.85, className = '', tag: Tag = 'div' }) => (
  <Tag className={`d-bilingual ${className}`}>
    <span className="en">{en}</span>
    <span className="es" style={{ fontSize: `${sizeRatio}em` }}>{es}</span>
  </Tag>
);

// Real product photography (1500×1500 source).
// `image` can be either:
//   - bare filename → loaded from assets/photography/products/
//   - relative path like "bundles/foo.jpg" → loaded from assets/photography/
const Bottle = ({ image }) => {
  const src = image
    ? (image.includes('/')
        ? `../../assets/photography/${image}`
        : `../../assets/photography/products/${image}`)
    : null;
  return (
    <div className="bottle-mock">
      {src ? <img src={src} alt="" /> : <div className="bottle"></div>}
    </div>
  );
};

// Lucide-style monoline icons inline (keeps single-file portability)
const Icon = ({ name, size = 22 }) => {
  const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    bag: <><circle cx="9" cy="20" r="1.5" {...stroke}/><circle cx="18" cy="20" r="1.5" {...stroke}/><path d="M2 3h3l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.6L21 7H6" {...stroke}/></>,
    user: <><circle cx="12" cy="8" r="4" {...stroke}/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" {...stroke}/></>,
    search: <><circle cx="11" cy="11" r="6.5" {...stroke}/><path d="m20 20-3.6-3.6" {...stroke}/></>,
    chevron: <path d="m8 9 4 4 4-4" {...stroke}/>,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" {...stroke}/>,
    plus: <path d="M12 5v14M5 12h14" {...stroke}/>,
    minus: <path d="M5 12h14" {...stroke}/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" {...stroke}/><circle cx="12" cy="12" r="4" {...stroke}/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></>,
    tiktok: <><path d="M16 4v8.5a4.5 4.5 0 1 1-4.5-4.5" {...stroke}/><path d="M16 4c.5 2.5 2 4 4.5 4.5" {...stroke}/></>,
    youtube: <><rect x="2.5" y="5.5" width="19" height="13" rx="3" {...stroke}/><path d="M10.5 9.5v5l4-2.5z" fill="currentColor"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name]}</svg>;
};

Object.assign(window, { Button, Badge, Bilingual, Bottle, Icon, L });
