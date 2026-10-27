import { LANGUAGES, DEFAULT_LANGUAGE, SITE_URL } from './config.js';

/**
 * Master Slug and Route Mapping Table
 * Maps each canonical page ID to its localized URL slug across all Tier 1 languages.
 * English URLs remain at root with existing slugs unchanged to preserve search equity.
 */
export const PAGE_MAP = {
  home: {
    id: 'home',
    component: 'HomePage',
    slugs: {
      en: '/',
      es: '/es',
      'pt-br': '/pt-br',
      de: '/de',
      fr: '/fr',
      it: '/it'
    }
  },
  'age-in-years': {
    id: 'age-in-years',
    component: 'AgeInYearsPage',
    slugs: {
      en: '/age-in-years',
      es: '/es/edad-en-anos',
      'pt-br': '/pt-br/idade-em-anos',
      de: '/de/alter-in-jahren',
      fr: '/fr/age-en-annees',
      it: '/it/eta-in-anni'
    }
  },
  'age-in-months': {
    id: 'age-in-months',
    component: 'AgeInMonthsPage',
    slugs: {
      en: '/age-in-months',
      es: '/es/edad-en-meses',
      'pt-br': '/pt-br/idade-em-meses',
      de: '/de/alter-in-monaten',
      fr: '/fr/age-en-mois',
      it: '/it/eta-in-mesi'
    }
  },
  'age-in-weeks': {
    id: 'age-in-weeks',
    component: 'AgeInWeeksPage',
    slugs: {
      en: '/age-in-weeks',
      es: '/es/edad-en-semanas',
      'pt-br': '/pt-br/idade-em-semanas',
      de: '/de/alter-in-wochen',
      fr: '/fr/age-en-semaines',
      it: '/it/eta-in-settimane'
    }
  },
  'age-in-days': {
    id: 'age-in-days',
    component: 'AgeInDaysPage',
    slugs: {
      en: '/age-in-days',
      es: '/es/edad-en-dias',
      'pt-br': '/pt-br/idade-em-dias',
      de: '/de/alter-in-tagen',
      fr: '/fr/age-en-jours',
      it: '/it/eta-in-giorni'
    }
  },
  'age-in-hours': {
    id: 'age-in-hours',
    component: 'AgeInHoursPage',
    slugs: {
      en: '/age-in-hours',
      es: '/es/edad-en-horas',
      'pt-br': '/pt-br/idade-em-horas',
      de: '/de/alter-in-stunden',
      fr: '/fr/age-en-heures',
      it: '/it/eta-in-ore'
    }
  },
  'age-in-minutes': {
    id: 'age-in-minutes',
    component: 'AgeInMinutesPage',
    slugs: {
      en: '/age-in-minutes',
      es: '/es/edad-en-minutos',
      'pt-br': '/pt-br/idade-em-minutos',
      de: '/de/alter-in-minuten',
      fr: '/fr/age-en-minutes',
      it: '/it/eta-in-minuti'
    }
  },
  'age-in-seconds': {
    id: 'age-in-seconds',
    component: 'AgeInSecondsPage',
    slugs: {
      en: '/age-in-seconds',
      es: '/es/edad-en-segundos',
      'pt-br': '/pt-br/idade-em-segundos',
      de: '/de/alter-in-sekunden',
      fr: '/fr/age-en-secondes',
      it: '/it/eta-in-secondi'
    }
  },
  'age-on-specific-date': {
    id: 'age-on-specific-date',
    component: 'AgeOnSpecificDatePage',
    slugs: {
      en: '/age-on-specific-date',
      es: '/es/edad-en-fecha-especifica',
      'pt-br': '/pt-br/idade-em-data-especifica',
      de: '/de/alter-an-bestimmtem-datum',
      fr: '/fr/age-a-une-date-specifique',
      it: '/it/eta-a-una-data-specifica'
    }
  },
  'birthday-calculator': {
    id: 'birthday-calculator',
    component: 'BirthdayCalculatorPage',
    slugs: {
      en: '/birthday-calculator',
      es: '/es/calculadora-de-cumpleanos',
      'pt-br': '/pt-br/calculadora-de-aniversario',
      de: '/de/geburtstagsrechner',
      fr: '/fr/calculateur-anniversaire',
      it: '/it/calcolatore-compleanno'
    }
  },
  'baby-age-calculator': {
    id: 'baby-age-calculator',
    component: 'BabyAgeCalculatorPage',
    slugs: {
      en: '/baby-age-calculator',
      es: '/es/calculadora-edad-bebe',
      'pt-br': '/pt-br/calculadora-idade-bebe',
      de: '/de/baby-altersrechner',
      fr: '/fr/calculateur-age-bebe',
      it: '/it/calcolatore-eta-neonato'
    }
  },
  'school-age-calculator': {
    id: 'school-age-calculator',
    component: 'SchoolAgeCalculatorPage',
    slugs: {
      en: '/school-age-calculator',
      es: '/es/calculadora-edad-escolar',
      'pt-br': '/pt-br/calculadora-idade-escolar',
      de: '/de/schulaltersrechner',
      fr: '/fr/calculateur-age-scolaire',
      it: '/it/calcolatore-eta-scolare'
    }
  },
  'legal-age-calculator': {
    id: 'legal-age-calculator',
    component: 'LegalAgeCalculatorPage',
    slugs: {
      en: '/legal-age-calculator',
      es: '/es/calculadora-mayoria-de-edad',
      'pt-br': '/pt-br/calculadora-maioridade-civil',
      de: '/de/volljaehrigkeitsrechner',
      fr: '/fr/calculateur-majorite-legale',
      it: '/it/calcolatore-maggiore-eta'
    }
  },
  'leap-year-calculator': {
    id: 'leap-year-calculator',
    component: 'LeapYearCalculatorPage',
    slugs: {
      en: '/leap-year-calculator',
      es: '/es/calculadora-ano-bisiesto',
      'pt-br': '/pt-br/calculadora-ano-bissexto',
      de: '/de/schaltjahr-rechner',
      fr: '/fr/calculateur-annee-bissextile',
      it: '/it/calcolatore-anno-bisestile'
    }
  },
  'date-calculator': {
    id: 'date-calculator',
    component: 'DateCalculatorPage',
    slugs: {
      en: '/date-calculator',
      es: '/es/calculadora-de-fechas',
      'pt-br': '/pt-br/calculadora-de-datas',
      de: '/de/datumsrechner',
      fr: '/fr/calculateur-de-date',
      it: '/it/calcolatore-date'
    }
  },
  'how-it-works': {
    id: 'how-it-works',
    component: 'HowItWorksPage',
    slugs: {
      en: '/how-it-works',
      es: '/es/como-funciona',
      'pt-br': '/pt-br/como-funciona',
      de: '/de/wie-es-funktioniert',
      fr: '/fr/comment-ca-marche',
      it: '/it/come-funziona'
    }
  },
  'about-us': {
    id: 'about-us',
    component: 'AboutUsPage',
    slugs: {
      en: '/about-us',
      es: '/es/sobre-nosotros',
      'pt-br': '/pt-br/sobre-nos',
      de: '/de/ueber-uns',
      fr: '/fr/a-propos',
      it: '/it/chi-siamo'
    }
  },
  'contact-us': {
    id: 'contact-us',
    component: 'ContactUsPage',
    slugs: {
      en: '/contact-us',
      es: '/es/contacto',
      'pt-br': '/pt-br/contato',
      de: '/de/kontakt',
      fr: '/fr/contact',
      it: '/it/contatti'
    }
  },
  'privacy-policy': {
    id: 'privacy-policy',
    component: 'PrivacyPolicyPage',
    slugs: {
      en: '/privacy-policy',
      es: '/es/politica-de-privacidad',
      'pt-br': '/pt-br/politica-de-privacidade',
      de: '/de/datenschutz',
      fr: '/fr/politique-de-confidentialite',
      it: '/it/privacy-policy'
    }
  },
  'terms': {
    id: 'terms',
    component: 'TermsPage',
    slugs: {
      en: '/terms',
      es: '/es/terminos-y-condiciones',
      'pt-br': '/pt-br/termos-e-condicoes',
      de: '/de/nutzungsbedingungen',
      fr: '/fr/conditions-utilisation',
      it: '/it/termini-e-condizioni'
    }
  },
  'disclaimer': {
    id: 'disclaimer',
    component: 'DisclaimerPage',
    slugs: {
      en: '/disclaimer',
      es: '/es/descargo-de-responsabilidad',
      'pt-br': '/pt-br/aviso-legal',
      de: '/de/haftungsausschluss',
      fr: '/fr/avis-de-non-responsabilite',
      it: '/it/disclaimer'
    }
  }
};

