"use client";

import React, { useState } from 'react';
import { Star, Split, Sparkles } from 'lucide-react';

export default function AppShowcase() {
  const [sliderVal, setSliderVal] = useState(50);
  const playStoreUrl = "#download-section"; // Replace with your target Play Store link

  return (
    <div className="bg-black text-zinc-300 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* 1. Hero Section with Interactive Phone Comparison */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
        {/* Faint Minimal Emerald Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.06),transparent_60%)] -z-10 pointer-events-none" />
        <div className="absolute top-[200px] left-1/4 w-[300px] h-[300px] bg-emerald-950/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hand Side: Tactical Monospace Pitch */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Target Monospace Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c140e] border border-emerald-900/40 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <svg className="w-3.5 h-3.5 fill-current text-emerald-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.523 15.3l1.816 3.146a.5.5 0 1 1-.866.5l-1.833-3.177a11.1 11.1 0 0 1-9.28 0L5.527 18.95a.5.5 0 1 1-.866-.5l1.816-3.146A11.026 11.026 0 0 1 1.622 8H22.38a11.025 11.025 0 0 1-4.857 7.3zM7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
                Sharpify for Android
              </div>

              {/* Main Catchy Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
                Fix Blurry, Ruined <br className="hidden sm:inline" />
                Photos in <span className="text-emerald-500 font-mono tracking-tighter">[One Tap]</span>
              </h1>

              {/* Friendly Layman Intro */}
              <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
                Got a blurry scenery shot, a fuzzy screenshot, or a bad WhatsApp picture? Drop it into ClarityGo. Our smart AI instant-brain analyzes your photo and reconstructs it into crystal-clear HD. No tech skills needed.
              </p>

              {/* Play Store & Ratings Block */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4">
                <a 
                  href={playStoreUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-[1.03]"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-[52px] w-auto" 
                  />
                </a>
                <div className="text-center sm:text-left">
                  <div className="flex justify-center sm:justify-start items-center gap-1 text-emerald-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 " />
                    <span className="text-white text-xs font-mono font-bold ml-1">4.1</span>
                  </div>
                  <p className="text-xs text-zinc-500 font-mono mt-1">Active 1000+ users</p>
                </div>
              </div>
            </div>

            {/* Right Hand Side: Interactive Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Subtle Emerald glow behind phone */}
              <div className="absolute -inset-4 bg-emerald-950/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
              
              {/* Highly Detailed Android Device Wrapper */}
              <div className="relative w-[320px] h-[640px] bg-zinc-950 border-[10px] border-zinc-900 rounded-[3rem] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
                {/* Phone Notch / Camera */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-900 rounded-full z-30 flex items-center justify-end px-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-black border border-zinc-800" />
                </div>

                {/* App Layout Inside Phone Screen */}
                <div className="relative w-full h-full flex flex-col justify-between p-4 pt-10 pb-6 bg-[#04060a] select-none">
                  
                  {/* Inside Phone: App Top Bar */}
                  <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest">DRAG_SLIDER_TO_COMPARE</span>
                    <div className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-[9px] text-emerald-400 font-mono">
                      ENG_RUNNING
                    </div>
                  </div>

                  {/* Inside Phone: Embedded Before/After Slider Mockup */}
                  <div className="relative flex-1 my-4 rounded-2xl overflow-hidden border border-zinc-800 shadow-inner group">
                    {/* BEFORE IMAGE (Low quality nature landscape background) */}
                    <img 
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=40&w=800&auto=format&fit=crop" 
                      className="absolute inset-0 w-full h-full object-cover filter blur-[2px] brightness-[0.7] contrast-[0.95] saturate-[0.8]" 
                      alt="Blurry nature low resolution" 
                    />
                    <span className="absolute bottom-3 left-3 bg-black/80 font-mono text-[9px] px-2 py-1 rounded text-zinc-400 border border-zinc-800 z-10">ORIGINAL</span>
                    
                    {/* AFTER IMAGE (High resolution nature landscape foreground with clipPath) */}
                    <div 
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=100&w=800&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover" 
                        alt="Enhanced high resolution nature" 
                      />
                      <span className="absolute bottom-3 right-3 bg-emerald-950/90 font-mono text-[9px] px-2 py-1 rounded text-emerald-400 border border-emerald-500/20 z-10">RESTORED_HD</span>
                    </div>

                    {/* Center Drag Line & Controller */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-emerald-500 pointer-events-none shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10" 
                      style={{ left: `${sliderVal}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-emerald-500/50 rounded-full flex items-center justify-center shadow-lg pointer-events-none">
                        <Split className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                    </div>

                    {/* Invisible Range Slider Input Layer */}
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={sliderVal} 
                      onChange={(e) => setSliderVal(Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" 
                    />
                  </div>

                  {/* Inside Phone: App Bottom Control Action Panel */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                      <span>SCALE_WEIGHT:</span>
                      <span className="text-emerald-400">4K_ULTRA</span>
                    </div>
                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                      <div className="w-4/5 h-full bg-emerald-500" />
                    </div>
                    <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-mono font-bold rounded-xl uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 fill-current" /> Save Clean Image
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}