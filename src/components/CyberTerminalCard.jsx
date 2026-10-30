import React, { useState } from 'react';

/**
 * CyberTerminalCard
 * A stylized cyber-security inspection HUD widget that showcases Hasini's
 * background, university details, and terminal proficiency.
 */
export default function CyberTerminalCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard?.writeText('curl -s https://hasini.dev/identity.json');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
      {/* Ambient glow behind card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-lime-500/10 to-emerald-500/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />

      {/* Terminal Container */}
      <div className="relative bg-[#0d1117] border border-emerald-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-xl font-mono text-xs sm:text-sm overflow-hidden">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-zinc-500 text-xs ml-2 select-none">hasini@sec-terminal:~</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400/80 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SEC_DEFENSE_V2.4</span>
          </div>
        </div>

        {/* Terminal Content Lines */}
        <div className="space-y-3 leading-relaxed">
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 select-none">&gt;</span>
            <span className="text-zinc-400">hasini.fetchProfile()</span>
          </div>

          <div className="bg-[#161b22]/70 border border-emerald-500/15 rounded-xl p-3 space-y-2 text-zinc-300">
            <div className="flex justify-between items-center text-xs text-zinc-400 border-b border-white/5 pb-1.5">
              <span>// IDENTITY VERIFICATION</span>
              <span className="text-emerald-400 font-semibold">[VERIFIED]</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-zinc-500">Degree: </span>
                <span className="text-white font-medium">B.E. Cyber Security</span>
              </div>
              <div>
                <span className="text-zinc-500">Year: </span>
                <span className="text-emerald-300 font-medium">2nd Year</span>
              </div>
              <div>
                <span className="text-zinc-500">Institution: </span>
                <span className="text-white font-medium">K.S. Institute of Tech</span>
              </div>
              <div>
                <span className="text-zinc-500">Status: </span>
                <span className="text-lime-400 font-medium">Available (Summer '25)</span>
              </div>
            </div>
          </div>

          {/* Core Specialization Pills */}
          <div>
            <p className="text-zinc-500 text-xs mb-1.5">// PRIMARY DOMAINS & TOOLKIT</p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Digital Forensics',
                'AI Security',
                'Penetration Testing',
                'Python & C++',
                'Wireshark',
                'React & Tailwind',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-emerald-950/50 border border-emerald-500/25 text-emerald-300 hover:border-lime-400/60 hover:text-white transition-colors"
                >
                  #{skill}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Copy Command */}
          <div className="pt-1 flex items-center justify-between text-zinc-400 text-xs bg-black/40 rounded-lg p-2 border border-emerald-500/10">
            <span className="truncate mr-2 font-mono text-emerald-400/90">
              $ ping hasini@ksit.ac.in
            </span>
            <button
              onClick={handleCopyCmd}
              type="button"
              className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 hover:text-white transition-colors text-[11px] border border-emerald-500/30 flex-shrink-0"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

