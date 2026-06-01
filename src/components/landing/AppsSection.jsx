// components/landing/AppsSection.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Added standard Next.js Router for client-side navigation
import { AppCard } from './AppCard';
import { SectionHeader } from '../commen/SectionHeader';

export function AppsSection() {
  const router = useRouter();

  // Unified structured dataset with redirect targets
  const appsData = [
    {
      id: 1,
      name: "Sharpify",
      description: "Enhance image resolution instantly with advanced AI. Upscale textures and denoise.",
      category: "Design",
      logo: "https://lh3.googleusercontent.com/6OWhVt_goGRVtTtwRShblkBinYeq9OjdvlIBTln5Y-PD3msEM5KpFM53wUYHPWPPiY920jUBlwmMtNcHrFa3yA",
      featureGraphic: "/fg1.png",
      colorTheme: "#9d9898",
      redirect: "/apps/sharpify"
    },
    {
      id: 2,
      name: "Counter",
      description: "Simple, beautiful, and tactile counting. Keep track of tallies, scores, and variables with ease.",
      category: "Productivity",
      logo: "https://play-lh.googleusercontent.com/YjtNbrKvzTycJQJ4jwFA4adM3prA-KNeeIpWOnrO3GOBdpufwB7syp77HVLJRjVCLTurjXNpqGKlM0qpxxhj=s512-rw",
      featureGraphic: "/fg2.png",
      colorTheme: "#f9687d",
      redirect: "/apps/counter"
    },
    {
      id: 3,
      name: "Renderly",
      description: "Generate high-fidelity mockups in seconds. Showcase your layouts on professional device wraps.",
      category: "Design",
      logo: "https://lh3.googleusercontent.com/R3i-_EpOZpRrDFaXkVh82d8j-l1qnp0MuWiUHkfrjKRhzd7CPGw037BCoVlfp6k8idK0v4qtatCF9He3e7qM",
      featureGraphic: "/fg6.png",
      colorTheme: "#1643f9",
      redirect: "/apps/renderly"
    },
    {
      id: 4,
      name: "Momentum",
      description: "Turn your learning goals into an epic quest. Gain XP, level up, and build consistent habits.",
      category: "Engineering",
      logo: "https://lh3.googleusercontent.com/vbrAcXouSnfoODwLLGZhdHDCfXhcW_i4lp9eTtOoSYAUCinGziNAkVYS41QEC3tccHmR3YQak2agqefl1ZVe",
      featureGraphic: "/fg3.png",
      colorTheme: "#8b5cf6",
      redirect: "/apps/momentum"
    },
    {
      id: 5,
      name: "Pocket Ledger",
      description: "Track expenses, set budgets, and gain financial clarity. Clean, local, and bookkeeping.",
      category: "Productivity",
      logo: "https://lh3.googleusercontent.com/HpK1uj1KxRl8rJy63JcoeSYx1jsDGpPJD1FMZ1zj7CuWHwU2VILKRLpkM8iFLkJO2ELrUK-mOdSpLv4kaqbP",
      featureGraphic: "/fg5.png",
      colorTheme: "#2af50b",
      redirect: "/apps/pocket-ledger"
    },
    {
      id: 6,
      name: "OpenForms",
      description: "Build stunning surveys and gather feedback instantly. Supports beautiful fields and streamlined design.",
      category: "Productivity",
      logo: "https://lh3.googleusercontent.com/Yj_w1vQ-ABY4dOMtF0qJ0ePUIi9Tb7TM-XvgIGFnwPAdbRHY2p_NujLumYI68vHVYBofA6zd5281JzJWWi60Oh0",
      featureGraphic: "/fg4.png",
      colorTheme: "#414141",
      redirect: "/apps/openforms"
    },
  ];

  return (
    <section className="bg-black py-24 md:py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Section without tab buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-y-6 mb-16 md:mb-20">
          <SectionHeader 
            highlightedText="There’s an app for that."
            normalText="Explore our suite of lightweight, lightning-fast digital utilities and educational software."
          />
        </div>

        {/* Horizontal Card Carousel */}
        <div className="w-full">
          <motion.div 
            layout
            className="flex gap-x-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent"
          >
            <AnimatePresence mode="popLayout">
              {appsData.map((app) => (
                <AppCard 
                  key={app.id} 
                  {...app}  
                  // Captures click actions and executes a client-side route redirection
                  onActionClick={() => router.push(app.redirect)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}