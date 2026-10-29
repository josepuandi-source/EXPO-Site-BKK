/**
 * ============================================================================
 *  SITE CONTENT — edit this file to update the expo website.
 *  Every piece of copy, link, date, price and image path on the page lives
 *  here. Components in /components only handle layout and styling.
 *
 *  Images: put files in /public and reference them from the root,
 *  e.g. "/images/carousel/new-photo.jpg".
 * ============================================================================
 */

// ---------------------------------------------------------------------------
// Registration forms (monday.com). Re-used by the hero buttons.
// ---------------------------------------------------------------------------
export const forms = {
  english: "https://forms.monday.com/forms/05fb8b2d7f7f06fc0e35a232e39dd4ac?r=apse2",
  thai: "https://forms.monday.com/forms/0f717eebee8ab8c10e1be3b17161beb9?r=apse2",
  korean: "https://forms.monday.com/forms/3f22c711a95070f96e333322d1906cce?r=apse2",
  portuguese: "https://forms.monday.com/forms/8b9b88f6c29f0ed3967c71803cb71431?r=apse2",
  spanish: "https://forms.monday.com/forms/65235b4ea1e09a093c26407b5b7d583f?r=apse2",
  mongolian: "https://forms.monday.com/forms/05fb8b2d7f7f06fc0e35a232e39dd4ac?r=apse2",
};

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
export const seo = {
  title: "Australia Study & Migration EXPO 2026 · Bangkok | U&I Global",
  description:
    "Join the U&I Global Australia Study & Migration EXPO in Bangkok on 28 November 2026 at Novotel Bangkok on Siam Square. Free 1-on-1 consultations with Australian school and university representatives and migration experts.",
};

// ---------------------------------------------------------------------------
// Header / navigation
// ---------------------------------------------------------------------------
export const brand = {
  logo: "/images/U&I-logo.png",
  logoAlt: "U&I Global Australia",
};

export const nav = {
  desktop: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Events", href: "#dates" },
  ],
  mobile: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Schedule", href: "#dates" },
    { label: "Register", href: "#register" },
  ],
  cta: { label: "Register for Free", href: "#register" },
};

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------
export const hero = {
  logo: { src: "/images/expo-logo/full.webp", alt: "Australia Study Migration Expo 2026" },
  /** City skyline icons orbiting the logo. `tint` = "gold" | "white". */
  cities: [
    { src: "/cities/10.png", tint: "gold" },
    { src: "/cities/9.png", tint: "white" },
    { src: "/cities/6.png", tint: "gold" },
    { src: "/cities/7.png", tint: "white" },
    { src: "/cities/2.png", tint: "gold" },
    { src: "/cities/8.png", tint: "white" },
    { src: "/cities/5.png", tint: "gold" },
    { src: "/cities/3.png", tint: "white" },
    { src: "/cities/1.png", tint: "gold" },
    { src: "/cities/11.png", tint: "white" },
    { src: "/cities/4.png", tint: "gold" },
    { src: "/cities/12.png", tint: "white" },
  ] as { src: string; tint: "gold" | "white" }[],
  eyebrow: "U&I Global Australia · Bangkok 2026",
  /** Event details shown under the EXPO logo, as on the Bangkok poster. */
  strap: "Study • Migration",
  details: {
    date: "28 November 2026",
    time: "1:00–5:00 PM",
    venue: "Novotel Bangkok on Siam Square",
    address: "392/44 Siam Square Soi 6, Pathum Wan, Bangkok 10330",
    mapUrl: "https://maps.app.goo.gl/fY4Vph3HsVw469k4A",
    mapEmbed: "https://maps.google.com/maps?q=Novotel+Bangkok+on+Siam+Square,+392%2F44+Siam+Square+Soi+6,+Bangkok+10330&z=16&output=embed",
    mapLabel: "Open in Google Maps",
  },
  /** City name under the EXPO logo. */
  city: "Bangkok",
  /** Trust badge in the top-right corner of the hero: seal (years) + two lines. */
  trust: ["Australia State Government Official Agent", "Since 1997 · 29 Years Experience & Trust"],
  trustSeal: { number: "29", label: "Years" },
  titleLead: "Your Pathway to Australia",
  titleHighlight: "Starts Here",
  intro:
    "Join us at the 2026 Australia Study & Migration Expo. Free 1-on-1 consultations with University, TAFE, and College representatives and migration experts.",
  cities_line: "Bangkok · 28 November 2026",
  primaryCta: { label: "Claim Your Free Ticket", href: forms.english },
  secondaryCta: { label: "Learn More", href: "#why-attend" },
  /** Language registration buttons under the hero. hoverText = "navy" | "teal". */
  /** Extra per-language register buttons under the hero (none on this single-language site). */
  languageButtons: [] as { label: string; href: string; hoverText: "navy" | "teal" }[],
};

