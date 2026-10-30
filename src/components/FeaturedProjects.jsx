import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

/**
 * FeaturedProjects Component
 * Responsive 3-column showcase with category filter pills and interactive 3D physics cards.
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 1,
      title: 'Network Strength Checker',
      categoryTag: 'Web App / Tool',
      categories: ['All', 'Web Apps', 'Mini-Projects'],
      stage: 'v1.4 Live',
      description:
        'Real-time diagnostic utility that monitors Wi-Fi signal attenuation, latency jitter, and packet loss across campus networks. Delivers instant bandwidth telemetry and automated channel interference recommendations for optimal workstation performance.',
      tags: ['React', 'Firebase', 'WebSockets', 'Tailwind'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hasini-dev/network-strength-checker',
    },
    {
      id: 2,
      title: 'Smart Attendance Tracker',
      categoryTag: 'Computer Vision',
      categories: ['All', 'AI / ML'],
      stage: 'Trained Model',
      description:
        'Automated facial recognition system eliminating manual roll calls by tracking student attendance through live webcam feeds. Integrates anti-spoofing liveness detection and exports instant attendance analytics directly into academic record databases.',
      tags: ['Python', 'OpenCV', 'Face Recognition', 'NumPy'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hasini-dev/smart-attendance-tracker',
    },
    {
      id: 3,
      title: 'Student Notes Marketplace',
      categoryTag: 'Full Stack',
      categories: ['All', 'Web Apps'],
      stage: 'Beta Release',
      description:
        'A peer-to-peer resource exchange platform empowering engineering students to upload, preview, and review verified semester notes. Built with fast full-text semantic searching, categorized subject trees, and a community upvoting trust rating.',
      tags: ['Tailwind', 'Node.js', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: 'https://github.com/hasini-dev/student-notes-marketplace',
    },
  ];

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(activeFilter)
  );

  return (
    <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-emerald-400 mb-2">
            <span>01 // SHOWCASE</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span className="text-zinc-500">ENGINEERING PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            Selected defensive utilities, vision pipelines, and full-stack applications crafted during my studies at KSIT.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex items-center flex-wrap gap-2 p-1.5 rounded-2xl bg-[#161b22]/80 border border-emerald-500/20 backdrop-blur-md">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === 'All'
                ? projectsData.length
                : projectsData.filter((p) => p.categories.includes(filter)).length;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-400 text-[#0d1117] font-bold shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-[1.02]'
                    : 'text-zinc-400 hover:text-white hover:bg-emerald-950/40'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-[#0d1117]/20 text-[#0d1117]'
                      : 'bg-[#0d1117] text-zinc-500 border border-emerald-500/15'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 border border-dashed border-emerald-500/20 rounded-2xl bg-[#161b22]/30">
          <p className="font-mono text-zinc-400 text-sm">No projects matching this filter yet.</p>
        </div>
      )}
    </section>
  );
}

