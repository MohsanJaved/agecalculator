import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  CheckCircle2,
  XCircle,
  Clock,
  CalendarCheck,
  CalendarX,
  Compass,
  AlertCircle
} from 'lucide-react';

export default function LeapYearCalculatorPage() {
  const [yearInput, setYearInput] = useState('2028');
  const [openFaq, setOpenFaq] = useState(null);

  const calculationResult = useMemo(() => {
    const year = parseInt(yearInput, 10);
    if (isNaN(year) || year < 1) {
      return { isInvalid: true, message: 'Please enter a valid positive year (e.g. 2028).' };
    }

    let isLeap = false;
    let ruleMatched = '';
    let explanation = '';

    if (year % 400 === 0) {
      isLeap = true;
      ruleMatched = 'Rule 1: Divisible by 400';
      explanation = `${year} is a century year divisible by 400, making it a leap year.`;
    } else if (year % 100 === 0) {
      isLeap = false;
      ruleMatched = 'Rule 2: Divisible by 100, but not 400';
      explanation = `${year} is a century year divisible by 100 but not by 400, so it skips the leap day.`;
    } else if (year % 4 === 0) {
      isLeap = true;
      ruleMatched = 'Rule 3: Divisible by 4';
      explanation = `${year} is divisible by 4 and is not a century year, making it a leap year.`;
    } else {
      isLeap = false;
      ruleMatched = 'Rule 4: Not divisible by 4';
      explanation = `${year} is not divisible by 4, so it is a common year with 365 days.`;
    }

    return {
      isInvalid: false,
      year,
      isLeap,
      daysInYear: isLeap ? 366 : 365,
      extraDayText: isLeap ? `29 February ${year}` : null,
      ruleMatched,
      explanation
    };
  }, [yearInput]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button 
          onClick={() => setYearInput('2027')}
          className="px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold border border-slate-600 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Check 2027 (Not Leap)
        </button>
        <button 
          onClick={() => setYearInput('2028')}
          className="px-3 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-green-300" />
          Check 2028 (Leap)
        </button>
        <button 
          onClick={() => setYearInput('2000')}
          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          2000 (Century Leap)
        </button>
        <button 
          onClick={() => setYearInput('2100')}
          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          2100 (Century Non-Leap)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Leap Year Calculator
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Leap Year Calculator – Is a Year a Leap Year?
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          A leap year adds one extra day, 29 February, to keep our calendar in sync with Earth's orbit around the sun. This tool checks whether any year you enter is a leap year, and explains exactly why.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calendar className="w-5 h-5 text-calcNavy" />
            Leap Year Checker
          </h2>
          <span className="text-xs text-slate-500 font-medium">Instant Verification</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Year Input
              </span>
              <span className="text-xs text-slate-500 font-medium">Gregorian</span>
            </div>

            {/* Year Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Enter Year
              </label>
              <input
                type="number"
                value={yearInput}
                onChange={(e) => setYearInput(e.target.value)}
                placeholder="e.g. 2028"
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-base font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-2.5 bg-calcGreen hover:bg-calcGreen-hover text-white text-base font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-default"
              >
                <Calculator className="w-5 h-5" />
                Check Leap Year
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Result */}
                <div className={`border rounded-xl p-5 shadow-sm space-y-3 ${
                  calculationResult.isLeap 
                    ? 'bg-calcGreen-light border-calcGreen-border' 
                    : 'bg-[#f8fafc] border-slate-300'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      calculationResult.isLeap ? 'text-calcGreen' : 'text-slate-600'
                    }`}>
                      {calculationResult.isLeap ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-calcGreen" />
                          Leap Year Result
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-slate-500" />
                          Common Year Result
                        </>
                      )}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                      {calculationResult.daysInYear} Days
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark">
                    {calculationResult.isLeap ? (
                      <span>Yes — {calculationResult.year} is a leap year</span>
                    ) : (
                      <span>No — {calculationResult.year} is not a leap year</span>
                    )}
                  </div>

                  {calculationResult.isLeap && (
                    <div className="text-sm font-semibold text-calcNavy">
                      Includes extra day: <strong>{calculationResult.extraDayText}</strong>
                    </div>
                  )}

                  <div className="text-xs sm:text-sm text-slate-600 pt-1 border-t border-slate-200">
                    {calculationResult.explanation}
                  </div>
                </div>

                {/* Technical Rule Breakdown Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-1.5 text-xs text-slate-700">
                  <div className="font-bold text-calcNavy flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-calcNavy" />
                    Applied Condition
                  </div>
                  <div className="text-slate-600">
                    Matched rule: <strong>{calculationResult.ruleMatched}</strong>
                  </div>
                </div>
              </>
            ) : (
              <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                {calculationResult?.message || 'Please enter a valid year.'}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION: EXAMPLE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Example
        </h2>

        <div className="space-y-3 text-sm text-slate-700">
          <div>
            <strong className="text-calcNavy-dark">Is 2027 a leap year?</strong>
            <div className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Enter 2027, and the calculator returns:
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-lg font-bold text-slate-800 mt-1">
              No — 2027 is not a leap year.
            </div>
          </div>

          <div className="pt-2">
            <strong className="text-calcNavy-dark">Is 2028 a leap year?</strong>
            <div className="p-3 bg-calcGreen-light border border-calcGreen-border rounded-lg font-bold text-calcNavy-dark mt-1">
              Yes — 2028 is a leap year, with an extra day: 29 February 2028.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: THE RULE BEHIND LEAP YEARS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Rule Behind Leap Years
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A year is a leap year if it meets these conditions, checked in order:
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-slate-800">
          <div>1. If the year is divisible by 400 → <strong className="text-calcGreen">Leap year</strong></div>
          <div>2. Else if the year is divisible by 100 → <strong className="text-red-600">Not a leap year</strong></div>
          <div>3. Else if the year is divisible by 4 → <strong className="text-calcGreen">Leap year</strong></div>
          <div>4. Otherwise → <strong className="text-red-600">Not a leap year</strong></div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Most years only need rule 3 — divisible by 4 means leap, otherwise not. Rules 1 and 2 exist specifically to handle century years, which follow a different pattern.
        </p>
      </section>

      {/* SECTION: WHY THE EXTRA RULE FOR CENTURY YEARS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why the Extra Rule for Century Years?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A calendar year of exactly 365 days is slightly shorter than the time Earth actually takes to orbit the sun (about 365.2422 days). Adding a leap day every 4 years overcorrects very slightly, so century years divisible by 100 skip the leap day — except when they're also divisible by 400, which corrects the calendar back the other way. This is why:
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0 mt-1.5"></span>
            <div><strong>1900</strong> was NOT a leap year (divisible by 100, not by 400)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcGreen shrink-0 mt-1.5"></span>
            <div><strong>2000</strong> WAS a leap year (divisible by 400)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0 mt-1.5"></span>
            <div><strong>2100</strong> will NOT be a leap year (divisible by 100, not by 400)</div>
          </li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Without this century-year adjustment, the calendar would drift out of sync with the seasons by roughly three days every 400 years.
        </p>
      </section>

      {/* SECTION: LEAP YEARS AROUND NOW */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Leap Years Around Now
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          For quick reference, recent and upcoming leap years include:
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {['2016', '2020', '2024', '2028', '2032', '2036'].map((yr) => (
            <span key={yr} className="px-3.5 py-1.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-xs sm:text-sm font-bold text-calcNavy">
              {yr}
            </span>
          ))}
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Leap years always fall on a year divisible by 4 (excluding the century-year exception above), so they repeat every 4 years in a predictable pattern.
        </p>
      </section>

      {/* SECTION: WHY THIS MATTERS BEYOND CURIOSITY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why This Matters Beyond Curiosity
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Birthdays on 29 February</strong> – anyone born on this date only has an actual birthday once every four years, which is why age calculators need special handling for leap day births</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Financial and legal calculations</strong> – interest calculations, contract terms, and some legal deadlines can be affected by whether a given year includes the extra day</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Software and scheduling</strong> – anything built around dates (calendars, billing cycles, subscriptions) needs to account for leap years to stay accurate</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>General calendar accuracy</strong> – leap years are the reason the calendar stays aligned with the seasons over long periods of time</div>
          </li>
        </ul>
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
              q: "How often do leap years occur?",
              a: "Generally every 4 years, except for century years not divisible by 400 (like 1900 and 2100), which are skipped."
            },
            {
              q: "Why is February the month that gets the extra day?",
              a: "This dates back to the Roman calendar, where February was originally the last month of the year and became the natural place to insert an adjustment day when the calendar was later reformed."
            },
            {
              q: "What happens to birthdays on 29 February in non-leap years?",
              a: "There's no single universal rule — some people and systems treat 28 February as the birthday in non-leap years, others use 1 March. Legal treatment can vary by country for age-related purposes."
            },
            {
              q: "Is every year divisible by 4 a leap year?",
              a: "Almost — the only exceptions are century years (divisible by 100) that aren't also divisible by 400, such as 1900 and 2100."
            },
            {
              q: "How can I quickly check several years at once?",
              a: "Enter each year individually — the calculator applies the same rule every time, so you can check as many years as you need one at a time."
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