// ---------------------------------------------------------------------------
// Event dates & recaps
// ---------------------------------------------------------------------------
export const dates = {
  title: "Event Dates & Locations",
  subtitle: "Find us in a city near you.",

  /** Dark recap cards shown above the event grid. Remove items to hide. */
  recaps: [
    {
      title: "Brisbane EXPO Recap",
      text: [
        "That's a wrap on the Brisbane EXPO!",
        "A big thank you to our attendees, schools, and partners who made the event a success.",
      ],
      photoAlt: "Brisbane Expo",
      photos: [
        "/images/brisbane-recap/bne-mix-01.jpg",
        "/images/brisbane-recap/bne-mix-02.jpg",
        "/images/brisbane-recap/bne-mix-03.jpg",
        "/images/brisbane-recap/bne-mix-04.jpg",
        "/images/brisbane-recap/bne-mix-05.jpg",
        "/images/brisbane-recap/bne-mix-06.jpg",
        "/images/brisbane-recap/bne-mix-07.jpg",
        "/images/brisbane-recap/bne-mix-08.jpg",
        "/images/brisbane-recap/bne-mix-09.jpg",
        "/images/brisbane-recap/bne-mix-10.jpg",
        "/images/brisbane-recap/bne-mix-11.jpg",
        "/images/brisbane-recap/bne-mix-12.jpg",
        "/images/brisbane-recap/bne-mix-13.jpg",
        "/images/brisbane-recap/bne-mix-14.jpg",
      ],
      /** Optional giveaway block (set to null to hide). */
      giveaway: null as null | {
        kicker: string;
        line: { before: string; win: string; middle: string; two: string; after: string };
        place: string;
        cta: { label: string; href: string };
        note: string;
      },
      /** Optional promo tiles (empty array to hide). */
      promos: [] as string[],
      nextStop: null as null | { label: string; value: string },
    },
    {
      title: "Melbourne EXPO Recap",
      text: [
        "That's a wrap on the Melbourne EXPO! A big thank you to our attendees, schools, and partners who made the event a success.",
      ],
      photoAlt: "Melbourne Expo",
      photos: [
        "/images/melbourne-recap/mel-mix-01.jpg",
        "/images/melbourne-recap/mel-mix-02.jpg",
        "/images/melbourne-recap/mel-mix-03.jpg",
        "/images/melbourne-recap/mel-mix-04.jpg",
        "/images/melbourne-recap/mel-mix-05.jpg",
        "/images/melbourne-recap/mel-mix-06.jpg",
        "/images/melbourne-recap/mel-mix-07.jpg",
        "/images/melbourne-recap/mel-mix-08.jpg",
        "/images/melbourne-recap/mel-mix-09.jpg",
        "/images/melbourne-recap/mel-mix-10.jpg",
        "/images/melbourne-recap/mel-mix-11.jpg",
        "/images/melbourne-recap/mel-mix-12.jpg",
        "/images/melbourne-recap/mel-mix-13.jpg",
        "/images/melbourne-recap/mel-mix-14.jpg",
      ],
      giveaway: null,
      promos: [],
      nextStop: null,
    },
  ],

  /**
   * Upcoming events, in date order. The first one is shown as the large featured card.
   * `when` (YYYY-MM-DD) drives the calendar badge; leave it out for "Coming soon".
   * `poster` is optional — when set, "View Poster" opens it over the page.
   * `past: true` greys an event out as completed (listed last, not clickable).
   */
  events: [
    { when: "2026-11-28", date: "28 November 2026", city: "BANGKOK", location: "Novotel Bangkok on Siam Square", poster: "/images/expo-poster-bangkok-specials.jpg" },
    { when: "2026-12-05", date: "5 December 2026", city: "DAVAO", location: "Davao, Philippines" },
    { when: "2026-12-17", date: "17 December 2026", city: "GOLD COAST", location: "Gold Coast" },
    { when: "2026-10-15", date: "15 October 2026", city: "BRISBANE", location: "Brisbane", past: true },
    { when: "2026-10-01", date: "1 October 2026", city: "MELBOURNE", location: "Melbourne", past: true },
  ] as { when?: string; date: string; city: string; location: string; poster?: string; past?: boolean }[],
};

// ---------------------------------------------------------------------------
// Why attend
// ---------------------------------------------------------------------------
export const whyAttend = {
  title: "Why Attend the Expo?",
  text: "Open the door to your future in Australia. Meet universities, TAFEs, language schools and vocational colleges, and get advice on study, visas and planning your path in Australia, all in one event.",
  /** icon: "users" | "shield" | "dollar" | "clipboard" */
  items: [
    { icon: "users", photo: "/images/why/consult-rep.webp", title: "1:1 consultations", sub: "Talk directly with school representatives" },
    { icon: "shield", photo: "/images/why/consult-team.webp", title: "Visa & migration advice", sub: "Free initial visa advice from our specialists" },
    { icon: "dollar", photo: "/images/why/crowd-tables.webp", title: "Scholarship opportunities", sub: "Find the right scholarship and special promotions" },
    { icon: "clipboard", photo: "/images/why/consult-rows.webp", title: "Initial eligibility check", sub: "Document checks and study planning" },
  ] as { icon: "users" | "shield" | "dollar" | "clipboard"; photo: string; title: string; sub: string }[],
  /** Crowd shots from past U&I EXPOs, shown as a strip under the reasons. */
  photos: [
    { src: "/images/why/crowd-hall.webp", alt: "A packed U&I EXPO hall" },
    { src: "/images/why/crowd-talks.webp", alt: "Students consulting with schools at a U&I EXPO" },
  ],
  topicsTitle: "Talk 1-on-1 with the U&I Global team, whatever you are interested in",
  topics: [
    "Work and Holiday: visa advice, short courses, finding work and a home",
    "Short courses and summer programs",
    "English for everyday life, business or degree study",
    "Skills-shortage careers for your future in Australia",
    "Bachelor's, Master's and PhD",
  ],
  promo: {
    title: "TAFEs and leading Australian institutions are all coming, with plenty to choose from!",
    text: "Special offers and great-value promotions, only at the EXPO!",
    cta: "Register free",
    tagline: "Planning to go to Australia in 2027? Don't miss this one.",
  },
};



// ---------------------------------------------------------------------------
// Pathways
// ---------------------------------------------------------------------------
export const pathways = {
  background: "/images/background/bg-1.png",
  title: "Find Your Pathway",
  subtitle: "Whether you're planning your move or already here, we have expert guidance tailored for you.",
  cards: [
    {
      variant: "primary",
      icon: "globe",
      photo: "/images/carousel/JIN06850.jpg",
      title: "Planning to Study in Australia?",
      sub: "For International Students (Offshore)",
      points: [
        "Course & university selection guidance",
        "Student visa application support",
        "Scholarship opportunities",
        "Pre-departure preparation",
      ],
      cta: { label: "Get Started", href: "#register" },
    },
    {
      variant: "navy",
      icon: "pin",
      photo: "/images/carousel/expo-10.jpg",
      title: "Already in Australia?",
      sub: "For Onshore Students",
      points: [
        "Visa extension & renewal advice",
        "Course transfer & upgrade options",
        "Permanent residency pathways",
        "Migration policy updates",
      ],
      cta: { label: "Get Started", href: "#register" },
    },
  ] as {
    variant: "primary" | "navy";
    icon: "globe" | "pin";
    photo: string;
    title: string;
    sub: string;
    points: string[];
    cta: { label: string; href: string };
  }[],
};

