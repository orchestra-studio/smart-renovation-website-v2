export interface Service {
  slug: string;
  name: string;
  teaser: string;
  heroTitle: string;
  intro: string;
  description: string;
  heroImage: string;
  icon: string;
  keyOutcomes: string[];
  process: { title: string; description: string }[];
  relatedProjectSlugs: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "villa-renovation",
    name: "Villa Renovation",
    teaser: "Complete villa transformations with architectural and landscape integration",
    heroTitle: "Villa renovations executed with architectural discipline",
    intro: "We reimagine villas end-to-end, balancing spatial flow, material quality, and construction sequencing.",
    description: "Our villa programs include structural updates, bespoke joinery, façade refinements, and indoor-outdoor continuity.",
    heroImage: "/images/projects/penthouse-1.jpg",
    icon: "🏛",
    keyOutcomes: ["Large-scale scope control", "Indoor-outdoor design coherence", "Bespoke joinery and premium finishes", "Timeline confidence with proactive risk management"],
    process: [
      { title: "Property Audit", description: "Structural, MEP, and layout assessment with opportunity mapping." },
      { title: "Design Development", description: "Master planning, interior concepting, and curated material palette." },
      { title: "Construction Phase", description: "Coordinated execution across civil, MEP, joinery, and finishing teams." },
      { title: "Final Reveal", description: "Detail-perfect completion and turnkey move-in readiness." },
    ],
    relatedProjectSlugs: ["palm-jumeirah-villa", "emirates-hills-villa"],
    seoTitle: "Villa Renovation Dubai | Smart Renovation",
    seoDescription: "Award-winning villa renovation company in Dubai delivering turnkey design-build projects for luxury homeowners.",
  },
  {
    slug: "apartment-renovation",
    name: "Apartment Renovation",
    teaser: "High-impact apartment transformations tailored to urban living",
    heroTitle: "Apartment renovations that maximize light, flow, and value",
    intro: "From Marina penthouses to city apartments, we optimize every square meter through thoughtful planning.",
    description: "Our apartment renovations focus on spatial efficiency, acoustics, storage integration, and elevated interior language.",
    heroImage: "/images/projects/penthouse-15.jpg",
    icon: "🏢",
    keyOutcomes: ["Space optimization strategies", "Contemporary premium finishes", "MEP and acoustic upgrades", "Fast-track execution in occupied towers"],
    process: [
      { title: "Layout Review", description: "Identify flow bottlenecks and hidden value opportunities." },
      { title: "Material Curation", description: "Select finishes that elevate quality while matching building constraints." },
      { title: "Execution", description: "Coordinate demolition, MEP, finishes, and installations with precision." },
      { title: "Handover", description: "Quality checks, final polish, and complete documentation." },
    ],
    relatedProjectSlugs: ["downtown-penthouse", "marina-apartment-reframe"],
    seoTitle: "Apartment Renovation Dubai | Smart Renovation",
    seoDescription: "Premium apartment renovation in Dubai for owners seeking luxury finishes, better layouts, and reliable delivery.",
  },
  {
    slug: "kitchen-renovation",
    name: "Kitchen Renovation",
    teaser: "Bespoke kitchens engineered for daily performance and visual impact",
    heroTitle: "Kitchen spaces that feel chef-grade and effortlessly elegant",
    intro: "We design and build kitchens with tailored joinery, premium surfaces, and durable detailing.",
    description: "Each kitchen program blends ergonomics, appliance integration, and a refined material story.",
    heroImage: "/images/projects/penthouse-25.jpg",
    icon: "🍳",
    keyOutcomes: ["Custom joinery and storage architecture", "High-performance countertop selection", "Integrated lighting and appliance planning", "Execution with minimal disruption"],
    process: [
      { title: "User Workflow Mapping", description: "Define cooking, hosting, and storage behavior to shape the layout." },
      { title: "Joinery & Surface Design", description: "Finalize cabinetry details, finishes, and technical shop drawings." },
      { title: "Installation", description: "Coordinate MEP readiness, fabrication, and precision installation." },
      { title: "Final Calibration", description: "Quality control, appliance testing, and styling handover." },
    ],
    relatedProjectSlugs: ["jumeirah-kitchen-atelier"],
    seoTitle: "Kitchen Renovation Dubai | Smart Renovation",
    seoDescription: "Luxury kitchen renovation services in Dubai with bespoke cabinetry, premium materials, and precise fit-out execution.",
  },
  {
    slug: "bathroom-renovation",
    name: "Bathroom Renovation",
    teaser: "Spa-inspired bathroom renovations with hotel-grade detailing",
    heroTitle: "Bathrooms crafted as private wellness spaces",
    intro: "We transform bathrooms into serene, high-functioning spaces with premium materials and refined lighting.",
    description: "From master en-suites to powder rooms, our bathroom renovations focus on tactile quality and comfort.",
    heroImage: "/images/projects/penthouse-30.jpg",
    icon: "🛁",
    keyOutcomes: ["Waterproofing and technical reliability", "Premium stone and fixture selection", "Ambient layered lighting", "Meticulous finishing standards"],
    process: [
      { title: "Technical Review", description: "Assess drainage, ventilation, and plumbing before design." },
      { title: "Design & Specification", description: "Curate fixture palette, stonework, and custom vanity solutions." },
      { title: "Construction", description: "Execute waterproofing, tiling, and installation with QA checkpoints." },
      { title: "Commissioning", description: "Final testing, detailing, and handover." },
    ],
    relatedProjectSlugs: ["meadows-bathroom-suite"],
    seoTitle: "Bathroom Renovation Dubai | Smart Renovation",
    seoDescription: "Premium bathroom renovation in Dubai with spa-inspired design, luxury materials, and flawless technical execution.",
  },
  {
    slug: "landscape-outdoor",
    name: "Landscape & Outdoor",
    teaser: "Resort-style outdoor environments for villas and luxury residences",
    heroTitle: "Outdoor spaces designed for climate, comfort, and impact",
    intro: "We design and build landscaped environments that connect architecture, pool zones, and outdoor living.",
    description: "Our landscape projects integrate hardscape, planting, lighting, and hospitality-style flow.",
    heroImage: "/images/extra/dubai-skyline.jpg",
    icon: "🌿",
    keyOutcomes: ["Integrated pool and terrace design", "Climate-resilient planting strategy", "Outdoor lighting and entertainment readiness", "Maintenance-conscious execution"],
    process: [
      { title: "Site & Climate Study", description: "Evaluate orientation, heat exposure, and lifestyle usage patterns." },
      { title: "Landscape Concept", description: "Develop circulation, planting, and hardscape composition." },
      { title: "Build & Planting", description: "Execute civil works, irrigation, lighting, and planting installation." },
      { title: "Activation", description: "Final styling and handover for immediate outdoor living." },
    ],
    relatedProjectSlugs: ["arabian-ranches-landscape"],
    seoTitle: "Landscape Design Dubai | Smart Renovation",
    seoDescription: "Premium landscape design and outdoor renovation in Dubai for villas, pools, and high-end outdoor living spaces.",
  },
  {
    slug: "office-fit-out",
    name: "Office Fit-Out",
    teaser: "Brand-aligned office environments for performance and client impact",
    heroTitle: "Office fit-outs that express your brand with confidence",
    intro: "We deliver workplace environments that improve team flow, client experience, and effectiveness.",
    description: "Our office fit-out practice combines design strategy, technical coordination, and construction control.",
    heroImage: "/images/projects/menu-team.jpg",
    icon: "💼",
    keyOutcomes: ["Space planning for hybrid teams", "Acoustic and lighting upgrades", "Brand-forward reception zones", "Fast-track execution for business continuity"],
    process: [
      { title: "Workplace Strategy", description: "Define headcount, collaboration modes, and client-facing priorities." },
      { title: "Design & Technical", description: "Produce layouts, mood direction, and engineering-ready documentation." },
      { title: "Fit-Out", description: "Execute with milestone tracking and strict quality control." },
      { title: "Occupancy Ready", description: "Testing, snag closure, and move-in support." },
    ],
    relatedProjectSlugs: ["difc-office-fit-out"],
    seoTitle: "Office Fit-Out Company Dubai | Smart Renovation",
    seoDescription: "Premium office fit-out company in Dubai delivering design-led workplaces with reliable timelines and build quality.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
