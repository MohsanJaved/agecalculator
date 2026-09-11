import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AgeInYearsPage from './pages/AgeInYearsPage.jsx';
import AgeInMonthsPage from './pages/AgeInMonthsPage.jsx';
import AgeInWeeksPage from './pages/AgeInWeeksPage.jsx';
import AgeInDaysPage from './pages/AgeInDaysPage.jsx';
import AgeInHoursPage from './pages/AgeInHoursPage.jsx';
import AgeInMinutesPage from './pages/AgeInMinutesPage.jsx';
import AgeInSecondsPage from './pages/AgeInSecondsPage.jsx';
import AgeOnSpecificDatePage from './pages/AgeOnSpecificDatePage.jsx';
import BirthdayCalculatorPage from './pages/BirthdayCalculatorPage.jsx';
import BabyAgeCalculatorPage from './pages/BabyAgeCalculatorPage.jsx';
import SchoolAgeCalculatorPage from './pages/SchoolAgeCalculatorPage.jsx';
import LegalAgeCalculatorPage from './pages/LegalAgeCalculatorPage.jsx';
import LeapYearCalculatorPage from './pages/LeapYearCalculatorPage.jsx';
import DateCalculatorPage from './pages/DateCalculatorPage.jsx';
import AboutUsPage from './pages/utilities/AboutUsPage.jsx';
import ContactUsPage from './pages/utilities/ContactUsPage.jsx';
import PrivacyPolicyPage from './pages/utilities/PrivacyPolicyPage.jsx';
import TermsPage from './pages/utilities/TermsPage.jsx';
import DisclaimerPage from './pages/utilities/DisclaimerPage.jsx';
import HowItWorksPage from './pages/utilities/HowItWorksPage.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between font-sans">
        <Header />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/age-in-years" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInYearsPage /></div>} />
            <Route path="/age-in-months" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInMonthsPage /></div>} />
            <Route path="/age-in-weeks" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInWeeksPage /></div>} />
            <Route path="/age-in-days" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInDaysPage /></div>} />
            <Route path="/age-in-hours" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInHoursPage /></div>} />
            <Route path="/age-in-minutes" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInMinutesPage /></div>} />
            <Route path="/age-in-seconds" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeInSecondsPage /></div>} />
            <Route path="/age-on-specific-date" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeOnSpecificDatePage /></div>} />
            <Route path="/age-on-specific-date/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AgeOnSpecificDatePage /></div>} />
            <Route path="/birthday-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><BirthdayCalculatorPage /></div>} />
            <Route path="/birthday-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><BirthdayCalculatorPage /></div>} />
            <Route path="/baby-age-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><BabyAgeCalculatorPage /></div>} />
            <Route path="/baby-age-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><BabyAgeCalculatorPage /></div>} />
            <Route path="/school-age-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><SchoolAgeCalculatorPage /></div>} />
            <Route path="/school-age-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><SchoolAgeCalculatorPage /></div>} />
            <Route path="/legal-age-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><LegalAgeCalculatorPage /></div>} />
            <Route path="/legal-age-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><LegalAgeCalculatorPage /></div>} />
            <Route path="/leap-year-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><LeapYearCalculatorPage /></div>} />
            <Route path="/leap-year-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><LeapYearCalculatorPage /></div>} />
            <Route path="/date-calculator" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><DateCalculatorPage /></div>} />
            <Route path="/date-calculator/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><DateCalculatorPage /></div>} />
            <Route path="/about-us" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AboutUsPage /></div>} />
            <Route path="/about-us/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><AboutUsPage /></div>} />
            <Route path="/contact-us" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><ContactUsPage /></div>} />
            <Route path="/contact-us/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><ContactUsPage /></div>} />
            <Route path="/privacy-policy" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><PrivacyPolicyPage /></div>} />
            <Route path="/privacy-policy/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><PrivacyPolicyPage /></div>} />
            <Route path="/terms" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><TermsPage /></div>} />
            <Route path="/terms/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><TermsPage /></div>} />
            <Route path="/disclaimer" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><DisclaimerPage /></div>} />
            <Route path="/disclaimer/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><DisclaimerPage /></div>} />
            <Route path="/how-it-works" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><HowItWorksPage /></div>} />
            <Route path="/how-it-works/" element={<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10"><HowItWorksPage /></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
