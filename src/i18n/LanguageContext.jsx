import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LANGUAGES, DEFAULT_LANGUAGE } from './config';
import { resolveLanguage, resolvePageId, getEquivalentPath, PAGE_MAP } from './routeMap';
import { TRANSLATIONS } from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { pathname } = useLocation();

  // Dynamically resolve active language from the URL route
  const currentLang = useMemo(() => resolveLanguage(pathname), [pathname]);
  const langInfo = useMemo(() => LANGUAGES[currentLang] || LANGUAGES[DEFAULT_LANGUAGE], [currentLang]);
  const t = useMemo(() => TRANSLATIONS[currentLang] || TRANSLATIONS[DEFAULT_LANGUAGE], [currentLang]);
  const pageId = useMemo(() => resolvePageId(pathname), [pathname]);

  // Map equivalent URLs for all languages for current page
  const equivalentUrls = useMemo(() => {
    const urls = {};
    for (const code of Object.keys(LANGUAGES)) {
      urls[code] = getEquivalentPath(pathname, code);
    }
    return urls;
  }, [pathname]);

  /**
   * Localizes an internal path to stay within current language
   * e.g., if on /es/, localizePath('/birthday-calculator') returns '/es/calculadora-de-cumpleanos'
   */
  const localizePath = (path) => {
    if (!path) return currentLang === 'en' ? '/' : LANGUAGES[currentLang].pathPrefix;
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
      return path;
    }

    // Resolve page id
    const targetPageId = resolvePageId(path);
    const targetPage = PAGE_MAP[targetPageId];
    if (targetPage && targetPage.slugs[currentLang]) {
      return targetPage.slugs[currentLang];
    }

    if (currentLang === 'en') return path;
    return `${LANGUAGES[currentLang].pathPrefix}${path.startsWith('/') ? path : `/${path}`}`;
  };

  /**
   * Locale-aware date formatter
   */
  const formatDate = (date, options = {}) => {
    if (!date) return '';
    const d = typeof date === 'string' ? new Date(date) : date;
    return d.toLocaleDateString(langInfo.locale, options);
  };

  // Browser language recommendation state (dismissible, NO auto-redirect)
  const [showLanguageBanner, setShowLanguageBanner] = useState(false);
  const [recommendedLang, setRecommendedLang] = useState(null);

  useEffect(() => {
    try {
      if (typeof window === 'undefined' || !window.navigator) return;
      const dismissed = localStorage.getItem('hide_lang_suggestion');
      if (dismissed === 'true') return;

      const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      let matchedLang = null;

      if (browserLang.startsWith('es')) matchedLang = 'es';
      else if (browserLang.startsWith('pt')) matchedLang = 'pt-br';
      else if (browserLang.startsWith('de')) matchedLang = 'de';
      else if (browserLang.startsWith('fr')) matchedLang = 'fr';
      else if (browserLang.startsWith('it')) matchedLang = 'it';

      // Only prompt if user is on a different language than their browser
      if (matchedLang && matchedLang !== currentLang) {
        setRecommendedLang(matchedLang);
        setShowLanguageBanner(true);
      } else {
        setShowLanguageBanner(false);
      }
    } catch {
      // safe fallback
    }
  }, [currentLang]);

  const dismissBanner = () => {
    setShowLanguageBanner(false);
    try {
      localStorage.setItem('hide_lang_suggestion', 'true');
    } catch {
      // ignore
    }
  };

  const value = {
    currentLang,
    langInfo,
    t,
    pageId,
    localizePath,
    equivalentUrls,
    formatDate,
    showLanguageBanner,
    recommendedLang,
    dismissBanner
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
