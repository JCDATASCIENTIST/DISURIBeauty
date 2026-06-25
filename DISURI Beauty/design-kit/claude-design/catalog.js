/* =========================================================
   DISURI BEAUTY, CATALOG · SINGLE SOURCE OF TRUTH
   Every surface (Shopify, Klaviyo, ads, README) reads its
   prices / sizes / ppm / copy from HERE. Update this file first;
   never hard-code product data in a kit. Pure-data mirror:
   data/catalog.json. Sourced from disuribeauty.com (May 2026).
   ========================================================= */
// =========================================================
// PRODUCT CATALOG, sourced from disuribeauty.com/collections/all
// 7 SKUs currently live + 3 system bundles
// Prices, concentrations, and naming match the live storefront.
// =========================================================
// =========================================================
// PROMOTIONS, gift-with-purchase ladder + free gift
// FTC-safe: a real gift-with-purchase offer (no urgency, no income claims).
// Spend thresholds unlock gifts; every order includes the daily free gift.
// Author EN + ES variants; surfaces render only the active locale.
// =========================================================
window.PROMO = {
  freeShippingThreshold: 25,
  // A retired retail lip product, included free in every order while supplies last.
  freeGift: {
    label: 'Free gift in every order',
    labelEs: 'Regalo gratis en cada pedido',
    detail: 'A DISURI lip care product from our retired retail line, yours free with any purchase.',
    detailEs: 'Un producto de labios DISURI de nuestra línea retail retirada, gratis con cualquier compra.',
    value: 18,
  },
  // Cumulative gift ladder. Each tier ADDS to the ones before it.
  tiers: [
    {
      threshold: 25,
      reward: 'Free shipping',
      rewardEs: 'Envío gratis',
      detail: 'Free standard shipping on your order.',
      detailEs: 'Envío estándar gratis en tu pedido.',
    },
    {
      threshold: 50,
      reward: '2 free products',
      rewardEs: '2 productos gratis',
      detail: 'Choose 2 free deluxe minis at checkout.',
      detailEs: 'Elige 2 minis deluxe gratis al pagar.',
    },
    {
      threshold: 100,
      reward: '10 free products',
      rewardEs: '10 productos gratis',
      detail: 'A 10-piece gift set, a value of up to $400, added free.',
      detailEs: 'Un set de regalo de 10 piezas, un valor de hasta $400, gratis.',
      highlight: 'Value up to $400',
      highlightEs: 'Valor de hasta $400',
    },
  ],
};

// =========================================================
// HERO HEADLINES, persuasive copy in multiple styles (switchable via Tweak).
// Each is single-locale (EN + ES authored separately). Compliance: speaks to
// the APPEARANCE of skin only, no treatment / anti-aging / lift claims.
// =========================================================
window.HERO_HEADLINES = {
  rested:  { label: 'Benefit',    en: ['Skin that looks', 'rested. Every day.'],       es: ['Piel que luce', 'descansada. Cada día.'] },
  glass:   { label: 'Aspiration', en: ['Glass skin starts', 'at the barrier.'],         es: ['La piel de cristal', 'empieza en la barrera.'] },
  ppm:     { label: 'Proof',      en: ['Firmer-looking skin,', 'published in ppm.'],     es: ['Piel más firme,', 'publicada en ppm.'] },
  origin:  { label: 'Origin',     en: ['Korean barrier science,', 'made real.'],         es: ['Ciencia coreana de barrera,', 'hecha real.'] },
  pov:     { label: 'Desire',     en: ['The routine your barrier', 'keeps asking for.'], es: ['La rutina que tu barrera', 'te sigue pidiendo.'] },
};

