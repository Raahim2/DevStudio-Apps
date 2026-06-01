// app/apps/renderly/page.jsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Relative imports matching your folder structure (four folders up: app/apps/renderly/ -> root)
import Navbar from '../../../components/commen/Navbar';
import Footer from '../../../components/commen/Footer';

// ==========================================
// DATASET CONFIGURATIONS
// ==========================================
const workflowData = [
  { id: 1, title: "Home Experience", desc: "Jump back into your projects or start fresh with a single tap.", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" },
  { id: 2, title: "Project Manager", desc: "Organize unlimited drafts with a professional workspace dashboard.", src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80" },
  { id: 3, title: "Mockup Gallery", desc: "Browse 50+ studio-quality models in 6 massive categories.", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
  { id: 4, title: "The Power Editor", desc: "Take full creative control over colors, textures, patterns, and fonts.", src: "https://images.unsplash.com/photo-1541462608141-ad4979e408c9?auto=format&fit=crop&w=600&q=80" }
];

const categories = [
  {
    id: "01",
    title: "Automobile",
    desc: "Supercars & Concept Cars",
    accent: "text-blue-400",
    circleColor: "bg-blue-500/10"
  },
  {
    id: "02",
    title: "Furniture",
    desc: "Modern Interiors",
    accent: "text-orange-400",
    circleColor: "bg-orange-500/10"
  },
  {
    id: "03",
    title: "Apparels",
    desc: "Streetwear & Fashion",
    accent: "text-green-400",
    circleColor: "bg-green-500/10"
  },
  {
    id: "04",
    title: "Prints",
    desc: "Posters & Branding",
    accent: "text-cyan-400",
    circleColor: "bg-cyan-500/10"
  },
  {
    id: "05",
    title: "Devices",
    desc: "Phones & Laptops",
    accent: "text-purple-400",
    circleColor: "bg-purple-500/10"
  },
  {
    id: "06",
    title: "Products",
    desc: "Packaging & 3D Items",
    accent: "text-red-400",
    circleColor: "bg-red-500/10"
  }
];

// ==========================================
// SECTION 1: HERO
// ==========================================
function RenderlyHero() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Renderly";

  return (
    <section className="relative pt-44 pb-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full -z-10 opacity-20 bg-indigo-600 pointer-events-none"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-bounce border bg-white/5 border-white/10 select-none">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-slate-400">Mobile Engine v1.0 is Live</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
          MASTER YOUR <br /> <span className="text-indigo-500">MOCKUPS.</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light text-slate-400">
          Why settle for flat images? Renderly gives you studio-grade lighting, 
          <span className="font-semibold ml-2 text-white">90+ device categories</span>, and real-time rendering.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <img 
            onClick={() => window.location.href = playStoreUrl} 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            className="h-16 hover:scale-105 transition cursor-pointer select-none" 
            alt="Google Play" 
          />
          <p className="text-sm font-bold tracking-widest uppercase text-slate-500">Android Exclusive</p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 2: WORKFLOW (SCROLLABLE TIMELINE + STICKY SCREEN)
// ==========================================
function RenderlyWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const scrollTriggerPoint = windowHeight / 2;
      const totalHeight = containerRect.height - windowHeight;
      const currentEntry = scrollTriggerPoint - containerRect.top;
      
      let progress = currentEntry / totalHeight;
      progress = Math.max(0, Math.min(1, progress));

      setLineHeight(progress * 100);

      const stepIndex = Math.min(
        Math.floor(progress * workflowData.length),
        workflowData.length - 1
      );
      setCurrentStep(Math.max(0, stepIndex));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      id="workflow" 
      className="relative py-32 transition-colors duration-500 border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Scrolling steps timeline */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 uppercase leading-none text-white">
              The Full <br /> <span className="text-blue-500">Workflow.</span>
            </h2>

            {/* Tracking progress line */}
            <div className="absolute left-6 top-[242px] bottom-[100px] w-[2px] -z-10 bg-slate-800">
              <div 
                className="w-full bg-blue-500 relative transition-all duration-150 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                style={{ height: `${lineHeight}%` }}
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full blur-[4px]"></div>
              </div>
            </div>

            <div className="space-y-[45vh] pb-[10vh]">
              {workflowData.map((step, idx) => (
                <div 
                  key={step.id} 
                  className={`flex gap-8 transition-all duration-700 items-start ${currentStep === idx ? 'opacity-100 translate-x-2' : 'opacity-20 translate-x-0'}`}
                >
                  {/* Step bubble */}
                  <div className={`w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-500 z-10
                    ${currentStep === idx 
                      ? 'bg-blue-500 border-blue-500 text-white scale-110 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                      : 'bg-[#050505] border-slate-700 text-slate-500'}`}>
                    {step.id}
                  </div>

                  <div className="pt-2">
                    <h4 className="text-3xl font-bold mb-4 transition-colors duration-500 text-white">{step.title}</h4>
                    <p className="text-lg max-w-sm leading-relaxed text-slate-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sticky Device Mockup Showcase */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-32 lg:h-[70vh] flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-10 blur-[80px] rounded-full transition-opacity duration-1000 bg-blue-600/10 opacity-100 pointer-events-none"></div>
                
                {/* Phone Frame wrapper */}
                <div className="relative w-[280px] h-[580px] md:w-[310px] md:h-[630px] rounded-[3rem] border-[10px] bg-black border-[#111] overflow-hidden shadow-2xl shadow-blue-500/10">
                  {workflowData.map((step, idx) => (
                    <img 
                      key={step.id}
                      src={step.src} 
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${currentStep === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
                      alt={`Screen ${idx + 1}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 3: BENTO FEATURE DETAILS
// ==========================================
function RenderlyBentoGrid() {
  const cardClass = "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20";

  return (
    <section id="editor" className="py-32 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-white">Everything is customizable.</h2>
          <p className="text-slate-400 text-xl">The App interface gives you granular control over every pixel.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Color Control */}
          <div className={`md:col-span-2 ${cardClass} p-10 rounded-[3rem] overflow-hidden relative border transition-all duration-500`}>
            <h3 className="text-3xl font-bold mb-4 text-white">Ultimate Color Engine</h3>
            <p className="text-slate-400 max-w-sm">Pick any color for any part of the mockup. From the phone casing to the background shadows.</p>
            <div className="mt-8 flex gap-3 z-10 relative">
              <div className="w-12 h-12 rounded-full bg-red-500 border-4 border-white/10"></div>
              <div className="w-12 h-12 rounded-full bg-blue-500 border-4 border-white/10"></div>
              <div className="w-12 h-12 rounded-full bg-emerald-500 border-4 border-white/10"></div>
              <div className="w-12 h-12 rounded-full bg-amber-500 border-4 border-white/10"></div>
              <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-white/10 flex items-center justify-center text-xs text-white font-bold select-none">+</div>
            </div>
            <div className="absolute -right-10 bottom-0 w-64 h-64 blur-[60px] rounded-full bg-indigo-500/10 pointer-events-none"></div>
          </div>

          {/* Text & Icons */}
          <div className={`${cardClass} p-10 rounded-[3rem] flex flex-col justify-between border transition-all duration-500`}>
            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Text &amp; Icons</h3>
              <p className="text-slate-400">Add custom labels, typography, or brand logos directly onto the 3D surface.</p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["Helvetica", "Inter", "★", "Iconify"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-lg text-sm border bg-white/5 border-white/10 text-slate-300 font-mono">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 4: CATEGORIES
// ==========================================
function RenderlyCategories() {
  return (
    <section className="py-32 px-6 overflow-hidden transition-colors duration-500 bg-[#050505] border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
              6 MASSIVE <br /> CATEGORIES
            </h2>
          </div>
          <p className="text-left md:text-right max-w-xs font-medium text-slate-400">
            From supercars to streetwear, we have everything you need to showcase your art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative p-10 rounded-[2.5rem] border bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden cursor-default"
            >
              <h3 className="text-4xl font-black mb-4 text-white">
                {cat.title}
              </h3>
              
              <p className={`font-bold mb-8 italic transition-colors ${cat.accent}`}>
                {cat.desc}
              </p>

              {/* Decorative Circle Effect */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full transition-transform duration-700 group-hover:scale-150 ${cat.circleColor}`}></div>
              
              {/* Background Number */}
              <span className="text-8xl absolute right-4 bottom-4 font-black transition-opacity pointer-events-none text-white opacity-[0.03] group-hover:opacity-10 font-mono">
                {cat.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// SECTION 5: LIVE BENTO CELL SHOWCASE
// ==========================================
function BentoCell({ className = "" }) {
  const [activeSlide, setActiveSlide] = useState(0); 
  const [slides, setSlides] = useState([
    { pattern: 1, product: "" },
    { pattern: 2, product: "" }
  ]);

  // Combined high-fidelity placeholder assets in case WebP files are not loaded locally
  const products = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=400&q=80"
  ];

  const getRandomProduct = () => products[Math.floor(Math.random() * products.length)];
  const getRandomPattern = () => Math.floor(Math.random() * 5) + 1;

  useEffect(() => {
    setSlides([
      { pattern: getRandomPattern(), product: getRandomProduct() },
      { pattern: getRandomPattern(), product: getRandomProduct() }
    ]);
  }, []);

  useEffect(() => {
    const delay = Math.random() * 5000 + 5000;
    const timer = setTimeout(() => {
      const nextIndex = activeSlide === 0 ? 1 : 0;
      setSlides(prev => {
        const newSlides = [...prev];
        newSlides[nextIndex] = { pattern: getRandomPattern(), product: getRandomProduct() };
        return newSlides;
      });
      setTimeout(() => setActiveSlide(nextIndex), 200);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <div className={`relative overflow-hidden rounded-3xl border transition-all duration-1000 bg-zinc-900 border-white/10 ${className}`}>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2.5s] ease-in-out bg-cover bg-center flex items-center justify-center ${
            activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.45)',
            backgroundBlendMode: 'overlay'
          }}
        >
          {slide.product && (
            <img 
              src={slide.product} 
              className="w-full h-full object-cover transform transition-transform duration-[10s] hover:scale-110 brightness-100 contrast-[1.05]" 
              alt="Mockup Preview" 
            />
          )}
        </div>
      ))}
      <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />
    </div>
  );
}

function BentoShowcase() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-black border-t border-gray-900">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 text-white">
          Instant <span className="text-indigo-500 italic">Production.</span>
        </h2>
        <p className="text-zinc-500 uppercase font-bold tracking-widest text-sm">
          Your designs, rendered on any surface in seconds.
        </p>
      </div>

      {/* Grid container */}
      <div className="max-w-[1600px] mx-auto h-[120vh] md:h-[90vh] grid grid-cols-2 md:grid-cols-5 grid-rows-6 md:grid-rows-3 gap-4 relative">
        <BentoCell /> 
        <BentoCell /> 
        
        {/* Big A (Top middle-right) */}
        <BentoCell className="md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3" />
        
        <BentoCell /> 
        
        {/* Big B (Bottom left-middle) */}
        <BentoCell className="md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4" />
        
        <BentoCell /> 
        <BentoCell /> 
        <BentoCell /> 
        <BentoCell /> 
      </div>
    </section>
  );
}

// ==========================================
// MAIN COMBINED RENDERLY LANDING COMPONENT
// ==========================================
export default function RenderlyLandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 transition-colors duration-700 font-sans selection:bg-indigo-500/30 selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .pattern-bg { 
          background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px); 
          background-size: 30px 30px; 
        }
      `}} />

      {/* Standard Header Navigation */}
      <Navbar />

      <div className="pattern-bg">
        {/* Renderly Hero Section */}
        <RenderlyHero />

        {/* Scrolling Interactive Workflow Timeline */}
        <RenderlyWorkflow />

        {/* Customizable Bento Highlights Grid */}
        <RenderlyBentoGrid />

        {/* Product Categories */}
        <RenderlyCategories />

        {/* Live-Flipping Mockup Showcase Grid */}
        <BentoShowcase />

        {/* Standard Footer Navigation */}
        <Footer />
      </div>
    </div>
  );
}