import React, { useState } from 'react';

/**
 * TechStack Component
 * Categorized interactive skill showcase with SVG icons, hover scale (scale-105),
 * emerald border glow, and interactive comfort-level tooltips.
 */
export default function TechStack() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    {
      title: 'Languages',
      badge: '01 // SYNTAX',
      skills: [
        {
          name: 'C / C++',
          level: 'Proficient',
          levelNote: 'Algorithms & Low-level Systems',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.394 6.003L13.606.928a3.21 3.21 0 00-3.212 0L1.606 6.003A3.21 3.21 0 000 8.784v10.152a3.21 3.21 0 001.606 2.781l8.788 5.075a3.21 3.21 0 003.212 0l8.788-5.075A3.21 3.21 0 0024 18.936V8.784a3.21 3.21 0 00-1.606-2.781zm-9.89 12.185a5.21 5.21 0 01-3.692 1.528c-2.88 0-5.214-2.335-5.214-5.216 0-2.88 2.334-5.215 5.214-5.215a5.2 5.2 0 013.692 1.528l-1.475 1.475a3.13 3.13 0 00-2.217-.917c-1.728 0-3.128 1.4-3.128 3.129 0 1.728 1.4 3.129 3.128 3.129.832 0 1.583-.327 2.217-.917l1.475 1.476zm6.344-4.168h-1.562v1.562h-1.042V14.02h-1.562v-1.041h1.562v-1.563h1.042v1.563h1.562v1.041zm4.167 0h-1.563v1.562H20.4V14.02h-1.563v-1.041h1.563v-1.563H21.44v1.563h1.563v1.041z"/>
            </svg>
          ),
        },
        {
          name: 'Python',
          level: 'Proficient',
          levelNote: 'Forensics, AI Models & Scripting',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.914 0C5.833 0 6.223 2.637 6.223 2.637l.007 2.732h5.792v.825H3.92S0 5.748 0 11.838c0 6.088 3.42 5.892 3.42 5.892h2.04v-2.868s-.11-3.42 3.365-3.42h5.783v-.84H8.81s-3.366.147-3.366-3.303c0-3.45 3.013-3.364 3.013-3.364h7.93s3.15.084 3.15 3.304v2.54h-1.897v.84h3.916S24 10.96 24 4.87c0-6.09-3.72-4.87-3.72-4.87H11.914zm-2.07 1.73a.972.972 0 110 1.944.972.972 0 010-1.944zm4.242 8.016s3.366-.147 3.366 3.303c0 3.45-3.013 3.364-3.013 3.364h-7.93s-3.15-.084-3.15-3.304v-2.54h1.897v-.84H4.34S2.012 9.53 2.012 15.62c0 6.09 3.72 4.87 3.72 4.87h8.354c6.082 0 5.692-2.637 5.692-2.637l-.007-2.732h-5.792v-.825h8.102s3.92.446 3.92-5.644c0-6.088-3.42-5.892-3.42-5.892h-2.04v2.868s.11 3.42-3.365 3.42h-5.783v.84h5.798zm2.07 12.524a.972.972 0 110-1.944.972.972 0 010 1.944z"/>
            </svg>
          ),
        },
        {
          name: 'JavaScript',
          level: 'Proficient',
          levelNote: 'Modern ES6+ & Async Web APIs',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0V0zm22.034 18.268c-.144-.897-.732-1.63-2.09-2.18-.553-.223-1.127-.417-1.72-.58-.87-.24-1.393-.574-1.393-1.144 0-.486.377-.852 1.054-.852.68 0 1.15.285 1.48.878l1.79-1.144c-.615-1.146-1.688-1.748-3.27-1.748-1.87 0-3.167 1.094-3.167 2.766 0 1.258.777 2.127 2.505 2.685.914.298 1.425.568 1.425 1.238 0 .584-.523.978-1.378.978-1.077 0-1.688-.56-2.167-1.442l-1.85 1.145c.74 1.492 1.95 2.298 4.017 2.298 2.27 0 3.444-1.192 3.444-2.822v-.002l.32-.266zm-8.815-6.666h-2.29v5.992c0 1.218-.08 2.008-.432 2.457-.353.45-.94.673-1.696.673-.654 0-1.19-.133-1.572-.377l-.48 1.838c.616.326 1.455.514 2.493.514 1.417 0 2.492-.516 3.125-1.496.536-.832.612-1.92.612-3.41v-6.191h.24z"/>
            </svg>
          ),
        },
        {
          name: 'Java',
          level: 'Familiar',
          levelNote: 'OOP, Multi-threading & APIs',
          color: 'lime',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.85 16.34s-.69.41.22.56c1.55.26 2.37.23 4.12-.2 0 0 .47.27.87.5-3.32 1.34-7.5-.18-5.21-.86zm-1.1-2.92s-.65.51.34.68c1.9.33 3.69.37 6.13-.27 0 0 .34.34.62.53-3.9 1.26-9.14.07-7.09-.94zm9.32-6.52s.82 1.05-.79 2.58c-2.02 1.92-4.5 2.87-7.79 3.06-.9.05-2.28-.1-2.28-.1s-.3.35-.12.56c.2.22.95.42 1.54.49 4.34.52 7.72-.51 9.87-2.6 2.38-2.31.86-3.83.86-3.83s.21-.08.34-.14c1.23-.55 1.56-1.5 1.56-1.5-.96.61-2.14.86-3.67 1.48zm-1.89-3.9s1.42 1.13-.42 3.12c-2.17 2.33-4.99 3.48-8.91 3.55-1.07.02-2.8-.2-2.8-.2s-.31.39-.12.63c.21.25 1.1.48 1.8.56 5.25.61 9.42-.64 12.06-3.23 2.92-2.86.74-4.32.74-4.32s.31-.11.49-.19c1.47-.69 1.88-1.92 1.88-1.92-1.18.77-2.67 1.08-4.72 2z"/>
            </svg>
          ),
        },
        {
          name: 'SQL',
          level: 'Proficient',
          levelNote: 'Relational Queries & Security Checks',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 6.5C8.13 8.5 5 7.38 5 6.5S8.13 4.5 12 4.5s7 1.12 7 2-3.13 2-7 2zm10 2.5c0 2.03-3.69 3.73-8.5 4.3v2.05c5.38-.55 9.5-2.71 9.5-5.35v-1zm-13.5 4.3C3.69 14.73 0 13.03 0 11v1c0 2.64 4.12 4.8 9.5 5.35v-2.05zm13.5 4.5c0 2.64-4.12 4.8-9.5 5.35v-2.05c4.81-.57 8.5-2.27 8.5-4.3v1zM0 16.5c0 2.64 4.12 4.8 9.5 5.35v-2.05c-4.81-.57-8.5-2.27-8.5-4.3v1z"/>
            </svg>
          ),
        },
        {
          name: 'Bash / Shell',
          level: 'Familiar',
          levelNote: 'Linux Sysadmin & CLI Automation',
          color: 'lime',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.5 4A2.5 2.5 0 000 6.5v11A2.5 2.5 0 002.5 20h19a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0021.5 4h-19zm4.207 4.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L8.586 13l-1.879-1.879a1 1 0 010-1.414zM13 14a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Frameworks & Tools',
      badge: '02 // TOOLKIT',
      skills: [
        {
          name: 'React',
          level: 'Proficient',
          levelNote: 'Hooks, Virtual DOM & State Architecture',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0-7C6.48 2.5 2 6.75 2 12s4.48 9.5 10 9.5 10-4.25 10-9.5S17.52 2.5 12 2.5zm0 17.5c-4.97 0-9-3.81-9-8.5S7.03 3 12 3s9 3.81 9 8.5-4.03 8.5-9 8.5z"/>
            </svg>
          ),
        },
        {
          name: 'Tailwind CSS',
          level: 'Proficient',
          levelNote: 'Responsive Cyber Layouts & Glassmorphism',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
            </svg>
          ),
        },
        {
          name: 'Node.js',
          level: 'Familiar',
          levelNote: 'Express Server & RESTful APIs',
          color: 'lime',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 10.8c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4zM21.5 6.3l-8.7-5a1.6 1.6 0 00-1.6 0l-8.7 5A1.6 1.6 0 001.7 7.7v10a1.6 1.6 0 00.8 1.4l8.7 5a1.6 1.6 0 001.6 0l8.7-5a1.6 1.6 0 00.8-1.4v-10a1.6 1.6 0 00-.8-1.4zm-9.5 13.9l-6.8-3.9V8.6l6.8-3.9 6.8 3.9v7.7l-6.8 3.9z"/>
            </svg>
          ),
        },
        {
          name: 'Git & GitHub',
          level: 'Proficient',
          levelNote: 'Branching, Rebasing & Team Workflows',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          ),
        },
        {
          name: 'Linux / Kali',
          level: 'Proficient',
          levelNote: 'Shell Environment, Permissions & Net tools',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C7.2 0 6 3.8 6 6.5c0 1.5.3 3.1 1.1 4.3-.8.7-1.4 1.7-1.7 2.8-.7.2-1.4.6-1.9 1.2-.8 1-.9 2.3-.3 3.4.6 1.1 1.7 1.8 2.9 1.8h11.8c1.2 0 2.3-.7 2.9-1.8.6-1.1.5-2.4-.3-3.4-.5-.6-1.2-1-1.9-1.2-.3-1.1-.9-2.1-1.7-2.8.8-1.2 1.1-2.8 1.1-4.3C18 3.8 16.8 0 12 0zm-2 6c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm4 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
            </svg>
          ),
        },
        {
          name: 'Wireshark',
          level: 'Familiar',
          levelNote: 'Packet Inspection & PCAP Analysis',
          color: 'lime',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.93V18h-2v-1.07c-2.83-.48-5-2.94-5-5.93h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.99-2.17 5.45-5 5.93zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
            </svg>
          ),
        },
        {
          name: 'Docker',
          level: 'Currently Learning',
          levelNote: 'Isolated Sandboxes & Containers',
          color: 'cyan',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.186.186.186zm5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185zm-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zm-2.928 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.208a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185zM23.792 11.5c-.2-.04-.848-.124-1.745.39-.376.216-.764.53-1.127.917-.184-.035-.375-.054-.572-.054-.606 0-1.196.18-1.704.512C17.26 9.68 15.112 8.5 12.632 8.5H1.42C.635 8.5 0 9.135 0 9.92v2.793c0 3.313 2.687 6 6 6h7.625c4.767 0 8.788-3.327 9.878-7.854.404.08.775.05.998-.01.373-.1.493-.248.5-.259.043-.053.076-.118.064-.188a.22.22 0 00-.273-.102z"/>
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Core CS Concepts',
      badge: '03 // THEORY & ARCHITECTURE',
      skills: [
        {
          name: 'Data Structures & Algorithms',
          level: 'Proficient',
          levelNote: 'Trees, Graphs, DP & Asymptotics',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 15v-2h-3v2h-2v-4h2v2h3v-2a2 2 0 00-2-2h-3V7h2V3h-4v4h2v2H9V7h2V3H7v4h2v2H6a2 2 0 00-2 2v2h3v-2h2v4H9v-2H6v2a2 2 0 002 2h3v2H9v4h4v-4h-2v-2h2a2 2 0 002-2v-2h2v2h3a2 2 0 002-2z"/>
            </svg>
          ),
        },
        {
          name: 'Object-Oriented Programming (OOP)',
          level: 'Proficient',
          levelNote: 'Abstraction, Inheritance & Clean Code',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L5.8 7.64 12 11.13l6.2-3.49L12 4.15z"/>
            </svg>
          ),
        },
        {
          name: 'DBMS & Relational Design',
          level: 'Familiar',
          levelNote: 'Normalization, ACID & Index Optimization',
          color: 'lime',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 6V4h16v2H4zm0 5V9h16v2H4zm0 5v-2h16v2H4zm0 5v-2h16v2H4z"/>
            </svg>
          ),
        },
        {
          name: 'Operating Systems (OS)',
          level: 'Proficient',
          levelNote: 'Process Sched, Virtual Memory & Threads',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm4 4v12l8-6-8-6z"/>
            </svg>
          ),
        },
        {
          name: 'Computer Networks',
          level: 'Proficient',
          levelNote: 'TCP/IP, Routing, TLS/SSL & Sockets',
          color: 'emerald',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
          ),
        },
        {
          name: 'AI & Security Systems',
          level: 'Currently Learning',
          levelNote: 'Threat Modeling & Adversarial Defense',
          color: 'cyan',
          icon: (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          ),
        },
      ],
    },
  ];

  const getBadgeLevelStyles = (level) => {
    switch (level) {
      case 'Proficient':
        return {
          pill: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300',
          dot: 'bg-emerald-400',
          tooltipBorder: 'border-emerald-500/50',
          tooltipText: 'text-emerald-300',
        };
      case 'Familiar':
        return {
          pill: 'bg-lime-950/40 border-lime-500/30 text-lime-300',
          dot: 'bg-lime-400',
          tooltipBorder: 'border-lime-500/50',
          tooltipText: 'text-lime-300',
        };
      case 'Currently Learning':
      default:
        return {
          pill: 'bg-teal-950/40 border-teal-500/30 text-teal-300',
          dot: 'bg-teal-400 animate-pulse',
          tooltipBorder: 'border-teal-500/50',
          tooltipText: 'text-teal-300',
        };
    }
  };

  return (
    <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-emerald-500/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-emerald-400 mb-2">
            <span>02 // ARSENAL</span>
            <span className="w-8 h-[1px] bg-emerald-500/40" />
            <span className="text-zinc-500">TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">Skills</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
            A categorized breakdown of tools, frameworks, and system principles I leverage for software and defensive security engineering.
          </p>
        </div>

        {/* Legend / Comfort Level Guide */}
        <div className="flex items-center flex-wrap gap-3 font-mono text-xs p-2 rounded-xl bg-[#161b22]/70 border border-emerald-500/20 backdrop-blur-md">
          <span className="text-zinc-500 text-[11px] uppercase tracking-wider mr-1">// COMFORT:</span>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span>Proficient</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_8px_#a3e635]" />
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_#2dd4bf]" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-2xl bg-[#0d1117]/80 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 p-6 sm:p-7 shadow-[0_8px_24px_rgba(0,0,0,0.5)] group"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-emerald-500/15 pb-4 mb-6">
                <div>
                  <span className="font-mono text-[11px] text-emerald-400 tracking-wider">
                    {cat.badge}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5">
                    {cat.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-500 px-2 py-0.5 rounded bg-[#161b22] border border-white/5">
                  {cat.skills.length} skills
                </span>
              </div>

              {/* Badges Flow */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => {
                  const style = getBadgeLevelStyles(skill.level);

                  return (
                    <div
                      key={sIdx}
                      className="group/badge relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#161b22]/90 border border-emerald-500/20 hover:border-emerald-400 hover:scale-105 hover:shadow-[0_0_18px_rgba(16,185,129,0.35)] transition-all duration-200 cursor-pointer select-none"
                    >
                      {/* Tech Icon */}
                      <span className="text-emerald-400 group-hover/badge:text-white transition-colors">
                        {skill.icon}
                      </span>

                      {/* Name */}
                      <span className="font-mono text-xs sm:text-sm font-medium text-zinc-200 group-hover/badge:text-white transition-colors">
                        {skill.name}
                      </span>

                      {/* Micro Status Dot */}
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />

                      {/* Interactive Tooltip on Hover */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover/badge:opacity-100 group-hover/badge:-translate-y-1 transition-all duration-200 z-30 whitespace-nowrap">
                        <div
                          className={`px-3 py-1.5 rounded-lg bg-[#0d1117] border ${style.tooltipBorder} shadow-[0_10px_25px_rgba(0,0,0,0.8)] backdrop-blur-md text-center`}
                        >
                          <div className="flex items-center justify-center gap-1.5 font-mono text-[11px] font-bold">
                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                            <span className={style.tooltipText}>{skill.level}</span>
                          </div>
                          <div className="font-mono text-[10px] text-zinc-400 mt-0.5">
                            {skill.levelNote}
                          </div>
                        </div>
                        {/* Caret pointing down */}
                        <div className="w-2 h-2 bg-[#0d1117] border-b border-r border-emerald-500/40 rotate-45 mx-auto -mt-1" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Sub-footer insight */}
            <div className="mt-8 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-zinc-500 font-mono text-[11px]">
              <span>// STATUS: ACTIVE LAB</span>
              <span className="text-emerald-400/80">VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

