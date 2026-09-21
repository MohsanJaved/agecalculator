import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calculator, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Calendar, 
  Clock, 
  Mail,
  Zap,
  Lock,
  RefreshCw
} from 'lucide-react';
import PageHero from '../../components/PageHero.jsx';

export default function AboutUsPage() {
  const toolsList = [
    { name: 'Age Calculator', path: '/' },
    { name: 'Age in Years Calculator', path: '/age-in-years' },
    { name: 'Age in Months Calculator', path: '/age-in-months' },
    { name: 'Age in Weeks Calculator', path: '/age-in-weeks' },
    { name: 'Age in Days Calculator', path: '/age-in-days' },
    { name: 'Age in Hours, Minutes, and Seconds', path: '/age-in-hours' },
    { name: 'Birthday Calculator', path: '/birthday-calculator' },
    { name: 'Next Birthday Calculator', path: '/birthday-calculator' },
    { name: 'Age on Specific Date Calculator', path: '/age-on-specific-date' },
    { name: 'Baby Age Calculator', path: '/baby-age-calculator' },
    { name: 'School Age Calculator', path: '/school-age-calculator' },
    { name: 'Legal Age Calculator', path: '/legal-age-calculator' },
    { name: 'Date Calculator', path: '/date-calculator' },
    { name: 'Days Between Dates Calculator', path: '/date-calculator' },
  ];

  return (
    <div className="w-full">
      <PageHero
        title="About Us – Precision Age & Date Calculation"
        description="Learn about our mission to provide lightning-fast, mathematically precise, and 100% privacy-focused age and date calculation tools."
        badge="About Our Platform"
        badgeIcon={HeartHandshake}
        category="Company"
        currentPage="About Us"
        features={['100% Free & Private', 'No Data Tracking', 'Instant Client-Side Engine']}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        {/* WHO WE ARE */}
        <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy mb-2">Who We Are</h2>
          <div className="text-slate-700 text-base leading-relaxed space-y-3">
            <p>
              Welcome to our <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">Age Calculator</a>, a simple and easy-to-use online platform designed to help you calculate your age and the time between important dates.
            </p>
            <p>
              We built this site around a simple idea: figuring out exact dates and ages shouldn't require manual counting, guesswork, or a stack of sticky notes. What started as a single age calculator has grown into a full set of free, easy-to-use date and age tools — built for anyone who wants a precise answer in seconds rather than minutes.
            </p>
          </div>
        </section>

      {/* WHAT WE OFFER */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-calcNavy-dark tracking-tight">
            What We Offer
          </h2>
        </div>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Our tools go well beyond a basic "how old am I" calculator. Depending on what you need, you can:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Calculate your exact age in <strong>years, months, and days</strong></div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Convert your age into <strong>weeks, days, hours, minutes, or seconds</strong></div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Find your <strong>next birthday</strong>, the day of the week it falls on, and a countdown to it</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Check a <strong>baby's age</strong> in weeks and months for milestones and checkups</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Work out <strong>age on any specific date</strong> — past or future, for events, anniversaries, or eligibility checks</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Check <strong>school entry eligibility</strong> against a cutoff date</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Check whether you meet a <strong>legal age requirement</strong>, and when you will if you don't yet</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Confirm whether a given year is a <strong>leap year</strong>, and why</div>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>Find the <strong>difference between two dates</strong>, or add/subtract days from any date</div>
          </li>
        </ul>

        <div className="pt-4 border-t border-slate-200">
          <p className="text-slate-700 text-sm font-semibold mb-3">
            Our website provides a range of age and date calculation tools, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            {toolsList.map((tool, idx) => (
              <Link 
                key={idx} 
                to={tool.path}
                className="p-2.5 bg-[#f8fafc] border border-slate-200 rounded-lg hover:bg-slate-100 hover:border-calcBlue transition-colors flex items-center gap-2 text-slate-800"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>{tool.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed pt-2">
          Every tool is built on the same accurate, calendar-aware calculation logic — no rough estimates, no averaging days per month, just exact results based on real calendar dates.
        </p>
      </section>

      {/* WHY WE BUILT THIS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-calcNavy-dark tracking-tight">
          Why We Built This
        </h3>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Age and date calculations look simple until you actually try to do them by hand — leap years, uneven month lengths, and time zones all add room for error. We wanted a place where anyone, whether they're a parent tracking a baby's milestones, a student checking a school cutoff date, or someone just curious how many seconds they've been alive, could get a fast, reliable answer without any of that hassle.
        </p>
      </section>

      {/* OUR COMMITMENT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-calcNavy-dark tracking-tight">
          Our Commitment
        </h3>
        <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pl-1">
          <li className="flex items-start gap-2.5">
            <Zap className="w-4 h-4 text-calcNavy shrink-0 mt-0.5" />
            <div>
              <strong>Accuracy first</strong> – ever calculation accounts for leap years, varying month lengths, and exact calendar dates
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <HeartHandshake className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
            <div>
              <strong>Free to use</strong> – all our tools are free, with no sign-up required
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <strong>Privacy respected</strong> – we don't store the dates you enter; calculations happen only for your own use
            </div>
          </li>
          <li className="flex items-start gap-2.5">
            <RefreshCw className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <strong>Always improving</strong> – we regularly review and refine our tools based on how people actually use them
            </div>
          </li>
        </ul>
      </section>

      {/* GET IN TOUCH */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Get in Touch
        </h2>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Has a suggestion, spotted something that doesn't look right, or just want to say hello? We'd love to hear from you — reach out through our [Contact page] and we'll get back to you as soon as we can.
        </p>
        <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed pt-2 border-t border-slate-100">
          Thank you for <a href="https://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy underline hover:text-calcBlue transition-colors">using our Age Calculator</a> and for making our website part of your everyday date and age calculations.
        </p>
      </section>
      </div>
    </div>
  );
}
