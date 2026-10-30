import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WhyChooseUsSection } from './components/sections/WhyChooseUsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { PricingSection } from './components/sections/PricingSection';
import { FaqSection } from './components/sections/FaqSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { PrivacyPolicyModal } from './components/ui/PrivacyPolicyModal';

export const App: React.FC = () => {
  const [preselectedRequirement, setPreselectedRequirement] = useState<string>('');
  const [preselectedBudget, setPreselectedBudget] = useState<string>('');
  const [privacyModalOpen, setPrivacyModalOpen] = useState<boolean>(false);

  const handlePreselectService = (serviceName: string) => {
    setPreselectedRequirement(serviceName);
  };

  const handleSelectPlan = (planName: string, priceText: string) => {
    setPreselectedBudget(`${planName} (${priceText})`);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#f3f4f6] selection:bg-blue-600/30 selection:text-blue-200">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section with 3D Canvas & Atmospheric Orbs */}
        <HeroSection />

        {/* 2. About Section with 3 Value Cards & Interactive 3D Holographic Visual */}
        <AboutSection />

        {/* 3. Services Section with 6 Interactive Service Cards & Modal Specs */}
        <ServicesSection onPreselectService={handlePreselectService} />

        {/* 4. Featured Projects / Portfolio with Live Demos & Concept Modals */}
        <ProjectsSection />

        {/* 5. Why Choose MK Web Studio (Genuine Value & Engineering Standards) */}
        <WhyChooseUsSection />

        {/* 6. Our Work Process (Interactive Horizontal Desktop / Vertical Mobile Timeline) */}
        <ProcessSection />

        {/* 7. Transparent Pricing (Starter, Professional Popular, Premium + Currency Switcher) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 8. FAQ Accordion (8 In-depth Business & Technical Answers) */}
        <FaqSection />

        {/* 9. Contact Section with Netlify Form, Validation & Direct WhatsApp */}
        <ContactSection
          preselectedRequirement={preselectedRequirement}
          preselectedBudget={preselectedBudget}
        />
      </main>

      {/* Comprehensive Agency Footer */}
      <Footer onOpenPrivacyPolicy={() => setPrivacyModalOpen(true)} />

      {/* Persistent Floating WhatsApp Channel */}
      <FloatingWhatsApp />

      {/* Privacy Policy Legal Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default App;
