// app/about/page.jsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/commen/Navbar';
import Footer from '../../components/commen/Footer';
// ==========================================
// 3. MAIN ABOUT & TIMELINE PAGE
// ==========================================
export default function AboutPage() {
  
  // Sorted chronologically from oldest (top) to newest / pipeline (bottom)
  const timelineData = [
    {
      date: "19 Sept 2025",
      appName: "Sharpify",
      tagline: "AI Image Enhancer",
      description: "Enhance image resolution instantly with advanced AI. Upscale textures, restore pixel clarity, and denoise.",
      logo: "https://lh3.googleusercontent.com/6OWhVt_goGRVtTtwRShblkBinYeq9OjdvlIBTln5Y-PD3msEM5KpFM53wUYHPWPPiY920jUBlwmMtNcHrFa3yA",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.raahim2.Sharpify",
      color: "bg-[#9d9898] shadow-[0_0_12px_rgba(157,152,152,0.6)]"
    },
    {
      date: "18 Jan 2026",
      appName: "Counter",
      tagline: "Click Counter App",
      description: "Simple, beautiful, and tactile counting. Keep track of tallies, scores, and variables with ease.",
      logo: "https://play-lh.googleusercontent.com/YjtNbrKvzTycJQJ4jwFA4adM3prA-KNeeIpWOnrO3GOBdpufwB7syp77HVLJRjVCLTurjXNpqGKlM0qpxxhj=s512-rw",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.raahim2.Counter",
      color: "bg-[#f9687d] shadow-[0_0_12px_rgba(249,104,125,0.6)]"
    },
    {
      date: "7 Apr 2026",
      appName: "Renderly",
      tagline: "Mockup Design Maker",
      description: "Generate high-fidelity mockups in seconds. Showcase your layouts on professional, vector device wraps.",
      logo: "https://lh3.googleusercontent.com/R3i-_EpOZpRrDFaXkVh82d8j-l1qnp0MuWiUHkfrjKRhzd7CPGw037BCoVlfp6k8idK0v4qtatCF9He3e7qM",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.raahim2.Renderly",
      color: "bg-[#1643f9] shadow-[0_0_12px_rgba(22,67,249,0.6)]"
    },
    {
      date: "Coming Soon",
      appName: "Future Pipeline",
      description: "Preparing our next phase of modern utility systems: Pocket Ledger bookkeeping, OpenForms survey frameworks, and Momentum gamified quests.",
      isPipeline: true,
      upcomingLogos: [
        "https://lh3.googleusercontent.com/HpK1uj1KxRl8rJy63JcoeSYx1jsDGpPJD1FMZ1zj7CuWHwU2VILKRLpkM8iFLkJO2ELrUK-mOdSpLv4kaqbP", // Pocket Ledger
        "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0", // OpenForms
        "https://lh3.googleusercontent.com/vbrAcXouSnfoODwLLGZhdHDCfXhcW_i4lp9eTtOoSYAUCinGziNAkVYS41QEC3tccHmR3YQak2agqefl1ZVe"  // Momentum
      ],
      color: "bg-zinc-700 shadow-none border border-zinc-600"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <section className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
            Our Studio Profile
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none max-w-3xl">
            We are dedicated to crafting{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              spectacular software.
            </span>
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            DevStudio is a highly focused design and engineering group building lightweight, lightning-fast utilities for mobile platforms.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-zinc-900">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white uppercase font-mono text-zinc-500">
            01 / Our Mission
          </h2>
        </div>
        <div className="md:col-span-2 flex flex-col gap-y-6">
          <p className="text-lg md:text-xl text-zinc-300 font-medium leading-relaxed">
            We prioritize user experience, zero-advertisement performance, and beautiful modern aesthetics.
          </p>
          <p className="text-zinc-400 text-[14.5px] leading-relaxed">
            Instead of building massive, bloated ecosystems, we believe in lightweight, single-purpose utilities that respect your time and digital space. No distracting ads, zero bloat, and highly polished interactions that are a blast to use.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-20 md:py-28 relative">
        <div className="text-center mb-20">
          <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
            02 / Chronology
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            App Launch Timeline
          </h2>
        </div>

        {/* Central Vertical Connector Line */}
        <div className="absolute left-1/2 top-48 bottom-12 w-[1px] border-l border-dashed border-zinc-800 -translate-x-1/2 pointer-events-none" />

        {/* Timeline List */}
        <div className="flex flex-col gap-y-16 relative z-10 max-w-5xl mx-auto">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center justify-between gap-y-6 w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Right Text Column */}
                <div className="w-full md:w-[45%] flex flex-col justify-center text-center md:text-left md:even:text-right">
                  <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-y-3`}>
                    <span className="font-mono text-xs text-indigo-400 font-semibold">
                      {item.date}
                    </span>

                    {/* App Header Row (Logo + Title) */}
                    <div className={`flex items-center gap-x-3.5 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      {item.logo && (
                        <div className="w-12 h-12 rounded-[14px] border border-white/10 bg-[#121316] flex items-center justify-center overflow-hidden shrink-0">
                          <img src={item.logo} alt={`${item.appName} Icon`} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                          {item.appName}
                        </h3>
                        {item.tagline && (
                          <span className="text-xs font-mono text-zinc-500">{item.tagline}</span>
                        )}
                      </div>
                    </div>

                    <p className="text-zinc-400 text-[13.5px] leading-relaxed max-w-md">
                      {item.description}
                    </p>

                    {/* Pipeline Upcoming Stacked Icons */}
                    {item.isPipeline && (
                      <div className="flex gap-x-2 mt-2">
                        {item.upcomingLogos.map((uLogo, uIdx) => (
                          <div key={uIdx} className="w-9 h-9 rounded-lg border border-white/5 bg-[#121316] flex items-center justify-center overflow-hidden grayscale opacity-40">
                            <img src={uLogo} alt="Upcoming App" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Store Action Redirect Trigger */}
                    {item.playStoreUrl && (
                      <a 
                        href={item.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-x-1 font-mono text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        View on Google Play ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Central Circle Node Indicator */}
                <div className="relative flex items-center justify-center z-20">
                  <div className={`w-3.5 h-3.5 rounded-full ${item.color}`} />
                </div>

                {/* Spacer Column to keep layout balanced */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer Navigation */}
        <Footer />
    </div>
  );
}