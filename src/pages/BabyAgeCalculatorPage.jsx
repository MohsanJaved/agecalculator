import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  Baby,
  Clock,
  CheckCircle2,
  CalendarDays,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';

export default function BabyAgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState('2026-05-10');
  const [calcDate, setCalcDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  const calculationResult = useMemo(() => {
    if (!birthDate || !calcDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = calcDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const calc = new Date(cY, cM - 1, cD);

    if (birth > calc) {
      return { isInvalid: true, message: 'Birth date cannot be after the calculation date.' };
    }

    // Exact years, months, days
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

    const totalMonths = years * 12 + months;

    // Total days calculation
    const diffMs = calc - birth;
    const totalDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;

    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    return {
      isInvalid: false,
      years,
      months,
      days,
      totalMonths,
      totalDays,
      totalWeeks,
      remainingDaysInWeek,
      totalHours,
      totalMinutes,
      totalSeconds
    };
  }, [birthDate, calcDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadZayanExample = () => {
    setBirthDate('2026-05-10');
    setCalcDate('2026-09-05');
  };

  const loadFeb5ToMay5 = () => {
    setBirthDate('2026-02-05');
    setCalcDate('2026-05-05');
  };

  const loadFeb5ToMay15 = () => {
    setBirthDate('2026-02-05');
    setCalcDate('2026-05-15');
  };

  return (
    <div className="w-full">
      <PageHero
        title="Baby Age Calculator – Track Baby's Age in Weeks & Months"
        description="Track infant development, pediatric growth charts, feeding schedules, and upcoming vaccination milestones with exact day, week, and month precision."
        badge="Pediatric & Infant Milestones"
        badgeIcon={Baby}
        category="Calculators"
        currentPage="Baby Age Calculator"
        features={['Exact Weeks & Months', 'Pediatric Milestone Tracker', '100% Free & Private']}
        actions={
          <>
            <button 
              onClick={loadZayanExample}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Load Zayan's Example (10 May 2026)
            </button>
            <button 
              onClick={loadFeb5ToMay5}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              5 Feb → 5 May (3 months)
            </button>
          </>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Baby className="w-5 h-5 text-calcNavy" />
            Baby Age Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Months, Weeks & Days</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Baby's Details
              </span>
              <span className="text-xs text-slate-500 font-medium">Chronological</span>
            </div>

            {/* Birth Date */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Baby's Date of Birth
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Calculation Date Reference */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Calculation Date (Today or Specific Date)
              </label>
              <input
                type="date"
                value={calcDate}
                onChange={(e) => setCalcDate(e.target.value)}
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
                Calculate Baby Age
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Result */}
                <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-calcGreen">
                    Exact Baby Age Result
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark leading-snug">
                    {calculationResult.years > 0 ? `${calculationResult.years} year${calculationResult.years > 1 ? 's' : ''} ` : ''}
                    {calculationResult.months > 0 || calculationResult.years > 0 ? `${calculationResult.totalMonths} months and ` : ''}
                    {calculationResult.days} days old
                  </div>

                  <div className="text-sm sm:text-base text-slate-700 font-semibold flex flex-wrap items-center gap-2 pt-1 border-t border-calcGreen-border/50">
                    <span>— or <span className="text-calcNavy font-bold">{calculationResult.totalWeeks} weeks, {calculationResult.remainingDaysInWeek} days</span></span>
                    <span>— or <span className="text-calcNavy font-bold">{calculationResult.totalDays} days old</span></span>
                  </div>
                </div>

                {/* Total Units Breakdown Grid */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2.5">
                  <div className="text-xs font-bold text-calcNavy uppercase tracking-wide">
                    Total Time Elapsed
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Months</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalMonths} mos, {calculationResult.days} d
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Weeks</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalWeeks} wks, {calculationResult.remainingDaysInWeek} d
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Total Days</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalDays.toLocaleString()} days
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Hours</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalHours.toLocaleString()} hrs
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Minutes</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalMinutes.toLocaleString()} mins
                      </div>
                    </div>
                    <div className="bg-[#f8fafc] border border-slate-200 p-2.5 rounded-lg text-center">
                      <div className="text-slate-500 font-medium">Seconds</div>
                      <div className="text-sm font-bold text-calcNavy mt-0.5">
                        {calculationResult.totalSeconds.toLocaleString()} secs
                      </div>
                    </div>
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

      {/* SECTION: EXAMPLE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Example
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Zayan</strong> was born on <strong>10 May 2026</strong>. As of today, <strong>5 September 2026</strong>, he is:
        </p>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-1 text-sm text-slate-800 font-medium">
          <div className="font-bold text-calcNavy-dark text-base">
            3 months and 26 days old — or 16 weeks, 6 days — or 118 days old
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm font-medium pt-2">
          It can also provide the total number of:
        </p>
        <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>Months</li>
          <li>Weeks</li>
          <li>Days</li>
          <li>Hours</li>
          <li>Minutes</li>
          <li>Seconds</li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm font-semibold pt-2">
          Here's how it's worked out:
        </p>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1">
          <li><strong>Enter date of birth</strong> – 10 May 2026</li>
          <li><strong>Enter today's date</strong> – 5 September 2026 (or leave it as today by default)</li>
          <li><strong>Calculate</strong> – the tool counts the exact number of days since birth (118), then converts that into months, weeks, or days depending on what's most useful</li>
          <li><strong>Result</strong> – 3 months, 26 days (still short of the 4-month mark), equal to 16 weeks and 6 days, or 118 days total</li>
        </ol>
      </section>

      {/* SECTION: HOW OLD IS MY BABY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Old Is My Baby?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your baby's exact age depends on their date of birth and the date you're calculating against.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-medium">
          For example:
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-3 text-xs sm:text-sm text-slate-800">
          <div>
            <strong>Birth date:</strong> February 5, 2026<br />
            <strong>Calculation date:</strong> May 5, 2026
          </div>
          <div>
            Your baby is: <strong className="text-calcNavy-dark">3 months old</strong>
          </div>
          <div className="pt-1 border-t border-slate-200">
            If the calculation date is May 15, the result is: <strong className="text-calcNavy-dark">3 months and 10 days old</strong>
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This is more precise than simply saying the baby is three months old.
        </p>
      </section>

      {/* SECTION: BABY AGE CALCULATOR FOR 1-YEAR-OLDS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Baby Age Calculator for 1-Year-Olds
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Once a baby reaches their first birthday, their age is generally expressed in years.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-medium">
          For example:
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-1.5 font-mono text-xs sm:text-sm text-slate-800">
          <div>12 months = 1 year</div>
          <div>15 months = 1 year 3 months</div>
          <div>18 months = 1 year 6 months</div>
          <div>21 months = 1 year 9 months</div>
          <div>24 months = 2 years</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The calculator can help convert between these age descriptions using the baby's actual birth date.
        </p>
      </section>

      {/* SECTION: WHY BABY AGE IS MEASURED DIFFERENTLY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Baby Age Is Measured Differently
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Unlike adult age, which is almost always expressed in completed years, a baby's age is usually given in:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Weeks</strong> – for newborns and infants under 2–3 months, especially around checkups and feeding schedules</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Months</strong> – from a few weeks old up to around age 2, matching how pediatric milestones and vaccination schedules are typically listed</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Days</strong> – often used in the very first days and weeks, especially in hospital and neonatal settings</div>
          </li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This calculator gives all three at once, so parents can use whichever unit matches what a doctor, form, or milestone chart is asking for.
        </p>
      </section>

      {/* SECTION: COMMON MILESTONES BY AGE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Milestones by Age
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-calcNavy" />
              6 weeks
            </div>
            <div className="text-slate-600">typical postnatal checkup for both baby and mother</div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-calcNavy" />
              2 months
            </div>
            <div className="text-slate-600">first major round of vaccinations in many countries</div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-calcNavy" />
              4 months
            </div>
            <div className="text-slate-600">common milestone for check-ups and early developmental screening</div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-calcNavy" />
              6 months
            </div>
            <div className="text-slate-600">often when solid foods are introduced</div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-calcNavy" />
              9 months
            </div>
            <div className="text-slate-600">another standard developmental checkpoint</div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl space-y-1">
            <div className="font-bold text-calcNavy flex items-center gap-2">
              <Baby className="w-4 h-4 text-calcNavy" />
              12 months (1 year)
            </div>
            <div className="text-slate-600">first birthday, and the point where age typically switches to being tracked in years</div>
          </div>
        </div>
      </section>

      {/* SECTION: A NOTE ON PREMATURE BABIES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          A Note on Premature Babies
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          For babies born prematurely, doctors often use a "corrected age" (also called adjusted age) rather than the age since actual birth, especially for the first two years. Corrected age accounts for how many weeks early the baby was born, and is generally more accurate for tracking developmental milestones. <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">This calculator shows chronological age</a> (time since actual birth) — for corrected age, subtract the number of weeks premature from the result shown here.
        </p>
      </section>

      {/* SECTION: CALCULATE YOUR BABY'S AGE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Calculate Your Baby's Age
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Knowing exactly how old your baby is can be useful during the first months and years, when age is often described in days, weeks, and months.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Use our free <strong>Baby Age Calculator</strong> to calculate your baby's chronological age from their date of birth. Find out how many months, weeks, or days have passed, or check your baby's age on a specific date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Enter your baby's date of birth and calculate their exact age today.
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
              q: "Why does my baby's age show in months and weeks instead of just months?",
              a: "Because months vary in length and weeks don't divide evenly into a month, both figures are shown so you can match whichever unit your doctor, form, or milestone chart uses."
            },
            {
              q: "What's the difference between chronological age and corrected age?",
              a: "Chronological age is the time since the actual birth date, which is what this calculator shows. Corrected age adjusts for premature birth and is typically used by pediatricians for babies born early, up until around age 2."
            },
            {
              q: "Until what age should I use a baby age calculator instead of a regular one?",
              a: "There's no strict cutoff, but most parents switch to tracking age in years once a child turns 2–3, since milestones and forms typically shift to yearly tracking around that point."
            },
            {
              q: "Can I calculate my baby's age on a specific future date, like an upcoming vaccination appointment?",
              a: "Yes. Enter the date of birth and the specific date you want to check, and the calculator will show the exact age — in months, weeks, or days — on that day."
            },
            {
              q: "Does this account for the exact number of days in each month?",
              a: "Yes. Rather than estimating months as a flat 30 days, the calculator counts actual calendar days and works out completed months and weeks precisely."
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
