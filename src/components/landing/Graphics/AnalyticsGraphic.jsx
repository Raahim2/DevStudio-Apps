"use client";

import React from 'react';

export function AnalyticsGraphic() {
  return (
    <svg 
      viewBox="0 0 320 300" 
      className="w-full h-full max-w-[340px] max-h-[340px] overflow-visible"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Radial Background Glow */}
       

        {/* Neon Gradients */}
        <linearGradient id="neon-cyan-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="neon-pink-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d946ef" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* CSS Interactions & Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          .interactive-pillar {
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .pillar-top {
            transition: fill 0.3s ease, stroke 0.3s ease;
          }

          .pillar-left, .pillar-right {
            transition: fill 0.3s ease, stroke 0.3s ease;
          }

          /* Hover triggers lift-off and changes color profiles to neon */
          .interactive-pillar:hover {
            transform: translateY(-12px);
          }

          .interactive-pillar:hover .pillar-top {
            fill: url(#neon-pink-purple);
            stroke: #d946ef;
          }

          .interactive-pillar:hover .pillar-left {
            fill: #1e1b4b;
            stroke: #6366f1;
          }

          .interactive-pillar:hover .pillar-right {
            fill: #2e1045;
            stroke: #a21caf;
          }

          /* Pulse animations for floating elements */
          .animated-path {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            animation: drawWave 5s linear infinite alternate;
          }

          .floating-node {
            animation: bounceNode 3s ease-in-out infinite alternate;
          }

          .floating-node-delayed {
            animation: bounceNode 3s ease-in-out infinite alternate;
            animation-delay: 1s;
          }

          @keyframes drawWave {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes bounceNode {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-5px);
            }
          }
        ` }} />
      </defs>

      {/* Dark Isometric Base Card with Glow */}
      <rect width="100%" height="100%" fill="url(#graphic-bg-glow)" rx="16" />

      {/* Background Isometric Grid Mesh */}
      <g stroke="#1e293b" strokeWidth="0.75" opacity="0.4">
        <path d="M 40 210 L 160 270 M 80 190 L 200 250 M 120 170 L 240 230 M 160 150 L 280 210" />
        <path d="M 80 250 L 200 190 M 120 270 L 240 210 M 40 210 L 160 150 M 160 230 L 280 170" />
      </g>

      {/* Connection Rays (Grid line extensions up to data line nodes) */}
      <g stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.5">
        <line x1="80" y1="120" x2="80" y2="140" />
        <line x1="160" y1="50" x2="160" y2="80" />
        <line x1="240" y1="110" x2="240" y2="140" />
      </g>

      {/* Interactive Isometric Pillars */}
      <g strokeWidth="0.75">
        
        {/* Pillar A (Left Area) */}
        <g className="interactive-pillar">
          {/* Left Side */}
          <path className="pillar-left" fill="#09090b" stroke="#3f3f46" d="M 56 146 L 80 158 L 80 198 L 56 186 Z" />
          {/* Right Side */}
          <path className="pillar-right" fill="#18181b" stroke="#27272a" d="M 80 158 L 104 146 L 104 186 L 80 198 Z" />
          {/* Top Cap */}
          <path className="pillar-top" fill="#09090b" stroke="#52525b" d="M 80 134 L 104 146 L 80 158 L 56 146 Z" />
        </g>

        {/* Pillar B (Center Area - Tallest Metric) */}
        <g className="interactive-pillar">
          {/* Left Side */}
          <path className="pillar-left" fill="#09090b" stroke="#3f3f46" d="M 136 86 L 160 98 L 160 178 L 136 166 Z" />
          {/* Right Side */}
          <path className="pillar-right" fill="#18181b" stroke="#27272a" d="M 160 98 L 184 86 L 184 166 L 160 178 Z" />
          {/* Top Cap */}
          <path className="pillar-top" fill="#09090b" stroke="#52525b" d="M 160 74 L 184 86 L 160 98 L 136 86 Z" />
        </g>

        {/* Pillar C (Right Area) */}
        <g className="interactive-pillar">
          {/* Left Side */}
          <path className="pillar-left" fill="#09090b" stroke="#3f3f46" d="M 216 146 L 240 158 L 240 208 L 216 196 Z" />
          {/* Right Side */}
          <path className="pillar-right" fill="#18181b" stroke="#27272a" d="M 240 158 L 264 146 L 264 196 L 240 208 Z" />
          {/* Top Cap */}
          <path className="pillar-top" fill="#09090b" stroke="#52525b" d="M 240 134 L 264 146 L 240 158 L 216 146 Z" />
        </g>

      </g>

      {/* Floating Animated Neon Data Stream Path */}
      <path 
        className="animated-path" 
        stroke="url(#neon-cyan-blue)" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        filter="url(#glow-cyan)"
        d="M 40 155 C 60 135 70 120 80 120 C 95 120 105 100 120 100 C 140 100 150 50 160 50 C 175 50 185 130 200 130 C 220 130 230 110 240 110 C 255 110 265 130 280 150" 
      />

      {/* Interactive Data Node Points */}
      <g>
        {/* Node A (Left) */}
        <g className="floating-node">
          <circle cx="80" cy="120" r="5" fill="#06b6d4" filter="url(#glow-cyan)" />
          <circle cx="80" cy="120" r="2" fill="#ffffff" />
        </g>

        {/* Node B (Center Peak) */}
        <g className="floating-node-delayed">
          <circle cx="160" cy="50" r="6" fill="#d946ef" filter="url(#glow-purple)" />
          <circle cx="160" cy="50" r="2.5" fill="#ffffff" />
        </g>

        {/* Node C (Right) */}
        <g className="floating-node">
          <circle cx="240" cy="110" r="5" fill="#3b82f6" filter="url(#glow-cyan)" />
          <circle cx="240" cy="110" r="2" fill="#ffffff" />
        </g>
      </g>
    </svg>
  );
}
