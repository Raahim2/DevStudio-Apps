"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/commen/Navbar";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/commen/Footer";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { AppsSection } from "@/components/landing/AppsSection";
import { PerfectToolsSection } from "@/components/landing/PerfectToolsSection";

// Dynamically import all 6 shaders with SSR disabled to prevent hydration errors
const Shader1 = dynamic(() => import("@/components/landing/Shader/Shader1").then((mod) => mod.Shader1 || mod.Shader || mod.default), { ssr: false });
const Shader2 = dynamic(() => import("@/components/landing/Shader/Shader2").then((mod) => mod.Shader2 || mod.default), { ssr: false });
const Shader3 = dynamic(() => import("@/components/landing/Shader/Shader3").then((mod) => mod.Shader3 || mod.default), { ssr: false });
const Shader4 = dynamic(() => import("@/components/landing/Shader/Shader4").then((mod) => mod.Shader4 || mod.default), { ssr: false });
const Shader5 = dynamic(() => import("@/components/landing/Shader/Shader5").then((mod) => mod.Shader5 || mod.default), { ssr: false });
const Shader6 = dynamic(() => import("@/components/landing/Shader/Shader6").then((mod) => mod.Shader6 || mod.default), { ssr: false });

export default function Home() {
  // Defaulting to 1 for initial static generation structure
  const [currentShader, setCurrentShader] = useState(1);

  useEffect(() => {
    // Generate a random shader index between 1 and 6 only once on the client side
    const randomId = Math.floor(Math.random() * 6) + 1;
    setCurrentShader(randomId);
  }, []);

  // Handler to cycle to the next shader
  const handleCycleShader = () => {
    setCurrentShader((prev) => (prev % 6) + 1);
  };

  // Render selection helper
  const renderShader = () => {
    switch (currentShader) {
      case 1: return <Shader1 />;
      case 2: return <Shader2 />;
      case 3: return <Shader3 />;
      case 4: return <Shader4 />;
      case 5: return <Shader5 />;
      case 6: return <Shader6 />;
      default: return <Shader1 />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section Container */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* Background Shader */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {renderShader()}
        </div>

        {/* Foreground Hero */}
        <div className="relative z-10 w-full">
          <Hero onCycleShader={handleCycleShader} />
        </div>
      </div>

      {/* Grid Sections */}
      <FeaturesSection />
      <AppsSection />
      <PerfectToolsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}