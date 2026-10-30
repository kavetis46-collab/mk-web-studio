export interface Project {
  id: string;
  name: string;
  category: string;
  categorySlug: 'interior' | 'healthcare' | 'restaurant' | 'construction' | 'fitness';
  tagline: string;
  description: string;
  isLive: boolean;
  liveUrl?: string;
  demoUrl?: string;
  features: string[];
  techStack: string[];
  clientSector: string;
  image: string;
  accentColor: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  deliverables: string[];
  idealFor: string;
  timeline: string;
  startingPrice: string;
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
  deliverables: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceINR: number;
  priceUSD: number;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: 'timeline' | 'pricing' | 'process' | 'technical';
}

export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  category: string;
  requirement: string;
  budget: string;
  message: string;
}