window.CATALOG = [
  {
    id: 'snail',
    sku: 'DB-SNL-50',
    name: 'Ultimate Snail Mucin Cream',
    eyebrow: 'Barrier · Bestseller',
    family: 'barrier',
    image: 'snail-u.jpg',
    price: 34.99,
    size: '50 g · 1.76 oz',
    benefit: '92% snail secretion filtrate at 1,000 ppm. Built for the barrier, bounce, slip, and a glow you can see.',
    benefitEs: '92% de filtrado de caracol a 1,000 ppm. Hecho para la barrera, rebote, suavidad y un brillo visible.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'Bestseller', tone: 'noir' }],
    ingredients: '92% Snail Secretion Filtrate (1,000 ppm) · Centella Asiatica · Panthenol · Niacinamide 2%.',
    ingredientsEs: '92% Filtrado de Caracol (1,000 ppm) · Centella Asiática · Pantenol · Niacinamida 2%.',
    usage: [
      'Cleanse with Triple Collagen Firming Foam.',
      'Prep with Triple Collagen Firming Toner.',
      'Massage cream upward, AM & PM.',
      'Finish with SPF during the day.',
    ],
    compliance: 'Helps improve the appearance of a stronger barrier with continued use. Not a treatment for any medical condition.',
  },
  {
    id: 'collagen',
    sku: 'DB-COL-50',
    name: 'Triple Collagen Firming Cream',
    eyebrow: 'Firming · Hero',
    family: 'collagen',
    image: 'collagen-u.jpg',
    price: 44.99,
    size: '50 g · 1.76 oz',
    benefit: 'Visibly firm. Smooth. Radiant. With 3,500 ppm Triple Collagen Complex.',
    benefitEs: 'Visiblemente firme. Suave. Radiante. Con 3,500 ppm de Complejo de Triple Colágeno.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'Hero', tone: 'noir' }],
    ingredients: 'Triple Collagen Complex (3,500 ppm) · Adenosine · Bakuchiol · Peptide-3.',
    ingredientsEs: 'Complejo Triple Colágeno (3,500 ppm) · Adenosina · Bakuchiol · Péptido-3.',
    usage: [
      'Use AM & PM after toner and essence.',
      'Apply a pearl-size amount to face and neck.',
      'Press, don\'t rub, until fully absorbed.',
      'Layer SPF in the morning.',
    ],
    compliance: 'Helps improve the appearance of firmness with continued daily use.',
  },
  {
    id: 'ha',
    sku: 'DB-HAN-50',
    name: 'Hyaluronic Acid Intense Hydration Cream',
    eyebrow: 'Hydration · Triple HA + 2% Niacinamide',
    family: 'hydration',
    image: 'ha-u.jpg',
    price: 39.99,
    size: '50 g · 1.76 oz',
    benefit: 'Korean barrier-boosting moisturizer with triple-weight HA + 2% niacinamide. Hydration that actually lasts.',
    benefitEs: 'Hidratante coreano con AH de triple peso + 2% niacinamida. Hidratación que de verdad dura.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'Hydration', tone: 'midnight' }],
    ingredients: 'Triple HA (high / medium / low molecular weight) · Niacinamide 2% · Trehalose · Squalane.',
    ingredientsEs: 'AH Triple (alto / medio / bajo peso molecular) · Niacinamida 2% · Trealosa · Escualano.',
    usage: [
      'Apply to damp skin after toner.',
      'Layer over essence if dry.',
      'Use AM & PM as your moisture seal.',
    ],
    compliance: 'Supports the appearance of plumper, more hydrated skin.',
  },
  {
    id: 'toner',
    sku: 'DB-TON-250',
    name: 'Triple Collagen Firming Toner',
    eyebrow: 'Prep · 3,500 ppm Collagen + 10,000 ppm HA',
    family: 'collagen',
    image: 'toner-u.jpg',
    price: 27.99,
    size: '250 ml · 8.45 fl oz',
    benefit: 'Hydrating, firming toner. Press it in before everything else, the foundation of the ritual.',
    benefitEs: 'Tónico hidratante y firmante. Presiónalo antes de todo lo demás, la base del ritual.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }],
    ingredients: 'Triple Collagen Complex (3,500 ppm) · Sodium Hyaluronate (10,000 ppm) · Bamboo · Watermelon · Jasmine.',
    ingredientsEs: 'Complejo Triple Colágeno (3,500 ppm) · Hialuronato de Sodio (10,000 ppm) · Bambú · Sandía · Jazmín.',
    usage: [
      'After cleansing, press onto skin with palms.',
      'Layer 2–3 passes for extra hydration.',
      'Follow with essence or cream.',
    ],
    compliance: 'Preps skin to improve the appearance of moisture retention.',
  },
  {
    id: 'foam',
    sku: 'DB-FOM-150',
    name: 'Triple Collagen Firming Foam',
    eyebrow: 'Cleanse · 3,000 ppm Collagen',
    family: 'cleanse',
    image: 'foam-u.jpg',
    price: 14.99,
    size: '120 ml · 4.05 fl oz',
    benefit: 'Korean anti-aging cleanser. Removes the day without removing the barrier, pH-balanced foam, 3,000 ppm collagen.',
    benefitEs: 'Limpiador antiedad coreano. Quita el día sin quitar la barrera, espuma con pH balanceado, 3,000 ppm de colágeno.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'Step 1', tone: 'porcelain' }],
    ingredients: 'Triple Collagen Complex (3,000 ppm) · Centella Asiatica · Glycerin · Mild Amino-acid surfactants.',
    ingredientsEs: 'Complejo Triple Colágeno (3,000 ppm) · Centella Asiática · Glicerina · Surfactantes suaves de aminoácidos.',
    usage: [
      'Wet face. Dispense 1 pump into damp palms.',
      'Massage upward in slow circles for 30 seconds.',
      'Rinse with lukewarm water. Pat, don\'t rub, dry.',
      'Follow with Triple Collagen Firming Toner.',
    ],
    compliance: 'Daily cleanser. Safe for all skin types, patch test recommended for sensitive skin.',
  },
  // EYE CREAM, cross-sell on Complete System PDP. Step 3 "Target" of the routine.
  {
    id: 'eye',
    sku: 'DB-EYE-15',
    name: 'Triple Collagen Firming Eye Cream',
    eyebrow: 'Targeted · Step 3 Target',
    family: 'collagen',
    image: 'eye-u.jpg',
    price: 33.99,
    size: '15 g · 0.53 oz',
    benefit: 'Visibly firms and smooths the delicate eye area. Korean-engineered Triple Collagen Complex.',
    benefitEs: 'Firma y suaviza visiblemente el área delicada de los ojos. Complejo Triple Colágeno coreano.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'All skin types', tone: 'porcelain' }],
    ingredients: 'Triple Collagen · Caffeine · Peptide-3 · Squalane.',
    ingredientsEs: 'Triple Colágeno · Cafeína · Péptido-3 · Escualano.',
    usage: [
      'Apply a rice-grain amount under each eye, AM & PM.',
      'Tap with ring finger from inner to outer corner.',
    ],
    compliance: 'Helps improve the appearance of fine lines around the eye area with continued use.',
  },
  // ESSENCE, prep step. NOTE: Amazon listing copy was scrubbed for US FDA/FTC
  // compliance (no "anti-aging treatment", "lift sagging skin", "penetrates
  // deep", "structural matrix", those are drug/structure-function claims).
  {
    id: 'essence',
    sku: 'DB-ESS-150',
    upc: '850066107188',
    name: 'Triple Collagen Firming Essence',
    eyebrow: 'Prep · 3,500 ppm Collagen · 85.83% water base',
    family: 'collagen',
    image: 'essence-u.jpg',
    gallery: ['essence-u.jpg', 'essence-hydration.jpg', 'essence-complex.png'],
    price: 19.99,
    size: '150 ml · 5.07 fl oz',
    benefit: 'The feather-light prep step between toner and cream. An 85.83% water base with 3,500 ppm Triple Collagen Complex absorbs in seconds, skin looks instantly plumped, smooth, and ready for what comes next.',
    benefitEs: 'El paso ligero entre el tónico y la crema. Base de 85.83% agua con 3,500 ppm de Complejo Triple Colágeno que absorbe en segundos, la piel luce visiblemente rellena, suave y lista para lo que sigue.',
    badges: [{ label: 'Made in Korea', tone: 'porcelain' }, { label: 'Essence', tone: 'porcelain' }],
    ingredients: 'Water · Glycerin (5%) · Dipropylene Glycol · Betaine · Soluble Collagen (2,000 ppm) · Hydrolyzed Collagen (1,000 ppm) · Collagen Extract (500 ppm) · Watermelon Fruit · Luffa · Bamboo · Peony Root · Adenosine.',
    ingredientsEs: 'Agua · Glicerina (5%) · Dipropilenglicol · Betaína · Colágeno Soluble (2,000 ppm) · Colágeno Hidrolizado (1,000 ppm) · Extracto de Colágeno (500 ppm) · Sandía · Luffa · Bambú · Raíz de Peonía · Adenosina.',
    usage: [
      'After cleansing and toning, dispense 1 pump into palms.',
      'Press and pat over the face with upward motions.',
      'Let it absorb, then follow with your cream.',
      'Use AM & PM. Always follow with SPF in the morning.',
    ],
    compliance: 'Helps improve the appearance of hydration, smoothness, and firmness with continued use. A cosmetic essence, not a treatment for any medical condition.',
  },
];

