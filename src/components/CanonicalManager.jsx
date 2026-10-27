import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, LANGUAGES, DEFAULT_LANGUAGE } from '../i18n/config';
import { resolveLanguage, resolvePageId, getAllHreflangLinks, normalizePath } from '../i18n/routeMap';
import { TRANSLATIONS } from '../i18n/translations';

const BASE_PAGE_METADATA = {
  home: {
    title: 'Age Calculator Today – Find Exact Age in Years, Months & Days',
    description: 'Calculate your exact age from your date of birth. See your age in years, months, days, weeks, hours, minutes & seconds — plus your next birthday.'
  },
  'age-in-years': {
    title: 'Age in Years Calculator – How Many Years Old Are You?',
    description: 'Find your exact age in years from your date of birth. Useful for age milestones, career planning, and eligibility checks.'
  },
  'age-in-months': {
    title: 'Age in Months Calculator – How Many Months Old Are You?',
    description: 'Find your exact age in months from your date of birth. Useful for child development milestones, loan terms, and eligibility checks.'
  },
  'age-in-weeks': {
    title: 'Age in Weeks Calculator – Total Weeks Lived & Life Progress',
    description: 'Calculate your exact age in total weeks and days lived with an interactive life in weeks visualization.'
  },
  'age-in-days': {
    title: 'Age in Days Calculator – Total Days Lived & Milestone Tracker',
    description: 'Discover the exact number of days you have been alive, upcoming day milestones (10k, 20k days), and leap days lived.'
  },
  'age-in-hours': {
    title: 'Age in Hours Calculator – Total Hours Lived & Heartbeat Stats',
    description: 'Convert your age into total hours lived. View fascinating biological statistics like estimated heartbeats and breaths.'
  },
  'age-in-minutes': {
    title: 'Age in Minutes Calculator – Exact Minutes of Life Tracker',
    description: 'Calculate the total number of minutes you have lived since birth with real-time live clock counting.'
  },
  'age-in-seconds': {
    title: 'Age in Seconds Calculator – Real-Time Live Seconds Ticker',
    description: 'Watch your life seconds tick in real-time. Calculate total seconds lived from your birth date and time.'
  },
  'age-on-specific-date': {
    title: 'Age on Specific Date Calculator – Past & Future Age Lookup',
    description: 'Calculate how old you were or will be on any past or future historical date or milestone event.'
  },
  'birthday-calculator': {
    title: 'Birthday Calculator – Next Birthday Countdown & Day of Birth',
    description: 'Find your birth day of the week, next birthday countdown, half-birthday date, and historical birthday facts.'
  },
  'baby-age-calculator': {
    title: 'Baby Age Calculator – Weeks, Months & Milestone Tracker',
    description: 'Track baby age accurately in weeks, months, and days. Ideal for pediatric visits, milestones, and feeding schedules.'
  },
  'school-age-calculator': {
    title: 'School Age Calculator – Grade Placement & Cutoff Checker',
    description: 'Determine which school grade or kindergarten level a child is eligible for based on birth date and cutoff dates.'
  },
  'legal-age-calculator': {
    title: 'Legal Age Calculator – Driving, Voting & Adulthood Milestones',
    description: 'Check legal milestone eligibility including driving age, voting age, legal adulthood, and retirement age dates.'
  },
  'leap-year-calculator': {
    title: 'Leap Year Calculator – Leap Years Lived & Leap Day Age',
    description: 'Calculate leap years lived between two dates, check if any year is a leap year, and calculate leapling birthdays.'
  },
  'date-calculator': {
    title: 'Date Calculator – Days Between Dates & Add/Subtract Days',
    description: 'Calculate the exact duration between two calendar dates, business days, or add/subtract days from a date.'
  },
  'how-it-works': {
    title: 'How It Works – Age Calculation Formulas, Logic & Standards',
    description: 'Learn how our age calculation engine works, accounting for leap years, Gregorian calendars, and time zones.'
  },
  'about-us': {
    title: 'About Us – Accurate Time & Age Calculation Tools',
    description: 'Learn about AgeCalculator.today, our mission for mathematical accuracy, and our precision calculation suite.'
  },
  'contact-us': {
    title: 'Contact Us – AgeCalculator.today Support & Feedback',
    description: 'Get in touch with the AgeCalculator.today team for questions, suggestions, feedback, or bug reports.'
  },
  'privacy-policy': {
    title: 'Privacy Policy – AgeCalculator.today',
    description: 'Our privacy policy details how we protect your information and ensure client-side privacy calculations.'
  },
  'terms': {
    title: 'Terms of Service – AgeCalculator.today',
    description: 'Read the terms of service and usage conditions for AgeCalculator.today calculation tools.'
  },
  'disclaimer': {
    title: 'Disclaimer – AgeCalculator.today',
    description: 'Disclaimer and informational usage terms for AgeCalculator.today calculators and tools.'
  }
};

