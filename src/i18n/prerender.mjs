import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { LANGUAGES, DEFAULT_LANGUAGE, SITE_URL } from './config.js';
import { PAGE_MAP, resolvePageId, getAllHreflangLinks } from './routeMap.js';
import { TRANSLATIONS } from './translations.js';
import { getHomePageData } from './homePageData.js';

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

console.log(`Prerendering ${pagesToPrerender.length} static SEO HTML pages for all languages...`);

let count = 0;

for (const { pageId, langKey, slug } of pagesToPrerender) {
  const langInfo = LANGUAGES[langKey] || LANGUAGES[DEFAULT_LANGUAGE];
  const t = TRANSLATIONS[langKey] || TRANSLATIONS[DEFAULT_LANGUAGE];
  const pageData = getHomePageData(langKey);
  const targetUrl = slug === '' ? `${SITE_URL}/` : `${SITE_URL}/${slug}`;
  const isRtl = langInfo.dir === 'rtl';

  // 1. Title & Description
  let title = `${t?.brand?.name || 'Age Calculator'} – Precision Calculation`;
  let desc = `Calculate your exact age and birthday countdown online with ${SITE_URL}. Fast, accurate, and completely free.`;

  if (t?.pages?.[pageId]) {
    if (t.pages[pageId].title) title = t.pages[pageId].title;
    if (t.pages[pageId].description) desc = t.pages[pageId].description;
  } else if (pageData.hero?.title) {
    title = `${pageData.hero.title} | ${SITE_URL}`;
    desc = pageData.hero.subtitle;
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

  // Replace Open Graph metadata
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${desc}" />`);

  // Replace or inject Canonical & hreflangs
  html = html.replace(/<\/head>/i, `${canonicalHtml}${hreflangHtml}  </head>`);

  // 5. Generate rich localized crawlable markup for Googlebot inside <div id="root">
  const heroBadge = pageData.hero?.badge || 'Precision Age Calculator';
  const heroTitle = pageData.hero?.title || 'Age Calculator';
  const heroSubtitle = pageData.hero?.subtitle || '';
  const pills = pageData.hero?.pills || ['100% Free & Private', 'Instant Precision', 'Leap Year Calibrated'];

  const birthLabel = pageData.calculator?.dateOfBirth || 'Date of Birth';
  const compareLabel = pageData.calculator?.ageAtDate || 'Age at the Date of';
  const calcBtn = pageData.calculator?.calculateBtn || 'Calculate Age';
  const clearBtn = pageData.calculator?.clearBtn || 'Clear';

  const yearsUnit = pageData.results?.years || 'years';
  const monthsUnit = pageData.results?.months || 'months';
  const daysUnit = pageData.results?.days || 'days';
  const hoursUnit = pageData.results?.hours || 'hours';
  const minutesUnit = pageData.results?.minutes || 'minutes';
  const secondsUnit = pageData.results?.seconds || 'seconds';

  const features = pageData.features3 || [];
  const steps = pageData.howItWorks?.steps || [];
  const useCases = pageData.useCases?.items || [];
  const tools = pageData.toolsSection?.tools || [];
  const faqs = pageData.faqsSection?.faqs || [];

  // 33 Languages Directory Links for Crawlers
  const langLinksHtml = Object.entries(LANGUAGES).map(([code, info]) => {
    const url = info.pathPrefix ? `${SITE_URL}${info.pathPrefix}` : `${SITE_URL}/`;
    return `<a href="${url}" style="color: #2563eb; text-decoration: none; padding: 2px 6px;">${info.nativeName}</a>`;
  }).join(' • ');

  const localizedMainHtml = `
      <!-- Search Engine Crawlable Content (Crawled instantly by Googlebot before/without JS execution) -->
      <header style="padding: 18px 24px; text-align: center; border-bottom: 1px solid #e2e8f0; background: #ffffff;">
        <nav aria-label="Primary Navigation">
          <a href="${langInfo.pathPrefix || '/'}" style="font-weight: 800; font-size: 22px; color: #1e3a8a; text-decoration: none;">Age<span style="color: #2563eb;">Calculator</span></a>
          <div style="margin-top: 10px; display: flex; flex-wrap: wrap; justify-content: center; gap: 14px; font-size: 13px;">
            <a href="${langInfo.pathPrefix || ''}/age-in-years" style="color: #475569; text-decoration: none;">Age in Years</a>
            <a href="${langInfo.pathPrefix || ''}/age-in-months" style="color: #475569; text-decoration: none;">Age in Months</a>
            <a href="${langInfo.pathPrefix || ''}/age-in-weeks" style="color: #475569; text-decoration: none;">Age in Weeks</a>
            <a href="${langInfo.pathPrefix || ''}/age-in-days" style="color: #475569; text-decoration: none;">Age in Days</a>
            <a href="${langInfo.pathPrefix || ''}/birthday-calculator" style="color: #475569; text-decoration: none;">Birthday Calculator</a>
            <a href="${langInfo.pathPrefix || ''}/date-calculator" style="color: #475569; text-decoration: none;">Date Difference</a>
          </div>
        </nav>
      </header>

      <main style="max-width: 960px; margin: 30px auto; padding: 0 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; direction: ${isRtl ? 'rtl' : 'ltr'}; text-align: ${isRtl ? 'right' : 'left'};">
        
        <!-- Hero Section -->
        <header style="text-align: center; margin-bottom: 30px;">
          <div style="display: inline-block; background: #eff6ff; color: #2563eb; font-size: 12px; font-weight: 700; padding: 6px 14px; border-radius: 9999px; border: 1px solid #bfdbfe; margin-bottom: 14px;">
            ${heroBadge}
          </div>
          <h1 style="font-size: 32px; color: #0f172a; margin: 0 0 12px 0; font-weight: 800; line-height: 1.25;">
            ${heroTitle}
          </h1>
          <p style="font-size: 16px; color: #475569; margin: 0 auto 20px auto; max-width: 760px;">
            ${heroSubtitle}
          </p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;">
            ${pills.map(p => `<span style="background: #ffffff; color: #059669; border: 1px solid #a7f3d0; font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 6px;">✓ ${p}</span>`).join('')}
          </div>
        </header>

        <!-- Hero Age Calculator Card -->
        <section aria-label="${heroTitle}" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 28px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); margin-bottom: 40px;">
          <h2 style="font-size: 20px; color: #1e293b; margin: 0 0 20px 0; font-weight: 700; display: flex; align-items: center; gap: 8px;">
            <span>⚡</span> ${pageData.calculator?.title || heroTitle}
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 20px;">
            <div style="background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 8px;">${birthLabel}</label>
              <input type="date" value="1997-10-13" readonly style="width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; background: #ffffff;" />
            </div>
            <div style="background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0;">
              <label style="display: block; font-size: 13px; font-weight: 700; color: #334155; margin-bottom: 8px;">${compareLabel}</label>
              <input type="date" value="2026-09-05" readonly style="width: 100%; box-sizing: border-box; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; background: #ffffff;" />
            </div>
          </div>

          <div style="display: flex; gap: 12px; margin-bottom: 24px;">
            <button type="button" style="flex: 1; background: #2563eb; color: #ffffff; font-weight: 700; padding: 12px 24px; border: none; border-radius: 10px; font-size: 15px; cursor: pointer;">${calcBtn}</button>
            <button type="button" style="background: #f1f5f9; color: #475569; font-weight: 600; padding: 12px 20px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 14px;">${clearBtn}</button>
          </div>

          <!-- Breakdown Results Preview -->
          <div style="background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%); border: 1px solid #bfdbfe; border-radius: 14px; padding: 20px;">
            <div style="font-size: 13px; font-weight: 700; color: #1e40af; text-transform: uppercase; margin-bottom: 10px;">${pageData.results?.mainTitle || 'Exact Chronological Age'}</div>
            <div style="font-size: 28px; font-weight: 800; color: #1e3a8a; margin-bottom: 14px;">
              28 <span style="font-size: 16px; font-weight: 600;">${yearsUnit}</span>, 10 <span style="font-size: 16px; font-weight: 600;">${monthsUnit}</span>, 23 <span style="font-size: 16px; font-weight: 600;">${daysUnit}</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px; font-size: 12px;">
              <div style="background: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #dbeafe;"><strong>1,507</strong> ${pageData.results?.weeks || 'weeks'}</div>
              <div style="background: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #dbeafe;"><strong>10,554</strong> ${daysUnit}</div>
              <div style="background: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #dbeafe;"><strong>253,296</strong> ${hoursUnit}</div>
              <div style="background: #ffffff; padding: 10px; border-radius: 8px; border: 1px solid #dbeafe;"><strong>15,197,760</strong> ${minutesUnit}</div>
            </div>
          </div>
        </section>

        <!-- 3 Feature Pillars -->
        <section style="margin-bottom: 40px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            ${features.map(f => `
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 20px;">
                <h3 style="font-size: 16px; color: #0f172a; margin: 0 0 8px 0; font-weight: 700;">${f.title}</h3>
                <p style="font-size: 13px; color: #64748b; margin: 0; line-height: 1.5;">${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 4-Step How It Works -->
        ${pageData.howItWorks ? `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; margin-bottom: 40px;">
          <h2 style="font-size: 22px; color: #0f172a; margin: 0 0 6px 0; font-weight: 800;">${pageData.howItWorks.title}</h2>
          <p style="font-size: 14px; color: #64748b; margin: 0 0 24px 0;">${pageData.howItWorks.subtitle}</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            ${steps.map(s => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px;">
                <div style="width: 30px; height: 30px; border-radius: 9999px; background: #2563eb; color: #ffffff; font-weight: 800; display: flex; align-items: center; justify-content: center; font-size: 14px; margin-bottom: 10px;">${s.num}</div>
                <h3 style="font-size: 15px; color: #1e293b; margin: 0 0 6px 0; font-weight: 700;">${s.title}</h3>
                <p style="font-size: 12px; color: #64748b; margin: 0; line-height: 1.5;">${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <!-- Common Use Cases -->
        ${pageData.useCases ? `
        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 22px; color: #0f172a; margin: 0 0 6px 0; font-weight: 800;">${pageData.useCases.title}</h2>
          <p style="font-size: 14px; color: #64748b; margin: 0 0 20px 0;">${pageData.useCases.subtitle}</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px;">
            ${useCases.map(u => `
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h3 style="font-size: 15px; color: #1e293b; margin: 0 0 6px 0; font-weight: 700;">${u.title}</h3>
                <p style="font-size: 13px; color: #64748b; margin: 0; line-height: 1.5;">${u.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <!-- 15 Specialized Tools Grid -->
        ${pageData.toolsSection ? `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; margin-bottom: 40px;">
          <h2 style="font-size: 22px; color: #0f172a; margin: 0 0 6px 0; font-weight: 800;">${pageData.toolsSection.title}</h2>
          <p style="font-size: 14px; color: #64748b; margin: 0 0 20px 0;">${pageData.toolsSection.subtitle}</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
            ${tools.map(tool => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px;">
                <h3 style="font-size: 16px; margin: 0 0 6px 0; font-weight: 700;">
                  <a href="${langInfo.pathPrefix || ''}${tool.path}" style="color: #2563eb; text-decoration: none;">${tool.name}</a>
                </h3>
                <p style="font-size: 13px; color: #64748b; margin: 0 0 10px 0; line-height: 1.5;">${tool.desc}</p>
                <a href="${langInfo.pathPrefix || ''}${tool.path}" style="font-size: 13px; font-weight: 700; color: #2563eb; text-decoration: none;">${pageData.toolsSection.openBtn} →</a>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <!-- Localized FAQs -->
        ${faqs.length > 0 ? `
        <section style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 28px; margin-bottom: 40px;">
          <h2 style="font-size: 22px; color: #0f172a; margin: 0 0 20px 0; font-weight: 800;">${pageData.faqsSection?.title || 'Frequently Asked Questions'}</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${faqs.map(faq => `
              <div style="border-bottom: 1px solid #f1f5f9; padding-bottom: 14px; margin-bottom: 14px;">
                <h3 style="font-size: 15px; color: #1e293b; margin: 0 0 6px 0; font-weight: 700;">❓ ${faq.q}</h3>
                <p style="font-size: 14px; color: #475569; margin: 0; line-height: 1.6;">${faq.a}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ` : ''}

        <!-- Global Language Directory for Crawlers -->
        <footer style="border-top: 1px solid #e2e8f0; padding-top: 24px; margin-top: 40px; text-align: center;">
          <h2 style="font-size: 16px; color: #334155; margin-bottom: 12px;">Available in 33 Languages</h2>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; font-size: 13px; max-width: 800px; margin: 0 auto;">
            ${langLinksHtml}
          </div>
        </footer>

      </main>
  `;

  // Replace existing <header> and <main> inside <div id="root">
  html = html.replace(/<header[\s\S]*?<\/main>/i, localizedMainHtml.trim());

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
