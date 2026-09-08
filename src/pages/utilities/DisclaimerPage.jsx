import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ShieldAlert, 
  Scale, 
  UserCheck, 
  FileWarning, 
  Mail,
  Info
} from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* HERO / TITLE */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Legal & Limitations
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Disclaimer
        </h1>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 border-t border-slate-100">
          The information and calculator results provided on this{' '}
          <a 
            href="http://agecalculator.today/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors"
          >
            Age Calculator website
          </a>{' '}
          are intended for <strong>general informational and educational purposes only</strong>.
        </p>
        <div className="p-4 bg-[#f8fafc] border-l-4 border-calcNavy rounded-r-xl text-slate-700 text-sm font-medium">
          By using our website and calculators, you acknowledge and agree to the terms of this Disclaimer.
        </div>
      </section>

      {/* CALCULATOR ACCURACY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <ShieldAlert className="w-6 h-6 text-calcNavy" />
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark">Calculator Accuracy</h2>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          We make reasonable efforts to ensure that our age, date, birthday, and other calculators provide accurate results.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          However, we do not guarantee that every result will always be completely accurate, error-free, or suitable for every purpose.
        </p>
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Calculations may depend on factors such as:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
              <span>Date and calendar conventions</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
              <span>Leap years</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
              <span>Different month lengths</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2 sm:col-span-2 lg:col-span-1">
              <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
              <span>Inclusive or exclusive date counting</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2 sm:col-span-2">
              <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
              <span>Information entered by the user</span>
            </div>
          </div>
        </div>
        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs sm:text-sm text-yellow-900 font-semibold mt-2">
          Always check important calculations before relying on them for official or significant purposes.
        </div>
      </section>

      {/* NO PROFESSIONAL ADVICE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <Info className="w-6 h-6 text-calcNavy" />
          <h3 className="text-xl sm:text-2xl font-bold text-calcNavy-dark">No Professional Advice</h3>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          The information provided on this website does not constitute professional advice.
        </p>
        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Our calculators should not be used as a replacement for qualified:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Legal advice</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Medical advice</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Financial advice</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Educational advice</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2 sm:col-span-2">
            <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
            <span>Government or official guidance</span>
          </div>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed pt-2">
          If you require professional advice, please consult an appropriately qualified professional or the relevant official authority.
        </p>
      </section>

      {/* LEGAL AGE INFORMATION & USER-PROVIDED INFORMATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Legal Age Information */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Scale className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Legal Age Information</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Our <strong>Legal Age Calculator</strong> calculates chronological age based on the dates entered by the user.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            It does not determine whether a person is legally permitted to perform a particular activity.
          </p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
            Age requirements can vary depending on the country, state, province, territory, activity, and applicable law. Always verify legal age requirements with the relevant official authority.
          </div>
        </div>

        {/* User-Provided Information */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <UserCheck className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">User-Provided Information</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            The accuracy of a calculation depends partly on the information entered by the user.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            You are responsible for entering the correct date of birth, start date, end date, or other required information.
          </p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700">
            We are not responsible for incorrect results caused by inaccurate or incomplete information entered into the calculator.
          </div>
        </div>
      </div>

      {/* LIMITATION OF LIABILITY & CHANGES TO THIS DISCLAIMER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Limitation of Liability */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Limitation of Liability</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            To the maximum extent permitted by applicable law, we are not responsible for any loss, damage, or consequence resulting from reliance on information or calculator results provided through this website.
          </p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium">
            Users are responsible for verifying information before using it for legal, official, financial, medical, or other important purposes.
          </div>
        </div>

        {/* Changes to This Disclaimer */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <FileWarning className="w-6 h-6 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Changes to This Disclaimer</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            We may update this Disclaimer from time to time to reflect changes to our website, calculators, or services.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Any updates will be published on this page with a revised <strong>Last Updated</strong> date.
          </p>
        </div>
      </div>

      {/* CONTACT US */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-calcNavy-dark">
          Contact Us
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          If you have questions about this Disclaimer or our calculators, please contact us through{' '}
          <a 
            href="http://agecalculator.today/contact-us/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors"
          >
            our Contact Us page
          </a>.
        </p>
        <div className="p-4 bg-[#003366] text-white rounded-xl space-y-1 inline-block">
          <div className="text-xs text-blue-200 uppercase font-bold tracking-wider">Email</div>
          <a 
            href="mailto:contact@agecalculator.today" 
            className="text-base sm:text-lg font-mono font-bold text-white hover:text-yellow-300 transition-colors"
          >
            contact@agecalculator.today
          </a>
        </div>
      </section>
    </div>
  );
}
