import React, { useState } from 'react';
import { 
  Cpu, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Calculator,
  UserCheck
} from 'lucide-react';

import PageHero from '../../components/PageHero.jsx';

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does an age calculator calculate age?",
      a: "It compares your date of birth with a selected date and calculates the difference in calendar years, months, and days."
    },
    {
      q: "Does the calculator account for leap years?",
      a: "Yes. Leap years and February 29 are taken into account when performing calendar-based date calculations."
    },
    {
      q: "Can I calculate my age on a past date?",
      a: "Yes. Enter your date of birth and the past date you want to check."
    },
    {
      q: "Can I calculate my age on a future date?",
      a: "Yes. Enter your date of birth and the future date to find your age on that day."
    },
    {
      q: "Why is my age in days different from my age in years?",
      a: "Years and days are different ways of measuring time. Calendar years can contain 365 or 366 days, so simply multiplying years by 365 does not always produce an exact elapsed-day total."
    },
    {
      q: "Does the calculator count the starting date?",
      a: "For date differences, the standard elapsed calculation generally measures the time between dates without counting the starting date as a completed day. Inclusive calculations can count both the start and end dates."
    }
  ];

  return (
    <div className="w-full">
      <PageHero
        title="How It Works – Logic, Math & Methodology"
        description="Every tool on this site is built on the same core principle: comparing two calendar dates precisely with leap-year adjustment and converting the duration into your desired units."
        badge="Calculation Methodology"
        badgeIcon={Cpu}
        category="Information"
        currentPage="How It Works"
        features={['Exact Calendar Logic', 'Leap Year Calibrated', '100% Client-Side Privacy']}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">

      {/* THE CORE PROCESS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <Layers className="w-6 h-6 text-calcNavy" />
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark">The Core Process</h2>
        </div>
        
        <div className="space-y-3">
          <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-3.5">
            <span className="w-7 h-7 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
            <div>
              <strong className="text-slate-900 block text-sm sm:text-base">You provide two dates</strong>
              <span className="text-xs sm:text-sm text-slate-700">Usually a date of birth and a comparison date (today, or any date you choose).</span>
            </div>
          </div>

          <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-3.5">
            <span className="w-7 h-7 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
            <div>
              <strong className="text-slate-900 block text-sm sm:text-base">The tool counts the exact number of calendar days between them</strong>
              <span className="text-xs sm:text-sm text-slate-700">Accounting for the real number of days in every month involved, including any leap years in the range.</span>
            </div>
          </div>

          <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-3.5">
            <span className="w-7 h-7 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
            <div>
              <strong className="text-slate-900 block text-sm sm:text-base">That day count is converted into the result you asked for</strong>
              <span className="text-xs sm:text-sm text-slate-700">Years and months, or a single unit like weeks, hours, or seconds.</span>
            </div>
          </div>

          <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-3.5">
            <span className="w-7 h-7 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
            <div>
              <strong className="text-slate-900 block text-sm sm:text-base">The result is displayed</strong>
              <span className="text-xs sm:text-sm text-slate-700">Broken down clearly, with no rounding unless you're looking at an approximate unit like months.</span>
            </div>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP CALCULATION DETAILS */}
      <div className="space-y-6">
        {/* Step 1 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-calcNavy-dark">Step 1: Counting Completed Years</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Age in years isn't just "current year minus birth year." The calculator checks whether the birth month and day have already occurred in the comparison year:
          </p>
          <div className="p-4 bg-[#f8fafc] border border-slate-200 rounded-xl font-mono text-xs sm:text-sm text-slate-800 space-y-2">
            <div>
              <span className="text-calcNavy font-bold">If the birth month/day has occurred by the comparison date:</span>
              <div className="pl-4 font-bold text-[#4a8505]">Completed Years = Comparison Year − Birth Year</div>
            </div>
            <div className="pt-2 border-t border-slate-200">
              <span className="text-calcNavy font-bold">Else:</span>
              <div className="pl-4 font-bold text-amber-700">Completed Years = Comparison Year − Birth Year − 1</div>
            </div>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            This is why someone can turn a specific age on their birthday but still be counted a year younger right up until that date arrives.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-xl font-bold text-calcNavy-dark">Step 2: Filling In Months and Days</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Once completed years are known, the calculator works out how many full months have passed since the last birthday, then counts any remaining days. This step is where month-length differences matter most — a full month between the 5th of one month and the 5th of the next isn't always the same number of days, so the calculator always counts forward from the actual date rather than assuming a flat 30 days.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-calcNavy-dark">Step 3: Converting to Other Units</h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            For tools that show age in weeks, days, hours, minutes, or seconds, the calculator starts from the total number of calendar days between the two dates and applies a simple multiplier:
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-[#003366] text-white">
                <tr>
                  <th className="py-2.5 px-4 text-left font-bold">Unit</th>
                  <th className="py-2.5 px-4 text-left font-bold">Conversion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 font-semibold text-slate-800">Weeks</td>
                  <td className="py-2.5 px-4 font-mono text-slate-700">Total days ÷ 7</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                  <td className="py-2.5 px-4 font-semibold text-slate-800">Hours</td>
                  <td className="py-2.5 px-4 font-mono text-slate-700">Total days × 24</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="py-2.5 px-4 font-semibold text-slate-800">Minutes</td>
                  <td className="py-2.5 px-4 font-mono text-slate-700">Total days × 1,440</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                  <td className="py-2.5 px-4 font-semibold text-slate-800">Seconds</td>
                  <td className="py-2.5 px-4 font-mono text-slate-700">Total days × 86,400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Because these all come from the same underlying day count, they stay consistent with each other — your age in hours will always match your age in days multiplied by 24, for example.
          </p>
        </div>
      </div>

      {/* WORKED EXAMPLE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Worked Example
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Noah</strong> was born on <strong>5 April 2000</strong>. As of today, <strong>5 September 2026</strong>, here's how his results are built up:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="text-calcNavy font-bold uppercase text-[11px] tracking-wider">Completed Years</div>
            <p>His birthday (5 April) has already passed this year, so 2026 − 2000 = <strong>26 years</strong></p>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="text-calcNavy font-bold uppercase text-[11px] tracking-wider">Remaining Months & Days</div>
            <p>Exactly 5 months have passed since his last birthday, with no leftover days — <strong>26 years, 5 months, 0 days</strong></p>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="text-calcNavy font-bold uppercase text-[11px] tracking-wider">Total Days Lived</div>
            <p className="text-base font-bold text-calcGreen-dark">9,649 days</p>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="text-calcNavy font-bold uppercase text-[11px] tracking-wider">Converted Units</div>
            <p className="font-mono text-xs">1,378 weeks and 3 days · 231,576 hours · 13,894,560 minutes · 833,673,600 seconds</p>
          </div>
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Every figure above is derived from that same 9,649-day count — just expressed differently depending on what you need.
        </p>
      </section>

      {/* HOW LEAP YEARS ARE HANDLED */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-xl font-bold text-calcNavy-dark">How Leap Years Are Handled</h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          Rather than estimating a year as exactly 365 days, the calculator counts actual calendar dates, so any 29 February that falls within the range you're calculating is automatically included in the day count. This is also how the calculator correctly handles birthdays on 29 February itself, treating them consistently even in non-leap years.
        </p>
      </section>

      {/* WHY THIS MATTERS & WHY USE OUR CALCULATORS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Why This Matters */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-calcNavy-dark border-b border-slate-200 pb-3">
            Why This Matters
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            A lot of{' '}
            <a 
              href="http://agecalculator.today/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors"
            >
              simple age calculators
            </a>{' '}
            estimate using rough averages — 30 days per month, 365.25 days per year — which can be off by several days depending on the exact dates involved. Every tool on this site instead works from real calendar dates, so whether you're checking your age in seconds or checking eligibility against a specific cutoff date, the result is exact, not approximate.
          </p>
        </div>

        {/* Why Use Our Calculators */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 className="text-xl font-bold text-calcNavy-dark border-b border-slate-200 pb-3">
            Why Use Our Calculators?
          </h3>
          <p className="text-slate-700 text-xs font-semibold uppercase tracking-wider">Our calculators are designed to provide:</p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Simple date inputs</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Quick calculations</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Easy-to-understand results</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Multiple age and date formats</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Support for past and future dates</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>Calculations that account for calendar differences</span>
            </li>
          </ul>
          <p className="text-slate-600 text-xs pt-2 border-t border-slate-100">
            Whether you want to calculate your age, find the days between two dates, or check an upcoming birthday, our tools help you complete the calculation without doing it manually.
          </p>
        </div>
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 bg-[#f8fafc] hover:bg-slate-100 font-bold text-slate-800 text-sm sm:text-base flex items-center justify-between gap-4 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-4 h-4 text-calcNavy shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="p-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200">
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
