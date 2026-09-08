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

export default function AgeInYearsPage() {
  const [birthDate, setBirthDate] = useState('1993-12-02');
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Years calculation logic matching Zara's example
  const calculationResult = useMemo(() => {
    if (!birthDate || !compareDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = compareDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const target = new Date(cY, cM - 1, cD);

    if (birth > target) {
      return { isInvalid: true, message: 'Birth date cannot be after the comparison date.' };
    }

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

    // Birthday this year check
    const birthdayThisYear = new Date(cY, bM - 1, bD);
    const hasBirthdayPassed = target >= birthdayThisYear;
    
    // Days until birthday this year (if not passed)
    let daysUntilBirthday = 0;
    if (!hasBirthdayPassed) {
      const diffMs = birthdayThisYear - target;
      daysUntilBirthday = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    }

    const totalMonths = years * 12 + months;

    return {
      isInvalid: false,
      completedYears: years,
      months,
      days,
      hasBirthdayPassed,
      daysUntilBirthday,
      totalMonths
    };
  }, [birthDate, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadZaraExample = () => {
    setBirthDate('1993-12-02');
    setCompareDate('2026-09-05');
  };

  const loadFutureExample = () => {
    setBirthDate('2000-08-20');
    setCompareDate('2030-08-20');
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button 
          onClick={loadZaraExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load Zara's Example (1993 → 2026)
        </button>
        <button 
          onClick={loadFutureExample}
          className="px-3.5 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold border border-slate-600 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          Load Future Example (2000 → 2030)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Age in Years Calculator
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Age in Years Calculator – Find Your Exact Age
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Age in years is the number everyone actually uses — on forms, ID cards, and birthday cakes. But working it out precisely takes more than subtracting the birth year from the current year, especially if your birthday hasn't happened yet this year.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Years Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Completed Years</span>
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
                Calculate
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Completed Years */}
                <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-calcGreen mb-1">
                    Completed Age in Years
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.completedYears} <span className="text-xl font-bold text-slate-600">years old</span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    Full breakdown: {calculationResult.completedYears} years, {calculationResult.months} months, and {calculationResult.days} days
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    {!calculationResult.hasBirthdayPassed && calculationResult.daysUntilBirthday > 0 ? (
                      <span>Birthday this year is in <strong>{calculationResult.daysUntilBirthday} days</strong>. Completed years remain at <strong>{calculationResult.completedYears}</strong>.</span>
                    ) : (
                      <span>Birthday has already occurred this year. Full <strong>{calculationResult.completedYears} completed years</strong> achieved.</span>
                    )}
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

      {/* SECTION: EXAMPLE (ZARA) */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Zara was born on 2 December 1993. As of today, 5 September 2026, her exact age is:
          </p>
          <div className="text-lg font-bold text-calcGreen my-2">
            32 years, 9 months, and 3 days
          </div>
          <p className="text-slate-700 text-sm">
            Even though 2026 minus 1993 equals 33, Zara is still 32 — her birthday this year doesn't arrive until 2 December, which is 88 days away.
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how it's worked out:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter date of birth</strong> – 2 December 1993
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
                <strong className="text-calcNavy-dark">Calculate</strong> – the tool checks whether this year's birthday (2 December 2026) has already passed by the comparison date
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">Result</strong> – since it hasn't, one year is subtracted from the simple year difference, giving 32 completed years, plus 9 months and 3 days beyond that
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
          <div className="font-bold text-calcNavy-dark">Age (years) = Comparison Year − Birth Year</div>
          <div className="text-xs text-slate-600">If the birth month/day hasn't occurred yet this year:</div>
          <div className="font-bold text-calcNavy-dark pl-4">Age (years) = Age (years) − 1</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This is the key detail that a simple year subtraction misses — a completed year only counts once the birthday has actually occurred, not just because the calendar year has changed.
        </p>
      </section>

      {/* SECTION: HOW TO CALCULATE AGE ON A FUTURE DATE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How to Calculate Age on a Future Date
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          You can also calculate how old you will be on a future date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          Enter your birth date and select the future date.
        </p>
        
        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
          <p className="font-bold text-slate-800">For example:</p>
          <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-1">
            <div><strong>Birth date:</strong> August 20, 2000</div>
            <div><strong>Future date:</strong> August 20, 2030</div>
            <div className="pt-2"><strong>Result:</strong></div>
            <div className="text-lg font-bold text-calcGreen">30 years old</div>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic">
          This can be useful for checking future birthdays and age milestones.
        </p>
      </section>

      {/* SECTION: WHY AGE IN YEARS NEEDS TO BE EXACT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Age in Years Needs to Be Exact
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          A rough age is fine for casual conversation, but precise completed years matter in a lot of everyday situations:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Legal age thresholds</strong> – voting age, drinking age, driving age, and age of majority are all based on completed years, checked against an exact birthday
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Retirement and pension eligibility</strong> – many retirement ages and pension payouts are tied to the exact date a person turns a specific age, not just the calendar year
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>School enrollment cut-offs</strong> – many school systems use a specific cut-off date to determine which grade a child is old enough to enter
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Contracts and eligibility forms</strong> – age-based eligibility (insurance, loans, memberships) is usually verified against the exact date of birth, not an estimate
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: COMMON AGE MILESTONES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Age Milestones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>18 years</strong> – legal adulthood in most countries</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>21 years</strong> – legal drinking age in several countries, including the US</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>30 / 40 / 50 / 60</strong> – commonly marked "round number" birthdays</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>65 years</strong> – typical retirement or pension eligibility age in many countries</div>
          </div>
        </div>
      </section>

      {/* SECTION: COMMON AGE IN YEARS CONVERSIONS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Age in Years Conversions
        </h2>

        <div className="overflow-hidden border border-slate-300 rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-calcNavy-subtle text-calcNavy-dark font-bold text-xs uppercase tracking-wider">
                <th className="py-2.5 px-4 sm:px-6">Age in Years</th>
                <th className="py-2.5 px-4 sm:px-6">Months</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 text-xs sm:text-sm">
              {[
                ['1 year', '12 months'],
                ['2 years', '24 months'],
                ['5 years', '60 months'],
                ['10 years', '120 months'],
                ['13 years', '156 months'],
                ['16 years', '192 months'],
                ['18 years', '216 months'],
                ['21 years', '252 months'],
                ['25 years', '300 months'],
                ['30 years', '360 months'],
                ['40 years', '480 months'],
                ['50 years', '600 months'],
                ['60 years', '720 months'],
                ['70 years', '840 months'],
                ['80 years', '960 months'],
                ['100 years', '1,200 months'],
              ].map(([yr, mn], idx) => (
                <tr key={idx} className={`hover:bg-slate-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#f8fafc]'}`}>
                  <td className="py-2 px-4 sm:px-6 font-medium text-slate-800">{yr}</td>
                  <td className="py-2 px-4 sm:px-6 text-calcNavy font-semibold">{mn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic">
          These are simple conversions of complete years into months and do not represent the exact number of days lived.
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
              q: "Why doesn't simple subtraction (current year − birth year) always give the right age?",
              a: "Because it ignores whether your birthday has already happened this year. If it hasn't, you're still one year younger than that simple subtraction suggests — as in Zara's example above."
            },
            {
              q: "Can I calculate my age on a date other than today?",
              a: "Yes. Enter your date of birth and any past or future date to see your exact completed age on that specific day."
            },
            {
              q: "Does this calculator account for leap year birthdays (29 February)?",
              a: "Yes. For someone born on 29 February, the calculator treats their birthday consistently each year (commonly 1 March in non-leap years) so their completed-years count stays accurate."
            },
            {
              q: "What's the difference between \"age in years\" and \"age in years, months, and days\"?",
              a: "\"Age in years\" gives just the completed years (like 32), while the fuller version adds the remaining months and days since the last birthday (32 years, 9 months, 3 days) for a more precise picture."
            },
            {
              q: "Is this the same age used for legal or official purposes?",
              a: "Generally, yes — legal age is almost always based on completed years since birth, exactly as this calculator determines it. For specific legal thresholds, though, always confirm against the relevant local rules."
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
