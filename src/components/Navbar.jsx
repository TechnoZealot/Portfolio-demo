import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar fixed at the top with responsive mobile drawer.
 * Theme: Cyber-Emerald / Dark Mode (#0d1117 carbon, #10b981 neon emerald, #a3e635 bright lime).
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-5 px-3 sm:px-6 pointer-events-none">
      <nav
        className={`pointer-events-auto max-w-6xl mx-auto transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/30 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_25px_rgba(16,185,129,0.12)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/70 backdrop-blur-lg border-emerald-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_15px_rgba(16,185,129,0.06)] py-3 px-4 sm:px-6'
        }`}
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all">
              &gt;_
            </div>
            <div className="flex items-baseline">
              <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                HASINI
              </span>
              <span className="font-mono text-xs font-semibold text-emerald-400 ml-1">
                .DEV
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 ml-1.5 animate-pulse shadow-[0_0_6px_#10b981]" />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name.toLowerCase())}
                className="relative px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-white rounded-lg transition-all duration-200 group hover:bg-emerald-950/30"
              >
                <span className="relative z-10 group-hover:text-emerald-300 transition-colors">
                  {link.name}
                </span>
                {/* Subtle emerald neon underline effect */}
                <span className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </div>

          {/* Right Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Direct Connect / Status pill on desktop */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 rounded-xl hover:border-emerald-400 hover:text-white hover:bg-emerald-900/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>TERMINAL // CONNECT</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white hover:bg-emerald-950/50 border border-transparent hover:border-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Frosted Glass styling */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/15 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-emerald-300 hover:bg-emerald-950/40 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-emerald-500/60">&gt;</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block px-3 py-2 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 rounded-lg hover:border-emerald-400"
                >
                  🟢 CONNECT / HIRE
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

