// app/apps/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Standardized imports per your path layout
import Navbar from '../../components/commen/Navbar';
import Footer from '../../components/commen/Footer';
import { AppCard } from '../../components/landing/AppCard';

export default function AppsDirectoryPage() {
  
  // Your exact app dataset, complete with play store logos and custom feature graphic assignments
  const appsData = [
    {
      id: 1,
      name: "Sharpify",
      description: "Enhance image resolution instantly with advanced AI. Upscale textures and denoise.",
      category: "Design",
      logo: "https://lh3.googleusercontent.com/6OWhVt_goGRVtTtwRShblkBinYeq9OjdvlIBTln5Y-PD3msEM5KpFM53wUYHPWPPiY920jUBlwmMtNcHrFa3yA",
      featureGraphic: "/fg1.png",
      colorTheme: "#9d9898"
    },
    {
      id: 2,
      name: "Counter",
      description: "Simple, beautiful, and tactile counting. Keep track of tallies, scores, and variables with ease.",
      category: "Productivity",
      logo: "https://play-lh.googleusercontent.com/YjtNbrKvzTycJQJ4jwFA4adM3prA-KNeeIpWOnrO3GOBdpufwB7syp77HVLJRjVCLTurjXNpqGKlM0qpxxhj=s512-rw",
      featureGraphic: "/fg2.png",
      colorTheme: "#f9687d"
    },
    {
      id: 3,
      name: "Renderly",
      description: "Generate high-fidelity mockups in seconds. Showcase your layouts on professional device wraps.",
      category: "Design",
      logo: "https://lh3.googleusercontent.com/R3i-_EpOZpRrDFaXkVh82d8j-l1qnp0MuWiUHkfrjKRhzd7CPGw037BCoVlfp6k8idK0v4qtatCF9He3e7qM",
      featureGraphic: "/fg6.png",
      colorTheme: "#1643f9"
    },
    {
      id: 4,
      name: "Momentum",
      description: "Turn your learning goals into an epic quest. Gain XP, level up, and build consistent habits.",
      category: "Engineering",
      logo: "https://lh3.googleusercontent.com/vbrAcXouSnfoODwLLGZhdHDCfXhcW_i4lp9eTtOoSYAUCinGziNAkVYS41QEC3tccHmR3YQak2agqefl1ZVe",
      featureGraphic: "/fg3.png",
      colorTheme: "#8b5cf6"
    },
    {
      id: 5,
      name: "Pocket Ledger",
      description: "Track expenses, set budgets, and gain financial clarity. Clean, local, and bookkeeping.",
      category: "Productivity",
      logo: "https://lh3.googleusercontent.com/HpK1uj1KxRl8rJy63JcoeSYx1jsDGpPJD1FMZ1zj7CuWHwU2VILKRLpkM8iFLkJO2ELrUK-mOdSpLv4kaqbP",
      featureGraphic: "/fg5.png",
      colorTheme: "#2af50b"
    },
    {
      id: 6,
      name: "OpenForms",
      description: "Build stunning surveys and gather feedback instantly. Supports beautiful fields and streamlined design.",
      category: "Productivity",
      logo: "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0",
      featureGraphic: "/fg4.png",
      colorTheme: "#414141"
    },
  ];

  // Grid entry variants for framer-motion stagger animations
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-indigo-500/30 selection:text-white overflow-hidden">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative pt-36 pb-16 md:pb-24 border-b border-zinc-900">
        {/* Subtle, ambient top radial glow */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          <span className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
            Application Portfolio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Our App Catalog
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Explore the complete suite of lightweight, ad-free utilities engineered with native performance and intuitive interfaces.
          </p>
        </div>
      </section>

      {/* 3. Dynamic Card Grid Directory */}
      <main className="mx-auto max-w-7xl px-6 sm:px-8 py-20 relative z-10">
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {appsData.map((app) => (
            <AppCard 
              key={app.id}
              name={app.name}
              logo={app.logo}
              description={app.description}
              featureGraphic={app.featureGraphic}
              colorTheme={app.colorTheme}
              onActionClick={() => window.open(`https://play.google.com/store/apps/details?id=com.raahim2.${app.name.split(':')[0].trim()}`, '_blank', 'noopener,noreferrer')}
            />
          ))}
        </motion.div>
      </main>

      {/* 4. Footer Section */}
      <Footer />
    </div>
  );
}