// ---------------------------------------------------------------------------
// Bangkok EXPO specials (from the Bangkok poster)
// ---------------------------------------------------------------------------
export const specials = {
  title: "Register early for exclusive expo-day benefits!",
  free: "FREE!",
  /** icon: file in /images/bkk/icon-<name>.webp. `free` adds the green "FREE!" mark. */
  items: [
    { icon: "visa", text: "Student visa fee scholarship of up to $2,050", free: false },
    { icon: "ticket", text: "20% off flights to Australia & New Zealand", free: false },
    { icon: "van", text: "Airport pick-up", free: true },
    { icon: "cap", text: "Course application, with no application or processing fees", free: false },
    { icon: "ielts", text: "IELTS / PTE English level mock test", free: true },
    { icon: "koala", text: "Australian souvenir for the first 29 guests!", free: false },
  ] as { icon: "cap" | "ielts" | "van" | "ticket" | "visa" | "koala"; text: string; free: boolean }[],
  notes: [
    "*Conditions as set by the company.",
    "*The first 29 guests to check in receive an Australian souvenir (celebrating 29 years of U&I Global).",
  ],
  cta: "Register free",
};

// ---------------------------------------------------------------------------
// Specialists — the U&I team at the Bangkok EXPO (cut-outs from their specialist cards)
// ---------------------------------------------------------------------------
// LINE Official Account for each branch — tapping a specialist card opens their branch's LINE to book.
const line = {
  bangkok: "https://tr.ee/zI4hPGPIe2",
  brisbane: "https://tr.ee/IwbR4QR6Cm",
  melbourne: "https://tr.ee/vR5bl8PitR",
};

export const specialists = {
  title: "Free consultation with our specialists",
  subtitle: "Meet the U&I team who will look after you at the Bangkok EXPO.",
  /** Shown on each card as the call to book through LINE. */
  bookLabel: "Book via LINE",
  /**
   * line: the branch LINE account the card opens.
   * background: optional photo of their city, shown soft and blurred behind the cut-out.
   */
  items: [
    {
      name: "P'Aew",
      photo: "/images/specialists/aew.webp",
      background: "/images/specialists/bg/bangkok.webp",
      line: line.bangkok,
      branch: "Consultant, Bangkok office",
      points: ["Specialist in English-language study plans", "ILSC and Greystone alumna", "Check, be sure, then lodge your visa"],
    },
    {
      name: "P'Fern",
      photo: "/images/specialists/fern.webp",
      background: "/images/specialists/bg/bangkok.webp",
      line: line.bangkok,
      branch: "Consultant, Bangkok office",
      points: ["English study plans in Australia", "ILSC and Greenwich alumna", "Not sure how to find work or a place to live? Ask away!"],
    },
    {
      name: "P'Mookie",
      photo: "/images/specialists/mookie.webp",
      background: "/images/specialists/bg/bangkok.webp",
      line: line.bangkok,
      branch: "Counsellor, Bangkok office",
      points: ["Visa plans: Work & Holiday, work and visa extensions", "Degree study with scholarships of over 100%", "Summer courses in the school break, made easy"],
    },
    {
      name: "P'Blue",
      photo: "/images/specialists/blue.webp",
      background: "/images/specialists/bg/chiangmai.webp",
      line: line.bangkok,
      branch: "Consultant, Chiang Mai office",
      points: ["Over 7 years of student counselling", "Study plans for Australia & New Zealand", "Full support from application to visa"],
    },
    {
      name: "P'Inez",
      photo: "/images/specialists/inez.webp",
      background: "/images/specialists/bg/melbourne.webp",
      line: line.melbourne,
      branch: "Melbourne office",
      points: ["Degree study plans", "Experienced with 485 visa applications", "RMIT alumna, a top 3 Melbourne university"],
    },
    {
      name: "P'Titi",
      photo: "/images/specialists/titi.webp",
      background: "/images/specialists/bg/goldcoast.webp",
      line: line.brisbane,
      branch: "Brisbane & Gold Coast office",
      points: ["Knows vocational and degree pathways", "Specialist in studying in Australia", "Free help planning your study and visa"],
    },
    {
      name: "P'Irene",
      photo: "/images/specialists/irene-full.webp",
      background: "/images/specialists/bg/brisbane.webp",
      line: line.brisbane,
      branch: "Brisbane & Gold Coast office",
      points: ["Experienced in switching from Work and Holiday to a student visa", "Courses Work and Holiday visa holders can take", "Free advice and planning, no service fees at any step"],
    },
  ] as { name: string; photo: string; line: string; branch: string; points: string[]; background?: string }[],
};

// ---------------------------------------------------------------------------
// School specials & scholarships — partner school posters in a moving carousel
// ---------------------------------------------------------------------------
export const schools = {
  title: "School specials & scholarships",
  /** Each line shows on its own line. */
  subtitle: ["Prepared especially for guests of the U&I Global EXPO Bangkok", "Tap a poster to see the full details"],
  specialistLabel: "Specialist",
  /**
   * specialist: who to talk to about this school at the EXPO (matches a name in `specialists`).
   * hideCaption: leave out the school/specialist line under that poster.
   */
  items: [
    { school: "Griffith University", specialist: "P'Aew", poster: "/images/schools/aew-griffith.webp" },
    { school: "Kaplan Business School", specialist: "P'Aew", poster: "/images/schools/aew-kaplan.webp" },
    { school: "Greenwich College", specialist: "P'Blue", poster: "/images/schools/blue-greenwich.webp" },
    { school: "Greystone College", specialist: "P'Blue", poster: "/images/schools/blue-greystone.webp" },
    { school: "ILSC Language Schools", specialist: "P'Blue", poster: "/images/schools/blue-ilsc.webp" },
    { school: "English Path (EP)", specialist: "P'Fern", poster: "/images/schools/fern-ep.webp" },
    { school: "Langports", specialist: "P'Fern", poster: "/images/schools/fern-langports.webp" },
    { school: "Alma Mater College Australia (AMCA)", specialist: "P'Mookie", poster: "/images/schools/mookie-amca.webp" },
    { school: "TAFE Queensland", specialist: "P'Mookie", poster: "/images/schools/mookie-tafeqld.webp" },
    { school: "ECA College & APIC", specialist: "P'Titi", poster: "/images/schools/titi-eca-apic.webp" },
    { school: "Southern Cross University", specialist: "P'Titi", poster: "/images/schools/titi-scu.webp" },
  ] as { school: string; specialist: string; poster: string; hideCaption?: boolean }[],
};

