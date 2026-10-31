import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            <div className="p-6 pb-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Privacy Policy
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    MK Web Studio • Effective October 2026
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                At <strong>MK Web Studio</strong>, accessible from https://mkwebstudio.com, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information that is collected and recorded by MK Web Studio and how we use it.
              </p>

              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider pt-2">
                1. Information We Collect
              </h4>
              <p>
                When you contact us via our project request form, WhatsApp, or email, we collect personal contact details including your full name, business name, email address, phone number, and project scope requirements. This information is provided voluntarily by you to facilitate communication and project quotation.
              </p>

              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider pt-2">
                2. How We Use Your Information
              </h4>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
                <li>To formulate accurate technical scopes and cost proposals.</li>
                <li>To communicate project milestones, updates, and schedule reviews.</li>
                <li>To comply with legal obligations and invoicing standards.</li>
                <li>We do not sell, rent, or monetize client data to third-party advertisers.</li>
              </ul>

              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider pt-2">
                3. Data Security &amp; Confidentiality
              </h4>
              <p>
                We implement industry standard encryption and access controls. Any client design files, domain credentials, or project intellectual property shared with MK Web Studio are treated with strict confidentiality.
              </p>

              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider pt-2">
                4. Contact Information
              </h4>
              <p>
                If you have questions or require further information regarding our privacy practices, please contact us at <strong>mkwebstdio@gmail.com</strong> or via WhatsApp at our official studio contact.
              </p>
            </div>

            <div className="p-4 bg-[#090a10] border-t border-white/10 text-right">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
