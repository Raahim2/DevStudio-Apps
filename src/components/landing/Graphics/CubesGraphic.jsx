'use client';

import React from 'react';

export function CubesGraphic() {
  return (
    <svg 
      viewBox="0 0 272 267" 
      className="w-full h-full max-w-[280px] max-h-[280px] overflow-visible"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Background Gradient for depth */}
     
       
        {/* CSS Animations and Hover States */}
        <style dangerouslySetInnerHTML={{ __html: `
          .hover-cube {
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .cube-base {
            transition: stroke 0.4s ease, fill 0.4s ease;
          }

          .cube-accent {
            transition: stroke 0.4s ease, filter 0.4s ease;
          }

          .hover-cube:hover {
            transform: translateY(-16px);
          }

          /* Light up top face on hover */
          .hover-cube:hover .cube-accent {
            stroke: #38bdf8;
            filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.8));
          }

          /* Slightly brighten side borders on hover */
          .hover-cube:hover .cube-base {
            stroke: #64748b;
          }
        ` }} />
      </defs>

      {/* Dark background card canvas with radial glow */}
      <rect width="100%" height="100%" fill="url(#cubes-bg-glow)" rx="12" />

      {/* Isometric Blocks Group */}
      <g strokeWidth="0.75" filter="brightness(1)">
        
        {/* 1. Block (0, 0) - Furthest Back, Tallest */}
        <g className="hover-cube">
          {/* Left Face */}
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 100 40 L 136 58 L 136 158 L 100 140 Z" />
          {/* Right Face */}
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 136 58 L 172 40 L 172 140 L 136 158 Z" />
          {/* Top Face */}
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 136 22 L 172 40 L 136 58 L 100 40 Z" />
        </g>

        {/* 2. Block (0, 1) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 140 75 L 176 93 L 176 178 L 140 160 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 176 93 L 212 75 L 212 160 L 176 178 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 176 57 L 212 75 L 176 93 L 140 75 Z" />
        </g>

        {/* 3. Block (1, 0) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 60 75 L 96 93 L 96 178 L 60 160 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 96 93 L 132 75 L 132 160 L 96 178 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 96 57 L 132 75 L 96 93 L 60 75 Z" />
        </g>

        {/* 4. Block (0, 2) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 180 110 L 216 128 L 216 198 L 180 180 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 216 128 L 252 110 L 252 180 L 216 198 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 216 92 L 252 110 L 216 128 L 180 110 Z" />
        </g>

        {/* 5. Block (1, 1) - Center */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 100 110 L 136 128 L 136 198 L 100 180 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 136 128 L 172 110 L 172 180 L 136 198 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 136 92 L 172 110 L 136 128 L 100 110 Z" />
        </g>

        {/* 6. Block (2, 0) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 20 110 L 56 128 L 56 198 L 20 180 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 56 128 L 92 110 L 92 180 L 56 198 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 56 92 L 92 110 L 56 128 L 20 110 Z" />
        </g>

        {/* 7. Block (1, 2) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 140 145 L 176 163 L 176 218 L 140 200 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 176 163 L 212 145 L 212 200 L 176 218 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 176 127 L 212 145 L 176 163 L 140 145 Z" />
        </g>

        {/* 8. Block (2, 1) */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 60 145 L 96 163 L 96 218 L 60 200 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 96 163 L 132 145 L 132 200 L 96 218 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 96 127 L 132 145 L 96 163 L 60 145 Z" />
        </g>

        {/* 9. Block (2, 2) - Closest Front, Shortest */}
        <g className="hover-cube">
          <path className="cube-base" fill="#060708" stroke="#1e293b" d="M 100 180 L 136 198 L 136 238 L 100 220 Z" />
          <path className="cube-base" fill="#0a0b0d" stroke="#1e293b" d="M 136 198 L 172 180 L 172 220 L 136 238 Z" />
          <path className="cube-accent" fill="#101114" stroke="#475569" d="M 136 162 L 172 180 L 136 198 L 100 180 Z" />
        </g>

      </g>
    </svg>
  );
}