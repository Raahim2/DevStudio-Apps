// components/landing/SectionHeader.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function SectionHeader({ highlightedText, normalText, className = "" }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-5xl mb-20 md:mb-28 ${className}`}
    >
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.15] text-zinc-500">
        {/* Dynamic bright white highlighted text segment */}
        <span className="text-white">{highlightedText}</span>{' '}
        {/* Dynamic muted gray descriptive text segment */}
        {normalText}
      </h2>
    </motion.div>
  );
}