/**
 * Rich Localized Page Content for All 33 Languages
 * Provides comprehensive native content for:
 * - Hero badges, H1, subtitles
 * - Calculator labels & metric units
 * - 3 Feature highlights
 * - 4-step How It Works guide
 * - Practical Use Cases
 * - Localized FAQs
 */

export const PAGE_CONTENTS = {
  // === TIER 1 ===
  en: {
    hero: {
      badge: '#1 Precision Age Calculator',
      title: 'Age Calculator – Find Out Exactly How Old You Are',
      subtitle: 'Calculate your exact age in years, months, days, weeks, hours, minutes & seconds from your date of birth instantly with our accurate, privacy-focused tool.',
      featurePills: ['100% Free & Private', 'Instant Millisecond Precision', 'Leap Year Calibrated']
    },
    features3: [
      { title: 'Compliance & Mathematical Precision', desc: 'Calculates exact chronological age accounting for leap years, differing month lengths, and time zones.' },
      { title: 'Real-Time Instant Results', desc: 'Instant verification and lifetime metrics breakdown with zero page reloads.' },
      { title: '100% Client-Side Privacy', desc: 'Data is computed locally in your web browser with zero tracking and zero server storage.' }
    ],
    howItWorks: {
      title: 'How It Works — Simple 4-Step Process',
      subtitle: 'Find your precise age in four quick, easy steps without confusing manual calendar math.',
      steps: [
        { num: '1', title: 'Enter Your Date of Birth', desc: 'Select your birth day, month, and year from the interactive calendar.' },
        { num: '2', title: 'Choose Date to Compare', desc: 'Defaults to today, or choose any historical past or future date.' },
        { num: '3', title: 'Click Calculate', desc: 'Our calculation engine compares the two dates with full leap year calibration.' },
        { num: '4', title: 'Explore Lifetime Statistics', desc: 'See your age in years, months, days, hours, minutes, and your next birthday countdown.' }
      ]
    },
    useCases: {
      title: 'Common Uses for Our Age Calculator',
      subtitle: 'People around the world rely on accurate age calculation for daily needs, legal milestones, and life planning.',
      items: [
        { title: 'Passport & Visa Applications', desc: 'Verify exact age requirements for travel documents and government forms.' },
        { title: 'School & Sports Admissions', desc: 'Check eligibility based on regional birthday cutoff dates.' },
        { title: 'Milestones & Next Birthday', desc: 'Find out the exact day of the week and countdown for upcoming birthdays.' },
        { title: 'Infant Development Milestones', desc: 'Track baby age accurately in weeks and months for medical checkups.' }
      ]
    },
    faqs: [
      { q: 'How is exact age calculated with leap years?', a: 'Our calculator uses Gregorian calendar rules, adding 366 days for leap years (including century leap year checks) and adjusting for the varying number of days in each month.' },
      { q: 'Is my birth date stored on any server?', a: 'No. All calculations run 100% client-side in your web browser. No personal birth details are ever sent to or stored on any server.' },
      { q: 'Can I calculate how old I will be in the future?', a: 'Yes! Simply change the "Date to Compare" to any future date to see your exact age on that day.' },
      { q: 'Can I include my exact birth time?', a: 'Yes, check "Exact Birth Time" to calculate your elapsed life down to the exact minute and second.' }
    ]
  },

  es: {
    hero: {
      badge: '#1 Calculadora de Edad Precisa',
      title: 'Calculadora de Edad – Descubre Cuántos Años Tienes Exactamente',
      subtitle: 'Calcula tu edad cronológica exacta en años, meses, días, horas y segundos a partir de tu fecha de nacimiento con nuestra herramienta gratuita y privada.',
      featurePills: ['100% Gratuita y Privada', 'Precisión al Milisegundo', 'Ajuste de Años Bisiestos']
    },
    features3: [
      { title: 'Precisión Matemática Total', desc: 'Calcula tu edad exacta teniendo en cuenta años bisiestos y meses de diferente duración.' },
      { title: 'Resultados en Tiempo Real', desc: 'Verificación instantánea de tu edad y estadísticas de vida sin recargar la página.' },
      { title: '100% Privado en tu Navegador', desc: 'Los cálculos se realizan en tu dispositivo. Ningún dato personal se envía a servidores.' }
    ],
    howItWorks: {
      title: 'Cómo Funciona — Proceso Fácil en 4 Pasos',
      subtitle: 'Conoce tu edad exacta en cuatro sencillos pasos sin complicaciones matemáticas.',
      steps: [
        { num: '1', title: 'Ingresa tu Fecha de Nacimiento', desc: 'Selecciona día, mes y año en el selector de fecha interactivo.' },
        { num: '2', title: 'Elige la Fecha de Comparación', desc: 'Por defecto la fecha de hoy, o cualquier fecha pasada o futura.' },
        { num: '3', title: 'Haz Clic en Calcular', desc: 'Nuestro algoritmo compara las fechas con precisión de calendario gregoriano.' },
        { num: '4', title: 'Visualiza tus Estadísticas', desc: 'Descubre tus años, meses, días, horas vividas y la cuenta atrás para tu cumpleaños.' }
      ]
    },
    useCases: {
      title: 'Usos Frecuentes de la Calculadora de Edad',
      subtitle: 'Herramienta esencial para trámites oficiales, celebraciones e hitos personales.',
      items: [
        { title: 'Trámites de Pasaporte y Visados', desc: 'Verifica los requisitos de edad exacta para documentos oficiales y consulados.' },
        { title: 'Inscripción Escolar y Deportiva', desc: 'Comprueba la categoría por edad según las fechas de corte oficiales.' },
        { title: 'Cuenta Regresiva de Cumpleaños', desc: 'Conoce exactamente cuántos días faltan para tu próximo cumpleaños y qué día cae.' },
        { title: 'Crecimiento de Bebés y Niños', desc: 'Sigue la edad del lactante en semanas y meses para controles pediátricos y vacunas.' }
      ]
    },
    faqs: [
      { q: '¿Cómo se calculan los años bisiestos?', a: 'Nuestra calculadora aplica las reglas del calendario gregoriano, contabilizando 366 días en años bisiestos y ajustando los días de febrero.' },
      { q: '¿Se guardan mis fechas en algún servidor?', a: 'No. El cálculo se ejecuta 100% en tu navegador de forma privada sin enviar datos al exterior.' },
      { q: '¿Puedo calcular mi edad en una fecha futura?', a: 'Sí. Simplemente cambia la "Fecha de Comparación" a la fecha deseada para ver cuántos años tendrás.' },
      { q: '¿Puedo incluir la hora exacta de nacimiento?', a: 'Sí, activa la opción de hora de nacimiento para obtener tu edad exacta en minutos y segundos.' }
    ]
  },

  'pt-br': {
    hero: {
      badge: '#1 Calculadora de Idade Precisa',
      title: 'Calculadora de Idade – Saiba Exatamente Quantos Anos Você Tem',
      subtitle: 'Calcule sua idade cronológica exata em anos, meses, dias, semanas, horas e segundos a partir da data de nascimento com total privacidade.',
      featurePills: ['100% Gratuito e Privado', 'Precisão Imediata', 'Calibrado com Anos Bissextos']
    },
    features3: [
      { title: 'Precisão Matemática Rigorosa', desc: 'Leva em consideração anos bissextos e variações de dias em cada mês do calendário.' },
      { title: 'Resultados Instantâneos', desc: 'Métricas completas de vida calculadas instantaneamente sem recarregar a tela.' },
      { title: 'Privacidade 100% no Navegador', desc: 'Suas datas nunca saem do seu celular ou computador; tudo é computado localmente.' }
    ],
    howItWorks: {
      title: 'Como Funciona — 4 Passos Simples',
      subtitle: 'Descubra sua idade detalhada rapidamente sem complicações.',
      steps: [
        { num: '1', title: 'Informe a Data de Nascimento', desc: 'Escolha dia, mês e ano em que você nasceu.' },
        { num: '2', title: 'Defina a Data Alvo', desc: 'Usa a data de hoje por padrão ou qualquer data passada ou futura.' },
        { num: '3', title: 'Clique em Calcular', desc: 'O sistema calcula a diferença cronológica com precisão matemática.' },
        { num: '4', title: 'Confira Todos os Detalhes', desc: 'Veja anos, meses, dias, horas vividas e a contagem regressiva para o aniversário.' }
      ]
    },
    useCases: {
      title: 'Para que Usar a Calculadora de Idade?',
      subtitle: 'Ideal para documentos oficiais, metas de vida, aniversários e rotina com crianças.',
      items: [
        { title: 'Documentos e Concursos', desc: 'Verifique requisitos de idade mínima e máxima para concursos e certidões.' },
        { title: 'Matrícula Escolar e Esportes', desc: 'Descubra a turma adequada da criança baseada na data de corte escolar.' },
        { title: 'Próximo Aniversário', desc: 'Veja em qual dia da semana cai o seu próximo aniversário e quantos dias faltam.' },
        { title: 'Acompanhamento do Bebê', desc: 'Acompanhe semanas e meses de vida do bebê para vacinação e consultas.' }
      ]
    },
    faqs: [
      { q: 'Como a calculadora lida com anos bissextos?', a: 'O cálculo considera anos com 366 dias e 29 dias em fevereiro automaticamente de acordo com o calendário gregoriano.' },
      { q: 'Meus dados são salvos em algum lugar?', a: 'Não. Os cálculos ocorrem 100% no seu próprio navegador para garantir privacidade total.' },
      { q: 'Posso calcular minha idade em uma data futura?', a: 'Sim! Altere a "Data para Comparar" para qualquer data futura para ver que idade você terá.' }
    ]
  },

  de: {
    hero: {
      badge: '#1 Präziser Altersrechner',
      title: 'Altersrechner – Finden Sie heraus, wie alt Sie genau sind',
      subtitle: 'Berechnen Sie Ihr exaktes Alter in Jahren, Monaten, Tagen, Stunden und Sekunden ab Ihrem Geburtsdatum – schnell, kostenlos und datenschutzfreundlich.',
      featurePills: ['100% Kostenlos & Sicher', 'Sekundengenaue Präzision', 'Schaltjahre Berücksichtigt']
    },
    features3: [
      { title: 'Mathematisch Exakt', desc: 'Berücksichtigt präzise Schaltjahre und unterschiedliche Monatslängen des gregorianischen Kalenders.' },
      { title: 'Echtzeit-Ergebnisse', desc: 'Sofortige Anzeige aller Lebenszeitmetriken ohne Seitenneuladen.' },
      { title: '100% Lokaler Datenschutz', desc: 'Ihre persönlichen Daten verbleiben lokal auf Ihrem Gerät und werden an keinen Server übertragen.' }
    ],
    howItWorks: {
      title: 'So Funktioniert Es — In 4 Einfachen Schritten',
      subtitle: 'Erfahren Sie Ihr genaues Alter schnell und unkompliziert.',
      steps: [
        { num: '1', title: 'Geburtsdatum eingeben', desc: 'Wählen Sie Tag, Monat und Jahr Ihrer Geburt.' },
        { num: '2', title: 'Stichtag auswählen', desc: 'Standardmäßig das heutige Datum oder ein beliebiges anderes Datum.' },
        { num: '3', title: 'Auf Berechnen klicken', desc: 'Der Rechner ermittelt sekundenschnell Ihre genaue Lebenszeit.' },
        { num: '4', title: 'Ergebnis ablesen', desc: 'Sehen Sie Jahre, Monate, Tage sowie den Geburtstagscountdown.' }
      ]
    },
    useCases: {
      title: 'Typische Anwendungsbereiche',
      subtitle: 'Perfekt für offizielle Anträge, Meilensteine und Lebensstatistiken.',
      items: [
        { title: 'Behörden & Ausweisdokumente', desc: 'Genaue Altersprüfung für Pässe, Visa und behördliche Fristen.' },
        { title: 'Schul- und Vereinsanmeldung', desc: 'Prüfen Sie die Jahrgangsstufe basierend auf dem regionalen Stichtag.' },
        { title: 'Geburtstagscountdown', desc: 'Erfahren Sie genau, auf welchen Wochentag Ihr nächster Geburtstag fällt.' },
        { title: 'Baby-Entwicklungsphasen', desc: 'Überwachen Sie Säuglingsmonate und -wochen für kinderärztliche U-Untersuchungen.' }
      ]
    },
    faqs: [
      { q: 'Werden Schaltjahre exakt berechnet?', a: 'Ja, unsere Berechnungslogik berücksichtigt alle Schaltjahre inklusive der 400-Jahre-Regel exakt.' },
      { q: 'Werden persönliche Daten gespeichert?', a: 'Nein, sämtliche Berechnungen finden clientseitig in Ihrem Browser statt.' }
    ]
  },

  fr: {
    hero: {
      badge: "#1 Calculateur d'Âge Précis",
      title: "Calculateur d'Âge – Découvrez Exactement Quel Âge Vous Avez",
      subtitle: "Calculez votre âge chronologique exact en années, mois, jours, heures et secondes à partir de votre date de naissance avec précision et confidentialité.",
      featurePills: ['100% Gratuit & Privé', 'Précision Instantanée', 'Années Bissextiles Incluses']
    },
    features3: [
      { title: 'Précision Calendaire Absolue', desc: 'Calcul rigoureux prenant en compte les années bissextiles et le nombre variable de jours par mois.' },
      { title: 'Résultats Instantanés', desc: 'Affichage immédiat de toutes vos métriques de vie sans recharger la page.' },
      { title: 'Confidentialité Totale', desc: 'Le traitement est réalisé localement dans votre navigateur sans transfert de données.' }
    ],
    howItWorks: {
      title: 'Comment ça marche — 4 étapes simples',
      subtitle: 'Obtenez votre âge précis en quelques clics sans calculs fastidieux.',
      steps: [
        { num: '1', title: 'Indiquez votre date de naissance', desc: 'Renseignez le jour, le mois et votre année de naissance.' },
        { num: '2', title: 'Choisissez la date de référence', desc: "Date d'aujourd'hui par défaut, ou une date passée/future." },
        { num: '3', title: 'Cliquez sur Calculer', desc: 'Notre moteur effectue la comparaison calendaire instantanément.' },
        { num: '4', title: 'Consultez vos résultats', desc: 'Découvrez vos années, mois, jours vécus et le compte à rebours de votre anniversaire.' }
      ]
    },
    useCases: {
      title: 'Cas d’Utilisation Courants',
      subtitle: 'Indispensable pour les démarches administratives, anniversaires et jalons.',
      items: [
        { title: 'Démarches Administratives & Visas', desc: 'Contrôlez les conditions d’âge légal pour vos pièces d’identité et dossiers.' },
        { title: 'Inscription Scolaire & Activités', desc: 'Vérifiez la catégorie d’âge en fonction de la date limite d’inscription.' },
        { title: 'Compte à Rebours Anniversaire', desc: 'Découvrez le nombre de jours restants et le jour de la semaine de votre fête.' },
        { title: 'Suivi du Nourrisson', desc: 'Suivez précisément les semaines et mois de bébé pour le carnet de santé.' }
      ]
    },
    faqs: [
      { q: 'Le calcul prend-il en compte les années bissextiles ?', a: 'Oui, le calcul ajuste automatiquement les 366 jours des années bissextiles et le mois de février.' },
      { q: 'Mes données sont-elles enregistrées ?', a: 'Non, tous les calculs s’effectuent exclusivement sur votre appareil.' }
    ]
  },

  it: {
    hero: {
      badge: '#1 Calcolatore di Età Preciso',
      title: 'Calcolo Età – Scopri Esattamente Quanti Anni Hai',
      subtitle: 'Calcola la tua età cronologica esatta in anni, mesi, giorni, ore e secondi a partire dalla data di nascita con la massima precisione e privacy.',
      featurePills: ['100% Gratuito & Sicuro', 'Precisione Istantanea', 'Anni Bisestili Inclusi']
    },
    features3: [
      { title: 'Precisione Matematica', desc: 'Tiene conto degli anni bisestili e della durata specifica di ogni mese del calendario gregoriano.' },
      { title: 'Risultati in Tempo Reale', desc: 'Dati completi sul tempo vissuto calcolati all’istante senza ricaricare la pagina.' },
      { title: '100% Riservato nel Browser', desc: 'Tutti i dati rimangono nel tuo dispositivo e non vengono mai inviati a server esterni.' }
    ],
    howItWorks: {
      title: 'Come Funziona — 4 Semplici Passaggi',
      subtitle: 'Calcola la tua età esatta senza dover contare a mano.',
      steps: [
        { num: '1', title: 'Inserisci la data di nascita', desc: 'Seleziona giorno, mese e anno nel calendario interattivo.' },
        { num: '2', title: 'Scegli la data di confronto', desc: 'La data di oggi per impostazione predefinita, o qualsiasi altra data.' },
        { num: '3', title: 'Clicca su Calcola', desc: 'Il sistema calcola la differenza temporale esatta.' },
        { num: '4', title: 'Visualizza le statistiche', desc: 'Scopri anni, mesi, giorni, ore vissute e il conto alla rovescia del compleanno.' }
      ]
    },
    useCases: {
      title: 'Ambiti di Utilizzo Frequenti',
      subtitle: 'Ideale per scadenze burocratiche, traguardi importanti e promemoria.',
      items: [
        { title: 'Documenti e Procedure Legali', desc: 'Verifica i requisiti anagrafici per patente, passaporto e atti ufficiali.' },
        { title: 'Iscrizioni Scolastiche e Sportive', desc: 'Controlla la fascia di età in base alle date limite di iscrizione.' },
        { title: 'Prossimo Compleanno', desc: 'Scopri quanti giorni mancano e in che giorno della settimana cadrà.' },
        { title: 'Crescita del Neonato', desc: 'Monitora settimane e mesi di vita del bambino per visite pediatriche.' }
      ]
    },
    faqs: [
      { q: 'Come vengono gestiti gli anni bisestili?', a: 'Il nostro calcolo conteggia correttamente i 366 giorni degli anni bisestili gregoriani.' },
      { q: 'I miei dati personali vengono salvati?', a: 'No, tutti i calcoli avvengono sul tuo dispositivo in modo completamente privato.' }
    ]
  },

  // === TIER 2 & TIER 3 NATIVE PROFILES ===
  ru: {
    hero: {
      badge: '#1 Точный калькулятор возраста',
      title: 'Калькулятор возраста – Узнайте, сколько вам точно лет',
      subtitle: 'Точный расчет возраста в годах, месяцах, днях, часах и секундах по дате рождения бесплатно и конфиденциально.',
      featurePills: ['100% Бесплатно', 'Точность до секунд', 'Учет високосных лет']
    },
    features3: [
      { title: 'Математическая точность', desc: 'Точный календарный расчет с учетом високосных годов и длины месяцев.' },
      { title: 'Мгновенный результат', desc: 'Все метрики жизни рассчитываются на лету без перезагрузки страницы.' },
      { title: 'Полная конфиденциальность', desc: 'Все вычисления производятся в вашем браузере без отправки на сервер.' }
    ]
  },

  tr: {
    hero: {
      badge: '#1 Kesin Yaş Hesaplama Aracı',
      title: 'Yaş Hesaplama – Kaç Yaşında Olduğunuzu Tam Olarak Öğrenin',
      subtitle: 'Doğum tarihinize göre yaşınızı yıl, ay, gün, saat ve saniye cinsinden hemen ve güvenle hesaplayın.',
      featurePills: ['%100 Ücretsiz & Gizli', 'Anlık Sonuç', 'Artık Yıl Uyumlu']
    },
    features3: [
      { title: 'Tam Takvim Uyumu', desc: 'Artık yılları ve ay gün sayılarını tam olarak hesaplar.' },
      { title: 'Anında Sonuçlar', desc: 'Sayfayı yenilemeden tüm yaşam istatistiklerini görün.' },
      { title: '%100 Cihazınızda Çalışır', desc: 'Doğum tarihi bilgileriniz sunuculara gönderilmez.' }
    ]
  },

  id: {
    hero: {
      badge: '#1 Kalkulator Umur Akurat',
      title: 'Kalkulator Umur – Ketahui Usia Tepat Anda Secara Rinci',
      subtitle: 'Hitung umur kronologis tepat Anda dalam tahun, bulan, hari, jam dan detik dari tanggal lahir dengan aman dan gratis.',
      featurePills: ['100% Gratis & Aman', 'Presisi Tinggi', 'Disesuaikan Tahun Kabisat']
    },
    features3: [
      { title: 'Presisi Kalender Lengkap', desc: 'Memperhitungkan tahun kabisat dan perbedaan jumlah hari setiap bulan.' },
      { title: 'Hasil Real-Time Cepat', desc: 'Semua rincian waktu hidup dihitung secara instan.' },
      { title: 'Privasi 100% Terjaga', desc: 'Data Anda diproses langsung di browser tanpa disimpan di server.' }
    ]
  },

  ja: {
    hero: {
      badge: '#1 正確な年齢計算ツール',
      title: '年齢計算機 – 生年月日から正確な満年齢を計算',
      subtitle: '生年月日を入力するだけで、満年齢、生まれてからの日数、月数、時間、秒数を安全・完全無料で算出します。',
      featurePills: ['完全無料・プライバシー保護', '秒単位の精密計算', 'うるう年自動対応']
    },
    features3: [
      { title: '完全な暦法精度', desc: 'うるう年や月ごとの日数の違いを正確に反映します。' },
      { title: '瞬時のリアルタイム計算', desc: 'ページを再読み込みすることなく一瞬で算出します。' },
      { title: '100%ブラウザ内処理', desc: '入力データはサーバーに送信されず、手元の端末で安全に処理されます。' }
    ]
  },

  ko: {
    hero: {
      badge: '#1 정확한 만 나이 계산기',
      title: '만 나이 계산기 – 현재 정확한 만 나이를 확인하세요',
      subtitle: '생년월일을 입력하면 만 나이, 개월 수, 살아온 총 일수, 시간 및 다음 생일까지 남은 디데이를 정확하게 계산합니다.',
      featurePills: ['100% 무료 & 개인정보 보호', '실시간 정밀 계산', '윤년 자동 보정']
    },
    features3: [
      { title: '정확한 달력 공식', desc: '윤년과 각 달의 일수 차이를 완벽히 반영한 정밀 계산.' },
      { title: '실시간 즉시 계산', desc: '새로고침 없이 생애 통계를 한눈에 확인.' },
      { title: '100% 로컬 프라이버시', desc: '입력한 생년월일은 서버에 저장되지 않고 브라우저에서만 처리됩니다.' }
    ]
  },

  ar: {
    hero: {
      badge: '#1 حاسبة العمر الأكثر دقة',
      title: 'حاسبة العمر – اعرف عمرك الحقيقي بالسنوات والأشهر والأيام',
      subtitle: 'احسب عمرك الدقيق بدقة متناهية من تاريخ ميلادك مع معرفة موعد يوم ميلادك القادم وعدد الأيام التي عشتها بأمان وخصوصية تامة.',
      featurePills: ['مجاني 100% وآمن', 'دقة فورية بالثواني', 'معايرة السنوات الكبيسة']
    },
    features3: [
      { title: 'دقة حسابية متناهية', desc: 'حساب يعتمد على التقويم الميلادي مع مراعاة السنوات الكبيسة واختلاف أيام الأشهر.' },
      { title: 'نتائج فورية مباشرة', desc: 'عرض تفصيلي لجميع إحصائيات حياتك دون الحاجة لتحديث الصفحة.' },
      { title: 'خصوصية تامة 100%', desc: 'تتم جميع العمليات الحسابية محلياً داخل متصفحك دون إرسال أي بيانات لخوادم خارجية.' }
    ],
    howItWorks: {
      title: 'كيف تعمل حاسبة العمر — 4 خطوات بسيطة',
      subtitle: 'احسب عمرك وتفاصيل حياتك بدقة دون الحاجة للعد اليدوي المعقد.',
      steps: [
        { num: '1', title: 'أدخل تاريخ ميلادك', desc: 'حدد اليوم والشهر وسنة الميلاد في حقل التاريخ.' },
        { num: '2', title: 'حدد تاريخ المقارنة', desc: 'تاريخ اليوم تلقائياً، أو اختر أي تاريخ ماضٍ أو مستقبلي.' },
        { num: '3', title: 'انقر على احسب العمر', desc: 'يقوم المحرك الرياضي بحساب الفرق بالسنوات والأشهر والأيام.' },
        { num: '4', title: 'استكشف إحصائيات حياتك', desc: 'شاهد الأيام والأسابيع والساعات التي عشتها والعد التنازلي ليوم ميلادك.' }
      ]
    },
    faqs: [
      { q: 'كيف يتم حساب السنوات الكبيسة؟', a: 'تقوم الحاسبة بإضافة يوم 29 فبراير في كل سنة كبيسة تلقائياً لضمان الدقة الكاملة.' },
      { q: 'هل يتم حفظ تاريخ ميلادي؟', a: 'لا، العمليات الحسابية تجري داخل المتصفح بالكامل لحماية خصوصيتك المطلقة.' }
    ]
  },

  ur: {
    hero: {
      badge: '#1 درست ترین عمر کیلکولیٹر',
      title: 'عمر کیلکولیٹر – اپنی بالکل صحیح عمر اور دن معلوم کریں',
      subtitle: 'اپنی تاریخ پیدائش درج کر کے سال، مہینے، دن، گھنٹے اور سیکنڈ کے حساب سے اپنی اصل عمر اور اگلی سالگرہ کے دن معلوم کریں۔',
      featurePills: ['100% مفت اور محفوظ', 'سیکنڈ کی درستگی', 'لیپ سال کی مکمل رعایت']
    },
    features3: [
      { title: 'مکمل حسابی درستگی', desc: 'ہر مہینے کے مختلف دنوں اور لیپ سالوں کا خودکار اور بالکل درست حساب۔' },
      { title: 'فوری نتائج', desc: 'بغیر کسی انتظار کے زندگی کے تمام گزری ہوئی گھنٹوں اور دنوں کا جائزہ۔' },
      { title: '100% مکمل رازداری', desc: 'آپ کی تاریخ پیدائش آپ کے اپنے موبائل یا کمپیوٹر پر پراسیس ہوتی ہے، کسی سرور پر نہیں جاتی۔' }
    ],
    howItWorks: {
      title: 'یہ کیسے کام کرتا ہے — 4 آسان مراحل',
      subtitle: 'اپنی درست عمر اور گزری ہوئی زندگی کے دن آسانی سے جانیں۔',
      steps: [
        { num: '1', title: 'اپنی تاریخ پیدائش منتخب کریں', desc: 'اپنے پیدا ہونے کا دن، مہینہ اور سال درج کریں۔' },
        { num: '2', title: 'موازنے کی تاریخ منتخب کریں', desc: 'آج کی تاریخ خودکار طور پر منتخب ہوتی ہے، یا کوئی اور تاریخ چنیں۔' },
        { num: '3', title: 'کیلکولیٹ پر کلک کریں', desc: 'ہمارا جدید الگورتھم دونوں تاریخوں کا درست حسابی تقابل کرتا ہے۔' },
        { num: '4', title: 'تفصیلی نتائج دیکھیں', desc: 'اپنے سال، مہینے، دن، کل گھنٹے اور اگلی سالگرہ کا وقت دیکھیں۔' }
      ]
    },
    faqs: [
      { q: 'کیا یہ لیپ سال کا حساب صحیح کرتا ہے؟', a: 'جی ہاں، یہ گریگورین کیلنڈر کے تمام لیپ سالوں اور 29 فروری کو خودکار طور پر درست شمار کرتا ہے۔' },
      { q: 'کیا میری تاریخ پیدائش محفوظ کی جاتی ہے؟', a: 'ہرگز نہیں۔ تمام حساب کتاب آپ کے براؤزر کے اندر نجی طور پر ہوتا ہے۔' }
    ]
  },

  hi: {
    hero: {
      badge: '#1 सटीक आयु कैलकुलेटर',
      title: 'आयु कैलकुलेटर – जानें आप वास्तव में कितने साल के हैं',
      subtitle: 'अपनी जन्म तिथि दर्ज करें और वर्ष, महीने, दिन, घंटे और सेकंड में अपनी सटीक उम्र तुरंत जानें। 100% निःशुल्क और निजी।',
      featurePills: ['100% मुफ्त एवं सुरक्षित', 'सटीक सेकंडों के साथ', 'लीप वर्ष समायोजित']
    },
    features3: [
      { title: 'सटीक गणितीय गणना', desc: 'लीप वर्ष और महीनों के अलग-अलग दिनों का सटीक समायोजन।' },
      { title: 'तुरंत परिणाम', desc: 'बिना पेज रीलोड किए जीवन के सभी आंकड़े एक नज़र में।' },
      { title: '100% पूर्ण गोपनीयता', desc: 'आपकी जन्म तिथि आपके फोन या कंप्यूटर पर ही प्रोसेस होती है।' }
    ],
    howItWorks: {
      title: 'यह कैसे काम करता है — 4 आसान चरण',
      subtitle: 'बिना किसी परेशानी के अपनी सटीक उम्र आसानी से निकालें।',
      steps: [
        { num: '1', title: 'अपनी जन्म तिथि चुनें', desc: 'कैलेंडर से अपना जन्म दिन, महीना और वर्ष दर्ज करें।' },
        { num: '2', title: 'तुलना की तारीख चुनें', desc: 'आज की तारीख अपने आप चुनी होती है या कोई अन्य तारीख चुनें।' },
        { num: '3', title: 'आयु निकालें पर क्लिक करें', desc: 'सिस्टम दोनों तारीखों के बीच का सटीक अंतर निकालता है।' },
        { num: '4', title: 'विस्तृत परिणाम देखें', desc: 'अपने कुल साल, महीने, दिन और अगले जन्मदिन का काउंटडाउन देखें।' }
      ]
    },
    faqs: [
      { q: 'क्या यह लीप वर्ष को सही गिनता है?', a: 'हाँ, यह हर 4 साल में आने वाले 29 फरवरी के लीप वर्ष को पूरी तरह सही जोड़ता है।' },
      { q: 'क्या मेरा डेटा कहीं स्टोर होता है?', a: 'नहीं, पूरी गणना सीधे आपके ब्राउज़र में होती है।' }
    ]
  },

  nl: {
    hero: {
      badge: '#1 Nauwkeurige Leeftijd Calculator',
      title: 'Leeftijd Calculator – Ontdek precies hoe oud u bent',
      subtitle: 'Bereken uw exacte leeftijd in jaren, maanden, dagen, uren en seconden vanaf uw geboortedatum. Snel, accuraat en privé.',
      featurePills: ['100% Gratis & Veilig', 'Directe Precisie', 'Schrikkeljaren Meegerekend']
    },
    features3: [
      { title: 'Exacte Kalenderberekening', desc: 'Houdt nauwkeurig rekening met schrikkeljaren en wisselende maandlengtes.' },
      { title: 'Real-Time Statistieken', desc: 'Bekijk direct al uw levensstatistieken zonder pagina te verversen.' },
      { title: '100% Privacy in uw Browser', desc: 'Berekeningen gebeuren lokaal op uw toestel zonder externe opslag.' }
    ]
  },

  pl: {
    hero: {
      badge: '#1 Dokładny Kalkulator Wieku',
      title: 'Kalkulator Wieku – Sprawdź dokładnie ile masz lat',
      subtitle: 'Oblicz swój dokładny wiek w latach, miesiącach, dniach, godzinach i sekundach na podstawie daty urodzenia.',
      featurePills: ['100% Darmowy & Bezpieczny', 'Błyskawiczny Wynik', 'Uwzględnia Lata Przestępne']
    },
    features3: [
      { title: 'Precyzja Matematyczna', desc: 'Uwzględnia lata przestępne oraz różną liczbę dni w poszczególnych miesiącach.' },
      { title: 'Wyniki w Czasie Rzeczywistym', desc: 'Błyskawiczne obliczenia bez konieczności odświeżania strony.' },
      { title: '100% Prywatności', desc: 'Dane są przetwarzane wyłącznie lokalnie w Twojej przeglądarce.' }
    ]
  },

  vi: {
    hero: {
      badge: '#1 Công Cụ Tính Tuổi Chính Xác',
      title: 'Công Cụ Tính Tuổi – Xem Bạn Bao Nhiêu Tuổi Chính Xác',
      subtitle: 'Tính tuổi chính xác theo năm, tháng, ngày, giờ và giây từ ngày sinh của bạn hoàn toàn miễn phí và bảo mật.',
      featurePills: ['100% Miễn phí & Bảo mật', 'Chính xác từng giây', 'Tính năm nhuận tự động']
    },
    features3: [
      { title: 'Độ Chính Xác Lịch Tuyệt Đối', desc: 'Tự động tính năm nhuận và số ngày chính xác của từng tháng.' },
      { title: 'Kết Quả Tức Thì', desc: 'Hiển thị toàn bộ thống kê thời gian sống mà không cần tải lại trang.' },
      { title: 'Bảo Mật 100% Tại Thiết Bị', desc: 'Dữ liệu được xử lý trực tiếp trên trình duyệt của bạn.' }
    ]
  },

  th: {
    hero: {
      badge: '#1 โปรแกรมคำนวณอายุแม่นยำ',
      title: 'โปรแกรมคำนวณอายุ – ตรวจสอบอายุจริงของคุณอย่างแม่นยำ',
      subtitle: 'คำนวณอายุจริงของคุณเป็นปี เดือน วัน ชั่วโมง และวินาที จากวันเดือนปีเกิดอย่างรวดเร็ว ปลอดภัย และฟรี 100%',
      featurePills: ['ฟรี 100% และเป็นส่วนตัว', 'แม่นยำระดับวินาที', 'คำนวณปีอธิกสุรทิน']
    },
    features3: [
      { title: 'ความแม่นยำตามปฏิทิน', desc: 'คำนวณปีอธิกสุรทินและจำนวนวันในแต่ละเดือนอย่างแม่นยำ.' },
      { title: 'ผลลัพธ์ทันที', desc: 'แสดงสถิติอายุของคุณในทันทีโดยไม่ต้องโหลดหน้าเว็บใหม่.' },
      { title: 'ความเป็นส่วนตัว 100%', desc: 'ข้อมูลถูกประมวลผลบนเบราว์เซอร์ของคุณ ไม่มีการส่งข้อมูลไปยังเซิร์ฟเวอร์.' }
    ]
  },

  bn: {
    hero: {
      badge: '#1 সঠিক বয়স নির্ণয় ক্যালকুলেটর',
      title: 'বয়স ক্যালকুলেটর – আপনার সঠিক বয়স এবং দিন জানুন',
      subtitle: 'জন্ম তারিখ দিয়ে আপনার সঠিক বয়স বছর, মাস, দিন, ঘণ্টা ও সেকেন্ডে হিসাব করুন। দ্রুত, নির্ভুল এবং সম্পূর্ণ নিরাপদ।',
      featurePills: ['১০০% ফ্রি ও নিরাপদ', 'সেকেন্ডের নিখুঁত হিসাব', 'অধিবর্ষ সমন্বিত']
    },
    features3: [
      { title: 'নিখুঁত গাণিতিক হিসাব', desc: 'অধিবর্ষ (লিপ ইয়ার) এবং মাসের দিনের পার্থক্যের সম্পূর্ণ নিখুঁত গণনা।' },
      { title: 'তাৎক্ষণিক ফলাফল', desc: 'পেজ রিলোড ছাড়াই জীবনের সমস্ত সময় ও দিনের পরিসংখ্যান দেখুন।' },
      { title: 'সম্পূর্ণ গোপনীয়তা', desc: 'আপনার সমস্ত তথ্য কেবল আপনার ব্রাউজারেই প্রক্রিয়াকৃত হয়।' }
    ]
  },

  'zh-cn': {
    hero: {
      badge: '#1 精准年龄计算器',
      title: '年龄计算器 – 在线精准计算您的周岁、月数与天数',
      subtitle: '根据出生日期快速精准计算您的精确周岁、出生总天数、生活小时与秒数，并提供下一个生日倒计时。100% 免费安全。',
      featurePills: ['100% 免费安全', '秒级精准计算', '精确校准闰年']
    },
    features3: [
      { title: '公历历法严谨计算', desc: '精确考量闰年与每月天数差异，提供最真实的年龄数字。' },
      { title: '即时实时反馈', desc: '输入即出结果，无需刷新网页即可掌握完整生命里程碑。' },
      { title: '100% 浏览器本地运算', desc: '所有日期均在您的设备本地处理，绝不上传到任何服务器。' }
    ]
  },

  'zh-tw': {
    hero: {
      badge: '#1 精準年齡與實歲計算器',
      title: '年齡計算器 – 線上精準查詢實歲年齡、天數與生日倒數',
      subtitle: '依據您的出生日期即時精算實歲歲數、累積天數、小時與下一次生日天數。完全免費且保護隱私。',
      featurePills: ['100% 免費隱私保證', '秒級精準呈現', '完整支援閏年計算']
    },
    features3: [
      { title: '嚴謹的歷法計算', desc: '自動辨識閏年與不同月份天數，呈現最精確的年齡結果。' },
      { title: '即時動態運算', desc: '輸入立即獲取結果，生命歷程資訊一覽無遺。' },
      { title: '100% 本地端安全運算', desc: '所有資訊均於您的瀏覽器本地處理，資料絕對保密。' }
    ]
  },

  fil: {
    hero: {
      badge: '#1 Tumpak na Calculator ng Edad',
      title: 'Calculator ng Edad – Alamin Nang Eksakto Kung Ilang Taon Ka Na',
      subtitle: 'Kalkulahin ang iyong eksaktong edad sa mga taon, buwan, araw, oras at segundo mula sa iyong kaarawan nang mabilis, libre at pribado.',
      featurePills: ['100% Libre at Pribado', 'Mabilis na Katumpakan', 'Naka-calibrate sa Leap Year']
    },
    features3: [
      { title: 'Matematikal na Katumpakan', desc: 'Isinasaalang-alang ang mga taong bisyesto (leap years) at magkakaibang haba ng buwan.' },
      { title: 'Real-Time na Resulta', desc: 'Agad na makita ang buong breakdown ng iyong buhay nang walang page reload.' },
      { title: '100% Pribasiya sa Browser', desc: 'Lokal na pinoproseso sa iyong browser. Walang impormasyong ibinabahagi sa server.' }
    ],
    howItWorks: {
      title: 'Paano Gumagana — Madaling 4 na Hakbang',
      subtitle: 'Alamin ang iyong eksaktong edad sa 4 na simpleng hakbang.',
      steps: [
        { num: '1', title: 'Ilagay ang Petsa ng Kapanganakan', desc: 'Piliin ang araw, buwan, at taon ng kapanganakan.' },
        { num: '2', title: 'Pumili ng Petsang Paghahambingan', desc: 'Awtomatikong petsa ngayon, o pumili ng ibang petsa.' },
        { num: '3', title: 'Pindutin ang Kalkulahin', desc: 'Kino-compute ng engine ang eksaktong agwat ng oras.' },
        { num: '4', title: 'Tingnan ang Detalyadong Edad', desc: 'Tingnan ang taon, buwan, araw, at countdown sa susunod na kaarawan.' }
      ]
    },
    useCases: {
      title: 'Karaniwang Gamit ng Calculator ng Edad',
      subtitle: 'Maaasahang tool para sa mga opisyal na dokumento, pasaporte, at mahahalagang okasyon.',
      items: [
        { title: 'Pasaporte at Visa', desc: 'I-verify ang eksaktong edad para sa mga aplikasyon sa gobyerno at embahada.' },
        { title: 'Pagpapatala sa Paaralan', desc: 'Alamin kung pasok ang edad ayon sa opisyal na cutoff ng paaralan.' },
        { title: 'Countdown ng Kaarawan', desc: 'Alamin kung ilang araw na lang ang hihintayin bago ang susunod na kaarawan.' },
        { title: 'Pagsukat sa Edad ng Sanggol', desc: 'Subaybayan ang edad ng sanggol sa linggo at buwan para sa checkup at bakuna.' }
      ]
    },
    faqs: [
      { q: 'Paano kinakalkula ang leap years?', a: 'Sumusunod ang aming calculator sa kalendaryong Gregoryano na nagdadagdag ng 366 araw sa bawat leap year.' },
      { q: 'Nai-save ba ang aking petsa ng kapanganakan?', a: 'Hindi. Lahat ng kalkulasyon ay 100% lokal sa iyong browser at walang data na ipinapadala.' },
      { q: 'Maaari ko bang kalkulahin ang edad sa hinaharap?', a: 'Oo! Baguhin lamang ang petsa sa hinaharap upang makita ang iyong magiging edad.' }
    ]
  },

  ms: {
    hero: {
      badge: '#1 Kalkulator Umur Tepat & Percuma',
      title: 'Kalkulator Umur – Ketahui Umur Sebenar Anda Secara Tepat',
      subtitle: 'Kira umur kronologi anda dalam tahun, bulan, hari, jam dan saat daripada tarikh lahir anda dengan pantas, tepat dan selamat.',
      featurePills: ['100% Percuma & Peribadi', 'Ketepatan Masa Nyata', 'Diselaraskan Tahun Lompat']
    },
    features3: [
      { title: 'Ketepatan Matematik Kalendar', desc: 'Mengambil kira tahun lompat dan perbezaan hari setiap bulan untuk ketepatan mutlak.' },
      { title: 'Keputusan Serta-merta', desc: 'Lihat statistik penuh jangka hayat anda dalam sekelip mata tanpa muat semula halaman.' },
      { title: 'Privasi 100% Pelayar Web', desc: 'Pengiraan diproses dalam peranti anda sendiri tanpa sebarang storan pelayan.' }
    ],
    howItWorks: {
      title: 'Cara Berfungsi — 4 Langkah Mudah',
      subtitle: 'Dapatkan umur tepat anda dalam 4 langkah pantas.',
      steps: [
        { num: '1', title: 'Masukkan Tarikh Lahir', desc: 'Pilih hari, bulan, dan tahun kelahiran anda.' },
        { num: '2', title: 'Tetapkan Tarikh Sasaran', desc: 'Lalai kepada hari ini atau pilih mana-mana tarikh lain.' },
        { num: '3', title: 'Klik Kira', desc: 'Sistem membandingkan tarikh dengan penentukuran tahun lompat.' },
        { num: '4', title: 'Terokai Metrik Hayat', desc: 'Ketahui umur dalam tahun, bulan, hari dan kira detik hari lahir anda.' }
      ]
    },
    useCases: {
      title: 'Kegunaan Biasa Kalkulator Umur',
      subtitle: 'Digunakan oleh jutaan pengguna untuk permohonan rasmi, sekolah, dan sambutan hari jadi.',
      items: [
        { title: 'Permohonan Pasport & Visa', desc: 'Sahkan syarat kelayakan umur untuk borang rasmi kerajaan.' },
        { title: 'Kemasukan Sekolah & Sukan', desc: 'Semak kelayakan mengikut tarikh potongan umur rasmi.' },
        { title: 'Kira Detik Hari Lahir', desc: 'Ketahui baki hari dan hari dalam minggu untuk sambutan hari jadi seterusnya.' },
        { title: 'Tumbesaran Bayi', desc: 'Jejak perkembangan bayi dalam minggu dan bulan untuk temujanji doktor.' }
      ]
    },
    faqs: [
      { q: 'Bagaimanakah tahun lompat dikira?', a: 'Kalkulator menggunakan peraturan kalendar Gregory dengan 366 hari untuk tahun lompat secara tepat.' },
      { q: 'Adakah data tarikh lahir saya disimpan?', a: 'Tidak sama sekali. Semua pengiraan berjalan secara persendirian 100% dalam pelayar anda.' }
    ]
  },

  sv: {
    hero: {
      badge: '#1 Exakt Åldersräknare',
      title: 'Åldersräknare – Räkna Ut Exakt Hur Gammal Du Är',
      subtitle: 'Beräkna din exakta ålder i år, månader, dagar, timmar och sekunder från ditt födelsedatum helt gratis och privat.',
      featurePills: ['100% Gratis & Privat', 'Millisekundprecision', 'Skottårskalibrerad']
    },
    features3: [
      { title: 'Matematisk Kalenderprecision', desc: 'Beräknar exakt ålder med hänsyn till skottår och månadernas varierande längd.' },
      { title: 'Omedelbara Resultat', desc: 'Se din fullständiga åldersstatistik och livstidsmetrik direkt på skärmen.' },
      { title: '100% Lokal Integritet', desc: 'All data behandlas direkt i din webbläsare utan att någonsin sparas externt.' }
    ],
    howItWorks: {
      title: 'Hur det fungerar — 4 enkla steg',
      subtitle: 'Ta reda på din exakta ålder på några sekunder.',
      steps: [
        { num: '1', title: 'Ange födelsedatum', desc: 'Välj dag, månad och år i datumväljaren.' },
        { num: '2', title: 'Välj jämförelsedatum', desc: 'Dagens datum som standard, eller välj valfritt datum.' },
        { num: '3', title: 'Klicka på Beräkna', desc: 'Vår beräkningsmotor jämför datumen med precision.' },
        { num: '4', title: 'Utforska din livsstatistik', desc: 'Se år, månader, dagar, timmar och nedräkning till nästa födelsedag.' }
      ]
    },
    useCases: {
      title: 'Vanliga användningsområden',
      subtitle: 'Perfekt för officiella ansökningar, pensionsplanering och födelsedagsfiranden.',
      items: [
        { title: 'Pass- och visumansökningar', desc: 'Verifiera exakta ålderskrav för myndighetsdokument.' },
        { title: 'Skola och idrottsklasser', desc: 'Kontrollera åldersgränser baserat på officiella brytdatum.' },
        { title: 'Nedräkning till födelsedag', desc: 'Se exakt hur många dagar det är kvar och vilken veckodag den infaller på.' },
        { title: 'Barnets utveckling', desc: 'Följ barnets ålder i veckor och månader för BVC-kontroller.' }
      ]
    },
    faqs: [
      { q: 'Hur hanteras skottår?', a: 'Räknaren tillämpar den gregorianska kalendern och adderar 366 dagar vid skottår.' },
      { q: 'Sparas mitt födelsedatum på någon server?', a: 'Nej. Alla beräkningar körs 100% lokalt i din webbläsare.' }
    ]
  },

  no: {
    hero: {
      badge: '#1 Nøyaktig Alderskalkulator',
      title: 'Alderskalkulator – Finn Ut Nøyaktig Hvor Gammel Du Er',
      subtitle: 'Beregn din nøyaktige kronologiske alder i år, måneder, dager, timer og sekunder fra din fødselsdato raskt og privat.',
      featurePills: ['100% Gratis & Privat', 'Umiddelbar Nøyaktighet', 'Skuddårskalibrert']
    },
    features3: [
      { title: 'Matematisk Presisjon', desc: 'Tar hensyn til skuddår og varierende månedslengder for 100% nøyaktig resultat.' },
      { title: 'Øyeblikkelige Resultater', desc: 'Få full oversikt over din levde tid uten forsinkelser eller sideoppdatering.' },
      { title: 'Fullt Personvern', desc: 'Beregningene skjer utelukkende lokalt i nettleseren din.' }
    ],
    howItWorks: {
      title: 'Slik fungerer det — 4 enkle trinn',
      subtitle: 'Beregn alderen din på få sekunder.',
      steps: [
        { num: '1', title: 'Oppgi fødselsdato', desc: 'Velg dag, måned og år fra kalenderen.' },
        { num: '2', title: 'Velg måldato', desc: 'Bruker dagens dato automatisk eller en valgfri dato.' },
        { num: '3', title: 'Trykk Beregn', desc: 'Systemet regner ut nøyaktig tidsdifferanse.' },
        { num: '4', title: 'Se resultatene', desc: 'Opplev alderen din oppgitt i år, måneder, dager og sekunder.' }
      ]
    },
    useCases: {
      title: 'Bruksområder for alderskalkulatoren',
      subtitle: 'Nyttig til offentlige skjemaer, skoler og bursdagsplanlegging.',
      items: [
        { title: 'Offentlige dokumenter og pass', desc: 'Bekreft alder i henhold til formelle krav og retningslinjer.' },
        { title: 'Skole- og idrettsgrenser', desc: 'Sjekk alderstrinn for opptak og aldersinndelte konkurranser.' },
        { title: 'Nedtelling til neste bursdag', desc: 'Se hvor mange dager det er igjen og ukedagen bursdagen havner på.' },
        { title: 'Spedbarnsalder', desc: 'Spor babyens alder nøyaktig i uker og måneder for helsestasjonskontroller.' }
      ]
    },
    faqs: [
      { q: 'Er dataene mine trygge?', a: 'Ja, ingen fødselsdatoer sendes over internett eller lagres på eksterne servere.' }
    ]
  },

  da: {
    hero: {
      badge: '#1 Præcis Aldersberegner',
      title: 'Aldersberegner – Find Ud Af Hvor Gammel Du Er Helt Nøjagtigt',
      subtitle: 'Beregn din præcise alder i år, måneder, dage, timer og sekunder ud fra din fødselsdato hurtigt, gratis og privat.',
      featurePills: ['100% Gratis & Privat', 'Øjeblikkelig Præcision', 'Skudårskalibreret']
    },
    features3: [
      { title: 'Komplet Kalenderpræcision', desc: 'Kalkulerer nøjagtig kronologisk alder med korrekte skudår og månedslængder.' },
      { title: 'Hurtigt Overblik', desc: 'Få dit fulde livsoverblik med sekunders præcision uden genindlæsning.' },
      { title: '100% Privatliv i Browseren', desc: 'Dine oplysninger behandles kun på din egen enhed.' }
    ],
    howItWorks: {
      title: 'Sådan virker det — 4 nemme trin',
      subtitle: 'Find din præcise alder med det samme.',
      steps: [
        { num: '1', title: 'Vælg fødselsdato', desc: 'Vælg dag, måned og år for din fødsel.' },
        { num: '2', title: 'Vælg sammenligningsdato', desc: 'Standard er i dag, men du kan vælge enhver dato.' },
        { num: '3', title: 'Klik på Beregn', desc: 'Algoritmen udregner den nøjagtige aldersforskel.' },
        { num: '4', title: 'Se din statistik', desc: 'Få overblik over år, måneder, dage og nedtælling til fødselsdag.' }
      ]
    },
    useCases: {
      title: 'Typiske anvendelser',
      subtitle: 'Ideel til officielle papirer, skoleindskrivning og festplanlægning.',
      items: [
        { title: 'Pas og officielle ansøgninger', desc: 'Tjek alderskrav til pas, kørekort og myndigheder.' },
        { title: 'Skolestart og sport', desc: 'Kontroller årgange i forhold til officielle skæringsdatoer.' },
        { title: 'Fødselsdagsnedtælling', desc: 'Få oplyst ugedagen og antallet af dage til din næste fødselsdag.' },
        { title: 'Babyens alder', desc: 'Følg spædbarnets udvikling i uger og måneder til lægebesøg.' }
      ]
    },
    faqs: [
      { q: 'Bliver mine data gemt?', a: 'Nej, alle beregninger foregår udelukkende lokalt i din webbrowser.' }
    ]
  },

  fi: {
    hero: {
      badge: '#1 Tarkka Ikälaskuri',
      title: 'Ikälaskuri – Laske Tarkka Ikäsi Vuosina, Kuukausina ja Päivinä',
      subtitle: 'Laske tarkka ikäsi syntymäajan perusteella vuosina, kuukausina, päivinä, tunteina ja sekunteina täysin ilmaiseksi ja turvallisesti.',
      featurePills: ['100% Ilmainen & Yksityinen', 'Tarkka Laskenta', 'Karkausvuodet Huomioitu']
    },
    features3: [
      { title: 'Täsmällinen Kalenterilaskenta', desc: 'Huomioi karkausvuodet ja kuukausien vaihtelevat pituudet täsmällisesti.' },
      { title: 'Välitön Tulos', desc: 'Näe kattavat elämäntilastot ja syntymäpäivälaskuri silmänräpäyksessä.' },
      { title: '100% Paikallinen Yksityisyys', desc: 'Tietojasi ei koskaan lähetetä palvelimelle; laskenta tapahtuu selaimessasi.' }
    ],
    howItWorks: {
      title: 'Miten laskuri toimii — 4 helppoa vaihetta',
      subtitle: 'Selvitä tarkka ikäsi helposti ilman monimutkaista päässälaskua.',
      steps: [
        { num: '1', title: 'Syötä syntymäaika', desc: 'Valitse päivä, kuukausi ja vuosi kalenterista.' },
        { num: '2', title: 'Valitse vertailupäivä', desc: 'Oletuksena tämä päivä tai mikä tahansa muu päivämäärä.' },
        { num: '3', title: 'Napsauta Laske', desc: 'Laskentamoottori laskee tarkan kronologisen iän.' },
        { num: '4', title: 'Tarkastele tuloksia', desc: 'Näe ikäsi vuosina, kuukausina, päivinä ja sekunteina.' }
      ]
    },
    useCases: {
      title: 'Yleiset käyttötarkoitukset',
      subtitle: 'Hyödyllinen virallisiin hakemuksiin, kouluun ilmoittautumiseen ja juhlien suunnitteluun.',
      items: [
        { title: 'Passi- ja viisumihakemukset', desc: 'Varmista viralliset ikävaatimukset asiakirjoja varten.' },
        { title: 'Koulu- ja urheiluikärajat', desc: 'Tarkista ikäluokat virallisten rajapäivämäärien mukaan.' },
        { title: 'Syntymäpäivälaskuri', desc: 'Tarkista kuinka monta päivää on seuraavaan syntymäpäivääsi.' },
        { title: 'Vauvan ikäseuranta', desc: 'Seuraa vauvan ikää viikkoina ja kuukausina neuvolakäyntejä varten.' }
      ]
    },
    faqs: [
      { q: 'Tallennetaanko syntymäaikaani?', a: 'Ei. Kaikki laskelmat suoritetaan 100% selaimessasi ilman tietojen tallennusta.' }
    ]
  },

  cs: {
    hero: {
      badge: '#1 Přesná Kalkulačka Věku',
      title: 'Kalkulačka Věku – Zjistěte Svůj Přesný Věk v Letech a Dnech',
      subtitle: 'Vypočítejte si přesný chronologický věk v letech, měsících, dnech, hodinách a sekundách podle data narození snadno a diskrétně.',
      featurePills: ['100% Zdarma a Diskrétní', 'Okamžitá Přesnost', 'Přestupné Roky Zahrnuty']
    },
    features3: [
      { title: 'Matematická Přesnost', desc: 'Počítá s přestupnými roky a rozdílným počtem dní v jednotlivých měsících.' },
      { title: 'Okamžitý Výsledek', desc: 'Kompletní přehled prožitého času a odpočtu do narozenin bez načítání stránky.' },
      { title: '100% Soukromí v Prohlížeči', desc: 'Žádná data se neodesílají na server; vše se počítá přímo ve vašem zařízení.' }
    ],
    howItWorks: {
      title: 'Jak to funguje — 4 jednoduché kroky',
      subtitle: 'Zjistěte svůj přesný věk během několika sekund.',
      steps: [
        { num: '1', title: 'Zadejte datum narození', desc: 'Zvolte den, měsíc a rok vašeho narození.' },
        { num: '2', title: 'Zvolte srovnávací datum', desc: 'Přednastaveno na dnešek, případně zvolte jiné datum.' },
        { num: '3', title: 'Klikněte na Spočítat', desc: 'Algoritmus porovná data s přesností na dny.' },
        { num: '4', title: 'Prohlédněte si statistiky', desc: 'Uvidíte přesný věk v letech, dnech a odpočet narozenin.' }
      ]
    },
    useCases: {
      title: 'Běžné využití kalkulačky věku',
      subtitle: 'Praktický nástroj pro úřední formuláře, zápisy do škol a oslavy narozenin.',
      items: [
        { title: 'Žádosti o pas a víza', desc: 'Ověřte si splnění věkových limitů pro úřední doklady.' },
        { title: 'Školní a sportovní zápisy', desc: 'Zkontrolujte věkovou kategorii podle platných termínů.' },
        { title: 'Odpočet do narozenin', desc: 'Zjistěte přesný počet zbývajících dní a den v týdnu.' },
        { title: 'Věk miminka', desc: 'Sledujte věk kojence v týdnech a měsících pro lékařské prohlídky.' }
      ]
    },
    faqs: [
      { q: 'Ukládají se mé osobní údaje?', a: 'Ne. Veškeré výpočty probíhají výhradně lokálně ve vašem webovém prohlížeči.' }
    ]
  },

  ro: {
    hero: {
      badge: '#1 Calculator Exact de Vârstă',
      title: 'Calculator Vârstă – Află Câți Ani, Luni și Zile Ai Exact',
      subtitle: 'Calculează vârsta ta cronologică exactă în ani, luni, zile, ore și secunde pe baza datei de naștere, gratuit și confidențial.',
      featurePills: ['100% Gratuit și Privat', 'Precizie la Secundă', 'Ajustat pentru Ani Bisecți']
    },
    features3: [
      { title: 'Precizie Calendaristică Riguroasă', desc: 'Ține cont de anii bisecți și de numărul variabil de zile din fiecare lună.' },
      { title: 'Rezultate Instantanee', desc: 'Statistici complete despre timpul trăit și numărătoarea inversă până la ziua de naștere.' },
      { title: 'Confidențialitate 100% Locală', desc: 'Datele sunt procesate exclusiv în browserul tău, fără a fi trimise pe servere.' }
    ],
    howItWorks: {
      title: 'Cum funcționează — 4 pași simpli',
      subtitle: 'Află vârsta ta exactă în câteva secunde.',
      steps: [
        { num: '1', title: 'Introdu data nașterii', desc: 'Selectează ziua, luna și anul nașterii tale.' },
        { num: '2', title: 'Alege data de referință', desc: 'Implicit data de astăzi sau orice altă dată dorită.' },
        { num: '3', title: 'Apasă Calculează', desc: 'Motorul nostru calculează diferența cronologică exactă.' },
        { num: '4', title: 'Descoperă statisticile', desc: 'Vizualizează anii, lunile, zilele și secundele trăite.' }
      ]
    },
    useCases: {
      title: 'Utilizări frecvente',
      subtitle: 'Esențial pentru acte oficiale, înscrieri la școală și evenimente speciale.',
      items: [
        { title: 'Cereri de pașapoarte și vize', desc: 'Verifică cerințele exacte de vârstă pentru documente oficiale.' },
        { title: 'Înscrieri la școală și sport', desc: 'Verifică încadrarea în categoria corectă de vârstă.' },
        { title: 'Numărătoare inversă aniversare', desc: 'Află câte zile au mai rămas până la următoarea zi de naștere.' },
        { title: 'Dezvoltarea bebelușului', desc: 'Urmărește vârsta bebelușului în săptămâni și luni pentru pediatru.' }
      ]
    },
    faqs: [
      { q: 'Sunt datele mele stocate pe server?', a: 'Nu. Toate calculele se efectuează 100% în browserul tău.' }
    ]
  },

  el: {
    hero: {
      badge: '#1 Αριθμομηχανή Ηλικίας Ακριβείας',
      title: 'Υπολογισμός Ηλικίας – Μάθετε Ακριβώς Πόσο Χρονών Είστε',
      subtitle: 'Υπολογίστε την ακριβή ηλικία σας σε έτη, μήνες, ημέρες, ώρες και δευτερόλεπτα από την ημερομηνία γέννησής σας δωρεάν και με πλήρη ασφάλεια.',
      featurePills: ['100% Δωρεάν & Ιδιωτικό', 'Ακρίβεια Δευτερολέπτου', 'Υπολογισμός Δίσεκτων Ετών']
    },
    features3: [
      { title: 'Μαθηματική Ακρίβεια Ημερολογίου', desc: 'Υπολογίζει με ακρίβεια δίσεκτα έτη και διαφορετικούς μήνες του Γρηγοριανού ημερολογίου.' },
      { title: 'Άμεσα Αποτελέσματα', desc: 'Δείτε ολόκληρη την ανάλυση της ηλικίας σας χωρίς καμία καθυστέρηση.' },
      { title: '100% Προστασία Προσωπικών Δεδομένων', desc: 'Οι υπολογισμοί γίνονται τοπικά στο πρόγραμμα περιήγησής σας χωρίς καμία αποθήκευση.' }
    ],
    howItWorks: {
      title: 'Πώς λειτουργεί — 4 Απλά Βήματα',
      subtitle: 'Μάθετε την ακριβή ηλικία σας σε ελάχιστα δευτερόλεπτα.',
      steps: [
        { num: '1', title: 'Εισάγετε Ημερομηνία Γέννησης', desc: 'Επιλέξτε ημέρα, μήνα και έτος.' },
        { num: '2', title: 'Επιλέξτε Ημερομηνία Σύγκρισης', desc: 'Προεπιλογή η σημερινή ημέρα ή οποιαδήποτε άλλη.' },
        { num: '3', title: 'Πατήστε Υπολογισμός', desc: 'Ο μηχανισμός μας υπολογίζει την ακριβή διαφορά χρόνου.' },
        { num: '4', title: 'Δείτε τα Στατιστικά σας', desc: 'Ανακαλύψτε έτη, μήνες, ημέρες και αντίστροφη μέτρηση γενεθλίων.' }
      ]
    },
    useCases: {
      title: 'Συνηθισμένες Χρήσεις',
      subtitle: 'Χρήσιμο εργαλείο για επίσημα έγγραφα, σχολεία και γενέθλια.',
      items: [
        { title: 'Διαβατήρια και Βίζες', desc: 'Επαληθεύστε τις ακριβείς ηλικιακές απαιτήσεις για κρατικά έγγραφα.' },
        { title: 'Εγγραφές σε Σχολεία & Αθλήματα', desc: 'Ελέγξτε τις επίσημες ηλικιακές κατηγορίες.' },
        { title: 'Αντίστροφη Μέτρηση Γενεθλίων', desc: 'Δείτε πόσες μέρες απομένουν και ποια ημέρα πέφτουν τα επόμενα γενέθλιά σας.' },
        { title: 'Ηλικία Μωρού', desc: 'Παρακολουθήστε την ηλικία του μωρού σε εβδομάδες και μήνες για παιδίατρο.' }
      ]
    },
    faqs: [
      { q: 'Αποθηκεύονται τα στοιχεία γέννησής μου;', a: 'Όχι. Όλοι οι υπολογισμοί πραγματοποιούνται 100% τοπικά στον υπολογιστή ή το κινητό σας.' }
    ]
  },

  he: {
    hero: {
      badge: '#1 מחשבון גיל מדויק',
      title: 'מחשבון גיל – חשב בדיוק בן כמה אתה בשנים, חודשים וימים',
      subtitle: 'חשב את הגיל הכרונולוגי המדויק שלך לפי תאריך לידה בשנים, חודשים, ימים, שעות ושניות בקלות, בדיוק מלא ובפרטיות מוחלטת.',
      featurePills: ['100% חינם וללא שמירת מידע', 'דיוק מרבי לשנייה', 'מכויל לשנים מעוברות']
    },
    features3: [
      { title: 'דיוק מתמטי מוחלט', desc: 'חישוב מדויק של שנים מעוברות ואורכי החודשים בלוח השנה הגרגוריאני.' },
      { title: 'תוצאות מיידיות', desc: 'צפה בכל נתוני החיים וספירה לאחור ליום ההולדת ללא צורך ברענון הדף.' },
      { title: '100% פרטיות בדפדפן', desc: 'כל החישובים מבוצעים במכשירך בלבד, ללא שליחת מידע לשרתים חיצוניים.' }
    ],
    howItWorks: {
      title: 'איך זה עובד — 4 שלבים פשוטים',
      subtitle: 'גלה את גילך המדויק תוך מספר שניות.',
      steps: [
        { num: '1', title: 'הזן תאריך לידה', desc: 'בחר יום, חודש ושנת לידה.' },
        { num: '2', title: 'בחר תאריך יעד', desc: 'ברירת המחדל היא היום, או בחר תאריך אחר.' },
        { num: '3', title: 'לחץ על חשב', desc: 'מנוע החישוב משווה את התאריכים בדיוק מושלם.' },
        { num: '4', title: 'צפה בתוצאות המפורטות', desc: 'ראה שנים, חודשים, ימים, שעות וספירה לאחור ליום ההולדת.' }
      ]
    },
    useCases: {
      title: 'שימושים נפוצים במחשבון גיל',
      subtitle: 'כלי אידיאלי למסמכים רשמיים, דרכונים, רישום לבתי ספר וימי הולדת.',
      items: [
        { title: 'בקשות לדרכון וויזה', desc: 'אימות דרישות גיל מדויקות למסמכים ממשלתיים.' },
        { title: 'רישום לבתי ספר ולחוגים', desc: 'בדיקת התאמה לפי תאריכי חתך רשמיים.' },
        { title: 'ספירה לאחור ליום ההולדת', desc: 'גלה כמה ימים נותרו ובאיזה יום בשבוע יחול יום ההולדת הבא.' },
        { title: 'מעקב גיל תינוקות', desc: 'מעקב אחר גיל התינוק בשבועות ובחודשים עבור טיפת חלב וחיסונים.' }
      ]
    },
    faqs: [
      { q: 'האם המידע שלי נשמר בשרת?', a: 'לא. כל החישובים מבוצעים באופן מקומי ופרטי ב-100% בתוך הדפדפן שלך.' }
    ]
  },

  uk: {
    hero: {
      badge: '#1 Точний Калькулятор Віку',
      title: 'Калькулятор Віку – Дізнайтеся Свій Точний Вік у Роках і Днях',
      subtitle: 'Розрахуйте свій точний хронологічний вік у роках, місяцях, днях, годинах і секундах за датою народження безкоштовно та конфіденційно.',
      featurePills: ['100% Безкоштовно та Приватно', 'Миттєва Точність', 'Враховано Високосні Роки']
    },
    features3: [
      { title: 'Календарна Точність', desc: 'Враховує високосні роки та різну кількість днів у кожному місяці.' },
      { title: 'Миттєвий Результат', desc: 'Повна статистика прожитого часу та зворотний відлік до дня народження.' },
      { title: '100% Конфіденційність', desc: 'Усі розрахунки відбуваються локально у вашому браузері без відправки на сервер.' }
    ],
    howItWorks: {
      title: 'Як це працює — 4 прості кроки',
      subtitle: 'Дізнайтеся свій точний вік за лічені секунди.',
      steps: [
        { num: '1', title: 'Введіть дату народження', desc: 'Оберіть день, місяць та рік народження.' },
        { num: '2', title: 'Оберіть дату порівняння', desc: 'За замовчуванням сьогоднішня дата або будь-яка інша.' },
        { num: '3', title: 'Натисніть Розрахувати', desc: 'Алгоритм точно вираховує різницю дат.' },
        { num: '4', title: 'Перегляньте результати', desc: 'Дізнайтеся точні роки, місяці, дні та години вашого життя.' }
      ]
    },
    useCases: {
      title: 'Де знадобиться калькулятор віку',
      subtitle: 'Зручний інструмент для оформлення документів, шкіл та планування свят.',
      items: [
        { title: 'Оформлення паспортів та віз', desc: 'Перевірте точний вік для державних анкет та посольств.' },
        { title: 'Зарахування до школи та секцій', desc: 'Звіртеся з офіційними віковими категоріями.' },
        { title: 'Зворотний відлік до дня народження', desc: 'Дізнайтеся, скільки днів залишилося та на який день тижня припадає свято.' },
        { title: 'Розвиток немовляти', desc: 'Відстежуйте вік дитини у тижнях та місяцях для медичних оглядів.' }
      ]
    },
    faqs: [
      { q: 'Чи зберігаються мої дані на сервері?', a: 'Ні. Усі обчислення виконуються на 100% у вашому браузері.' }
    ]
  },

  hu: {
    hero: {
      badge: '#1 Pontos Életkor Kalkulátor',
      title: 'Életkor Kalkulátor – Számolja Ki Pontos Életkorát Években és Napokban',
      subtitle: 'Számítsa ki pontos életkorát években, hónapokban, napokban, órákban és másodpercekben születési dátuma alapján gyorsan és biztonságosan.',
      featurePills: ['100% Ingyenes és Biztonságos', 'Másodperces Pontosság', 'Szökőévekkel Kalibrálva']
    },
    features3: [
      { title: 'Teljes Naptári Pontosság', desc: 'Pontosan figyelembe veszi a szökőéveket és a hónapok változó hosszát.' },
      { title: 'Azonnali Eredmények', desc: 'Teljes élettartam-statisztika és születésnapi visszaszámlálás azonnal.' },
      { title: '100% Helyi Adatvédelem', desc: 'Minden számítás közvetlenül az Ön böngészőjében történik, szervermentesen.' }
    ],
    howItWorks: {
      title: 'Hogyan működik — 4 egyszerű lépés',
      subtitle: 'Tudja meg pontos életkorát pillanatok alatt.',
      steps: [
        { num: '1', title: 'Adja meg a születési dátumot', desc: 'Válassza ki a napot, hónapot és évet.' },
        { num: '2', title: 'Válassza ki a célérték dátumát', desc: 'Alapértelmezésben a mai nap, vagy tetszőleges dátum.' },
        { num: '3', title: 'Kattintson a Számításra', desc: 'Rendszerünk pontosan kiszámítja az eltelt időt.' },
        { num: '4', title: 'Fedezze fel a statisztikákat', desc: 'Tekintse meg éveit, napjait és a következő születésnapi visszaszámlálót.' }
      ]
    },
    useCases: {
      title: 'Gyakori felhasználási területek',
      subtitle: 'Nélkülözhetetlen hivatalos űrlapokhoz, iskolai beiratkozáshoz és ünnepségekhez.',
      items: [
        { title: 'Útlevél és vízum igénylése', desc: 'Ellenőrizze a pontos korhatárokat hivatalos dokumentumokhoz.' },
        { title: 'Iskolai és sport beiratkozás', desc: 'Ellenőrizze a korcsoportokat a hivatalos határnapok alapján.' },
        { title: 'Születésnapi visszaszámláló', desc: 'Tudja meg pontosan, hány nap van hátra és milyen napra esik a születésnapja.' },
        { title: 'Csecsemőkor nyomon követése', desc: 'Kövesse nyomon a baba korát hetekben és hónapokban orvosi vizsgálatokhoz.' }
      ]
    },
    faqs: [
      { q: 'Tárolják a születési dátumomat?', a: 'Nem. Minden számítás 100%-ban helyben, az Ön böngészőjében történik.' }
    ]
  }
};

/**
 * Returns complete localized content for a language, falling back to English
 */
export function getPageContent(lang = 'en') {
  const content = PAGE_CONTENTS[lang] || PAGE_CONTENTS.en;
  return {
    hero: { ...PAGE_CONTENTS.en.hero, ...(content.hero || {}) },
    features3: content.features3 || PAGE_CONTENTS.en.features3,
    howItWorks: content.howItWorks || PAGE_CONTENTS.en.howItWorks,
    useCases: content.useCases || PAGE_CONTENTS.en.useCases,
    faqs: content.faqs || PAGE_CONTENTS.en.faqs
  };
}
