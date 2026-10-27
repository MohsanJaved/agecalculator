/**
 * Master Translations for All 33 Supported Languages
 * Tier 1 (High Traffic), Tier 2 (Strong Markets), Tier 3 (High-Opportunity)
 * Includes native keywords, search queries, UI labels, and meta tags.
 */

import { LANGUAGES } from './config.js';

export const TRANSLATIONS = {
  // === TIER 1 ===
  en: {
    locale: 'en-US',
    brand: { name: 'Age Calculator', tagline: 'Fast & Precise Age Tools' },
    nav: { calculators: 'Calculators', standard: 'Standard', specialized: 'Specialized', timeUnits: 'Time Units' },
    calculator: {
      dobLabel: 'Date of Birth',
      compareDateLabel: 'Age on Date of',
      todayBtn: 'Today',
      includeTime: 'Include exact birth time for precision',
      calculateBtn: 'Calculate Exact Age',
      resetBtn: 'Reset',
      resultsTitle: 'Your Exact Chronological Age',
      years: 'Years',
      months: 'Months',
      days: 'Days',
      weeks: 'Weeks',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      nextBirthdayTitle: 'Next Birthday Countdown',
      copyBtn: 'Copy Results',
      copiedText: 'Copied to clipboard!'
    },
    pages: {
      home: {
        title: 'Age Calculator Today – Find Exact Age in Years, Months & Days',
        description: 'Calculate your exact age from your birth date. See chronological age in years, months, days, hours, minutes & seconds with next birthday countdown.',
        h1: 'Online Age Calculator',
        subtitle: 'Find your exact age down to the second, upcoming birthday milestones, and complete life statistics.'
      }
    }
  },

  es: {
    locale: 'es-ES',
    brand: { name: 'Calculadora de Edad', tagline: 'Herramientas de Edad Precisas' },
    nav: { calculators: 'Calculadoras', standard: 'Estándar', specialized: 'Especializadas', timeUnits: 'Unidades de Tiempo' },
    calculator: {
      dobLabel: 'Fecha de Nacimiento',
      compareDateLabel: 'Edad a la Fecha de',
      todayBtn: 'Hoy',
      includeTime: 'Incluir hora exacta para mayor precisión',
      calculateBtn: 'Calcular Edad Exacta',
      resetBtn: 'Reiniciar',
      resultsTitle: 'Tu Edad Cronológica Exacta',
      years: 'Años',
      months: 'Meses',
      days: 'Días',
      weeks: 'Semanas',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
      nextBirthdayTitle: 'Cuenta Regresiva para tu Próximo Cumpleaños',
      copyBtn: 'Copiar Resultados',
      copiedText: '¡Copiado al portapapeles!'
    },
    pages: {
      home: {
        title: 'Calculadora de Edad – Calcular Edad Exacta en Años y Días',
        description: 'Calcula tu edad exacta por fecha de nacimiento. Descubre cuántos años, meses, días, horas y minutos tienes con cuenta atrás para tu cumpleaños.',
        h1: 'Calculadora de Edad Online',
        subtitle: 'Calcula tu edad cronológica al instante con años, meses, días, horas, minutos y cuenta atrás para tu próximo cumpleaños.'
      }
    }
  },

  'pt-br': {
    locale: 'pt-BR',
    brand: { name: 'Calculadora de Idade', tagline: 'Ferramentas de Idade Precisas' },
    nav: { calculators: 'Calculadoras', standard: 'Padrão', specialized: 'Especializadas', timeUnits: 'Unidades de Tempo' },
    calculator: {
      dobLabel: 'Data de Nascimento',
      compareDateLabel: 'Idade na Data de',
      todayBtn: 'Hoje',
      includeTime: 'Incluir hora exata do nascimento',
      calculateBtn: 'Calcular Idade Exata',
      resetBtn: 'Limpar',
      resultsTitle: 'Sua Idade Cronológica Exata',
      years: 'Anos',
      months: 'Meses',
      days: 'Dias',
      weeks: 'Semanas',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
      nextBirthdayTitle: 'Contagem Regressiva para o Próximo Aniversário',
      copyBtn: 'Copiar Resultados',
      copiedText: 'Copiado para a área de transferência!'
    },
    pages: {
      home: {
        title: 'Calculadora de Idade – Calcular Idade Exata em Anos e Dias',
        description: 'Calcule sua idade exata pela data de nascimento. Veja quantos anos, meses, dias, semanas e horas você já viveu e o próximo aniversário.',
        h1: 'Calculadora de Idade Online',
        subtitle: 'Descubra sua idade cronológica exata em anos, meses e dias com contagem regressiva para o próximo aniversário.'
      }
    }
  },

  de: {
    locale: 'de-DE',
    brand: { name: 'Altersrechner', tagline: 'Präzise Altersberechnung' },
    nav: { calculators: 'Rechner', standard: 'Standard', specialized: 'Spezialisiert', timeUnits: 'Zeiteinheiten' },
    calculator: {
      dobLabel: 'Geburtsdatum',
      compareDateLabel: 'Alter am Stichtag',
      todayBtn: 'Heute',
      includeTime: 'Genaue Geburtszeit berücksichtigen',
      calculateBtn: 'Exaktes Alter berechnen',
      resetBtn: 'Zurücksetzen',
      resultsTitle: 'Ihr exaktes chronologisches Alter',
      years: 'Jahre',
      months: 'Monate',
      days: 'Tage',
      weeks: 'Wochen',
      hours: 'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden',
      nextBirthdayTitle: 'Countdown zum nächsten Geburtstag',
      copyBtn: 'Ergebnisse kopieren',
      copiedText: 'In die Zwischenablage kopiert!'
    },
    pages: {
      home: {
        title: 'Altersrechner – Exaktes Alter in Jahren, Monaten & Tagen',
        description: 'Berechnen Sie Ihr exaktes Alter ab Geburtsdatum. Zeigt Jahre, Monate, Tage, Stunden, Minuten sowie den Countdown zum nächsten Geburtstag.',
        h1: 'Online-Altersrechner',
        subtitle: 'Berechnen Sie Ihr genaues Alter auf die Sekunde genau inklusive Geburtstagscountdown und Lebensstatistiken.'
      }
    }
  },

  fr: {
    locale: 'fr-FR',
    brand: { name: "Calculateur d'Âge", tagline: 'Calculateur Précis et Rapide' },
    nav: { calculateurs: 'Calculateurs', standard: 'Standard', specialized: 'Spécialisés', timeUnits: 'Unités de Temps' },
    calculator: {
      dobLabel: 'Date de Naissance',
      compareDateLabel: 'Âge à la date du',
      todayBtn: "Aujourd'hui",
      includeTime: 'Inclure heure de naissance exacte',
      calculateBtn: 'Calculer mon âge exact',
      resetBtn: 'Réinitialiser',
      resultsTitle: 'Votre âge chronologique exact',
      years: 'Ans',
      months: 'Mois',
      days: 'Jours',
      weeks: 'Semaines',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
      nextBirthdayTitle: 'Compte à rebours du prochain anniversaire',
      copyBtn: 'Copier les résultats',
      copiedText: 'Copié dans le presse-papiers !'
    },
    pages: {
      home: {
        title: "Calculateur d'Âge – Calculer son Âge Exact en Ans et Jours",
        description: "Calculez votre âge exact à partir de votre date de naissance. Nombre d'années, mois, jours, heures et compte à rebours de votre anniversaire.",
        h1: "Calculateur d'Âge en Ligne",
        subtitle: 'Découvrez votre âge exact en années, mois, jours, minutes et secondes avec compte à rebours de votre anniversaire.'
      }
    }
  },

  it: {
    locale: 'it-IT',
    brand: { name: 'Calcolo Età', tagline: 'Calcolatori Precisi e Gratuiti' },
    nav: { calculators: 'Calcolatori', standard: 'Standard', specialized: 'Specializzati', timeUnits: 'Unità di Tempo' },
    calculator: {
      dobLabel: 'Data di Nascita',
      compareDateLabel: 'Età alla data del',
      todayBtn: 'Oggi',
      includeTime: 'Includi ora esatta di nascita',
      calculateBtn: 'Calcola Età Esatta',
      resetBtn: 'Reimposta',
      resultsTitle: 'La tua età cronologica esatta',
      years: 'Anni',
      months: 'Mesi',
      days: 'Giorni',
      weeks: 'Settimane',
      hours: 'Ore',
      minutes: 'Minuti',
      seconds: 'Secondi',
      nextBirthdayTitle: 'Conto alla rovescia prossimo compleanno',
      copyBtn: 'Copia Risultati',
      copiedText: 'Copiato negli appunti!'
    },
    pages: {
      home: {
        title: 'Calcolo Età – Calcola la Tua Età Esatta in Anni e Giorni',
        description: 'Calcola la tua età esatta dalla data di nascita. Scopri quanti anni, mesi, giorni, ore e minuti hai vissuto con conto alla rovescia compleanno.',
        h1: 'Calcolatore di Età Online',
        subtitle: 'Calcola la tua età cronologica al secondo con anni, mesi, giorni e conto alla rovescia del tuo prossimo compleanno.'
      }
    }
  },

  // === TIER 2: STRONG MARKETS ===
  ru: {
    locale: 'ru-RU',
    brand: { name: 'Калькулятор возраста', tagline: 'Точный расчет возраста' },
    calculator: {
      dobLabel: 'Дата рождения',
      compareDateLabel: 'Возраст на дату',
      todayBtn: 'Сегодня',
      calculateBtn: 'Рассчитать точный возраст',
      resetBtn: 'Сбросить',
      resultsTitle: 'Ваш точный хронологический возраст',
      years: 'Лет',
      months: 'Месяцев',
      days: 'Дней',
      weeks: 'Недель',
      hours: 'Часов',
      minutes: 'Минут',
      seconds: 'Секунд',
      nextBirthdayTitle: 'Обратный отсчет до следующего дня рождения',
      copyBtn: 'Копировать результат',
      copiedText: 'Скопировано!'
    },
    pages: {
      home: {
        title: 'Калькулятор возраста – Рассчитать точный возраст онлайн',
        description: 'Узнайте свой точный возраст по дате рождения в годах, месяцах, днях, часах и секундах. Таймер до следующего дня рождения.',
        h1: 'Калькулятор возраста онлайн',
        subtitle: 'Рассчитайте свой точный возраст и статистику прожитых дней онлайн.'
      }
    }
  },

  tr: {
    locale: 'tr-TR',
    brand: { name: 'Yaş Hesaplama', tagline: 'Hızlı ve Kesin Yaş Hesaplayıcı' },
    calculator: {
      dobLabel: 'Doğum Tarihi',
      compareDateLabel: 'Karşılaştırılacak Tarih',
      todayBtn: 'Bugün',
      calculateBtn: 'Tam Yaşı Hesapla',
      resetBtn: 'Sıfırla',
      resultsTitle: 'Kesin Kronolojik Yaşınız',
      years: 'Yıl',
      months: 'Ay',
      days: 'Gün',
      weeks: 'Hafta',
      hours: 'Saat',
      minutes: 'Dakika',
      seconds: 'Saniye',
      nextBirthdayTitle: 'Sonraki Doğum Günü Geri Sayımı',
      copyBtn: 'Sonuçları Kopyala',
      copiedText: 'Kopyalandı!'
    },
    pages: {
      home: {
        title: 'Yaş Hesaplama – Doğum Tarihine Göre Tam Yaşınızı Bulun',
        description: 'Doğum tarihinizi girerek tam yaşınızı yıl, ay, gün, saat ve saniye olarak öğrenin. Bir sonraki doğum gününüze kalan süre.',
        h1: 'Online Yaş Hesaplama',
        subtitle: 'Kaç yaşında olduğunuzu ve yaşadığınız günleri saniyesine kadar kesin olarak hesaplayın.'
      }
    }
  },

  id: {
    locale: 'id-ID',
    brand: { name: 'Kalkulator Umur', tagline: 'Hitung Usia Cepat dan Akurat' },
    calculator: {
      dobLabel: 'Tanggal Lahir',
      compareDateLabel: 'Usia Pada Tanggal',
      todayBtn: 'Hari Ini',
      calculateBtn: 'Hitung Umur Tepat',
      resetBtn: 'Reset',
      resultsTitle: 'Usia Kronologis Anda',
      years: 'Tahun',
      months: 'Bulan',
      days: 'Hari',
      weeks: 'Minggu',
      hours: 'Jam',
      minutes: 'Menit',
      seconds: 'Detik',
      nextBirthdayTitle: 'Hitung Mundur Ulang Tahun Berikutnya',
      copyBtn: 'Salin Hasil',
      copiedText: 'Berhasil disalin!'
    },
    pages: {
      home: {
        title: 'Kalkulator Umur – Hitung Usia Tepat Tahun, Bulan & Hari',
        description: 'Hitung usia akurat Anda dari tanggal lahir dalam tahun, bulan, hari, minggu, jam dan detik. Dilengkapi countdown ulang tahun.',
        h1: 'Kalkulator Umur Online',
        subtitle: 'Ketahui umur Anda secara tepat hingga hitungan detik dengan kalkulator online gratis.'
      }
    }
  },

  ja: {
    locale: 'ja-JP',
    brand: { name: '年齢計算機', tagline: '正確・無料の年齢計算' },
    calculator: {
      dobLabel: '生年月日',
      compareDateLabel: '基準日',
      todayBtn: '今日',
      calculateBtn: '正確な年齢を計算',
      resetBtn: 'リセット',
      resultsTitle: 'あなたの正確な満年齢',
      years: '年',
      months: 'ヶ月',
      days: '日',
      weeks: '週間',
      hours: '時間',
      minutes: '分',
      seconds: '秒',
      nextBirthdayTitle: '次の誕生日までのカウントダウン',
      copyBtn: '結果をコピー',
      copiedText: 'コピーしました！'
    },
    pages: {
      home: {
        title: '年齢計算 – 生年月日から満年齢・日数を正確に計算',
        description: '生年月日を入力するだけで、満年齢、生まれてからの日数、月数、時間、秒数、次回の誕生日までを正確に計算します。',
        h1: '無料オンライン年齢計算機',
        subtitle: 'あなたの正確な年齢とこれまで生きてきた日数を秒単位で計算します。'
      }
    }
  },

  ko: {
    locale: 'ko-KR',
    brand: { name: '만 나이 계산기', tagline: '정확한 나이 및 생일 계산' },
    calculator: {
      dobLabel: '생년월일',
      compareDateLabel: '기준일',
      todayBtn: '오늘',
      calculateBtn: '정확한 만 나이 계산',
      resetBtn: '초기화',
      resultsTitle: '정확한 만 나이 결과',
      years: '년',
      months: '개월',
      days: '일',
      weeks: '주',
      hours: '시간',
      minutes: '분',
      seconds: '초',
      nextBirthdayTitle: '다음 생일까지 디데이',
      copyBtn: '결과 복사',
      copiedText: '복사되었습니다!'
    },
    pages: {
      home: {
        title: '만 나이 계산기 – 생년월일 기준 정확한 나이 및 디데이 계산',
        description: '생년월일로 만 나이, 개월 수, 살아온 총 일수, 시간 및 다음 생일까지 남은 D-day를 정확하게 계산하세요.',
        h1: '온라인 만 나이 계산기',
        subtitle: '법적 만 나이와 살아온 총 일수를 실시간으로 확인하세요.'
      }
    }
  },

  nl: {
    locale: 'nl-NL',
    brand: { name: 'Leeftijd Calculator', tagline: 'Nauwkeurige Leeftijd Berekenen' },
    calculator: {
      dobLabel: 'Geboortedatum',
      compareDateLabel: 'Leeftijd op datum',
      todayBtn: 'Vandaag',
      calculateBtn: 'Bereken exacte leeftijd',
      resetBtn: 'Wissen',
      resultsTitle: 'Uw exacte chronologische leeftijd',
      years: 'Jaar',
      months: 'Maanden',
      days: 'Dagen',
      weeks: 'Weken',
      hours: 'Uur',
      minutes: 'Minuten',
      seconds: 'Seconden',
      nextBirthdayTitle: 'Aftellen naar volgende verjaardag',
      copyBtn: 'Resultaten kopiëren',
      copiedText: 'Gekopieerd!'
    },
    pages: {
      home: {
        title: 'Leeftijd Calculator – Bereken Exacte Leeftijd in Jaren & Dagen',
        description: 'Bereken eenvoudig uw exacte leeftijd in jaren, maanden, dagen en uren vanaf uw geboortedatum. Inclusief verjaardag countdown.',
        h1: 'Online Leeftijd Calculator',
        subtitle: 'Ontdek precies hoe oud u bent tot op de seconde nauwkeurig.'
      }
    }
  },

  pl: {
    locale: 'pl-PL',
    brand: { name: 'Kalkulator Wieku', tagline: 'Dokładne Obliczanie Wieku' },
    calculator: {
      dobLabel: 'Data urodzenia',
      compareDateLabel: 'Wiek na dzień',
      todayBtn: 'Dzisiaj',
      calculateBtn: 'Oblicz dokładny wiek',
      resetBtn: 'Wyczyść',
      resultsTitle: 'Twój dokładny wiek',
      years: 'Lat',
      months: 'Miesięcy',
      days: 'Dni',
      weeks: 'Tygodni',
      hours: 'Godzin',
      minutes: 'Minut',
      seconds: 'Sekund',
      nextBirthdayTitle: 'Odliczanie do kolejnych urodzin',
      copyBtn: 'Kopiuj wynik',
      copiedText: 'Skopiowano!'
    },
    pages: {
      home: {
        title: 'Kalkulator Wieku – Oblicz Dokładny Wiek i Liczbę Dni Życia',
        description: 'Oblicz ile masz lat, miesięcy, dni, godzin i sekund od daty urodzenia. Sprawdź ile dni zostało do kolejnych urodzin.',
        h1: 'Internetowy Kalkulator Wieku',
        subtitle: 'Precyzyjnie sprawdź ile masz lat oraz ile dni minęło od Twoich urodzin.'
      }
    }
  },

  ar: {
    locale: 'ar-SA',
    brand: { name: 'حاسبة العمر', tagline: 'حساب العمر بدقة بالسنوات والأيام' },
    calculator: {
      dobLabel: 'تاريخ الميلاد',
      compareDateLabel: 'العمر في تاريخ',
      todayBtn: 'اليوم',
      calculateBtn: 'احسب العمر بدقة',
      resetBtn: 'إعادة ضبط',
      resultsTitle: 'عمرك الدقيق بالتفصيل',
      years: 'سنة',
      months: 'شهر',
      days: 'يوم',
      weeks: 'أسبوع',
      hours: 'ساعة',
      minutes: 'دقيقة',
      seconds: 'ثانية',
      nextBirthdayTitle: 'العد التنازلي ليوم ميلادك القادم',
      copyBtn: 'نسخ النتيجة',
      copiedText: 'تم النسخ!'
    },
    pages: {
      home: {
        title: 'حاسبة العمر – احسب عمرك بدقة بالسنوات والأشهر والأيام',
        description: 'احسب عمرك الحقيقي وتاريخ ميلادك بالسنوات والأشهر والأيام والساعات مع معرفة موعد يوم ميلادك القادم بدقة متناهية.',
        h1: 'حاسبة العمر الدقيقة أونلاين',
        subtitle: 'اكتشف عمرك الحقيقي بالثواني والأيام والأسابيع مع العد التنازلي لعيد ميلادك.'
      }
    }
  },

  vi: {
    locale: 'vi-VN',
    brand: { name: 'Công Cụ Tính Tuổi', tagline: 'Tính Tuổi Chính Xác Nhanh Chóng' },
    calculator: {
      dobLabel: 'Ngày sinh',
      compareDateLabel: 'Tính tuổi đến ngày',
      todayBtn: 'Hôm nay',
      calculateBtn: 'Tính tuổi chính xác',
      resetBtn: 'Đặt lại',
      resultsTitle: 'Tuổi chính xác của bạn',
      years: 'Năm',
      months: 'Tháng',
      days: 'Ngày',
      weeks: 'Tuần',
      hours: 'Giờ',
      minutes: 'Phút',
      seconds: 'Giây',
      nextBirthdayTitle: 'Đếm ngược đến sinh nhật tiếp theo',
      copyBtn: 'Sao chép kết quả',
      copiedText: 'Đã sao chép!'
    },
    pages: {
      home: {
        title: 'Tính Tuổi – Tính Tuổi Chính Xác Theo Ngày Tháng Năm Sinh',
        description: 'Công cụ tính tuổi chính xác theo năm, tháng, ngày, giờ và giây từ ngày sinh của bạn. Đếm ngược sinh nhật tiếp theo.',
        h1: 'Công Cụ Tính Tuổi Online',
        subtitle: 'Biết chính xác bạn bao nhiêu tuổi và đã sống bao nhiêu ngày.'
      }
    }
  },

  th: {
    locale: 'th-TH',
    brand: { name: 'โปรแกรมคำนวณอายุ', tagline: 'คำนวณอายุและวันเกิดแม่นยำ' },
    calculator: {
      dobLabel: 'วันเกิด',
      compareDateLabel: 'คำนวณถึงวันที่',
      todayBtn: 'วันนี้',
      calculateBtn: 'คำนวณอายุอย่างแม่นยำ',
      resetBtn: 'ล้างข้อมูล',
      resultsTitle: 'อายุที่แท้จริงของคุณ',
      years: 'ปี',
      months: 'เดือน',
      days: 'วัน',
      weeks: 'สัปดาห์',
      hours: 'ชั่วโมง',
      minutes: 'นาที',
      seconds: 'วินาที',
      nextBirthdayTitle: 'นับถอยหลังสู่วันเกิดถัดไป',
      copyBtn: 'คัดลอกผลลัพธ์',
      copiedText: 'คัดลอกเรียบร้อย!'
    },
    pages: {
      home: {
        title: 'คำนวณอายุ – คำนวณอายุจริง ปี เดือน วัน จากวันเดือนปีเกิด',
        description: 'คำนวณอายุจากวันเดือนปีเกิดเป็นปี เดือน วัน ชั่วโมง และวินาที พร้อมนับถอยหลังวันเกิดรอบถัดไปอย่างแม่นยำ.',
        h1: 'โปรแกรมคำนวณอายุออนไลน์',
        subtitle: 'ตรวจสอบว่าคุณอายุเท่าไหร่ และมีชีวิตมาแล้วกี่วันอย่างแม่นยำ.'
      }
    }
  },

  hi: {
    locale: 'hi-IN',
    brand: { name: 'आयु कैलकुलेटर', tagline: 'सटीक उम्र कैलकुलेटर' },
    calculator: {
      dobLabel: 'जन्म तिथि',
      compareDateLabel: 'तुलना की तारीख',
      todayBtn: 'आज',
      calculateBtn: 'सटीक उम्र निकालें',
      resetBtn: 'रीसेट',
      resultsTitle: 'आपकी सटीक वास्तविक उम्र',
      years: 'वर्ष',
      months: 'महीने',
      days: 'दिन',
      weeks: 'सप्ताह',
      hours: 'घंटे',
      minutes: 'मिनट',
      seconds: 'सेकंड',
      nextBirthdayTitle: 'अगले जन्मदिन के लिए उल्टी गिनती',
      copyBtn: 'परिणाम कॉपी करें',
      copiedText: 'कॉपी हो गया!'
    },
    pages: {
      home: {
        title: 'आयु कैलकुलेटर – जन्म तिथि से सटीक उम्र और दिन जानें',
        description: 'अपनी जन्म तिथि डालकर अपनी सटीक उम्र वर्ष, महीने, दिन, घंटे और सेकंड में पता करें। अगले जन्मदिन का काउंटडाउन भी देखें।',
        h1: 'ऑनलाइन आयु कैलकुलेटर',
        subtitle: 'जानें कि आप कितने साल, महीने और दिन के हैं सटीक सेकंडों के साथ।'
      }
    }
  },

  // === TIER 3: HIGH-OPPORTUNITY / REGIONAL ===
  ur: {
    locale: 'ur-PK',
    brand: { name: 'عمر کیلکولیٹر', tagline: 'صحیح اور فوری عمر معلوم کریں' },
    calculator: {
      dobLabel: 'تاریخ پیدائش',
      compareDateLabel: 'اس تاریخ پر عمر',
      todayBtn: 'آج',
      calculateBtn: 'صحیح عمر معلوم کریں',
      resetBtn: 'دوبارہ شروع کریں',
      resultsTitle: 'آپ کی اصل عمر',
      years: 'سال',
      months: 'ماہ',
      days: 'دن',
      weeks: 'ہفتے',
      hours: 'گھنٹے',
      minutes: 'منٹ',
      seconds: 'سیکنڈ',
      nextBirthdayTitle: 'اگلی سالگرہ میں باقی دن',
      copyBtn: 'نتائج کاپی کریں',
      copiedText: 'کاپی ہو گیا!'
    },
    pages: {
      home: {
        title: 'عمر کیلکولیٹر – تاریخ پیدائش سے صحیح عمر اور دن معلوم کریں',
        description: 'اپنی تاریخ پیدائش سے معلوم کریں کہ آپ کتنے سال، مہینے، دن اور گھنٹے کے ہو چکے ہیں۔ اگلی سالگرہ کا کاؤنٹ ڈاؤن۔',
        h1: 'آن لائن عمر کیلکولیٹر',
        subtitle: 'اپنی عمر اور اب تک کے گزارے ہوئے دنوں کا بالکل درست حساب لگائیں۔'
      }
    }
  },

  bn: {
    locale: 'bn-BD',
    brand: { name: 'বয়স ক্যালকুলেটর', tagline: 'সঠিক বয়স নির্ণয় টুল' },
    calculator: {
      dobLabel: 'জন্ম তারিখ',
      compareDateLabel: 'যে তারিখে বয়স',
      todayBtn: 'আজ',
      calculateBtn: 'সঠিক বয়স হিসাব করুন',
      resetBtn: 'রিসেট',
      resultsTitle: 'আপনার নিখুঁত বয়স',
      years: 'বছর',
      months: 'মাস',
      days: 'দিন',
      weeks: 'সপ্তাহ',
      hours: 'ঘণ্টা',
      minutes: 'মিনিট',
      seconds: 'সেকেন্ড',
      nextBirthdayTitle: 'পরবর্তী জন্মদিনের কাউন্টডাউন',
      copyBtn: 'কপি করুন',
      copiedText: 'কপি হয়েছে!'
    },
    pages: {
      home: {
        title: 'বয়স ক্যালকুলেটর – জন্ম তারিখ দিয়ে সঠিক বয়স ও দিন জানুন',
        description: 'জন্ম তারিখ দিয়ে নিখুঁতভাবে বছর, মাস, দিন ও সেকেন্ডের হিসাব বের করুন। পরবর্তী জন্মদিনের কাউন্টডাউন দেখুন।',
        h1: 'অনলাইন বয়স ক্যালকুলেটর',
        subtitle: 'আপনার বয়স এবং জীবনের মোট দিন সঠিকভাবে পরিমাপ করুন।'
      }
    }
  },

  fil: {
    locale: 'fil-PH',
    brand: { name: 'Kalkulator ng Edad', tagline: 'Tumpak na Pagkalkula ng Edad' },
    calculator: {
      dobLabel: 'Petsa ng Kapanganakan',
      compareDateLabel: 'Edad sa Petsa ng',
      todayBtn: 'Ngayon',
      calculateBtn: 'Kalkulahin ang Tumpak na Edad',
      resetBtn: 'I-reset',
      resultsTitle: 'Ang Iyong Tumpak na Edad',
      years: 'Taon',
      months: 'Buwan',
      days: 'Araw',
      weeks: 'Linggo',
      hours: 'Oras',
      minutes: 'Minuto',
      seconds: 'Segundo',
      nextBirthdayTitle: 'Countdown sa Susunod na Kaarawan',
      copyBtn: 'Kopyahin ang Resulta',
      copiedText: 'Nakopya na!'
    },
    pages: {
      home: {
        title: 'Kalkulator ng Edad – Alamin ang Tumpak na Edad sa Taon at Araw',
        description: 'Kalkulahin ang iyong eksaktong edad mula sa iyong kaarawan. Tingnan ang taon, buwan, araw, at countdown sa susunod na kaarawan.',
        h1: 'Online Kalkulator ng Edad',
        subtitle: 'Alamin kung ilang taon, buwan, at araw ka na sa mundo nang mabilisan.'
      }
    }
  },

  ms: {
    locale: 'ms-MY',
    brand: { name: 'Kalkulator Umur', tagline: 'Kira Umur Tepat dan Pantas' },
    calculator: {
      dobLabel: 'Tarikh Lahir',
      compareDateLabel: 'Umur Pada Tarikh',
      todayBtn: 'Hari Ini',
      calculateBtn: 'Kira Umur Tepat',
      resetBtn: 'Set Semula',
      resultsTitle: 'Umur Kronologi Tepat Anda',
      years: 'Tahun',
      months: 'Bulan',
      days: 'Hari',
      weeks: 'Minggu',
      hours: 'Jam',
      minutes: 'Minit',
      seconds: 'Saat',
      nextBirthdayTitle: 'Kiraan Detik Hari Lahir Seterusnya',
      copyBtn: 'Salin Keputusan',
      copiedText: 'Telah disalin!'
    },
    pages: {
      home: {
        title: 'Kalkulator Umur – Kira Umur Tepat Tahun, Bulan & Hari',
        description: 'Kira umur sebenar anda mengikut tarikh lahir dalam tahun, bulan, hari, jam dan saat dengan kiraan detik hari lahir.',
        h1: 'Kalkulator Umur Dalam Talian',
        subtitle: 'Ketahui umur sebenar anda dan hari yang telah anda lalui dengan tepat.'
      }
    }
  },

  'zh-cn': {
    locale: 'zh-CN',
    brand: { name: '年龄计算器', tagline: '精准在线周岁年龄计算' },
    calculator: {
      dobLabel: '出生日期',
      compareDateLabel: '计算基准日期',
      todayBtn: '今天',
      calculateBtn: '计算精准年龄',
      resetBtn: '重置',
      resultsTitle: '您的精确周岁年龄',
      years: '岁',
      months: '个月',
      days: '天',
      weeks: '周',
      hours: '小时',
      minutes: '分钟',
      seconds: '秒',
      nextBirthdayTitle: '下一个生日倒计时',
      copyBtn: '复制结果',
      copiedText: '已复制到剪贴板！'
    },
    pages: {
      home: {
        title: '年龄计算器 – 在线精准计算周岁、月数与出生天数',
        description: '输入出生日期即刻精确计算您的周岁年龄、出生总天数、周数、小时及下一个生日倒计时。',
        h1: '在线周岁年龄计算器',
        subtitle: '精确计算您在地球上生活了多少年、多少天以及下一个生日的时间。'
      }
    }
  },

  'zh-tw': {
    locale: 'zh-TW',
    brand: { name: '年齡計算器', tagline: '精準在線年齡與實歲計算' },
    calculator: {
      dobLabel: '出生年月日',
      compareDateLabel: '計算基準日',
      todayBtn: '今天',
      calculateBtn: '計算精確年齡',
      resetBtn: '重設',
      resultsTitle: '您的精確實歲年齡',
      years: '歲',
      months: '個月',
      days: '天',
      weeks: '週',
      hours: '小時',
      minutes: '分鐘',
      seconds: '秒',
      nextBirthdayTitle: '下一個生日倒數計時',
      copyBtn: '複製結果',
      copiedText: '已成功複製！'
    },
    pages: {
      home: {
        title: '年齡計算器 – 線上精準計算實歲、月數與生活總天數',
        description: '根據出生日期精準換算實歲年齡、出生至今累積天數、週數、小時與下一次生日倒數。',
        h1: '線上年齡與實歲計算機',
        subtitle: '秒速查詢您的精確歲數與生命歷程統計資料。'
      }
    }
  },

  sv: {
    locale: 'sv-SE',
    brand: { name: 'Åldersräknare', tagline: 'Noggrann Åldersberäkning' },
    calculator: {
      dobLabel: 'Födelsedatum',
      compareDateLabel: 'Ålder vid datum',
      todayBtn: 'Idag',
      calculateBtn: 'Beräkna exakt ålder',
      resetBtn: 'Återställ',
      resultsTitle: 'Din exakta ålder',
      years: 'År',
      months: 'Månader',
      days: 'Dagar',
      weeks: 'Veckor',
      hours: 'Timmar',
      minutes: 'Minuter',
      seconds: 'Sekunder',
      nextBirthdayTitle: 'Nedräkning till nästa födelsedag',
      copyBtn: 'Kopiera resultat',
      copiedText: 'Kopierat!'
    },
    pages: {
      home: {
        title: 'Åldersräknare – Räkna ut din exakta ålder i år och dagar',
        description: 'Räkna ut exakt hur gammal du är från ditt födelsedatum i år, månader, dagar och timmar samt nedräkning till din födelsedag.',
        h1: 'Online Åldersräknare',
        subtitle: 'Få reda på din exakta ålder ner till sekunden helt gratis.'
      }
    }
  },

  no: {
    locale: 'nb-NO',
    brand: { name: 'Alderskalkulator', tagline: 'Nøyaktig Aldersberegning' },
    calculator: {
      dobLabel: 'Fødselsdato',
      compareDateLabel: 'Alder på dato',
      todayBtn: 'I dag',
      calculateBtn: 'Beregn nøyaktig alder',
      resetBtn: 'Tilbakestill',
      resultsTitle: 'Din nøyaktige alder',
      years: 'År',
      months: 'Måneder',
      days: 'Dager',
      weeks: 'Uker',
      hours: 'Timer',
      minutes: 'Minutter',
      seconds: 'Sekunder',
      nextBirthdayTitle: 'Nedtelling til neste bursdag',
      copyBtn: 'Kopier resultat',
      copiedText: 'Kopiert!'
    },
    pages: {
      home: {
        title: 'Alderskalkulator – Beregn nøyaktig alder i år og dager',
        description: 'Beregn nøyaktig alder i år, måneder, uker, dager og timer fra fødselsdatoen din. Se nedtelling til neste bursdag.',
        h1: 'Online Alderskalkulator',
        subtitle: 'Finn ut nøyaktig hvor gammel du er på sekundet.'
      }
    }
  },

  da: {
    locale: 'da-DK',
    brand: { name: 'Aldersberegner', tagline: 'Præcis Aldersberegning' },
    calculator: {
      dobLabel: 'Fødselsdato',
      compareDateLabel: 'Alder på dato',
      todayBtn: 'I dag',
      calculateBtn: 'Beregn præcis alder',
      resetBtn: 'Nulstil',
      resultsTitle: 'Din præcise alder',
      years: 'År',
      months: 'Måneder',
      days: 'Dage',
      weeks: 'Uger',
      hours: 'Timer',
      minutes: 'Minutter',
      seconds: 'Sekunder',
      nextBirthdayTitle: 'Nedtælling til næste fødselsdag',
      copyBtn: 'Kopier resultat',
      copiedText: 'Kopieret!'
    },
    pages: {
      home: {
        title: 'Aldersberegner – Beregn din præcise alder i år og dage',
        description: 'Find ud af præcis hvor gammel du er i år, måneder, dage og timer fra din fødselsdato med fødselsdagsnedtælling.',
        h1: 'Online Aldersberegner',
        subtitle: 'Beregn din nøjagtige kronologiske alder hurtigt og gratis.'
      }
    }
  },

  fi: {
    locale: 'fi-FI',
    brand: { name: 'Ikälaskuri', tagline: 'Tarkka Iän Laskeminen' },
    calculator: {
      dobLabel: 'Syntymäaika',
      compareDateLabel: 'Ikä päivänä',
      todayBtn: 'Tänään',
      calculateBtn: 'Laske tarkka ikä',
      resetBtn: 'Nollaa',
      resultsTitle: 'Tarkka ikäsi',
      years: 'Vuotta',
      months: 'Kuukautta',
      days: 'Päivää',
      weeks: 'Viikkoa',
      hours: 'Tuntia',
      minutes: 'Minuuttia',
      seconds: 'Sekuntia',
      nextBirthdayTitle: 'Lähtölaskenta seuraavaan syntymäpäivään',
      copyBtn: 'Kopioi tulokset',
      copiedText: 'Kopioitu!'
    },
    pages: {
      home: {
        title: 'Ikälaskuri – Laske tarkka ikäsi vuosina, kuukausina ja päivinä',
        description: 'Laske kuinka vanha olet vuosina, kuukausina, päivinä ja tunteina syntymäaikasi perusteella. Seuraavan syntymäpäivän laskuri.',
        h1: 'Ilmainen Online Ikälaskuri',
        subtitle: 'Selvitä tarkka ikäsi sekunnilleen ja elämäsi tilastot helposti.'
      }
    }
  },

  cs: {
    locale: 'cs-CZ',
    brand: { name: 'Věková kalkulačka', tagline: 'Přesný Výpočet Věku' },
    calculator: {
      dobLabel: 'Datum narození',
      compareDateLabel: 'Věk k datu',
      todayBtn: 'Dnes',
      calculateBtn: 'Vypočítat přesný věk',
      resetBtn: 'Resetovat',
      resultsTitle: 'Váš přesný chronologický věk',
      years: 'Let',
      months: 'Měsíců',
      days: 'Dní',
      weeks: 'Týdnů',
      hours: 'Hodin',
      minutes: 'Minut',
      seconds: 'Sekund',
      nextBirthdayTitle: 'Odpočet do dalších narozenin',
      copyBtn: 'Kopírovat výsledek',
      copiedText: 'Zkopírováno!'
    },
    pages: {
      home: {
        title: 'Věková kalkulačka – Spočítejte si přesný věk v letech a dnech',
        description: 'Vypočítejte si svůj přesný věk od data narození v letech, měsících, dnech a hodinách. Odpočet do dalších narozenin.',
        h1: 'Online Věková Kalkulačka',
        subtitle: 'Zjistěte přesně, kolik vám je let a kolik dní již žijete.'
      }
    }
  },

  ro: {
    locale: 'ro-RO',
    brand: { name: 'Calculator Vârstă', tagline: 'Calcul Precis al Vârstei' },
    calculator: {
      dobLabel: 'Data nașterii',
      compareDateLabel: 'Vârsta la data de',
      todayBtn: 'Astăzi',
      calculateBtn: 'Calculează vârsta exactă',
      resetBtn: 'Resetează',
      resultsTitle: 'Vârsta dumneavoastră exactă',
      years: 'Ani',
      months: 'Luni',
      days: 'Zile',
      weeks: 'Săptămâni',
      hours: 'Ore',
      minutes: 'Minute',
      seconds: 'Secunde',
      nextBirthdayTitle: 'Numărătoare inversă până la următoarea aniversare',
      copyBtn: 'Copiază rezultatul',
      copiedText: 'Copiat!'
    },
    pages: {
      home: {
        title: 'Calculator Vârstă – Află vârsta exactă în ani, luni și zile',
        description: 'Calculează vârsta ta exactă în funcție de data nașterii. Află câți ani, luni, zile și ore ai trăit cu numărătoare inversă.',
        h1: 'Calculator de Vârstă Online',
        subtitle: 'Află instantaneu vârsta ta cronologică exactă până la secundă.'
      }
    }
  },

  el: {
    locale: 'el-GR',
    brand: { name: 'Υπολογιστής Ηλικίας', tagline: 'Ακριβής Υπολογισμός Ηλικίας' },
    calculator: {
      dobLabel: 'Ημερομηνία Γέννησης',
      compareDateLabel: 'Ηλικία κατά την ημερομηνία',
      todayBtn: 'Σήμερα',
      calculateBtn: 'Υπολογισμός Ακριβούς Ηλικίας',
      resetBtn: 'Επαναφορά',
      resultsTitle: 'Η Ακριβής Ηλικία σας',
      years: 'Έτη',
      months: 'Μήνες',
      days: 'Ημέρες',
      weeks: 'Εβδομάδες',
      hours: 'Ώρες',
      minutes: 'Λεπτά',
      seconds: 'Δευτερόλεπτα',
      nextBirthdayTitle: 'Αντίστροφη μέτρηση επόμενων γενεθλίων',
      copyBtn: 'Αντιγραφή αποτελέσματος',
      copiedText: 'Αντιγράφηκε!'
    },
    pages: {
      home: {
        title: 'Υπολογισμός Ηλικίας – Βρείτε την ακριβή ηλικία σε έτη και ημέρες',
        description: 'Υπολογίστε την ακριβή ηλικία σας από την ημερομηνία γέννησης σε χρόνια, μήνες, ημέρες, ώρες και αντίστροφη μέτρηση γενεθλίων.',
        h1: 'Online Υπολογιστής Ηλικίας',
        subtitle: 'Μάθετε πόσο χρονών είστε με ακρίβεια δευτερολέπτου δωρεάν.'
      }
    }
  },

  he: {
    locale: 'he-IL',
    brand: { name: 'מחשבון גיל', tagline: 'חישוב גיל מדויק ומהיר' },
    calculator: {
      dobLabel: 'תאריך לידה',
      compareDateLabel: 'גיל בתאריך',
      todayBtn: 'היום',
      calculateBtn: 'חשב גיל מדויק',
      resetBtn: 'איפוס',
      resultsTitle: 'הגיל המדויק שלך',
      years: 'שנים',
      months: 'חודשים',
      days: 'ימים',
      weeks: 'שבועות',
      hours: 'שעות',
      minutes: 'דקות',
      seconds: 'שניות',
      nextBirthdayTitle: 'ספירה לאחור ליום ההולדת הבא',
      copyBtn: 'העתק תוצאות',
      copiedText: 'הועתק!'
    },
    pages: {
      home: {
        title: 'מחשבון גיל – חישוב גיל מדויק בשנים, חודשים וימים',
        description: 'חשב את גילך המדויק לפי תאריך הלידה. ראה כמה שנים, חודשים, ימים ושעות חיית וספירה לאחור ליום ההולדת הבא.',
        h1: 'מחשבון גיל מקוון ומדויק',
        subtitle: 'גלה בדיוק בן כמה אתה עד לרמת השנייה במחשבון חינמי.'
      }
    }
  },

  uk: {
    locale: 'uk-UA',
    brand: { name: 'Калькулятор віку', tagline: 'Точний Розрахунок Віку' },
    calculator: {
      dobLabel: 'Дата народження',
      compareDateLabel: 'Вік на дату',
      todayBtn: 'Сьогодні',
      calculateBtn: 'Розрахувати точний вік',
      resetBtn: 'Скинути',
      resultsTitle: 'Ваш точний хронологічний вік',
      years: 'Років',
      months: 'Місяців',
      days: 'Днів',
      weeks: 'Тижнів',
      hours: 'Годин',
      minutes: 'Хвилин',
      seconds: 'Секунд',
      nextBirthdayTitle: 'Зворотний відлік до наступного дня народження',
      copyBtn: 'Копіювати результат',
      copiedText: 'Скопійовано!'
    },
    pages: {
      home: {
        title: 'Калькулятор віку – Розрахувати точний вік у роках і днях',
        description: 'Дізнайтеся свій точний вік за датою народження у роках, місяцях, днях, годинах і секундах. Відлік до наступного дня народження.',
        h1: 'Онлайн Калькулятор Віку',
        subtitle: 'Розрахуйте свій точний вік та кількість прожитих днів онлайн.'
      }
    }
  },

  hu: {
    locale: 'hu-HU',
    brand: { name: 'Életkor Kalkulátor', tagline: 'Pontos Életkor Számítás' },
    calculator: {
      dobLabel: 'Születési dátum',
      compareDateLabel: 'Életkor a megadott napon',
      todayBtn: 'Ma',
      calculateBtn: 'Pontos életkor kiszámítása',
      resetBtn: 'Visszaállítás',
      resultsTitle: 'Az Ön pontos életkora',
      years: 'Év',
      months: 'Hónap',
      days: 'Nap',
      weeks: 'Hét',
      hours: 'Óra',
      minutes: 'Perc',
      seconds: 'Másodperc',
      nextBirthdayTitle: 'Visszaszámlálás a következő születésnapig',
      copyBtn: 'Eredmény másolása',
      copiedText: 'Másolva!'
    },
    pages: {
      home: {
        title: 'Életkor Kalkulátor – Számítsa ki pontos életkorát években és napokban',
        description: 'Számítsa ki pontos életkorát a születési dátuma alapján években, hónapokban, napokban és órákban. Születésnapi visszaszámláló.',
        h1: 'Online Életkor Kalkulátor',
        subtitle: 'Tudja meg pontosan, hány éves és hány napot élt eddig másodperc pontossággal.'
      }
    }
  }
};

/**
 * Helper to get translation object for current language with English fallback
 */
export function getTranslation(lang = 'en') {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
