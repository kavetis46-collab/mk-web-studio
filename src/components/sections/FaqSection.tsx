import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1); // Default first question open

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-[#07070a]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            FREQUENTLY ASKED{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              QUESTIONS.
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Everything you need to know about our web development process, pricing structure, and ongoing support.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {siteConfig.faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'glass-card border-blue-500/40 bg-[#0f111c]/90 shadow-xl shadow-blue-500/5'
                    : 'bg-[#0a0b12]/60 border-white/10 hover:border-white/20 hover:bg-[#0d0e17]'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="font-mono text-xs text-blue-400 font-normal">
                      0{faq.id}.
                    </span>
                    <span>{faq.question}</span>
                  </span>

                  <div
                    className={`p-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400 bg-blue-500/10 border-blue-500/30' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Answer Area */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p className="pl-6 border-l-2 border-blue-500/40">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick CTA Bottom */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-card border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-heading text-base font-bold text-white">
              Have a distinct question not listed here?
            </h4>
            <p className="text-xs text-slate-400">
              Reach out directly on WhatsApp or submit our project contact form.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>Contact Studio</span>
          </a>
        </div>
      </div>
    </section>
  );
};
