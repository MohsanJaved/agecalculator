import React, { useState, useMemo } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function HomePage() {
  const { t, currentLang, formatDate } = useLanguage();

  // Calculator states
  const [birthDate, setBirthDate] = useState('1997-10-13');
  const [birthTime, setBirthTime] = useState('00:00');
  const [hasBirthTime, setHasBirthTime] = useState(false);
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Accurate Calculation Logic according to the document
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
    const localeStr = t?.locale || 'en-US';
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
  }, [birthDate, birthTime, hasBirthTime, compareDate]);

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

  return (
    <div className="w-full">
      {/* HERO SECTION CONTAINER - Soft Blue Gradient with World Map & Avatar Nodes Overlay */}
      <section className="relative bg-gradient-to-b from-[#e3effd] via-[#edf5fe] to-[#ffffff] pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Hero Background Image from public folder (Gemini Generated Image) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img 
            src="/Gemini_Generated_Image_psasqcpsasqcpsas.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle soft white gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/70"></div>
        </div>

        {/* Curved Wave Arc Bottom Boundary (Exact Arc Curve from Screenshot!) */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-0 pointer-events-none">
          <svg className="relative block w-full h-12 sm:h-20 text-[#f8fafc]" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,0 Q600,110 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-[1200px] mx-auto space-y-6 relative z-10">
          
          {/* Centered H1 Title & Subtitle */}
          <div className="text-center space-y-3">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/90 text-calcNavy border border-blue-200/80 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>#1 Precision Age Calculator</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
              {t?.pages?.home?.h1 || 'Age Calculator – Find Out Exactly How Old You Are'}
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
              {t?.pages?.home?.subtitle || 'Calculate your exact age in years, months, days, weeks, hours, minutes & seconds from your date of birth instantly with our accurate, privacy-focused tool.'}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-[11px] sm:text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200/80 font-medium text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                100% Free & Private
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200/80 font-medium text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                Instant Millisecond Precision
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/85 border border-slate-200/80 font-medium text-slate-700 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                Leap Year Calibrated
              </span>
            </div>

            {/* Quick Example Button */}
            <div className="pt-1 flex items-center justify-center gap-3">
              <button 
                onClick={loadJohnExample}
                className="px-4 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-2 hover:shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Load John's Example (1997 → 2026)
              </button>
            </div>
          </div>

          {/* FLOATING 50/50 WHITE HERO CARD (Width compact max-w-[1000px] centered) */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-200/90 p-5 sm:p-7 relative z-20 transition-all max-w-[1000px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* LEFT 50% COLUMN (lg:col-span-6): Header + Inputs + Calculate Button */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-4 lg:border-r lg:border-slate-100 lg:pr-6">
                
                {/* Title & Badge */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs mt-0.5">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">Confirm Your Age</h2>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                        <ShieldCheck className="w-3 h-3" /> 100% Free & Private
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Select birth & comparison dates</p>
                  </div>
                </div>

                {/* Form Inputs - 1 Column Stacked */}
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
                      Exact Birth Time <span className="text-slate-400">(Optional)</span>
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

                {/* Bottom Full-Width Calculate Age Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    className="w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-sm rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-white" />
                    <span>Calculate Age</span>
                  </button>
                </div>

              </div>

              {/* RIGHT 50% COLUMN (lg:col-span-6): Exact Age Result + Next Birthday + Milestone Progress */}
              {calculationResult && !calculationResult.isInvalid && (
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span>EXACT AGE RESULT</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-medium">Instant Calculation</span>
                  </div>

                  {/* Main Age Number & 3 Mini Unit Boxes */}
                  <div className="space-y-1">
                    <div className="flex items-start justify-between gap-4">
                      {/* Large Age Display */}
                      <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                        <span className="text-2xl sm:text-3xl">{calculationResult.years}</span> <span className="text-xs sm:text-sm font-semibold text-slate-500">years,</span> <span className="text-2xl sm:text-3xl">{calculationResult.months}</span> <span className="text-xs sm:text-sm font-semibold text-slate-500">months,</span> <span className="text-2xl sm:text-3xl">{calculationResult.days}</span>
                        <div className="text-xs sm:text-sm font-semibold text-slate-500">days</div>
                      </div>

                      {/* 3 Mini Unit Boxes */}
                      <div className="flex items-center gap-1.5 shrink-0 pt-1">
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.years}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">YEARS</div>
                        </div>
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.months}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">MONTHS</div>
                        </div>
                        <div className="bg-blue-50/60 border border-blue-100 rounded-xl px-2.5 py-1.5 text-center min-w-[46px]">
                          <div className="text-sm font-extrabold text-blue-600">{calculationResult.days}</div>
                          <div className="text-[9px] font-bold text-blue-500 uppercase">DAYS</div>
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
                          Next Birthday: {calculationResult.nextBdayFormatted}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                          in <span className="text-blue-600 font-bold">{calculationResult.nextBdayDays} days</span> - turning {calculationResult.turningAge}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs border border-blue-100 shrink-0">
                      Falls on a {calculationResult.nextBdayWeekday}
                    </span>
                  </div>

                  {/* Milestone Progress Card Box */}
                  <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-3.5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-700">
                        Milestone: {calculationResult.nextMilestoneAge}th Birthday Progress
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

            {/* ROW 2: The 6 Lifetime Metrics Text Section (Second Row below inputs & exact age card) */}
            {calculationResult && !calculationResult.isInvalid && (
              <div className="pt-5 border-t border-slate-100 mt-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                  
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL MONTHS</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">~{calculationResult.totalMonths}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL WEEKS</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">
                      {calculationResult.totalWeeks.toLocaleString()} <span className="text-xs font-semibold text-slate-500">w, {calculationResult.remainingDaysInWeek} d</span>
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL DAYS</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalDays.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL HOURS</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalHours.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL MINUTES</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalMinutes.toLocaleString()}</span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">TOTAL SECONDS</span>
                    <span className="text-base sm:text-lg font-extrabold text-slate-900">{calculationResult.totalSeconds.toLocaleString()}</span>
                  </div>

                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 3 FEATURE HIGHLIGHT COLUMNS BELOW THE BLUE HERO WAVE (Matching Screenshot!) */}
      <div className="bg-[#f8fafc] py-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Compliance Made Simple</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Calculates exact age accounting for leap years and calendar month length variations.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
              <Activity className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Real-Time Results</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instant verification and lifetime metrics breakdown with zero page reloads.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-slate-900">Secure & Privacy-Focused</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Data is computed locally in your browser and compliant with strict privacy standards.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* LOWER CONTENT WRAPPER */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

      {/* SECTION: HOW IT WORKS — A QUICK EXAMPLE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            How It Works — A Quick Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Let's say John was born on 13 October 1997, and he wants to know his exact age today, 5 September 2026.
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's what he does:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter your date of birth</strong>—John selects Day: 13, Month: October, Year: 1997, either by typing the numbers or picking the date from the calendar.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-calcNavy-dark">Enter the current date</strong>—John selects (or the calculator auto-fills) today's date: 5 September 2026. He can also pick a past or future date instead if he wants his age on a different day.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-calcNavy-dark">Click Calculate Age</strong>—The tool instantly compares the two dates.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">See the results:</strong>
              </div>
            </div>
          </div>
        </div>

        {/* John's Result Table */}
        <div className="overflow-hidden border border-slate-300 rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-calcNavy-subtle text-calcNavy-dark font-bold text-xs uppercase tracking-wider">
                <th className="py-2.5 px-4 sm:px-6">Unit</th>
                <th className="py-2.5 px-4 sm:px-6">John's Age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-semibold text-calcNavy-dark">Years, Months & Days</td>
                <td className="py-2.5 px-4 sm:px-6 text-calcGreen font-bold">28 years, 10 months, 23 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Months</td>
                <td className="py-2.5 px-4 sm:px-6">~346 months</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Weeks</td>
                <td className="py-2.5 px-4 sm:px-6">1,507 weeks, 5 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Days</td>
                <td className="py-2.5 px-4 sm:px-6">10,554 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Hours</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">253,296 hours</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Minutes</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">15,197,760 minutes</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Seconds</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">911,865,600 seconds</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-semibold text-calcNavy-dark">Next Birthday</td>
                <td className="py-2.5 px-4 sm:px-6 text-calcBlue font-bold">13 October 2026 (in 38 days, turning 29)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic">
          That's it—no manual counting, no confusing math with leap years or uneven month lengths. Just type in a birth date and get a precise answer in seconds.
        </p>
      </section>

      {/* SECTION: WHAT IS AN AGE CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            What Is an Age Calculator?
          </h2>
          <p className="text-slate-700 text-sm mt-2 leading-relaxed">
            An age calculator is a simple online tool that works out the exact amount of time between your date of birth and any chosen date. Instead of counting years, months, and days by hand—and getting tripped up by leap years or months with different lengths—you enter your birth date once and get a precise breakdown instantly.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800">You can use it to answer questions like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How old am I exactly?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How many days old am I?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How old will I be on a future date?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"When is my next birthday, and how many days away is it?"</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW TO CALCULATE YOUR AGE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            How to Calculate Your Age
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 1
            </div>
            <h3 className="font-bold text-calcNavy-dark">Enter Your Date of Birth</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select your day, month, and year of birth, or pick it from the calendar picker.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 2
            </div>
            <h3 className="font-bold text-calcNavy-dark">Choose the Date to Compare</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Use today's date by default, or select a past or future date to find out how old you were or will be then.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 3
            </div>
            <h3 className="font-bold text-calcNavy-dark">Click Calculate Age</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Click Calculate Age to see your exact age in years, months, and days.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 4
            </div>
            <h3 className="font-bold text-calcNavy-dark">Explore the Extra Details</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Scroll down to see your age converted into total weeks, days, hours, minutes, and seconds—plus the date of your next birthday.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT CAN YOU CALCULATE WITH THIS TOOL? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            What Can You Calculate With This Tool?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Exact Age</div>
            <p className="text-slate-600 text-xs">your age in years, months, and days based on your date of birth</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Years</div>
            <p className="text-slate-600 text-xs">your current completed age</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Months</div>
            <p className="text-slate-600 text-xs">approximately how many months you've been alive</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Weeks</div>
            <p className="text-slate-600 text-xs">the number of weeks since you were born</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Days</div>
            <p className="text-slate-600 text-xs">the total number of days since your birth date</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Hours, Minutes & Seconds</div>
            <p className="text-slate-600 text-xs">for the curious, your age is broken down into smaller units of time.</p>
          </div>
        </div>
      </section>

      {/* SECTION: THE FORMULA BEHIND THE CALCULATION */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            The Formula Behind the Calculation
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800">Suppose:</h3>
            <div className="text-xs text-slate-700 font-mono bg-[#f8fafc] p-3 rounded-lg border border-slate-200 inline-block">
              Born: 1 January 2000<br/>
              Today: 6 September 2026
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-800">The calculator does this:</p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">1. Count years:</span> 2000 → 2026 = 26 years
              </div>
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">2. Count remaining months:</span> January → September = 8 months
              </div>
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">3. Count remaining days:</span> 1 September → 6 September = 5 days
              </div>
            </div>
            <p className="text-sm font-bold text-calcGreen pt-1">
              So the age is: 26 years, 8 months, 5 days
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 space-y-4">
            <h3 className="text-base font-bold text-calcNavy-dark">How minutes and seconds work</h3>
            <p className="text-slate-700 text-xs sm:text-sm">
              The calculator first finds the total difference in time.
            </p>
            
            <div className="space-y-1 text-xs text-slate-800 font-mono bg-[#f8fafc] p-3.5 rounded-lg border border-slate-200">
              <div className="text-slate-600 font-sans font-bold text-xs mb-1">The basic conversions are:</div>
              <div>* 1 minute = 60 seconds</div>
              <div>* 1 hour = 60 minutes = 3,600 seconds</div>
              <div>* 1 day = 24 hours = 1,440 minutes = 86,400 seconds</div>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 space-y-2">
              <p>So if someone was born at 10:00 AM and the current time is 11:00 AM:</p>
              <p className="font-mono text-calcNavy text-xs bg-calcBlue-light p-2.5 rounded-lg border border-blue-200">
                1 hour = 60 minutes = 3,600 seconds
              </p>
              <p>For a complete age calculation, the calculator compares:</p>
              <p className="font-mono text-calcNavy text-xs bg-calcBlue-light p-2.5 rounded-lg border border-blue-200">
                Birth date + birth time → Current date + current time
              </p>
              <p>and calculates the difference.</p>
            </div>

            <div className="p-4 rounded-xl bg-calcBlue-light border border-blue-200 space-y-2">
              <h4 className="text-sm font-bold text-calcNavy-dark">The important part</h4>
              <p className="text-xs sm:text-sm text-slate-700">
                It doesn't assume every year has 365 days. It checks whether there are leap years:
              </p>
              <div className="text-xs font-mono text-slate-800 space-y-0.5 pl-2">
                <div>Normal year = 365 days</div>
                <div>Leap year = 366 days</div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 pt-1">
                That's why a proper age calculator can accurately calculate:
              </p>
              <div className="font-bold text-calcNavy-dark text-xs sm:text-sm bg-white px-3 py-1.5 rounded border border-blue-200 inline-block">
                26 Years, 8 Months, 5 Days, 3 Hours, 20 Minutes, 15 Seconds
              </div>
              <p className="text-xs text-slate-600 pt-1">
                The seconds keep changing because the calculator compares the current time with the exact birth time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WORKED EXAMPLES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Worked Examples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 1—Age in the Past</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                Someone born on 10 March 1995 wants to know their age on 1 January 2020. Since their birthday (10 March) hadn't occurred yet by 1 January, their completed age is <strong>24 years, 9 months, and 22 days</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 2 — Age on a Future Date</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                Someone born on 5 June 2000 wants to know how old they'll be on 1 January 2030. Their birthday for that year (5 June) hasn't occurred yet by 1 January, so they'll be <strong>29 years, 6 months, and 27 days</strong> old on that date.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 3—Baby Age in Weeks</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                A baby born on 1 March 2026 is, as of 5 September 2026, <strong>6 months and 4 days old</strong>—or, expressed differently, about <strong>27 weeks old</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BIRTHDAY & DATE CALCULATOR FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Birthday Calculator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Birthday Calculator
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm">
            Want to know exactly when your next birthday falls? Enter your date of birth, and this tool tells you:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>The date of your next birthday</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>The day of the week it falls on</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Your age on that birthday</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>How many days and weeks remain until it arrives</span>
            </li>
          </ul>
        </div>

        {/* Age on a Specific Date */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Age on a Specific Date
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Sometimes you don't want today's date—you want to know how old you were or will be on a particular day.
          </p>
          <div className="p-3 bg-[#f8fafc] rounded-lg border border-slate-200 text-xs text-slate-700 italic">
            For example: "How old will I be on 1 January 2030?"
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Just enter your date of birth and the target date, and the calculator works out your exact age at that point—useful for anniversaries, milestones, legal dates, and historical events.
          </p>
        </div>

        {/* Calculate the Difference Between Two Dates */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Calculate the Difference Between Two Dates
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Since age calculation is really just the difference between two dates, this tool can also work as a general date calculator. Use it to find:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>Years, months, weeks, or days between any two dates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>The overall duration between events</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>The day of the week for any date</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION: DEEP INFORMATIONAL TOPICS */}
      <section className="space-y-6">
        
        {/* Leap Year */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Does a Leap Year Affect Your Age?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm italic">
            If someone is born on 29 February, they are called a “leap-day baby” or “leapling.
          </p>
          <p className="text-slate-800 text-sm font-bold">
            No. A leap year does not change how old you are.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm">
            Your age is based on the number of years since your date of birth, not on how many birthdays you have celebrated.
          </p>
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">For example, if someone was born on 29 February 2000:</p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>They turned 1 in 2001, even though there is no 29 February that year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>They turned 4 on 29 February 2004.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>In non-leap years, they can celebrate their birthday on 28 February or 1 March, depending on local convention.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>For example, someone born on 29 February 2000 is 26 years old in 2026, even though they have had only 7 actual 29 February birthdays.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>For official documents and legal age, their age is generally determined by the applicable legal rules, not by counting 29 February birthdays.</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm pt-2">
            So a person born on 29 February doesn't stay young for four years—they still get one year older every year.
          </p>
        </div>

        {/* 2-Column Info: Babies & Chronological vs Biological */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Age Calculator for Babies and Children */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5 text-calcNavy" />
              <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
                Age Calculator for Babies and Children
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              For babies and young children, age is often more meaningful in weeks or months rather than years. Instead of saying a baby is "under one," parents may want to know their baby is:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-2">
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>6 months old</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>26 weeks old</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>180 days old</span>
              </li>
            </ul>
            <p className="text-slate-600 text-xs leading-relaxed pt-1">
              This tool converts a date of birth into any of these time units instantly—handy for tracking developmental milestones and vaccination schedules.
            </p>
          </div>

          {/* Chronological Age vs. Biological Age */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-calcNavy" />
              <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
                Chronological Age vs. Biological Age
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Chronological age is the amount of time that has passed from a person's date of birth to a particular date.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              For example, if someone was born on June 15, 2000, their chronological age is determined by comparing June 15, 2000, with the date on which their age is being calculated.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Chronological age is different from concepts such as biological age, which may refer to estimates of physiological condition and cannot be determined simply from a date of birth.
            </p>
          </div>

        </div>

        {/* Why Use an Online Age Calculator? */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Why Use an Online Age Calculator?
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Manually working out an exact age gets complicated fast—different month lengths, leap years, and calendar quirks all add room for error. An online calculator lets you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Get an instant, accurate result</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Skip manual date math entirely</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Calculate your age on any date—past, present, or future.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Convert your age into days, weeks, hours, minutes, or seconds</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Find out exactly when your next birthday is.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Measure the difference between any two dates</span>
            </div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
            Whether you're planning a birthday, filling out a form that needs an exact age, or just curious how many days you've been alive, this tool gives you the answer in seconds.
          </p>
        </div>

      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-calcNavy" />
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {[
            {
              q: "How accurate is this age calculator?",
              a: "It's fully accurate down to the day, accounting for varying month lengths and leap years. If you use the time-based units (hours, minutes, seconds), those are calculated from the exact dates entered and assume midnight as the reference time unless a specific time is provided."
            },
            {
              q: "Can I calculate someone else's age, not just my own?",
              a: "Yes. Simply enter any date of birth—yours, a family member's, or anyone else's—to calculate their age."
            },
            {
              q: "Can I find out my age on a future date?",
              a: "Yes. Enter your date of birth and select any future date to see how old you'll be on that day."
            },
            {
              q: "Does the calculator account for leap years?",
              a: "Yes. The calculator compares actual calendar dates rather than dividing total days by 365, so leap years are automatically factored into the result."
            },
            {
              q: "Why do different age calculators sometimes give slightly different month/day results?",
              a: "This usually happens because of how end-of-month dates are handled (see the leap year and month-length explanation above). Different calculation methods can produce results that differ by a few days, though the total day count and year count remain the same."
            },
            {
              q: "Can I use this to calculate the number of days between two dates that aren't birthdays?",
              a: "Yes. The tool works as a general date calculator too—enter any two dates to find the difference in years, months, weeks, or days."
            },
            {
              q: "What's the difference between chronological age and biological age?",
              a: "Chronological age is purely time-based—the years, months, and days since birth. Biological age is an estimate of physical condition and health and can't be calculated from a birth date alone. This calculator gives you chronological age."
            }
          ].map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-slate-200 bg-[#f8fafc] rounded-xl overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left px-5 py-3.5 flex items-center justify-between text-sm font-bold text-calcNavy-dark hover:text-calcBlue transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-calcNavy' : ''}`} />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}
