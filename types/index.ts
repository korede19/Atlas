export type Theme = "dark" | "light";

export interface NavLink {
  label: string;
  href: string;
}
export interface StatItem {
  id: string;
  value: string;
  label: string;
}
export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  body: string;
  note: string;
}
export interface TrustFaqItem {
  id: string;
  question: string;
  answer: string;
}
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  name: string;
  placeholder: string;
  placeholderSub: string;
  isSlot?: boolean;
  ctaHref?: string;
  image?: string;
}

export interface PackageItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  wasPrice: string;
  price: string;
  savings: string;
  description: string;
  includesLabel: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "solid" | "outline";
  featured?: boolean;
}
