// components/landing/BarsGraphic.jsx
'use client';

import React from 'react';

export function BarsGraphic() {
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
          .hover-plate {
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .plate-base {
            transition: stroke 0.4s ease;
          }

          .plate-accent {
            transition: stroke 0.4s ease, filter 0.4s ease;
          }

          .hover-plate:hover {
            transform: translateY(-20px);
          }

          .hover-plate:hover .plate-accent {
            stroke: #38bdf8;
            filter: drop-shadow(0 0 5px rgba(56, 189, 248, 0.8));
          }

          .hover-plate:hover .plate-base {
            stroke: #8ba3c0;
          }
        ` }} />
      </defs>

      {/* Dark background card canvas with radial glow */}
      <rect width="100%" height="100%" fill="url(#bars-bg-glow)" rx="12" />

      {/* Isometric Plates Group */}
      <g strokeWidth="0.5" filter="brightness(1)">
        
        {/* Plate 1 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M137.044 107.668a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v20.529a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-20.529c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M137.689 110.446l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v18.193" />
        </g>

        {/* Plate 2 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M128.594 98.378a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v34.049a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-34.049c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M129.239 101.156l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v31.713" />
        </g>

        {/* Plate 3 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M120.144 82.316a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v54.331a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-54.331c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M120.789 85.094l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v51.995" />
        </g>

        {/* Plate 4 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M111.694 59.504a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v81.373a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-81.373c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M112.339 62.282l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v79.037" />
        </g>

        {/* Plate 5 (Tallest Center) */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M103.244 16.4a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v128.697a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-128.697c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M103.889 19.178l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v126.361" />
        </g>

        {/* Plate 6 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M94.794 67.954a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v81.373a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-81.373c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M95.439 70.732l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v79.037" />
        </g>

        {/* Plate 7 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M86.344 99.216a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v54.331a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-54.331c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M86.989 101.994l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v51.995" />
        </g>

        {/* Plate 8 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M77.894 123.728a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v34.049a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-34.049c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M78.539 126.506l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v31.713" />
        </g>

        {/* Plate 9 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M69.444 141.478a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v20.529a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-20.529c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M70.089 144.256l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v18.193" />
        </g>

        {/* Plate 10 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M60.994 152.459a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v13.768a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-13.768c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M61.639 155.237l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v11.432" />
        </g>

        {/* Plate 11 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M52.544 160.06a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v10.387a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-10.387c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M53.189 162.838l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v8.051" />
        </g>

        {/* Plate 12 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M44.094 165.979a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v8.698a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-8.698c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M44.739 168.757l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v6.362" />
        </g>

        {/* Plate 13 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M35.634 171.055a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v7.852a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-7.852c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M36.279 173.833l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v5.516" />
        </g>

        {/* Plate 14 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M27.184 175.274a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v7.853a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-7.853c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M27.829 178.052l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v5.517" />
        </g>

        {/* Plate 15 */}
        <g className="hover-plate">
          <path className="plate-base" fill="#08090A" stroke="#62666D" d="M18.734 179.504a1.44 1.44 0 0 1 1.288 0l115.686 57.843a3.13 3.13 0 0 1 1.73 2.8v7.853a1.44 1.44 0 0 1-.796 1.288l-1.69.845a1.44 1.44 0 0 1-1.288 0l-115.686-57.843a3.13 3.13 0 0 1-1.73-2.8v-7.853c0-.545.308-1.044.796-1.288z" />
          <path className="plate-accent" stroke="#2E2E32" strokeLinecap="round" d="M19.379 182.282l113.061 56.531a3.38 3.38 0 0 1 1.868 3.023v5.517" />
        </g>

      </g>
    </svg>
  );
}