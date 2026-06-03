"use client";

import React from 'react';

export function OrbitalGraphic() {
  return (
    <svg 
      viewBox="0 0 320 320" 
      className="w-full h-full max-w-[320px] max-h-[320px] overflow-visible select-none gyro-container"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Deep Core Background Glow */}
       

        {/* Central Core Hot Plasma Gradient */}
        <radialGradient id="plasma-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#ec4899" />
          <stop offset="70%" stopColor="#a855f7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
        </radialGradient>

        {/* Technical Neon Gradients */}
        <linearGradient id="ring-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="ring-amber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>

        {/* Visual Glow Filters */}
        <filter id="glow-neon-cyan" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glow-neon-magenta" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* CSS Animations, Rotating Transforms, and Interaction Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          .gyro-container {
            cursor: pointer;
          }

          /* Default smooth orbital rotation loops (using center origin 160px 160px) */
          .ring-group-1 {
            transform-origin: 160px 160px;
            animation: spin-clockwise 24s linear infinite;
            transition: animation-duration 0.5s ease;
          }

          .ring-group-2 {
            transform-origin: 160px 160px;
            animation: spin-counter 18s linear infinite;
            transition: animation-duration 0.5s ease;
          }

          .ring-group-3 {
            transform-origin: 160px 160px;
            animation: spin-clockwise 12s linear infinite;
            transition: animation-duration 0.5s ease;
          }

          .core-glow-layer {
            transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-origin: 160px 160px;
          }

          /* Hover Actions: Acceleration and expansion of neon fields */
          .gyro-container:hover .ring-group-1 {
            animation-duration: 5s;
          }

          .gyro-container:hover .ring-group-2 {
            animation-duration: 4s;
          }

          .gyro-container:hover .ring-group-3 {
            animation-duration: 2.5s;
          }

          .gyro-container:hover .core-glow-layer {
            transform: scale(1.3);
          }

          /* Rotating keyframes */
          @keyframes spin-clockwise {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes spin-counter {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
          }
        ` }} />
      </defs>

      {/* Outer Card Base */}
      <rect width="100%" height="100%" fill="url(#gyro-bg-glow)" rx="20" />

      {/* Holographic Concentric Grid Lines & Radar Calibration Crosshairs */}
      <g stroke="#334155" strokeWidth="0.5" opacity="0.25">
        <circle cx="160" cy="160" r="130" strokeDasharray="3 6" />
        <circle cx="160" cy="160" r="95" />
        <circle cx="160" cy="160" r="60" strokeDasharray="2 4" />
        <line x1="30" y1="160" x2="290" y2="160" />
        <line x1="160" y1="30" x2="160" y2="290" />
      </g>

      {/* RING 1: Outer Holographic Telemetry Ring (Cyan & Blue) */}
      <g className="ring-group-1">
        {/* Main Tilted Ring Path */}
        <ellipse 
          cx="160" 
          cy="160" 
          rx="115" 
          ry="40" 
          stroke="url(#ring-cyan)" 
          strokeWidth="1.25" 
          strokeDasharray="12 18 4 6" 
          filter="url(#glow-neon-cyan)"
          transform="rotate(-25 160 160)" 
        />
        {/* Caliper ticks / mechanical details on Ring 1 */}
        <path d="M 50 135 L 45 130 M 270 185 L 275 190" stroke="#06b6d4" strokeWidth="1.5" />
        {/* Orbital Tracker Node */}
        <circle cx="68" cy="120" r="4" fill="#ffffff" filter="url(#glow-neon-cyan)" />
      </g>

      {/* RING 2: Middle Concentric Core Ring (Magenta & Purple) */}
      <g className="ring-group-2">
        <ellipse 
          cx="160" 
          cy="160" 
          rx="90" 
          ry="32" 
          stroke="#d946ef" 
          strokeWidth="1" 
          strokeDasharray="40 10 15 10" 
          filter="url(#glow-neon-magenta)"
          transform="rotate(40 160 160)" 
        />
        <ellipse 
          cx="160" 
          cy="160" 
          rx="94" 
          ry="34" 
          stroke="#8b5cf6" 
          strokeWidth="0.5" 
          opacity="0.6"
          transform="rotate(40 160 160)" 
        />
        {/* Fast Orbit Particle Node */}
        <circle cx="185" cy="115" r="3.5" fill="#ffffff" filter="url(#glow-neon-magenta)" />
      </g>

      {/* RING 3: Inner Fast Core Ring (Amber & Crimson) */}
      <g className="ring-group-3">
        <ellipse 
          cx="160" 
          cy="160" 
          rx="68" 
          ry="22" 
          stroke="url(#ring-amber)" 
          strokeWidth="1.5" 
          strokeDasharray="8 8" 
          transform="rotate(-65 160 160)" 
        />
        {/* Mini telemetry details */}
        <circle cx="118" cy="100" r="3" fill="#f59e0b" />
      </g>

      {/* CENTRAL CORE: Glowing Plasma Reactor Core */}
      <g className="core-glow-layer">
        {/* Large Radial Glow Field */}
        <circle cx="160" cy="160" r="48" fill="url(#plasma-grad)" opacity="0.45" />

        {/* Highly Concentrated Inner Energy Core */}
        <circle cx="160" cy="160" r="26" fill="url(#plasma-grad)" filter="url(#glow-neon-magenta)" />

        {/* Tiny Energy Core Center Point */}
        <circle cx="160" cy="160" r="8" fill="#ffffff" filter="url(#glow-neon-cyan)" />

        {/* Micro-Circuit Shield lines surrounding the Core */}
        <g stroke="#ffffff" strokeWidth="0.75" opacity="0.7">
          <path d="M 160 128 L 160 134 M 160 186 L 160 192 M 128 160 L 134 160 M 186 160 L 192 160" />
        </g>
      </g>
    </svg>
  );
}
