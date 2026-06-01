// app/not-found.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Relative imports going one level up from the App Router root (app/not-found.jsx -> root)
import Navbar from '../components/commen/Navbar';
import Footer from '../components/commen/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white flex flex-col justify-between overflow-hidden">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Inline styles to handle organic drift animation for the smoky background elements */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes smoke-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
          50% { transform: translate(40px, -30px) scale(1.1); opacity: 0.25; }
        }
        @keyframes smoke-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1.1); opacity: 0.1; }
          50% { transform: translate(-30px, 40px) scale(0.95); opacity: 0.2; }
        }
        @keyframes smoke-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(0.9); opacity: 0.2; }
          50% { transform: translate(25px, 25px) scale(1.05); opacity: 0.3; }
        }
        .smoky-layer-1 {
          animation: smoke-drift-1 12s ease-in-out infinite;
        }
        .smoky-layer-2 {
          animation: smoke-drift-2 15s ease-in-out infinite;
        }
        .smoky-layer-3 {
          animation: smoke-drift-3 10s ease-in-out infinite;
        }
      `}} />

      {/* 2. Smoky Coming Soon / Not Found Workspace */}
      <main className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-32 z-10">
        
        {/* Procedural Drifting Smoke layers */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Layer 1 - Indigo Smoke */}
          <div className="smoky-layer-1 absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />
          {/* Layer 2 - Violet Smoke */}
          <div className="smoky-layer-2 absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-500/5 blur-[140px]" />
          {/* Layer 3 - Slate Smoke (glowing core) */}
          <div className="smoky-layer-3 absolute top-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-zinc-700/10 blur-[100px]" />
        </div>

        {/* Minimal Typographic Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center max-w-xl"
        >
          {/* Diagnostic Badge */}
          <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-zinc-600 uppercase">
            404 // CLOUDED_PATH_ENCOUNTERED
          </span>

          {/* Slogan Title */}
          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-none">
            Lost in the clouds.
          </h1>

          {/* Slogan Description */}
          <p className="mt-6 text-zinc-500 text-xs sm:text-[13.5px] leading-relaxed max-w-sm font-mono">
            This endpoint is currently clouded or undergoing scheduled development. DevStudio devs are crafting something spectacular here.
          </p>

          {/* Action Trigger */}
          <a 
            href="/" 
            className="mt-8 font-mono text-xs sm:text-sm text-white hover:text-indigo-400 tracking-tight transition-colors duration-150 inline-flex items-center"
          >
            Return Home <span className="text-zinc-600 group-hover:text-white ml-1">↗</span>
          </a>
        </motion.div>
      </main>

      {/* 3. Footer Navigation */}
      <Footer />
    </div>
  );
}