import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/config';

export default function LanguageBanner() {
  const { showLanguageBanner, recommendedLang, dismissBanner, equivalentUrls } = useLanguage();

  if (!showLanguageBanner || !recommendedLang) return null;

  const recInfo = LANGUAGES[recommendedLang];
  if (!recInfo) return null;

  const targetUrl = equivalentUrls[recommendedLang] || recInfo.pathPrefix || '/';

  // Localized prompt map for common languages
  const localizedPrompts = {
    es: {
      text: '¿Prefieres usar la versión en Español?',
      btnText: 'Cambiar a Español'
    },
    'pt-br': {
      text: 'Você prefere usar a versão em Português?',
      btnText: 'Mudar para Português'
    },
    de: {
      text: 'Möchten Sie zur deutschen Version wechseln?',
      btnText: 'Auf Deutsch anzeigen'
    },
    fr: {
      text: 'Préférez-vous utiliser la version en Français ?',
      btnText: 'Passer au Français'
    },
    it: {
      text: 'Preferisci utilizzare la versione in Italiano?',
      btnText: 'Passa all’Italiano'
    }
  };

  const promptData = localizedPrompts[recommendedLang] || {
    text: `This page is also available in ${recInfo.nativeName}`,
    btnText: `Switch to ${recInfo.nativeName}`
  };

  return (
    <div className="bg-slate-900 text-white text-xs py-2 px-4 border-b border-slate-800 transition-all z-40 relative shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <Globe className="w-4 h-4 text-yellow-300 shrink-0" />
          <span className="truncate text-slate-200">
            <span className="mr-1">{recInfo.flag}</span>
            <span>{promptData.text}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to={targetUrl}
            hrefLang={recInfo.hreflang}
            onClick={dismissBanner}
            className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md text-xs transition-colors shadow-2xs"
          >
            <span>{promptData.btnText}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>

          <button
            type="button"
            onClick={dismissBanner}
            aria-label="Dismiss banner"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
