import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStack from './components/TechStack';
import EducationJourney from './components/EducationJourney';
import MatrixGridCanvas from './components/MatrixGridCanvas';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-300 font-sans overflow-x-hidden">
      {/* HTML5 Canvas Background Effect: Interactive Matrix Dot Grid */}
      <MatrixGridCanvas />

      {/* Floating Frosted-Glass Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Intro 'Hero' Screen */}
        <Hero />

        {/* 01 // Featured Projects Showcase */}
        <FeaturedProjects />

        {/* 02 // Tech Stack & Skills Showcase */}
        <TechStack />

        {/* 03 // Education & Campus Journey (Timeline + Achievement Badges) */}
        <EducationJourney />

        {/* 04 // About Section */}
        <section id="about" className="relative z-10 max-w-6xl mx-auto px-4 py-20 border-t border-emerald-500/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">04 //</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-[1px] flex-grow bg-emerald-500/20 ml-4 max-w-xs" />
          </div>
          <div className="bg-[#161b22]/70 border border-emerald-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
              I am a second-year student studying Cyber Security Engineering at 
              <strong className="text-emerald-400 font-medium"> K.S. Institute of Technology, Bengaluru</strong>. 
              My engineering interests center around digital forensics analysis, AI system hardening, and network penetration testing. 
              I love turning complex security paradigms into elegant, robust, and dependable real-world software.
            </p>
          </div>
        </section>

        {/* 05 // Contact Section */}
        <section id="contact" className="relative z-10 max-w-6xl mx-auto px-4 py-20 border-t border-emerald-500/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">05 //</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
            <div className="h-[1px] flex-grow bg-emerald-500/20 ml-4 max-w-xs" />
          </div>
          <div className="bg-gradient-to-b from-[#161b22] to-[#0d1117] border border-emerald-500/30 rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-2xl">
            <span className="inline-block p-3 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <h3 className="text-2xl font-bold text-white mb-2">Open For Summer Internships</h3>
            <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
              Looking for cyber security, software engineering, or AI defense roles. My inbox is always open.
            </p>
            <a
              href="mailto:hasini@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1"
            >
              <span>Transmit Message</span>
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      {/* Cyber Footer */}
      <footer className="relative z-10 border-t border-emerald-500/10 py-8 px-4 text-center font-mono text-xs text-zinc-500">
        <p>© 2026 Hasini. Crafted with React & Tailwind CSS // Cyber-Emerald Edition</p>
      </footer>
    </div>
  );
}
