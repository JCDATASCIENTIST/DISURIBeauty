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
    size: '50 g',
    benefit: 'The barrier-repair hero. Ultimate Snail Mucin Cream contains 1,000ppm snail secretion filtrate—concentrated enough to deliver real results. This is the product for compromised barriers, eczema, sensitivity, post-procedure healing, and any skin that\'s red, reactive, or tight.',
    benefitEs: 'El héroe de reparación de barrera. Crema Ultimate de Mucina de Caracol contiene 1,000ppm de filtrado de secreción de caracol—concentrado lo suficiente para entregar resultados reales. Este es el producto para barreras comprometidas, eczema, sensibilidad, sanación post-procedimiento, y cualquier piel que sea roja, reactiva, o tirante.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'Bestseller',
        tone: 'noir',
      },
    ],
    ingredients: 'Snail Secretion Filtrate (1,000ppm) — natural HA + AHA + amino acids + antioxidants · Triple HA — three molecular weights for complete hydration · Allantoin — soothing, anti-inflammatory · Lysozyme — antioxidant, fights bacteria naturally',
    ingredientsEs: 'Filtrado de Secreción de Caracol (1,000ppm) — HA natural + AHA + aminoácidos + antioxidantes · Ácido Hialurónico Triple — tres pesos moleculares para hidratación completa · Alantoin — calmante, anti-inflamatorio · Lisozima — antioxidante, lucha contra bacterias naturalmente',
    usage: [
      'Use morning and/or evening after essence/serum',
      'Press (don\'t rub) into clean, slightly damp skin',
      'Can layer under other products',
      'Use nightly for 4+ weeks',
      'Can combine with Triple Collagen Cream for barrier + firmness',
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
    size: '50 g',
    benefit: 'The hero product for firmness and anti-aging. Triple Collagen Firming Cream combines 3,000–3,500ppm of triple collagen (soluble + peptides + extract) with snail mucin and HA to address loss of firmness, fine lines, and loss of elasticity.',
    benefitEs: 'El producto estrella para firmeza y anti-envejecimiento. Crema Reafirmante de Colágeno Triple combina 3,000–3,500ppm de colágeno triple (soluble + péptidos + extracto) con mucina de caracol y ácido hialurónico para abordar pérdida de firmeza, líneas de expresión, y pérdida de elasticidad.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'Hero',
        tone: 'noir',
      },
    ],
    ingredients: 'Triple Collagen Complex (3,000–3,500ppm) — three collagen forms for immediate plumping + long-term collagen production · Snail Mucin (500ppm) — barrier support + anti-inflammatory + amino acids for collagen health · Triple HA (Hyaluronic Acid) — three molecular weights for surface + mid + deep hydration · Adenosine — enhances collagen synthesis + improves circulation',
    ingredientsEs: 'Complejo de Colágeno Triple (3,000–3,500ppm) — tres formas de colágeno para abultamiento inmediato + producción de colágeno a largo plazo · Mucina de Caracol (500ppm) — soporte de barrera + anti-inflamatorio + aminoácidos para salud del colágeno · Ácido Hialurónico Triple — tres pesos moleculares para hidratación de superficie + media + profunda · Adenosina — potencia síntesis de colágeno + mejora circulación',
    usage: [
      'Use morning and/or evening after hydrating serum (essence or HA serum)',
      'Warm cream between palms, press into face + neck',
      'Don\'t rub; press to maximize absorption',
      'Can layer under eye cream if needed',
      'Daily use for optimal results (morning + evening)',
      'Minimum 4 weeks to see results',
      'Before: Cleanser → Toner → Essence or HA Serum',
      'This product: Triple Collagen Firming Cream',
      'After: Eye cream (optional)',
    ],
    compliance: 'Helps improve the appearance of firmness with continued daily use.',
  },
  {
    id: 'ha',
    sku: 'DB-HAN-50',
    name: 'Hyaluronic Acid Intense Hydration Cream (+2% Niacinamide)',
    eyebrow: 'Hydration · Triple HA + 2% Niacinamide',
    family: 'hydration',
    image: 'ha-u.jpg',
    price: 39.99,
    size: '50 g',
    benefit: 'The hydration foundation. HA Intense Hydration Cream combines triple-weight HA (three molecular weights for surface + mid + deep penetration) with 2% niacinamide (pore-minimizing, barrier-supportive) for complete hydration that works at every skin layer.',
    benefitEs: 'La fundación de hidratación. Crema Intenso Hidratación de Ácido Hialurónico combina HA triple-peso (tres pesos moleculares para penetración de superficie + media + profunda) con 2% niacinamida (minimizadora de poros, de apoyo a barrera) para hidratación completa que funciona en cada capa de piel.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'Hydration',
        tone: 'midnight',
      },
    ],
    ingredients: 'Triple-Weight HA (High + Medium + Low MW) — immediate plumping + all-day hydration + long-term HA production · Niacinamide (2%) — pore-minimizing, sebum control, barrier support · Adenosine — circulation boost, collagen synergist · Allantoin — soothing, anti-inflammatory',
    ingredientsEs: 'HA Triple-Peso (MW Alto + Medio + Bajo) — abultamiento inmediato + hidratación todo el día + producción de HA a largo plazo · Niacinamida (2%) — minimizadora de poros, control de sebo, soporte de barrera · Adenosina — impulso de circulación, sinergista de colágeno · Alantoin — calmante, anti-inflamatorio',
    usage: [
      'Use morning and evening after toner/essence',
      'Can layer with snail cream for barrier repair + hydration',
      'Can layer with collagen cream for complete anti-aging',
      'Works best on slightly damp skin (traps water)',
      'Apply to damp skin',
      'Seal with collagen cream or additional occlusive',
      'Use nightly for 4+ weeks to see long-term HA production improvement',
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
    size: '250ml',
    benefit: 'The prep step that boosts collagen activation. Triple Collagen Firming Toner preps your skin for maximum absorption and signals collagen production before heavier creams.',
    benefitEs: 'El paso de preparación que activa colágeno. Tónico Reafirmante de Colágeno Triple prepara tu piel para máxima absorción y señala producción de colágeno antes de cremas más pesadas.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
    ],
    ingredients: 'Triple Collagen Complex (2,500ppm) — prep signal for collagen synthesis · Adenosine (1%) — blood circulation boost · Niacinamide (2%) — pore refining + barrier support · Hyaluronic Acid (0.5%) — light hydration foundation',
    ingredientsEs: 'Complejo de Colágeno Triple (2,500ppm) — señal de prep para síntesis de colágeno · Adenosina (1%) — impulso de circulación sanguínea · Niacinamida (2%) — refinamiento de poros + soporte de barrera · Ácido Hialurónico (0.5%) — fundación de hidratación ligera',
    usage: [
      'Cleanse skin',
      'Apply toner (this product) — Pat gently, let absorb (30 seconds)',
      'Apply serum/essence — Absorbs better now',
      'Apply cream — Absorbs deeper now',
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
    size: '150ml',
    benefit: 'The entry point cleanser with collagen. Triple Collagen Firming Foam cleanses gently while signaling collagen production. Start every routine with this.',
    benefitEs: 'El limpiador de punto de entrada con colágeno. Espuma Reafirmante de Colágeno Triple limpia suavemente mientras señala producción de colágeno. Comienza cada rutina con esto.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'Step 1',
        tone: 'porcelain',
      },
    ],
    ingredients: 'Triple Collagen Complex (1,500ppm) — gentle collagen signal while cleansing · Niacinamide (2%) — pore-minimizing, gentle on barrier · Allantoin — soothing (especially for post-procedure skin)',
    ingredientsEs: 'Complejo de Colágeno Triple (1,500ppm) — señal gentil de colágeno mientras limpias · Niacinamida (2%) — minimizadora de poros, gentil en barrera · Alantoin — calmante (especialmente para piel post-procedimiento)',
    usage: [
      'Wet face with warm water',
      'Pump 1–2 times of foam',
      'Massage gently for 30–60 seconds',
      'Rinse thoroughly with warm water',
      'Follow with toner + cream',
    ],
    compliance: 'Daily cleanser. Safe for all skin types, patch test recommended for sensitive skin.',
  },
  {
    id: 'eye',
    sku: 'DB-EYE-15',
    name: 'Triple Collagen Firming Eye Cream',
    eyebrow: 'Targeted · Step 3 Target',
    family: 'collagen',
    image: 'eye-u.jpg',
    price: 33.99,
    size: '15 g',
    benefit: 'Specialized eye care with triple collagen. The eye area loses collagen fastest. This concentrated cream targets crow\'s feet, loss of elasticity, and dark circles with triple collagen + adenosine for visible lift.',
    benefitEs: 'Cuidado especializado de ojos con colágeno triple. El área de ojos pierde colágeno más rápido. Esta crema concentrada aborda patas de gallo, pérdida de elasticidad, y ojeras oscuras con colágeno triple + adenosina para levantamiento visible.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'All skin types',
        tone: 'porcelain',
      },
    ],
    ingredients: 'Triple Collagen Complex (3,500ppm) — highest concentration for eye area · Adenosine (2%) — circulation boost (addresses dark circles) · Caffeine Extract — puffiness reduction · Hyaluronic Acid (1.5%) — deep hydration for delicate skin',
    ingredientsEs: 'Complejo de Colágeno Triple (3,500ppm) — concentración más alta para área de ojos · Adenosina (2%) — impulso de circulación (aborda ojeras oscuras) · Extracto de Cafeína — reducción de hinchazón · Ácido Hialurónico (1.5%) — hidratación profunda para piel delicada',
    usage: [
      'Pat eye area gently with ring finger (lightest touch)',
      'Use pea-sized amount',
      'Gently tap around orbital bone (not directly on eyelid)',
      'Let absorb before makeup (30 seconds)',
    ],
    compliance: 'Helps improve the appearance of fine lines around the eye area with continued use.',
  },
  {
    id: 'essence',
    sku: 'DB-ESS-150',
    upc: '850066107188',
    name: 'Triple Collagen Firming Essence',
    eyebrow: 'Prep · 3,500 ppm Collagen · 85.83% water base',
    family: 'collagen',
    image: 'essence-u.jpg',
    gallery: [
      'essence-u.jpg',
      'essence-hydration.jpg',
      'essence-complex.png',
    ],
    price: 19.99,
    size: '150ml',
    benefit: 'The hydration foundation with collagen signal. Triple Collagen Firming Essence is the lightweight base that preps skin for creams while delivering collagen-boosting actives.',
    benefitEs: 'La fundación de hidratación con señal de colágeno. Esencia Reafirmante de Colágeno Triple es la base ligera que prepara piel para cremas mientras entrega activos que estimulan colágeno.',
    badges: [
      {
        label: 'Made in Korea',
        tone: 'porcelain',
      },
      {
        label: 'Essence',
        tone: 'porcelain',
      },
    ],
    ingredients: 'Triple Collagen Complex (1,500ppm) — collagen signal + light hydration · Hyaluronic Acid (1%) — hydration foundation · Adenosine (0.5%) — circulation + collagen boost · Niacinamide (1.5%) — pore refining + barrier support',
    ingredientsEs: 'Complejo de Colágeno Triple (1,500ppm) — señal de colágeno + hidratación ligera · Ácido Hialurónico (1%) — fundación de hidratación · Adenosina (0.5%) — circulación + impulso de colágeno · Niacinamida (1.5%) — refinamiento de poros + soporte de barrera',
    usage: [
      'After toner, before cream',
      'Dispense 2–3 drops into palm',
      'Pat gently into face + neck',
      'Let absorb (30 seconds)',
      'Follow with cream',
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
    saves: 18,
    subscribePrice: 79.99,
    size: '3 jars · 50 g each · 1.76 oz each',
    benefit: 'This is the complete ritual: Repair → Hydrate → Firm',
    benefitEs: 'Repara → Hidrata → Firmeza. Tres cremas coreanas. Un ritual codificado por color, diseñado para capas.',
    badges: [
      {
        label: 'Save $18.00',
        tone: 'crimson',
      },
      {
        label: 'Bestseller',
        tone: 'noir',
      },
    ],
    includes: [
      'snail',
      'ha',
      'collagen',
    ],
    steps: [
      {
        num: 1,
        label: 'REPAIR',
        color: 'Copper',
        product: 'Ultimate Snail Mucin Cream',
        why: '1,000 ppm snail filtrate helps support barrier resilience and soothe stressed skin.',
      },
      {
        num: 2,
        label: 'HYDRATE',
        color: 'Midnight',
        product: 'HA + 2% Niacinamide Cream',
        why: 'Triple HA delivers hydration that actually lasts. 2% niacinamide supports barrier function.',
      },
      {
        num: 3,
        label: 'FIRM',
        color: 'Crimson',
        product: 'Triple Collagen Firming Cream',
        why: '0.35% Triple Collagen Complex helps improve the appearance of firmness and smoothness.',
      },
    ],
    ingredients: '92% Snail Secretion Filtrate · Triple HA · 2% Niacinamide · 0.35% Triple Collagen Complex · Adenosine (in all three) · Beta-glucan · Peptide-3.',
    ingredientsEs: '92% Filtrado de Caracol · AH Triple · 2% Niacinamida · 0.35% Complejo Triple Colágeno · Adenosina (en las tres) · Beta-glucano · Péptido-3.',
    usage: [
      'Cleanser (not included; use Triple-Collagen-Firming-Foam as starter)',
      'Ultimate Snail Mucin Cream (barrier repair)',
      'HA Intense Hydration Cream (hydration foundation)',
      'Triple Collagen Firming Cream (firmness + sealing)',
      'Triple-Collagen-Firming-Toner before step 2 (prep step)',
      'Triple-Collagen-Firming-Eye-Cream after collagen cream (eye area)',
      'Triple-Collagen-Firming-Essence as hydration boost (replaces HA if using lighter routine)',
    ],
    compliance: 'Each cream lasts 2–3 months with daily use. Complete system provides 3–4 months of routine. 30-day money-back guarantee.',
    description: 'This is the complete ritual: Repair → Hydrate → Firm',
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
    saves: 8.5,
    size: '2 jars · 50 g each · 1.76 oz each',
    benefit: '---',
    benefitEs: 'Dos cremas que trabajan juntas para una piel más suave, con rebote e hidratada. Para piel 30+ con primeros signos de edad visibles.',
    badges: [
      {
        label: 'Save $8.50',
        tone: 'crimson',
      },
      {
        label: 'Firming',
        tone: 'porcelain',
      },
    ],
    includes: [
      'collagen',
      'ha',
    ],
    steps: [
      {
        num: 1,
        label: 'AM',
        color: 'Midnight',
        product: 'HA + 2% Niacinamide Cream',
        why: 'Lightweight, hydrating finish under SPF and makeup.',
      },
      {
        num: 2,
        label: 'PM',
        color: 'Crimson',
        product: 'Triple Collagen Firming Cream',
        why: 'Apply to face, neck, and décolletage for overnight firming support.',
      },
    ],
    ingredients: 'Triple Collagen Complex · Adenosine (Korean FDA-approved) · 2% Niacinamide · Multi-Weight Hyaluronic Acid · Jellyfish Extract · Shea Butter · Beta-Glucan.',
    ingredientsEs: 'Complejo Triple Colágeno · Adenosina (aprobada por la FDA coreana) · 2% Niacinamida · AH de Múltiples Pesos · Extracto de Medusa · Manteca de Karité · Beta-glucano.',
    usage: [
      'Cleanser',
      'HA Intense Hydration Cream (hydration + niacinamide)',
      'Triple Collagen Firming Cream (firmness + sealing)',
      'Add Triple-Collagen-Firming-Toner before hydration step (circulation boost)',
      'Add Triple-Collagen-Firming-Eye-Cream after collagen cream (eye focus)',
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
    saves: 7.5,
    size: '2 jars · 50 g each · 1.76 oz each',
    attributes: [
      'Made in Korea',
      'Cruelty-Free',
      'Paraben-Free',
    ],
    benefit: '---',
    benefitEs: 'Cuando la piel se siente estresada, tirante o sobrecargada, este dúo ayuda a que tu barrera luzca más calmada, suave e hidratada.',
    description: 'Pairs our snail mucin cream with our hyaluronic acid cream to support the appearance of a healthy, resilient skin barrier. Designed for skin that feels tight, reactive, or easily irritated by urban life, actives, or harsh weather. Your go-to rescue combo when “nothing seems to work” anymore.',
    badges: [
      {
        label: 'Save $7.50',
        tone: 'crimson',
      },
      {
        label: 'Barrier',
        tone: 'copper',
      },
    ],
    includes: [
      'snail',
      'ha',
    ],
    steps: [
      {
        num: 1,
        label: 'PM',
        color: 'Copper',
        product: 'Ultimate Snail Mucin Cream',
        why: '1,000 ppm snail filtrate to soothe and support a stronger-looking barrier.',
      },
      {
        num: 2,
        label: 'AM',
        color: 'Midnight',
        product: 'HA + 2% Niacinamide Cream',
        why: 'Triple HA + niacinamide for hydration that lasts all day.',
      },
    ],
    conditions: [
      'Wound healing',
      'Burns',
      'Eczema & barrier repair',
      'Acne scarring & hyperpigmentation',
      'Aging & regeneration',
      'Photodamage protection',
    ],
    ingredients: 'Includes: Ultimate Snail Mucin Cream · HA + 2% Niacinamide Cream.',
    ingredientsEs: 'Incluye: Crema de Baba de Caracol · Crema HA + 2% Niacinamida.',
    usage: [
      'Gentle Cleanser (Triple-Collagen-Firming-Foam)',
      'Ultimate Snail Mucin Cream (barrier repair + soothing)',
      'HA Intense Hydration Cream (deep hydration + lock-in)',
      'Use nightly for minimum 4 weeks before adding other actives',
      'Can continue indefinitely as your barrier maintenance foundation',
      'Add Triple-Collagen-Firming-Toner for extra barrier support (optional)',
    ],
    compliance: 'Supports the appearance of a stronger, more hydrated barrier with continued use. Patch test before broader use; compromised skin (open wounds, severe burns) should be used under clinical guidance.',
  },
];

// Backwards-compat: legacy code paths may read CATALOG and expect every product
//, bundles can be mixed in by referencing window.ALL_OFFERINGS.
window.ALL_OFFERINGS = [...window.CATALOG, ...window.BUNDLES];
