// components/landing/FeatureCard.jsx
'use client';

import { motion } from 'framer-motion';

export function FeatureCard({ figure, title, description, children }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      variants={cardVariants}
      // Changed border-white/5 to border-zinc-800 to make lines highly visible
      className="group relative flex flex-col p-8 md:p-12 border-b border-zinc-800 md:border-b-0 md:border-r last:border-r-0 last:border-b-0 overflow-hidden"
    >
      {/* Top: Figure Tag */}
      <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
        {figure}
      </span>

      {/* Center: Graphic Container */}
      <div className="flex-1 flex items-center justify-center min-h-[240px] mt-6">
        <motion.div
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300"
        >
          {children}
        </motion.div>
      </div>

      {/* Bottom: Title & Description */}
      <div className="mt-8">
        <h3 className="text-[15px] font-semibold text-white tracking-tight">
          {title}
        </h3>
        <p className="text-[13px] md:text-[14px] text-zinc-400 mt-2.5 leading-relaxed max-w-[280px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}