"use client";

import React from 'react';

export function MobileUIGraphic() {
  return (
    <svg 
      viewBox="0 0 320 360" 
      className="w-full h-full max-w-[320px] max-h-[360px] overflow-visible select-none phone-container"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        

        {/* Dynamic Screen Mask */}
        <mask id="screen-mask">
          <rect x="68" y="28" width="184" height="304" rx="20" fill="#ffffff" />
        </mask>

        {/* Gradients */}
        <linearGradient id="neon-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>

        <linearGradient id="neon-pink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <linearGradient id="card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#312e81" />
          <stop offset="50%" stopColor="#4f46e5" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>

        {/* Neon Glow Filter */}
        <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* CSS Transitions and Hover Parallax */}
        <style dangerouslySetInnerHTML={{ __html: `
          .phone-container {
            cursor: pointer;
          }

          /* Default layout transformations */
          .phone-body {
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: 160px 180px;
          }

          .widget-left {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: 47px 87px;
            animation: bounceWidgetLeft 4s ease-in-out infinite alternate;
          }

          .widget-right {
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: 247px 180px;
            animation: bounceWidgetRight 4s ease-in-out infinite alternate;
            animation-delay: 0.8s;
          }

          /* Hover Actions: Phone scales up slightly, widgets drift outwards */
          .phone-container:hover .phone-body {
            transform: translateY(-8px) scale(1.02);
          }

          .phone-container:hover .widget-left {
            transform: translate(-14px, -10px) scale(1.08);
          }

          .phone-container:hover .widget-right {
            transform: translate(14px, 10px) scale(1.08);
          }

          /* Smooth hovering bounces */
          @keyframes bounceWidgetLeft {
            from { transform: translateY(0px); }
            to { transform: translateY(-6px); }
          }

          @keyframes bounceWidgetRight {
            from { transform: translateY(0px); }
            to { transform: translateY(6px); }
          }
        ` }} />
      </defs>

      {/* Frame Canvas */}
      <rect width="100%" height="100%" fill="url(#phone-bg-glow)" rx="24" />

      {/* Main Floating Phone Body Group */}
      <g className="phone-body">
        
        {/* Device Outer Chassis Bezel */}
        <rect x="60" y="20" width="200" height="320" rx="28" fill="#18181b" stroke="#3f3f46" strokeWidth="2.5" />
        
        {/* Inside Screen Content (Masked) */}
        <g mask="url(#screen-mask)">
          {/* AMOLED Screen Background */}
          <rect x="68" y="28" width="184" height="304" fill="#09090b" />

          {/* Status Bar Layout */}
          <g stroke="#52525b" strokeWidth="1" opacity="0.6">
            {/* Battery status/WiFi mock capsules */}
            <rect x="220" y="38" width="16" height="8" rx="2" />
            <line x1="211" y1="46" x2="215" y2="40" />
            <line x1="206" y1="46" x2="208" y2="42" strokeWidth="1.5" />
            {/* Clock mock pill */}
            <rect x="80" y="38" width="24" height="8" rx="4" fill="#27272a" stroke="none" />
          </g>

          {/* Screen Header */}
          <g>
            {/* Mock User Avatar */}
            <circle cx="88" cy="65" r="12" fill="#27272a" />
            <circle cx="88" cy="61" r="4.5" fill="#52525b" />
            <path d="M 79 73 C 79 69, 97 69, 97 73 Z" fill="#52525b" />
            {/* Section Title Bar Mock */}
            <rect x="108" y="56" width="55" height="7" rx="3.5" fill="#27272a" />
            <rect x="108" y="68" width="30" height="5" rx="2.5" fill="#18181b" />
            {/* Action Bar Icon */}
            <rect x="216" y="53" width="24" height="24" rx="8" fill="#18181b" />
            <circle cx="228" cy="65" r="3" stroke="#52525b" strokeWidth="1.5" />
          </g>

          {/* Dynamic Credit Card / Wallet Dashboard Widget */}
          <g>
            {/* Card Body */}
            <rect x="78" y="92" width="164" height="88" rx="14" fill="url(#card-grad)" stroke="#ffffff" strokeWidth="0.5" strokeOpacity="0.15" />
            
            {/* Gold Chip Indicator Mock */}
            <rect x="92" y="106" width="18" height="13" rx="3" fill="#fbbf24" fillOpacity="0.8" />
            
            {/* Card Mock Details (Data fields represented as abstract lines) */}
            <rect x="92" y="142" width="85" height="6" rx="3" fill="#ffffff" fillOpacity="0.4" />
            <rect x="92" y="154" width="35" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.25" />
            
            {/* NFC Wireless Symbol Mock */}
            <path d="M 218 106 C 221 109, 221 113, 218 116 M 222 103 C 226 107, 226 115, 222 119" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </g>

          {/* Interactive Graph Statistics Area */}
          <g>
            {/* Section Header Line Mock */}
            <rect x="78" y="200" width="45" height="6" rx="3" fill="#27272a" />
            <rect x="212" y="200" width="30" height="6" rx="3" fill="#18181b" />

            {/* Glowing Linear Vector Metrics Chart */}
            <path 
              d="M 78 255 C 95 240, 110 215, 125 215 C 145 215, 155 245, 175 245 C 195 245, 210 205, 225 205 C 235 205, 238 215, 242 225" 
              stroke="url(#neon-cyan)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              filter="url(#neon-glow)" 
            />
            {/* Graph Gradient Base shading */}
            <path 
              d="M 78 255 C 95 240, 110 215, 125 215 C 145 215, 155 245, 175 245 C 195 245, 210 205, 225 205 L 225 265 L 78 265 Z" 
              fill="url(#neon-cyan)" 
              opacity="0.08" 
            />

            {/* Floating chart intersection nodes */}
            <circle cx="125" cy="215" r="4.5" fill="#06b6d4" filter="url(#neon-glow)" />
            <circle cx="125" cy="215" r="1.5" fill="#ffffff" />
            
            <circle cx="225" cy="205" r="4.5" fill="#3b82f6" filter="url(#neon-glow)" />
            <circle cx="225" cy="205" r="1.5" fill="#ffffff" />
          </g>

          {/* Bottom Navigation Dock */}
          <g>
            <rect x="68" y="284" width="184" height="48" fill="#0c0c10" />
            <line x1="68" y1="284" x2="252" y2="284" stroke="#18181b" strokeWidth="1" />
            
            {/* 4 Navigation Points mocks */}
            <circle cx="95" cy="304" r="5" fill="#3b82f6" filter="url(#neon-glow)" />
            <circle cx="138" cy="304" r="4" fill="#27272a" />
            <circle cx="182" cy="304" r="4" fill="#27272a" />
            <circle cx="225" cy="304" r="4" fill="#27272a" />
          </g>

        </g>
        
        {/* Hardware Speaker Port (Top Bezel) */}
        <rect x="135" y="23" width="50" height="3" rx="1.5" fill="#27272a" />
      </g>

      {/* PARALLAX FLOATING WIDGET A: Notification Alert (Top-Left) */}
      <g className="widget-left" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.65))">
        {/* Soft frosted card base */}
        <rect x="25" y="65" width="46" height="46" rx="14" fill="#111115" fillOpacity="0.9" stroke="#27272a" strokeWidth="1" />
        
        {/* Active glowing alarm / bell symbol */}
        <circle cx="48" cy="88" r="10" fill="url(#neon-pink)" filter="url(#neon-glow)" opacity="0.8" />
        <path d="M 48 83 C 45 83, 44 87, 44 91 L 52 91 C 52 87, 51 83, 48 83 Z" fill="#ffffff" />
        <circle cx="48" cy="93" r="1.5" fill="#ffffff" />
      </g>

      {/* PARALLAX FLOATING WIDGET B: Transaction Analytics Card (Right-Center) */}
      <g className="widget-right" filter="drop-shadow(0 12px 24px rgba(0,0,0,0.7))">
        {/* Soft frosted card base */}
        <rect x="205" y="160" width="85" height="62" rx="12" fill="#111115" fillOpacity="0.9" stroke="#27272a" strokeWidth="1" />
        
        {/* Mini indicator graphics (abstract status indicators) */}
        <rect x="217" y="174" width="22" height="6" rx="3" fill="#a855f7" />
        <rect x="217" y="184" width="38" height="4" rx="2" fill="#27272a" />
        <rect x="217" y="192" width="25" height="4" rx="2" fill="#18181b" />

        {/* Small glowing transaction success indicator */}
        <circle cx="264" cy="191" r="11" fill="url(#neon-cyan)" filter="url(#neon-glow)" opacity="0.75" />
        {/* Checkmark placeholder */}
        <path d="M 260 191 L 263 194 L 269 188" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
