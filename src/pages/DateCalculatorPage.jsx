import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  ArrowRightLeft,
  PlusCircle,
  MinusCircle,
  Clock,
  CheckCircle2,
  CalendarDays,
  Layers
} from 'lucide-react';
import PageHero from '../components/PageHero.jsx';

export default function DateCalculatorPage() {
  const [activeTab, setActiveTab] = useState('difference'); // 'difference' or 'add_subtract'
  
  // Tab 1: Difference Between Two Dates
  const [startDate, setStartDate] = useState('2025-03-15');
  const [endDate, setEndDate] = useState('2026-11-20');

  // Tab 2: Add or Subtract Days
  const [baseDate, setBaseDate] = useState('2026-09-05');
  const [operation, setOperation] = useState('add'); // 'add' or 'subtract'
  const [daysAmount, setDaysAmount] = useState('60');

  const [openFaq, setOpenFaq] = useState(null);

  const monthsNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Mode 1: Difference Calculation
  const differenceResult = useMemo(() => {
    if (!startDate || !endDate) return null;

    const [sY, sM, sD] = startDate.split('-').map(Number);
    const [eY, eM, eD] = endDate.split('-').map(Number);

    let d1 = new Date(sY, sM - 1, sD);
    let d2 = new Date(eY, eM - 1, eD);

    // If user enters earlier date second, handle gracefully as noted in FAQ
    let isReversed = false;
    if (d1 > d2) {
      const temp = d1;
      d1 = d2;
      d2 = temp;
      isReversed = true;
    }

    const tY1 = d1.getFullYear();
    const tM1 = d1.getMonth();
    const tD1 = d1.getDate();

    const tY2 = d2.getFullYear();
    const tM2 = d2.getMonth();
    const tD2 = d2.getDate();

    let years = tY2 - tY1;
    let months = tM2 - tM1;
    let days = tD2 - tD1;

    if (days < 0) {
      const prevMonthLastDay = new Date(tY2, tM2, 0).getDate();
      days += prevMonthLastDay;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const diffMs = d2 - d1;
    const totalDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;

    return {
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      remainingDaysInWeek,
      isReversed
    };
  }, [startDate, endDate]);

  // Mode 2: Add or Subtract Days Calculation
  const addSubtractResult = useMemo(() => {
    if (!baseDate || !daysAmount) return null;

    const [bY, bM, bD] = baseDate.split('-').map(Number);
    const numDays = parseInt(daysAmount, 10);
    if (isNaN(numDays)) return null;

    const target = new Date(bY, bM - 1, bD);
    if (operation === 'add') {
      target.setDate(target.getDate() + numDays);
    } else {
      target.setDate(target.getDate() - numDays);
    }

    const weekday = weekdays[target.getDay()];
    const formattedDate = `${target.getDate()} ${monthsNames[target.getMonth()]} ${target.getFullYear()}`;

    return {
      weekday,
      formattedDate,
      operationText: operation === 'add' ? `${numDays} days after` : `${numDays} days before`,
      resultDateStr: `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(2, '0')}-${String(target.getDate()).padStart(2, '0')}`
    };
  }, [baseDate, operation, daysAmount]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadProjectExample = () => {
    setActiveTab('difference');
    setStartDate('2025-03-15');
    setEndDate('2026-11-20');
  };

  const loadAdd60Days = () => {
    setActiveTab('add_subtract');
    setBaseDate('2026-09-05');
    setOperation('add');
    setDaysAmount('60');
  };

  const loadSub90Days = () => {
    setActiveTab('add_subtract');
    setBaseDate('2026-09-05');
    setOperation('subtract');
    setDaysAmount('90');
  };

  const loadJan15ToApr20 = () => {
    setActiveTab('difference');
    setStartDate('2025-01-15');
    setEndDate('2026-04-20');
  };

  return (
    <div className="w-full">
      <PageHero
        title="Date Calculator – Days Between Dates & Add/Subtract Days"
        description="Calculate the exact difference between any two dates or quickly add/subtract days from a starting calendar date with dual calculation engines."
        badge="Calendar & Date Mathematics"
        badgeIcon={CalendarDays}
        category="Calculators"
        currentPage="Date Calculator"
        features={['Days Between Dates', 'Add & Subtract Days', '100% Free & Private']}
        actions={
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button 
              onClick={loadProjectExample}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Project Diff (15 Mar 2025 → 20 Nov 2026)
            </button>
            <button 
              onClick={loadAdd60Days}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              Today + 60 Days
            </button>
            <button 
              onClick={loadSub90Days}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 shadow-xs transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
              Today − 90 Days
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="border-b border-slate-200 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-calcNavy" />
              <h2 className="text-xl font-bold text-calcNavy-dark">
                Date Difference & Day Addition Calculator
              </h2>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-[#f1f5f9] p-1 rounded-xl border border-slate-200 self-start sm:self-auto">
              <button
                onClick={() => setActiveTab('difference')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'difference'
                    ? 'bg-calcNavy text-white shadow-sm'
                    : 'text-slate-600 hover:text-calcNavy'
                }`}
              >
                Days Between Dates
              </button>
              <button
                onClick={() => setActiveTab('add_subtract')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'add_subtract'
                    ? 'bg-calcNavy text-white shadow-sm'
                    : 'text-slate-600 hover:text-calcNavy'
                }`}
              >
                Add / Subtract Days
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* TAB 1: DIFFERENCE INPUTS */}
            {activeTab === 'difference' ? (
              <>
                <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-calcNavy" />
                      Date Difference Inputs
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Full Calendar</span>
                  </div>

                  {/* Start Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
                    />
                  </div>

                  {/* End Date */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
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
                      Calculate Difference
                    </button>
                  </div>
                </div>

                {/* TAB 1: RESULTS */}
                <div className="lg:col-span-7 space-y-4">
                  {differenceResult ? (
                    <>
                      <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-calcGreen">
                          Calculated Date Difference
                        </div>

                        <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark leading-snug">
                          {differenceResult.years > 0 && `${differenceResult.years} year${differenceResult.years > 1 ? 's' : ''}, `}
                          {differenceResult.months} months, and {differenceResult.days} days
                        </div>

                        <div className="text-sm sm:text-base text-slate-700 font-semibold flex flex-wrap items-center gap-2 pt-1 border-t border-calcGreen-border/50">
                          <span>— or <span className="text-calcNavy font-bold">{differenceResult.totalDays.toLocaleString()} days</span></span>
                          <span>— or <span className="text-calcNavy font-bold">{differenceResult.totalWeeks} weeks and {differenceResult.remainingDaysInWeek} days</span></span>
                        </div>
                      </div>

                      <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 space-y-1.5 text-xs text-slate-700">
                        <div className="font-bold text-calcNavy flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-calcNavy" />
                          Time Span Range
                        </div>
                        <div>From: <strong>{startDate}</strong> to <strong>{endDate}</strong></div>
                        <div>Total Days: <strong>{differenceResult.totalDays.toLocaleString()} days</strong></div>
                      </div>
                    </>
                  ) : (
                    <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      Please enter valid start and end dates.
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* TAB 2: ADD / SUBTRACT INPUTS & RESULTS */
              <>
                <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-calcNavy" />
                      Add / Subtract Inputs
                    </span>
                    <span className="text-xs text-slate-500 font-medium">Calendar Math</span>
                  </div>

                  {/* Base Date */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Starting Date
                    </label>
                    <input
                      type="date"
                      value={baseDate}
                      onChange={(e) => setBaseDate(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
                    />
                  </div>

                  {/* Operation Toggle */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Operation
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setOperation('add')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-colors ${
                          operation === 'add'
                            ? 'bg-calcNavy text-white border-calcNavy'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <PlusCircle className="w-4 h-4" />
                        Add (+)
                      </button>
                      <button
                        type="button"
                        onClick={() => setOperation('subtract')}
                        className={`py-2 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 border transition-colors ${
                          operation === 'subtract'
                            ? 'bg-calcNavy text-white border-calcNavy'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        <MinusCircle className="w-4 h-4" />
                        Subtract (−)
                      </button>
                    </div>
                  </div>

                  {/* Number of Days */}
                  <div className="space-y-1.5 pt-1">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                      Number of Days
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={daysAmount}
                      onChange={(e) => setDaysAmount(e.target.value)}
                      placeholder="e.g. 60"
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* TAB 2: RESULTS */}
                <div className="lg:col-span-7 space-y-4">
                  {addSubtractResult ? (
                    <>
                      <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm space-y-3">
                        <div className="text-xs font-bold uppercase tracking-wider text-calcGreen">
                          Calculated Target Date
                        </div>

                        <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark leading-snug">
                          {addSubtractResult.formattedDate} ({addSubtractResult.weekday})
                        </div>

                        <div className="text-sm sm:text-base text-slate-700 font-semibold pt-1 border-t border-calcGreen-border/50">
                          Result: <span className="text-calcNavy font-bold">{addSubtractResult.operationText}</span> from {baseDate}
                        </div>
                      </div>

                      <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 space-y-1.5 text-xs text-slate-700">
                        <div className="font-bold text-calcNavy flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-calcNavy" />
                          Calculation Summary
                        </div>
                        <div>Base Date: <strong>{baseDate}</strong></div>
                        <div>Operation: <strong>{operation === 'add' ? 'Addition' : 'Subtraction'}</strong></div>
                        <div>Days Amount: <strong>{daysAmount} days</strong></div>
                        <div>ISO Date: <strong>{addSubtractResult.resultDateStr}</strong></div>
                      </div>
                    </>
                  ) : (
                    <div className="p-8 text-center bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      Please enter a valid base date and number of days.
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </section>

      {/* SECTION: FINDING THE DIFFERENCE BETWEEN TWO DATES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Finding the Difference between Two Dates
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Example:</strong> A project started on <strong>15 March 2025</strong> and finished on <strong>20 November 2026</strong>.
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-1 text-sm text-slate-800 font-bold text-calcNavy">
          Result: 1 year, 8 months, and 5 days — or 615 days, or 87 weeks and 6 days
        </div>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1 pt-2">
          <li><strong>Enter the start date</strong> – 15 March 2025</li>
          <li><strong>Enter the end date</strong> – 20 November 2026</li>
          <li><strong>Calculate</strong> – the tool counts the exact number of calendar days between the two dates, then converts that into years, months, weeks, and days</li>
          <li><strong>Result</strong> – 615 total days, expressed as 1 year, 8 months, 5 days</li>
        </ol>
      </section>

      {/* SECTION: ADDING OR SUBTRACTING DAYS FROM A DATE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Adding or Subtracting Days from a Date
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-800">
          <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2">
            <div>
              <strong>Example (adding):</strong> What date falls <strong>60 days after 5 September 2026</strong>?
            </div>
            <div className="font-bold text-calcNavy text-base">
              Result: 4 November 2026
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2">
            <div>
              <strong>Example (subtracting):</strong> What date falls <strong>90 days before 5 September 2026</strong>?
            </div>
            <div className="font-bold text-calcNavy text-base">
              Result: 7 June 2026
            </div>
          </div>
        </div>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1 pt-2">
          <li><strong>Enter the starting date</strong> – 5 September 2026</li>
          <li><strong>Enter the number of days (and whether to add or subtract)</strong> – 60 days forward, or 90 days back</li>
          <li><strong>Calculate</strong> – the tool moves forward or backward through the calendar, accounting for varying month lengths and leap years</li>
          <li><strong>Result</strong> – the exact resulting date</li>
        </ol>
      </section>

      {/* SECTION: THE LOGIC BEHIND IT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Logic behind It
        </h2>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Date Difference = End Date − Start Date, counted as full calendar days</div>
          <div className="font-bold text-calcNavy-dark">New Date = Start Date + N days (or − N days)</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Both calculations rely on the same underlying day-by-day counting used throughout this site's age tools — the difference is simply what the two input date’s represent.
        </p>
      </section>

      {/* SECTION: DATE DURATION CALCULATOR */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Date Duration Calculator
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A <strong>Date Duration Calculator</strong> helps you determine how long a period lasts between two calendar dates.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          For example:
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-xs sm:text-sm text-slate-800">
          <div>
            <strong>Start:</strong> January 15, 2025<br />
            <strong>End:</strong> April 20, 2026
          </div>
          <div className="text-slate-700">
            Instead of manually counting every day, the calculator can determine the duration between these dates.
          </div>
          <div className="pt-1 font-bold text-calcNavy">
            1 year, 3 months, 5 days
          </div>
          <div className="text-xs text-slate-600">
            Or as a total number of days.
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This can be helpful when you need to understand the length of a particular period.
        </p>
      </section>

      {/* SECTION: DATE DIFFERENCE CALCULATOR */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Date Difference Calculator
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A <strong>Date Difference Calculator</strong> is another way to describe a tool that finds the amount of time between two dates.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          The terms <strong>date calculator</strong>, <strong>date difference calculator</strong>, and <strong>days between dates calculator</strong> are often used for similar calculations.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          For example, you might use it to find:
        </p>

        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>The number of days between two birthdays</li>
          <li>The length of a project</li>
          <li>The duration of a vacation</li>
          <li>Time between two appointments</li>
          <li>Days remaining before an event</li>
          <li>The period between two historical dates</li>
          <li>The length of a subscription or membership</li>
        </ul>
      </section>

      {/* SECTION: CALCULATE MONTHS BETWEEN DATES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Calculate Months between Dates
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Calculating months is slightly different from simply dividing the number of days by 30 because months do not all contain the same number of days.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A calendar-based calculation considers the actual months and dates.
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-xs sm:text-sm text-slate-800">
          <div>
            <strong>January 10 → March 10</strong><br />
            Represents exactly: <strong className="text-calcNavy">2 months</strong>
          </div>
          <div className="pt-2 border-t border-slate-200">
            <strong>January 10 → March 5</strong><br />
            is not exactly two calendar months.
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This is why a proper date calculator should consider calendar dates rather than assuming every month has 30 days.
        </p>
      </section>

      {/* SECTION: COMMON USES FOR A DATE CALCULATOR */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Uses for a Date Calculator
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Project and work timelines</strong> – measuring exactly how long a task, project, or contract has run or will run</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Deadlines and due dates</strong> – working out a date a fixed number of days before or after a known date, such as a payment or filing deadline</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Rent, subscriptions, and billing cycles</strong> – finding renewal or due dates that fall a set number of days from a previous one</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Medical and legal follow-ups</strong> – calculating a follow-up appointment or notice period a specific number of days out</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Event planning</strong> – working backward from an event date to figure out when preparations, invitations, or bookings need to happen</div>
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
              q: "Does the date difference include both the start and end date, or just the days between them?",
              a: "It counts the number of full days between the two dates, not an inclusive count of both endpoints — so 1 January to 2 January is 1 day, not 2."
            },
            {
              q: "Can I subtract a larger date from a smaller one?",
              a: "Yes, if you enter the earlier date as the \"end\" date, the result will simply show the same difference — the calculation isn't affected by which date is entered first."
            },
            {
              q: "Does adding or subtracting days account for leap years?",
              a: "Yes. Moving forward or backward through the calendar automatically accounts for any 29 February that falls within the range."
            },
            {
              q: "Can I add months or years instead of just days?",
              a: "Yes — when adding months or years directly (rather than a day count), the calculator keeps the same day-of-month where possible, adjusting only when the target month is shorter (for example, 31 January plus 1 month becomes 28 or 29 February)."
            },
            {
              q: "Is this the same as the age calculator?",
              a: "It uses the same underlying date-counting logic, but this tool is for any two dates or date-plus-duration calculation — not specifically for measuring age from a date of birth."
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