// ---------------------------------------------------------------------------
// Expo exclusive offer — its own section above the benefits (set to null to hide)
// ---------------------------------------------------------------------------
export const expoExclusive = {
  kicker: "Expo Exclusive",
  amount: "$2,500",
  label: "Visa Fee Rebate*",
  points: ["No CoE Fee*", "No Enrollment Fee*"],
  note: "*Terms and conditions apply.",
  cta: "Claim at the Expo",
} as null | { kicker: string; amount: string; label: string; points: string[]; note: string; cta: string };

// ---------------------------------------------------------------------------
// Benefits (navy band)
// ---------------------------------------------------------------------------
export const benefits = {
  title: "100% Guaranteed Lowest Tuition Fee",
  subtitle: "Six expo-day benefits that stack with every scholarship.",
  items: [
    { no: "01", tag: "FREE", title: "Enrollment Fee" },
    { no: "02", tag: "FREE", title: "Processing Fee" },
    { no: "03", tag: "FREE", title: "Migration Agent Consultation" },
    { no: "04", tag: "FREE", title: "PTE/IELTS Mock Test" },
    { no: "05", tag: "1:1", title: "Consultation with School" },
    { no: "06", tag: "UP TO $1,600", title: "Expo Special" },
  ],
};

// ---------------------------------------------------------------------------
// Videos (YouTube Shorts — paste the video ID from the URL)
// ---------------------------------------------------------------------------
export const videos = {
  title: "Watch Our Story",
  subtitle: "A closer look at our recent U&I Global EXPOs.",
  items: [
    { youtubeId: "-MD3NdgEmd0", label: "Brisbane", title: "U&I Global Expo: Brisbane" },
    { youtubeId: "hvsTGmumFzY", label: "Gold Coast", title: "U&I Global Expo: Gold Coast" },
    { youtubeId: "CKSN9_QDApY", label: "Melbourne", title: "U&I Global Expo: Melbourne" },
    { youtubeId: "UsbnLNu_RDI", label: "Bangkok", title: "U&I Global Expo: Bangkok" },
  ],
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------
export const about = {
  /** Wrap the highlighted part in **double asterisks**. */
  title: "About **U&I Global**",
  subtitle: "Australian study advice since 1997",
  /** Use **double asterisks** to bold-highlight a phrase. */
  paragraphs: [
    "For over 29 years U&I Global has helped students plan their study abroad, from choosing a course and institution to mapping out their future education pathway.",
    "With teams and networks in many countries, we give personal advice and connect students with quality education opportunities.",
    "**Step into our 30th year with U&I Global in 2027.**",
  ],
};

// ---------------------------------------------------------------------------
// Why partner
// ---------------------------------------------------------------------------
export const partner = {
  title: "Why do students and parents choose U&I Global Australia?",
  items: [
    { emoji: "🇦🇺", text: "Headquartered in Australia" },
    { emoji: "🏢", text: "A properly registered Australian company" },
    { emoji: "🎓", text: "An officially accredited education agent for universities, TAFEs and Education Queensland International (EQI) institutions" },
    { emoji: "⭐", text: "Almost 30 years, since 1997, looking after students from around the world coming to Australia" },
    { emoji: "💚", text: "We look after you from Thailand all the way to Australia" },
    { emoji: "🤝", text: "Free study consultations, with no processing fees" },
  ],
};


// ---------------------------------------------------------------------------
// Your move to Australia
// ---------------------------------------------------------------------------
export const move = {
  title: "More Than Study",
  subtitle: "We help you settle in Australia: U&I looks after you all the way through your journey.",
  /** icon: name of an icon in components/icons.tsx (see Move.tsx) */
  items: [
    { icon: "home", title: "Accommodation Support", text: "Help finding a place to live, from the U&I team in Australia." },
    { icon: "briefcase", title: "Job Search Support", text: "Where to look for work, plus our partner network and U&I alumni." },
    { icon: "device", title: "Arrival Assistance", text: "SIM cards, transport cards, opening a bank account and finding places near your home when you land." },
    { icon: "clipboard", title: "TFN / ABN Guidance", text: "Step-by-step help applying for your Tax File Number and Australian Business Number." },
    { icon: "globe", title: "Life in Australia Guidance", text: "Advice on everyday life and the essential services you will need in Australia." },
    { icon: "users", title: "Student Community & Events", text: "Events at U&I offices in Australia where Thai students meet, make friends and build connections." },
  ] as { icon: "home" | "briefcase" | "device" | "clipboard" | "globe" | "users"; title: string; text: string }[],
};


// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const testimonials = {
  title: "What Our Students Say",
  subtitle: "Real reviews from students U&I has helped.",
  labels: { service: "Service", consultant: "Consultant", course: "Course", school: "School", readMore: "Read more", source: "Review", showMore: "See more reviews", showLess: "Show fewer reviews", close: "Close" },
  tabs: { reviews: "Student reviews", grants: "Visa grants", study: "Study experiences" },
  /** Visa grant posts from the U&I Thailand page, newest first. */
  grants: { alt: "Visa granted", images: ["/images/grants/grant-01.webp", "/images/grants/grant-02.webp", "/images/grants/grant-03.webp", "/images/grants/grant-04.webp", "/images/grants/grant-05.webp", "/images/grants/grant-07.webp", "/images/grants/grant-08.webp", "/images/grants/grant-09.webp", "/images/grants/grant-10.webp", "/images/grants/grant-11.webp", "/images/grants/grant-12.webp", "/images/grants/grant-13.webp", "/images/grants/grant-14.webp", "/images/grants/grant-15.webp"] },
  /** Students reviewing their schools. */
  study: { alt: "Student study experience review", images: ["/images/study/greenwich.webp", "/images/study/greenwich-2.webp", "/images/study/greenwich-3.webp", "/images/study/ilsc.webp", "/images/study/ilsc-2.webp", "/images/study/qat.webp", "/images/study/qat-2.webp", "/images/study/qat-3.webp", "/images/study/griffith.webp", "/images/study/kaplan.webp", "/images/study/langports.webp", "/images/study/ep.webp", "/images/study/amca.webp", "/images/study/mcca.webp", "/images/study/impact.webp", "/images/study/oreang.webp"] },
  /**
   * Student reviews: from the EXPO review sheet and the U&I Global Australia Thailand Facebook page.
   * Quotes are kept in the student's own words, so they are not translated.
   */
  items: [
    {
      name: "Potea",
      photo: "/images/reviews/student-potea.webp",
      course: "Certificate IV in Kitchen Management, Diploma & Advanced Diploma of Hospitality Management",
      school: "TAFE QLD / SBTA & SELA",
      quote:
        "ทาง U&I พี่ๆให้บริการและคำแนะนำที่ดีมากและใจดีมาก โดยส่วนตัวแล้วปรึกษาข้อมูลกับทางพี่ที ที่มาดูแลในส่วนข้อมูลต่างๆ พี่ทีคอยให้แนะนำที่เหมาะสมและใส่ใจรายละเอียดต่างๆดีมากครับ ขอบคุณทางบริษัทและทางพี่ทีที่ใส่ใจนักเรียนดีมากครับ ไม่ผิดหวังเลยจริงๆครับ",
    },
    {
      name: "Saipan Duangkamon",
      photo: "/images/reviews/student-saipan-v3.webp",
      course: "General English",
      school: "QAT",
      quote:
        "เราเรียนภาษาอังกฤษที่สถาบัน QAT โดยสมัครผ่าน U&I Global เลยอยากมาแชร์ประสบการณ์จริง เผื่อใครกำลังตัดสินใจอยู่ค่ะ ส่วนตัวประทับใจ agent มาก เอเจ้นท์ที่ดูแลเราชื่อพี่ทีทีค่ะ ช่วยจัดการเอกสารเรียนให้ทั้งหมด มีอธิบายขั้นตอนชัดเจน ไม่มีค่าใช้จ่ายเพิ่มจากที่แจ้งไว้เลย 😊\n\nโรงเรียนสอนค่อนข้างสบายๆ ครูเป็นเจ้าของภาษา อธิบายเข้าใจง่าย ห้องเรียนไม่ใหญ่มาก เพื่อนในคลาสหลากหลาย ทำให้มีโอกาสพูดเยอะ โรงเรียนนี้ agent เป็นคนแนะนำ ซึ่งตรงกับเป้าหมายเรา ✅\n\nโดยรวมแนะนำสำหรับคนที่อยากเรียนภาษาแบบค่อยเป็นค่อยไป หรือถ้าใครถือ WAH แล้วอยากลองเรียนก่อนเปลี่ยนวีซ่านักเรียนแบบเราก็ได้ และต้องการ agent ที่ดูแลใกล้ชิดแนะนำเลยค่ะ 🤩",
    },
    {
      name: "BB",
      photo: "/images/reviews/student-bb.webp",
      course: "General English + IELTS Preparation",
      school: "ILSC",
      quote:
        "พี่ทีที ให้คำปรึกษาดีมาก☺️ มีตัวเลือกโรงเรียนให้เยอะมากค่ะ เอกสารก็เตรียมง่ายไม่วุ่นวายเลยค่ะ ไม่เครียดเลยเพราะว่าพี่เค้าจัดการให้หมด เราแค่มีหน้าที่เตรียมเอกสารและเลือกโรงเรียนที่เราอยากจะเรียน แล้วผลวีซ่าออกไวมากมากๆ🎉✨ ไม่มีการเรียกเอกสารเพิ่มเติมเลยค่ะ วีซ่าออกหลังจากยื่นขอแค่ 10 นาที ขอบคุณพี่ทีมากๆเลยค่ะ🙏💖✨",
    },
    {
      name: "GG",
      photo: "/images/reviews/student-gg.webp",
      course: "Diploma of Health Science (Nursing), Master of Nursing",
      school: "QUT",
      quote:
        "เลือกต่อวีซ่ากับ U&I ไม่ผิดหวัง วีซ่าผ่านหลังตรวจสุขภาพเสร็จ ต้องยกให้พี่ทีเลย ขอบคุณนะคะ แนะนำทุกคนให้ติดตามกิจกรรมตามเพจ บางทีมีส่วนลดวีซ่าอีกด้วย ดีมากก🥹",
    },
    {
      name: "Fahsai",
      photo: "/images/reviews/student-fahsai-v2.webp",
      course: "Master of Digital Communication",
      school: "QUT",
      quote:
        "ชอบบริการของ U&I ตรงที่รับเรื่องไวค่ะ พี่เอเจนท์บริการดีมากกๆ ส่วนตัวเจอขั้นตอนลำบากนิดนึง แต่ได้พี่ๆช่วยตามเรื่องให้ค่อนข้างเร็วเลยค่ะ ของเราเป็นพี่เอเจนท์ชื่อพี่ทีค่ะ น่ารักมากๆ 👍🏻",
    },
    {
      name: "Kelly",
      photo: "/images/reviews/student-kelly.webp",
      course: "Bachelor of Psychological Science",
      school: "Griffith University",
      quote:
        "ขอบคุณพี่ๆที่ช่วยดำเนินการครับ เพื่อน ๆ ในคลาสมีหลายสัญชาติ ตอนแรกคิดว่าจะมีแต่นักเรียนต่างชาติ แต่จริง ๆ แล้วมีนักเรียนออสเตรเลียเยอะ ตอนแลกเปลี่ยนไอเดียสนุก และทำงานกลุ่มก็ง่ายขึ้น รู้สึกคิดถูกที่เรียนที่ต่างประเทศ เพราะชื่อเสียงของมหาวิทยาลัย คิดว่าจะเป็นผลดีในอนาคตครับ",
    },
    {
      name: "Ginny",
      photo: "/images/reviews/student-ginny.webp",
      course: "General English",
      school: "Greenwich College",
      quote:
        "Super grateful to U&I Global Brisbane, my visa just got approved! Big thanks to P'Tee for helping me through the whole process. She was so friendly, patient, and always there when I had questions. Made everything way less stressful. Really appreciate all the support from the team too. Highly recommend them if you're sorting out your visa!",
    },
    {
      name: "Kamonrat Boonchuen",
      photo: "/images/reviews/student-kamonrat.webp",
      course: "Master of Accounting",
      school: "Kaplan Business School",
      quote:
        "A huge thank you to N'Mookie and the U&I team! 💖 Mookie was super detailed and supportive with all the documents, making everything so easy for me. We submitted the application yesterday, and it got auto-granted today! 🎉 I'm so happy I chose this team — friendly, professional, and truly amazing at what they do. Highly recommended!",
    },
    {
      name: "Sunkiss",
      photo: "/images/reviews/student-sunkiss.webp",
      course: "General English, Advanced Diploma in Civil Construction and Design",
      school: "IH-ALS",
      quote: "ขอบคุณ U&I ที่แนะนำและช่วยเหลืออย่างดีในความฝัน เข้าสู่การเรียน ออสเตรเลีย",
    },
    {
      name: "Pear",
      photo: "/images/reviews/student-pear.webp",
      review: "/images/reviews/review-pear.webp",
      course: "General English",
      school: "Impact English College, Melbourne",
      quote:
        "เป็นการตัดสินใจที่ถูกมากๆๆๆที่ไปเรียนค่ะ ได้เพื่อนใหม่เยอะมากๆๆ คลาสเรียนดี อาจารย์ดี เพื่อนดี ไปเรียนเหมือนไปเที่ยว เลิกเรียนไปกับเพื่อนๆ เสาร์อาทิตย์ก็ได้ไปเที่ยวด้วย คิดว่าใช้เวลาได้คุ้มมากๆเลยค่ะ",
    },
    {
      name: "Beam",
      photo: "/images/reviews/student-beam.webp",
      review: "/images/reviews/review-beam.webp",
      course: "General English",
      school: "Impact English College, Melbourne",
      quote:
        "พอรู้สึกว่าเรียนหนึ่งเดือนมันน้อยไปเลยค่ะ อยากกลับมาเรียนต่ออีก😅 ครูก็ใจดีค่ะ แต่พอเห็นเพื่อนๆทุกคนพูดได้อ่านได้หนูก็เขินๆที่ยังอ่านไม่ออก เพื่อนๆก็พยายามช่วย เดี๋ยวเรียนไปสักพักคงจะดีขึ้นค่ะ จบคราวเมื่อวานเค้าก็เรียกคุยบอกหนูไม่ต้องเครียดเพราะพึ่งมา แต่ก็เครียดอยู่ดี555 อาจจะเป็นเพราะว่าไม่ได้เรียนนานแล้ว เหมือนมาเริ่มจูนกับตัวเองใหม่🤣🤣",
    },
    {
      name: "Sand",
      photo: "/images/reviews/student-sand.webp",
      review: "/images/reviews/review-sand.webp",
      course: "Bachelor of Social Science",
      school: "The University of Queensland",
      quote:
        "แซนว่า UQ เป็นมหาลัยที่เหมาะสมกับชื่อเสียง ตัวสถานที่และ facility ดีมาก ส่วนตัวชอบระบบการเรียนและอาจารย์ที่สอนมากกว่าที่ไทย ตัวเมืองเองก็ดี ความปลอดภัยประมาณ 8/10 อาหารอร่อยแต่แพง คำว่าแพงจะถูกใช้บ่อยเวลามาที่นี่ คนส่วนใหญ่เน้นออกกำลังกายตอนเช้า แล้วเที่ยวตอนเย็น ภาพรวมเป็นเมืองที่น่ามาเรียน แนะนำให้มาลองครับ😁",
    },
    {
      name: "นิกกี้",
      photo: "/images/reviews/student-7-v2.webp",
      review: "/images/reviews/review-7.webp",
      service: "Visa extension",
      consultant: "P'Ploy & P'Greenie",
      quote:
        "ขอบคุณพี่พลอย กับ พี่กรีนนี่ ที่ดูแลการต่อวีซ่าครั้งนี้ค่ะ คิดว่าอาจจะไม่ผ่าน เพราะโดนขอเอกสารเพิ่ม เครียดมาก แต่ผลออกมาผ่าน โล่งใจมากค่ะ ขอบคุณพี่พลอยที่บอกให้สู้ก่อน อย่าพึ่งยอมแพ้ แล้วก็คอยช่วยตามเอกสาร แล้วก็ดูแลนิกมาตลอด ขอบคุณมากค่ะ",
    },
    {
      name: "U&I Student",
      photo: "/images/reviews/student-8.webp",
      review: "/images/reviews/review-8.webp",
      service: "Student visa",
      consultant: "P'Ploy",
      quote:
        "พี่พลอยดูแลดีมากก เอาใจใส่ ตอบเร็ว ตอบทุกคำถาม คอยให้คำปรึกษาปัญหาต่างๆและหาวิธีที่ทำให้วีซ่ามีเปอร์เซ็นต์ผ่านสูง ยื่น 1 สัปดาห์ granted แล้วค่า ดีใจมากๆ รู้สึกดีใจมากๆค่ะที่ตัดสินใจมาทำกับพี่พลอย ❤️",
    },
    {
      name: "Sarocha Wansuk",
      photo: "/images/reviews/student-9.webp",
      review: "/images/reviews/review-9.webp",
      service: "Visa change",
      consultant: "P'Ploy",
      quote:
        "Today I met P'Ploy. She is nice and very kind to me, she gave me information about changing my visa. Before, I was worried, but now she has made me feel not nervous anymore 🥰",
    },
    {
      name: "Few",
      photo: "/images/reviews/student-10.webp",
      review: "/images/reviews/review-10.webp",
      service: "Visa application",
      consultant: "P'Ploy",
      quote:
        "ขอบคุณพี่พลอยมากๆค่ะ ที่ดูแลช่วยเหลือเรื่องเอกสารต่างๆและให้คำปรึกษาที่ดีมากๆ ตอนแรกกังวลกลัวว่าจะไม่ผ่าน แต่การเตรียมตัวและเอกสารของพี่พลอยชัดเจนและครบถ้วนเลย หลังจากส่งเอกสารให้สถานทูตแล้วไปตรวจสุขภาพวีซ่าก็แกรนท์เที่ยงคืนนั้นเลยค่ะ 🥇",
    },
    {
      name: "Puyfhay Maneekarn",
      quote:
        "ประทับใจ U&I มากค่ะ โดยเฉพาะคุณมุก ได้รับคำปรึกษาที่ละเอียดชัดเจนตรงไปตรงมา ช่วยเหลือทุกด้านที่กังวลเลย ทำให้วีซ่าเราผ่านแบบ auto granted แนะนำต่ออีกแน่นอนค่าา🫶🏼",
    },
    {
      name: "Nareedon Inkaew",
      quote:
        "ทีมนี้ให้คำแนะนำดีมากๆ ล้านตัวค่ะ ไม่ทิ้ง ไม่เท ไม่หาย ไม่เข้าใจตรงไหนให้คำปรึกษาดีมากค่ะ พูดเพราะ เหมือนคนในครอบครัว ขอแค่เปิดใจคุยกับทีม มีอะไรให้พูดให้บอกตรงๆนะคะ ขอบคุณทีมงานทุกๆคนนะคะ เลิฟฟ🫶🏻💖",
    },
    {
      name: "Bobbie",
      quote:
        "พี่มุกดูแลดีมากกก ให้คำแนะนำเรื่องการเตรียมเอกสารต่างๆ ได้ดีและละเอียดมากค่ะ ประทับใจมาก ตอนแรกแอบกังวลว่าวีซ่าจะผ่านมั้ย สรุปได้ auto granted ต้องขอบคุณพี่มุกมากๆเลยนะคะ🫶🏻💕\n\nปล. ใครกำลังหา agency ไปเรียนออส แนะนำ U&I เลยค่า แล้วจะไม่ผิดหวัง😍",
    },
    {
      name: "Saisuda Pamaungmoon",
      quote:
        "ขอบคุณพี่อิ๋วและทีมงานเอเจ้นซี่ทุกคนมากนะคะ ที่คอยดูแลและให้คำแนะนำตั้งแต่การเลือกเมือง การเตรียมเอกสาร ไปจนถึงการยื่นวีซ่า รวมถึงตอบทุกข้อสงสัยและให้คำปรึกษาในทุกขั้นตอน จนวันนี้วีซ่าผ่านเรียบร้อยแล้ว 😊\n\nประทับใจในการดูแลและความใส่ใจของทีมงานมากค่ะ แนะนำเลยสำหรับใครที่กำลังมองหาเอเจ้นซี่ดี ๆ ขอบคุณอีกครั้งนะคะ 🙏",
    },
    {
      name: "Win",
      course: "English program + Master of Professional Engineering",
      school: "Monash College + Monash University",
      quote:
        "บรรยากาศดีมากครับ ทั้งแคมปัส Caulfield และ Clayton เลย Australia เค้าทำอะไรๆ มักจะเซ็ทเป็นระบบไว้หมด เว็บ/Moodle/ไดร์ฟ ที่ใช้ในการเรียน มีฟังก์ชั่นที่ต้องใช้ค่อนข้างเยอะ พยายามเรียนรู้และจดจำอยู่ครับ ตื่นเต้น แล้วก็เกร็งๆ นิดหน่อยครับ",
    },
    {
      name: "Dung",
      course: "English program + Master of Professional Engineering",
      school: "Curtin College + Curtin University",
      quote: "ขอบคุณพี่มุกมากๆนะคับ ถ้าไม่มีพี่มุกผมน่าจะตื้อไปหมดเลย😂",
    },
    {
      name: "Mind",
      course: "Cert IV + Diploma of Hospitality Management",
      school: "QAT, Brisbane",
      quote:
        "ขอบคุณพี่ไอรีนที่ช่วยดูแลเรื่องวีซ่า เพราะกำลังจะเปลี่ยน Work and Holiday ปีที่ 3 เป็นนักเรียน เลยค่อนข้างกังวล แต่ก็วีซ่าผ่านแล้วว ส่วนโรงเรียน เริ่มเรียนแล้วค่ะ เรียนแบบเข้มข้นจริงๆ ได้เข้าครัวแบบปฏิบัติจริงเลย",
    },
    {
      name: "Meen",
      course: "Barista (2 weeks)",
      school: "Lexis, Brisbane",
      quote: "เรียนสนุกดีค่ะ ได้เพื่อนใหม่ และได้ฝึกทำกาแฟเยอะกว่าที่คิดไว้เยอะเลย",
    },
  ] as {
    name: string;
    /** Card photo; without one the card shows the student's initial. */
    photo?: string;
    /** Full review graphic from the Facebook page, shown in the pop-up instead of the photo. */
    review?: string;
    course?: string;
    school?: string;
    service?: string;
    consultant?: string;
    quote: string;
  }[],
};

