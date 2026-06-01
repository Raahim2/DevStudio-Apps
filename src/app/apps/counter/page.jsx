// app/apps/Counter/page.jsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/commen/Navbar';
import Footer from '../../../components/commen/Footer';

// ==========================================
// 3. MAIN COUNTER LANDING PAGE
// ==========================================
export default function CounterLandingPage() {
  const [count, setCount] = useState(0);

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Counter";
  const appLogo = "https://play-lh.googleusercontent.com/YjtNbrKvzTycJQJ4jwFA4adM3prA-KNeeIpWOnrO3GOBdpufwB7syp77HVLJRjVCLTurjXNpqGKlM0qpxxhj=s512-rw";

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-rose-500/30 selection:text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pb-24">
        {/* Ambient Top Radial Glow matching your custom Rose/Coral `#f9687d` colorTheme */}
        <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-rose-500/5 border border-rose-500/15 px-4 py-1 text-xs font-medium text-rose-400 backdrop-blur-md shadow-inner select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            <span>Tactile counting, beautifully simplified</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-3xl">
            Keep count of{' '}
            <span className="bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
              what matters.
            </span>
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            An elegant, responsive, and highly tactile tally counter designed to track your daily tasks, gym scores, inventory, and habit progress.
          </p>

          <div className="mt-8">
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-black hover:bg-rose-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(249,104,125,0.3)]"
            >
              Get Counter on Google Play
              <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Clicking Demo Block */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 pb-20 md:pb-28 flex justify-center">
        <div className="relative w-full max-w-[340px] aspect-[1/1.2] rounded-[28px] border border-rose-500/15 bg-gradient-to-b from-rose-500/5 to-black p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
          {/* Background Radial Glow */}
          <div className="absolute top-0 left-0 right-0 h-[100px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-rose-500/15 via-transparent to-transparent pointer-events-none" />

          {/* App Logo & Name */}
          <div className="flex items-center gap-2.5 z-10 w-full">
            <img src={appLogo} alt="Counter Icon" className="w-9 h-9 rounded-lg border border-white/5" />
            <span className="text-sm font-semibold text-zinc-300">Counter Showcase</span>
          </div>

          {/* Core LCD Display */}
          <div className="z-10 flex flex-col items-center">
            <span className="font-mono text-5xl md:text-6xl font-bold tracking-widest text-rose-400 bg-rose-500/5 border border-rose-500/15 px-6 py-3 rounded-xl shadow-inner select-none">
              {String(count).padStart(5, '0')}
            </span>
          </div>

          {/* Tactile Push Button */}
          <button 
            onClick={() => setCount(prev => prev + 1)}
            className="w-24 h-24 rounded-full bg-rose-500 border-4 border-rose-400 text-black hover:bg-rose-400 hover:scale-105 active:scale-95 transition-all duration-100 flex items-center justify-center shadow-[0_0_25px_rgba(249,104,125,0.4)] z-10"
          >
            <span className="font-bold text-xs uppercase tracking-widest">Tap</span>
          </button>

          {/* Utility Controllers */}
          <div className="w-full flex justify-between gap-3 z-10">
            <button 
              onClick={() => setCount(prev => Math.max(0, prev - 1))}
              className="flex-1 py-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 transition-all duration-100"
            >
              Decrement (-)
            </button>
            <button 
              onClick={() => setCount(0)}
              className="flex-1 py-2 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 transition-all duration-100"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="bg-black py-20 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#140c0d]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-rose-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">Tactile Feedback</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Satisfying haptic vibrations and click audio cues with every single tab.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#140c0d]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-rose-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">Multi-Counter Pools</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Simultaneously manage and save multiple running counts for diverse trackers.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#140c0d]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-rose-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Local Tally History</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Review historical counts, reset sessions, timestamps, and progress graphs.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#140c0d]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-rose-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Zero Data Uploads</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Run completely offline. All tallies are locked securely on your local device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Call-To-Action */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to simplify your tracking?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download Counter today for a beautifully responsive, zero-bloat offline clicker.
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

      {/* Footer */}
      <Footer />
    </div>
  );
}