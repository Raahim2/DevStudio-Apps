// components/landing/RingsGraphic.jsx
'use client';

import React from 'react';

export function RingsGraphic() {
  return (
    <svg 
      viewBox="0 0 272 267" 
      className="Benefits_momentum__42Pqx w-full h-full max-w-[280px] max-h-[280px] overflow-visible"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* CSS Animations, Hover Transforms, and Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* --- Interactive Hover Transitions --- */
          .hover-ring-1 { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .hover-ring-2 { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .hover-ring-3 { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          .hover-ring-4 { transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
          
          .hover-core {
            transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s ease;
            transform-origin: 136px 175px;
          }
          
          .glowing-axis {
            transition: opacity 0.7s ease, stroke-width 0.7s ease, filter 0.7s ease;
            opacity: 0.1;
          }

          /* --- Continuous Idle Floating Animations --- */
          .float-ring-1 { animation: float-1 4.5s ease-in-out infinite; }
          .float-ring-2 { animation: float-2 4.5s ease-in-out infinite; }
          .float-ring-3 { animation: float-3 4.5s ease-in-out infinite; }
          .float-ring-4 { animation: float-4 4.5s ease-in-out infinite; }
          
          .float-core { 
            animation: float-core 4.5s ease-in-out infinite; 
            transform-origin: 136px 175px;
          }

          /* --- Hover Triggers (When entire SVG is hovered) --- */
          .Benefits_momentum__42Pqx:hover .hover-ring-1 { transform: translateY(-4px); }
          .Benefits_momentum__42Pqx:hover .hover-ring-2 { transform: translateY(-14px); }
          .Benefits_momentum__42Pqx:hover .hover-ring-3 { transform: translateY(-28px); }
          .Benefits_momentum__42Pqx:hover .hover-ring-4 { transform: translateY(-45px); }
          
          .Benefits_momentum__42Pqx:hover .hover-core {
            transform: translateY(-35px) scale(1.15);
            filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.95)) brightness(1.3);
          }

          .Benefits_momentum__42Pqx:hover .glowing-axis {
            opacity: 0.7;
            stroke-width: 1.25;
            filter: drop-shadow(0 0 4px rgba(14, 165, 233, 0.8));
          }

          /* --- Keyframes --- */
          @keyframes float-1 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-1.5px); }
          }
          @keyframes float-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes float-3 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-7.5px); }
          }
          @keyframes float-4 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes float-core {
            0%, 100% {
              transform: translateY(0) rotate(-2deg);
              filter: drop-shadow(0 0 2px rgba(14, 165, 233, 0.35));
            }
            50% {
              transform: translateY(-9px) rotate(2deg);
              filter: drop-shadow(0 0 8px rgba(14, 165, 233, 0.75));
            }
          }
        ` }} />
      </defs>

      {/* Optional: Background matching the dark-theme landing page */}

      {/* Blueprint vertical alignment axis (Base grid line) */}
      <line x1="136" y1="15" x2="136" y2="250" stroke="#222225" strokeWidth="0.75" strokeDasharray="3,4" />
      
      {/* Glowing Interactive Blueprint Axis (Cyan overlay) */}
      <line className="glowing-axis" x1="136" y1="15" x2="136" y2="250" stroke="#0ea5e9" strokeWidth="0.75" />

      <g strokeWidth="0.5" filter="brightness(1)">

        {/* ================= RING 1 (Bottom, Largest) ================= */}
        <g className="hover-ring-1">
          <g className="float-ring-1">
            <g id="ring-1">
              {/* Outer Extrusion Walls */}
              <path fill="#0b0c0e" stroke="#2E2E32" d="M14.8 145 L136 215 L136 225 L14.8 155 Z" />
              <path fill="#0d0e11" stroke="#2E2E32" d="M136 215 L257.2 145 L257.2 155 L136 225 Z" />
              
              {/* Inner Extrusion Walls */}
              <path fill="#050607" stroke="#1c1c1f" d="M39 145 L136 89 L136 99 L39 155 Z" />
              <path fill="#060708" stroke="#1c1c1f" d="M136 89 L233 145 L233 155 L136 99 Z" />

              {/* Top Face Trapezoids */}
              <path fill="#08090A" stroke="#62666D" d="M14.8 145 L136 215 L136 201 L39 145 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 215 L257.2 145 L233 145 L136 201 Z" />
              <path fill="#08090A" stroke="#62666D" d="M257.2 145 L136 75 L136 89 L233 145 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 75 L14.8 145 L39 145 L136 89 Z" />
            </g>
          </g>
        </g>

        {/* ================= RING 2 (Mid-Bottom) ================= */}
        <g className="hover-ring-2">
          <g className="float-ring-2">
            <g id="ring-2">
              {/* Outer Extrusion Walls */}
              <path fill="#0b0c0e" stroke="#2E2E32" d="M45.9 110 L136 162 L136 172 L45.9 120 Z" />
              <path fill="#0d0e11" stroke="#2E2E32" d="M136 162 L226.1 110 L226.1 120 L136 172 Z" />

              {/* Inner Extrusion Walls */}
              <path fill="#050607" stroke="#1c1c1f" d="M66.7 110 L136 70 L136 80 L66.7 120 Z" />
              <path fill="#060708" stroke="#1c1c1f" d="M136 70 L205.3 110 L205.3 120 L136 80 Z" />

              {/* Top Face Trapezoids */}
              <path fill="#08090A" stroke="#62666D" d="M45.9 110 L136 162 L136 150 L66.7 110 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 162 L226.1 110 L205.3 110 L136 150 Z" />
              <path fill="#08090A" stroke="#62666D" d="M226.1 110 L136 58 L136 70 L205.3 110 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 58 L45.9 110 L66.7 110 L136 70 Z" />
            </g>
          </g>
        </g>

        {/* ================= RING 3 (Mid-Top) ================= */}
        <g className="hover-ring-3">
          <g className="float-ring-3">
            <g id="ring-3">
              {/* Outer Extrusion Walls */}
              <path fill="#0b0c0e" stroke="#2E2E32" d="M73.6 75 L136 111 L136 121 L73.6 85 Z" />
              <path fill="#0d0e11" stroke="#2E2E32" d="M136 111 L198.4 75 L198.4 85 L136 121 Z" />

              {/* Inner Extrusion Walls */}
              <path fill="#050607" stroke="#1c1c1f" d="M91 75 L136 49 L136 59 L91 85 Z" />
              <path fill="#060708" stroke="#1c1c1f" d="M136 49 L181 75 L181 85 L136 59 Z" />

              {/* Top Face Trapezoids */}
              <path fill="#08090A" stroke="#62666D" d="M73.6 75 L136 111 L136 101 L91 75 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 111 L198.4 75 L181 75 L136 101 Z" />
              <path fill="#08090A" stroke="#62666D" d="M198.4 75 L136 39 L136 49 L181 75 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 39 L73.6 75 L91 75 L136 49 Z" />
            </g>
          </g>
        </g>

        {/* ================= RING 4 (Top, Smallest) ================= */}
        <g className="hover-ring-4">
          <g className="float-ring-4">
            <g id="ring-4">
              {/* Outer Extrusion Walls */}
              <path fill="#0b0c0e" stroke="#2E2E32" d="M101.4 40 L136 60 L136 70 L101.4 50 Z" />
              <path fill="#0d0e11" stroke="#2E2E32" d="M136 60 L170.6 40 L170.6 50 L136 70 Z" />

              {/* Inner Extrusion Walls */}
              <path fill="#050607" stroke="#1c1c1f" d="M118.7 40 L136 30 L136 40 L118.7 50 Z" />
              <path fill="#060708" stroke="#1c1c1f" d="M136 30 L153.3 40 L153.3 50 L136 40 Z" />

              {/* Top Face Trapezoids */}
              <path fill="#08090A" stroke="#62666D" d="M101.4 40 L136 60 L136 50 L118.7 40 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 60 L170.6 40 L153.3 40 L136 50 Z" />
              <path fill="#08090A" stroke="#62666D" d="M170.6 40 L136 20 L136 30 L153.3 40 Z" />
              <path fill="#08090A" stroke="#62666D" d="M136 20 L101.4 40 L118.7 40 L136 30 Z" />
            </g>
          </g>
        </g>

        {/* ================= CENTRAL HOLOGRAPHIC CORE (Octahedron Crystal) ================= */}
        <g className="hover-core">
          <g className="float-core">
            <g id="crystal-core" stroke="#0ea5e9" strokeWidth="0.75" strokeLinejoin="round">
              {/* Back Hidden Shard Faces (Darker tone) */}
              <path fill="rgba(14, 165, 233, 0.05)" stroke="#0284c7" strokeDasharray="1,1" d="M136 157 L118.7 175 L136 165 Z" />
              <path fill="rgba(14, 165, 233, 0.05)" stroke="#0284c7" strokeDasharray="1,1" d="M136 157 L136 165 L153.3 175 Z" />

              {/* Front Left Upper Face */}
              <path fill="rgba(14, 165, 233, 0.12)" d="M136 157 L136 185 L118.7 175 Z" />
              {/* Front Right Upper Face */}
              <path fill="rgba(14, 165, 233, 0.20)" d="M136 157 L153.3 175 L136 185 Z" />
              
              {/* Front Left Lower Face */}
              <path fill="rgba(14, 165, 233, 0.15)" d="M136 193 L136 185 L118.7 175 Z" />
              {/* Front Right Lower Face */}
              <path fill="rgba(14, 165, 233, 0.25)" d="M136 193 L153.3 175 L136 185 Z" />
            </g>
          </g>
        </g>

      </g>
    </svg>
  );
}