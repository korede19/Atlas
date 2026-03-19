import type {
  NavLink,
  PackageItem,
  PortfolioItem,
  Testimonial,
  ProcessStep,
  TrustFaqItem,
  StatItem,
} from "@/types";

export const WHATSAPP_BASE = "https://wa.link/jv5vza";
export const WHATSAPP_SCRATCH = `${WHATSAPP_BASE}?text=Hi%20Phoenix%20Atlas%2C%20I%20need%20to%20build%20my%20brand%20from%20scratch.`;
export const WHATSAPP_LAUNCHPAD = `${WHATSAPP_BASE}?text=Hi%20Phoenix%20Atlas%2C%20I%20want%20the%20Consultant%20Launchpad.`;
export const CAL_LINK = "https://cal.com/phoenixatlas/discovery-call";

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#packages" },
  { label: "Process", href: "#process" },
];

export const TICKER_ITEMS = [
  "Management Consulting",
  "Finance",
  "HR & People",
  "Real Estate",
  "Technology",
  "10–14 Day Delivery",
  "60% Deposit to Start",
  "You Own Everything",
];

export const STATS: StatItem[] = [
  { id: "s1", value: "50+", label: "Projects Delivered" },
  { id: "s2", value: "14", label: "Days Avg. Turnaround" },
  { id: "s3", value: "99.9%", label: "Client Satisfaction" },
];

export const PACKAGES: PackageItem[] = [
  {
    id: "authority-site",
    number: "Package 01",
    name: "The Authority Site",
    tagline:
      '"For the consultant who already has a brand identity and needs a website that finally does it justice."',
    wasPrice: "Was ₦400,000",
    price: "₦250,000",
    savings: "↓ You save ₦150,000",
    description:
      "A precision-built, five-page authority website that functions as your most persuasive salesperson — working around the clock to make corporate clients trust you before you've exchanged a single word.",
    includesLabel: "What's Included",
    features: [
      "5-page custom website (Home, About, Services, Case Studies, Contact)",
      "Mobile-first design, optimised for fast loading",
      "Brand intake session to align the site to your positioning",
      "SEO foundation — so the right clients can find you",
      "Lead capture and contact form setup",
      "2 full revision rounds before final handover",
      "Full site transfer — you own everything",
    ],
    ctaLabel: "Claim This Package →",
    ctaHref: WHATSAPP_SCRATCH,
    ctaVariant: "outline",
  },
  {
    id: "consultant-launchpad",
    number: "Package 02",
    name: "The Consultant Launchpad",
    tagline:
      '"For the consultant building a presence from scratch — or rebuilding one that no longer reflects how far they\'ve come."',
    wasPrice: "Was ₦650,000",
    price: "₦400,000",
    savings: "↓ You save ₦250,000",
    description:
      'We take you from "I have a business" to "I have a brand." A logo, a visual identity guide, and the Authority Site — built on a brand designed to attract. When you show up to a pitch with a brand this cohesive, you\'re not justifying your rate. They\'re trying to justify waiting this long to call you.',
    includesLabel: "Everything in Package 01, Plus",
    features: [
      "Custom logo design — 3 concept directions, 1 final refined logo",
      "Full brand identity guide (colours, fonts, usage rules)",
    ],
    ctaLabel: "I Want the Launchpad → Let's Talk",
    ctaHref: WHATSAPP_LAUNCHPAD,
    ctaVariant: "solid",
    featured: true,
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    category: "Finance Strategy",
    name: "Landzille",
    placeholder: "",
    placeholderSub: "Finance / Website",
    ctaHref: "https://landzille.com/",
    image: "/assets/portfolio-1.png",
  },
  {
    id: "p2",
    category: "HR Consulting",
    name: "Fouunders Workclave",
    placeholder: "",
    placeholderSub: "HR / Full Brand",
    ctaHref: "https://foundersworkclave.com/",
    image: "/assets/portfolio-2.webp",
  },
  {
    id: "p3",
    category: "Legal Advisory",
    name: "Authority Site",
    placeholder: "",
    placeholderSub: "Legal / Website",
    ctaHref: "https://geotela.com/",
    image: "/assets/portfolio-3.webp",
  },
  {
    id: "p4",
    category: "Tech Consulting",
    name: "GeoTella",
    placeholder: "",
    placeholderSub: "Tech / Full Brand",
    ctaHref: "https://givingspherecharity.org/",
    image: "/assets/portfolio-4.webp",
  },
  {
    id: "p5",
    category: "Executive Coaching",
    name: "Afrigent Digital",
    placeholder: "Agency Website",
    placeholderSub: "Executive / Website",
    ctaHref: "https://afrigentdigital.com/",
    image: "/assets/portfolio-5.png",
  },
  {
    id: "p6",
    category: "2026 Promo",
    name: "4 slots remaining",
    placeholder: "Your Brand Here",
    placeholderSub: "Your Category",
    isSlot: true,
    ctaHref: WHATSAPP_SCRATCH,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step1",
    number: "01",
    title: "We Talk. You Tell Us What You've Built.",
    body: "Message us on WhatsApp and we'll set up a brief conversation to understand your business, your clients, and the positioning you're aiming for. No hard pitch — just clarity on both sides.",
    note: "30 minutes. No commitment required.",
  },
  {
    id: "step2",
    number: "02",
    title: "You Fill the Brief. We Get to Work.",
    body: "A short intake form collects everything we need. We take it from there. No chasing you for fonts at midnight.",
    note: "60% deposit confirms your slot and kicks off the project.",
  },
  {
    id: "step3",
    number: "03",
    title: "You Approve. We Hand Over the Keys.",
    body: "We present your brand and website for review. Two revision rounds ensure it's exactly right. Once satisfied, full files and site access are transferred to you.",
    note: "40% final payment on your approval — not before.",
  },
];

export const TRUST_FAQS: TrustFaqItem[] = [
  {
    id: "f1",
    question: "What if I'm not happy with the result?",
    answer:
      "Two full revision rounds are built into every engagement. If something isn't right, we fix it. We don't release final files until you're satisfied.",
  },
  {
    id: "f2",
    question: "How do payments work?",
    answer:
      "60% deposit to start. 40% on approval. Payments via bank transfer. Receipt issued immediately. We don't take final payment until you've signed off.",
  },
  {
    id: "f3",
    question: "I'm not in Lagos or Abuja. Can you help?",
    answer:
      "Absolutely. We work with consultants across Nigeria and the diaspora. Everything is handled remotely — strategy call, brief, delivery, revisions, and handover.",
  },
  {
    id: "f4",
    question: "How long will the project take?",
    answer:
      "The Authority Site: 10–14 working days. The Consultant Launchpad: 14–21 working days. Speed depends partly on how quickly you respond to review requests.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Within a month of launching, I closed a contract I'd been chasing for two years. The client told me the new site was what gave them confidence to proceed.",
    author: "Adaeze O.",
    role: "Financial Strategy Consultant, Lagos",
  },
  {
    id: "t2",
    quote:
      "I had no website, no logo — just a business card. Phoenix Atlas built everything from scratch in three weeks. My referral partners now send links without hesitation.",
    author: "Emeka T.",
    role: "HR & Organisational Consultant, Abuja",
  },
  {
    id: "t3",
    quote:
      "I filled a form, answered a few questions, and came back to a brand that looked like a firm charging ten times what I used to charge.",
    author: "Kemi A.",
    role: "Tech Strategy Consultant, Lagos",
  },
];

export const SLOTS = { total: 7, taken: 3 };
