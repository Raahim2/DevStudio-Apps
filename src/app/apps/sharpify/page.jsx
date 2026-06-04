// app/apps/Sharpify/page.jsx
'use client';

import React, { useState, useRef } from 'react';

import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';
import Hero from '@/components/sharpify/Hero';
import { SectionHeader }  from '@/components/commen/SectionHeader';
import { MainFeature } from '@/components/sharpify/MainFeature';

export default function SharpifyLandingPage() {

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Sharpify";
  

  

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      
      {/* 1. Header Navigation */}
      <Navbar />

      <Hero />

      <SectionHeader 
        className="text-center mx-auto max-w-3xl"
        highlightedText="Experience the Power of AI-Enhanced Imagery"
        normalText="Sharpify is your ultimate mobile companion for transforming blurry,  Sharpify breathes new life into your photo library with just a few taps."
      />

      <MainFeature />

      {/* 4. Product Highlights Bento Grid */}
      <section className="bg-black py-20 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">4X AI Upscaling</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Upscale low-res assets directly to sharp 4K textures without losing geometric structure.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">Smart Denoising</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Clean low-light noise and ISO distortion while retaining delicate edge details.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Face Restoration</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Deeply reconstruct portraits, sharpening eyes, skin textures, and facial features.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Local &amp; Secure</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Processed entirely locally. Your personal images never leave your mobile device.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Call-To-Action Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to enhance your photo library?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download Sharpify today for completely on-device, lightning-fast neural image restorations.
        </p>
        <a 
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          Download for Android
          <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
        </a>
      </section>

      {/* 6. Footer Navigation */}
      <Footer />
    </div>
  );
}