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
  text: "Take the next step towards your future in Australia. Meet representatives from Australian universities, TAFEs, colleges, and English language schools. Plus free migration counselling.",
  /** icon: "users" | "shield" | "dollar" | "clipboard" */
  items: [
    { icon: "users", title: "1-on-1 Counselling", sub: "with School Representatives" },
    { icon: "shield", title: "Free Migration", sub: "Counselling" },
    { icon: "dollar", title: "Scholarship", sub: "Opportunities" },
    { icon: "clipboard", title: "On-the-Spot", sub: "Assessments" },
  ] as { icon: "users" | "shield" | "dollar" | "clipboard"; title: string; sub: string }[],
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
    { icon: "cap", text: "Course application", free: true },
    { icon: "ielts", text: "IELTS/PTE mock test", free: true },
    { icon: "van", text: "Airport pick-up", free: false },
    { icon: "ticket", text: "Flight to Australia for Work & Holiday", free: false },
    { icon: "visa", text: "Student visa fee support", free: false },
    { icon: "koala", text: "Australian souvenir for the first 29 guests*", free: true },
  ] as { icon: "cap" | "ielts" | "van" | "ticket" | "visa" | "koala"; text: string; free: boolean }[],
  notes: [
    "*Conditions as set by the company.",
    "*The first 29 guests to check in receive an Australian souvenir (celebrating 29 years of U&I Global).",
  ],
  cta: "Register free",
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
  subtitle: "Trusted guidance since 1997",
  /** Use **double asterisks** to bold-highlight a phrase. */
  paragraphs: [
    "Since 1997, U&I Global has helped students pursue international education and achieve their study abroad goals. As we approach our **30th Anniversary in 2027**, we continue to provide trusted guidance and personalized support throughout every step of the student journey.",
    "As a **100% wholly owned and operated** organization, our teams across multiple countries work together to help students choose the right course, institution, and pathway for their future.",
    "Through our global network, U&I Global continues to connect students with quality Australian education opportunities.",
  ],
};

// ---------------------------------------------------------------------------
// Why partner
// ---------------------------------------------------------------------------
export const partner = {
  title: "Why Partner with U&I Global",
  subtitle: "Three decades of accountability. Five credentials every family, institution, and government partner can verify.",
  flagship: {
    kicker: "Nº 01 · Flagship Credential",
    titleLines: ["An Australian", "Government–Registered"],
    titleHighlight: "Company.",
    text: "U&I Global is a wholly-registered Australian corporation. Not a franchise, not a representative office. That registration backs every scholarship, visa filing, and enrollment we handle.",
    seal: { top: "Registered", year: "1997", bottom: "Established", foot: "Australia · Wholly-Owned" },
  },
  /** icon: "shield" | "building" | "academic" | "badge" */
  items: [
    { no: "02", icon: "shield", title: "3 Decades of Trust", text: "Since 1997, guiding students across seven markets worldwide." },
    { no: "03", icon: "building", title: "100% Fully-Owned", text: "Wholly-owned offices in every market we operate. No local licensees." },
    { no: "04", icon: "academic", title: "Australian Education Specialist", text: "Focused exclusively on Australian universities, TAFEs and pathway providers." },
    { no: "05", icon: "badge", title: "Strict Quality Assurance", text: "Documented QA review on every application. No shortcuts, no surprises." },
  ] as { no: string; icon: "shield" | "building" | "academic" | "badge"; title: string; text: string }[],
};

