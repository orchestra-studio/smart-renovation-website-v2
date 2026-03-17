export const siteConfig = {
  name: "Smart Renovation",
  legalName: "Smart Renovation Dubai",
  tagline: "The Fashion House of Renovation",
  description:
    "Award-winning design-build studio delivering premium residential and commercial renovations across Dubai with precision, craftsmanship, and full accountability.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://smartrenovation.ae",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1",
  orgSlug: process.env.NEXT_PUBLIC_ORG_SLUG || "smart-reno-dubai",
  phoneDisplay: "+971 50 850 6500",
  phoneRaw: "+971508506500",
  email: "hello@smartrenovation.ae",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971508506500",
  address: {
    street: "Business Bay",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  nav: [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    instagram: "https://www.instagram.com/smartrenovationdubai/",
    linkedin: "https://www.linkedin.com/company/smart-renovation-dubai/",
    whatsapp: "https://wa.me/971508506500",
  },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

export const trustStats = [
  { value: 14, suffix: "+", label: "Years in Dubai" },
  { value: 240, suffix: "+", label: "Projects Delivered" },
  { value: 96, suffix: "%", label: "On-Time Handover" },
  { value: 4.9, suffix: "/5", label: "Client Rating", decimals: 1 },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We align on your goals, lifestyle, and investment parameters in a focused consultation.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Concepts, material direction, and technical detailing converge into one coherent vision.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Dedicated project managers coordinate contractors, suppliers, and transparent progress updates.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Final snagging, commissioning, and white-glove handover ensure move-in readiness from day one.",
  },
];

export const testimonials = [
  {
    name: "Nadia A.",
    role: "Villa owner, Palm Jumeirah",
    quote:
      "From concept to handover, Smart Renovation gave us absolute confidence. The execution quality and communication were exceptional.",
    rating: 5,
  },
  {
    name: "James W.",
    role: "Managing Partner, DIFC",
    quote:
      "Our office fit-out was delivered exactly on the agreed timeline with flawless detailing. It elevated our brand overnight.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Apartment owner, Dubai Marina",
    quote:
      "The team translated our vision into a home that feels editorial and warm at the same time. Every decision felt curated.",
    rating: 5,
  },
  {
    name: "Mark R.",
    role: "Villa owner, Emirates Hills",
    quote:
      "What impressed us most was the transparency. We always knew exactly where our project stood — no surprises, just excellence.",
    rating: 5,
  },
  {
    name: "Layla K.",
    role: "Penthouse owner, Downtown Dubai",
    quote:
      "They transformed our penthouse into something we couldn't have imagined. The attention to detail in every corner is remarkable.",
    rating: 5,
  },
  {
    name: "David P.",
    role: "Villa owner, Arabian Ranches",
    quote:
      "The outdoor transformation exceeded every expectation. Our garden is now a genuine living space we use year-round.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How long does a typical renovation take?",
    answer:
      "Timelines depend on scope and complexity. A bathroom renovation may take 7–9 weeks, while a full villa transformation typically spans 8–12 months. During the Discovery phase, we establish a detailed milestone schedule — and our 96% on-time handover rate speaks for itself.",
  },
  {
    question: "How do you handle budgets and cost transparency?",
    answer:
      "We provide a comprehensive budget breakdown during the Design phase, before any construction begins. Costs are locked at this stage with clear line-item visibility. There are no hidden fees, no surprise extras. You approve every financial decision.",
  },
  {
    question: "What makes design-build different from hiring separately?",
    answer:
      "When you separate design from construction, you inherit the communication gaps between them. Design-build means one integrated team — architects, designers, project managers, and builders — all working from the same brief, the same timeline, and the same accountability structure.",
  },
  {
    question: "Do you handle permits and municipality requirements?",
    answer:
      "Yes. We manage all regulatory coordination, from Dubai Municipality approvals to building management NOCs. Permit navigation is part of our standard scope — you won't need to deal with it directly.",
  },
  {
    question: "Can I stay in my home during the renovation?",
    answer:
      "It depends on scope. For partial renovations, we often phase the work to allow occupancy. For full-property renovations, we recommend temporary relocation and can advise on timing. We always discuss this during Discovery.",
  },
  {
    question: "What's the first step to get started?",
    answer:
      "It begins with a conversation. Reach out via the form, WhatsApp, or email. A senior consultant will respond within 15 minutes during business hours to schedule a focused Discovery session — no obligations, no pressure.",
  },
];

export const aboutValues = [
  {
    title: "Design-Led Thinking",
    description: "Every decision starts with spatial intelligence, aesthetics, and long-term value.",
  },
  {
    title: "Execution Certainty",
    description: "Structured planning, transparent timelines, and rigorous site supervision reduce surprises.",
  },
  {
    title: "Craftsmanship First",
    description: "We work with premium materials and specialist trades that meet exacting standards.",
  },
  {
    title: "Client Clarity",
    description: "Clear scope, communication cadence, and accountability from first brief to final handover.",
  },
];

export const leadershipTeam = [
  {
    name: "Marco Bellini",
    title: "Founder & Creative Director",
    bio: "Leads design direction and high-end residential transformations with a European editorial sensibility.",
  },
  {
    name: "Leila Hassan",
    title: "Head of Project Delivery",
    bio: "Owns planning, sequencing, and quality assurance across multi-trade renovation programs.",
  },
  {
    name: "Daniel Rossi",
    title: "Commercial Fit-Out Lead",
    bio: "Specialized in office and retail environments that balance brand impact with operational efficiency.",
  },
];

export const companyMilestones = [
  { year: "2012", event: "Smart Renovation founded in Dubai" },
  { year: "2016", event: "Expanded into full design-build delivery" },
  { year: "2020", event: "Crossed 150 completed renovation projects" },
  { year: "2024", event: "Launched premium commercial fit-out division" },
  { year: "2026", event: "Digital-first client experience platform rollout" },
];
