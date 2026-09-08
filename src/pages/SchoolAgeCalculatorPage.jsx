import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  GraduationCap,
  School,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Clock,
  BookOpen
} from 'lucide-react';

export default function SchoolAgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState('2021-09-03');
  const [cutoffDate, setCutoffDate] = useState('2026-09-01');
  const [requiredAge, setRequiredAge] = useState(5);
  const [openFaq, setOpenFaq] = useState(null);

  const calculationResult = useMemo(() => {
    if (!birthDate || !cutoffDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = cutoffDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const cutoff = new Date(cY, cM - 1, cD);

    if (birth > cutoff) {
      return { isInvalid: true, message: 'Birth date cannot be after the cutoff / school date.' };
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

    const isEligible = years >= requiredAge;

    // Calculate next birthday date relative to cutoff
    let nextTurningBirthday = new Date(cY, bM - 1, bD);
    let diffDaysToTargetBirthday = Math.ceil((nextTurningBirthday - cutoff) / (1000 * 60 * 60 * 24));

    return {
      isInvalid: false,
      years,
      months,
      days,
      isEligible,
      diffDaysToTargetBirthday,
      cutoffYear: cY,
      nextEligibleYear: cY + (isEligible ? 0 : 1)
    };
  }, [birthDate, cutoffDate, requiredAge]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadAyeshaExample = () => {
    setBirthDate('2021-09-03');
    setCutoffDate('2026-09-01');
    setRequiredAge(5);
  };

  const loadJune2020Example = () => {
    setBirthDate('2020-06-10');
    setCutoffDate('2026-06-10');
    setRequiredAge(6);
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button 
          onClick={loadAyeshaExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load Ayesha's Example (3 Sept 2021 vs 1 Sept 2026)
        </button>
        <button 
          onClick={loadJune2020Example}
          className="px-3.5 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-white text-xs font-semibold border border-slate-600 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          June 10, 2020 Example
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          School Age Calculator
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          School Age Calculator – Check School Eligibility by Cutoff Date
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Want to know <strong>how old your child is for school?</strong> Our free School Age Calculator calculates a child's age from their date of birth and can show their age on a selected school date.
        </p>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Most schools don't just look at a child's current age — they check whether the child reaches a required age by a specific cutoff date, usually tied to the start of the academic year. This calculator checks your child's age against that cutoff date, so you know exactly which intake year they qualify for.
        </p>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Enter your child's date of birth and choose the date you want to check. <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">The calculator</a> can show their age in <strong>years, months, and days</strong>, helping you understand how old your child will be when starting school or reaching another school-related milestone.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <School className="w-5 h-5 text-calcNavy" />
            School Age & Cutoff Eligibility Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Cutoff Checker</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                School & Cutoff Inputs
              </span>
              <span className="text-xs text-slate-500 font-medium">Step-by-Step</span>
            </div>

            {/* Birth Date */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Child's Date of Birth
              </label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* School Cutoff Date */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                School Cutoff Date (e.g. 1 September 2026)
              </label>
              <input
                type="date"
                value={cutoffDate}
                onChange={(e) => setCutoffDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Required Age */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Required Age by Cutoff (Years)
              </label>
              <select
                value={requiredAge}
                onChange={(e) => setRequiredAge(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all"
              >
                <option value={3}>3 Years (Preschool)</option>
                <option value={4}>4 Years (Pre-K / Reception)</option>
                <option value={5}>5 Years (Primary / Kindergarten)</option>
                <option value={6}>6 Years (Grade 1)</option>
                <option value={11}>11 Years (Secondary)</option>
                <option value={14}>14 Years (High School)</option>
              </select>
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-2.5 bg-calcGreen hover:bg-calcGreen-hover text-white text-base font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-default"
              >
                <Calculator className="w-5 h-5" />
                Check School Age
              </button>
            </div>
          </div>

          {/* Results Display Area */}
          <div className="lg:col-span-7 space-y-4">
            {calculationResult && !calculationResult.isInvalid ? (
              <>
                {/* Highlight Result */}
                <div className={`border rounded-xl p-5 shadow-sm space-y-3 ${
                  calculationResult.isEligible ? 'bg-calcGreen-light border-calcGreen-border' : 'bg-amber-50 border-amber-300'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                      calculationResult.isEligible ? 'text-calcGreen' : 'text-amber-700'
                    }`}>
                      {calculationResult.isEligible ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-calcGreen" />
                          Eligible for {calculationResult.cutoffYear} Intake
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          Does Not Meet Cutoff for {calculationResult.cutoffYear} Intake
                        </>
                      )}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/70 border border-slate-200 text-slate-700">
                      Required: {requiredAge} years
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark">
                    {calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days old
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 font-medium pt-1 border-t border-slate-200">
                    {calculationResult.isEligible ? (
                      <div>
                        Child meets the {requiredAge}-year requirement on or before <strong>{cutoffDate}</strong>.
                      </div>
                    ) : (
                      <div>
                        Child is short of turning {requiredAge} on {cutoffDate}. Eligible for the <strong>{calculationResult.nextEligibleYear} intake</strong> instead.
                      </div>
                    )}
                  </div>
                </div>

                {/* Additional Insight Banner */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-700">
                  <div className="font-bold text-calcNavy flex items-center gap-2">
                    <Clock className="w-4 h-4 text-calcNavy" />
                    Intake Timeline Summary
                  </div>
                  <div>
                    • Age on Cutoff ({cutoffDate}): <strong>{calculationResult.years}y {calculationResult.months}m {calculationResult.days}d</strong>
                  </div>
                  <div>
                    • Intake Qualification: <strong>{calculationResult.isEligible ? `${calculationResult.cutoffYear} Academic Year` : `${calculationResult.nextEligibleYear} Academic Year`}</strong>
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
          <strong>Ayesha</strong> was born on <strong>3 September 2021</strong>. Her local school requires children to turn <strong>5 years old on or before 1 September</strong> of the intake year.
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-sm text-slate-800">
          <div className="font-bold text-calcNavy">Checking the September 2026 intake (cutoff: 1 September 2026):</div>
          <div className="text-slate-700">
            On 1 September 2026, Ayesha is <strong>4 years, 11 months, and 29 days old</strong> — just 2 days short of turning 5.
          </div>
          <div className="font-bold text-amber-800 pt-1 border-t border-slate-200">
            Result: She does not meet the cutoff for the 2026 intake. Her birthday falls just after the deadline, so she'd be eligible for the <strong>2027 intake</strong> instead, by which point she'll already be nearly 6 years old on the cutoff date.
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm font-semibold pt-2">
          Here's how the calculator checks it:
        </p>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1">
          <li><strong>Enter your child's date of birth</strong> – 3 September 2021</li>
          <li><strong>Enter the school's cutoff date</strong> – 1 September 2026</li>
          <li><strong>Enter the required age by that cutoff</strong> – 5 years</li>
          <li><strong>Calculate</strong> – the tool works out the child's exact age on the cutoff date and compares it to the requirement</li>
          <li><strong>Result</strong> – meets or doesn't meet the cutoff, plus the exact age gap involved</li>
        </ol>
      </section>

      {/* SECTION: THE LOGIC BEHIND IT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Logic Behind It
        </h2>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Age on Cutoff Date = Cutoff Date − Date of Birth</div>
          <div>If Age on Cutoff Date ≥ Required Age:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Eligible for that intake year</div>
          <div>Else:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Eligible from the following intake year</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Because a couple of days can be the difference between qualifying and not, this calculation needs to be exact — which is exactly what makes it easy to get wrong doing it by hand.
        </p>
      </section>

      {/* SECTION: WHAT IS A SCHOOL AGE CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          What Is a School Age Calculator?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A <strong>School Age Calculator</strong> is an online tool that calculates a child's chronological age for a particular school-related date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          Parents and caregivers may want to know:
        </p>

        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>How old their child is now</li>
          <li>How old their child will be when school starts</li>
          <li>How old their child was when they started school</li>
          <li>How old their child will be in a particular school year</li>
          <li>Whether their child has reached a particular age</li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The calculator uses the child's <strong>date of birth</strong> and the date you choose to determine their exact calendar age.
        </p>
        <p className="text-slate-600 text-xs italic leading-relaxed">
          It is important to remember that school admission and compulsory education rules vary by country, state, province, school, and academic year. A calculator can tell you a child's age, but it does not determine whether a child is legally eligible for admission.
        </p>
      </section>

      {/* SECTION: WHY CUTOFF DATES VARY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Cutoff Dates Vary
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          School entry cutoff dates aren't standardized worldwide — they differ by country, and often by state, province, or individual school board:
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0 mt-1.5"></span>
            <div>Some systems use a <strong>1 September</strong> cutoff (common across parts of the UK and several other countries)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0 mt-1.5"></span>
            <div>Others use dates like <strong>31 August</strong>, <strong>1 January</strong>, or <strong>31 December</strong>, depending on the region</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0 mt-1.5"></span>
            <div>Private, public, and international schools within the same country can sometimes apply different cutoff rules</div>
          </li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Because of this, always confirm the exact cutoff date and required age directly with the specific school or education authority — this calculator works with whatever cutoff date and age requirement you enter.
        </p>
      </section>

      {/* SECTION: HOW OLD IS MY CHILD FOR SCHOOL? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How Old Is My Child for School?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Your child's school age depends on their <strong>date of birth and the date used for the calculation</strong>.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm">
          For example, a child born on:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          June 10, 2020
        </div>
        <p className="text-slate-700 text-xs sm:text-sm">
          will be:
        </p>
        <div className="font-bold text-sm text-calcNavy pl-2">
          6 years old on June 10, 2026.
        </div>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          If the school year begins before June 10, the child will still be five at the start of that school year.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          This is why the exact school start date and any applicable age cutoff date are important when checking school age.
        </p>

        {/* School Stages Table */}
        <div className="pt-2">
          <h3 className="text-sm sm:text-base font-bold text-calcNavy-dark mb-3">
            At what age does a child usually start school?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-[#003366] text-white">
                <tr>
                  <th className="py-3 px-4 font-bold">School stage</th>
                  <th className="py-3 px-4 font-bold">Typical starting age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-slate-800">Nursery / Preschool</td>
                  <td className="py-2.5 px-4 text-slate-600">2–4 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-slate-800">Pre-K / Reception</td>
                  <td className="py-2.5 px-4 text-slate-600">4–5 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-slate-800">Primary School</td>
                  <td className="py-2.5 px-4 text-slate-600">5–6 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-slate-800">Secondary School</td>
                  <td className="py-2.5 px-4 text-slate-600">11–12 years</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-2.5 px-4 font-medium text-slate-800">High School</td>
                  <td className="py-2.5 px-4 text-slate-600">14–16 years</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION: DOES THE SCHOOL AGE CALCULATOR DETERMINE SCHOOL ELIGIBILITY? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Does the School Age Calculator Determine School Eligibility?
        </h2>
        <p className="text-slate-700 text-sm font-bold text-calcNavy-dark">
          No.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          The calculator determines a child's <strong>chronological age</strong>.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          School eligibility depends on the requirements of the relevant education system, school, local authority, and academic year.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          Factors may include:
        </p>

        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>Minimum age requirements</li>
          <li>Age cutoff dates</li>
          <li>School admission policies</li>
          <li>Academic year dates</li>
          <li>Local education regulations</li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Always check the current official requirements before making an enrollment decision.
        </p>
      </section>

      {/* SECTION: WHY THIS CALCULATION MATTERS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why This Calculation Matters
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Avoiding a missed intake year</strong> – a child born just after the cutoff may need to wait an extra year before starting, which is worth knowing well in advance</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Planning around "redshirting"</strong> – some parents deliberately hold a child back a year even when they technically qualify, and knowing the exact age gap helps inform that decision</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Comparing schools with different cutoffs</strong> – useful when choosing between schools or systems that use different cutoff dates</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Avoiding last-minute surprises</strong> – finding out only close to the deadline that a child doesn't qualify can be stressful; checking early gives more time to plan</div>
          </li>
        </ul>
      </section>

      {/* SECTION: WHO CAN USE A SCHOOL AGE CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Who Can Use a School Age Calculator?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm">
          The calculator can be useful for:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm text-slate-700">
          {['Parents', 'Guardians', 'Teachers', 'Caregivers', 'Families planning school enrollment', 'Anyone checking a child\'s age on a particular school date'].map((user, idx) => (
            <div key={idx} className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
              <span>{user}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          It can be used for children of different ages and for different school-related dates.
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
              q: "What cutoff date and required age should I use?",
              a: "These vary by country, region, and sometimes by individual school, so check directly with the school or local education department. The calculator works with whatever specific cutoff date and age requirement you provide."
            },
            {
              q: "What if my child's birthday is exactly on the cutoff date?",
              a: "This depends on how the specific school or system defines \"on or before\" — some count the cutoff date itself as qualifying, others don't. Confirm this detail with the school directly."
            },
            {
              q: "Can I check eligibility for more than one intake year at once?",
              a: "Yes — just re-run the calculation with a different cutoff date for each intake year you want to compare."
            },
            {
              q: "Does this apply to preschool and daycare too, not just primary school?",
              a: "The same logic can apply to any age-based enrollment cutoff, including preschool, daycare, or grade-level placement — as long as you know the relevant cutoff date and required age."
            },
            {
              q: "What is a School Age Calculator?",
              a: "A School Age Calculator calculates a child's chronological age on a selected school-related date using their date of birth."
            },
            {
              q: "How old is my child for school?",
              a: "Enter your child's date of birth and the school start date or applicable cutoff date. The calculator will show your child's age on that date."
            },
            {
              q: "What age does a child start school?",
              a: "School starting ages vary by country, region, education system, and school. Check the applicable local requirements rather than relying on a single universal age."
            },
            {
              q: "How do I calculate my child's school age?",
              a: "Enter the child's date of birth and the date you want to check, such as the first day of school or an age cutoff date."
            },
            {
              q: "What is a school cutoff date?",
              a: "A school cutoff date is a date used by an education system or school when determining age requirements for a particular school year or grade."
            },
            {
              q: "Can I calculate my child's age on the first day of school?",
              a: "Yes. Enter your child's birth date and the first day of school as the calculation date."
            },
            {
              q: "Can I calculate my child's age for a future school year?",
              a: "Yes. Select the future school start date to calculate how old your child will be."
            },
            {
              q: "Can I calculate how old my child was when they started school?",
              a: "Yes. Enter the child's birth date and their first school date."
            },
            {
              q: "Does school age depend on the child's birth year?",
              a: "The birth year is important, but the exact birth date is needed for an accurate age calculation."
            },
            {
              q: "Why might two children born just a few days apart end up in different school years?",
              a: "Because eligibility is based on a fixed cutoff date rather than a rolling age, a child born just before the cutoff can qualify a full year earlier than one born just a few days after it."
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
