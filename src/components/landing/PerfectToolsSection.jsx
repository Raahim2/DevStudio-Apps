// components/landing/PerfectToolsSection.jsx
'use client';

import React from 'react';
import  { SectionHeader } from '../commen/SectionHeader';
import { CubesGraphic } from './Graphics/CubesGraphic';
import { BarsGraphic } from './Graphics/BarsGraphic';
import { OrbitalGraphic } from './Graphics/OrbitalGraphic';
import { ComputeGraphic } from './Graphics/ComputeGraphic';
import { AnalyticsGraphic } from './Graphics/AnalyticsGraphic';
import { AnalyticsGraphic2 } from './Graphics/AnalyticsGraphic2';
import { MobileUIGraphic } from './Graphics/MobileUIGraphic';

export function PerfectToolsSection() {
  const playStoreLink = "https://play.google.com/store/apps/dev?id=5812710502212545050";

  return (
    <section 
      className="bg-black py-24 md:py-32 text-white overflow-hidden"
      style={{
        // Draws the faint blueprint grid pattern passing behind the layout
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px)
        `,
        backgroundSize: '72px 72px',
      }}
    >
      <SectionHeader 
        highlightedText="Perfect tools for modern life."
        normalText="Our suite of mobile applications is designed to enhance productivity, creativity, and daily living with seamless performance and intuitive design."
        className="text-center mx-auto mb-16 md:mb-24"
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Master Bento grid container (grid collapses beautifully into 1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-zinc-800/80 bg-black/40 backdrop-blur-md">
          
          {/* ================= ROW 1 ================= */}
          {/* Cell 1: Build Info (1 Col) */}
          <div className="md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex flex-col justify-between h-[380px]">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.12] text-white">
              Building<br />smart<br />software.
            </h2>
            <div className="flex flex-col gap-4">
              <div className="w-full h-[1px] bg-zinc-800/60" />
              <p className="font-mono text-zinc-400 text-xs sm:text-[13px] leading-relaxed tracking-tight max-w-[280px]">
                Building smart, scalable, and modern Android applications focused on performance, innovation, and real user value.
              </p>
              <a 
                href={playStoreLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-xs sm:text-sm text-white hover:text-indigo-400 tracking-tight transition-colors duration-150 inline-flex items-center w-fit"
              >
                Explore our apps <span className="text-zinc-600 ml-1">↗</span>
              </a>
            </div>
          </div>

          {/* Cell 2: FIG_01 (2 Cols) */}
          <div className="relative md:col-span-2 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[380px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_01</span>
            <OrbitalGraphic />
            
          </div>


          {/* ================= ROW 2 ================= */}
          {/* Cell 3: FIG_02 (2 Cols) */}
          <div className="relative md:col-span-2 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[380px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_02</span>
            <AnalyticsGraphic />

          </div>

          {/* Cell 4: React to macOS Info (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex flex-col justify-between h-[380px]">
            <span className="absolute top-8 right-8 font-mono text-zinc-600 text-xs select-none">↗</span>
            <div /> {/* Spacer */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">Built for Mobile</h3>
              <p className="font-mono text-zinc-400 text-xs sm:text-[13px] leading-relaxed tracking-tight max-w-[280px]">
                Engineered to run seamlessly across Android devices with fluid animations, native performance, and optimized memory footprints.
              </p>
            </div>
          </div>


          {/* ================= ROW 3 ================= */}
          {/* Cell 5: FIG_03 (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[320px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_03</span>
            <ComputeGraphic />

          </div>

          {/* Cell 6: Built-in UI Info (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex flex-col justify-between h-[320px]">
            <span className="absolute top-8 right-8 font-mono text-zinc-600 text-xs select-none">↗</span>
            <div /> {/* Spacer */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">Premium UI/UX</h3>
              <p className="font-mono text-zinc-400 text-xs sm:text-[13px] leading-relaxed tracking-tight max-w-[280px]">
                We prioritize every single pixel. Our clean, dark-mode interfaces focus on high responsiveness, accessibility, and modern aesthetics.
              </p>
            </div>
          </div>

          {/* Cell 7: FIG_04 (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[320px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_04</span>
            <MobileUIGraphic />
          </div>


          {/* ================= ROW 4 ================= */}
          {/* Cell 8: Batteries Info (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex flex-col justify-between h-[380px]">
            <span className="absolute top-8 right-8 font-mono text-zinc-600 text-xs select-none">↗</span>
            <div /> {/* Spacer */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">Ad-Free Experience</h3>
              <p className="font-mono text-zinc-400 text-xs sm:text-[13px] leading-relaxed tracking-tight max-w-[280px]">
                We build utility applications that respect your digital space. No distracting advertisements, zero bloat, and highly polished interactions.
              </p>
            </div>
          </div>

          {/* Cell 9: FIG_05 (2 Cols) */}
          <div className="relative md:col-span-2 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[380px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_05</span>
            <AnalyticsGraphic2/>
          </div>


          {/* ================= ROW 5 ================= */}
          {/* Cell 10: FIG_06 (2 Cols) */}
          <div className="relative md:col-span-2 p-8 md:p-12 border-b border-r border-zinc-800/80 flex items-center justify-center h-[380px] overflow-hidden">
            <span className="absolute top-8 left-8 font-mono text-[10px] tracking-widest text-zinc-600">FIG_06</span>
            <BarsGraphic />
          </div>

          {/* Cell 11: Publish Info (1 Col) */}
          <div className="relative md:col-span-1 p-8 md:p-12 border-b border-r border-zinc-800/80 flex flex-col justify-between h-[380px]">
            <span className="absolute top-8 right-8 font-mono text-zinc-600 text-xs select-none">↗</span>
            <div /> {/* Spacer */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-white tracking-tight">Available on Google Play</h3>
              <p className="font-mono text-zinc-400 text-xs sm:text-[13px] leading-relaxed tracking-tight max-w-[280px]">
                Explore our growing publishing portfolio, serving global users daily with highly practical apps, tools, and widgets.
              </p>
            </div>
          </div>


          {/* ================= ROW 6 (Grid Footer) ================= */}
          {/* Empty left bounding cell */}
          <div className="hidden md:block md:col-span-1 border-b border-r border-zinc-800/80 h-16" />

          {/* Centered CTA Trigger */}
          <div className="col-span-1 md:col-span-1 border-b border-r border-zinc-800/80 h-16 flex items-center justify-center">
            <a 
              href={playStoreLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs sm:text-sm text-white hover:text-indigo-400 tracking-tight transition-colors duration-150"
            >
              Get started ↗
            </a>
          </div>

          {/* Empty right bounding cell */}
          <div className="hidden md:block md:col-span-1 border-b border-r border-zinc-800/80 h-16" />

        </div>
      </div>
    </section>
  );
}