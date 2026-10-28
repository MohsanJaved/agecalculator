import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Check, ChevronDown, Search, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/config';

export default function LanguageSwitcher({ variant = 'header' }) {
  const { currentLang, equivalentUrls } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLangObj = LANGUAGES[currentLang] || LANGUAGES.en;

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return Object.entries(LANGUAGES).filter(([code, info]) => {
      if (!q) return true;
      return (
        info.name.toLowerCase().includes(q) ||
        info.nativeName.toLowerCase().includes(q) ||
        code.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Render Footer Layout: grouped by Tier 1, Tier 2, Tier 3 for clean accessibility & indexing
  if (variant === 'footer') {
    const tier1 = Object.entries(LANGUAGES).filter(([_, info]) => info.tier === 1);
    const tier2 = Object.entries(LANGUAGES).filter(([_, info]) => info.tier === 2);
    const tier3 = Object.entries(LANGUAGES).filter(([_, info]) => info.tier === 3);

    return (
      <div className="w-full space-y-4 text-xs">
        <div className="flex items-center gap-2 border-b border-blue-400/20 pb-2">
          <Globe className="w-4 h-4 text-yellow-300" />
          <span className="font-bold uppercase tracking-wider text-white text-xs">
            Global Languages (33 Regions Supported)
          </span>
        </div>

        {/* Tier 1: High Traffic */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-semibold text-yellow-300/90 uppercase tracking-wide">
            Tier 1: Primary Languages
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {tier1.map(([code, info]) => {
              const isSelected = code === currentLang;
              const targetUrl = equivalentUrls[code] || info.pathPrefix || '/';
              return (
                <Link
                  key={code}
                  to={targetUrl}
                  hrefLang={info.hreflang}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-colors ${
                    isSelected
                      ? 'bg-yellow-400 text-slate-900 font-bold shadow-xs'
                      : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{info.flag}</span>
                  <span>{info.nativeName}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tier 2: Strong Global Markets */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-semibold text-blue-200/90 uppercase tracking-wide">
            Tier 2: Global Markets
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {tier2.map(([code, info]) => {
              const isSelected = code === currentLang;
              const targetUrl = equivalentUrls[code] || info.pathPrefix || '/';
              return (
                <Link
                  key={code}
                  to={targetUrl}
                  hrefLang={info.hreflang}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-colors ${
                    isSelected
                      ? 'bg-yellow-400 text-slate-900 font-bold'
                      : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{info.flag}</span>
                  <span>{info.nativeName}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tier 3: Regional & Emerging Markets */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-semibold text-blue-300/80 uppercase tracking-wide">
            Tier 3: Regional & Localized
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {tier3.map(([code, info]) => {
              const isSelected = code === currentLang;
              const targetUrl = equivalentUrls[code] || info.pathPrefix || '/';
              return (
                <Link
                  key={code}
                  to={targetUrl}
                  hrefLang={info.hreflang}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] transition-colors ${
                    isSelected
                      ? 'bg-yellow-400 text-slate-900 font-bold'
                      : 'text-blue-300/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>{info.flag}</span>
                  <span>{info.nativeName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Header Dropdown Switcher
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-xs transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        <span className="text-sm">{currentLangObj.flag}</span>
        <span className="hidden sm:inline">{currentLangObj.nativeName}</span>
        <span className="sm:hidden uppercase">{currentLangObj.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-72 sm:w-80 rounded-2xl bg-white shadow-2xl border border-slate-200/90 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
          {/* Header Title with Counter */}
          <div className="px-3.5 py-1.5 border-b border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-blue-600" />
              <span>Select Language (33)</span>
            </span>
            <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              {currentLangObj.name}
            </span>
          </div>

          {/* Search Box */}
          <div className="p-2 border-b border-slate-100">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search language / search term..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-7 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 pt-2 text-[10px] font-semibold">
              <span className="px-2 py-0.5 rounded-md bg-blue-600 text-white">
                All (33)
              </span>
            </div>
          </div>

          {/* Language Options List */}
          <div className="max-h-64 overflow-y-auto py-1">
            {filteredLanguages.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400">
                No languages found matching "{searchQuery}"
              </div>
            ) : (
              filteredLanguages.map(([code, info]) => {
                const isSelected = code === currentLang;
                const targetUrl = equivalentUrls[code] || info.pathPrefix || '/';

                return (
                  <Link
                    key={code}
                    to={targetUrl}
                    hrefLang={info.hreflang}
                    onClick={() => {
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`flex items-center justify-between px-3.5 py-1.5 text-xs transition-colors ${
                      isSelected
                        ? 'bg-blue-50/90 text-blue-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{info.flag}</span>
                      <span className="font-medium text-slate-900">{info.nativeName}</span>
                      <span className="text-[10px] text-slate-400">({info.name})</span>
                      {info.dir === 'rtl' && (
                        <span className="text-[9px] bg-amber-50 text-amber-700 px-1 py-0.2 rounded font-mono">
                          RTL
                        </span>
                      )}
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-blue-600 shrink-0" />}
                  </Link>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
