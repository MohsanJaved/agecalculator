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
import { getHomePageData } from '../i18n/homePageData.js';

// Icons mapping for specialized tools
const TOOL_ICONS = {
  '/birthday-calculator': Sparkles,
  '/baby-age-calculator': Baby,
  '/date-calculator': Calendar,
  '/age-on-specific-date': Clock,
  '/legal-age-calculator': Scale,
  '/school-age-calculator': GraduationCap
};

export default function HomePage() {
  const { currentLang, langInfo, localizePath } = useLanguage();
  const pageData = getHomePageData(currentLang);
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

    // Formatted strings with localized date formatting
    const localeStr = langInfo?.locale || 'en-US';
    const nextBdayFormatted = nextBday.toLocaleDateString(localeStr, { month: 'short', day: 'numeric', year: 'numeric' });
    const nextBdayWeekday = nextBday.toLocaleDateString(localeStr, { weekday: 'long' });
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
    const summary = `${calculationResult.years} ${pageData.results.years}, ${calculationResult.months} ${pageData.results.months}, ${calculationResult.days} ${pageData.results.days} (Total: ${calculationResult.totalDays.toLocaleString()} ${pageData.results.days})`;
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

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

        <div className="max-w-[1200px] mx-auto relative z-10 space-y-8">
          
          {/* Hero Header Area */}
          <div className="text-center space-y-3.5 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-2xs">
              <span>{pageData.hero.badge}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {pageData.hero.title}
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              {pageData.hero.subtitle}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-slate-600">
              {pageData.hero.pills.map((pill, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 font-medium text-slate-700 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* MAIN HERO CALCULATOR CARD */}
          <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-9 shadow-xl border border-slate-100/90 max-w-4xl mx-auto backdrop-blur-sm">
            
            {/* Form & Primary Result Split Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* LEFT COLUMN: Input Form */}
              <div className="lg:col-span-6 space-y-5">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    <span>{pageData.calculator.title}</span>
                  </h2>
                  <button 
                    type="button"
                    onClick={loadJohnExample}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
                  >
                    {pageData.calculator.sampleBtn}
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Field 1: Date of Birth */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-slate-700">
                      {pageData.calculator.dateOfBirth} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input 
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 font-semibold text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Field 2: Age at the Date of */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700">
                        {pageData.calculator.ageAtDate} <span className="text-rose-500">*</span>
                      </label>
                      <button 
                        type="button" 
                        onClick={setTodayCompareDate}
                        className="text-[11px] text-blue-600 font-bold hover:underline cursor-pointer"
                      >
                        {pageData.calculator.todayBtn}
                      </button>
                    </div>
                    <div className="relative">
                      <input 
                        type="date"
                        value={compareDate}
                        onChange={(e) => setCompareDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-slate-900 font-semibold text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Optional: Exact Birth Time Toggle */}
                  <div className="pt-1">
                    <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-600 select-none">
                      <input 
                        type="checkbox" 
                        checked={hasBirthTime}
                        onChange={(e) => setHasBirthTime(e.target.checked)}
                        className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <span>{pageData.calculator.exactTime}</span>
                    </label>

                    {hasBirthTime && (
                      <div className="mt-2.5 pl-6">
                        <input 
                          type="time"
                          value={birthTime}
                          onChange={(e) => setBirthTime(e.target.value)}
                          className="w-full sm:w-48 px-3.5 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50/50"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex gap-3">
                  <button 
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-5 h-5" />
                    <span>{pageData.calculator.calculateBtn}</span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => { setBirthDate(''); setCompareDate(''); }}
                    className="py-3.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.99] text-slate-700 font-bold text-sm transition-all cursor-pointer"
                  >
                    {pageData.calculator.clearBtn}
                  </button>
                </div>
              </div>

              {/* RIGHT COLUMN: Output Dashboard */}
              {calculationResult && !calculationResult.isInvalid && (
                <div className="lg:col-span-6 space-y-4">
                  
                  {/* Primary Age Result Card */}
                  <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-50/90 via-slate-50/80 to-blue-50/40 border border-blue-100/90 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                        {pageData.results.mainTitle}
                      </span>
                      <button 
                        type="button"
                        onClick={copyResults}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-100/70 hover:bg-blue-200/80 text-blue-700 text-xs font-bold transition-colors cursor-pointer"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? pageData.calculator.copiedBtn : pageData.calculator.copyBtn}</span>
                      </button>
                    </div>

                    {/* Main Year-Month-Day Metric */}
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      <span className="text-blue-600">{calculationResult.years}</span> {pageData.results.years},{' '}
                      <span className="text-blue-600">{calculationResult.months}</span> {pageData.results.months},{' '}
                      <span className="text-blue-600">{calculationResult.days}</span> {pageData.results.days}
                    </div>

                    {/* Secondary detailed duration */}
                    <div className="mt-2 text-xs text-slate-500 font-medium">
                      or <strong className="text-slate-700">{calculationResult.totalMonths}</strong> {pageData.results.months} {calculationResult.days} {pageData.results.days} |{' '}
                      <strong className="text-slate-700">{calculationResult.totalWeeks}</strong> {pageData.results.weeks} {calculationResult.remainingDaysInWeek} {pageData.results.days}
                    </div>
                  </div>

                  {/* Next Birthday Card */}
                  <div className="bg-slate-50/80 border border-slate-100 rounded-2xl p-3.5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                        <CalendarCheck className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">
                          {pageData.results.nextBirthdayTitle}: {calculationResult.nextBdayFormatted}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          <span className="text-blue-600 font-bold">{pageData.results.inDaysText(calculationResult.nextBdayDays)}</span> {pageData.results.turningText(calculationResult.turningAge)}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs border border-blue-100 shrink-0">
                      {calculationResult.nextBdayWeekday}
                    </span>
                  </div>

                  {/* Milestone Progress Card */}
                  <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        {pageData.results.milestoneTitle(calculationResult.nextMilestoneAge)}
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
                      <span>{pageData.results.ageLabel(calculationResult.prevMilestoneAge)}</span>
                      <span>{pageData.results.goalLabel(calculationResult.nextMilestoneAge)}</span>
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
                      {pageData.results.months}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">~{calculationResult.totalMonths}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {pageData.results.weeks}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">
                      {calculationResult.totalWeeks.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {pageData.results.days}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalDays.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {pageData.results.hours}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalHours.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {pageData.results.minutes}
                    </span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalMinutes.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/50">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                      {pageData.results.seconds}
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
          {pageData.features3.map((feat, idx) => (
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
        {pageData.howItWorks && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {pageData.howItWorks.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1.5">
                {pageData.howItWorks.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pageData.howItWorks.steps.map((st, idx) => (
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
        {pageData.useCases && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {pageData.useCases.title}
              </h2>
              <p className="text-slate-600 text-sm mt-1.5">
                {pageData.useCases.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pageData.useCases.items.map((item, idx) => (
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
        {pageData.toolsSection && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {pageData.toolsSection.title}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {pageData.toolsSection.subtitle}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pageData.toolsSection.tools.map((tool, idx) => {
                const ToolIcon = TOOL_ICONS[tool.path] || Calculator;
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
                      <span>{pageData.toolsSection.openBtn}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRtl ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
        {pageData.faqsSection && pageData.faqsSection.faqs && pageData.faqsSection.faqs.length > 0 && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-blue-600" />
                <span>{pageData.faqsSection.title}</span>
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {pageData.faqsSection.subtitle}
              </p>
            </div>

            <div className="space-y-2.5">
              {pageData.faqsSection.faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border border-slate-200/90 bg-[#f8fafc] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                    dir={isRtl ? 'rtl' : 'ltr'}
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