// Multilingual metadata dictionary for Tier 1 languages
const MULTILINGUAL_PAGE_METADATA = {
  es: {
    home: {
      title: 'Calculadora de Edad – Calcular Edad Exacta en Años y Días',
      description: 'Calcula tu edad exacta por fecha de nacimiento. Descubre cuántos años, meses, días y horas tienes con cuenta regresiva para tu próximo cumpleaños.'
    },
    'age-in-years': {
      title: 'Edad en Años – Calculadora de Años Cumplidos Exactos',
      description: 'Calcula tu edad exacta en años cumplidos desde tu nacimiento. Ideal para trámites oficiales, hitos de vida y requisitos de edad.'
    },
    'age-in-months': {
      title: 'Edad en Meses – Calculadora de Meses Totales Vividos',
      description: 'Calcula el número exacto de meses vividos desde tu nacimiento. Útil para desarrollo infantil, préstamos y seguimiento médico.'
    },
    'age-in-weeks': {
      title: 'Edad en Semanas – Calculadora de Semanas y Días Vividos',
      description: 'Descubre cuántas semanas completas has vivido desde tu fecha de nacimiento con gráfico de vida interactivo.'
    },
    'age-in-days': {
      title: 'Edad en Días – Calculadora de Días Totales Vividos',
      description: 'Calcula cuántos días exactos tienes de vida, próximos hitos de 10.000 días y días bisiestos vividos.'
    },
    'birthday-calculator': {
      title: 'Calculadora de Cumpleaños – Cuenta Regresiva y Día de Nacimiento',
      description: 'Descubre qué día de la semana naciste, cuántos días faltan para tu cumpleaños y datos curiosos de tu fecha.'
    },
    'baby-age-calculator': {
      title: 'Calculadora de Edad de Bebé – Semanas y Meses del Lactante',
      description: 'Lleva el control exacto de la edad de tu bebé en semanas, meses y días para visitas pediátricas y vacunas.'
    },
    'date-calculator': {
      title: 'Calculadora de Fechas – Días Entre Dos Fechas',
      description: 'Calcula la diferencia exacta de días, meses y años entre dos fechas del calendario o suma y resta días fácilmente.'
    }
  },
  'pt-br': {
    home: {
      title: 'Calculadora de Idade – Calcular Idade Exata em Anos e Dias',
      description: 'Calcule sua idade exata pela data de nascimento. Veja quantos anos, meses, dias e horas você já viveu e a contagem para seu aniversário.'
    },
    'age-in-years': {
      title: 'Idade em Anos – Calcule Quantos Anos Você Tem',
      description: 'Descubra sua idade exata em anos completos a partir da sua data de nascimento para metas e planejamento.'
    },
    'age-in-months': {
      title: 'Idade em Meses – Total de Meses de Vida Vividos',
      description: 'Calcule a quantidade exata de meses que você tem desde que nasceu. Perfeito para bebês e controle de prazos.'
    },
    'age-in-weeks': {
      title: 'Idade em Semanas – Total de Semanas Vividas',
      description: 'Calcule exatamente quantas semanas de vida você já completou com mapa visual do seu tempo.'
    },
    'age-in-days': {
      title: 'Idade em Dias – Total de Dias de Vida Calculados',
      description: 'Saiba quantos dias você viveu até hoje com cálculo de anos bissextos e marcos de 10.000 dias.'
    },
    'birthday-calculator': {
      title: 'Calculadora de Aniversário – Contagem Regressiva Exata',
      description: 'Veja quantos dias faltam para seu próximo aniversário, em qual dia da semana você nasceu e estatísticas.'
    },
    'baby-age-calculator': {
      title: 'Calculadora de Idade do Bebê – Semanas e Meses',
      description: 'Acompanhe a idade exata do bebê em semanas, meses e dias para consultas com o pediatra e marcos motores.'
    },
    'date-calculator': {
      title: 'Calculadora de Datas – Diferença de Dias Entre Datas',
      description: 'Calcule a distância exata em dias, semanas e meses entre duas datas ou some dias a uma data.'
    }
  },
  de: {
    home: {
      title: 'Altersrechner – Exaktes Alter in Jahren, Monaten & Tagen',
      description: 'Berechnen Sie Ihr exaktes Alter ab Geburtsdatum. Zeigt Jahre, Monate, Tage, Stunden sowie Countdown zum nächsten Geburtstag.'
    },
    'age-in-years': {
      title: 'Alter in Jahren – Wie viele Jahre alt sind Sie genau?',
      description: 'Ermitteln Sie Ihr vollendetes Alter in Jahren ab Ihrem Geburtsdatum für Meilensteine und offizielle Fristen.'
    },
    'age-in-months': {
      title: 'Alter in Monaten – Gesamtzahl der Lebensmonate berechnen',
      description: 'Ermitteln Sie die genaue Anzahl an Lebensmonaten ab Geburt. Hilfreich für Kinderentwicklung und Verträge.'
    },
    'age-in-weeks': {
      title: 'Alter in Wochen – Gelebte Wochen und Lebensfortschritt',
      description: 'Berechnen Sie Ihr exaktes Lebensalter in vollen Wochen und Tagen mit visueller Lebenszeit-Übersicht.'
    },
    'age-in-days': {
      title: 'Alter in Tagen – Exakte Anzahl gelebter Lebenstage',
      description: 'Erfahren Sie, wie viele Tage Sie bereits auf der Erde leben, inklusive Schaltjahre und 10.000-Tage-Meilensteine.'
    },
    'birthday-calculator': {
      title: 'Geburtstagsrechner – Countdown zum nächsten Geburtstag',
      description: 'Wochentag der Geburt ermitteln, Tage bis zum nächsten Geburtstag zählen und Halbgeburtstag berechnen.'
    },
    'baby-age-calculator': {
      title: 'Baby-Altersrechner – Exakte Wochen und Monate für Säuglinge',
      description: 'Verfolgen Sie das genaue Alter Ihres Babys in Wochen und Monaten für Arztbesuche und Impftermine.'
    },
    'date-calculator': {
      title: 'Datumsrechner – Tage zwischen zwei Kalenderdaten berechnen',
      description: 'Berechnen Sie die genaue Zeitspanne zwischen zwei Daten oder addieren und subtrahieren Sie Tage schnell.'
    }
  },
  fr: {
    home: {
      title: "Calculateur d'Âge – Calculer son Âge Exact en Ans et Jours",
      description: "Calculez votre âge exact à partir de votre date de naissance. Nombre d'années, mois, jours et compte à rebours de votre anniversaire."
    },
    'age-in-years': {
      title: "Âge en Années – Calculer votre Âge Exact en Ans",
      description: "Découvrez votre âge exact en années révolues depuis votre naissance pour vos démarches et étapes clés."
    },
    'age-in-months': {
      title: "Âge en Mois – Calculateur du Nombre Total de Mois Vécus",
      description: "Calculez précisément combien de mois vous avez vécus depuis le jour de votre naissance."
    },
    'age-in-weeks': {
      title: "Âge en Semaines – Nombre de Semaines de Vie Écoulées",
      description: "Calculez votre âge en semaines totales vécues avec visualisation de votre progression de vie."
    },
    'age-in-days': {
      title: "Âge en Jours – Calculateur de Jours Vécus depuis la Naissance",
      description: "Découvrez le nombre exact de jours que vous avez vécus, vos anniversaires de 10 000 jours et années bissextiles."
    },
    'birthday-calculator': {
      title: "Calculateur d'Anniversaire – Compte à Rebours et Jour de Naissance",
      description: "Trouvez votre jour de naissance, le compte à rebours de votre prochain anniversaire et votre demi-anniversaire."
    },
    'baby-age-calculator': {
      title: "Calculateur d'Âge Bébé – Semaines et Mois du Nourrisson",
      description: "Suivez l'âge exact de votre bébé en semaines et mois pour le suivi pédiatrique et la croissance."
    },
    'date-calculator': {
      title: "Calculateur de Date – Nombre de Jours Entre Deux Dates",
      description: "Calculez la durée exacte entre deux dates ou ajoutez et soustrayez des jours en quelques clics."
    }
  },
  it: {
    home: {
      title: 'Calcolo Età – Calcola la Tua Età Esatta in Anni e Giorni',
      description: 'Calcola la tua età esatta dalla data di nascita. Scopri quanti anni, mesi, giorni hai vissuto con conto alla rovescia del compleanno.'
    },
    'age-in-years': {
      title: 'Età in Anni – Calcola Quanti Anni Compiuti Hai',
      description: 'Trova la tua età esatta in anni completi dalla data di nascita per traguardi di vita e requisiti legali.'
    },
    'age-in-months': {
      title: 'Età in Mesi – Calcolo dei Mesi Totali Vissuti',
      description: 'Calcola esattamente quanti mesi hai vissuto dal momento della nascita per visite pediatriche e scadenze.'
    },
    'age-in-weeks': {
      title: 'Età in Settimane – Settimane Totali di Vita Trascorse',
      description: 'Calcola la tua età in settimane e giorni trascorsi con mappa visiva della vita.'
    },
    'age-in-days': {
      title: 'Età in Giorni – Calcolatore Giorni Totali Vissuti',
      description: 'Scopri quanti giorni hai vissuto fino ad oggi con calcolo degli anni bisestili e traguardi di 10.000 giorni.'
    },
    'birthday-calculator': {
      title: 'Calcolatore Compleanno – Conto alla Rovescia Prossimo Compleanno',
      description: 'Scopri che giorno della settimana sei nato e quanti giorni mancano al tuo prossimo compleanno.'
    },
    'baby-age-calculator': {
      title: 'Calcolatore Età Neonato – Settimane e Mesi del Bambino',
      description: 'Monitora con precisione l’età del tuo bambino in settimane e mesi per visite pediatriche e tappe motorie.'
    },
    'date-calculator': {
      title: 'Calcolatore Date – Differenza Giorni Tra Due Date',
      description: 'Calcola la durata esatta in giorni tra due date del calendario oppure aggiungi e sottrai giorni con facilità.'
    }
  }
};