// ---------------------------------------------------------------------------
// Your move to Australia
// ---------------------------------------------------------------------------
export const move = {
  title: "Your Move to Australia",
  subtitle: "Once you're enrolled, we stay with you, from the day you land to the week you settle in.",
  phase1: {
    label: "Phase 01",
    title: "When You Arrive",
    text: "Landing in a new country is the hardest part. We make sure the first 48 hours are taken care of.",
    /** iconBg: Tailwind background class for the icon tile */
    items: [
      { icon: "/images/airplane.png", iconBg: "bg-primary-100", title: "Airport Pick-up", text: "Greeted on arrival and driven safely to your accommodation." },
      { icon: "/images/house.png", iconBg: "bg-accent-100", title: "Homestay", text: "Trusted host families. A soft landing while you settle in." },
      { icon: "/images/usim.png", iconBg: "bg-navy-100", title: "Arrival Services", text: "SIM cards, transit passes, orientation. The essentials, sorted." },
    ],
  },
  phase2: {
    label: "Phase 02",
    title: "Getting Settled",
    text: "The paperwork that unlocks work, banking, and everyday life in Australia. Handled with you, step by step.",
    items: [
      { icon: "/images/money.png", iconBg: "bg-accent-500/20", title: "TFN", text: "Tax File Number. Required before you start working or open a bank account." },
      { icon: "/images/money.png", iconBg: "bg-primary-500/25", title: "ABN", text: "Australian Business Number, for freelancing, contracting, or starting a side business." },
      { icon: "/images/card.png", iconBg: "bg-white/15", title: "ID Card / CRN", text: "Customer Reference Number. Your gateway to Medicare and government services." },
    ],
  },
};

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------
export const testimonials = {
  title: "What Our Students Say",
  subtitle: "Real stories from students who achieved their Australian dream.",
  items: [
    {
      quote: "U&I Global made my dream of studying in Queensland a reality. Their team guided me through every step of the process, from choosing the right university to settling in.",
      initials: "PS",
      name: "Priya Sharma",
      role: "International Student, UQ",
    },
    {
      quote: "The support I received from application to enrolment was exceptional and truly personalised. I always felt like they genuinely cared about my success.",
      initials: "MC",
      name: "Marco Chen",
      role: "Graduate Student, Griffith",
    },
    {
      quote: "I couldn't have navigated the visa process and university selection without their expert guidance. They made what felt impossible feel completely manageable.",
      initials: "AJ",
      name: "Amara Johnson",
      role: "Undergraduate, QUT",
    },
  ],
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
    { name: "Bangkok (Thailand)", phone: "+66 81 116 5186", address: "Samyan Mitrtown Office Tower, Floor 24, Mitrtown Office, 944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand" },
    { name: "Brisbane (Head Office)", phone: "+61 7 3270 7999", email: "information@uandiedu.com", address: "Level 3, 110 Mary St., Brisbane QLD 4000, Australia" },
    { name: "Melbourne", phone: "+61 3 9639 6148", address: "Suite 202, Level 2, 517 Flinders Lane, Melbourne VIC 3000, Australia" },
    { name: "Gold Coast", phone: "+61 421 000 060", address: "Level 1, Southport Central Commercial Tower 2, 2106/5 Lawson St., Southport QLD 4215, Australia" },
    { name: "Seoul (Korea)", phone: "+82 10 4008 5126", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Busan (Korea)", phone: "+82 10 4008 5126", address: "Level 9, 694 Jungang-daero, Busanjin-gu, Busan, Korea, 47216" },
    { name: "Davao (Philippines)", address: "2nd Floor, Lucita Building, P. Sobrecarey St corner Lapu-Lapu St, Davao City, 8000" },
    { name: "Cebu (Philippines)", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Iloilo (Philippines)", address: "Digitally integrated operational office managed by U&I staff" },
    { name: "Manila (Philippines)", address: "Digitally integrated operational office managed by U&I staff" },
  ] as { name: string; phone?: string; email?: string; address: string }[],
};

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
export const footer = {
  tagline: "Your trusted partner for Australian education & migration.",
  trust: "Trusted by 5,000+ students worldwide",
  links: [
    { label: "Why Attend", href: "#why-attend" },
    { label: "Schedule", href: "#dates" },
    { label: "Register", href: "#register" },
  ],
  contact: {
    email: "information@uandiedu.com",
    phone: "+61 7 3270 7999",
    address: "Level 3, 110 Mary St., Brisbane QLD 4000, Australia",
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
};
