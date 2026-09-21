import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  Cake,
  CheckCircle2,
  PartyPopper
} from 'lucide-react';

import PageHero from '../components/PageHero.jsx';

export default function BirthdayCalculatorPage() {
  const [birthDate, setBirthDate] = useState('1994-07-12');
  const [todayDate, setTodayDate] = useState('2026-09-05');
  const [openFaq, setOpenFaq] = useState(null);

  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calculationResult = useMemo(() => {
    if (!birthDate || !todayDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [tY, tM, tD] = todayDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const today = new Date(tY, tM - 1, tD);

    if (birth > today) {
      return { isInvalid: true, message: 'Birth date cannot be after today\'s date.' };
    }

    const birthDayOfWeek = weekdays[birth.getDay()];

    // Current completed age
    let currentAgeYears = tY - bY;
    let currentAgeMonths = (tM - 1) - (bM - 1);
    let currentAgeDays = tD - bD;

    if (currentAgeDays < 0) {
      const prevMonthLastDay = new Date(tY, tM - 1, 0).getDate();
      currentAgeDays += prevMonthLastDay;
      currentAgeMonths -= 1;
    }

    if (currentAgeMonths < 0) {
      currentAgeMonths += 12;
      currentAgeYears -= 1;
    }

    // Helper to check leap year
    const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    // Determine next birthday date
    // Check if 29 Feb birth
    const isFeb29 = bM === 2 && bD === 29;

    let nextBdayYear = tY;
    let targetMonth = bM;
    let targetDay = bD;

    if (isFeb29 && !isLeapYear(nextBdayYear)) {
      targetMonth = 3;
      targetDay = 1;
    }

    let thisYearBirthday = new Date(nextBdayYear, targetMonth - 1, targetDay);

    let isBirthdayToday = false;
    let nextBirthdayDate;
    let nextAge;

    if (thisYearBirthday.getTime() === today.getTime()) {
      isBirthdayToday = true;
      nextBirthdayDate = thisYearBirthday;
      nextAge = currentAgeYears; // celebrated today
    } else if (thisYearBirthday > today) {
      nextBirthdayDate = thisYearBirthday;
      nextAge = currentAgeYears + 1;
    } else {
      nextBdayYear = tY + 1;
      targetMonth = bM;
      targetDay = bD;
      if (isFeb29 && !isLeapYear(nextBdayYear)) {
        targetMonth = 3;
        targetDay = 1;
      }
      nextBirthdayDate = new Date(nextBdayYear, targetMonth - 1, targetDay);
      nextAge = currentAgeYears + 1;
    }

    const nextWeekday = weekdays[nextBirthdayDate.getDay()];
    const nextBdayFormatted = `${nextWeekday}, ${nextBirthdayDate.getDate()} ${monthsNames[nextBirthdayDate.getMonth()]} ${nextBirthdayDate.getFullYear()}`;

    const diffTime = nextBirthdayDate.getTime() - today.getTime();
    const daysUntil = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weeksUntil = Math.floor(daysUntil / 7);
    const remainingDays = daysUntil % 7;

    return {
      isInvalid: false,
      birthDayOfWeek,
      currentAgeYears,
      currentAgeMonths,
      currentAgeDays,
      isBirthdayToday,
      nextBdayFormatted,
      nextWeekday,
      daysUntil,
      weeksUntil,
      remainingDays,
      nextAge
    };
  }, [birthDate, todayDate]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadYusufExample = () => {
    setBirthDate('1994-07-12');
    setTodayDate('2026-09-05');
  };

  return (
    <div className="w-full">
      <PageHero
        title="Birthday Calculator – When Is My Next Birthday?"
        description="Find your day of birth, countdown days until your next birthday celebration, calculate half-birthdays, and discover fun birthday milestones."
        badge="Birthday Countdown"
        badgeIcon={Cake}
        category="Calculators"
        currentPage="Birthday Calculator"
        features={['Exact Days Remaining', 'Day of the Week Finder', '100% Free & Private']}
        actions={
          <button 
            onClick={loadYusufExample}
            className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-calcNavy text-xs font-bold border border-blue-200 shadow-xs transition-all flex items-center gap-1.5 hover:shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Load Yusuf's Example (12 July 1994)
          </button>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* INTERACTIVE CALCULATOR WIDGET */}
        <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Cake className="w-5 h-5 text-calcNavy" />
            Birthday & Next Birthday Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Next Birthday Countdown</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Your Birthday Details
              </span>
              <span className="text-xs text-slate-500 font-medium">Free Tool</span>
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

            {/* Today's Date Reference */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Today's Date
              </label>
              <input
                type="date"
                value={todayDate}
                onChange={(e) => setTodayDate(e.target.value)}
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
                Calculate Next Birthday
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Result */}
                <div className="bg-calcGreen-light border border-calcGreen-border rounded-xl p-5 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-calcGreen flex items-center gap-1.5">
                      <PartyPopper className="w-4 h-4 text-calcGreen" />
                      Next Birthday
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-calcGreen/20 text-calcGreen-hover">
                      Turning {calculationResult.nextAge}
                    </span>
                  </div>

                  {calculationResult.isBirthdayToday ? (
                    <div className="text-2xl sm:text-3xl font-extrabold text-calcNavy-dark">
                      🎉 Happy Birthday! It's Today!
                    </div>
                  ) : (
                    <>
                      <div className="text-2xl sm:text-3xl font-extrabold text-calcNavy-dark">
                        {calculationResult.nextBdayFormatted}
                      </div>
                      <div className="text-sm sm:text-base text-slate-700 font-medium">
                        That's <strong>{calculationResult.daysUntil} days away</strong> (about {calculationResult.weeksUntil} weeks and {calculationResult.remainingDays} days), and you'll be turning <strong>{calculationResult.nextAge}</strong>.
                      </div>
                    </>
                  )}
                </div>

                {/* Additional Insight Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-slate-500 font-medium">Day Born On</div>
                    <div className="text-sm sm:text-base font-bold text-calcNavy mt-0.5">
                      {calculationResult.birthDayOfWeek}
                    </div>
                  </div>
                  <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-slate-500 font-medium">Next Birthday Weekday</div>
                    <div className="text-sm sm:text-base font-bold text-calcNavy mt-0.5">
                      {calculationResult.nextWeekday}
                    </div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 bg-[#f8fafc] border border-slate-200 rounded-xl p-3 text-center">
                    <div className="text-slate-500 font-medium">Current Age</div>
                    <div className="text-sm sm:text-base font-bold text-calcNavy mt-0.5">
                      {calculationResult.currentAgeYears} yrs, {calculationResult.currentAgeMonths} mos
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
          <strong>Yusuf</strong> was born on <strong>12 July 1994</strong>. As of today, <strong>5 September 2026</strong>, this year's birthday has already passed, so his next birthday is:
        </p>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-1 text-sm text-slate-800">
          <div className="font-bold text-calcNavy-dark text-base">Monday, 12 July 2027</div>
          <div className="text-slate-700">
            That's <strong>310 days away</strong> (about 44 weeks and 2 days), and he'll be turning <strong>33</strong>.
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm font-semibold pt-2">
          Here's how the calculator works it out:
        </p>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1">
          <li><strong>Enter date of birth</strong> – 12 July 1994</li>
          <li><strong>The tool checks today's date</strong> – 5 September 2026</li>
          <li><strong>It finds the next occurrence of the birth month and day</strong> – since 12 July 2026 has already passed, it looks ahead to 12 July 2027</li>
          <li><strong>It calculates the countdown and the weekday</strong> – 310 days away, falling on a Monday</li>
          <li><strong>It shows the upcoming age</strong> – Yusuf will turn 33</li>
        </ol>
      </section>

      {/* SECTION: HOW THE CALCULATION WORKS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How the Calculation Works
        </h2>
        
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-slate-800">
          <div>If this year's birth month/day hasn't occurred yet:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Next Birthday = Birth Month/Day, Current Year</div>
          <div>Else:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Next Birthday = Birth Month/Day, Current Year + 1</div>
          <div className="pt-2 font-bold text-calcNavy-dark">Days until Birthday = Next Birthday − Today</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The calculator also works out the day of the week for that date and adds one to your current age to show what birthday you'll be celebrating.
        </p>
      </section>

      {/* SECTION: WHAT YOU CAN FIND OUT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          What You Can Find Out
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>The exact date of your next birthday</strong></div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>The day of the week it falls on</strong> – handy for planning a weekend celebration versus a weekday one</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>How many days (and weeks) remain</strong> until it arrives</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>The age you'll be turning</strong></div>
          </li>
        </ul>
      </section>

      {/* SECTION: A NOTE ON 29 FEBRUARY BIRTHDAYS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          A Note on 29 February Birthdays
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          If you were born on 29 February, your "actual" birthday only exists once every four years. In non-leap years, this calculator treats your birthday as falling on 1 March by default, so a countdown and age-turning date are always available, even outside leap years.
        </p>
      </section>

      {/* SECTION: WHEN IS MY NEXT BIRTHDAY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          When Is My Next Birthday?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your next birthday is the next occurrence of your birthday after today's date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          For example, if your birthday is:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          November 20 1999
        </div>
        <p className="text-slate-700 text-xs sm:text-sm">
          And today is October 1, your next birthday is:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          November 20 2026
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          If your birthday has already passed this year, your next birthday will occur the following year (20 Nov 2027).
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          For the exact number of days remaining, use our <strong>Next Birthday Calculator</strong>.
        </p>
      </section>

      {/* SECTION: HOW MANY DAYS UNTIL MY BIRTHDAY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Many Days Until My Birthday?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          The number of days until your birthday depends on today's date and your next birthday.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          For example, if today is October 1 and your birthday is October 15, there are 14 days between the two dates.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A birthday countdown can help you keep track of the time remaining until your celebration.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Our separate <strong>Next Birthday Calculator</strong> is <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">designed specifically for calculating</a> the remaining time until your next birthday.
        </p>
      </section>

      {/* SECTION: HOW OLD AM I ON MY BIRTHDAY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Old Am I on My Birthday?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          On each birthday, you complete another year of age.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          For example, if you were born on:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          July 10, 2000
        </div>
        <p className="text-slate-700 text-xs sm:text-sm">
          Then:
        </p>
        <ul className="space-y-1 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>July 10, 2024 → 24 years old</li>
          <li>July 10, 2025 → 25 years old</li>
          <li>July 10, 2026 → 26 years old</li>
        </ul>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Your birthday marks the anniversary of your birth and the date on which your completed age increases by one year.
        </p>
      </section>

      {/* SECTION: HOW OLD WILL I BE ON MY NEXT BIRTHDAY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Old Will I Be on My Next Birthday?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your age on your next birthday is determined by the year of your upcoming birthday.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          For example, if you were born on:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          January 20, 2000
        </div>
        <p className="text-slate-700 text-xs sm:text-sm">
          Your birthday in 2027 will be:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          January 20, 2027
        </div>
        <p className="text-slate-700 text-xs sm:text-sm">
          And you will turn:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          27 years old
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The calculator can determine your upcoming birthday and the age you will reach.
        </p>
      </section>

      {/* SECTION: WHY DOES MY BIRTHDAY FALL ON A DIFFERENT DAY EVERY YEAR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Does My Birthday Fall on a Different Day Every Year?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your birthday usually has the same month and day each year, but the <strong>weekday changes</strong> because calendar years do not contain an exact whole number of weeks.
        </p>
        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-xs sm:text-sm text-slate-800">
          <div>A normal year has: <strong className="text-calcNavy-dark">365 days</strong></div>
          <div>A leap year has: <strong className="text-calcNavy-dark">366 days</strong></div>
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Because these numbers are not evenly divisible by seven, your birthday moves to a different weekday from one year to another.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          For example, a birthday that falls on Monday one year may fall on Tuesday the following year.
        </p>
      </section>

      {/* SECTION: WHY PEOPLE USE A BIRTHDAY CALCULATOR */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why People Use a Birthday Calculator
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Party and gift planning</strong> – knowing the exact date and weekday well in advance makes it easier to book venues or plan surprises</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Countdown excitement</strong> – seeing the days tick down is a common way to build anticipation for a milestone birthday</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Coordinating with others</strong> – useful for scheduling group celebrations, especially around weekday versus weekend birthdays</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Quick lookups</strong> – a fast way to answer "when is my birthday this year" or "what day does it fall on" without checking a calendar manually</div>
          </li>
        </ul>
      </section>

      {/* SECTION: BIRTHDAY MILESTONES */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Birthday Milestones
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Some birthdays are commonly considered important milestones.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          Examples include:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs sm:text-sm text-slate-700">
          {[
            '1st birthday', '5th birthday', '10th birthday', '13th birthday',
            '16th birthday', '18th birthday', '21st birthday', '25th birthday',
            '30th birthday', '40th birthday', '50th birthday', '60th birthday',
            '65th birthday', '70th birthday', '80th birthday', '90th birthday',
            '100th birthday'
          ].map((milestone, idx) => (
            <div key={idx} className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
              <span>{milestone}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The importance of a particular birthday can vary depending on personal, cultural, or legal circumstances.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          You can use an age calculator to determine when you will reach a particular age.
        </p>
      </section>

      {/* SECTION: BIRTHDAY CALCULATOR VS. NEXT BIRTHDAY CALCULATOR */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Birthday Calculator vs. Next Birthday Calculator
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          These tools have related but different purposes.
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-5 rounded-xl space-y-3">
          <h3 className="text-base font-bold text-calcNavy-dark">
            Birthday Calculator
          </h3>
          <p className="text-slate-700 text-xs sm:text-sm">
            The Birthday Calculator focuses on information about your birth date and birthday, including:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
            <li>When your birthday occurs</li>
            <li>What day you were born</li>
            <li>Your age</li>
            <li>Birthday weekday</li>
          </ul>
        </div>
      </section>

      {/* SECTION: FIND OUT WHEN YOUR BIRTHDAY IS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Find Out When Your Birthday Is
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your birthday is a special date that comes around every year. With our free <strong>Birthday Calculator</strong>, you can find your birthday information from your date of birth, including the day of the week you were born and other useful birthday details.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Whether you're asking <strong>“When is my birthday?”</strong>, checking what day you were born, or preparing for an upcoming celebration, enter your date of birth and let the calculator do the work.
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
              q: "What if today is my birthday?",
              a: "If today matches your birth month and day, most calculators will either show a \"Happy Birthday\" result for today or calculate the following year's date, depending on how the tool is set up."
            },
            {
              q: "Can I find someone else's next birthday, not just my own?",
              a: "Yes. Enter any date of birth to find that person's next birthday, countdown, and upcoming age."
            },
            {
              q: "Does it account for leap years in the countdown?",
              a: "Yes. The day count between today and the next birthday automatically includes any leap day (29 February) that falls within that range."
            },
            {
              q: "Why does it matter what day of the week my birthday falls on?",
              a: "It's mainly useful for planning — a birthday on a Saturday leaves more room for a bigger celebration than one on a Tuesday, for example."
            },
            {
              q: "How is this different from the \"age on a specific date\" calculator?",
              a: "This tool is built specifically to find your very next birthday and count down to it. The age-on-a-specific-date calculator is for checking your age on any date you choose, whether that's a birthday or not."
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
