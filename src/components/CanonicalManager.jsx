import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://agecalculator.today';

// Page metadata mapping for titles and descriptions
const PAGE_METADATA = {
  '/': {
    title: 'Age Calculator Today – Find Exact Age in Years, Months & Days',
    description: 'Calculate your exact age from your date of birth. See your age in years, months, days, weeks, hours, minutes & seconds — plus your next birthday.'
  },
  '/age-in-years': {
    title: 'Age in Years Calculator – How Many Years Old Are You?',
    description: 'Find your exact age in years from your date of birth. Useful for age milestones, career planning, and eligibility checks.'
  },
  '/age-in-months': {
    title: 'Age in Months Calculator – How Many Months Old Are You?',
    description: 'Find your exact age in months from your date of birth. Useful for child development milestones, loan terms, and eligibility checks.'
  },
  '/age-in-weeks': {
    title: 'Age in Weeks Calculator – Total Weeks Lived & Life Progress',
    description: 'Calculate your exact age in total weeks and days lived with an interactive life in weeks visualization.'
  },
  '/age-in-days': {
    title: 'Age in Days Calculator – Total Days Lived & Milestone Tracker',
    description: 'Discover the exact number of days you have been alive, upcoming day milestones (10k, 20k days), and leap days lived.'
  },
  '/age-in-hours': {
    title: 'Age in Hours Calculator – Total Hours Lived & Heartbeat Stats',
    description: 'Convert your age into total hours lived. View fascinating biological statistics like estimated heartbeats and breaths.'
  },
  '/age-in-minutes': {
    title: 'Age in Minutes Calculator – Exact Minutes of Life Tracker',
    description: 'Calculate the total number of minutes you have lived since birth with real-time live clock counting.'
  },
  '/age-in-seconds': {
    title: 'Age in Seconds Calculator – Real-Time Live Seconds Ticker',
    description: 'Watch your life seconds tick in real-time. Calculate total seconds lived from your birth date and time.'
  },
  '/age-on-specific-date': {
    title: 'Age on Specific Date Calculator – Past & Future Age Lookup',
    description: 'Calculate how old you were or will be on any past or future historical date or milestone event.'
  },
  '/birthday-calculator': {
    title: 'Birthday Calculator – Next Birthday Countdown, Half Birthday & Day of Birth',
    description: 'Find your birth day of the week, next birthday countdown, half-birthday date, and historical birthday facts.'
  },
  '/baby-age-calculator': {
    title: 'Baby Age Calculator – Weeks, Months & Milestone Tracker for Infants',
    description: 'Track baby age accurately in weeks, months, and days. Ideal for doctor visits, milestones, and feeding schedules.'
  },
  '/school-age-calculator': {
    title: 'School Age Calculator – Grade Placement & Eligibility Checker',
    description: 'Determine which school grade or kindergarten level a child is eligible for based on birth date and cutoff dates.'
  },
  '/legal-age-calculator': {
    title: 'Legal Age Calculator – Driving, Voting, Retirement & Age of Majority',
    description: 'Check legal milestone eligibility including driving age, voting age, legal adulthood, alcohol laws, and retirement.'
  },
  '/leap-year-calculator': {
    title: 'Leap Year Calculator – Leap Years Lived & Leap Day Birthday Age',
    description: 'Calculate leap years lived between two dates, check if any year is a leap year, and calculate leapling birthdays.'
  },
  '/date-calculator': {
    title: 'Date Calculator – Days Between Dates & Add/Subtract Days',
    description: 'Calculate the exact duration between two calendar dates, business days, or add/subtract days from a date.'
  },
  '/how-it-works': {
    title: 'How It Works – Age Calculation Formulas, Logic & Standards',
    description: 'Learn how our age calculation engine works, accounting for leap years, Gregorian calendars, and time zones.'
  },
  '/about-us': {
    title: 'About Us – Accurate Time & Age Calculation Tools',
    description: 'Learn about AgeCalculator.today, our mission for mathematical accuracy, and our precision calculation suite.'
  },
  '/contact-us': {
    title: 'Contact Us – AgeCalculator.today Support & Feedback',
    description: 'Get in touch with the AgeCalculator.today team for questions, suggestions, feedback, or bug reports.'
  },
  '/privacy-policy': {
    title: 'Privacy Policy – AgeCalculator.today',
    description: 'Our privacy policy details how we protect your information and ensure client-side privacy calculations.'
  },
  '/terms': {
    title: 'Terms of Service – AgeCalculator.today',
    description: 'Read the terms of service and usage conditions for AgeCalculator.today calculation tools.'
  },
  '/disclaimer': {
    title: 'Disclaimer – AgeCalculator.today',
    description: 'Disclaimer and informational usage terms for AgeCalculator.today calculators and tools.'
  }
};

export default function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Normalize pathname: strip trailing slashes (except root '/')
    let cleanPath = pathname.toLowerCase();
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    // 2. Build canonical self URL
    const canonicalUrl = cleanPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${cleanPath}`;

    // 3. Update or create <link rel="canonical" href="...">
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update or create Open Graph URL <meta property="og:url" content="...">
    let ogUrlMeta = document.querySelector("meta[property='og:url']");
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);

    // 5. Update title and meta description if defined for this route
    const metaInfo = PAGE_METADATA[cleanPath];
    if (metaInfo) {
      if (metaInfo.title) {
        document.title = metaInfo.title;
      }
      if (metaInfo.description) {
        let descMeta = document.querySelector("meta[name='description']");
        if (!descMeta) {
          descMeta = document.createElement('meta');
          descMeta.setAttribute('name', 'description');
          document.head.appendChild(descMeta);
        }
        descMeta.setAttribute('content', metaInfo.description);
      }
    }

    // 6. Scroll smoothly to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