/**
 * Normalizes a pathname: removes trailing slash (except root) and trims whitespace.
 */
export function normalizePath(pathname = '/') {
  let clean = pathname.trim().toLowerCase();
  if (clean.length > 1 && clean.endsWith('/')) {
    clean = clean.slice(0, -1);
  }
  return clean || '/';
}

/**
 * Resolves the language code from a given pathname.
 * Dynamically matches any language prefix in LANGUAGES (e.g. /ru, /ar, /ja, /ur, /es, etc.)
 */
export function resolveLanguage(pathname = '/') {
  const clean = normalizePath(pathname);
  if (clean === '/') return DEFAULT_LANGUAGE;

  const segments = clean.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSeg = segments[0].toLowerCase();
    if (LANGUAGES[firstSeg]) {
      return firstSeg;
    }
  }
  return DEFAULT_LANGUAGE;
}

/**
 * Resolves the canonical page ID from any localized pathname.
 */
export function resolvePageId(pathname = '/') {
  const clean = normalizePath(pathname);

  // Exact match search across all pages and languages
  for (const page of Object.values(PAGE_MAP)) {
    for (const slug of Object.values(page.slugs)) {
      if (clean === slug) {
        return page.id;
      }
    }
  }

  // Handle language prefixes with English slugs (fallback)
  const currentLang = resolveLanguage(clean);
  if (currentLang !== 'en') {
    const withoutPrefix = clean.replace(LANGUAGES[currentLang]?.pathPrefix || '', '') || '/';
    for (const page of Object.values(PAGE_MAP)) {
      if (page.slugs.en === withoutPrefix) {
        return page.id;
      }
    }
  }

  return 'home';
}

