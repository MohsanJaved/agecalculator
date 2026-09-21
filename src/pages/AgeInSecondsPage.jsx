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

export default function AgeInSecondsPage() {
  const [birthDate, setBirthDate] = useState('2001-04-22');
  const [birthTime, setBirthTime] = useState('00:00');
  const [hasBirthTime, setHasBirthTime] = useState(false);
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Seconds calculation logic matching the document
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
      totalSeconds,
      totalDays,
      years,
      months,
      days
    };
  }, [birthDate, birthTime, hasBirthTime, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadSarahExample = () => {
    setBirthDate('2001-04-22');
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
        title="Age in Seconds Calculator – How Many Seconds Old Are You?"
        description="Watch your life seconds tick in real-time. Calculate the exact total number of seconds lived from your birth date and exact time."
        badge="Age in Seconds"
        badgeIcon={Calendar}
        category="Calculators"
        currentPage="Age in Seconds"
        features={['Exact Elapsed Seconds', 'Real-Time Live Counter', '100% Free & Private']}
        actions={
          <button 
            onClick={loadSarahExample}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Load Sarah's Example (2001 → 2026)
          </button>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Seconds Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Exact Elapsed Seconds</span>
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
                  Date to Compare Against
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
                    Total Seconds Lived
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2 font-mono">
                    {calculationResult.totalSeconds.toLocaleString()} <span className="text-xl font-bold font-sans text-slate-600">seconds</span>
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

      {/* SECTION: EXAMPLE (SARAH) */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Sarah was born on 22 April 2001. As of today, 5 September 2026, she is 25 years, 4 months, and 14 days old.
          </p>
          <p className="text-slate-700 text-sm font-semibold pt-1">
            Converted into seconds, that works out to
          </p>
          <div className="text-lg font-bold text-calcGreen my-1 font-mono">
            800,668,800 seconds
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how she got that number:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter date of birth</strong> – 22 April 2001
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-calcNavy-dark">Enter the date to compare against</strong>—5 September 2026 (today, by default)
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-calcNavy-dark">Calculate</strong>—the tool works out the total number of full days lived (9,267 days) and multiplies by the number of seconds in a day
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">Result</strong> – 9,267 days × 86,400 seconds = 800,668,800 seconds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW AGE IN SECONDS IS CALCULATED */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Age in Seconds Is Calculated
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          The calculation itself is straightforward once you know the total number of days between two dates:
        </p>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Total Seconds = Total Days Lived × 86,400</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Where 86,400 is the number of seconds in one day (24 hours × 60 minutes × 60 seconds).
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          If you want to include a specific birth time and current time rather than assuming midnight, the age calculator adds or subtracts the leftover hours, minutes, and seconds on top of the full-day count for a more precise figure.
        </p>
      </section>

      {/* SECTION: WHY LOOK AT YOUR AGE IN SECONDS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Look at Your Age in Seconds?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Years and months are useful for everyday life, but converting your age into seconds puts the scale of time into perspective in a way that's fun rather than practical:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              A milestone marker—many people mark turning 1 billion seconds old (around 31 years and 8 months) as a personal milestone worth celebrating.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              A fun fact for birthdays—share your exact "seconds alive" count as a quirky birthday post or greeting
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              Perspective on time—seeing your life in the billions makes the sheer number of moments you've lived through feel more tangible.
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              Curiosity and trivia—great for classroom demonstrations of large numbers, or just satisfying idle curiosity
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: WHEN DO YOU HIT 1 BILLION SECONDS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          When Do You Hit 1 Billion Seconds?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A billion seconds is equal to about 31 years and 259 days. Therefore, if you are aware of your birth date, then it should not be hard for you to calculate when your "billion-second birthday" will fall—it is just over 31 years and a half from your birth date.
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
              q: "How is age in seconds different from age in days?",
              a: "Age in days counts full 24-hour periods since birth. Age in seconds is that same day count multiplied by 86,400—essentially the same information at a much finer resolution."
            },
            {
              q: "Does the calculator account for leap years when converting to seconds?",
              a: "Yes. The underlying day count between your birth date and the comparison date already accounts for leap years, so the seconds total reflects the correct number of calendar days, not an average."
            },
            {
              q: "Can I calculate my age in seconds for a future date?",
              a: "Yes. Enter your date of birth and any future date, and the tool will tell you how many seconds you'll have been alive by then."
            },
            {
              q: "Why does the second’s number look so large?",
              a: "A single day already contains 86,400 seconds, so even a few years of life ads up to hundreds of millions of seconds. It's simply a matter of scale, not a different way of measuring age."
            },
            {
              q: "Is this the same as my \"true\" age?",
              a: "Yes—it's just your chronological age (years, months, and days since birth) expressed in seconds instead of the usual units."
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
