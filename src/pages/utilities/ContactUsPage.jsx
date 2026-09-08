import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Bug, 
  Lightbulb, 
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    calculatorName: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* HERO / TITLE */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Support & Feedback
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 border-t border-slate-100">
          Do you have any questions or ideas about our calculators? We would be glad to hear from you.
        </p>
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
          Our site offers you convenient <a href="http://agecalculator.today/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors">online calculators for age</a>, birthday, date, and time calculation. Please inform us if you find any errors or technical problems, as well as if you have any suggestions for improving the site.
        </p>
      </section>

      {/* HOW TO CONTACT US & INTERACTIVE FORM */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight flex items-center gap-2">
              <Mail className="w-5 h-5 text-calcNavy" />
              How to Contact Us
            </h2>
            <p className="text-slate-700 text-xs sm:text-sm">
              You can contact us by email for:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pl-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
                <span>Questions about our calculators</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
                <span>Reporting a calculation or technical issue</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
                <span>Suggestions and feedback</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
                <span>Reporting a broken page or link</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0 mt-0.5" />
                <span>General enquiries</span>
              </li>
            </ul>

            <div className="p-4 bg-[#003366] text-white rounded-xl space-y-1 mt-4">
              <div className="text-xs text-blue-200 uppercase font-bold tracking-wider">Direct Email Address</div>
              <a 
                href="mailto:contact@agecalculator.today" 
                className="text-base sm:text-lg font-mono font-bold text-white hover:text-yellow-300 transition-colors block break-all"
              >
                contact@agecalculator.today
              </a>
            </div>

            <p className="text-xs text-slate-500 pt-1">
              We aim to review messages and respond as soon as possible.
            </p>
          </div>

          {/* Before Contacting Us Note */}
          <div className="bg-[#f8fafc] p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-calcNavy-dark tracking-tight flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-calcNavy" />
              Before Contacting Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In case you encounter some sort of error with one of our calculators, kindly mention the name of the calculator and, whenever possible, the period during which the error occurred. This will help us understand your complaint better and assist us in solving it faster.
            </p>
            <p className="text-xs text-slate-600 pt-1 border-t border-slate-200">
              <a href="http://agecalculator.today/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-calcNavy font-semibold underline hover:text-calcBlue">Our Privacy Policy</a> details how we collect, use and store website information.
            </p>
          </div>
        </div>

        {/* Interactive Send Message Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-calcNavy-dark flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-calcNavy" />
              Send Us a Message
            </h2>
            <span className="text-xs text-slate-500">We typically reply within 24–48 hours</span>
          </div>

          {submitted ? (
            <div className="p-6 bg-calcGreen-light border border-calcGreen-border rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-calcGreen mx-auto" />
              <h3 className="text-lg font-bold text-calcNavy-dark">Thank you for your message!</h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Your message has been recorded. We will review your feedback regarding <strong>{formData.calculatorName || 'our calculators'}</strong> and reply to <strong>{formData.email}</strong> as soon as possible.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-calcNavy text-white text-xs font-bold rounded-lg hover:bg-calcNavy-light transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ali Ahmed"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ali@example.com"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Topic / Category</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Report Bug">Reporting a calculation / technical issue</option>
                    <option value="Suggestion">Suggestions & Feature Requests</option>
                    <option value="Broken Link">Broken page or link</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-700">Calculator Name (Optional)</label>
                  <input
                    type="text"
                    value={formData.calculatorName}
                    onChange={(e) => setFormData({ ...formData, calculatorName: e.target.value })}
                    placeholder="e.g. School Age Calculator"
                    className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-bold text-slate-700">Message / Details</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe your enquiry, feedback, or any calculation details..."
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-calcBlue"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-calcGreen hover:bg-calcGreen-hover text-white font-bold rounded-lg shadow transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* COMMON REASONS TO REACH OUT */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Common Reasons to Reach Out
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-2.5">
            <Bug className="w-4 h-4 text-calcNavy shrink-0 mt-0.5" />
            <div><strong>Reporting an incorrect or unexpected result</strong></div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-2.5">
            <Lightbulb className="w-4 h-4 text-calcNavy shrink-0 mt-0.5" />
            <div><strong>Suggesting a new calculator or feature</strong></div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-calcNavy shrink-0 mt-0.5" />
            <div><strong>Asking how a specific calculation works</strong></div>
          </div>
          <div className="p-3.5 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-calcNavy shrink-0 mt-0.5" />
            <div><strong>General feedback on the site</strong></div>
          </div>
        </div>
      </section>

      {/* FOLLOW US & CLOSING NOTE */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-lg font-bold text-calcNavy-dark">
          Follow Us
        </h2>
        <div className="border-t border-slate-200 pt-4 text-center">
          <p className="text-slate-700 text-sm italic font-medium">
            We read every message — thanks for taking the time to reach out.
          </p>
        </div>
      </section>
    </div>
  );
}