/**
 * Returns the equivalent URL path for a given page and target language.
 * Used by the Language Switcher to send the user to the exact equivalent page.
 */
export function getEquivalentPath(pathname = '/', targetLang = 'en') {
  const pageId = resolvePageId(pathname);
  const page = PAGE_MAP[pageId];
  if (page && page.slugs && page.slugs[targetLang]) {
    return page.slugs[targetLang];
  }
  const targetInfo = LANGUAGES[targetLang];
  if (!targetInfo) return '/';
  if (targetLang === 'en') {
    return page && page.slugs && page.slugs.en ? page.slugs.en : '/';
  }
  const enSlug = page && page.slugs && page.slugs.en ? page.slugs.en : '';
  return enSlug === '/' ? `${targetInfo.pathPrefix}` : `${targetInfo.pathPrefix}${enSlug}`;
}

/**
 * Returns all reciprocal alternate hreflang link objects for a given page.
 * Required by Google SEO guidelines: reciprocal links + x-default.
 */
export function getAllHreflangLinks(pathname = '/') {
  const pageId = resolvePageId(pathname);
  const page = PAGE_MAP[pageId] || PAGE_MAP.home;

  const links = [];

  // Reciprocal links for every supported language
  for (const [langKey, langInfo] of Object.entries(LANGUAGES)) {
    const slug = page.slugs[langKey] || langInfo.pathPrefix || '/';
    const cleanSlug = slug === '/' ? '/' : `${slug}`;
    const fullUrl = `${SITE_URL}${cleanSlug}`;

    links.push({
      hreflang: langInfo.hreflang,
      href: fullUrl
    });
  }

  // x-default always points to the English root version
  const enSlug = page.slugs.en || '/';
  const xDefaultUrl = `${SITE_URL}${enSlug}`;
  links.push({
    hreflang: 'x-default',
    href: xDefaultUrl
  });

  return links;
}
