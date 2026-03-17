export interface Project {
  slug: string;
  title: string;
  shortLabel: string;
  location: string;
  type: "Residential" | "Commercial";
  style: string;
  budgetRange: string;
  timeline: string;
  completionYear: number;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  featured: boolean;
  relatedServiceSlugs: string[];
}

export const projects: Project[] = [
  {
    slug: "palm-jumeirah-villa",
    title: "Palm Jumeirah Waterfront Villa",
    shortLabel: "Waterfront Villa",
    location: "Palm Jumeirah",
    type: "Residential",
    style: "Contemporary Mediterranean",
    budgetRange: "AED 1.2M – 1.6M",
    timeline: "8 months",
    completionYear: 2025,
    summary: "A full villa renovation with structural updates, bespoke joinery, and integrated indoor-outdoor living zones.",
    challenge: "The property lacked spatial flow and had disconnected outdoor areas with underperforming technical systems.",
    solution: "We restructured key living volumes, upgraded MEP infrastructure, and introduced a coherent material palette across interior and landscape.",
    scope: ["Full interior architectural renovation", "Bespoke kitchen + vanity joinery", "MEP overhaul and lighting redesign", "Outdoor terrace and landscape enhancement"],
    gallery: ["/images/projects/penthouse-1.jpg", "/images/projects/penthouse-20.jpg", "/images/projects/penthouse-25.jpg"],
    beforeImage: "/images/projects/sr5.webp",
    afterImage: "/images/projects/penthouse-1.jpg",
    featured: true,
    relatedServiceSlugs: ["villa-renovation", "landscape-outdoor"],
  },
  {
    slug: "downtown-penthouse",
    title: "Downtown Skyline Penthouse",
    shortLabel: "Skyline Penthouse",
    location: "Downtown Dubai",
    type: "Residential",
    style: "Modern Quiet Luxury",
    budgetRange: "AED 680K – 920K",
    timeline: "6 months",
    completionYear: 2025,
    summary: "A penthouse redesign balancing dramatic skyline framing with calm, layered interior materials.",
    challenge: "An over-segmented layout created dead zones and restricted natural light distribution.",
    solution: "We opened circulation paths, introduced architectural lighting, and delivered custom millwork for seamless storage.",
    scope: ["Full apartment layout optimization", "Kitchen and bathroom complete rebuild", "Premium flooring and stone installation", "Custom furniture and joinery package"],
    gallery: ["/images/projects/penthouse-15.jpg", "/images/projects/penthouse-18.jpg", "/images/projects/penthouse-6.jpg"],
    beforeImage: "/images/projects/sr4.webp",
    afterImage: "/images/projects/penthouse-15.jpg",
    featured: true,
    relatedServiceSlugs: ["apartment-renovation", "kitchen-renovation", "bathroom-renovation"],
  },
  {
    slug: "emirates-hills-villa",
    title: "Emirates Hills Family Villa",
    shortLabel: "Family Villa",
    location: "Emirates Hills",
    type: "Residential",
    style: "Italian Contemporary",
    budgetRange: "AED 1.8M – 2.4M",
    timeline: "10 months",
    completionYear: 2024,
    summary: "A full-scale modernization combining architectural interventions and bespoke luxury detailing.",
    challenge: "The property needed a full systems update and stronger connection between formal and family zones.",
    solution: "We rebuilt core circulation, upgraded all technical systems, and designed cohesive spaces for hosting and family life.",
    scope: ["Structural and MEP modernization", "Feature staircase and double-height redesign", "Master suite spa conversion", "Landscape and pool deck restyling"],
    gallery: ["/images/projects/penthouse-20.jpg", "/images/projects/penthouse-30.jpg", "/images/projects/penthouse-1.jpg"],
    beforeImage: "/images/projects/sr3.webp",
    afterImage: "/images/projects/penthouse-20.jpg",
    featured: false,
    relatedServiceSlugs: ["villa-renovation", "landscape-outdoor", "bathroom-renovation"],
  },
  {
    slug: "difc-office-fit-out",
    title: "DIFC Executive Office",
    shortLabel: "Executive Office",
    location: "DIFC",
    type: "Commercial",
    style: "Corporate Minimal Luxe",
    budgetRange: "AED 430K – 600K",
    timeline: "14 weeks",
    completionYear: 2025,
    summary: "A high-performance office fit-out designed for premium client interaction and hybrid team workflows.",
    challenge: "The space lacked acoustic comfort, brand expression, and modern collaboration zones.",
    solution: "We delivered a fast-track design-build fit-out with improved acoustics, integrated branding, and executive hospitality areas.",
    scope: ["Space planning for hybrid teams", "Acoustic + lighting strategy", "Reception and boardroom identity fit-out", "MEP upgrades and furniture integration"],
    gallery: ["/images/projects/menu-team.jpg", "/images/projects/penthouse-18.jpg", "/images/projects/penthouse-25.jpg"],
    beforeImage: "/images/projects/sr6.webp",
    afterImage: "/images/projects/menu-team.jpg",
    featured: true,
    relatedServiceSlugs: ["office-fit-out"],
  },
  {
    slug: "jumeirah-kitchen-atelier",
    title: "Jumeirah Kitchen Atelier",
    shortLabel: "Kitchen Atelier",
    location: "Jumeirah",
    type: "Residential",
    style: "Warm Minimal",
    budgetRange: "AED 210K – 320K",
    timeline: "9 weeks",
    completionYear: 2026,
    summary: "A bespoke kitchen redesign integrating hospitality-style flow, custom storage, and premium stonework.",
    challenge: "The existing kitchen lacked storage logic and efficient prep-to-hosting transitions.",
    solution: "We rebuilt the layout around behavior mapping and introduced custom cabinetry with integrated appliances.",
    scope: ["Complete kitchen redesign", "Custom joinery and pantry engineering", "Countertop and splashback stone package", "Lighting and appliance integration"],
    gallery: ["/images/projects/penthouse-25.jpg", "/images/projects/penthouse-15.jpg", "/images/projects/penthouse-30.jpg"],
    beforeImage: "/images/projects/sr1.webp",
    afterImage: "/images/projects/penthouse-25.jpg",
    featured: false,
    relatedServiceSlugs: ["kitchen-renovation"],
  },
  {
    slug: "meadows-bathroom-suite",
    title: "Meadows Spa Bathroom Suite",
    shortLabel: "Spa Bathroom",
    location: "The Meadows",
    type: "Residential",
    style: "Soft Contemporary",
    budgetRange: "AED 145K – 230K",
    timeline: "7 weeks",
    completionYear: 2025,
    summary: "A complete master bathroom conversion into a spa-grade suite with layered textures and atmospheric lighting.",
    challenge: "The previous layout felt narrow and underlit, with outdated technical installations.",
    solution: "We redesigned zoning, upgraded waterproofing and plumbing, and curated a timeless stone and metal palette.",
    scope: ["Master bathroom full rebuild", "Custom vanity and mirror wall", "Shower + bath zoning redesign", "Technical systems and waterproofing upgrade"],
    gallery: ["/images/projects/penthouse-30.jpg", "/images/projects/penthouse-20.jpg", "/images/projects/penthouse-18.jpg"],
    beforeImage: "/images/projects/sr3.webp",
    afterImage: "/images/projects/penthouse-30.jpg",
    featured: false,
    relatedServiceSlugs: ["bathroom-renovation"],
  },
  {
    slug: "arabian-ranches-landscape",
    title: "Arabian Ranches Outdoor Retreat",
    shortLabel: "Outdoor Retreat",
    location: "Arabian Ranches",
    type: "Residential",
    style: "Resort Biophilic",
    budgetRange: "AED 320K – 520K",
    timeline: "12 weeks",
    completionYear: 2024,
    summary: "A villa outdoor transformation combining shaded lounges, planting strategy, and entertainment-ready lighting.",
    challenge: "The garden lacked privacy, functional zoning, and all-season comfort.",
    solution: "We restructured circulation and introduced a layered landscape language tuned to Dubai climate conditions.",
    scope: ["Hardscape and circulation redesign", "Native/adapted planting palette", "Outdoor kitchen and lounge zone", "Architectural exterior lighting"],
    gallery: ["/images/extra/dubai-skyline.jpg", "/images/projects/penthouse-1.jpg", "/images/projects/penthouse-20.jpg"],
    beforeImage: "/images/projects/sr6.webp",
    afterImage: "/images/extra/dubai-skyline.jpg",
    featured: false,
    relatedServiceSlugs: ["landscape-outdoor", "villa-renovation"],
  },
  {
    slug: "marina-apartment-reframe",
    title: "Dubai Marina Apartment Reframe",
    shortLabel: "Marina Apartment",
    location: "Dubai Marina",
    type: "Residential",
    style: "Urban Contemporary",
    budgetRange: "AED 390K – 560K",
    timeline: "5 months",
    completionYear: 2026,
    summary: "A full apartment renovation focused on open-plan social flow and elevated detailing for waterfront living.",
    challenge: "Narrow corridors and fragmented spaces limited daily functionality and visual impact.",
    solution: "We merged key zones, introduced custom storage architecture, and upgraded finishes for a premium editorial look.",
    scope: ["Floor plan optimization", "Kitchen and bathrooms upgrade", "Custom media wall and wardrobes", "Lighting + flooring renewal"],
    gallery: ["/images/projects/penthouse-6.jpg", "/images/projects/penthouse-15.jpg", "/images/projects/penthouse-18.jpg"],
    beforeImage: "/images/projects/sr4.webp",
    afterImage: "/images/projects/penthouse-6.jpg",
    featured: true,
    relatedServiceSlugs: ["apartment-renovation"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