// ---------------------------------------------------------------------------
// Infinite photo strip
// ---------------------------------------------------------------------------
export const photoStrip = {
  /** Seconds for one full loop. */
  durationSeconds: 30,
  photos: [
    { src: "/images/carousel/expo-01.JPG", alt: "U&I Expo event photo" },
    { src: "/images/carousel/expo-02.jpg", alt: "U&I Expo attendees" },
    { src: "/images/carousel/expo-03.jpg", alt: "U&I Expo consultation" },
    { src: "/images/carousel/expo-05.jpg", alt: "U&I Expo booth" },
    { src: "/images/carousel/expo-07-upright.jpeg", alt: "U&I Expo session" },
    { src: "/images/carousel/expo-08-upright.jpeg", alt: "U&I Expo gathering" },
    { src: "/images/carousel/expo-09-upright.jpeg", alt: "U&I Expo networking" },
    { src: "/images/carousel/expo-10.jpg", alt: "U&I Expo presentation" },
    { src: "/images/carousel/expo-11.jpg", alt: "U&I Expo highlights" },
    { src: "/images/carousel/1457079309490.jpeg", alt: "U&I Education event" },
    { src: "/images/carousel/1457079310341.jpeg", alt: "U&I Education seminar" },
    { src: "/images/carousel/20181116_143108.jpg", alt: "U&I Expo 2018 event" },
    { src: "/images/carousel/20181116_144716.jpg", alt: "U&I Expo 2018 attendees" },
    { src: "/images/carousel/IMG_9924.JPG", alt: "U&I Expo group photo" },
    { src: "/images/carousel/IMG_9951.JPG", alt: "U&I Expo team photo" },
    { src: "/images/carousel/JIN06850.jpg", alt: "U&I Expo venue" },
    { src: "/images/carousel/JIN06877-향상됨-노이즈 감소.jpg", alt: "U&I Expo moment" },
    { src: "/images/carousel/JIN06883.jpg", alt: "U&I Expo interaction" },
    { src: "/images/carousel/JIN06887-향상됨-노이즈 감소.jpg", alt: "U&I Expo engagement" },
    { src: "/images/carousel/KakaoTalk_20180814_165410770.jpg", alt: "U&I Education consultation" },
    { src: "/images/carousel/KakaoTalk_20180814_165448330.jpg", alt: "U&I Education meeting" },
    { src: "/images/carousel/KakaoTalk_20190502_143009700.jpg", alt: "U&I Expo 2019 event" },
    { src: "/images/carousel/KakaoTalk_20190502_143019982.jpg", alt: "U&I Expo 2019 session" },
    { src: "/images/carousel/KakaoTalk_20190502_143025182.jpg", alt: "U&I Expo 2019 attendees" },
    { src: "/images/carousel/KakaoTalk_20191003_181401135.jpg", alt: "U&I Education gathering" },
    { src: "/images/carousel/KakaoTalk_Moim_7NdO2E6sBpqeHWx3pNfn7avhAhxfQ5.jpg", alt: "U&I team moment" },
  ],
};

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------
export const finalCta = {
  title: "Secure Your Free Spot",
  subtitle: "Register in seconds. No cost, no obligation.",
  cta: { label: "Register for Free", href: "#register" },
  /** The monday.com form shown inline; filled in per site in content/i18n.ts. */
  form: { embed: "", url: "", title: "EXPO registration form", fallback: "Form not loading? Open it in a new tab" },
};

