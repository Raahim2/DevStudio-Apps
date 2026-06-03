'use client';

import React from 'react';

export  function ComputeGraphic() {
  return (
    <svg 
      viewBox="0 0 320 320" 
      className="w-full h-full max-w-[320px] max-h-[320px] overflow-visible select-none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Dynamic Glowing Gradients */}
      
        <linearGradient id="cyber-cyan-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="cyber-magenta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        {/* Embedded Keyframes and Interaction Logic */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Hardware-accelerated smooth float cycles */
          @keyframes float-tier-1 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes float-tier-2 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-9px); }
          }
          @keyframes float-tier-3 {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-13px); }
          }
          @keyframes float-pillar-l {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }
          @keyframes float-pillar-r {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-7px); }
          }

          /* Interactive Core Components */
          .interactive-node {
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
          }

          .node-face {
            transition: fill 0.4s ease, stroke 0.4s ease, fill-opacity 0.4s ease;
          }

          /* Default Static Theme Colors */
          .plate-outline { stroke: #1e293b; transition: stroke 0.4s ease; }
          .accent-glow { stroke: #334155; stroke-opacity: 0.5; transition: stroke 0.4s ease, stroke-opacity 0.4s ease; }
          
          .face-top { fill: #0b0f19; fill-opacity: 0.95; stroke: #334155; stroke-width: 0.75; }
          .face-left { fill: #05070c; fill-opacity: 0.95; stroke: #1e293b; stroke-width: 0.75; }
          .face-right { fill: #111827; fill-opacity: 0.95; stroke: #334155; stroke-width: 0.75; }

          /* Dynamic Floating Layers Assignments */
          .tier-1 { animation: float-tier-1 5s ease-in-out infinite; }
          .tier-2 { animation: float-tier-2 5.5s ease-in-out infinite; }
          .tier-3 { animation: float-tier-3 6s ease-in-out infinite; }
          .pillar-left { animation: float-pillar-l 4.5s ease-in-out infinite; }
          .pillar-right { animation: float-pillar-r 4.5s ease-in-out infinite; }

          /* Data packet streaming path animation */
          .stream-path {
            stroke-dasharray: 6 18;
            animation: stream-flow 2s linear infinite;
          }
          @keyframes stream-flow {
            to { stroke-dashoffset: -24; }
          }

          /* Hover State Overrides - Vibrant bioluminescent highlights */
          .interactive-node:hover {
            animation-play-state: paused !important;
            transform: translateY(-16px) !important;
            filter: drop-shadow(0 0 10px rgba(6, 182, 212, 0.6));
          }

          .interactive-node:hover .face-top {
            fill: url(#cyber-cyan-grad);
            fill-opacity: 0.35;
            stroke: #22d3ee;
          }
          .interactive-node:hover .face-left {
            fill: #083344;
            stroke: #06b6d4;
          }
          .interactive-node:hover .face-right {
            fill: #155e75;
            stroke: #22d3ee;
          }

          /* Special Magenta overrides for the core nodes */
          .core-node:hover {
            filter: drop-shadow(0 0 12px rgba(236, 72, 153, 0.7));
          }
          .core-node:hover .face-top {
            fill: url(#cyber-magenta-grad);
            fill-opacity: 0.45;
            stroke: #f43f5e;
          }
          .core-node:hover .face-left {
            fill: #4c0519;
            stroke: #e11d48;
          }
          .core-node:hover .face-right {
            fill: #881337;
            stroke: #f43f5e;
          }

          /* Base Board Hover Reactive Stroke */
          .interactive-node:hover ~ .base-socket .accent-glow {
            stroke: #22d3ee;
            stroke-opacity: 0.9;
          }
        ` }} />
      </defs>

      {/* Main Panel Canvas */}
      <rect width="100%" height="100%" fill="url(#cyber-bg-glow)" rx="20" />

      {/* Base Circuit Plate (Base Socket) */}
      <g className="base-socket">
        {/* 3D Base Plate Side Edges */}
        <path className="plate-outline" fill="#02040a" d="M 50 225 L 160 280 L 160 285 L 50 230 Z" />
        <path className="plate-outline" fill="#090d16" d="M 160 280 L 270 225 L 270 230 L 160 285 Z" />
        {/* Base Plate Surface */}
        <path className="plate-outline" fill="#05070f" d="M 160 170 L 270 225 L 160 280 L 50 225 Z" />

        {/* Engraved Motherboard Circuit Tracks */}
        <path className="accent-glow" strokeWidth="1" fill="none" d="M 160 185 L 240 225 L 160 265 L 80 225 Z" />
        <path className="accent-glow" strokeWidth="0.75" fill="none" d="M 160 195 L 210 220 L 160 245 L 110 220 Z" />
        <path className="accent-glow" strokeWidth="0.5" fill="none" d="M 160 170 L 160 280 M 50 225 L 270 225" />
      </g>

      {/* Dynamic Laser Feed Lines (Vertical Projection Beams) */}
      <g opacity="0.6">
        {/* Left Link Beam */}
        <path stroke="#1e293b" strokeWidth="1" d="M 90 190 L 90 120" />
        <path className="stream-path" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" d="M 90 190 L 90 120" />

        {/* Right Link Beam */}
        <path stroke="#1e293b" strokeWidth="1" d="M 230 190 L 230 120" />
        <path className="stream-path" stroke="#22d3ee" strokeWidth="1.25" strokeLinecap="round" d="M 230 190 L 230 120" />

        {/* Central Core Connection Line */}
        <path stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3" d="M 160 225 L 160 50" />
      </g>

      {/* Floating Left Storage / Memory Column */}
      <g className="interactive-node pillar-left">
        <path className="node-face face-left" d="M 75 127.5 L 90 135 L 90 165 L 75 157.5 Z" />
        <path className="node-face face-right" d="M 90 135 L 105 127.5 L 105 157.5 L 90 165 Z" />
        <path className="node-face face-top" d="M 90 120 L 105 127.5 L 90 135 L 75 127.5 Z" />
        {/* Glowing Node Core Indicator */}
        <circle cx="90" cy="147.5" r="2" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)" />
      </g>

      {/* Floating Right Storage / Memory Column */}
      <g className="interactive-node pillar-right">
        <path className="node-face face-left" d="M 215 127.5 L 230 135 L 230 165 L 215 157.5 Z" />
        <path className="node-face face-right" d="M 230 135 L 245 127.5 L 245 157.5 L 230 165 Z" />
        <path className="node-face face-top" d="M 230 120 L 245 127.5 L 230 135 L 215 127.5 Z" />
        {/* Glowing Node Core Indicator */}
        <circle cx="230" cy="147.5" r="2" fill="#06b6d4" filter="drop-shadow(0 0 3px #06b6d4)" />
      </g>

      {/* Central Holographic / Quantum Core Stack */}
      <g>
        {/* Core Tier 1 (Lowest Central Ring) */}
        <g className="interactive-node core-node tier-1">
          <path className="node-face face-left" d="M 136 154 L 160 166 L 160 174 L 136 162 Z" />
          <path className="node-face face-right" d="M 160 166 L 184 154 L 184 162 L 160 174 Z" />
          <path className="node-face face-top" d="M 160 142 L 184 154 L 160 166 L 136 154 Z" />
        </g>

        {/* Core Tier 2 (Middle Central Ring) */}
        <g className="interactive-node core-node tier-2">
          <path className="node-face face-left" d="M 136 114 L 160 126 L 160 134 L 136 122 Z" />
          <path className="node-face face-right" d="M 160 126 L 184 114 L 184 122 L 160 134 Z" />
          <path className="node-face face-top" d="M 160 102 L 184 114 L 160 126 L 136 114 Z" />
        </g>

        {/* Core Tier 3 (Highest Central Ring) */}
        <g className="interactive-node core-node tier-3">
          <path className="node-face face-left" d="M 136 74 L 160 86 L 160 94 L 136 82 Z" />
          <path className="node-face face-right" d="M 160 86 L 184 74 L 184 82 L 160 94 Z" />
          <path className="node-face face-top" d="M 160 62 L 184 74 L 160 86 L 136 74 Z" />
        </g>
      </g>

     

      {/* Symmetrical Interface Corner Crosshairs */}
      <g stroke="#334155" strokeWidth="0.75" opacity="0.4">
        <path d="M 15 25 L 21 25 M 15 25 L 15 19" />
        <path d="M 305 25 L 299 25 M 305 25 L 305 19" />
        <path d="M 15 295 L 21 295 M 15 295 L 15 301" />
        <path d="M 305 295 L 299 295 M 305 295 L 305 301" />
      </g>
    </svg>
  );
}