// components/landing/Component.jsx
'use client';

import React from 'react';

export function AnalyticsGraphic2() {
  return (
    <svg 
      viewBox="0 0 500 450" 
      className="w-full h-full max-w-[480px] max-h-[480px] overflow-visible select-none"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Ambient background depth glow */}
        <radialGradient id="analytics-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#18181b" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
        </radialGradient>

        {/* Ambient chassis shadows */}
        <radialGradient id="panel-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#020204" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
        </radialGradient>

        {/* Shaded area chart monochrome gradient */}
        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        {/* Neon blur filter for data focus nodes */}
        <filter id="data-glow" x="-45%" y="-45%" width="190%" height="190%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="ambient-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Hardware-Accelerated Exploded View Animation Engine */}
        <style dangerouslySetInnerHTML={{ __html: `
          .panel-1,
          .panel-2,
          .panel-3,
          .inter-link {
            transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease, opacity 0.7s ease;
          }

          /* Default 3D Isometric Layout positions */
          .panel-1 { 
            transform: translate(165px, 245px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78); 
            filter: drop-shadow(-8px 12px 6px rgba(0, 0, 0, 0.4));
          }
          .panel-2 { 
            transform: translate(335px, 225px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78); 
            filter: drop-shadow(-8px 12px 6px rgba(0, 0, 0, 0.4));
          }
          .panel-3 { 
            transform: translate(250px, 140px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78); 
            filter: drop-shadow(-10px 14px 7px rgba(0, 0, 0, 0.45));
          }
          .inter-link {
            opacity: 0.35;
          }

          /* Exploded View Hover States */
          svg:hover .panel-1 {
            transform: translate(135px, 275px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78);
            filter: drop-shadow(-16px 26px 12px rgba(0, 0, 0, 0.5));
          }
          svg:hover .panel-2 {
            transform: translate(365px, 255px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78);
            filter: drop-shadow(-16px 26px 12px rgba(0, 0, 0, 0.5));
          }
          svg:hover .panel-3 {
            transform: translate(250px, 95px) rotate(-30deg) skewX(30deg) scale(0.9, 0.78);
            filter: drop-shadow(-22px 34px 16px rgba(0, 0, 0, 0.55));
          }
          svg:hover .inter-link {
            opacity: 0.75;
            stroke-dasharray: 4 6;
            animation: flow-speed 1s linear infinite !important;
          }

          /* Core rotating systems */
          @keyframes spin-cw {
            to { stroke-dashoffset: -120; }
          }
          @keyframes spin-ccw {
            to { stroke-dashoffset: 120; }
          }
          .orbit-cw {
            stroke-dasharray: 8 16;
            animation: spin-cw 8s linear infinite;
          }
          .orbit-ccw {
            stroke-dasharray: 6 12;
            animation: spin-ccw 6s linear infinite;
          }

          /* Flowing dashes on standard lasers */
          @keyframes flow-speed {
            to { stroke-dashoffset: -40; }
          }
          .laser-flow {
            stroke-dasharray: 8 12;
            animation: flow-speed 2.5s linear infinite;
          }

          @keyframes signal-dot {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
          .pulse-dot {
            animation: signal-dot 2.5s infinite ease-in-out;
          }
        ` }} />
      </defs>

      {/* Ambient background card canvas */}
      <rect width="100%" height="100%" fill="url(#analytics-bg-glow)" rx="16" />

      {/* Ambient grounding shadows underneath layout */}
      <ellipse cx="250" cy="320" rx="170" ry="70" fill="url(#panel-shadow)" />

      {/* --- LAYER 1: BASE SYSTEM COORDINATE AXES (No text) --- */}
      <g stroke="#27272a" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round">
        <line x1="250" y1="320" x2="130" y2="250" />
        <line x1="250" y1="320" x2="370" y2="250" />
        <line x1="250" y1="320" x2="250" y2="380" />

        {/* Dynamic target signal pulses */}
        <circle className="pulse-dot" cx="130" cy="250" r="2.5" fill="#a1a1aa" />
        <circle className="pulse-dot" cx="370" cy="250" r="2.5" fill="#a1a1aa" style={{ animationDelay: '0.8s' }} />
        <circle className="pulse-dot" cx="250" cy="380" r="2.5" fill="#a1a1aa" style={{ animationDelay: '1.6s' }} />
      </g>

      {/* --- LAYER 2: INTER-PANEL LASER STRUCTURAL CABLES --- */}
      <g stroke="#ffffff" strokeWidth="1.25" strokeLinecap="round">
        {/* Dynamic linking lasers tracking the exploded movement */}
        <path className="inter-link laser-flow" d="M 250 140 L 165 245" />
        <path className="inter-link laser-flow" d="M 250 140 L 335 225" />
        <path className="inter-link laser-flow" d="M 165 245 L 335 225" stroke="#52525b" />
      </g>

      {/* --- LAYER 3: PANEL 1 - LAYERED AREA TREND CHART (Bottom Left) --- */}
      <g className="panel-1">
        {/* Semi-transparent glassmorphism background panel */}
        <rect x="-60" y="-45" width="120" height="90" rx="14" fill="#111115" fillOpacity="0.85" stroke="#3f3f46" strokeWidth="1" />

        {/* Back Grid Lines */}
        <g stroke="#27272a" strokeWidth="0.75" opacity="0.4">
          <line x1="-50" y1="-20" x2="50" y2="-20" />
          <line x1="-50" y1="5" x2="50" y2="5" />
          <line x1="-50" y1="30" x2="50" y2="30" />
        </g>

        {/* Graph Area Fill */}
        <path d="M -50 30 L -50 5 C -25 -25 -10 -5 10 -35 C 25 -55 40 -10 50 -10 L 50 30 Z" fill="url(#area-gradient)" />
        
        {/* Interactive glowing dataset trendline */}
        <path d="M -50 5 C -25 -25 -10 -5 10 -35 C 25 -55 40 -10 50 -10" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Peak focal point representation */}
        <circle cx="10" cy="-35" r="3.5" fill="#ffffff" filter="url(#data-glow)" />
      </g>

      {/* --- LAYER 4: PANEL 2 - ORBITAL RADIAL ANALYTICS (Bottom Right) --- */}
      <g className="panel-2">
        {/* Semi-transparent glassmorphism background panel */}
        <rect x="-65" y="-55" width="130" height="110" rx="16" fill="#111115" fillOpacity="0.85" stroke="#3f3f46" strokeWidth="1" />

        {/* Concentric telemetry rings */}
        <g strokeLinecap="round">
          {/* Outer high-performance track */}
          <circle cx="0" cy="-6" r="32" stroke="#27272a" strokeWidth="4.5" />
          <circle className="orbit-cw" cx="0" cy="-6" r="32" stroke="#ffffff" strokeWidth="4.5" />

          {/* Inner channel segments */}
          <circle cx="0" cy="-6" r="22" stroke="#18181b" strokeWidth="3.5" />
          <circle className="orbit-ccw" cx="0" cy="-6" r="22" stroke="#71717a" strokeWidth="3.5" />
        </g>

        {/* Abstract channel color-bar modules underneath */}
        <g>
          <rect x="-42" y="34" width="22" height="6" rx="3" fill="#a1a1aa" />
          <rect x="-16" y="34" width="30" height="6" rx="3" fill="#27272a" />
          <rect x="18" y="34" width="24" height="6" rx="3" fill="#3f3f46" />
        </g>
      </g>

      {/* --- LAYER 5: PANEL 3 - 3D TOPOGRAPHIC DATA LANDSCAPE MESH (Top Center) --- */}
      <g className="panel-3">
        {/* Ambient floating blur glow backing the landscape */}
        <ellipse cx="0" cy="5" rx="45" ry="25" fill="#ffffff" opacity="0.1" filter="url(#ambient-blur)" />

        {/* Semi-transparent glassmorphism background panel */}
        <rect x="-60" y="-50" width="120" height="100" rx="14" fill="#111115" fillOpacity="0.8" stroke="#3f3f46" strokeWidth="1" />

        {/* 3D Topographic Mesh Grid Network */}
        <g stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round">
          {/* Undulating Isometric Horizon Waves */}
          {/* Wave 1 (Backmost) */}
          <path d="M -45 10 Q -25 -25 0 -5 T 45 15" stroke="#52525b" strokeWidth="0.75" />
          {/* Wave 2 (Middle) */}
          <path d="M -45 20 Q -25 -15 0 5 T 45 25" stroke="#a1a1aa" strokeWidth="1" />
          {/* Wave 3 (Frontmost peak) */}
          <path d="M -45 30 Q -25 -5 0 15 T 45 35" stroke="#ffffff" strokeWidth="1.25" />

          {/* Vertical Grid Topographic Intersections */}
          <g stroke="#3f3f46" strokeWidth="0.5" strokeOpacity="0.6">
            <line x1="-45" y1="10" x2="-45" y2="30" />
            <line x1="-22.5" y1="-12" x2="-22.5" y2="23" />
            <line x1="0" y1="-5" x2="0" y2="25" />
            <line x1="22.5" y1="1" x2="22.5" y2="28" />
            <line x1="45" y1="15" x2="45" y2="35" />
          </g>
        </g>

        {/* Active peak signal beacon */}
        <circle cx="-22.5" cy="-12" r="2.5" fill="#ffffff" filter="url(#data-glow)" />
      </g>

      {/* --- LAYER 6: ALIGNMENT DECALS (Textless) --- */}
      <g stroke="#27272a" strokeWidth="1" opacity="0.4">
        {/* Top-Left calibration bracket */}
        <path d="M 35 35 L 25 35 L 25 45" fill="none" />
        <line x1="25" y1="25" x2="45" y2="25" strokeDasharray="2 2" />

        {/* Top-Right calibration bracket */}
        <path d="M 465 35 L 475 35 L 475 45" fill="none" />
        <line x1="475" y1="25" x2="455" y2="25" strokeDasharray="2 2" />

        {/* Bottom-Left target crosshair */}
        <path d="M 25 415 L 35 415 M 30 410 L 30 420" />
      </g>
    </svg>
  );
}