import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  CheckCircle2, 
  Sparkles,
  Baby,
  Activity,
  CalendarCheck
} from 'lucide-react';

export default function HomePage() {
  // Calculator states
  const [birthDate, setBirthDate] = useState('1997-10-13');
  const [birthTime, setBirthTime] = useState('00:00');
  const [hasBirthTime, setHasBirthTime] = useState(false);
  const [compareDate, setCompareDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  // Accurate Calculation Logic according to the document
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
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDaysInWeek = totalDays % 7;

    // Years, Months, Days logic
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

    const approxTotalMonths = Math.floor(totalDays / 30.4375);

    // Next Birthday calculation
    let nextBdayYear = cY;
    let nextBday = new Date(nextBdayYear, bM - 1, bD);
    const compareDateOnly = new Date(cY, cM - 1, cD);

    if (nextBday < compareDateOnly) {
      nextBdayYear += 1;
      nextBday = new Date(nextBdayYear, bM - 1, bD);
    }

    const nextBdayDiffMs = nextBday - compareDateOnly;
    const nextBdayDays = Math.ceil(nextBdayDiffMs / (1000 * 60 * 60 * 24));
    const nextBdayWeeks = Math.floor(nextBdayDays / 7);
    const nextBdayWeekday = nextBday.toLocaleDateString('en-US', { weekday: 'long' });
    const nextBdayFormatted = nextBday.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
    const turningAge = nextBdayYear - bY;

    return {
      isInvalid: false,
      years,
      months,
      days,
      totalMonths: approxTotalMonths,
      totalWeeks,
      remainingDaysInWeek,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds,
      nextBdayFormatted,
      nextBdayDays,
      nextBdayWeeks,
      nextBdayWeekday,
      turningAge
    };
  }, [birthDate, birthTime, hasBirthTime, compareDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadJohnExample = () => {
    setBirthDate('1997-10-13');
    setCompareDate('2026-09-05');
    setHasBirthTime(false);
  };

  const setTodayCompareDate = () => {
    const today = new Date().toISOString().split('T')[0];
    setCompareDate(today);
  };

  return (
    <div className="space-y-12">
      {/* Top Banner with Quick Example Button */}
      <div className="flex justify-end">
        <button 
          onClick={loadJohnExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load John's Example (Doc Example)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Title: Age Calculator – Find Your Exact Age in Years, Months & Days
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Age Calculator – Find Out Exactly How Old You Are
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Calculate your exact age from your date of birth. Enter your birth date and today's date to find your age in years, months, and days. You can also see your total age in weeks, days, hours, minutes, and seconds, along with the date of your next birthday.
        </p>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-1">
          Ever wondered exactly how old you are—not just in years, but in months, days, or even seconds? Our free online age calculator gives you an instant, accurate answer. Just enter your date of birth and the date you want to calculate your age on, and the calculator does the rest.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Calculator className="w-5 h-5 text-calcNavy" />
            Age Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Free & Precise</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Date Input
              </span>
              <span className="text-xs text-slate-500 font-medium">Step 1 & 2</span>
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
                  Date to Compare
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

            {/* Signature Calculator.net Green Calculate Button */}
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
                {/* Primary Result Box */}
                <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-calcGreen mb-1 flex items-center justify-between">
                    <span>Exact Age Result</span>
                    <span className="text-[11px] font-normal text-slate-500">Step 3 & 4</span>
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-calcNavy-dark my-2">
                    {calculationResult.years} <span className="text-sm font-semibold text-slate-600">years</span>, {calculationResult.months} <span className="text-sm font-semibold text-slate-600">months</span>, {calculationResult.days} <span className="text-sm font-semibold text-slate-600">days</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center mt-3 pt-3 border-t border-calcGreen-border/60">
                    <div className="bg-white/80 border border-calcGreen-border/80 rounded p-2">
                      <div className="text-xl sm:text-2xl font-black text-calcGreen">
                        {calculationResult.years}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 uppercase">Years</div>
                    </div>
                    <div className="bg-white/80 border border-calcGreen-border/80 rounded p-2">
                      <div className="text-xl sm:text-2xl font-black text-calcGreen">
                        {calculationResult.months}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 uppercase">Months</div>
                    </div>
                    <div className="bg-white/80 border border-calcGreen-border/80 rounded p-2">
                      <div className="text-xl sm:text-2xl font-black text-calcGreen">
                        {calculationResult.days}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 uppercase">Days</div>
                    </div>
                  </div>
                </div>

                {/* Next Birthday Box */}
                <div className="bg-calcBlue-light border border-blue-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-calcBlue text-white flex items-center justify-center shrink-0">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-calcNavy-dark">Next Birthday</div>
                      <div className="text-xs text-slate-600">
                        {calculationResult.nextBdayFormatted} (in {calculationResult.nextBdayDays} days, turning {calculationResult.turningAge})
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-calcNavy bg-white px-3 py-1 rounded border border-blue-200 shadow-sm shrink-0">
                    Falls on a {calculationResult.nextBdayWeekday}
                  </div>
                </div>

                {/* Time Units Breakdown Table */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Months</div>
                    <div className="text-base font-bold text-calcNavy-dark">
                      ~{calculationResult.totalMonths.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Weeks</div>
                    <div className="text-base font-bold text-calcNavy-dark">
                      {calculationResult.totalWeeks.toLocaleString()} w, {calculationResult.remainingDaysInWeek} d
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Days</div>
                    <div className="text-base font-bold text-calcNavy-dark">
                      {calculationResult.totalDays.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Hours</div>
                    <div className="text-base font-bold text-calcNavy-dark font-mono">
                      {calculationResult.totalHours.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Minutes</div>
                    <div className="text-base font-bold text-calcNavy-dark font-mono">
                      {calculationResult.totalMinutes.toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 p-3 rounded-lg">
                    <div className="text-[11px] font-medium text-slate-500">Total Seconds</div>
                    <div className="text-base font-bold text-calcNavy-dark font-mono">
                      {calculationResult.totalSeconds.toLocaleString()}
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

      {/* SECTION: HOW IT WORKS — A QUICK EXAMPLE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            How It Works — A Quick Example
          </h2>
          <p className="text-slate-700 text-sm mt-2">
            Let's say John was born on 13 October 1997, and he wants to know his exact age today, 5 September 2026.
          </p>
        </div>

        <div className="space-y-3 text-sm text-slate-700">
          <p className="font-bold text-slate-800">Here's what he does:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-calcNavy-dark">Enter your date of birth</strong>—John selects Day: 13, Month: October, Year: 1997, either by typing the numbers or picking the date from the calendar.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-calcNavy-dark">Enter the current date</strong>—John selects (or the calculator auto-fills) today's date: 5 September 2026. He can also pick a past or future date instead if he wants his age on a different day.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-calcNavy-dark">Click Calculate Age</strong>—The tool instantly compares the two dates.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-slate-200 flex gap-3">
              <span className="w-6 h-6 rounded bg-calcNavy text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-calcNavy-dark">See the results:</strong>
              </div>
            </div>
          </div>
        </div>

        {/* John's Result Table */}
        <div className="overflow-hidden border border-slate-300 rounded-lg shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-300 bg-calcNavy-subtle text-calcNavy-dark font-bold text-xs uppercase tracking-wider">
                <th className="py-2.5 px-4 sm:px-6">Unit</th>
                <th className="py-2.5 px-4 sm:px-6">John's Age</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800 text-xs sm:text-sm">
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-semibold text-calcNavy-dark">Years, Months & Days</td>
                <td className="py-2.5 px-4 sm:px-6 text-calcGreen font-bold">28 years, 10 months, 23 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Months</td>
                <td className="py-2.5 px-4 sm:px-6">~346 months</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Weeks</td>
                <td className="py-2.5 px-4 sm:px-6">1,507 weeks, 5 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Days</td>
                <td className="py-2.5 px-4 sm:px-6">10,554 days</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Hours</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">253,296 hours</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Minutes</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">15,197,760 minutes</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-white">
                <td className="py-2.5 px-4 sm:px-6 font-medium text-slate-700">Total Seconds</td>
                <td className="py-2.5 px-4 sm:px-6 font-mono">911,865,600 seconds</td>
              </tr>
              <tr className="hover:bg-slate-50 bg-[#f8fafc]">
                <td className="py-2.5 px-4 sm:px-6 font-semibold text-calcNavy-dark">Next Birthday</td>
                <td className="py-2.5 px-4 sm:px-6 text-calcBlue font-bold">13 October 2026 (in 38 days, turning 29)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm italic">
          That's it—no manual counting, no confusing math with leap years or uneven month lengths. Just type in a birth date and get a precise answer in seconds.
        </p>
      </section>

      {/* SECTION: WHAT IS AN AGE CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            What Is an Age Calculator?
          </h2>
          <p className="text-slate-700 text-sm mt-2 leading-relaxed">
            An age calculator is a simple online tool that works out the exact amount of time between your date of birth and any chosen date. Instead of counting years, months, and days by hand—and getting tripped up by leap years or months with different lengths—you enter your birth date once and get a precise breakdown instantly.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800">You can use it to answer questions like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How old am I exactly?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How many days old am I?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"How old will I be on a future date?"</span>
            </div>
            <div className="p-3 rounded-lg bg-[#f8fafc] border border-slate-200 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
              <span>"When is my next birthday, and how many days away is it?"</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW TO CALCULATE YOUR AGE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            How to Calculate Your Age
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 1
            </div>
            <h3 className="font-bold text-calcNavy-dark">Enter Your Date of Birth</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select your day, month, and year of birth, or pick it from the calendar picker.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 2
            </div>
            <h3 className="font-bold text-calcNavy-dark">Choose the Date to Compare</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Use today's date by default, or select a past or future date to find out how old you were or will be then.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 3
            </div>
            <h3 className="font-bold text-calcNavy-dark">Click Calculate Age</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Click Calculate Age to see your exact age in years, months, and days.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2">
            <div className="inline-block px-2 py-0.5 rounded bg-calcNavy text-white text-xs font-bold">
              Step 4
            </div>
            <h3 className="font-bold text-calcNavy-dark">Explore the Extra Details</h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Scroll down to see your age converted into total weeks, days, hours, minutes, and seconds—plus the date of your next birthday.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: WHAT CAN YOU CALCULATE WITH THIS TOOL? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            What Can You Calculate With This Tool?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Exact Age</div>
            <p className="text-slate-600 text-xs">your age in years, months, and days based on your date of birth</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Years</div>
            <p className="text-slate-600 text-xs">your current completed age</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Months</div>
            <p className="text-slate-600 text-xs">approximately how many months you've been alive</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Weeks</div>
            <p className="text-slate-600 text-xs">the number of weeks since you were born</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Days</div>
            <p className="text-slate-600 text-xs">the total number of days since your birth date</p>
          </div>
          <div className="p-4 rounded-lg bg-[#f8fafc] border border-slate-200 space-y-1">
            <div className="font-bold text-calcNavy">Age in Hours, Minutes & Seconds</div>
            <p className="text-slate-600 text-xs">for the curious, your age is broken down into smaller units of time.</p>
          </div>
        </div>
      </section>

      {/* SECTION: THE FORMULA BEHIND THE CALCULATION */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            The Formula Behind the Calculation
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-slate-800">Suppose:</h3>
            <div className="text-xs text-slate-700 font-mono bg-[#f8fafc] p-3 rounded-lg border border-slate-200 inline-block">
              Born: 1 January 2000<br/>
              Today: 6 September 2026
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-bold text-slate-800">The calculator does this:</p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-700">
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">1. Count years:</span> 2000 → 2026 = 26 years
              </div>
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">2. Count remaining months:</span> January → September = 8 months
              </div>
              <div className="p-2.5 bg-[#f8fafc] rounded-lg border border-slate-200">
                <span className="font-bold text-calcNavy">3. Count remaining days:</span> 1 September → 6 September = 5 days
              </div>
            </div>
            <p className="text-sm font-bold text-calcGreen pt-1">
              So the age is: 26 years, 8 months, 5 days
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 space-y-4">
            <h3 className="text-base font-bold text-calcNavy-dark">How minutes and seconds work</h3>
            <p className="text-slate-700 text-xs sm:text-sm">
              The calculator first finds the total difference in time.
            </p>
            
            <div className="space-y-1 text-xs text-slate-800 font-mono bg-[#f8fafc] p-3.5 rounded-lg border border-slate-200">
              <div className="text-slate-600 font-sans font-bold text-xs mb-1">The basic conversions are:</div>
              <div>* 1 minute = 60 seconds</div>
              <div>* 1 hour = 60 minutes = 3,600 seconds</div>
              <div>* 1 day = 24 hours = 1,440 minutes = 86,400 seconds</div>
            </div>

            <div className="text-xs sm:text-sm text-slate-700 space-y-2">
              <p>So if someone was born at 10:00 AM and the current time is 11:00 AM:</p>
              <p className="font-mono text-calcNavy text-xs bg-calcBlue-light p-2.5 rounded-lg border border-blue-200">
                1 hour = 60 minutes = 3,600 seconds
              </p>
              <p>For a complete age calculation, the calculator compares:</p>
              <p className="font-mono text-calcNavy text-xs bg-calcBlue-light p-2.5 rounded-lg border border-blue-200">
                Birth date + birth time → Current date + current time
              </p>
              <p>and calculates the difference.</p>
            </div>

            <div className="p-4 rounded-xl bg-calcBlue-light border border-blue-200 space-y-2">
              <h4 className="text-sm font-bold text-calcNavy-dark">The important part</h4>
              <p className="text-xs sm:text-sm text-slate-700">
                It doesn't assume every year has 365 days. It checks whether there are leap years:
              </p>
              <div className="text-xs font-mono text-slate-800 space-y-0.5 pl-2">
                <div>Normal year = 365 days</div>
                <div>Leap year = 366 days</div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 pt-1">
                That's why a proper age calculator can accurately calculate:
              </p>
              <div className="font-bold text-calcNavy-dark text-xs sm:text-sm bg-white px-3 py-1.5 rounded border border-blue-200 inline-block">
                26 Years, 8 Months, 5 Days, 3 Hours, 20 Minutes, 15 Seconds
              </div>
              <p className="text-xs text-slate-600 pt-1">
                The seconds keep changing because the calculator compares the current time with the exact birth time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WORKED EXAMPLES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Worked Examples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 1—Age in the Past</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                Someone born on 10 March 1995 wants to know their age on 1 January 2020. Since their birthday (10 March) hadn't occurred yet by 1 January, their completed age is <strong>24 years, 9 months, and 22 days</strong>.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 2 — Age on a Future Date</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                Someone born on 5 June 2000 wants to know how old they'll be on 1 January 2030. Their birthday for that year (5 June) hasn't occurred yet by 1 January, so they'll be <strong>29 years, 6 months, and 27 days</strong> old on that date.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#f8fafc] border border-slate-200 space-y-2 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-calcNavy-dark text-base">Example 3—Baby Age in Weeks</h3>
              <p className="text-slate-700 text-xs sm:text-sm mt-2 leading-relaxed">
                A baby born on 1 March 2026 is, as of 5 September 2026, <strong>6 months and 4 days old</strong>—or, expressed differently, about <strong>27 weeks old</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BIRTHDAY & DATE CALCULATOR FEATURES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Birthday Calculator */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Birthday Calculator
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm">
            Want to know exactly when your next birthday falls? Enter your date of birth, and this tool tells you:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>The date of your next birthday</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>The day of the week it falls on</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Your age on that birthday</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>How many days and weeks remain until it arrives</span>
            </li>
          </ul>
        </div>

        {/* Age on a Specific Date */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Age on a Specific Date
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Sometimes you don't want today's date—you want to know how old you were or will be on a particular day.
          </p>
          <div className="p-3 bg-[#f8fafc] rounded-lg border border-slate-200 text-xs text-slate-700 italic">
            For example: "How old will I be on 1 January 2030?"
          </div>
          <p className="text-slate-600 text-xs leading-relaxed">
            Just enter your date of birth and the target date, and the calculator works out your exact age at that point—useful for anniversaries, milestones, legal dates, and historical events.
          </p>
        </div>

        {/* Calculate the Difference Between Two Dates */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
            Calculate the Difference Between Two Dates
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Since age calculation is really just the difference between two dates, this tool can also work as a general date calculator. Use it to find:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>Years, months, weeks, or days between any two dates</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>The overall duration between events</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcBlue shrink-0 mt-0.5" />
              <span>The day of the week for any date</span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION: DEEP INFORMATIONAL TOPICS */}
      <section className="space-y-6">
        
        {/* Leap Year */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Does a Leap Year Affect Your Age?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm italic">
            If someone is born on 29 February, they are called a “leap-day baby” or “leapling.
          </p>
          <p className="text-slate-800 text-sm font-bold">
            No. A leap year does not change how old you are.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm">
            Your age is based on the number of years since your date of birth, not on how many birthdays you have celebrated.
          </p>
          <div className="space-y-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600">For example, if someone was born on 29 February 2000:</p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>They turned 1 in 2001, even though there is no 29 February that year.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>They turned 4 on 29 February 2004.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>In non-leap years, they can celebrate their birthday on 28 February or 1 March, depending on local convention.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>For example, someone born on 29 February 2000 is 26 years old in 2026, even though they have had only 7 actual 29 February birthdays.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>For official documents and legal age, their age is generally determined by the applicable legal rules, not by counting 29 February birthdays.</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm pt-2">
            So a person born on 29 February doesn't stay young for four years—they still get one year older every year.
          </p>
        </div>

        {/* 2-Column Info: Babies & Chronological vs Biological */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Age Calculator for Babies and Children */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Baby className="w-5 h-5 text-calcNavy" />
              <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
                Age Calculator for Babies and Children
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              For babies and young children, age is often more meaningful in weeks or months rather than years. Instead of saying a baby is "under one," parents may want to know their baby is:
            </p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 pl-2">
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>6 months old</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>26 weeks old</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-calcNavy font-bold">•</span>
                <span>180 days old</span>
              </li>
            </ul>
            <p className="text-slate-600 text-xs leading-relaxed pt-1">
              This tool converts a date of birth into any of these time units instantly—handy for tracking developmental milestones and vaccination schedules.
            </p>
          </div>

          {/* Chronological Age vs. Biological Age */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-calcNavy" />
              <h2 className="text-lg font-bold text-calcNavy-dark tracking-tight">
                Chronological Age vs. Biological Age
              </h2>
            </div>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Chronological age is the amount of time that has passed from a person's date of birth to a particular date.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              For example, if someone was born on June 15, 2000, their chronological age is determined by comparing June 15, 2000, with the date on which their age is being calculated.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Chronological age is different from concepts such as biological age, which may refer to estimates of physiological condition and cannot be determined simply from a date of birth.
            </p>
          </div>

        </div>

        {/* Why Use an Online Age Calculator? */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
            Why Use an Online Age Calculator?
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Manually working out an exact age gets complicated fast—different month lengths, leap years, and calendar quirks all add room for error. An online calculator lets you:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Get an instant, accurate result</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Skip manual date math entirely</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Calculate your age on any date—past, present, or future.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Convert your age into days, weeks, hours, minutes, or seconds</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Find out exactly when your next birthday is.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
              <span>Measure the difference between any two dates</span>
            </div>
          </div>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
            Whether you're planning a birthday, filling out a form that needs an exact age, or just curious how many days you've been alive, this tool gives you the answer in seconds.
          </p>
        </div>

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
              q: "How accurate is this age calculator?",
              a: "It's fully accurate down to the day, accounting for varying month lengths and leap years. If you use the time-based units (hours, minutes, seconds), those are calculated from the exact dates entered and assume midnight as the reference time unless a specific time is provided."
            },
            {
              q: "Can I calculate someone else's age, not just my own?",
              a: "Yes. Simply enter any date of birth—yours, a family member's, or anyone else's—to calculate their age."
            },
            {
              q: "Can I find out my age on a future date?",
              a: "Yes. Enter your date of birth and select any future date to see how old you'll be on that day."
            },
            {
              q: "Does the calculator account for leap years?",
              a: "Yes. The calculator compares actual calendar dates rather than dividing total days by 365, so leap years are automatically factored into the result."
            },
            {
              q: "Why do different age calculators sometimes give slightly different month/day results?",
              a: "This usually happens because of how end-of-month dates are handled (see the leap year and month-length explanation above). Different calculation methods can produce results that differ by a few days, though the total day count and year count remain the same."
            },
            {
              q: "Can I use this to calculate the number of days between two dates that aren't birthdays?",
              a: "Yes. The tool works as a general date calculator too—enter any two dates to find the difference in years, months, weeks, or days."
            },
            {
              q: "What's the difference between chronological age and biological age?",
              a: "Chronological age is purely time-based—the years, months, and days since birth. Biological age is an estimate of physical condition and health and can't be calculated from a birth date alone. This calculator gives you chronological age."
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
