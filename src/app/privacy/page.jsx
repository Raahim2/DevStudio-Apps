// app/privacy/page.jsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../components/commen/Navbar';
import Footer from '../../components/commen/Footer';

// Helper Card Component to handle individual hover states and dynamic border glows
function PrivacyCard({ name, description, logo, redirect, colorTheme }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = redirect}
      className="relative rounded-[22px] border bg-gradient-to-b from-[#0e101f] to-[#07080f] p-6 overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between h-[190px] select-none"
      style={{
        // High-contrast deep metallic border that glows with the app's accent color on hover
        borderColor: isHovered ? `${colorTheme}50` : '#1d2038'
      }}
    >
      {/* Background Radial Glow based on the App's colorTheme */}
      <div 
        className="absolute top-0 left-0 right-0 h-[80px] blur-xl pointer-events-none transition-opacity duration-300" 
        style={{
          background: `radial-gradient(circle at top, ${colorTheme}33, transparent)`,
          opacity: isHovered ? 0.7 : 0.4
        }}
      />

      {/* Header Row: Icon & Text */}
      <div className="flex items-start gap-4 z-10">
        <div className="w-12 h-12 rounded-xl border border-white/10 bg-[#121316] flex items-center justify-center overflow-hidden shrink-0">
          <img 
            src={logo} 
            alt={`${name} Logo`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-white tracking-tight">{name}</h3>
          <p className="text-[12px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between border-t border-white/5 pt-3.5 z-10">
        <span className="text-[11px] font-mono text-zinc-500">Legal Document</span>
        <span 
          className="text-[12.5px] font-mono transition-colors duration-150 inline-flex items-center"
          style={{ color: isHovered ? colorTheme : '#8a8f98' }}
        >
          View Policy ↗
        </span>
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  // Your 7 apps with matching colorTheme hex values and dedicated sub-routes
  const appsData = [
    {
      id: 1,
      name: "Sharpify",
      description: "Enhance image resolution instantly with advanced AI. Upscale textures and denoise.",
      logo: "https://lh3.googleusercontent.com/6OWhVt_goGRVtTtwRShblkBinYeq9OjdvlIBTln5Y-PD3msEM5KpFM53wUYHPWPPiY920jUBlwmMtNcHrFa3yA",
      colorTheme: "#9d9898",
      redirect: "/apps/sharpify/privacy"
    },
    {
      id: 2,
      name: "Counter",
      description: "Simple, beautiful, and tactile counting. Keep track of tallies, scores, and variables with ease.",
      logo: "https://play-lh.googleusercontent.com/YjtNbrKvzTycJQJ4jwFA4adM3prA-KNeeIpWOnrO3GOBdpufwB7syp77HVLJRjVCLTurjXNpqGKlM0qpxxhj=s512-rw",
      colorTheme: "#f9687d",
      redirect: "/apps/counter/privacy"
    },
    {
      id: 3,
      name: "Renderly",
      description: "Generate high-fidelity mockups in seconds. Showcase your layouts on professional device wraps.",
      logo: "https://lh3.googleusercontent.com/R3i-_EpOZpRrDFaXkVh82d8j-l1qnp0MuWiUHkfrjKRhzd7CPGw037BCoVlfp6k8idK0v4qtatCF9He3e7qM",
      colorTheme: "#1643f9",
      redirect: "/apps/renderly/privacy"
    },
    {
      id: 4,
      name: "MathRoyale",
      description: "Turn your learning goals into an epic quest. Gain XP, level up, and build consistent habits.",
      logo: "https://lh3.googleusercontent.com/vbrAcXouSnfoODwLLGZhdHDCfXhcW_i4lp9eTtOoSYAUCinGziNAkVYS41QEC3tccHmR3YQak2agqefl1ZVe",
      colorTheme: "#8b5cf6",
      redirect: "/apps/mathroyale/privacy"
    },
    {
      id: 5,
      name: "Pocket Ledger",
      description: "Track expenses, set budgets, and gain financial clarity. Clean, local, and bookkeeping.",
      logo: "https://lh3.googleusercontent.com/HpK1uj1KxRl8rJy63JcoeSYx1jsDGpPJD1FMZ1zj7CuWHwU2VILKRLpkM8iFLkJO2ELrUK-mOdSpLv4kaqbP",
      colorTheme: "#2af50b",
      redirect: "/apps/pocket-ledger/privacy"
    },
    {
      id: 6,
      name: "OpenForms",
      description: "Build stunning surveys and gather feedback instantly. Supports beautiful fields and streamlined design.",
      logo: "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0",
      colorTheme: "#414141",
      redirect: "/apps/openforms/privacy"
    },
    {
      id: 7,
      name: "VoiceDocs",
      description: "Capture meetings live, transcribe audio to text, and instantly export to clean, print-ready PDF formats.",
      logo: "https://lh3.googleusercontent.com/wrM9aRne1BVkAaZvNFGal8wi9YDqLuoW5FJXmUWbkWWGSb9g1YCwabb_7bi9hpi1HUmq0ZwJYCh2VXsyOn4pjDc",
      colorTheme: "#0ea5e9",
      redirect: "/apps/voicedocs/privacy"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-24 border-b border-zinc-900 overflow-hidden">
        {/* Ambient Top Glow matching the main theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
            Legal Directory
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policies
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            DevStudio Apps is committed to your absolute data protection. Select any of our published applications below to inspect its dedicated privacy disclosures, local sandboxing structures, and permission justifications [1].
          </p>
        </div>
      </div>

      {/* Main Apps Grid Section */}
      <main className="mx-auto max-w-7xl px-6 sm:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appsData.map((app) => (
            <PrivacyCard 
              key={app.id}
              name={app.name}
              description={app.description}
              logo={app.logo}
              redirect={app.redirect}
              colorTheme={app.colorTheme}
            />
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}