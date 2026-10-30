import React, { useState } from 'react';

/**
 * EducationJourney Component
 * An engaging college journey showcase with a vertical illuminated emerald timeline
 * and a 2x2 grid of accomplishment badges with subtle hover glows.
 */
export default function EducationJourney() {
  const [hoveredBadge, setHoveredBadge] = useState(null);

  const timelineMilestones = [
    {
      year: '2026',
      status: 'CURRENT PHASE',
      title: 'Pre-Final Year Cyber Security & Hackathon Finalist',
      institution: 'K.S. Institute of Technology, Bengaluru',
      description:
        'Leading defensive security research projects, focusing on memory forensics and competing as a finalist in collegiate cyber hackathons.',
      isCurrent: true,
      tag: 'Present',
    },
    {
      year: '2025',
      status: 'MILESTONE',
      title: 'Core Technical Club Member & Web Lead',
      institution: 'KSIT Student Tech Chapter',
      description:
        'Spearheaded hands-on student workshops on network inspection, CTF fundamentals, and developed modern event portals for campus symposiums.',
      isCurrent: false,
      tag: 'Leadership',
    },
    {
      year: '2024',
      status: 'GENESIS',
      title: 'Began B.E. Degree & Shipped First Web Application',
      institution: 'Department of Cyber Security, KSIT',
      description:
        'Commenced undergraduate studies in Cyber Security Engineering, established strong foundations in C++ & Data Structures, and built first full-stack projects.',
      isCurrent: false,
      tag: 'Foundations',
    },
  ];

  const achievements = [
    {
      id: 1,
      icon: '🏆',
      title: '1st Place - University Hackathon',
      subtitle: 'Secured top honors with an automated security scanning prototype.',
      badge: 'Gold Medalist',
      glow: 'emerald',
    },
    {
      id: 2,
      icon: '⚡',
      title: '150+ LeetCode Problems Solved',
      subtitle: 'Consistent daily problem-solving across Trees, Graphs, DP & DSA.',
      badge: 'Top 15% Rank',
      glow: 'lime',
    },
    {
      id: 3,
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'Orchestrated campus capture-the-flag competitions & git bootcamps.',
      badge: 'Campus Lead',
      glow: 'emerald',
    },
    {
      id: 4,
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Credentialed in modern React, RESTful architectures & web security.',
      badge: 'Verified Credential',
      glow: 'lime',
    },
  ];

  return (
    <section id="campus-life" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-emerald-500/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-emerald-400 mb-2">
            <span>03 // ACADEMIA & LEADERSHIP</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span className="text-zinc-500">STUDENT TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Campus Journey</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            My collegiate milestones at K.S. Institute of Technology, key student leadership initiatives, and technical recognitions.
          </p>
        </div>

        {/* Institution Badge Pill */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#161b22]/80 border border-emerald-500/20 backdrop-blur-md font-mono text-xs text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>K.S. INSTITUTE OF TECHNOLOGY, BENGALURU</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
        {/* Left Column: Interactive Vertical Timeline (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative pl-6 sm:pl-8">
            {/* Illuminated Emerald Timeline Spine */}
            <div
              className="absolute top-3 bottom-6 left-[11px] sm:left-[15px] w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.4)]"
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-12">
              {timelineMilestones.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Glowing Nodal Dot */}
                  <div
                    className="absolute -left-[30px] sm:-left-[39px] top-1.5 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    {item.isCurrent ? (
                      <span className="relative flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-[#0d1117] border-2 border-emerald-400 shadow-[0_0_15px_#10b981] items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        </span>
                      </span>
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-[#0d1117] border-2 border-emerald-500/60 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_#10b981] transition-all flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 group-hover:bg-emerald-300" />
                      </span>
                    )}
                  </div>

                  {/* Milestone Content Card */}
                  <div className="rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border border-emerald-500/20 group-hover:border-emerald-500/50 p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_20px_rgba(16,185,129,0.15)]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-base sm:text-lg font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                          {item.year}
                        </span>
                        <span className="text-zinc-600 font-mono">//</span>
                        <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                          {item.status}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-emerald-200 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mb-3">
                      {item.institution}
                    </div>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Achievement Badges Grid (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-2">
                <span>// KEY ACCOMPLISHMENTS</span>
              </h3>
              <span className="text-xs font-mono text-zinc-500">4 MILESTONES</span>
            </div>

            {/* 2x2 Compact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((item) => {
                const isHovered = hoveredBadge === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredBadge(item.id)}
                    onMouseLeave={() => setHoveredBadge(null)}
                    className={`relative rounded-2xl bg-[#0d1117]/85 backdrop-blur-xl border p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isHovered
                        ? 'border-emerald-400/80 -translate-y-1.5 shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_25px_rgba(16,185,129,0.25)] bg-[#161b22]'
                        : 'border-emerald-500/20 shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
                    }`}
                  >
                    <div>
                      {/* Badge Icon & Category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                          {item.icon}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950/70 border border-emerald-500/30 text-emerald-300">
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                        {item.title}
                      </h4>

                      {/* Brief Subtitle */}
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    {/* Subtle micro footer indicator */}
                    <div className="mt-4 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                      <span>VERIFIED</span>
                      <span className="text-emerald-400">✓</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Academic Focus Card */}
          <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-[#161b22]/70 to-[#0d1117] border border-emerald-500/25 p-5 backdrop-blur-md font-mono text-xs">
            <div className="flex items-center gap-2 text-emerald-300 mb-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>ACADEMIC FOCUS & CTF LABS</span>
            </div>
            <p className="text-zinc-400 leading-relaxed font-sans text-xs">
              Actively preparing for defensive security competitions, vulnerability assessments, and maintaining a high academic standing at KSIT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

