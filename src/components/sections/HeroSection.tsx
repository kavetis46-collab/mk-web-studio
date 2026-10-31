import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Hero3DCanvas } from '../3d/Hero3DCanvas';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Globe2, Layers, CheckCircle } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      {/* 3D WebGL Canvas Layer */}
      <Hero3DCanvas />

      {/* Atmospheric Glowing Background Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse duration-1000" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Small Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-blue-500/30 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-200 uppercase">
            {siteConfig.brand.heroLabel}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] sm:leading-[1.08]"
        >
          WE BUILD WEBSITES THAT{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
            BUILD BUSINESSES.
          </span>
        </motion.h1>

        {/* Supporting Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed"
        >
          {siteConfig.brand.heroSubheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            onClick={() => scrollTo('#projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 backdrop-blur-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Let's Talk</span>
          </button>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl text-left"
        >
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 hover:border-blue-500/20 transition-colors">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Custom Engineering</div>
              <div className="text-[11px] text-slate-400">Tailored, zero-template</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 hover:border-purple-500/20 transition-colors">
            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">AI-Assisted Precision</div>
              <div className="text-[11px] text-slate-400">Fast, optimized delivery</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 hover:border-emerald-500/20 transition-colors">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Sub-Second Speed</div>
              <div className="text-[11px] text-slate-400">100% Core Web Vitals</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3 hover:border-pink-500/20 transition-colors">
            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Global Reach</div>
              <div className="text-[11px] text-slate-400">India &amp; International</div>
            </div>
          </div>
        </motion.div>

        {/* Sectors Served Marquee/Pill Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-3xl"
        >
          <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-blue-400" /> Tailored for:
          </span>
          {siteConfig.targetAudiences.map((aud) => (
            <span
              key={aud}
              className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] text-slate-300 border border-white/5 hover:border-white/15 transition-colors"
            >
              {aud}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
