import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  CheckCircle2, 
  Sparkles,
  Baby,
  Activity,
  CalendarCheck,
  ShieldCheck,
  Clock,
  ArrowRight,
  Copy,
  Check,
  Scale,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { getPageContent } from '../i18n/pageContent.js';

export default function HomePage() {
  const { t, currentLang, formatDate, langInfo, localizePath } = useLanguage();
  const content = getPageContent(currentLang);
  const isRtl = langInfo?.dir === 'rtl';

  // Calculator states
  const [birthDate, setBirthDate] = useState('1997-10-13');
  const [birthTime, setBirthTime] = useState('00:00');
  const [hasBirthTime, setHasBirthTime] = useState(false);
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  // Accurate Calculation Logic
  const calculationResult = useMemo(() => {
    if (!birthDate || !compareDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = compareDate.split('-').map(Number);

    const [bH, bMin] = hasBirthTime && birthTime ? birthTime.split(':').map(Number) : [0, 0];

    const birth = new Date(bY, bM - 1, bD, bH, bMin, 0);
    const target = new Date(cY, cM - 1, cD, 23, 59, 59);

    if (birth > target) {
      return { isInvalid: true, message: 'Birth date cannot be after the comparison date.' };
    }

    const diffMs = target - birth;
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;

    // Years, Months, Days logic
    let years = cY - bY;
    let months = (cM - 1) - (bM - 1);
    let days = cD - bD;

    if (days < 0) {
      const prevMonthLastDay = new Date(cY, cM - 1, 0).getDate();
      days += prevMonthLastDay;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const approxTotalMonths = Math.floor(totalDays / 30.4375);

    // Next Birthday calculation
    let nextBdayYear = cY;
    let nextBday = new Date(nextBdayYear, bM - 1, bD);
    const compareDateOnly = new Date(cY, cM - 1, cD);

    if (nextBday < compareDateOnly) {
      nextBdayYear += 1;
      nextBday = new Date(nextBdayYear, bM - 1, bD);
    }

    const nextBdayDiffMs = nextBday - compareDateOnly;
    const nextBdayDays = Math.ceil(nextBdayDiffMs / (1000 * 60 * 60 * 24));
    const nextBdayWeeks = Math.floor(nextBdayDays / 7);
    const localeStr = langInfo?.locale || 'en-US';
    const nextBdayWeekday = nextBday.toLocaleDateString(localeStr, { weekday: 'long' });
    const nextBdayFormatted = nextBday.toLocaleDateString(localeStr, { day: 'numeric', month: 'long', year: 'numeric' });
    const turningAge = nextBdayYear - bY;

    const birthShortFormatted = birth.toLocaleDateString(localeStr, { day: '2-digit', month: 'short', year: 'numeric' });
    const targetShortFormatted = target.toLocaleDateString(localeStr, { day: '2-digit', month: 'short', year: 'numeric' });

    const currentTotalYears = years + (months / 12) + (days / 365.25);
    const nextMilestoneAge = Math.ceil((years + 1) / 10) * 10;
    const prevMilestoneAge = Math.max(0, nextMilestoneAge - 10);
    const milestonePercent = Math.min(100, Math.max(0, Math.round(((currentTotalYears - prevMilestoneAge) / (nextMilestoneAge - prevMilestoneAge)) * 100)));

    return {
      isInvalid: false,
      years,
      months,
      days,
      totalMonths: approxTotalMonths,
      totalWeeks,
      remainingDaysInWeek,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
      nextBdayFormatted,
      nextBdayDays,
      nextBdayWeeks,
      nextBdayWeekday,
      turningAge,
      birthShortFormatted,
      targetShortFormatted,
      nextMilestoneAge,
      prevMilestoneAge,
      milestonePercent
    };
  }, [birthDate, birthTime, hasBirthTime, compareDate, langInfo]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadJohnExample = () => {
    setBirthDate('1997-10-13');
    setCompareDate('2026-09-05');
    setHasBirthTime(false);
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  const copyResults = () => {
    if (!calculationResult || calculationResult.isInvalid) return;
    const summary = `${calculationResult.years} ${t?.calculator?.years || 'years'}, ${calculationResult.months} ${t?.calculator?.months || 'months'}, ${calculationResult.days} ${t?.calculator?.days || 'days'} (Total: ${calculationResult.totalDays.toLocaleString()} days)`;
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const specializedTools = [
    { name: t?.calculator?.nextBirthdayTitle || 'Birthday Calculator', path: '/birthday-calculator', icon: Sparkles, desc: 'Next birthday countdown and weekday calculation' },
    { name: 'Baby Age Calculator', path: '/baby-age-calculator', icon: Baby, desc: 'Weeks, months and pediatric milestones' },
    { name: 'Date Calculator', path: '/date-calculator', icon: Calendar, desc: 'Add/subtract days and find differences' },
    { name: 'Age on Specific Date', path: '/age-on-specific-date', icon: Clock, desc: 'Past and future age lookup' },
    { name: 'Legal Age Calculator', path: '/legal-age-calculator', icon: Scale, desc: 'Driving, voting, and retirement milestones' },
    { name: 'School Age Calculator', path: '/school-age-calculator', icon: GraduationCap, desc: 'Cutoff dates and grade eligibility' },
  ];

  return (
    <div className="w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* HERO SECTION CONTAINER - Modern Soft Blue Gradient */}
      <section className="relative bg-gradient-to-b from-[#e3effd] via-[#edf5fe] to-[#ffffff] pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Curved Wave Arc Bottom Boundary */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 Q600,110 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-6 relative z-10">
          
          {/* Centered H1 Title & Subtitle */}
          <div className="text-center space-y-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-blue-800 border border-blue-200/80 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>{content.hero.badge}</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
              {content.hero.title}
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              {content.hero.subtitle}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] sm:text-xs text-slate-600">
              {content.hero.featurePills.map((pill, idx) => (
                <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200/80 font-medium text-slate-700 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  {pill}
                </span>
              ))}
            </div>

            {/* Quick Example Button */}
            <div className="pt-1 flex items-center justify-center gap-3">
              <button 
                type="button"
                onClick={loadJohnExample}
                className="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-blue-900 text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-2 hover:shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Example: 1997 → 2026</span>
              </button>
            </div>
          </div>

          {/* FLOATING 50/50 WHITE HERO CARD (The Working Calculator) */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-5 sm:p-7 relative z-20 transition-all max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* LEFT 50% COLUMN: Inputs + Controls */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4 lg:border-r lg:border-slate-100 lg:pr-6">
                
                {/* Title & Badge */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs mt-0.5">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
                        {t?.calculator?.resultsTitle || 'Confirm Your Age'}
                      </h2>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <ShieldCheck className="w-3 h-3" /> 100% Free & Private
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      Select birth & comparison dates
                    </p>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="space-y-3 pt-1">
                  {/* DOB */}
                  <div className="space-y-1">
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {t?.calculator?.dobLabel || 'DATE OF BIRTH'}
                    </label>
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full bg-slate-50/80 border border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {/* Date to Compare */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                        {t?.calculator?.compareDateLabel || 'DATE TO COMPARE'}
                      </label>
                      <button
                        type="button"
                        onClick={setTodayCompareDate}
                        className="text-[10px] text-blue-600 hover:text-blue-800 font-bold hover:underline"
                      >
                        {t?.calculator?.todayBtn || 'Set to Today'}
                      </button>
                    </div>
                    <input
                      type="date"
                      value={compareDate}
                      onChange={(e) => setCompareDate(e.target.value)}
                      className="w-full bg-slate-50/80 border border-slate-200 hover:border-blue-400 focus:border-blue-600 focus:bg-white rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  {/* Exact Birth Time Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="birth-time-toggle"
                      checked={hasBirthTime}
                      onChange={(e) => setHasBirthTime(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="birth-time-toggle" className="text-xs font-medium text-slate-500 cursor-pointer select-none">
                      {t?.calculator?.includeTime || 'Include exact birth time for precision'}
                    </label>
                  </div>

                  {hasBirthTime && (
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-2.5 flex items-center gap-3">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Birth Time:</label>
                      <input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        className="bg-white border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>

                {/* Calculate & Reset Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {}}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>{t?.calculator?.calculateBtn || 'Calculate Exact Age'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={loadJohnExample}
                    className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs rounded-xl transition-colors"
                  >
                    {t?.calculator?.resetBtn || 'Reset'}
                  </button>
                </div>

              </div>

              {/* RIGHT 50% COLUMN: Results Display */}
              {calculationResult && !calculationResult.isInvalid && (
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>{t?.calculator?.resultsTitle || 'EXACT AGE RESULT'}</span>
                    </div>
                    <button
                      type="button"
                      onClick={copyResults}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? (t?.calculator?.copiedText || 'Copied!') : (t?.calculator?.copyBtn || 'Copy Results')}</span>
                    </button>
                  </div>

                  {/* Main Age Number & 3 Mini Unit Boxes */}
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      {/* Large Age Display */}
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        <span className="text-2xl sm:text-3xl text-blue-600">{calculationResult.years}</span> <span className="text-xs sm:text-sm font-semibold text-slate-500">{t?.calculator?.years || 'years'},</span> <span className="text-2xl sm:text-3xl text-blue-600">{calculationResult.months}</span> <span className="text-xs sm:text-sm font-semibold text-slate-500">{t?.calculator?.months || 'months'},</span> <span className="text-2xl sm:text-3xl text-blue-600">{calculationResult.days}</span>
                        <div className="text-xs sm:text-sm font-semibold text-slate-500">{t?.calculator?.days || 'days'}</div>
                      </div>

                      {/* 3 Mini Unit Boxes */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.years}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">{t?.calculator?.years || 'YEARS'}</div>
                        </div>
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.months}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">{t?.calculator?.months || 'MONTHS'}</div>
                        </div>
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.days}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">{t?.calculator?.days || 'DAYS'}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 font-medium">
                      Calculated precision from {calculationResult.birthShortFormatted} to {calculationResult.targetShortFormatted}
                    </p>
                  </div>

                  {/* Next Birthday Light Card Box */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <CalendarCheck className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {t?.calculator?.nextBirthdayTitle || 'Next Birthday'}: {calculationResult.nextBdayFormatted}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          in <span className="text-blue-600 font-bold">{calculationResult.nextBdayDays} days</span> (turning {calculationResult.turningAge})
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs border border-blue-100 shrink-0">
                      {calculationResult.nextBdayWeekday}
                    </span>
                  </div>

                  {/* Milestone Progress Card Box */}
                  <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        {t?.calculator?.decadeProgress || 'Progress to next decade milestone'} ({calculationResult.nextMilestoneAge}th)
                      </span>
                      <span className="font-extrabold text-blue-600">
                        {calculationResult.milestonePercent}%
                      </span>
                    </div>

                    {/* Track */}
                    <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${calculationResult.milestonePercent}%` }}
                      ></div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                      <span>Age {calculationResult.prevMilestoneAge}</span>
                      <span>Age {calculationResult.nextMilestoneAge} (Goal)</span>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* ROW 2: The 6 Lifetime Metrics */}
            {calculationResult && !calculationResult.isInvalid && (
              <div className="pt-5 border-t border-slate-100 mt-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                  
                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.months || 'MONTHS'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">~{calculationResult.totalMonths}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.weeks || 'WEEKS'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">
                      {calculationResult.totalWeeks.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.days || 'DAYS'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalDays.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.hours || 'HOURS'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalHours.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.minutes || 'MINUTES'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalMinutes.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {t?.calculator?.seconds || 'SECONDS'}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalSeconds.toLocaleString()}</span>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3 FEATURE HIGHLIGHT COLUMNS BELOW THE BLUE HERO WAVE */}
      <div className="bg-[#f8fafc] py-12 border-b border-slate-200/80">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          {content.features3.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
                {idx === 0 ? <CheckCircle2 className="w-6 h-6" /> : idx === 1 ? <Activity className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LOWER CONTENT WRAPPER */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        {/* SECTION: HOW IT WORKS — 4 EASY STEPS */}
        {content.howItWorks && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {content.howItWorks.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1.5">
                {content.howItWorks.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {content.howItWorks.steps.map((st, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 space-y-3 relative overflow-hidden group hover:bg-blue-50/40 transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                    {st.num}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{st.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION: COMMON USE CASES */}
        {content.useCases && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {content.useCases.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1.5">
                {content.useCases.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.useCases.items.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION: 15 SPECIALIZED CALCULATOR TOOLS GRID */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {t?.nav?.allTools || 'Explore All 15 Precision Calculators'}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                Fast, mathematically accurate calculation tools available across all 33 languages.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {specializedTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <Link
                  key={idx}
                  to={localizePath(tool.path)}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-2xs">
                      <ToolIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center gap-1 text-xs font-bold text-blue-600">
                    <span>Open Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        {content.faqs && content.faqs.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <span>{t?.faq?.heading || 'Frequently Asked Questions'}</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {t?.faq?.subheading || 'Accurate answers to common age calculation questions'}
              </p>
            </div>

            <div className="space-y-2.5">
              {content.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-200/90 bg-[#f8fafc] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
