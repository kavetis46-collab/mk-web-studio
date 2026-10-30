import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import { X, Send } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState(siteConfig.whatsapp.defaultMessage);

  const isConfigured = siteConfig.whatsapp.isConfigured && Boolean(siteConfig.whatsapp.number);

  const handleLaunchWhatsApp = () => {
    if (!isConfigured) {
      // Fallback: scroll to contact section
      const contact = document.querySelector('#contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const encoded = encodeURIComponent(customMsg || siteConfig.whatsapp.defaultMessage);
    const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0e1017] border border-white/15 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                  MK
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0e1017]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm leading-tight">
                  MK Web Studio
                </h4>
                <p className="text-[11px] text-emerald-100">
                  {isConfigured ? 'Direct Developer Channel • Online' : 'Studio Contact Available'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#090a10] space-y-3">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-slate-300 leading-relaxed">
              👋 Hello! How can we assist with your business website today? Edit your message below or send directly.
            </div>

            <textarea
              rows={3}
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-black/50 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-colors"
              placeholder="Type your message..."
            />

            <button
              onClick={handleLaunchWhatsApp}
              className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
            >
              <span>{isConfigured ? 'Open in WhatsApp' : 'Contact Us via Form'}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transform hover:scale-105 transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp chat window"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>

        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
