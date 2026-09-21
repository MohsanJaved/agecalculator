import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';

export default function AgeInHoursPage() {
  const [birthDate, setBirthDate] = useState('1995-06-03');
  const [birthTime, setBirthTime] = useState('00:00');
  const [hasBirthTime, setHasBirthTime] = useState(false);
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Hours calculation logic matching the document
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
    const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    // Calendar Years, Months, Days breakdown
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

    return {
      isInvalid: false,
      totalHours,
      totalDays,
      years,
      months,
      days
    };
  }, [birthDate, birthTime, hasBirthTime, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadFatimaExample = () => {
    setBirthDate('1995-06-03');
    setCompareDate('2026-09-05');
    setHasBirthTime(false);
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Age in Hours Calculator – How Many Hours Old Are You?"
        description="Convert your age into exact total hours lived. View fascinating biological statistics including estimated heartbeats and breaths since birth."
        badge="Age in Hours"
        badgeIcon={Calendar}
        category="Calculators"
        currentPage="Age in Hours"
        features={['Exact Elapsed Hours', 'Biological Heartbeat Stats', '100% Free & Private']}
        actions={
          <button 
            onClick={loadFatimaExample}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Load Fatima's Example (1995 → 2026)
          </button>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Hours Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Exact Elapsed Hours</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Date Input
              </span>
              <span className="text-xs text-slate-500 font-medium">Steps 1 & 2</span>
            </div>

            {/* Birth Date */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Date of Birth
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Optional Birth Time */}
            <div className="space-y-2 pt-1">
              <label className="flex items-center justify-between text-xs text-slate-700 cursor-pointer select-none">
                <span className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={hasBirthTime}
                    onChange={(e) => setHasBirthTime(e.target.checked)}
                    className="w-3.5 h-3.5 rounded border-slate-300 text-calcGreen focus:ring-calcGreen"
                  />
                  Include Exact Birth Time
                </span>
                {hasBirthTime && <span className="text-[11px] text-calcBlue font-medium">Optional</span>}
              </label>
              {hasBirthTime && (
                <input
                  type="time"
                  value={birthTime}
                  onChange={(e) => setBirthTime(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue transition-all"
                />
              )}
            </div>

            {/* Compare Date */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                  Comparison Date
                </label>
                <button
                  onClick={setTodayCompareDate}
                  className="text-[11px] text-calcBlue hover:underline font-semibold"
                >
                  Set to Today
                </button>
              </div>
              <input
                type="date"
                value={compareDate}
                onChange={(e) => setCompareDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-2.5 bg-calcGreen hover:bg-calcGreen-hover text-white text-base font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-default"
              >
                <Calculator className="w-5 h-5" />
                Calculate Age
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Result */}
                <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-calcGreen mb-1">
                    Total Hours Lived
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2 font-mono">
                    {calculationResult.totalHours.toLocaleString()} <span className="text-xl font-bold font-sans text-slate-600">hours</span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    Total Days Lived: <strong>{calculationResult.totalDays.toLocaleString()} days</strong>
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    Equivalent to <strong>{calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days old</strong>.
                  </div>
                </div>
              </>
            ) : (
              <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                {calculationResult?.message || 'Please enter valid dates to calculate.'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION: EXAMPLE (FATIMA) */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Fatima was born on 3 June 1995. Today is 5 September 2026. That makes her 31 years, 3 months, and 2 days old—or 11,417 days.
          </p>
          <p className="text-slate-700 text-sm font-semibold pt-1">
            In hours, that's
          </p>
          <div className="text-lg font-bold text-calcGreen my-1 font-mono">
            274,008 hours
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how it works:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter your date of birth</strong>—3 June 1995.
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-calcNavy-dark">Enter the comparison date</strong>—5 September 2026
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-calcNavy-dark">The tool counts total days lived</strong>—11,417 days
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">It multiplies by 24</strong> – 11,417 × 24 = 274,008 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE FORMULA */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Formula
        </h2>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Total Hours = Total Days Lived × 24</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Add an exact birth time and current time, and the calculator adjusts for leftover minutes too. No time entered means it counts from midnight.
        </p>
      </section>

      {/* SECTION: HOW MANY HOURS ARE IN A YEAR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Many Hours Are in a Year?
        </h2>
        
        <div className="space-y-3 text-xs sm:text-sm text-slate-700">
          <p>A standard 365-day year contains:</p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-calcNavy-dark">
            365 × 24 = 8,760 hours
          </div>
          <p>A leap year contains:</p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-calcNavy-dark">
            366 × 24 = 8,784 hours
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This difference is important when calculating a person's total elapsed hours over many years.
        </p>
      </section>

      {/* SECTION: WHAT IS AN AGE IN HOURS CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          What Is an Age in Hours Calculator?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          An Age in Hours Calculator is a tool that determines how much time has passed since a person's birth and expresses that elapsed time in hours.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Most people normally describe their age in years, such as 18, 25, or 40 years old. However, converting your age into hours gives you a different way to understand the amount of time that has passed.
        </p>
        <div className="space-y-1 text-xs sm:text-sm text-slate-700">
          <p>For example, instead of saying:</p>
          <p className="italic font-semibold text-slate-800">"I am 30 years old."</p>
          <p className="pt-1">You can calculate approximately how many hours have elapsed since your date of birth.</p>
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          An age-in-hours calculation is particularly useful when you want a more detailed measurement than years but don't need the extremely small units of minutes or seconds.
        </p>
      </section>

      {/* SECTION: WHY CHECK YOUR AGE IN HOURS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Check Your Age in Hours?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Hours are an easy middle unit. Not too big, not too small.
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              Easier to compare with things like sleep hours or work hours
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              Good for spotting personal milestones, like your 200,000th hour
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              Simple to relate back to days—just divide by 24
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: HOUR MILESTONES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Hour Milestones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>100,000 hours</strong> ≈ 11 years, 5 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>200,000 hours</strong> ≈ 22 years, 10 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>300,000 hours</strong> ≈ 34 years, 3 months old</div>
          </div>
        </div>
      </section>

      {/* SECTION: DOES A LEAP YEAR AFFECT AGE IN HOURS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Does a Leap Year Affect Age in Hours?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Yes. A leap year has 366 days instead of 365.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Because every day contains 24 hours, a leap year has:
        </p>
        <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-calcNavy-dark text-xs sm:text-sm inline-block">
          366 × 24 = 8,784 hours
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          A normal year has:
        </p>
        <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-slate-700 text-xs sm:text-sm inline-block">
          365 × 24 = 8,760 hours
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The difference is 24 hours, or one additional day.
        </p>
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
              q: "How is age in hours worked out?",
              a: "Total days lived, multiplied by 24."
            },
            {
              q: "Does it handle leap years?",
              a: "Yes. The day count already includes leap years, so the total hours are accurate."
            },
            {
              q: "Can I check a future date?",
              a: "Yes. Pick any future date to see your hours lived by then."
            },
            {
              q: "Why use hours instead of days or minutes?",
              a: "It's a useful middle ground—detailed enough to feel precise, simple enough to stay readable."
            },
            {
              q: "Is this my exact age, just in a different unit?",
              a: "Yes. Same chronological age, just shown in hours."
            },
            {
              q: "Can I calculate someone else's age in hours?",
              a: "Yes. Enter that person's date of birth and the date you want to calculate against."
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
