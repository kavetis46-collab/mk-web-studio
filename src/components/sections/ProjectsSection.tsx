import React, { useState } from 'react';
import { siteConfig } from '../../config/siteConfig';
import type { Project } from '../../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ExternalLink, Eye, Sparkles, FolderGit2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: 'All Showcase', value: 'all' },
    { label: 'Interior Design', value: 'interior' },
    { label: 'Healthcare & Dental', value: 'healthcare' },
    { label: 'Dining & Hospitality', value: 'restaurant' },
    { label: 'Construction & Infra', value: 'construction' },
    { label: 'Fitness & Sports', value: 'fitness' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? siteConfig.projects
    : siteConfig.projects.filter(p => p.categorySlug === selectedFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            PROVEN WORK.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              MEASURABLE EXCELLENCE.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Explore our featured client deployment and high-fidelity industry concepts engineered for conversion, prestige, and seamless customer engagement.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.value
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl glass-card overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 bg-gradient-to-b from-[#11121a]/80 via-[#0e0f17]/70 to-[#0a0a10]/80 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 p-6 sm:p-10 items-center">
                  {/* Visual Screenshot Side */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      {/* Image Preview */}
                      <img
                        src={project.image}
                        alt={`${project.name} design screenshot`}
                        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Status Overlay Badge */}
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md shadow-md ${
                            project.isLive
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full ${
                              project.isLive ? 'bg-emerald-400 animate-pulse' : 'bg-blue-400'
                            }`}
                          />
                          {project.isLive ? 'Live Deployed Project' : 'Concept Prototype'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Details Side */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-between`}>
                    <div>
                      {/* Category Pill */}
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>{project.category}</span>
                      </div>

                      {/* Name */}
                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {project.name}
                      </h3>

                      {/* Tagline */}
                      <div className="text-xs sm:text-sm font-medium text-slate-300 mb-4">
                        {project.tagline}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                      {project.isLive ? (
                        <>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs sm:text-sm hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-600/25 flex items-center gap-2 transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => setActiveProject(project)}
                            className="px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/10 text-xs sm:text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            <span>Case Specs</span>
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => setActiveProject(project)}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-xs sm:text-sm hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-purple-600/25 flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Concept Specs</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
