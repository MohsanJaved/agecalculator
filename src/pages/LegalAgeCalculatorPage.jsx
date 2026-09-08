import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  ChevronDown, 
  HelpCircle, 
  Calculator, 
  Sparkles,
  Scale,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert,
  Vote,
  Car,
  FileCheck
} from 'lucide-react';

export default function LegalAgeCalculatorPage() {
  const [birthDate, setBirthDate] = useState('2009-01-22');
  const [checkDate, setCheckDate] = useState('2026-09-05');
  const [requiredAge, setRequiredAge] = useState(18);
  const [openFaq, setOpenFaq] = useState(null);

  const monthsNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calculationResult = useMemo(() => {
    if (!birthDate || !checkDate) return null;

    const [bY, bM, bD] = birthDate.split('-').map(Number);
    const [cY, cM, cD] = checkDate.split('-').map(Number);

    const birth = new Date(bY, bM - 1, bD);
    const check = new Date(cY, cM - 1, cD);

    if (birth > check) {
      return { isInvalid: true, message: 'Birth date cannot be after the check date.' };
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

    // Qualifying exact date
    const qualifyingYear = bY + requiredAge;
    // Leap year check if born on Feb 29
    let targetMonth = bM;
    let targetDay = bD;
    const isFeb29 = bM === 2 && bD === 29;
    const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
    if (isFeb29 && !isLeap(qualifyingYear)) {
      targetMonth = 3;
      targetDay = 1;
    }

    const qualifyingDate = new Date(qualifyingYear, targetMonth - 1, targetDay);
    const qualifyingDateFormatted = `${targetDay} ${monthsNames[targetMonth - 1]} ${qualifyingYear}`;

    const diffMs = qualifyingDate - check;
    const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    return {
      isInvalid: false,
      years,
      months,
      days,
      isEligible,
      qualifyingDateFormatted,
      daysRemaining
    };
  }, [birthDate, checkDate, requiredAge]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const loadAliExample = () => {
    setBirthDate('2009-01-22');
    setCheckDate('2026-09-05');
    setRequiredAge(18);
  };

  return (
    <div className="space-y-12">
      {/* Quick Example Loader Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button 
          onClick={loadAliExample}
          className="px-3.5 py-1.5 rounded bg-calcNavy hover:bg-calcNavy-light text-white text-xs font-semibold border border-blue-400/40 transition-colors flex items-center gap-1.5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
          Load Ali's Example (22 Jan 2009 vs 18 Years)
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Legal Age Calculator
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Legal Age Calculator – Find Out When You Meet an Age Requirement
        </h1>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Many legal rights and responsibilities kick in only once you reach a specific age — voting, driving, marriage, or entering into a contract, among others. This <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">calculator checks your exact age</a> against any legal age threshold, and tells you whether you already qualify or exactly when you will.
        </p>
      </section>

      {/* INTERACTIVE CALCULATOR WIDGET */}
      <section className="bg-white border-2 border-calcNavy/20 rounded-2xl p-6 sm:p-8 shadow-md">
        <div className="border-b border-slate-200 pb-4 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
            <Scale className="w-5 h-5 text-calcNavy" />
            Legal Age & Eligibility Calculator
          </h2>
          <span className="text-xs text-slate-500 font-medium">Requirement Checker</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Controls */}
          <div className="lg:col-span-5 space-y-4 bg-[#f8fafc] border border-slate-200 p-5 sm:p-6 rounded-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="font-bold text-sm text-calcNavy flex items-center gap-2">
                <Calendar className="w-4 h-4 text-calcNavy" />
                Age & Check Inputs
              </span>
              <span className="text-xs text-slate-500 font-medium">Thresholds</span>
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

            {/* Check Date */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Date to Check Against (e.g. Today, Election Day)
              </label>
              <input
                type="date"
                value={checkDate}
                onChange={(e) => setCheckDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all shadow-inner"
              />
            </div>

            {/* Required Legal Age */}
            <div className="space-y-1.5 pt-1">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Legal Age Requirement (Years)
              </label>
              <div className="grid grid-cols-4 gap-1.5 pb-1">
                {[16, 18, 21, 25].map((ageVal) => (
                  <button
                    key={ageVal}
                    type="button"
                    onClick={() => setRequiredAge(ageVal)}
                    className={`py-1 text-xs font-bold rounded border transition-colors ${
                      requiredAge === ageVal 
                        ? 'bg-calcNavy text-white border-calcNavy' 
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {ageVal} yrs
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="1"
                max="120"
                value={requiredAge}
                onChange={(e) => setRequiredAge(Number(e.target.value))}
                className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue focus:border-transparent transition-all"
              />
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                className="w-full py-2.5 bg-calcGreen hover:bg-calcGreen-hover text-white text-base font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-default"
              >
                <Calculator className="w-5 h-5" />
                Check Legal Age
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
                          Requirement Met (Eligible)
                        </>
                      ) : (
                        <>
                          <AlertCircle className="w-4 h-4 text-amber-600" />
                          Not Yet Eligible
                        </>
                      )}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200 text-slate-700">
                      Target Age: {requiredAge} years
                    </span>
                  </div>

                  <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-calcNavy-dark">
                    {calculationResult.years} years, {calculationResult.months} months, and {calculationResult.days} days old
                  </div>

                  <div className="text-xs sm:text-sm text-slate-700 font-medium pt-1 border-t border-slate-200">
                    {calculationResult.isEligible ? (
                      <div>
                        You have already met the legal requirement of {requiredAge} years on or before <strong>{checkDate}</strong>.
                      </div>
                    ) : (
                      <div>
                        You will turn {requiredAge} on <strong>{calculationResult.qualifyingDateFormatted}</strong> — that's <strong>{calculationResult.daysRemaining} days away</strong>.
                      </div>
                    )}
                  </div>
                </div>

                {/* Timeline Box */}
                <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-700">
                  <div className="font-bold text-calcNavy flex items-center gap-2">
                    <Clock className="w-4 h-4 text-calcNavy" />
                    Key Milestones Breakdown
                  </div>
                  <div>
                    • Exact Age as of {checkDate}: <strong>{calculationResult.years}y {calculationResult.months}m {calculationResult.days}d</strong>
                  </div>
                  <div>
                    • Qualifying Date for Age {requiredAge}: <strong>{calculationResult.qualifyingDateFormatted}</strong>
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
          <strong>Ali</strong> was born on <strong>22 January 2009</strong>. He wants to know if he's old enough to vote, assuming the legal voting age is <strong>18</strong>.
        </p>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl space-y-2 text-sm text-slate-800">
          <div className="text-slate-700">
            As of today, 5 September 2026, Ali is <strong>17 years, 7 months, and 14 days old</strong>.
          </div>
          <div className="font-bold text-amber-800 pt-1 border-t border-slate-200">
            Result: Not yet eligible. He'll turn 18 on <strong>22 January 2027</strong> — that's <strong>139 days away</strong>.
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm font-semibold pt-2">
          Here's how the calculator works it out:
        </p>

        <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside pl-1">
          <li><strong>Enter date of birth</strong> – 22 January 2009</li>
          <li><strong>Enter the age requirement</strong> – 18</li>
          <li><strong>Enter the date to check against</strong> – today, 5 September 2026, or any other relevant date (such as election day)</li>
          <li><strong>Calculate</strong> – the tool works out Ali's exact age on that date and compares it to the requirement</li>
          <li><strong>Result</strong> – falls short by 139 days, with the exact qualifying date shown</li>
        </ol>
      </section>

      {/* SECTION: THE LOGIC BEHIND IT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          The Logic behind It
        </h2>

        <div className="bg-[#f8fafc] border border-slate-200 p-4 rounded-xl font-mono text-xs sm:text-sm space-y-2 text-slate-800">
          <div className="font-bold text-calcNavy-dark">Age on Check Date = Check Date − Date of Birth</div>
          <div>If Age on Check Date ≥ Required Age:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Requirement met</div>
          <div>Else:</div>
          <div className="pl-4 sm:pl-8 font-bold text-calcNavy-dark">Show the exact date the requirement will be met</div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          This is especially useful when the relevant date isn't today — for example, checking whether someone will be old enough to vote by Election Day, or old enough to drive by the time they plan to apply for a license.
        </p>
      </section>

      {/* SECTION: COMMON LEGAL AGE THRESHOLDS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Legal Age Thresholds
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Legal age requirements vary widely by country, and sometimes by state, province, or specific law — but common examples include:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Age of majority / legal adulthood</strong> – typically 18, though it's 19 or 21 in some places</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Voting age</strong> – 18 in most countries, though a small number set it lower or higher</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Driving age</strong> – varies widely, often between 16 and 18 depending on license type and region</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Marriage age (without parental consent)</strong> – commonly 18, with exceptions in some jurisdictions</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Legal drinking age</strong> – often 18, though notably 21 in the United States</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Age of criminal responsibility</strong> – varies significantly by country, sometimes as young as 10</div>
          </li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          Because these thresholds differ so much by location and purpose, always confirm the specific age requirement that applies to your situation — this calculator works with whatever number you enter.
        </p>
      </section>

      {/* SECTION: AM I LEGALLY AN ADULT? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Am I Legally an Adult?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          In many places, <strong>18 is commonly used as the age of majority</strong>, meaning the age at which a person is generally recognized as an adult. However, the exact legal rules vary between jurisdictions.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Some rights and responsibilities may begin at different ages. For example, the minimum age for voting, driving, purchasing certain products, entering particular contracts, or participating in other activities may not be the same as the general age of adulthood.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Therefore, reaching 18 does not automatically mean that every age-restricted activity is permitted everywhere.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Use the calculator to determine your chronological age, then check the relevant law for the specific activity.
        </p>
      </section>

      {/* SECTION: WHAT IS A LEGAL AGE CALCULATOR? */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          What Is a Legal Age Calculator?
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A <strong>Legal Age Calculator</strong> is an age calculator designed to help you find out whether you have reached a particular age on a specific date.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm font-semibold">
          For example, you may want to know:
        </p>

        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc list-inside pl-2">
          <li>Am I legally 18 yet?</li>
          <li>How old will I be when I turn 18?</li>
          <li>Have I reached the required legal age?</li>
          <li>When will I reach a specific age?</li>
          <li>How old was I on a particular date?</li>
          <li>How many days are left until I reach 18?</li>
          <li>What date will I become 21?</li>
          <li>Was I 18 on a particular date?</li>
        </ul>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-1">
          The calculator uses your date of birth and the date being checked to determine your chronological age.
        </p>
      </section>

      {/* SECTION: WHY CHECK LEGAL AGE IN ADVANCE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Why Check Legal Age in Advance
        </h2>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Planning around elections, exams, or applications</strong> – knowing exactly when you'll meet an age requirement helps you plan registration or application timing</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Avoiding a missed deadline</strong> – some processes (like voter registration) have their own cutoff dates separate from the age requirement itself</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Confirming eligibility for a contract, license, or legal document</strong> – useful when age is a factor in signing agreements or applying for official documents</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div><strong>Settling disputes over eligibility</strong> – having an exact date removes any ambiguity about whether someone qualifies</div>
          </li>
        </ul>
      </section>

      {/* SECTION: FINAL THOUGHTS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Final Thoughts
        </h2>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          A <strong>Legal Age Calculator</strong> makes it easy to determine whether you have reached a specific chronological age. Enter your date of birth, select the date you want to check, and compare your calculated age with the required age.
        </p>
        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
          Remember that <strong>reaching a certain age and being legally eligible for a particular activity are not always the same thing</strong>. Age requirements can vary by jurisdiction and activity, so use official government or legal sources whenever an age calculation has legal consequences.
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
              q: "Does this calculator know the legal age requirements for my country?",
              a: "No — legal age thresholds vary too much by country, region, and purpose to build in automatically. Enter the specific requirement that applies to your situation, and the calculator will check your age against it."
            },
            {
              q: "Can I check eligibility for a future date, not just today?",
              a: "Yes. Enter any future date — like an Election Day or application deadline — and the calculator will confirm whether the age requirement is met by that date."
            },
            {
              q: "What if the age requirement is based on turning an age \"by\" a certain date, like a school or exam cutoff?",
              a: "This calculator works the same way for that kind of check — enter the specific cutoff date and required age, and it will confirm eligibility exactly as it would for any other legal age check."
            },
            {
              q: "Why might two people born just days apart have different eligibility for the same event?",
              a: "Because eligibility is based on exact age as of a specific date, someone born just before that date may already meet a requirement that someone born a few days’ later still needs to wait for."
            },
            {
              q: "Is legal age the same as age of majority?",
              a: "Not always. Age of majority refers to general legal adulthood, but many specific rights (voting, drinking, and marriage) can have their own separate age requirements that differ from the general age of majority."
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
