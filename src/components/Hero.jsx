import React from 'react';
import CyberTerminalCard from './CyberTerminalCard';

/**
 * Hero Section
 * Cyber-Emerald / Dark Mode Opening Screen for Hasini
 * Background: Deep matte carbon (#0d1117), Neon emerald (#10b981), Bright lime (#a3e635)
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Radial Glowing Orbs (Pure Emerald & Lime - strictly no blue gradients) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge: Animated Blinking Radar Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-md mb-6 hover:border-emerald-400/60 transition-all group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_10px_#10b981]" />
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-zinc-100 flex items-center gap-1.5">
                <span>Student Developer</span>
                <span className="text-lime-400 font-bold">//</span>
                <span className="text-emerald-300">Open for Internships</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Hey, I am{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-lime-300 drop-shadow-[0_0_35px_rgba(16,185,129,0.4)]">
                  Hasini
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full opacity-60" />
              </span>{' '}
              <br className="hidden sm:inline" />
              <span className="text-zinc-100">
                — Building the Future of Tech.
              </span>
            </h1>

            {/* Student Bio */}
            <p className="text-base sm:text-lg lg:text-xl text-zinc-300 leading-relaxed max-w-2xl mb-8">
              <span className="text-white font-medium">2nd Year Cyber Security Student</span>{' '}
              at{' '}
              <span className="text-emerald-400 font-medium border-b border-emerald-500/30 hover:border-emerald-400 transition-colors">
                K.S. Institute of Technology
              </span>
              , passionate about{' '}
              <span className="text-emerald-300 font-medium">digital forensics</span>,{' '}
              <span className="text-lime-400 font-medium">AI security</span>, and
              solving real-world defensive engineering challenges.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              {/* Primary Glowing Emerald Button */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-sm sm:text-base text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />
                <span>View My Projects</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

              {/* Secondary Outline Button */}
              <a
                href="#resume"
                className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-medium text-sm sm:text-base text-zinc-200 bg-[#0d1117]/70 hover:bg-emerald-950/40 border border-emerald-500/40 hover:border-lime-400/80 hover:text-white backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(163,230,53,0.25)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 text-emerald-400 group-hover:text-lime-300 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume / CV</span>
              </a>
            </div>

            {/* Quick Metrics / Cyber Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-emerald-500/20 w-full max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white flex items-center">
                  <span>2nd</span>
                  <span className="text-xs text-emerald-400 ml-1 font-sans">YEAR</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Cyber Sec @ KSIT
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                  <span>10+</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Labs & CTF Projects
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-lime-400 flex items-center">
                  <span>ACTIVE</span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  Internship Hunting
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Terminal Card */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <CyberTerminalCard />
          </div>
        </div>
      </div>
    </section>
  );
}

