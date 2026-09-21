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

export default function AgeInWeeksPage() {
  const [birthDate, setBirthDate] = useState('2015-06-03');
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Age in Weeks calculation logic matching the document
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
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

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
      totalWeeks,
      remainingDays,
      years,
      months,
      days
    };
  }, [birthDate, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadFatimaExample = () => {
    setBirthDate('2015-06-03');
    setCompareDate('2026-09-05');
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  return (
    <div className="w-full">
      <PageHero
        title="Age in Weeks Calculator – How Many Weeks Old Are You?"
        description="Convert any date of birth into total completed weeks and remaining days. Perfect for baby growth tracking, pediatric milestones, fitness plans, and life progress."
        badge="Age in Weeks"
        badgeIcon={Calendar}
        category="Calculators"
        currentPage="Age in Weeks"
        features={['Total Weeks & Days', 'Weeks of Life Chart', '100% Free & Private']}
        actions={
          <button 
            onClick={loadFatimaExample}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Load Fatima's Example (2015 → 2026)
          </button>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age in Weeks Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Exact Weeks & Days</span>
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
                  Calculation Date
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
                    Completed Age in Weeks
                  </div>
                  <div className="text-3xl sm:text-5xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.totalWeeks.toLocaleString()} <span className="text-xl font-bold text-slate-600">weeks</span> {calculationResult.remainingDays > 0 && <span className="text-xl font-semibold text-slate-600">and {calculationResult.remainingDays} days</span>}
                  </div>
                  <div className="text-sm text-slate-700 font-medium pt-1">
                    Total Days Lived: <strong>{calculationResult.totalDays.toLocaleString()} days</strong>
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                  <CalendarCheck className="w-6 h-6 text-calcNavy shrink-0" />
                  <div className="text-xs text-slate-700">
                    Full calendar breakdown: <strong>{calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days old</strong>
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
            Fatima was born on 3 June 2015. As of today, 5 September 2026, she is 11 years, 3 months, and 2 days old — a total of 4,112 days.
          </p>
          <p className="text-slate-700 text-sm font-semibold pt-1">
            Converted into weeks:
          </p>
          <div className="text-lg font-bold text-calcGreen my-1">
            587 weeks and 3 days
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's how that's worked out:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter date of birth</strong> – 3 June 2015
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
                <strong className="text-calcNavy-dark">Calculate</strong> – the tool finds the total number of days lived (4,112) and divides by 7
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">Result</strong> – 4,112 ÷ 7 = 587 weeks, with 3 days left over
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
          <div className="font-bold text-calcNavy-dark">Total Weeks = Total Days Lived ÷ 7</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Since 7 doesn't divide evenly into most day counts, the calculator shows the leftover days separately (as above: 587 weeks, 3 days) rather than rounding, so the figure stays exact.
        </p>
      </section>

      {/* SECTION: HOW TO CALCULATE YOUR AGE IN WEEKS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            How to Calculate Your Age in Weeks
          </h2>
          <p className="text-slate-700 text-sm mt-1">
            You can calculate your age in weeks in just a few steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 1
            </div>
            <h3 className="font-bold text-calcNavy-dark">Enter Your Date of Birth</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select the day, month, and year you were born.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 2
            </div>
            <h3 className="font-bold text-calcNavy-dark">Choose the Calculation Date</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              You can use today's date or select another date. This allows you to calculate how many weeks old you were in the past or how many weeks old you will be on a future date.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 3
            </div>
            <h3 className="font-bold text-calcNavy-dark">Calculate Your Age</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Click the calculate button to determine the elapsed time.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 4
            </div>
            <h3 className="font-bold text-calcNavy-dark">Check Your Result</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              The calculator will show your age in weeks and may also provide the remaining days and other age measurements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: DAYS IN A WEEK & WEEKS IN A YEAR */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* How Many Days Are in a Week? */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight">
            How Many Days Are in a Week?
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm">
            There are exactly 7 days in one week.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm font-semibold">
            That means:
          </p>
          <ul className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 1 week = 7 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 2 weeks = 14 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 3 weeks = 21 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 4 weeks = 28 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 10 weeks = 70 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium">* 20 weeks = 140 days</li>
            <li className="p-2 bg-[#f8fafc] border border-slate-200 rounded font-medium col-span-2 text-center">* 50 weeks = 350 days</li>
          </ul>
        </div>

        {/* How Many Weeks Are in a Year? */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight">
            How Many Weeks Are in a Year?
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            A normal calendar year contains 365 days.
          </p>
          <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg font-mono text-xs sm:text-sm text-calcNavy-dark font-bold">
            Since one week contains seven days:<br/>
            365 ÷ 7 = 52 weeks and 1 day
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
            A leap year contains 366 days:
          </p>
          <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg font-mono text-xs sm:text-sm text-calcNavy-dark font-bold">
            366 ÷ 7 = 52 weeks and 2 days
          </div>
        </div>
      </section>

      {/* SECTION: WHY TRACK AGE IN WEEKS? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Track Age in Weeks?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Weeks strike a balance that months and years can't — precise enough for close tracking, but still an easy number to work with day to day:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Baby and infant milestones</strong> – pediatric growth charts, feeding schedules, and developmental milestones (like a 6-week checkup or 12-week scan) are usually framed in weeks, not months
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Pregnancy tracking</strong> – due dates and prenatal milestones are almost always measured in weeks rather than months
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Short-term planning</strong> – weeks are a natural unit for scheduling recovery time, training programs, or countdowns to an event
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>A middle-ground milestone number</strong> – large enough to feel meaningful, but nowhere near as overwhelming as a total day or hour count
            </div>
          </li>
        </ul>
      </section>

      {/* SECTION: WEEK MILESTONES WORTH KNOWING */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Week Milestones Worth Knowing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>52 weeks</strong> ≈ 1 year old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>104 weeks</strong> ≈ 2 years old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>260 weeks</strong> ≈ 5 years old</div>
          </div>
          <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <div><strong>520 weeks</strong> ≈ 10 years old</div>
          </div>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic pt-1">
          These rounded markers are a handy way to sanity-check a calculated age or explain a child's age to someone more familiar with weeks than years.
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
              q: "Why would I want my age in weeks instead of months?",
              a: "Weeks are a fixed length (always 7 days), while months vary between 28 and 31 days. For anything time-sensitive — like tracking a baby's development or counting down to an event — weeks give a more consistent unit than months."
            },
            {
              q: "How accurate is the weeks calculation?",
              a: "It's based on the exact number of calendar days between your two chosen dates, so it accounts for leap years and varying month lengths automatically."
            },
            {
              q: "Can I calculate age in weeks for a due date or future date?",
              a: "Yes. Enter a birth date (or expected due date) and any comparison date, past or future, to see the age or countdown in weeks."
            },
            {
              q: "What happens to the leftover days that don't make a full week?",
              a: "They're shown alongside the week count (for example, \"587 weeks, 3 days\") rather than rounded off, so you get the exact figure."
            },
            {
              q: "Is age in weeks used for anything beyond babies?",
              a: "Yes — it's also common in medical contexts (recovery timelines, treatment schedules), fitness and training plans, and any situation where short, consistent time blocks are more useful than months or years."
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
