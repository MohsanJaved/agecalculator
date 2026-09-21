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
import CanonicalManager from './components/CanonicalManager.jsx';

export default function App() {
  return (
    <Router>
      <CanonicalManager />
      <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between font-sans">
        <Header />
        <main className="w-full flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/age-in-years" element={<AgeInYearsPage />} />
            <Route path="/age-in-months" element={<AgeInMonthsPage />} />
            <Route path="/age-in-weeks" element={<AgeInWeeksPage />} />
            <Route path="/age-in-days" element={<AgeInDaysPage />} />
            <Route path="/age-in-hours" element={<AgeInHoursPage />} />
            <Route path="/age-in-minutes" element={<AgeInMinutesPage />} />
            <Route path="/age-in-seconds" element={<AgeInSecondsPage />} />
            <Route path="/age-on-specific-date" element={<AgeOnSpecificDatePage />} />
            <Route path="/age-on-specific-date/" element={<AgeOnSpecificDatePage />} />
            <Route path="/birthday-calculator" element={<BirthdayCalculatorPage />} />
            <Route path="/birthday-calculator/" element={<BirthdayCalculatorPage />} />
            <Route path="/baby-age-calculator" element={<BabyAgeCalculatorPage />} />
            <Route path="/baby-age-calculator/" element={<BabyAgeCalculatorPage />} />
            <Route path="/school-age-calculator" element={<SchoolAgeCalculatorPage />} />
            <Route path="/school-age-calculator/" element={<SchoolAgeCalculatorPage />} />
            <Route path="/legal-age-calculator" element={<LegalAgeCalculatorPage />} />
            <Route path="/legal-age-calculator/" element={<LegalAgeCalculatorPage />} />
            <Route path="/leap-year-calculator" element={<LeapYearCalculatorPage />} />
            <Route path="/leap-year-calculator/" element={<LeapYearCalculatorPage />} />
            <Route path="/date-calculator" element={<DateCalculatorPage />} />
            <Route path="/date-calculator/" element={<DateCalculatorPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/about-us/" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/contact-us/" element={<ContactUsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/terms/" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/disclaimer/" element={<DisclaimerPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/how-it-works/" element={<HowItWorksPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
