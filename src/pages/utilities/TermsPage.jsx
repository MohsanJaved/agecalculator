import React from 'react';
import { 
  FileText, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Scale, 
  Copyright, 
  ExternalLink, 
  Activity, 
  HelpCircle,
  Mail,
  FileCheck
} from 'lucide-react';

import PageHero from '../../components/PageHero.jsx';

export default function TermsPage() {
  return (
    <div className="w-full">
      <PageHero
        title="Terms and Conditions – Website Usage Terms"
        description="Review the terms and conditions for utilizing our suite of age, birthday, and date calculators for personal and educational purposes."
        badge="Terms of Service"
        badgeIcon={FileText}
        category="Legal"
        currentPage="Terms of Service"
        features={['Free for Personal Use', 'Educational Use Permitted', 'Standard Disclaimer']}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">

      {/* USE OF OUR WEBSITE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
          <FileCheck className="w-6 h-6 text-calcNavy" />
          <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark">Use of Our Website</h2>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed">
          Our website provides online calculators designed to help users perform age and date-related calculations.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          You may use our calculators for personal, educational, informational, and general purposes.
        </p>
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">You agree not to:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>Use the website for unlawful purposes</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>Attempt to interfere with or damage the website</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>Attempt to gain unauthorized access to our systems</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2.5">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>Use automated methods to abuse or disrupt our services</span>
            </div>
            <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2.5 sm:col-span-2">
              <XCircle className="w-4 h-4 text-red-500 shrink-0" />
              <span>Copy, reproduce, or redistribute our website content without permission</span>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR RESULTS & NOT PROFESSIONAL ADVICE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Calculator Results */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <ShieldAlert className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Calculator Results</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            The calculators have been created with the aim of delivering useful and precise calculations using the data provided by the user.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We cannot guarantee that all results from our calculators will always be accurate. The calculation of dates might take into consideration several elements such as calendars, leap years, and counting of days.
          </p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium">
            You are fully liable for the accuracy of the data inputted to the calculator.
          </div>
        </div>

        {/* Not Professional or Legal Advice */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Scale className="w-6 h-6 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Not Professional or Legal Advice</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            All the information and outcomes calculated by the calculators are for general information purposes only.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            The calculators are not to be used as a substitute for professional, legal, financial, medical, educational, or any other advice.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-[#f8fafc] p-3 rounded-xl border border-slate-200">
            For instance, the Legal Age Calculator can calculate age, but it cannot decide whether an individual is allowed to engage in an activity or not legally. The laws differ from one country, state, province, or territory to another.
          </p>
          <div className="p-2.5 bg-yellow-50 border border-yellow-200 rounded-lg text-xs font-semibold text-yellow-900">
            Always refer to the relevant authority for important calculations.
          </div>
        </div>
      </div>

      {/* INTELLECTUAL PROPERTY & THIRD-PARTY LINKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Intellectual Property */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Copyright className="w-5 h-5 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Intellectual Property</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Unless otherwise indicated, all information contained on this site, such as text, images, designs, logos, and calculator interfaces, are owned by or licensed to us.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            You can use this website as intended, but you may not reproduce, adapt, distribute, or use our content for commercial purposes without our prior permission.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <ExternalLink className="w-5 h-5 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Third-Party Links</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Links to third party websites are contained in our website. The links are intended to be helpful and provide more information to users. We do not have control over and we cannot be held liable for any issues on third party websites, which include privacy policy, security, availability, and contents of third-party websites.
          </p>
        </div>
      </div>

      {/* WEBSITE AVAILABILITY & LIMITATION OF LIABILITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Website Availability */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <Activity className="w-5 h-5 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Website Availability</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Our purpose is to provide accessibility and proper functionality to our website and calculators. However, we cannot promise continuous availability, uninterrupted operation, security, and absence of technical problems with respect to our website.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We reserve the right to change, suspend, or terminate any part of our website or its calculators at any moment.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <AlertTriangle className="w-5 h-5 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Limitation of Liability</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Within the limits of the applicable law, we do not bear any responsibility for any damages, costs, or consequences arising from reliance on the information or calculations available on our website.
          </p>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium">
            The user is responsible for checking the accuracy of the results.
          </div>
        </div>
      </div>

      {/* CHANGES TO THESE TERMS */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h3 className="text-xl font-bold text-calcNavy-dark tracking-tight">
          Changes to These Terms
        </h3>
        <p className="text-slate-700 text-sm leading-relaxed">
          These Terms and Conditions may be amended by us at any point. The amendments will be published on this page and the "Last Updated" date will be changed accordingly.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          Your continued use of the website following the publication of the amendments means that you agree to the new Terms and Conditions.
        </p>
      </section>

      {/* CONTACT US */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-calcNavy-dark">
          Contact Us
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          If you have questions about these Terms and Conditions, please contact us through{' '}
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
    </div>
  );
}