// ---------------------------------------------------------------------------
// Offices — omit `phone` / `email` to hide them.
// ---------------------------------------------------------------------------
export const offices = {
  title: "Our Offices",
  subtitle: "Get in touch with the U&I Global team in your region.",
  items: [
    { name: "Bangkok (Thailand)", phones: [{ number: "+66 81-116-5186", area: "Bangkok" }, { number: "+66 99-921-5899", area: "Chiang Mai" }], email: "information@uandiedu.com", address: "Samyan Mitrtown Office Tower, Floor 24, Mitrtown Office, 944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand" },
    { name: "Brisbane (Head Office)", phone: "+61 7 3270 7999", email: "information@uandiedu.com", address: "Level 3, 110 Mary St., Brisbane QLD 4000, Australia" },
    { name: "Melbourne", phone: "+61 3 9639 6148", email: "information@uandiedu.com", address: "Suite 202, Level 2, 517 Flinders Lane, Melbourne VIC 3000, Australia" },
    { name: "Gold Coast", phone: "+61 421 000 060", email: "information@uandiedu.com", address: "Level 1, Southport Central Commercial Tower 2, 2106/5 Lawson St., Southport QLD 4215, Australia" },
    { name: "Korea", phone: "+82 10 4008 5126", email: "information@uandiedu.com", cities: ["Seoul", "Busan"] },
    { name: "Philippines", email: "information@uandiedu.com", cities: ["Davao", "Cebu", "Iloilo", "Manila"] },
    { name: "Ulaanbaatar (Mongolia)", email: "information@uandiedu.com" },
  ] as {
    name: string;
    phone?: string;
    /** Several numbers, each labelled with its city. */
    phones?: { number: string; area: string }[];
    email?: string;
    address?: string;
    /** For a country card: the cities with a U&I office, shown in place of an address. */
    cities?: string[];
  }[],
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const footer = {
  tagline: "Your trusted partner for Australian education & migration.",
  trust: "Trusted by more than 30,000 students worldwide",
  links: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Schedule", href: "#dates" },
    { label: "Register", href: "#register" },
  ],
  contact: {
    email: "information@uandiedu.com",
    /** Thai office lines, shown in the top bar and footer. */
    phones: [
      { number: "+66 81-116-5186", area: "Bangkok" },
      { number: "+66 99-921-5899", area: "Chiang Mai" },
    ],
    /** Bangkok office address, shown in the footer. */
    address: "Samyan Mitrtown Office Tower, Floor 24, Mitrtown Office, 944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand",
  },
  copyright: "© 2026 U&I Global. All rights reserved.",
  privacyHref: "#",
};

