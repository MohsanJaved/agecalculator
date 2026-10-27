import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Mail, 
  ChevronRight, 
  ArrowUp, 
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const { localizePath, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ageCalculators = [
    { name: 'Age Calculator (Home)', path: '/' },
    { name: 'Age in Years', path: '/age-in-years' },
    { name: 'Age in Months', path: '/age-in-months' },
    { name: 'Age in Weeks', path: '/age-in-weeks' },
    { name: 'Age in Days', path: '/age-in-days' },
    { name: 'Age on Specific Date', path: '/age-on-specific-date' },
  ];

  const specializedCalculators = [
    { name: 'Birthday Calculator', path: '/birthday-calculator' },
    { name: 'Baby Age Calculator', path: '/baby-age-calculator' },
    { name: 'School Age Calculator', path: '/school-age-calculator' },
    { name: 'Legal Age Calculator', path: '/legal-age-calculator' },
    { name: 'Leap Year Calculator', path: '/leap-year-calculator' },
    { name: 'Date Calculator', path: '/date-calculator' },
  ];

  const timeCalculators = [
    { name: 'Age in Hours', path: '/age-in-hours' },
    { name: 'Age in Minutes', path: '/age-in-minutes' },
    { name: 'Age in Seconds', path: '/age-in-seconds' },
  ];

  const utilityLinks = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Disclaimer', path: '/disclaimer' },
  ];

  return (
    <footer className="border-t-2 border-[#002244] bg-[#003366] text-white pt-14 pb-8 mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP BRAND & INFO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-[#084d8c]/70">
          <div className="lg:col-span-4 space-y-4">
            <Link to={localizePath('/')} className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-[#084d8c] flex items-center justify-center text-white border border-blue-400/30 shadow-inner group-hover:bg-[#0b5da8] transition-colors">
                <Calculator className="w-5 h-5 text-yellow-300" />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight block">{t?.brand?.name || 'Age Calculator'}</span>
                <span className="text-[11px] text-blue-200 block -mt-0.5">{t?.brand?.tagline || 'Exact Age, Date & Time Tools'}</span>
              </div>
            </Link>
            <p className="text-blue-100/80 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t?.footer?.about || 'Fast, accurate, and completely free online calculation tools for age, birthdays, date differences, leap years, and precise time conversions.'}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#084d8c]/50 border border-blue-400/20 text-xs text-blue-100">
              <Mail className="w-3.5 h-3.5 text-yellow-300 shrink-0" />
              <span>{t?.footer?.support || 'Support'}: </span>
              <a href="mailto:contact@agecalculator.today" className="text-white font-mono hover:text-yellow-300 transition-colors">
                contact@agecalculator.today
              </a>
            </div>
          </div>

          {/* QUICK SUMMARY STATS / BADGES */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#084d8c]/40 border border-blue-400/20 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>{t?.footer?.freeToolsBadge || '15 Free Tools'}</span>
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                {t?.footer?.freeToolsDesc || 'Covering years, months, weeks, days, hours, minutes, and seconds.'}
              </p>
            </div>

            <div className="bg-[#084d8c]/40 border border-blue-400/20 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{t?.footer?.clientSideBadge || '100% Client-Side'}</span>
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                {t?.footer?.clientSideDesc || 'Your birth dates stay private in your browser with zero tracking.'}
              </p>
            </div>

            <div className="bg-[#084d8c]/40 border border-blue-400/20 rounded-xl p-4 space-y-1">
              <div className="flex items-center gap-2 text-yellow-300 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>UTC Time Engine</span>
              </div>
              <p className="text-xs text-blue-100/90 leading-relaxed">
                Leap year & calendar exact calculation formulas.
              </p>
            </div>
          </div>
        </div>

        {/* 4-COLUMN CALCULATOR DIRECTORY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 text-xs">
          {/* Col 1: Standard Age Calculators */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b border-blue-400/20 pb-2">
              <Calendar className="w-3.5 h-3.5 text-yellow-300" />
              Age Calculators
            </h3>
            <ul className="space-y-2">
              {ageCalculators.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={localizePath(item.path)} 
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Specialized Calculators */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b border-blue-400/20 pb-2">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              Specialized Calculators
            </h3>
            <ul className="space-y-2">
              {specializedCalculators.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={localizePath(item.path)} 
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Exact Time Conversion Tools */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b border-blue-400/20 pb-2">
              <Clock className="w-3.5 h-3.5 text-yellow-300" />
              Time Unit Tools
            </h3>
            <ul className="space-y-2">
              {timeCalculators.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={localizePath(item.path)} 
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <div className="p-3 bg-[#084d8c]/30 border border-blue-400/20 rounded-lg text-[11px] text-blue-200 leading-normal">
                Looking for date math? Try our <Link to={localizePath('/date-calculator')} className="text-yellow-300 font-semibold underline hover:text-white">Date Calculator</Link> to add or subtract days.
              </div>
            </div>
          </div>

          {/* Col 4: Utilities & Legal */}
          <div className="space-y-3">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-b border-blue-400/20 pb-2">
              <FileText className="w-3.5 h-3.5 text-yellow-300" />
              Pages & Information
            </h3>
            <ul className="space-y-2">
              {utilityLinks.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={localizePath(item.path)} 
                    className="text-blue-200 hover:text-white hover:translate-x-1 transition-all flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400 shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MULTILINGUAL REGIONAL SWITCHER BAR */}
        <div className="py-4 border-t border-b border-[#084d8c]/70 my-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <LanguageSwitcher variant="footer" />
        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300">
          <div className="text-center sm:text-left space-y-1">
            <div className="font-semibold text-white text-xs sm:text-sm">
              Age Calculator Today – Find Exact Age in Years, Months & Days
            </div>
            <div className="text-[11px] text-blue-300/80">
              © {new Date().getFullYear()} {t?.brand?.name || 'Age Calculator'}. {t?.footer?.rights || 'All rights reserved.'} Free for personal & educational use.
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-[#084d8c] hover:bg-[#0b5da8] text-white text-xs font-semibold flex items-center gap-1.5 border border-blue-400/30 shadow transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
