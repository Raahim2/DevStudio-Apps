// app/apps/Sharpify/page.jsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Relative pathing matching three folders up (src/app/apps/Sharpify/ -> src/)
import Navbar from '../../../components/commen/Navbar';
import Footer from '../../../components/commen/Footer';

export default function SharpifyLandingPage() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Sharpify";
  const demoPhoto = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80";

  // Handles mouse and touch tracking across the split slider container
  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, x)));
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative pt-36 pb-16 md:pb-20">
        {/* Dynamic Emerald radial glow */}
        <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Slogan Badge */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/5 border border-emerald-500/15 px-4 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-inner select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Powered by DevStudio Neural Engine</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-3xl">
            Bring your blurry photos{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              back to life.
            </span>
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Transform low-resolution, noisy, or out-of-focus photos into crisp, high-fidelity masterpieces instantly with state-of-the-art local AI models [1].
          </p>

          <div className="mt-8">
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Get Sharpify on Google Play
              <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Interactive Before/After Split Comparison Slider */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 pb-20 md:pb-28 flex justify-center">
        <div 
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full max-w-[560px] aspect-[4/3] rounded-[24px] border border-[#1b3824]/60 bg-zinc-950 overflow-hidden shadow-2xl cursor-ew-resize select-none"
        >
          {/* Bottom Layer: After (Fully Enhanced Photo) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={demoPhoto} 
              alt="Enhanced After" 
              className="w-full h-full object-cover select-none pointer-events-none filter contrast-[105%]"
            />
            {/* "After" Badge in Bottom-Right */}
            <span className="absolute bottom-4 right-4 bg-black/60 border border-white/10 backdrop-blur-md rounded-md px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-emerald-400">
              Enhanced After
            </span>
          </div>

          {/* Top Layer: Before (Blurred/Noisy Photo) */}
          <div 
            className="absolute inset-y-0 left-0 h-full overflow-hidden border-r border-emerald-400/80"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* Absolute fixed width ensures image does not compress/squish as the slider moves */}
            <div className="absolute inset-0 w-[560px] h-full" style={{ width: sliderRef.current?.getBoundingClientRect().width }}>
              <img 
                src={demoPhoto} 
                alt="Original Before" 
                className="w-full h-full object-cover select-none pointer-events-none filter blur-[5px] grayscale-[20%]"
              />
            </div>
            {/* "Before" Badge in Bottom-Left */}
            <span className="absolute bottom-4 left-4 bg-black/60 border border-white/10 backdrop-blur-md rounded-md px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase text-zinc-500">
              Original Before
            </span>
          </div>

          {/* Slide Indicator Line/Pill */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 text-black border border-white/20 shadow-lg flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" className="rotate-90 origin-center" />
            </svg>
          </div>
        </div>
      </section>

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