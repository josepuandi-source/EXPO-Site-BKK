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
  text: "Talk directly with Australian schools, the U&I team and people living in Australia, all in one afternoon.",
  /** icon: "globe" | "users" | "home" */
  items: [
    { icon: "globe", photo: "/images/why/consult-rep.webp", title: "Meet Australian schools in person", sub: "TAFEs and leading Australian institutions, all under one roof" },
    { icon: "users", photo: "/images/why/consult-team.webp", title: "1-on-1 with the U&I team", sub: "Experienced advisers to plan your study and visa" },
    { icon: "home", photo: "/images/why/crowd-talks.webp", title: "Real stories from Australia", sub: "Tips from U&I staff who actually live there" },
  ] as { icon: "globe" | "users" | "home"; photo: string; title: string; sub: string }[],
  /** Crowd shots from past U&I EXPOs, shown as a strip under the reasons. */
  photos: [
    { src: "/images/why/crowd-hall.webp", alt: "A packed U&I EXPO hall" },
    { src: "/images/why/crowd-tables.webp", alt: "Students consulting with schools at a U&I EXPO" },
    { src: "/images/why/consult-rows.webp", alt: "Rows of 1-on-1 consultations at a U&I EXPO" },
  ],
  topicsTitle: "Ask us about",
  topics: [
    "Work and Holiday: visa, short courses, jobs and housing",
    "Short courses & summer programs",
    "English for everyday life, business or degree study",
    "Skills-shortage careers for your future in Australia",
    "Bachelor's, Master's and PhD",
  ],
  promo: {
    title: "Register early for a chance to win a free flight!",
    note: "*Flight draw for pre-registered guests only, conditions apply.",
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
    { icon: "cap", text: "Course application, with no application or processing fees", free: true },
    { icon: "ielts", text: "IELTS / PTE English level mock test", free: true },
    { icon: "koala", text: "Australian souvenir for the first 29 guests!", free: true },
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
export const specialists = {
  title: "Free consultation with our specialists",
  subtitle: "Meet the U&I team who will look after you at the Bangkok EXPO.",
  items: [
    {
      name: "P'Aew",
      photo: "/images/specialists/aew.webp",
      branch: "Consultant, Bangkok office",
      points: ["Specialist in English-language study plans", "ILSC and Greystone alumna", "Check, be sure, then lodge your visa"],
    },
    {
      name: "P'Fern",
      photo: "/images/specialists/fern.webp",
      branch: "Consultant, Bangkok office",
      points: ["English study plans in Australia", "ILSC and Greenwich alumna", "Not sure how to find work or a place to live? Ask away!"],
    },
    {
      name: "P'Mookie",
      photo: "/images/specialists/mookie.webp",
      branch: "Counsellor, Bangkok office",
      points: ["Visa plans: Work & Holiday, work and visa extensions", "Degree study with scholarships of over 100%", "Summer courses in the school break, made easy"],
    },
    {
      name: "P'Blue",
      photo: "/images/specialists/blue.webp",
      branch: "Consultant, Chiang Mai office",
      points: ["Over 7 years of student counselling", "Study plans for Australia & New Zealand", "Full support from application to visa"],
    },
    {
      name: "P'Inez",
      photo: "/images/specialists/inez.webp",
      branch: "Melbourne office",
      points: ["Degree study plans", "Experienced with 485 visa applications", "RMIT alumna, a top 3 Melbourne university"],
    },
    {
      name: "P'Titi",
      photo: "/images/specialists/titi.webp",
      branch: "Brisbane office",
      points: ["Knows vocational and degree pathways", "Specialist in studying in Australia", "Free help planning your study and visa"],
    },
    {
      name: "P'Irene",
      photo: "/images/specialists/irene-full.webp",
      branch: "Brisbane office",
      points: ["Experienced in switching from Work and Holiday to a student visa", "Courses Work and Holiday visa holders can take", "Free advice and planning, no service fees at any step"],
    },
  ],
};

// ---------------------------------------------------------------------------
// School specials & scholarships — partner school posters in a moving carousel
// ---------------------------------------------------------------------------
export const schools = {
  title: "School specials & scholarships",
  subtitle: "Exclusive offers from our partner schools, only at the Bangkok EXPO. Tap a poster to see it in full.",
  specialistLabel: "Specialist",
  /** specialist: who to talk to about this school at the EXPO (matches a name in `specialists`) */
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
  ],
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
  subtitle: "Real reviews from students U&I Thailand has helped.",
  labels: { service: "Service", consultant: "Consultant", readMore: "Read more", source: "Review" },
  tabs: { reviews: "Student reviews", grants: "Visa grants", study: "Study experiences" },
  /** Visa grant posts from the U&I Thailand page, newest first. */
  grants: { alt: "Visa granted", images: ["/images/grants/grant-01.webp", "/images/grants/grant-02.webp", "/images/grants/grant-03.webp", "/images/grants/grant-04.webp", "/images/grants/grant-05.webp", "/images/grants/grant-07.webp", "/images/grants/grant-08.webp", "/images/grants/grant-09.webp", "/images/grants/grant-10.webp", "/images/grants/grant-11.webp", "/images/grants/grant-12.webp", "/images/grants/grant-13.webp", "/images/grants/grant-14.webp", "/images/grants/grant-15.webp"] },
  /** Students reviewing their schools. */
  study: { alt: "Student study experience review", images: ["/images/study/greenwich.webp", "/images/study/greenwich-2.webp", "/images/study/greenwich-3.webp", "/images/study/ilsc.webp", "/images/study/ilsc-2.webp", "/images/study/qat.webp", "/images/study/qat-2.webp", "/images/study/qat-3.webp", "/images/study/griffith.webp", "/images/study/kaplan.webp", "/images/study/langports.webp", "/images/study/ep.webp", "/images/study/amca.webp", "/images/study/mcca.webp", "/images/study/impact.webp", "/images/study/oreang.webp"] },
  /**
   * Student reviews from the U&I Global Australia Thailand Facebook page.
   * photo: card photo (cropped from the review graphic); review: the full graphic, opened by "Read more".
   * Quotes are kept in the student's own words, so they are not translated.
   */
  items: [
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
  ] as { name: string; photo: string; review: string; service: string; consultant: string; quote: string }[],
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
    { name: "Bangkok (Thailand)", phone: "081-116-5186", address: "Samyan Mitrtown Office Tower, Floor 24, Mitrtown Office, 944 Rama IV Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand" },
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
    /** Thai office lines, shown in the top bar and footer. */
    phones: [
      { number: "081-116-5186", area: "Bangkok" },
      { number: "099-921-5899", area: "Chiang Mai" },
    ],
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
  previous: "Previous",
  next: "Next",
};