/** "+61 7 3270 7999" -> "tel:+61732707999" */
export const tel = (p: string) => "tel:" + p.replace(/[^+\d]/g, "");

// ---------------------------------------------------------------------------
// Sister sites — flag links in the top bar to the other EXPO 2026 websites
// ---------------------------------------------------------------------------
export const sisterSites = [
  { flag: "au", label: "English", title: "EXPO 2026 main website (English)", href: "https://expo26-site-2.vercel.app", lang: "en" },
  { flag: "ph", label: "Davao", title: "EXPO 2026 Davao website", href: "https://expo26-site-davao.vercel.app", lang: "en" },
] as { flag: "th" | "ph" | "au"; label: string; title: string; href: string; lang: string }[];

// ---------------------------------------------------------------------------
// Small interface labels used across components
// ---------------------------------------------------------------------------
export const ui = {
  openMenu: "Open menu",
  closeMenu: "Close menu",
  language: "Language",
  comingSoon: "Coming soon",
  completed: "Completed",
  benefitNo: "Benefit Nº",
  viewPoster: "View Poster",
  posterAlt: "Expo Poster",
  promoAlt: "Upcoming EXPO promo",
  playVideo: "Play video:",
  quickLinks: "Quick Links",
  contact: "Contact",
  privacy: "Privacy Policy",
  backToTop: "Back to top",
  back: "Back",
  previous: "Previous",
  next: "Next",
};
