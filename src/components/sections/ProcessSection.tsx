import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { CheckCircle2, Clock, GitCommit, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = siteConfig.processSteps[activeStepIndex];

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden bg-[#070709]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <GitCommit className="w-3.5 h-3.5" />
            <span>Workflow &amp; Milestones</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            OUR PROVEN{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              WORK PROCESS.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A structured, transparent 5-stage blueprint that takes your concept from initial vision to a polished, high-performing live website.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Step Selector Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Connecting Bar Line */}
            <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 bg-white/10 -z-0" />
            <div 
              className="absolute top-1/2 left-8 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-0 transition-all duration-500"
              style={{ width: `${(activeStepIndex / (siteConfig.processSteps.length - 1)) * 92}%` }}
            />

            {/* Step Nodes */}
            <div className="relative z-10 flex items-center justify-between">
              {siteConfig.processSteps.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                const isPassed = activeStepIndex >= idx;

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white scale-110 shadow-purple-500/40 ring-4 ring-purple-500/20'
                          : isPassed
                          ? 'bg-[#151624] text-blue-300 border border-blue-500/40'
                          : 'bg-[#0f1018] text-slate-400 border border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      {step.number}
                    </div>
                    <span
                      className={`mt-3 text-xs font-semibold tracking-wide uppercase transition-colors ${
                        isActive ? 'text-blue-300' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline Accordion */}
        <div className="lg:hidden space-y-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {siteConfig.processSteps.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeStepIndex === idx
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'bg-white/[0.04] text-slate-400 border border-white/10'
                }`}
              >
                {step.number}. {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Highlighted Detail Card */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 border border-white/10 bg-gradient-to-b from-[#10121c]/90 via-[#0d0e17]/80 to-[#090a10]/90 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  {activeStep.step}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  Estimated Time: {activeStep.duration}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {activeStep.title}: {activeStep.description}
              </h3>

              {/* Step Key Deliverable Badge */}
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <span>
                  <strong>Key Deliverable:</strong> {activeStep.deliverables}
                </span>
              </div>

              {/* Detailed Points */}
              <div className="space-y-3 pt-2">
                {activeStep.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Right Navigation Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Next Progression
                </div>
                <div className="text-sm text-slate-300 leading-relaxed">
                  Every step features client approval checkpoints, ensuring total alignment before moving forward to the subsequent phase.
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 cursor-pointer"
                >
                  ← Previous Step
                </button>

                <button
                  disabled={activeStepIndex === siteConfig.processSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(siteConfig.processSteps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-semibold flex items-center gap-1.5 disabled:opacity-30 cursor-pointer transition-colors"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
