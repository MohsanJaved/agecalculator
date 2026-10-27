import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calculator, 
  ChevronDown, 
  Menu, 
  X, 
  Calendar, 
  Clock, 
  Sparkles, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  Baby,
  GraduationCap,
  Scale,
  Sun,
  Layers,
  HelpCircle,
  Info
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const { localizePath, t, currentLang } = useLanguage();

  // Close menus on route change
  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mega menu on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const standardCalculators = [
    { name: 'Age Calculator (Home)', path: '/', desc: 'Exact age in years, months & days' },
    { name: 'Age in Years', path: '/age-in-years', desc: 'Find completed & upcoming years' },
    { name: 'Age in Months', path: '/age-in-months', desc: 'Total months lived calculation' },
    { name: 'Age in Weeks', path: '/age-in-weeks', desc: 'Accurate weeks & leftover days' },
    { name: 'Age in Days', path: '/age-in-days', desc: 'Total days with leap years' },
    { name: 'Age on Specific Date', path: '/age-on-specific-date', desc: 'Calculate age on past or future dates' },
  ];

  const specializedCalculators = [
    { name: 'Birthday Calculator', path: '/birthday-calculator', desc: 'Countdown to your next birthday' },
    { name: 'Baby Age Calculator', path: '/baby-age-calculator', desc: 'Track developmental weeks & months' },
    { name: 'School Age Calculator', path: '/school-age-calculator', desc: 'Check eligibility by cutoff date' },
    { name: 'Legal Age Calculator', path: '/legal-age-calculator', desc: 'Date when reaching legal milestones' },
    { name: 'Leap Year Calculator', path: '/leap-year-calculator', desc: 'Check if any year is a leap year' },
    { name: 'Date Calculator', path: '/date-calculator', desc: 'Add/subtract days or date difference' },
  ];

  const timeCalculators = [
    { name: 'Age in Hours', path: '/age-in-hours', desc: 'Precise total elapsed hours' },
    { name: 'Age in Minutes', path: '/age-in-minutes', desc: 'Total minutes lived' },
    { name: 'Age in Seconds', path: '/age-in-seconds', desc: 'Real-time lifetime in seconds' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md text-slate-800 shadow-sm sticky top-0 z-50 border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          
          {/* LOGO / BRAND */}
          <Link to={localizePath('/')} className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-all">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight block leading-tight">
                Age<span className="text-blue-600">Calculator</span>
              </span>
              <span className="text-[10px] text-slate-500 block -mt-0.5 font-medium">
                {t?.brand?.tagline || 'Fast & Precise Age Tools'}
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION & MEGA MENU */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-600" ref={menuRef}>
            
            {/* Mega Menu Dropdown Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`px-3 py-2 rounded-lg transition-all flex items-center gap-1.5 ${
                  megaMenuOpen
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200/80'
                    : 'hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                <Layers className="w-4 h-4 text-blue-600" />
                <span>{t?.nav?.calculators || 'All Calculators'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {/* MEGA MENU CONTAINER */}
              {megaMenuOpen && (
                <div className="absolute left-0 top-full mt-2 w-[780px] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-6 grid grid-cols-12 gap-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  
                  {/* Column 1: Age by Unit */}
                  <div className="col-span-4 space-y-3">
                    <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-100 pb-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>{t?.nav?.timeUnits || 'Age Units'}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {standardCalculators.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={localizePath(item.path)}
                            className={`block p-2 rounded-lg transition-colors ${
                              location.pathname === item.path
                                ? 'bg-blue-50 text-blue-700 font-bold border-l-2 border-blue-600'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="text-xs font-bold">{item.name}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Specialized Calculators */}
                  <div className="col-span-4 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-100 pb-2">
                      <Sparkles className="w-4 h-4 text-indigo-600" />
                      <span>{t?.nav?.specialized || 'Specialized'}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {specializedCalculators.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={localizePath(item.path)}
                            className={`block p-2 rounded-lg transition-colors ${
                              location.pathname === item.path
                                ? 'bg-indigo-50 text-indigo-700 font-bold border-l-2 border-indigo-600'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="text-xs font-bold">{item.name}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Time Precision & Featured Callout */}
                  <div className="col-span-4 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-600 font-bold uppercase text-[11px] tracking-wider border-b border-slate-100 pb-2">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>Time Units</span>
                    </div>
                    <ul className="space-y-1.5">
                      {timeCalculators.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={localizePath(item.path)}
                            className={`block p-2 rounded-lg transition-colors ${
                              location.pathname === item.path
                                ? 'bg-emerald-50 text-emerald-700 font-bold border-l-2 border-emerald-600'
                                : 'hover:bg-slate-50 text-slate-700'
                            }`}
                          >
                            <div className="text-xs font-bold">{item.name}</div>
                            <div className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Featured Callout */}
                    <div className="bg-blue-50/70 border border-blue-100 rounded-xl p-3.5 space-y-2">
                      <div className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
                        <Calculator className="w-3.5 h-3.5 text-blue-600" />
                        <span>Date Difference Math</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-snug">
                        Need to calculate days between dates? Use our dedicated Date Calculator.
                      </p>
                      <Link
                        to={localizePath('/date-calculator')}
                        className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-1"
                      >
                        <span>Open Tool</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Direct Navigation Links */}
            <Link
              to={localizePath('/birthday-calculator')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/80"
            >
              Birthday
            </Link>

            <Link
              to={localizePath('/date-calculator')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/80"
            >
              Date Tools
            </Link>

            <Link
              to={localizePath('/how-it-works')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/80"
            >
              How It Works
            </Link>

            <Link
              to={localizePath('/about-us')}
              className="px-3 py-2 rounded-lg transition-colors hover:text-slate-900 hover:bg-slate-100/80"
            >
              About
            </Link>
          </nav>

          {/* RIGHT ACTION: LANGUAGE SWITCHER + CTA BUTTON & MOBILE TOGGLE */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Header Language Switcher Dropdown */}
            <LanguageSwitcher variant="header" />

            <Link
              to={localizePath('/')}
              className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span className="hidden sm:inline">Calculate Free</span>
              <span className="sm:hidden">Calculate</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002852] border-t border-blue-800 text-white max-h-[85vh] overflow-y-auto px-4 py-6 space-y-6 animate-in slide-in-from-top-4 duration-200">
          
          {/* Quick Language Selector in Mobile Drawer */}
          <div className="p-3 bg-[#084d8c] rounded-xl border border-blue-400/20 space-y-2">
            <span className="text-xs font-semibold text-yellow-300 block">Switch Language:</span>
            <LanguageSwitcher variant="footer" />
          </div>

          {/* Quick Action in Mobile Drawer */}
          <div className="p-3 bg-[#084d8c]/60 rounded-xl border border-blue-400/20 flex items-center justify-between">
            <span className="text-xs font-semibold text-blue-100">Need help or found a bug?</span>
            <Link
              to={localizePath('/contact-us')}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1.5 bg-[#4a8505] hover:bg-[#3e7004] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Category 1: Standard Age Tools */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Age Calculators</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              {standardCalculators.map((item) => (
                <Link
                  key={item.path}
                  to={localizePath(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-lg block transition-colors ${
                    location.pathname === item.path ? 'bg-[#084d8c] text-white font-bold' : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Category 2: Specialized Tools */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Calculators</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              {specializedCalculators.map((item) => (
                <Link
                  key={item.path}
                  to={localizePath(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-lg block transition-colors ${
                    location.pathname === item.path ? 'bg-[#084d8c] text-white font-bold' : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Category 3: Time Precision */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Time Units</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 text-xs">
              {timeCalculators.map((item) => (
                <Link
                  key={item.path}
                  to={localizePath(item.path)}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`p-2 rounded-lg block transition-colors ${
                    location.pathname === item.path ? 'bg-[#084d8c] text-white font-bold' : 'text-blue-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Category 4: Information & Utility Pages */}
          <div className="space-y-2 pt-2 border-t border-blue-900">
            <div className="text-xs font-bold text-blue-300 uppercase tracking-wider">
              Information & Pages
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <Link
                to={localizePath('/how-it-works')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              >
                How It Works
              </Link>
              <Link
                to={localizePath('/about-us')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              >
                About Us
              </Link>
              <Link
                to={localizePath('/privacy-policy')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              >
                Privacy Policy
              </Link>
              <Link
                to={localizePath('/terms')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              >
                Terms & Conditions
              </Link>
              <Link
                to={localizePath('/disclaimer')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-blue-200 hover:text-white hover:bg-white/10"
              >
                Disclaimer
              </Link>
              <Link
                to={localizePath('/contact-us')}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-yellow-300 font-bold hover:text-white hover:bg-white/10"
              >
                Contact Support
              </Link>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
