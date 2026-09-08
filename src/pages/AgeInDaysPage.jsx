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

export default function AgeInDaysPage() {
  const [birthDate, setBirthDate] = useState('2005-11-09');
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Days calculation logic matching the document
  const calculationResult = useMemo(() => {
    if (!birthDate || !compareDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = compareDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const target = new Date(cY, cM - 1, cD);

    if (birth > target) {
      return { isInvalid: true, message: 'Birth date cannot be after the comparison date.' };
    }

    const diffMs = target - birth;
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
      totalDays,
      years,
      months,
      days
    };
  }, [birthDate, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadBilalExample = () => {
    setBirthDate('2005-11-09');
    setCompareDate('2026-09-05');
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Button */}
      <div className="flex justify-end">
        <button 
          onClick={loadBilalExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load Bilal's Example (2005 → 2026)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Title Tag: Age in Days Calculator – How Many Days Old Are You?
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Age in Days Calculator – How Many Days Old Are You?
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Days are the simplest, most universal way to measure exactly how long you've been alive — no rounding, no averages, just a precise count from your date of birth to any date you choose.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Days Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Exact Calendar Days</span>
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
                    Total Days Lived
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.totalDays.toLocaleString()} <span className="text-xl font-bold text-slate-600">days</span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    Equivalent to {calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    Exact calendar difference: <strong>{calculationResult.totalDays.toLocaleString()} complete calendar days</strong> lived so far.
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

      {/* SECTION: EXAMPLE (BILAL) */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Bilal was born on 9 November 2005. As of today, 5 September 2026, he is 20 years, 9 months, and 27 days old.
          </p>
          <p className="text-slate-700 text-sm font-semibold pt-1">
            Counted in full days, that's:
          </p>
          <div className="text-lg font-bold text-calcGreen my-1">
            7,240 days
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how it's worked out:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter date of birth</strong> – 9 November 2005
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-calcNavy-dark">Enter the comparison date</strong> – 5 September 2026
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-calcNavy-dark">Calculate</strong> – the tool counts every calendar day between the two dates, including adjustments for leap years
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">Result</strong> – 7,240 days lived so far
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
          <div className="font-bold text-calcNavy-dark">Total Days = (Comparison Date − Birth Date), counted as full calendar days</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Unlike converting from years or months, this figure isn't a multiplication — it's a direct day-by-day count between the two calendar dates. That's also why it's the most exact of all the unit conversions: every other unit (weeks, hours, minutes, and seconds) is simply derived from this same day count.
        </p>
      </section>

      {/* SECTION: WHAT IS AN AGE IN DAYS CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          What Is an Age in Days Calculator?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          An Age in Days Calculator calculates how many days have passed from a person's date of birth to a specific date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Most people describe their age in years, such as 20, 30, or 50 years old. However, measuring age in days provides a more detailed view of the total time that has elapsed.
        </p>
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-800">For example, someone may want to know:</p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-1">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>How many days have I been alive?</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>How many days old is my baby?</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>How many days have passed since my birth?</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>How many days old will I be on a particular date?</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>How many days had I lived on a past date?</span>
            </li>
          </ul>
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Instead of manually counting dates on a calendar, the calculator performs the calculation for you.
        </p>
      </section>

      {/* SECTION: WHY MEASURE AGE IN DAYS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Measure Age in Days?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A day count is one of the more genuinely useful ways to express age, beyond just curiosity:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Medical and legal contexts</strong> – age in days is often required for newborns, in dosage calculations, insurance forms, and certain legal thresholds
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Anniversaries and milestones</strong> – tracking a relationship, sobriety streak, or personal challenge often works better in days than months, since days give a precise, unambiguous number
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Comparing across different birth months</strong> – because months vary in length, comparing two people's ages in months can be inexact; comparing in days is always exact
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Countdown and countup tracking</strong> – useful for both "days since" (an event, a birth) and "days until" (a birthday, deadline, or anniversary)
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: DOES A LEAP YEAR AFFECT AGE IN DAYS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Does a Leap Year Affect Age in Days?
        </h2>
        <p className="text-slate-800 text-sm font-bold">
          Yes.
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-slate-700">
          <p className="font-semibold text-slate-800">A leap year has:</p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-calcNavy-dark inline-block">
            366 days
          </div>
          <p className="font-semibold text-slate-800 pt-1">Instead of:</p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-mono font-bold text-slate-700 inline-block">
            365 days
          </div>
          <p className="pt-1 text-slate-700">
            The extra day is February 29.
          </p>
        </div>
      </section>

      {/* SECTION: DAY MILESTONES WORTH KNOWING */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Day Milestones Worth Knowing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>1,000 days</strong> ≈ 2 years, 9 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>5,000 days</strong> ≈ 13 years, 8 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>10,000 days</strong> ≈ 27 years, 4 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>20,000 days</strong> ≈ 54 years, 9 months old</div>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic pt-1">
          Many people mark their 10,000-day milestone specifically, since it falls in the late twenties for most people and is an easy round number to celebrate.
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
              q: "Why does the day count matter more than years and months?",
              a: "Because a day is a fixed, unchanging unit — unlike a month (28–31 days) or even a year (365 or 366 days with leap years). A day count gives you the one truly precise figure that every other unit is calculated from."
            },
            {
              q: "Does this calculator account for leap years?",
              a: "Yes. It counts actual calendar days between the two dates you enter, so any leap years in that range are automatically included."
            },
            {
              q: "Can I use this to count down to a future date instead of counting up from a birth date?",
              a: "Yes. Enter any start date and any future end date — it doesn't have to be a birth date — to get the exact number of days between them."
            },
            {
              q: "Is age in days the same as total days lived?",
              a: "Yes, when your date of birth is the starting point and today (or any chosen date) is the endpoint, this figure represents the total number of complete days you've been alive."
            },
            {
              q: "How is this different from the age in weeks or hours calculators?",
              a: "Weeks, hours, minutes, and seconds are all derived by multiplying or dividing this same day count — this calculator gives you the base number those are built from."
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
  );
}
