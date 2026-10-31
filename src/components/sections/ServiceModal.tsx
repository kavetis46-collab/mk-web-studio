import React from 'react';
import type { Service } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, Zap, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectService,
}) => {
  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Dialog */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#0e0f17] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header Ambient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Service Specification</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Detailed Description */}
              <p className="text-base text-slate-300 leading-relaxed">
                {service.detailedDescription}
              </p>

              {/* Quick Specs Pill Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-400" /> Typical Timeline
                  </span>
                  <span className="text-sm font-bold text-white">{service.timeline}</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                    Starting Investment
                  </span>
                  <span className="text-sm font-bold text-emerald-400">{service.startingPrice}</span>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                  Included Deliverables &amp; Milestones:
                </h4>
                <div className="space-y-2.5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-300 block mb-1">
                  Ideal For:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-[#090a10] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Have questions? We can customize this scope to fit your exact needs.
              </div>
              <button
                onClick={() => {
                  onSelectService(service.title);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Enquire About This Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
