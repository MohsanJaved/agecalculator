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

export default function AgeOnSpecificDatePage() {
  const [birthDate, setBirthDate] = useState('1985-02-14');
  const [targetDate, setTargetDate] = useState('2001-06-15');
  const [openFaq, setOpenFaq] = useState(null);

  // Age on Specific Date calculation logic matching the document
  const calculationResult = useMemo(() => {
    if (!birthDate || !targetDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [tY, tM, tD] = targetDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const target = new Date(tY, tM - 1, tD);

    if (birth > target) {
      return { isInvalid: true, message: 'Birth date cannot be after the target date.' };
    }

    let years = tY - bY;
    let months = (tM - 1) - (bM - 1);
    let days = tD - bD;

    if (days < 0) {
      const prevMonthLastDay = new Date(tY, tM - 1, 0).getDate();
      days += prevMonthLastDay;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const diffMs = target - birth;
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return {
      isInvalid: false,
      years,
      months,
      days,
      totalDays
    };
  }, [birthDate, targetDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadPastExample = () => {
    setBirthDate('1985-02-14');
    setTargetDate('2001-06-15');
  };

  const loadFutureExample = () => {
    setBirthDate('1985-02-14');
    setTargetDate('2030-01-01');
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button 
          onClick={loadPastExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Example 1 — Past Date (Graduation 2001)
        </button>
        <button 
          onClick={loadFutureExample}
          className="px-3.5 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold border border-slate-600 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          Example 2 — Future Date (Retirement 2030)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Age on a Specific Date Calculator
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Age on a Specific Date Calculator – Find Your Age on Any Day
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Sometimes "today" isn't the date you actually need. Maybe you're checking eligibility for an exam, working out someone's age at a past event, or confirming how old you'll be on a future deadline. This tool lets you calculate the exact age on any date you choose — past, present, or future.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age on a Specific Date Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Past or Future</span>
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

            {/* Target Date */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Target Date (Past or Future)
              </label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
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
                    Result: Age on Target Date
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.years} <span className="text-lg font-bold text-slate-600">years</span>, {calculationResult.months} <span className="text-lg font-bold text-slate-600">months</span>, and {calculationResult.days} <span className="text-lg font-bold text-slate-600">days old</span>
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    Total Elapsed: <strong>{calculationResult.totalDays.toLocaleString()} days</strong>
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    Calculated accurately for target date: <strong>{targetDate}</strong>
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

      {/* SECTION: EXAMPLES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example 1 — A Past Date */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight">
              Example 1 — A Past Date
            </h2>
            <p className="text-slate-700 text-sm mt-2">
              Imran was born on 14 February 1985. He wants to know how old he was on 15 June 2001, the day he graduated.
            </p>
            <div className="text-base font-bold text-calcGreen my-2">
              Result: 16 years, 4 months, and 1 day old
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 pt-2">
              <div>1. Enter date of birth – 14 February 1985</div>
              <div>2. Enter the target date – 15 June 2001</div>
              <div>3. Calculate – the tool checks whether his birthday had occurred by that date in each relevant year</div>
              <div>4. Result – 16 completed years, plus 4 months and 1 day since his last birthday</div>
            </div>
          </div>
        </div>

        {/* Example 2 — A Future Date */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight">
              Example 2 — A Future Date
            </h2>
            <p className="text-slate-700 text-sm mt-2">
              Imran also wants to know his age on 1 January 2030, when he plans to apply for early retirement.
            </p>
            <div className="text-base font-bold text-calcGreen my-2">
              Result: 44 years, 10 months, and 18 days old
            </div>
            <p className="text-slate-700 text-xs leading-relaxed pt-2">
              Since his birthday (14 February) won't have occurred yet by 1 January 2030, the calculator counts only 44 completed years rather than a simple 45, then adds the remaining months and days since his most recent birthday (14 February 2029).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: THE FORMULA */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Formula
        </h2>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Age (years) = Target Year − Birth Year</div>
          <div className="text-xs text-slate-600">If the birth month/day hasn't occurred yet by the target date:</div>
          <div className="font-bold text-calcNavy-dark pl-4">Age (years) = Age (years) − 1</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This is the same logic used for calculating age "today" — the only difference is that the target date can be anything you choose, rather than being fixed to the current date.
        </p>
      </section>

      {/* SECTION: COMMON REASONS TO CHECK AGE ON A SPECIFIC DATE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Reasons to Check Age on a Specific Date
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Eligibility cut-offs</strong> – school admissions, exams, competitions, and visa applications often set an age requirement as of a fixed date, not the day you apply
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Historical or genealogical research</strong> – working out how old a relative or historical figure was on a particular date, such as a marriage, immigration, or census record
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Legal and financial planning</strong> – confirming the exact date someone becomes eligible for a pension, benefit, or contract clause tied to a specific age
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Anniversaries and milestones</strong> – checking someone's age on a wedding day, the day a company was founded, or any other meaningful date
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Future planning</strong> – finding out how old you (or someone else) will be on a specific future date, such as a graduation, retirement, or major life event
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: CHECKING YOUR AGE ON A PERSONAL OR CULTURAL OCCASION */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Checking Your Age on a Personal or Cultural Occasion
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          This calculator works just as well for personal milestones and festival dates as it does for formal dates like exams or contracts. A few examples using Imran's birth date (14 February 1985):
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-xs sm:text-sm text-slate-800">
          <div><strong>On his wedding day (20 November 2010):</strong> 25 years, 9 months, 6 days old</div>
          <div><strong>On Christmas Day 2027 (25 December 2027):</strong> 42 years, 10 months, 11 days old</div>
          <div><strong>On Christmas Day 2028 (25 December 2028):</strong> 43 years, 10 months, 11 days old</div>
          <div><strong>On Eid al-Fitr, using an example date of 20 March 2027:</strong> 42 years, 1 month, 6 days old</div>
          <div><strong>On Holi, using an example date of 3 March 2027:</strong> 42 years, 0 months, 17 days old</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Just enter your own date of birth along with the date of the occasion you're curious about — a wedding anniversary, Christmas, Eid, Holi, Diwali, or any other date that matters to you — and the calculator works out your exact age on that day.
        </p>
        <p className="text-slate-600 text-xs italic leading-relaxed">
          A quick note on festival dates: fixed-calendar holidays like Christmas fall on the same date every year, but dates for Eid, Holi, Diwali, and other holidays based on lunar or lunisolar calendars shift from year to year and can vary slightly by region or moon sighting. Always double-check the confirmed date for that year before entering it.
        </p>
      </section>

      {/* SECTION: COMMON REASONS TO CALCULATE AGE ON A SPECIFIC DATE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Reasons to Calculate Age on a Specific Date
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          You may want to calculate age on a particular date when:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Checking your age at graduation</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Finding your age during a historical event</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Calculating age at marriage</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Checking age at the start of a job</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Determining age at a particular birthday</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Finding a child's age on a particular date</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Calculating age at an anniversary</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Checking age on an application date</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Planning a future milestone</span>
          </div>
          <div className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Comparing ages at the same point in time</span>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic pt-1">
          The calculator can handle both past and future dates.
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
              q: "How far into the future can I calculate?",
              a: "There's no practical limit — you can check age on any future date, as far ahead as you'd like to plan for."
            },
            {
              q: "Does this handle historical dates with different calendars?",
              a: "This calculator works with standard Gregorian calendar dates. For historical records using other calendar systems, the date should be converted to the Gregorian equivalent first."
            },
            {
              q: "Is the calculation any different from the regular age calculator?",
              a: "No — it uses the same completed-years logic. The only difference is that you're free to set the comparison date to anything other than today."
            },
            {
              q: "Can I use this for someone else's date of birth, not just my own?",
              a: "Yes. Enter any date of birth and any target date to calculate that person's exact age on that day."
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
