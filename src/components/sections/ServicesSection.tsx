import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import type { Service } from '../../types';
import { ServiceModal } from './ServiceModal';
import {
  Building2,
  Sparkles,
  ShoppingBag,
  Palette,
  RefreshCw,
  Wrench,
  ArrowRight,
  Layers,
} from 'lucide-react';

interface ServicesSectionProps {
  onPreselectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onPreselectService }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Icon mapping helper
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-pink-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-blue-400" />;
    }
  };

  const handleSelectService = (serviceName: string) => {
    if (onPreselectService) {
      onPreselectService(serviceName);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden bg-[#07070a]">
      {/* Ambient background accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERED FOR IMPACT.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              BUILT FOR GROWTH.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From single high-converting campaign landing pages to complex custom e-commerce experiences and architectural portfolio platforms.
          </p>
        </div>

        {/* 6 Interactive Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="group relative rounded-2xl glass-card p-7 border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between hover:bg-white/[0.04] hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Subtle top card index badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {getServiceIcon(service.iconName)}
                </div>
                <span className="font-mono text-xs text-slate-500 font-bold">
                  0{index + 1}
                </span>
              </div>

              {/* Title & Short Description */}
              <div className="mb-6 flex-1">
                <h3 className="font-heading text-xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Footer: Starting Price & Learn More Button */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">From</span>
                  <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {service.startingPrice}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 hover:underline cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={handleSelectService}
      />
    </section>
  );
};
