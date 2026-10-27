import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGUAGES, DEFAULT_LANGUAGE, SITE_URL } from './config.js';
import { PAGE_MAP, resolvePageId, getAllHreflangLinks } from './routeMap.js';
import { TRANSLATIONS } from './translations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, '../../dist');
const TEMPLATE_PATH = path.resolve(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('dist/index.html not found. Please run "vite build" first.');
  process.exit(1);
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// List of all pages to prerender static HTML for
const pagesToPrerender = [];

for (const [pageId, pageData] of Object.entries(PAGE_MAP)) {
  for (const [langKey, slug] of Object.entries(pageData.slugs)) {
    pagesToPrerender.push({
      pageId,
      langKey,
      slug: slug === '/' ? '' : slug.replace(/^\//, '')
    });
  }
}

console.log(`Prerendering ${pagesToPrerender.length} static SEO HTML pages...`);

let count = 0;

for (const { pageId, langKey, slug } of pagesToPrerender) {
  const langInfo = LANGUAGES[langKey] || LANGUAGES[DEFAULT_LANGUAGE];
  const t = TRANSLATIONS[langKey] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const targetUrl = slug === '' ? `${SITE_URL}/` : `${SITE_URL}/${slug}`;

  // 1. Title & Description
  let title = `${t?.brand?.name || 'Age Calculator'} – Precision Calculation`;
  let desc = `Calculate your exact age and birthday countdown online with ${SITE_URL}. Fast, accurate, and completely free.`;

  if (t?.pages?.[pageId]) {
    if (t.pages[pageId].title) title = t.pages[pageId].title;
    if (t.pages[pageId].description) desc = t.pages[pageId].description;
  }

  // 2. hreflang tags
  const hreflangs = getAllHreflangLinks(slug === '' ? '/' : `/${slug}`);
  let hreflangHtml = '';
  for (const alt of hreflangs) {
    hreflangHtml += `    <link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />\n`;
  }

  // 3. Self-referencing canonical
  const canonicalHtml = `    <link rel="canonical" href="${targetUrl}" />\n`;

  // 4. Construct modified HTML
  let html = template;

  // Set html lang and dir
  html = html.replace(/<html[^>]*>/i, `<html lang="${langInfo.htmlLang}" dir="${langInfo.dir || 'ltr'}">`);

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  // Replace Meta Description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${desc}" />`);

  // Replace or inject Canonical & hreflangs
  html = html.replace(/<\/head>/i, `${canonicalHtml}${hreflangHtml}  </head>`);

  // Determine output path
  let outDir = DIST_DIR;
  if (slug !== '') {
    outDir = path.resolve(DIST_DIR, slug);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
  }

  const outFilePath = path.resolve(outDir, 'index.html');
  fs.writeFileSync(outFilePath, html, 'utf8');
  count++;
}

console.log(`Successfully prerendered ${count} static HTML pages in dist/!`);
