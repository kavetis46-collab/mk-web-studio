import type { Project, Service, ProcessStep, PricingPlan, FaqItem } from '../types';

export const siteConfig = {
  brand: {
    name: 'MK Web Studio',
    tagline: 'Transforming Businesses Into Digital Experiences.',
    shortDescription: 'AI-assisted website design and development agency crafting high-performance, conversion-driven digital platforms for modern businesses.',
    heroLabel: 'MK WEB STUDIO | DIGITAL EXPERIENCES',
    heroHeadline: 'WE BUILD WEBSITES THAT BUILD BUSINESSES.',
    heroSubheadline: 'We design and develop powerful digital experiences that help businesses establish their online presence, showcase their services and connect with more customers.',
  },

  contact: {
    email: 'mkwebstdio@gmail.com', // Official studio email
    phoneDisplay: '+91 91821 26238', // Updated official contact
    phoneRaw: '919182126238', // Country code 91 + 10-digit number 9182126238
    location: 'Hyderabad, Telangana, India',
    internationalAvailability: 'Available for Worldwide & International Projects',
    businessHours: 'Monday – Saturday: 10:00 AM – 7:30 PM IST',
    workingModel: 'Remote-First Studio with Global Client Support',
  },

  whatsapp: {
    number: '919182126238', // Country code 91 + 10-digit number 9182126238
    isConfigured: true,
    defaultMessage: "Hello MK Web Studio! I'm interested in creating a website for my business. Could you share more details?",
  },

  socials: {
    linkedin: 'https://linkedin.com/company/mk-web-studio',
    twitter: 'https://x.com/mkwebstudio',
    instagram: 'https://instagram.com/mkwebstudio',
    github: 'https://github.com/mkwebstudio',
  },

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],

  targetAudiences: [
    'Interior Designers',
    'Architects',
    'Construction Companies',
    'Dental Clinics',
    'Restaurants & Cafes',
    'Gyms & Fitness Centres',
    'Coaching Institutes',
    'Small & Medium Businesses',
    'International Businesses',
  ],

  services: [
    {
      id: 'business-website',
      title: 'Business Website Development',
      shortDescription: 'Professional websites for businesses that need a strong online presence.',
      detailedDescription: 'Full-featured, responsive, and performance-optimized websites built specifically for businesses looking to showcase authority, communicate credibility, and convert qualified prospects into clients.',
      iconName: 'Building2',
      deliverables: [
        'Custom multi-page responsive architecture',
        'Company profile, executive vision & team showcase',
        'Integrated enquiry forms & WhatsApp trigger',
        'Search engine optimized semantic hierarchy',
        'Fast loading on all cellular & broadband networks'
      ],
      idealFor: 'Consultancies, corporate firms, clinics, architecture studios, and established local enterprises.',
      timeline: '7 to 14 business days',
      startingPrice: '₹9,999 ($139 USD)',
    },
    {
      id: 'landing-page',
      title: 'Landing Page Design',
      shortDescription: 'Conversion-focused landing pages for products, services and campaigns.',
      detailedDescription: 'High-impact, laser-focused single page experiences designed with psychological persuasion frameworks, clear value propositions, and high-converting CTA triggers for marketing campaigns.',
      iconName: 'Sparkles',
      deliverables: [
        'High-converting single page structure',
        'Persuasive headline hierarchy & visual hooks',
        'Lead capture form with instant notifications',
        'Social proof, client proof & review embeds',
        'A/B test friendly clean layout'
      ],
      idealFor: 'Product launches, coaching programs, event tickets, Google/Meta Ads campaigns, and new service offerings.',
      timeline: '3 to 5 business days',
      startingPrice: '₹4,999 ($69 USD)',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Website Design',
      shortDescription: 'Online shopping experiences with product displays and shopping functionality.',
      detailedDescription: 'Sleek, intuitive online store interfaces that showcase your catalog with elegance, offering seamless browsing, filterable product views, shopping cart, and secure checkout workflows.',
      iconName: 'ShoppingBag',
      deliverables: [
        'Curated product catalog & category filters',
        'Interactive product details with zoom & variations',
        'Cart drawer, checkout flow & payment gateway integration',
        'Automated order enquiry or WhatsApp direct purchase',
        'Customer account dashboard & order tracking'
      ],
      idealFor: 'Retail brands, boutique shops, artisan makers, fashion labels, and direct-to-consumer businesses.',
      timeline: '14 to 21 business days',
      startingPrice: '₹19,999 ($279 USD)',
    },
    {
      id: 'portfolio',
      title: 'Portfolio Website Development',
      shortDescription: 'Elegant portfolio websites for designers, architects and creative professionals.',
      detailedDescription: 'Visual-first, minimal editorial portfolios that let your craftsmanship speak for itself. Featuring high-resolution imagery galleries, case study layouts, and clean typographic finesse.',
      iconName: 'Palette',
      deliverables: [
        'Curated project showcase with filtering',
        'In-depth case study template with before/after layouts',
        'Full-screen lightbox gallery for architectural & design renders',
        'Interactive bio, press mentions & client roster',
        'Direct project consultation booking channel'
      ],
      idealFor: 'Interior designers, architects, photographers, creative directors, fashion designers, and visual artists.',
      timeline: '7 to 10 business days',
      startingPrice: '₹9,999 ($139 USD)',
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      shortDescription: 'Modernize outdated websites with improved layouts and responsive design.',
      detailedDescription: 'Transform clunky, outdated, slow legacy websites into modern, sleek, mobile-first powerhouses that match your present brand caliber and outshine your competitors.',
      iconName: 'RefreshCw',
      deliverables: [
        'Comprehensive audit of existing UX bottlenecks',
        'Brand aesthetic modernization & typography upgrade',
        'Mobile responsiveness overhaul & touch optimization',
        'Performance speed optimization (Sub-second page loads)',
        'Zero-downtime content migration & SEO link preservation'
      ],
      idealFor: 'Businesses with 3+ year old websites that look dated or lose traffic due to poor mobile responsiveness.',
      timeline: '7 to 14 business days',
      startingPrice: '₹8,999 ($119 USD)',
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      shortDescription: 'Technical updates, content changes and ongoing website support.',
      detailedDescription: 'Reliable, stress-free ongoing technical guardianship. We handle framework patches, performance audits, backups, security headers, and routine content refreshes so you focus on running your business.',
      iconName: 'Wrench',
      deliverables: [
        'Monthly security patches & package updates',
        'Cloud hosting & DNS monitoring (99.9% uptime check)',
        'Content updates (banners, text, images, new portfolio items)',
        'Regular off-site backups & disaster recovery readiness',
        'Priority WhatsApp & email developer support'
      ],
      idealFor: 'Active businesses wanting peace of mind, continuous security, and fast content turnaround without hiring full-time staff.',
      timeline: 'Ongoing Monthly Support',
      startingPrice: '₹2,499 / mo ($35 USD / mo)',
    },
  ] as Service[],

  projects: [
    {
      id: 'zaksy-studio',
      name: 'Zaksy Studio',
      category: 'Interior Design Website',
      categorySlug: 'interior',
      tagline: 'Luxury Interior Architecture & Spatial Design',
      description: 'Premium interior design website concept showcasing residential, commercial and luxury interior projects with minimalist aesthetics, fluid gallery transitions, and an elegant consultation enquiry system.',
      isLive: true,
      liveUrl: 'https://zaksy-studio-website.netlify.app/',
      features: [
        'Luxury editorial layout with dark ambient tones',
        'Filterable portfolio (Living, Commercial, Luxury Penthouse)',
        'High-resolution imagery carousel with smooth interactions',
        'Design philosophy & process breakdown',
        'Direct WhatsApp & consultation booking integration'
      ],
      techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
      clientSector: 'Interior Design & Architecture',
      image: '/projects/zaksy-preview.svg',
      accentColor: '#c084fc',
    },
    {
      id: 'dental-clinic',
      name: 'Apex Dental Care Concept',
      category: 'Healthcare Website',
      categorySlug: 'healthcare',
      tagline: 'Modern Digital Healthcare & Patient Experience',
      description: 'Modern dental clinic website concept with service information, appointment enquiry and professional presentation. Designed to comfort patients, establish medical authority, and streamline doctor consultations.',
      isLive: false,
      demoUrl: '#concept-dental',
      features: [
        'Clean, sterile-yet-warm healthcare visual design',
        'Interactive treatment directory (Cosmetic, Implants, Ortho)',
        'Doctor credentials & clinic facility tour preview',
        'Smart appointment enquiry modal with preferred time slots',
        'Emergency dental helpline quick-dial banner'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      clientSector: 'Healthcare & Dental Practice',
      image: '/projects/dental-preview.svg',
      accentColor: '#38bdf8',
    },
    {
      id: 'restaurant-concept',
      name: 'Saffron & Sage Dining Concept',
      category: 'Restaurant Website',
      categorySlug: 'restaurant',
      tagline: 'Artisanal Culinary Experiences & Digital Reservations',
      description: 'Elegant restaurant website concept with food galleries, digital menu and reservation enquiry. Crafted with appetizing visual layouts, chef storytelling, and an instant table booking mechanism.',
      isLive: false,
      demoUrl: '#concept-restaurant',
      features: [
        'Immersive culinary visual gallery with ambient glow',
        'Interactive digital menu with dietary tags (GF, Vegan, Chef Special)',
        'Online table reservation enquiry form with guest count picker',
        'Private dining & event hosting inquiry channel',
        'Location map, valet info, and hours status'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide'],
      clientSector: 'Hospitality & Fine Dining',
      image: '/projects/restaurant-preview.svg',
      accentColor: '#fb923c',
    },
    {
      id: 'construction-concept',
      name: 'Vanguard Infra & Construction',
      category: 'Construction Website',
      categorySlug: 'construction',
      tagline: 'Engineering Excellence & Civil Infrastructure',
      description: 'Professional construction company website concept showcasing services, projects and enquiry options. Engineered to communicate reliability, safety certifications, and commercial project scale.',
      isLive: false,
      demoUrl: '#concept-construction',
      features: [
        'Industrial-grade modern aesthetic with strong structural typography',
        'Completed & ongoing project case studies with technical specs',
        'Machinery fleet, safety compliance & standard certifications',
        'Commercial tender and residential quotation estimator',
        'Direct project engineer inquiry channel'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      clientSector: 'Civil Engineering & Construction',
      image: '/projects/construction-preview.svg',
      accentColor: '#facc15',
    },
    {
      id: 'fitness-concept',
      name: 'Kratos Performance Gym Concept',
      category: 'Fitness Website',
      categorySlug: 'fitness',
      tagline: 'High-Performance Athletics & Membership Portal',
      description: 'Modern gym website concept with training services, membership information and enquiry options. Features dynamic energy, trainer profiles, class schedules, and trial pass booking.',
      isLive: false,
      demoUrl: '#concept-fitness',
      features: [
        'High-octane dark sports theme with electric neon highlights',
        'Interactive training program directory (HIIT, Strength, CrossFit)',
        'Coach rosters with athletic specialties and credentials',
        'Membership tiers comparison with instant 1-day pass trial form',
        'Live gym capacity indicator and virtual facility walkthrough'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      clientSector: 'Fitness, Health & Sports Academies',
      image: '/projects/fitness-preview.svg',
      accentColor: '#4ade80',
    },
  ] as Project[],

  whyChooseUs: [
    {
      id: 'custom-design',
      title: 'Custom Design Approach',
      description: 'Every project begins with a blank canvas tailored to your specific brand identity, avoiding generic templates and cookie-cutter layouts.',
      iconName: 'PenTool',
      highlight: 'Tailored Aesthetic',
    },
    {
      id: 'mobile-responsive',
      title: 'Mobile-Responsive Development',
      description: 'Flawless presentation engineered for every screen size — from compact smartphones and tablets to high-resolution ultrawide desktop monitors.',
      iconName: 'Smartphone',
      highlight: '100% Fluid Breakpoints',
    },
    {
      id: 'clear-communication',
      title: 'Clear Communication',
      description: 'Direct collaboration with your developer, transparent milestone updates, quick turnaround times, and zero confusing technical jargon.',
      iconName: 'MessageSquare',
      highlight: 'Direct WhatsApp Access',
    },
    {
      id: 'modern-technology',
      title: 'Modern Technology',
      description: 'Built with production-grade frameworks including React, TypeScript, Vite, Tailwind CSS, and lightweight 3D libraries for blazing fast speeds.',
      iconName: 'Cpu',
      highlight: 'Next-Gen Frontend Stack',
    },
    {
      id: 'performance-conscious',
      title: 'Performance-Conscious Development',
      description: 'Rigorous optimization for sub-second load times, clean semantic markup, optimized media, and stellar Core Web Vitals scores.',
      iconName: 'Zap',
      highlight: 'Sub-Second Speeds',
    },
    {
      id: 'business-focused',
      title: 'Business-Focused Website Solutions',
      description: 'We prioritize clear value presentation, effortless service navigation, and streamlined enquiry channels that turn visitors into paying customers.',
      iconName: 'Target',
      highlight: 'ROI & Enquiry Focused',
    },
  ],

  processSteps: [
    {
      step: 'Step 01',
      number: '01',
      title: 'Discovery',
      description: "Understand the client's business, goals and requirements.",
      details: [
        'In-depth discussion on target customers, services & unique value',
        'Analysis of design preferences, brand references & aesthetic direction',
        'Scope agreement, timeline definition, and deliverable blueprint'
      ],
      duration: '1 – 2 Days',
      deliverables: 'Project brief, content questionnaire & kickoff roadmap',
    },
    {
      step: 'Step 02',
      number: '02',
      title: 'Planning',
      description: 'Prepare the structure, content and design direction.',
      details: [
        'Page structure architecture, section hierarchy & sitemap drafting',
        'Content collection, headline drafting & service positioning review',
        'Visual moodboard, color palette & typography selection'
      ],
      duration: '2 – 3 Days',
      deliverables: 'Interactive wireframes & visual style guide',
    },
    {
      step: 'Step 03',
      number: '03',
      title: 'Design',
      description: 'Create the visual website experience.',
      details: [
        'High-fidelity desktop & mobile UI design creation',
        'Glassmorphism styling, micro-animations & 3D/visual asset staging',
        'Client review session with design refinements'
      ],
      duration: '3 – 5 Days',
      deliverables: 'Approved UI prototypes & finalized design tokens',
    },
    {
      step: 'Step 04',
      number: '04',
      title: 'Development',
      description: 'Build and test the responsive website.',
      details: [
        'Production frontend engineering with React, TypeScript & Tailwind',
        'Interactive animations, form validation & WhatsApp integration',
        'Cross-browser testing (Chrome, Safari, Firefox, Edge) & mobile QA'
      ],
      duration: '4 – 7 Days',
      deliverables: 'Staging preview build for client testing',
    },
    {
      step: 'Step 05',
      number: '05',
      title: 'Launch',
      description: 'Deploy the approved website and provide handover instructions.',
      details: [
        'Netlify / Cloud deployment with custom domain & SSL setup',
        'Search engine indexing submission, robots.txt & sitemap verification',
        'Clear documentation & handover instructions for ongoing peace of mind'
      ],
      duration: '1 Day',
      deliverables: 'Live production URL, source files & admin handover guide',
    },
  ] as ProcessStep[],

  pricingPlans: [
    {
      id: 'starter',
      name: 'STARTER',
      priceINR: 4999,
      priceUSD: 69,
      description: 'Ideal for single-service businesses, campaigns, and individuals needing a fast, professional online launch.',
      popular: false,
      features: [
        'Landing page (Single high-impact page)',
        'Responsive layout (Desktop, tablet & mobile)',
        'Contact section with lead enquiry form',
        'WhatsApp enquiry button integration',
        'Basic SEO setup (Meta tags, title & indexing)',
        'Social media links integration',
        'Fast cloud deployment on Netlify'
      ],
      notIncluded: [
        'Multi-page navigation',
        'Filterable project gallery',
        'Advanced custom 3D animations'
      ],
      ctaText: 'Choose Starter',
    },
    {
      id: 'professional',
      name: 'PROFESSIONAL',
      badge: 'MOST POPULAR',
      priceINR: 9999,
      priceUSD: 139,
      description: 'The complete digital agency package designed for established clinics, studios, architects and businesses.',
      popular: true,
      features: [
        'Multi-page business website (Up to 5 sections / pages)',
        'Custom bespoke design tailored to brand identity',
        'Interactive services section with details',
        'Project gallery / Portfolio showcase',
        'Functional contact form with validation',
        'WhatsApp integration with pre-filled message',
        'Basic SEO setup & Google indexing readiness',
        'Smooth scroll micro-animations & glassmorphic cards',
        'Netlify deployment & handover guide'
      ],
      ctaText: 'Choose Professional',
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      badge: 'FULL SUITE',
      priceINR: 19999,
      priceUSD: 279,
      description: 'For ambitious businesses and international companies seeking high-end visuals, advanced animations, and custom features.',
      popular: false,
      features: [
        'Advanced custom website (Up to 8+ pages / deep sections)',
        'Premium animations (Framer Motion + Three.js visual elements)',
        'Advanced filterable project gallery with detailed modal views',
        'Additional custom pages (Case studies, Careers, Calculator)',
        'Comprehensive enquiry functionality with multi-channel routing',
        'Advanced SEO setup (Structured data, schema & performance audit)',
        'Full deployment support & DNS domain connection',
        '30 days priority post-launch maintenance & tweaks'
      ],
      ctaText: 'Choose Premium',
    },
  ] as PricingPlan[],

  pricingDisclaimer: 'Final pricing depends on project requirements, content, integrations and scope. Domain, hosting, paid assets and third-party services may be charged separately.',

  faqs: [
    {
      id: 1,
      category: 'timeline',
      question: 'How long does it take to build a website?',
      answer: 'Typically, a Starter landing page is delivered within 3 to 5 business days, while a standard multi-page Professional business website takes 7 to 14 business days. Custom Premium websites with 3D or extensive galleries generally require 2 to 3 weeks depending on the promptness of content feedback.',
    },
    {
      id: 2,
      category: 'process',
      question: 'Can you create websites for any industry?',
      answer: 'Yes! We specialize in tailored websites for interior designers, architects, construction firms, dental and medical clinics, restaurants, fitness studios, coaching institutes, and growing small to medium enterprises, as well as international businesses.',
    },
    {
      id: 3,
      category: 'technical',
      question: 'Will my website work on mobile phones?',
      answer: 'Absolutely. Every website we engineer is built mobile-first and tested rigorously across iPhones, Android smartphones, tablets, laptops, and desktop displays to ensure zero horizontal scroll, fluid text scaling, and effortless touch interactions.',
    },
    {
      id: 4,
      category: 'process',
      question: 'Can I update my website after delivery?',
      answer: 'Yes. We structure projects with clean, modular code and clear configuration files for simple updates to text, phone numbers, and images. Additionally, we provide comprehensive handover instructions, or you can opt for our affordable monthly Website Maintenance service.',
    },
    {
      id: 5,
      category: 'pricing',
      question: 'Do you provide domain and hosting?',
      answer: 'We assist you in configuring your custom domain and deploy your website to fast, modern, global cloud networks like Netlify or Vercel (often with generous free-tier hosting for static and Jamstack sites). Third-party domain registration fees are paid directly to your preferred domain registrar (such as Namecheap or GoDaddy).',
    },
    {
      id: 6,
      category: 'pricing',
      question: 'How much does a website cost?',
      answer: 'Our transparent packages start at ₹4,999 ($69 USD) for Starter landing pages, ₹9,999 ($139 USD) for our popular Professional business package, and ₹19,999 ($279 USD) for full-featured Premium websites. Final pricing depends on specific custom features, integrations, and content scope.',
    },
    {
      id: 7,
      category: 'process',
      question: 'Do you provide website maintenance?',
      answer: 'Yes! We offer monthly maintenance packages starting at ₹2,499 / month ($35 USD / month). This covers security audits, routine text and portfolio additions, uptime checks, and priority technical support whenever you need assistance.',
    },
    {
      id: 8,
      category: 'process',
      question: 'How do I get started?',
      answer: 'Simply fill out our contact form below or click the floating WhatsApp button to message us directly. Share your business name, requirements, and timeline, and we will get back to you within 24 hours with a clear roadmap and quotation.',
    },
  ] as FaqItem[],

  legal: {
    privacyPolicy: {
      lastUpdated: 'October 2026',
      summary: 'At MK Web Studio, we respect your privacy and are committed to protecting the personal information you share with us when requesting project quotations, communicating via WhatsApp, or collaborating on digital web development projects.',
    },
  },
};
