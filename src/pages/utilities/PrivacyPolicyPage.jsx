import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  Cookie, 
  BarChart3, 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  Mail, 
  FileText,
  Clock,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-10 max-w-4xl mx-auto">
      {/* HERO / TITLE */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="inline-block px-3 py-1 rounded bg-calcBlue-light text-calcBlue text-xs font-semibold border border-blue-100">
          Legal & Privacy
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-calcNavy-dark tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 border-t border-slate-100">
          Privacy is very essential to us. The privacy policy describes how we collect, use and protect your personal information on{' '}
          <a 
            href="http://agecalculator.today/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-calcNavy font-semibold underline hover:text-calcBlue transition-colors"
          >
            our website
          </a>{' '}
          when you visit and make use of the calculators available on this site.
        </p>
        <div className="p-4 bg-[#f8fafc] border-l-4 border-calcNavy rounded-r-xl text-slate-700 text-sm font-medium">
          By using our site, you consent to this privacy policy.
        </div>
      </section>

      {/* INFORMATION WE COLLECT & CALCULATOR INFORMATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Information We Collect */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <EyeOff className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Information We Collect</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            We aim to keep our calculators simple and privacy-friendly.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            When you use our calculators, you may enter information such as dates of birth, dates, or other information required to perform a calculation. This information is used to provide the requested calculation.
          </p>
          <div className="p-3 bg-calcGreen-light border border-calcGreen-border rounded-xl text-xs sm:text-sm text-calcGreen-dark font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>We do not require you to create an account to use our calculators.</span>
          </div>
        </div>

        {/* Calculator Information */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Server className="w-6 h-6 text-calcNavy" />
            <h2 className="text-xl font-bold text-calcNavy-dark">Calculator Information</h2>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Information entered into a calculator is used to generate the requested result.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Where calculations are performed directly in your browser, the information you enter does not need to be sent to our servers for the calculation.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm bg-[#f8fafc] p-3 rounded-xl border border-slate-200">
            You should avoid entering unnecessary personal or confidential information into any calculator or contact form.
          </p>
        </div>
      </div>

      {/* INFORMATION COLLECTED AUTOMATICALLY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          Information Collected Automatically
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          When you visit our website, certain technical information may be collected automatically, such as:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 pt-1">
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>IP address</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Browser type</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Device type</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Operating system</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Pages visited</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Date and time of your visit</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>Referring website</span>
          </div>
          <div className="p-3 bg-[#f8fafc] border border-slate-200 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-calcNavy shrink-0"></span>
            <span>General website usage information</span>
          </div>
        </div>
        <p className="text-slate-700 text-sm leading-relaxed pt-2">
          This information may be used to maintain website security, understand website usage, identify technical problems, and improve our services.
        </p>
      </section>

      {/* COOKIES & ANALYTICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cookies */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <Cookie className="w-6 h-6 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Cookies</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Our website may use cookies and similar technologies to improve functionality and understand how visitors use the website.
          </p>
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">Cookies may be used for:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>Website functionality</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>Analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>Security</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>Remembering preferences</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-calcNavy shrink-0"></span>
                <span>Advertising, where applicable</span>
              </li>
            </ul>
          </div>
          <p className="text-slate-600 text-xs bg-[#f8fafc] p-3 rounded-xl border border-slate-200">
            You can manage or disable cookies through your browser settings. Disabling certain cookies may affect some website features.
          </p>
        </div>

        {/* Analytics */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <BarChart3 className="w-6 h-6 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Analytics</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            We can make use of analytics service providers to know how visitors navigate through our website. Such service providers can gather information including but not limited to pages visited, geographic location, device information, and other similar usage information.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Usage information provides us insight into useful tools and areas for improvement.
          </p>
        </div>
      </div>

      {/* ADVERTISING & THIRD-PARTY LINKS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Advertising */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-calcNavy-dark border-b border-slate-200 pb-3">
            Advertising
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Our calculators are usually publicly accessible and not intended for collection of any personal data about children.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We do not intentionally ask for additional personal data from children.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
            <ExternalLink className="w-5 h-5 text-calcNavy" />
            <h3 className="text-xl font-bold text-calcNavy-dark">Third-Party Links</h3>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Our website may include links to other web sites operated by third parties.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            We are not responsible for their privacy policies or their content or security. We suggest that you refer to the privacy policy of any such third-party website.
          </p>
        </div>
      </div>

      {/* HOW WE USE INFORMATION */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-calcNavy-dark tracking-tight">
          How We Use Information
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          Information collected through the website may be used to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Provide and operate our calculators</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Improve website functionality</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Monitor website performance</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Detect and prevent security issues</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Understand visitor usage</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Respond to enquiries</span>
          </div>
          <div className="flex items-center gap-2.5 p-3 bg-[#f8fafc] border border-slate-200 rounded-xl sm:col-span-2">
            <CheckCircle2 className="w-4 h-4 text-calcGreen shrink-0" />
            <span>Improve our content and services</span>
          </div>
        </div>
        <div className="p-3 bg-calcGreen-light border border-calcGreen-border rounded-xl text-xs sm:text-sm text-calcGreen-dark font-semibold mt-2">
          We do not sell personal information simply for the purpose of providing our calculator services.
        </div>
      </section>

      {/* DATA SECURITY, CHILDREN'S PRIVACY & PRIVACY CHOICES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Data Security */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <Lock className="w-5 h-5 text-calcNavy" />
            <h3 className="text-lg font-bold text-calcNavy-dark">Data Security</h3>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            We take reasonable steps to protect information associated with our website. However, no website or internet transmission can be guaranteed to be completely secure.
          </p>
        </div>

        {/* Children's Privacy */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <Users className="w-5 h-5 text-calcNavy" />
            <h3 className="text-lg font-bold text-calcNavy-dark">Children's Privacy</h3>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Our calculators are generally available to the public and are not specifically directed toward collecting personal information from children.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            We do not knowingly request unnecessary personal information from children.
          </p>
        </div>

        {/* Your Privacy Choices */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <ShieldCheck className="w-5 h-5 text-calcNavy" />
            <h3 className="text-lg font-bold text-calcNavy-dark">Your Privacy Choices</h3>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            According to applicable law in your jurisdiction, you may have certain rights related to your personal information, which include but are not limited to the right to access, correct, delete, or restrict the use of certain personal data.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            Cookies can be managed in your web browser or via the applicable consent management tool.
          </p>
          <p className="text-slate-700 text-xs sm:text-sm font-semibold pt-1">
            To submit a request, please contact us.
          </p>
        </div>
      </div>

      {/* CHANGES TO THIS PRIVACY POLICY */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <h2 className="text-xl font-bold text-calcNavy-dark tracking-tight">
          Changes to This Privacy Policy
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          We may update this Privacy Policy from time to time to reflect changes to our website, services, technology, or applicable requirements.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          Any changes will be posted on this page with an updated <strong className="text-calcNavy">Last Updated</strong> date.
        </p>
      </section>

      {/* CONTACT US */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-calcNavy-dark">
          Contact Us
        </h2>
        <p className="text-slate-700 text-sm leading-relaxed">
          If you have questions about this Privacy Policy or how information is handled on our website, please contact us through{' '}
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
