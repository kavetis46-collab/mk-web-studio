import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import {
  PenTool,
  Smartphone,
  MessageSquare,
  Cpu,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getAdvantageIcon = (name: string) => {
    switch (name) {
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-pink-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden bg-[#08090e]">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Studio Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WHY CLIENTS TRUST{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              MK WEB STUDIO.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We focus on genuine craftsmanship, transparent developer communication, clean technical execution, and websites engineered to drive real business value.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.whyChooseUs.map((item, idx) => (
            <div
              key={item.id}
              className="group relative rounded-2xl glass-card p-7 border border-white/10 hover:border-blue-500/30 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-white/[0.04] hover:-translate-y-1.5"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {getAdvantageIcon(item.iconName)}
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-500">
                  0{idx + 1}
                </span>
              </div>

              <div className="inline-block text-[11px] font-semibold text-blue-400 mb-2">
                {item.highlight}
              </div>

              <h3 className="font-heading text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Standards & Production Integrity Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl glass-card border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-black/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0 md:pr-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-center md:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Transparent Collaboration
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct access to your developer without layers of account executives. Rapid turnarounds, clear milestones, and weekly progress demos.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:px-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-center md:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Full Code Ownership
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero vendor lock-in. You receive 100% of your source code, assets, repository access, and handover documentation upon completion.
              </p>
            </div>

            <div className="pt-4 md:pt-0 md:pl-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-center md:justify-start gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Global Standards
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Engineered in Hyderabad, India to international standards. Built for speed, mobile responsiveness, and enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
