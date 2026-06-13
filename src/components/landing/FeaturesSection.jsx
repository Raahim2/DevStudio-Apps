// components/landing/FeaturesSection.jsx
'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '../commen/SectionHeader';
import { FeatureCard } from './FeatureCard';
import { RingsGraphic } from './Graphics/RingsGraphic';   // First interactive component (Left)
import { CubesGraphic } from './Graphics/CubesGraphic';   // Second interactive component (Center)
import { BarsGraphic } from './Graphics/BarsGraphic';     // Third interactive component (Right)

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className="bg-black py-24 md:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Text Section */}
        <SectionHeader 
          highlightedText="A new species of product tool."
          normalText="Purpose-built for seamless mobile experiences. A curated suite of lightweight, beautifully designed utilities engineered to elevate your daily digital routine."
        />
        

        {/* 3-Column Grid with highly-visible borders and 100% interactive animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-zinc-800 md:border-b-0"
        >
          {/* FIG 0.2 - Animated Rings & Holographic Core (Swapped to inline component) */}
          <FeatureCard 
            figure="FIG 0.2"
            title="Built for purpose"
            description="DevStudio is shaped by the practices and principles of world-class product teams."
          >
            <RingsGraphic />
          </FeatureCard>

          {/* FIG 0.3 - Animated Nested Cubes */}
          <FeatureCard 
            figure="FIG 0.3"
            title="Powered by AI agents"
            description="Designed for workflows shared by humans and agents. From drafting PRDs to pushing PRs."
          >
            <CubesGraphic />
            
          </FeatureCard>

          {/* FIG 0.4 - Animated Parallel Plates */}
          <FeatureCard 
            figure="FIG 0.4"
            title="Designed for speed"
            description="Reduces noise and restores momentum to help teams ship with high velocity and focus."
          >
            <BarsGraphic />
          </FeatureCard>
        </motion.div>

      </div>
    </section>
  );
}