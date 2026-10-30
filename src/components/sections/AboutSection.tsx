import React from 'react';
import { TechVisual3D } from '../3d/TechVisual3D';
import { Palette, Code2, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const valueCards = [
    {
      number: '01',
      title: 'Creative Design',
      description: 'Modern, visually engaging designs tailored to each business.',
      icon: Palette,
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'group-hover:border-blue-500/40',
      iconColor: 'text-blue-400',
      badge: 'Bespoke Aesthetic',
      points: [
        'Custom visual identity suited to your sector',
        'Clean editorial typography & spacing hierarchy',
        'Contemporary glassmorphism & dark aesthetics'
      ]
    },
    {
      number: '02',
      title: 'Smart Development',
      description: 'Responsive, fast and functional websites built around business requirements.',
      icon: Code2,
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
      badge: 'Modern Stack',
      points: [
        'React, TypeScript & Tailwind CSS architecture',
        '100% fluid mobile, tablet & desktop responsiveness',
        'Instant sub-second loading speeds on all networks'
      ]
    },
    {
      number: '03',
      title: 'Business-Focused Approach',
      description: 'Websites designed to present services clearly and make it easy for customers to enquire.',
      icon: TrendingUp,
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
      badge: 'High Conversion',
      points: [
        'Clear service presentation & customer reassurance',
        'Seamless WhatsApp and validated inquiry forms',
        'Engineered to turn traffic into qualified clients'
      ]
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WE TURN IDEAS INTO{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              DIGITAL EXPERIENCES.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            MK Web Studio helps businesses create a professional online presence through modern website design, responsive development and thoughtful digital experiences.
          </p>
        </div>

        {/* Two-Column Grid: Value Cards on Left, Interactive 3D Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3 Value Cards */}
          <div className="lg:col-span-7 space-y-5">
            {valueCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.number}
                  className={`group relative rounded-2xl glass-card p-6 border border-white/10 ${card.borderColor} transition-all duration-300 hover:bg-white/[0.04]`}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon and Number */}
                    <div className="flex flex-col items-center gap-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 ${card.iconColor} shadow-md`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-500">
                        {card.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                          {card.badge}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-3">
                        {card.description}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-1.5 pt-1">
                        {card.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: 3D Holographic Visual with Telemetry HUD */}
          <div className="lg:col-span-5">
            <TechVisual3D />
          </div>
        </div>
      </div>
    </section>
  );
};
