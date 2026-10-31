import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { CheckCircle2, Sparkles, HelpCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan?: (planName: string, priceText: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const handleChoosePlan = (planName: string, priceText: string) => {
    if (onSelectPlan) {
      onSelectPlan(planName, priceText);
    }
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden bg-[#08090d]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Investment Options</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TRANSPARENT PRICING.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              ZERO HIDDEN FEES.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Choose a predictable development tier tailored to your business scale. From fast-launch 1-page websites to multi-page flagship digital platforms.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              USD ($) Standard
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              INR (₹) Domestic
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {siteConfig.pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'glass-card border-2 border-purple-500/60 shadow-2xl shadow-purple-600/20 bg-gradient-to-b from-[#151324] via-[#10101b] to-[#0a0a12] lg:-translate-y-2'
                    : 'glass-card border border-white/10 hover:border-white/20 bg-[#0c0d15]/80 hover:bg-[#0e0f19]'
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-lg shadow-purple-600/40">
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Info */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading text-xl font-bold text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {plan.badge && !isPopular && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  {/* Scope Badge */}
                  {plan.scope && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-3">
                      <span>Scope: {plan.scope}</span>
                    </div>
                  )}

                  <p className="text-xs text-slate-400 mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  {/* Price Tag with both Dollars and Rupees */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">
                      Starting Investment
                    </span>
                    <div className="flex items-baseline gap-2.5 flex-wrap">
                      <span className="font-heading text-4xl sm:text-5xl font-black text-white">
                        {currency === 'USD' ? `$${plan.priceUSD}` : `₹${plan.priceINR.toLocaleString('en-IN')}`}
                      </span>
                      <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-300">
                        {currency === 'USD' ? `₹${plan.priceINR.toLocaleString('en-IN')} INR` : `$${plan.priceUSD} USD`}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-2 flex-wrap">
                      <span className="text-purple-300 font-semibold">${plan.priceUSD} USD</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-medium">₹{plan.priceINR.toLocaleString('en-IN')} INR</span>
                      <span>•</span>
                      <span className="text-slate-300 font-medium">{plan.scope}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Included In This Package:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div>
                  <button
                    onClick={() => handleChoosePlan(plan.name, `$${plan.priceUSD} USD / ₹${plan.priceINR.toLocaleString('en-IN')}`)}
                    className={`w-full py-3.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:brightness-110'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note / Disclaimer specified in prompt */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl glass-card border border-white/10 max-w-3xl mx-auto flex items-start gap-3 bg-white/[0.02]">
          <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            {siteConfig.pricingDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
