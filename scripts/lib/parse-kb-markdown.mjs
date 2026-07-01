const HEADING_TO_FIELD = {
  benefit: 'benefit',
  'benefit (es)': 'benefitEs',
  ingredients: 'ingredients',
  'ingredients (es)': 'ingredientsEs',
  usage: 'usage',
  compliance: 'compliance',
  description: 'description',
  name: 'name',
  subtitle: 'subtitle',
};

const VAULT_HEADINGS = {
  en: {
    product: 'the product',
    system: 'the system approach',
    ingredients: 'ingredient profile',
    usage: 'how to use',
    included: "what's included",
  },
  es: {
    product: 'el producto',
    system: 'el enfoque del sistema',
    ingredients: 'perfil de ingredientes',
    usage: 'cómo usar',
    included: 'qué incluye',
  },
};

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: text.trim() };

  const meta = {};
  for (const line of match[1].split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const colon = trimmed.indexOf(':');
    if (colon === -1) continue;
    const key = trimmed.slice(0, colon).trim();
    let val = trimmed.slice(colon + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (val === 'true') meta[key] = true;
    else if (val === 'false') meta[key] = false;
    else if (/^-?\d+(\.\d+)?$/.test(val)) meta[key] = Number(val);
    else meta[key] = val;
  }
  return { meta, body: match[2].trim() };
}

function parseSections(body) {
  const sections = {};
  const parts = body.split(/^## /m).filter(Boolean);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const heading = (nl === -1 ? part : part.slice(0, nl)).trim().toLowerCase();
    const content = (nl === -1 ? '' : part.slice(nl + 1)).trim();
    const field = HEADING_TO_FIELD[heading];
    if (!field) continue;

    if (field === 'usage') {
      sections.usage = content
        .split('\n')
        .map((line) => line.replace(/^[-*]\s+/, '').trim())
        .filter(Boolean);
    } else {
      sections[field] = content.replace(/\n+/g, ' ').trim();
    }
  }
  return sections;
}

function parseVaultSections(body) {
  const sections = {};
  const parts = body.split(/^## /m).filter(Boolean);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    const heading = (nl === -1 ? part : part.slice(0, nl)).trim().toLowerCase();
    const content = (nl === -1 ? '' : part.slice(nl + 1)).trim();
    sections[heading] = content;
  }
  return sections;
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFirstParagraph(sectionText) {
  const blocks = sectionText
    .split(/\n---\n|\n\n+/)
    .map((b) => stripMarkdown(b))
    .filter((b) => b.length > 0 && !b.startsWith('**') && !b.startsWith('|'));
  return blocks[0] ?? '';
}

function extractIngredientLine(sectionText) {
  const lines = sectionText.split('\n');
  const actives = [];
  for (const line of lines) {
    const bullet = line.match(/^[-*]\s+\*\*([^*]+)\*\*\s*[—–-]\s*(.+)$/);
    if (bullet) {
      actives.push(`${bullet[1]} — ${stripMarkdown(bullet[2])}`);
      continue;
    }
    const simple = line.match(/^[-*]\s+\*\*([^*]+)\*\*/);
    if (simple) actives.push(simple[1]);
  }
  if (actives.length > 0) return actives.join(' · ');
  return stripMarkdown(sectionText).slice(0, 500);
}

function extractUsageSteps(sectionText) {
  const steps = [];
  for (const line of sectionText.split('\n')) {
    const bullet = line.match(/^[-*]\s+(.+)$/);
    if (bullet) {
      const step = stripMarkdown(bullet[1]);
      if (step && !step.endsWith(':')) steps.push(step);
      continue;
    }
    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (numbered) steps.push(stripMarkdown(numbered[1]));
  }
  return steps.length > 0 ? steps : undefined;
}

function normalizeName(title, isBundle) {
  if (!title) return undefined;
  if (isBundle && /^bundle:\s*/i.test(title)) {
    return title.replace(/^bundle:\s*/i, '').trim();
  }
  return title.trim();
}

function normalizeSize(size) {
  if (!size) return undefined;
  return String(size).replace(/(\d)g\b/i, '$1 g');
}

function parseVaultMarkdown(text, language = 'en') {
  const { meta, body } = parseFrontmatter(text);
  const sections = parseVaultSections(body);
  const h = VAULT_HEADINGS[language] ?? VAULT_HEADINGS.en;
  const isBundle = meta.type === 'kb-bundle';

  const result = {};
  if (meta.title) result.name = normalizeName(meta.title, isBundle);
  if (meta.price !== undefined) result.price = meta.price;
  if (meta.size) result.size = normalizeSize(meta.size);

  const benefitSource = isBundle
    ? sections[h.system] ?? sections[h.included]
    : sections[h.product];
  if (benefitSource) {
    const benefit = extractFirstParagraph(benefitSource);
    if (language === 'es') result.benefitEs = benefit;
    else result.benefit = benefit;
  }

  if (sections[h.ingredients]) {
    const ingredients = extractIngredientLine(sections[h.ingredients]);
    if (language === 'es') result.ingredientsEs = ingredients;
    else result.ingredients = ingredients;
  }

  const usage = sections[h.usage] ? extractUsageSteps(sections[h.usage]) : undefined;
  if (usage) result.usage = usage;

  if (isBundle && language === 'en' && sections[h.system]) {
    result.description = extractFirstParagraph(sections[h.system]);
  }

  return result;
}

export function parseKbMarkdown(text) {
  const { meta } = parseFrontmatter(text);
  if (meta.type === 'kb-product' || meta.type === 'kb-bundle') {
    return parseVaultMarkdown(text, meta.language === 'es' ? 'es' : 'en');
  }

  const { meta: _meta, body } = parseFrontmatter(text);
  const sections = parseSections(body);
  return { ..._meta, ...sections };
}

export function parseKbMarkdownPair(enText, esText) {
  const en = parseKbMarkdown(enText);
  const es = esText ? parseKbMarkdown(esText) : {};
  return {
    ...en,
    ...(es.benefitEs ? { benefitEs: es.benefitEs } : {}),
    ...(es.benefit ? { benefitEs: es.benefit } : {}),
    ...(es.ingredientsEs ? { ingredientsEs: es.ingredientsEs } : {}),
    ...(es.ingredients ? { ingredientsEs: es.ingredients } : {}),
  };
}

export function scaffoldKbMarkdown(item, catalogId) {
  const lines = [
    '---',
    `catalogId: ${catalogId}`,
    `name: ${JSON.stringify(item.name ?? '')}`,
    ...(item.subtitle ? [`subtitle: ${JSON.stringify(item.subtitle)}`] : []),
    `price: ${item.price ?? 0}`,
    `size: ${JSON.stringify(item.size ?? '')}`,
    ...(item.eyebrow ? [`eyebrow: ${JSON.stringify(item.eyebrow)}`] : []),
    '---',
    '',
    '## Benefit',
    item.benefit ?? '',
    '',
    '## Benefit (ES)',
    item.benefitEs ?? '',
    '',
  ];

  if (item.description) {
    lines.push('## Description', item.description, '');
  }

  lines.push(
    '## Ingredients',
    item.ingredients ?? '',
    '',
    '## Ingredients (ES)',
    item.ingredientsEs ?? '',
    '',
    '## Usage',
    ...(item.usage ?? []).map((step) => `- ${step}`),
    '',
    '## Compliance',
    item.compliance ?? '',
    ''
  );

  return lines.join('\n');
}
