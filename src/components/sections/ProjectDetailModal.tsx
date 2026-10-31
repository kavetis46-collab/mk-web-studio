import React from 'react';
import type { Project } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Tag, Sparkles } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
            className="relative w-full max-w-4xl bg-[#0c0d14] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Top Gradient Banner */}
            <div 
              className="h-1.5 w-full"
              style={{ backgroundColor: project.accentColor }}
            />

            {/* Modal Header */}
            <div className="p-5 sm:p-7 pb-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <span 
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    project.isLive 
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30' 
                      : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                  }`}
                >
                  {project.isLive ? '● Live Deployed Project' : 'Concept Design Prototype'}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-slate-500" />
                  {project.category}
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Title & Tagline */}
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {project.tagline}
                </p>
              </div>

              {/* Large Project Visual Preview */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={`${project.name} high resolution interface preview`} 
                  className="w-full h-auto object-cover max-h-[420px]"
                  loading="lazy"
                />
                {project.isLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-black/90 flex items-center gap-2 shadow-lg transition-all"
                  >
                    <span>Launch Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Architecture &amp; Objectives
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Core Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" /> Key Features &amp; User Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-blue-400" /> Engineered With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 sm:p-7 bg-[#08090f] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                {project.isLive 
                  ? 'Deployed to global edge CDN via Netlify.' 
                  : 'Interactive concept available for client custom build.'}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {project.isLive ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs sm:text-sm hover:from-emerald-500 hover:to-teal-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      onClose();
                      const contact = document.querySelector('#contact');
                      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:from-blue-500 hover:to-purple-500 flex items-center justify-center gap-2 shadow-lg shadow-purple-600/20 cursor-pointer"
                  >
                    <span>Request Custom Build Similar To This</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
