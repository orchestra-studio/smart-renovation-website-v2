export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  author: { name: string; role: string };
  date: string;
  category: string;
  coverImage: string;
  readTime: string;
  seoTitle: string;
  metaDescription: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    title: "Complete Guide to Villa Renovation in Dubai",
    slug: "complete-guide-villa-renovation-dubai",
    excerpt: "Everything you need to know before starting a villa renovation in Dubai — from permits and budgets to design strategy.",
    author: { name: "Marco Bellini", role: "Founder & Creative Director" },
    date: "2026-03-12",
    category: "Guides",
    coverImage: "/images/projects/penthouse-1.jpg",
    readTime: "12 min read",
    seoTitle: "Complete Guide to Villa Renovation in Dubai (2026)",
    metaDescription: "The definitive guide to villa renovation in Dubai — permits, budgets, design phases, contractor selection, and execution best practices.",
    featured: true,
  },
  {
    title: "Kitchen Renovation Trends 2026",
    slug: "kitchen-renovation-trends-2026",
    excerpt: "From integrated smart appliances to warm material palettes, the trends defining Dubai kitchens in 2026.",
    author: { name: "Marco Bellini", role: "Founder & Creative Director" },
    date: "2026-03-08",
    category: "Design Trends",
    coverImage: "/images/projects/penthouse-25.jpg",
    readTime: "8 min read",
    seoTitle: "Kitchen Renovation Trends 2026 in Dubai",
    metaDescription: "Discover the top kitchen renovation trends for 2026 in Dubai.",
    featured: true,
  },
  {
    title: "How to Choose the Right Contractor in Dubai",
    slug: "how-to-choose-right-contractor-dubai",
    excerpt: "A practical framework for evaluating renovation contractors in Dubai.",
    author: { name: "Leila Hassan", role: "Head of Project Delivery" },
    date: "2026-03-04",
    category: "Renovation Tips",
    coverImage: "/images/projects/menu-team.jpg",
    readTime: "10 min read",
    seoTitle: "How to Choose the Right Renovation Contractor in Dubai",
    metaDescription: "Learn how to evaluate and select the best renovation contractor in Dubai.",
  },
  {
    title: "Villa Renovation Design Trends in Dubai",
    slug: "villa-renovation-design-trends",
    excerpt: "Discover the design directions shaping luxury villa renovations in Dubai.",
    author: { name: "Marco Bellini", role: "Founder & Creative Director" },
    date: "2026-02-19",
    category: "Design Trends",
    coverImage: "/images/projects/penthouse-1.jpg",
    readTime: "7 min read",
    seoTitle: "Villa Renovation Design Trends in Dubai (2026)",
    metaDescription: "Explore the latest villa renovation trends in Dubai.",
  },
  {
    title: "Five Tips for Designing an Open-Plan Kitchen",
    slug: "five-tips-for-designing-an-open-plan-kitchen",
    excerpt: "Design an open-plan kitchen that balances social flow, storage, and chef-grade functionality.",
    author: { name: "Marco Bellini", role: "Founder & Creative Director" },
    date: "2026-02-03",
    category: "Renovation Tips",
    coverImage: "/images/projects/penthouse-25.jpg",
    readTime: "6 min read",
    seoTitle: "Five Tips for Designing an Open-Plan Kitchen",
    metaDescription: "Plan a premium open-plan kitchen with smarter flow and integrated storage.",
  },
  {
    title: "Modern Bathroom Design Ideas for Dubai Homes",
    slug: "modern-bathroom-design-ideas",
    excerpt: "From spa-inspired zoning to material detailing, bathroom ideas for Dubai homes.",
    author: { name: "Leila Hassan", role: "Head of Project Delivery" },
    date: "2026-01-28",
    category: "Design Trends",
    coverImage: "/images/projects/penthouse-30.jpg",
    readTime: "6 min read",
    seoTitle: "Modern Bathroom Design Ideas for Dubai Homes (2026)",
    metaDescription: "Discover modern bathroom design ideas for Dubai homes.",
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
