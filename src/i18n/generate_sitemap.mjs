import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://agecalculator.today';

// Import LANGUAGES and PAGE_MAP
const configPath = path.resolve(__dirname, './config.js');
const routeMapPath = path.resolve(__dirname, './routeMap.js');

const { LANGUAGES } = await import(`file://${configPath}`);
const { PAGE_MAP } = await import(`file://${routeMapPath}`);

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n`;
xml += `        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n\n`;

// Generate entries for each page and language
for (const [pageId, pageData] of Object.entries(PAGE_MAP)) {
  // All language versions of this page
  const hreflangCluster = [];
  for (const [langKey, langInfo] of Object.entries(LANGUAGES)) {
    const slug = pageData.slugs[langKey] || (langInfo.pathPrefix ? `${langInfo.pathPrefix}${pageData.slugs.en === '/' ? '' : pageData.slugs.en}` : pageData.slugs.en);
    const loc = slug === '/' ? `${SITE_URL}/` : `${SITE_URL}${slug}`;
    hreflangCluster.push({
      hreflang: langInfo.hreflang,
      href: loc
    });
  }

  // x-default points to English
  const enLoc = pageData.slugs.en === '/' ? `${SITE_URL}/` : `${SITE_URL}${pageData.slugs.en}`;
  hreflangCluster.push({
    hreflang: 'x-default',
    href: enLoc
  });

  // Write URL entry for each language of this page
  for (const [langKey, langInfo] of Object.entries(LANGUAGES)) {
    const slug = pageData.slugs[langKey] || (langInfo.pathPrefix ? `${langInfo.pathPrefix}${pageData.slugs.en === '/' ? '' : pageData.slugs.en}` : pageData.slugs.en);
    const loc = slug === '/' ? `${SITE_URL}/` : `${SITE_URL}${slug}`;
    const priority = pageId === 'home' ? (langKey === 'en' ? '1.0' : '0.9') : '0.8';

    xml += `  <url>\n`;
    xml += `    <loc>${loc}</loc>\n`;
    for (const alt of hreflangCluster) {
      xml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />\n`;
    }
    xml += `    <lastmod>2026-10-27</lastmod>\n`;
    xml += `    <changefreq>${pageId === 'home' ? 'daily' : 'weekly'}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += `  </url>\n`;
  }
}

xml += `</urlset>\n`;

const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log('Successfully generated complete multilingual sitemap.xml');
