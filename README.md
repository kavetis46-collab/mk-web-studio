# MK Web Studio — Premium Digital Agency Website

> **"Transforming Businesses Into Digital Experiences."**

MK Web Studio is a premier, dark-themed, AI-assisted digital agency website engineered for high-conversion web design and development. Tailored for interior designers, architects, healthcare clinics, restaurants, fitness studios, construction companies, coaching institutes, and ambitious businesses worldwide.

---

## 🌟 Key Highlights & Architectural Features

- **Atmospheric Dark Aesthetic**: Deep charcoal (`#070709`) and obsidian palette with electric blue, violet, and magenta lighting accents.
- **3D WebGL Hero Canvas**: Custom hardware-accelerated Three.js icosahedron core, celestial orbit rings, and 450+ particle stardust galaxy with real-time mouse-tracking parallax.
- **Interactive Hologram & Telemetry HUD**: Live 3D WebGL torus visual and responsive device simulation in the About section.
- **Featured Projects Showcase**:
  - **Zaksy Studio**: Luxury Interior Design website with working live demo ([https://zaksy-studio-website.netlify.app/](https://zaksy-studio-website.netlify.app/)).
  - **Dental Clinic Concept**: Interactive healthcare prototype with online appointment request workflows.
  - **Restaurant Dining Concept**: Fine dining menu showcase and digital table reservation channel.
  - **Construction Infra Concept**: Civil infrastructure tender and industrial specifications showcase.
  - **Fitness Studio Concept**: High-performance athletics and VIP trial pass booking portal.
- **Interactive Capabilities**: 6 core services with in-depth deliverable modals.
- **5-Stage Work Process**: Horizontal animated milestone timeline on desktop, vertical responsive accordion on mobile.
- **Transparent Pricing**: Basic ($149 / ₹12,499 - 1-page website), Standard ($299 / ₹24,999 - Up to 5 pages, Most Popular), and Premium ($499 / ₹41,999 - Up to 8 pages) with an instant USD/INR currency toggle for domestic and international clients.
- **Netlify Forms Ready**: Production contact form with client-side validation and Netlify Forms integration (`data-netlify="true"`).
- **Persistent WhatsApp Trigger**: Floating WhatsApp widget with prefilled enquiry message generator.
- **SEO & Performance Engineered**: Sub-second load times, OpenGraph metadata, `sitemap.xml`, `robots.txt`, and clean semantic markup.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **3D Graphics**: [Three.js](https://threejs.org/) (WebGL hardware accelerated)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand SVG Monograms
- **Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Hosting Platform**: [Netlify](https://www.netlify.com/) (Edge CDN with automated forms)

---

## 🚀 Quick Start Guide

### 1. Prerequisites
Ensure you have Node.js (v18+ recommended, v22 tested) installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

---

## ⚙️ Easy Customization & Configuration

All agency details, phone numbers, email addresses, pricing tiers, services, and projects are centralized in a single configuration file:

👉 **[`src/config/siteConfig.ts`](./src/config/siteConfig.ts)**

### To Update Contact Information:
```typescript
// src/config/siteConfig.ts
export const siteConfig = {
  contact: {
    email: 'mkwebstdio@gmail.com',
    phoneDisplay: '+91 91821 26238',
    phoneRaw: '919182126238',
    location: 'Hyderabad, Telangana, India',
    // ...
  },
  whatsapp: {
    number: '919182126238', // Active studio WhatsApp number
    defaultMessage: "Hello MK Web Studio! I'm interested in creating a website for my business...",
  },
  // ...
};
```

### To Add or Modify Portfolio Projects:
Simply edit the `projects` array in `src/config/siteConfig.ts`. Each project supports:
- `name`, `category`, `categorySlug`
- `isLive` (set to `true` for live client sites, `false` for concept prototypes)
- `liveUrl` (link to deployed site)
- `features`, `techStack`, `image`

---

## 🌐 Netlify Deployment Instructions

This repository is pre-configured with `netlify.toml` and static form detection.

### Option A: One-Click Netlify Git Connection (Recommended)
1. Push this repository to GitHub or GitLab.
2. In your Netlify dashboard, click **"Add new site"** -> **"Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will automatically detect:
   - **Build Command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.
6. Form submissions from the Contact section will automatically arrive in your **Netlify Forms** inbox without requiring any backend server!

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## 📄 License & Attribution

© 2026 **MK Web Studio**. All rights reserved.
Built for high-performance business conversion and luxury digital presence.
