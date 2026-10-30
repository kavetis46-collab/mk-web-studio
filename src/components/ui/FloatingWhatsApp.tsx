import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const encodedMsg = encodeURIComponent(siteConfig.whatsapp.defaultMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodedMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Direct WhatsApp Redirection Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Direct WhatsApp Chat"
        title="Direct Chat on WhatsApp: +91 91821 26238"
      >
        {/* Animated Ping Indicator */}
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
      </a>
    </div>
  );
};
