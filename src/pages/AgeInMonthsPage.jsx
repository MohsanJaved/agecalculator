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

export default function AgeInMonthsPage() {
  const [birthDate, setBirthDate] = useState('1999-03-20');
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Months calculation logic matching the exact document formula
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

    // Formula: Total Months = (Years × 12) + Remaining Completed Months
    const totalCompletedMonths = (years * 12) + months;
    const nextMonthOrdinal = totalCompletedMonths + 1;

    return {
      isInvalid: false,
      years,
      months,
      days,
      totalCompletedMonths,
      nextMonthOrdinal
    };
  }, [birthDate, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadHinaExample = () => {
    setBirthDate('1999-03-20');
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
          onClick={loadHinaExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load Hina's Example (1999 → 2026)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Title Tag: Age in Months Calculator – How Many Months Old Are You?
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Age in Months Calculator – How Many Months Old Are You?
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Months sit right between the everyday simplicity of years and the finer detail of weeks or days — making them a common choice for tracking child development, loan terms, and anything measured in shorter, medium-length spans of time.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Months Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Completed Months</span>
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
                    Completed Age in Months
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.totalCompletedMonths} <span className="text-xl font-bold text-slate-600">months</span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    ({calculationResult.days} days into the {calculationResult.nextMonthOrdinal}th month)
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    Full calendar breakdown: <strong>{calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days</strong>
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

      {/* SECTION: EXAMPLE (HINA) */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Hina was born on 20 March 1999. As of today, 5 September 2026, she is 27 years, 5 months, and 16 days old.
          </p>
          <p className="text-slate-700 text-sm font-semibold pt-1">
            Expressed purely in completed months, that's:
          </p>
          <div className="text-lg font-bold text-calcGreen my-1">
            329 months (16 days into her 330th month)
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how it's worked out:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter date of birth</strong> – 20 March 1999
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
                <strong className="text-calcNavy-dark">Calculate Age</strong> – the tool counts every full calendar month between the two dates: 27 years × 12 = 324 months, plus 5 more completed months = 329 months, with 16 leftover days
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">Result</strong> – 329 completed months, 16 days into the next one
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
          <div className="font-bold text-calcNavy-dark">Total Months = (Years × 12) + Remaining Completed Months</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          A "completed" month only counts once the day-of-month has been reached — so someone born on the 20th only adds a new completed month once the 20th of the following month arrives. Any days short of that are shown separately rather than rounded up.
        </p>
      </section>

      {/* SECTION: WHY TRACK AGE IN MONTHS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Track Age in Months?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          Months are used more often than you'd expect outside of birthdays and anniversaries:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Child development</strong> – pediatric milestones (rolling over, first steps, vaccination schedules) are almost always framed in months up to around age 2–3
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Loan and finance terms</strong> – mortgage age limits, loan tenures, and insurance eligibility are frequently calculated in months rather than years
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Warranty and subscription periods</strong> – many products and services measure age or eligibility windows in months
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Academic and professional milestones</strong> – probation periods, internship lengths, and course durations are commonly expressed in months
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: HOW DOES THE AGE IN MONTHS CALCULATOR WORK? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Does the Age in Months Calculator Work?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          The calculator compares your date of birth with a selected date and determines the number of complete calendar months between them.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Unlike weeks and days, a calendar month does not have a fixed number of days.
        </p>
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-800">A month can contain:</p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm text-slate-700">
            <li className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-center font-semibold">28 days</li>
            <li className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-center font-semibold">29 days</li>
            <li className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-center font-semibold">30 days</li>
            <li className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg text-center font-semibold">31 days</li>
          </ul>
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Because of this, calculating age in months is not as simple as dividing the number of days by 30.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Instead, a calendar-based calculation considers the actual day, month, and year of both dates.
        </p>
      </section>

      {/* SECTION: WHY CAN'T I SIMPLY DIVIDE MY AGE IN DAYS BY 30? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Can't I Simply Divide My Age in Days by 30?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          You can use division by 30 to get an approximate number of months, but it does not provide an exact calendar age.
        </p>
        
        <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
          <p className="font-bold text-slate-800">For example:</p>
          <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm text-calcNavy-dark font-bold">
            300 days ÷ 30 = 10 months
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          But 10 calendar months may not contain exactly 300 days depending on which months are involved.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          For an exact age, the calculator should compare the actual calendar dates.
        </p>
        <p className="text-slate-600 text-xs sm:text-sm italic">
          This distinction is especially important when calculating the age of babies and young children.
        </p>
      </section>

      {/* SECTION: DOES FEBRUARY AFFECT AGE IN MONTHS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Does February Affect Age in Months?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          February can affect the number of days within a calendar period because it has either 28 or 29 days.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          However, the number of calendar months between two dates is determined from the dates themselves rather than treating February as a fixed 30-day month.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          For example, the period from January 15 to February 15 is one complete calendar month, even though it contains fewer than 30 days.
        </p>
      </section>

      {/* SECTION: MONTH MILESTONES WORTH KNOWING */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Month Milestones Worth Knowing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>100 months</strong> ≈ 8 years, 4 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>200 months</strong> ≈ 16 years, 8 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>500 months</strong> ≈ 41 years, 8 months old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>1,000 months</strong> ≈ 83 years, 4 months old</div>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic pt-1">
          These conversions are handy for quickly sanity-checking an age when it's given only in months, or for converting eligibility criteria written in months into a more familiar age range.
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
              q: "How is a \"completed month\" defined?",
              a: "A month only counts as complete once the same day-of-month is reached again — for example, someone born on the 20th completes a new month every time the 20th comes around, not on the 1st of each calendar month."
            },
            {
              q: "Why not just divide total days by 30?",
              a: "Because months vary between 28 and 31 days, dividing by a flat 30 would give a slightly inaccurate result. This calculator counts actual completed calendar months instead, so the figure stays exact."
            },
            {
              q: "Can I calculate age in months for a future date?",
              a: "Yes. Enter your date of birth and any future date to see how many completed months you'll have reached by then."
            },
            {
              q: "Is this the same as multiplying years by 12?",
              a: "Only for the completed-years portion. The calculator adds any additional completed months beyond the last full year, plus shows leftover days that don't yet make up a full month."
            },
            {
              q: "Why do some forms or eligibility rules ask for age in months instead of years?",
              a: "Months allow for finer distinctions than years alone — useful when a rule depends on a specific age range (like \"must be at least 18 months old\" or \"loan term capped at 240 months\") that wouldn't be precise enough if expressed only in years."
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