export default function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const cleanPath = normalizePath(pathname);
    const currentLang = resolveLanguage(cleanPath);
    const langInfo = LANGUAGES[currentLang] || LANGUAGES[DEFAULT_LANGUAGE];
    const pageId = resolvePageId(cleanPath);

    // 1. Update <html lang="..."> attribute dynamically
    if (document.documentElement) {
      document.documentElement.lang = langInfo.htmlLang;
      document.documentElement.dir = langInfo.dir || 'ltr';
    }

    // 2. Build Self-Referencing Canonical URL
    // Rule: Every page has a self-referencing canonical. A translated page must NOT canonical to English!
    const canonicalUrl = cleanPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Inject reciprocal hreflang alternate links + x-default
    // Rule: Each page must list all versions, including itself, and every version must point back (reciprocal)
    const existingHreflangs = document.querySelectorAll("link[rel='alternate'][hreflang]");
    existingHreflangs.forEach((el) => el.remove());

    const hreflangLinks = getAllHreflangLinks(cleanPath);
    hreflangLinks.forEach(({ hreflang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    // 4. Update Open Graph URL & Locale
    let ogUrlMeta = document.querySelector("meta[property='og:url']");
    if (!ogUrlMeta) {
      ogUrlMeta = document.createElement('meta');
      ogUrlMeta.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlMeta);
    }
    ogUrlMeta.setAttribute('content', canonicalUrl);

    let ogLocaleMeta = document.querySelector("meta[property='og:locale']");
    if (!ogLocaleMeta) {
      ogLocaleMeta = document.createElement('meta');
      ogLocaleMeta.setAttribute('property', 'og:locale');
      document.head.appendChild(ogLocaleMeta);
    }
    ogLocaleMeta.setAttribute('content', langInfo.locale.replace('-', '_'));

    // 5. Update Localized Title and Meta Description
    let metaInfo = null;
    if (currentLang !== 'en' && MULTILINGUAL_PAGE_METADATA[currentLang]?.[pageId]) {
      metaInfo = MULTILINGUAL_PAGE_METADATA[currentLang][pageId];
    } else if (currentLang !== 'en' && TRANSLATIONS[currentLang]?.pages?.[pageId]) {
      metaInfo = TRANSLATIONS[currentLang].pages[pageId];
    } else if (BASE_PAGE_METADATA[pageId]) {
      metaInfo = BASE_PAGE_METADATA[pageId];
    }

    if (metaInfo) {
      if (metaInfo.title) {
        document.title = metaInfo.title;
        let ogTitleMeta = document.querySelector("meta[property='og:title']");
        if (ogTitleMeta) ogTitleMeta.setAttribute('content', metaInfo.title);
      }
      if (metaInfo.description) {
        let descMeta = document.querySelector("meta[name='description']");
        if (!descMeta) {
          descMeta = document.createElement('meta');
          descMeta.setAttribute('name', 'description');
          document.head.appendChild(descMeta);
        }
        descMeta.setAttribute('content', metaInfo.description);

        let ogDescMeta = document.querySelector("meta[property='og:description']");
        if (ogDescMeta) ogDescMeta.setAttribute('content', metaInfo.description);
      }
    }

    // 6. Instant scroll to top on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