// =========================================================
// BUNDLES, sourced from disuribeauty.com PDP cross-sell:
//   BUNDLE-1 The Complete DISURI System       $101.97
//   BUNDLE-2 The Anti-Aging Power Duo         $76.48
//   BUNDLE-3 The Barrier Rescue System        $67.48
// Bundle assets live in assets/photography/bundles/.
// =========================================================
window.BUNDLES = [
  {
    id: 'complete-system',
    sku: 'DB-BNDL-FULL',
    name: 'The Complete DISURI System',
    subtitle: '3-Step Korean Skincare Routine',
    eyebrow: 'Bestseller · 1,349 reviews',
    family: 'bundle',
    image: 'bundles/complete-system-clean.jpg',
    gallery: [
      'bundles/complete-system-clean.jpg',
      'bundles/complete-system-hero.jpg',
      'bundles/complete-system-3step.jpg',
      'bundles/complete-system-benefits.jpg',
      'bundles/complete-system-ingredients.jpg',
      'bundles/complete-system-ritual.jpg',
    ],
    price: 101.97,
    retail: 119.97,
    saves: 18.00,
    subscribePrice: 79.99,
    size: '3 jars · 50 g each · 1.76 oz each',
    benefit: 'Repair → Hydrate → Firm. Three Korean creams. One color-coded ritual designed to layer.',
    benefitEs: 'Repara → Hidrata → Firmeza. Tres cremas coreanas. Un ritual codificado por color, diseñado para capas.',
    badges: [{ label: 'Save $18.00', tone: 'crimson' }, { label: 'Bestseller', tone: 'noir' }],
    includes: ['snail', 'ha', 'collagen'],
    steps: [
      { num: 1, label: 'REPAIR',   color: 'Copper',   product: 'Ultimate Snail Mucin Cream',          why: '1,000 ppm snail filtrate helps support barrier resilience and soothe stressed skin.' },
      { num: 2, label: 'HYDRATE',  color: 'Midnight', product: 'HA + 2% Niacinamide Cream',           why: 'Triple HA delivers hydration that actually lasts. 2% niacinamide supports barrier function.' },
      { num: 3, label: 'FIRM',     color: 'Crimson',  product: 'Triple Collagen Firming Cream',       why: '0.35% Triple Collagen Complex helps improve the appearance of firmness and smoothness.' },
    ],
    ingredients: '92% Snail Secretion Filtrate · Triple HA · 2% Niacinamide · 0.35% Triple Collagen Complex · Adenosine (in all three) · Beta-glucan · Peptide-3.',
    ingredientsEs: '92% Filtrado de Caracol · AH Triple · 2% Niacinamida · 0.35% Complejo Triple Colágeno · Adenosina (en las tres) · Beta-glucano · Péptido-3.',
    usage: [
      'PM: Cleanse. Pat dry, leave slightly damp.',
      'Step 1 (Copper): Pearl-size Snail Mucin Cream. Pat 30–60s.',
      'Step 2 (Blue): HA + 2% Niacinamide Cream. Pat in.',
      'Step 3 (Crimson): Triple Collagen Firming Cream. Seal the ritual.',
      'AM: Layer under SPF.',
    ],
    compliance: 'Each cream lasts 2–3 months with daily use. Complete system provides 3–4 months of routine. 30-day money-back guarantee.',
  },
  {
    id: 'anti-aging-duo',
    sku: 'DB-BNDL-DUO',
    name: 'The Anti-Aging Power Duo',
    subtitle: 'Firming + Hydration',
    eyebrow: 'For 30+ skin · 1,247 reviews',
    family: 'bundle',
    image: 'bundles/anti-aging-duo-clean.jpg',
    gallery: [
      'bundles/anti-aging-duo-clean.jpg',
      'bundles/anti-aging-duo-hero.jpg',
      'bundles/anti-aging-duo-headline.jpg',
      'bundles/anti-aging-duo-benefits.jpg',
      'bundles/anti-aging-duo-ingredients.jpg',
      'bundles/anti-aging-duo-howto.jpg',
      'bundles/anti-aging-duo-lifestyle.jpg',
      'bundles/anti-aging-duo-philosophy.jpg',
    ],
    price: 76.48,
    retail: 84.98,
    saves: 8.50,
    size: '2 jars · 50 g each · 1.76 oz each',
    benefit: 'Two creams working together to help skin look smoother, bouncier and well-hydrated. For 30+ skin noticing early visible aging.',
    benefitEs: 'Dos cremas que trabajan juntas para una piel más suave, con rebote e hidratada. Para piel 30+ con primeros signos de edad visibles.',
    badges: [{ label: 'Save $8.50', tone: 'crimson' }, { label: 'Firming', tone: 'porcelain' }],
    includes: ['collagen', 'ha'],
    steps: [
      { num: 1, label: 'AM',  color: 'Midnight', product: 'HA + 2% Niacinamide Cream',           why: 'Lightweight, hydrating finish under SPF and makeup.' },
      { num: 2, label: 'PM',  color: 'Crimson',  product: 'Triple Collagen Firming Cream',       why: 'Apply to face, neck, and décolletage for overnight firming support.' },
    ],
    ingredients: 'Triple Collagen Complex · Adenosine (Korean FDA-approved) · 2% Niacinamide · Multi-Weight Hyaluronic Acid · Jellyfish Extract · Shea Butter · Beta-Glucan.',
    ingredientsEs: 'Complejo Triple Colágeno · Adenosina (aprobada por la FDA coreana) · 2% Niacinamida · AH de Múltiples Pesos · Extracto de Medusa · Manteca de Karité · Beta-glucano.',
    usage: [
      'AM: Apply HA Cream after serum, before SPF.',
      'PM: Apply Triple Collagen Cream to face, neck & décolletage.',
      'Use HA Cream whenever skin feels extra dry or tight.',
    ],
    compliance: 'Camera-ready confidence, every day, without harsh routines. Helps improve the look of firmness, smoothness, and radiance.',
  },
  {
    id: 'barrier-rescue',
    sku: 'DB-BNDL-BAR',
    name: 'The Barrier Rescue System',
    subtitle: 'Repair + Hydrate',
    eyebrow: 'For stressed, reactive skin',
    family: 'bundle',
    image: 'snail-ha-duo.jpg',
    price: 67.48,
    retail: 74.98,
    saves: 7.50,
    size: '2 jars · 50 g each · 1.76 oz each',
    attributes: ['Made in Korea', 'Cruelty-Free', 'Paraben-Free'],
    benefit: 'When skin feels stressed, tight, or overworked, this duo helps your barrier look calmer, smoother, and deeply hydrated.',
    benefitEs: 'Cuando la piel se siente estresada, tirante o sobrecargada, este dúo ayuda a que tu barrera luzca más calmada, suave e hidratada.',
    description: 'Pairs our snail mucin cream with our hyaluronic acid cream to support the appearance of a healthy, resilient skin barrier. Designed for skin that feels tight, reactive, or easily irritated by urban life, actives, or harsh weather. Your go-to rescue combo when “nothing seems to work” anymore.',
    badges: [{ label: 'Save $7.50', tone: 'crimson' }, { label: 'Barrier', tone: 'copper' }],
    includes: ['snail', 'ha'],
    steps: [
      { num: 1, label: 'PM',  color: 'Copper',   product: 'Ultimate Snail Mucin Cream',          why: '1,000 ppm snail filtrate to soothe and support a stronger-looking barrier.' },
      { num: 2, label: 'AM',  color: 'Midnight', product: 'HA + 2% Niacinamide Cream',           why: 'Triple HA + niacinamide for hydration that lasts all day.' },
    ],
    conditions: ['Wound healing', 'Burns', 'Eczema & barrier repair', 'Acne scarring & hyperpigmentation', 'Aging & regeneration', 'Photodamage protection'],
    ingredients: 'Includes: Ultimate Snail Mucin Cream · HA + 2% Niacinamide Cream.',
    ingredientsEs: 'Incluye: Crema de Baba de Caracol · Crema HA + 2% Niacinamida.',
    usage: [
      'AM: HA Cream → always follow with SPF.',
      'PM: Snail Cream first, then HA Cream for an overnight reset.',
      'Patch-test first on very sensitive or allergy-prone skin.',
    ],
    compliance: 'Supports the appearance of a stronger, more hydrated barrier with continued use. Patch test before broader use; compromised skin (open wounds, severe burns) should be used under clinical guidance.',
  },
];

// Backwards-compat: legacy code paths may read CATALOG and expect every product
//, bundles can be mixed in by referencing window.ALL_OFFERINGS.
window.ALL_OFFERINGS = [...window.CATALOG, ...window.BUNDLES];
