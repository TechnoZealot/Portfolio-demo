import React, { useState, useRef } from 'react';

/**
 * ProjectCard Component
 * Implements interactive 3D perspective tilt physics, hover elevation (-6px),
 * soft emerald edge glow, and a dynamic cursor-following shine effect.
 */
export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate 3D tilt angles (subtle ±8 to ±10 degrees)
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px) scale3d(1.02, 1.02, 1.02)`
    );

    // Update cursor-following specular shine highlight
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset back to flat baseline
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)');
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.25s ease'
          : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.45s ease',
        transformStyle: 'preserve-3d',
      }}
      className={`relative flex flex-col justify-between rounded-2xl bg-[#0d1117]/80 backdrop-blur-xl border border-emerald-500/20 p-6 sm:p-7 overflow-hidden will-change-transform ${
        isHovered
          ? 'border-emerald-400/60 shadow-[0_12px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.3)]'
          : 'shadow-[0_8px_24px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Specular Holographic Glare / Shine Effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 280px at ${glare.x}% ${glare.y}%, rgba(16, 185, 129, 0.18), rgba(163, 230, 53, 0.08) 35%, transparent 70%)`,
        }}
      />

      {/* Decorative Cyber Corner Accents */}
      <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
        <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-emerald-400/50" />
      </div>

      <div>
        {/* Top Header: Category Tag & Status Dot */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
            {project.categoryTag}
          </span>
          <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px]">{project.stage}</span>
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-300 transition-colors">
          {project.title}
        </h3>

        {/* 2-Sentence Impactful Description */}
        <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-mono text-xs px-2.5 py-1 rounded-lg bg-[#161b22] text-zinc-300 border border-emerald-500/20 hover:border-emerald-400/50 hover:text-emerald-300 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons: Live Demo & GitHub Code */}
      <div className="flex items-center gap-3 pt-4 border-t border-emerald-500/15 relative z-20">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#0d1117] bg-emerald-400 hover:bg-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.35)] hover:shadow-[0_0_20px_rgba(16,185,129,0.6)] transition-all duration-200 cursor-pointer"
        >
          <span>Live Demo</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-zinc-300 hover:text-white bg-[#161b22]/90 hover:bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400/70 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>GitHub Code</span>
        </a>
      </div>
    </div>
  );
}

