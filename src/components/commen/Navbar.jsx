// components/Navbar.jsx
'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Changed "sticky top-0 w-full" to "fixed top-0 left-0 right-0"
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-lg backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Left: Logo & Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="DevStudio Apps Logo"
            className="h-12 w-12 rounded-md object-contain"
          />
          <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
            DevStudio Apps
          </span>
        </div>

        {/* Right: Desktop Navigation Menu */}
        <div className="hidden md:flex items-center gap-x-6">
          <nav className="flex items-center gap-x-6 text-[14px] font-medium text-[#8A8F98]">
            <a href="/" className="hover:text-white transition-colors duration-150">Home</a>
            <a href="/apps" className="hover:text-white transition-colors duration-150">Products</a>
            <a href="/about" className="hover:text-white transition-colors duration-150">About</a>
            <a href="/privacy" className="hover:text-white transition-colors duration-150">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors duration-150">Terms</a>
          </nav>

          {/* Vertical Divider */}
          <div className="h-4 w-[1px] bg-white/10" />

          {/* User Actions */}
          <div className="flex items-center gap-x-4">
           
            <a
              href="https://play.google.com/store/apps/dev?id=5812710502212545050"
              className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-neutral-200 transition-colors duration-150"
            >
              View on Play Store
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-white/5 bg-black/90 backdrop-blur-md px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-y-4 text-[15px] text-[#8A8F98]">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/apps" className="hover:text-white transition-colors">Products</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <div className="my-2 h-[1px] w-full bg-white/10" />
            
            <a
              href="https://play.google.com/store/apps/dev?id=5812710502212545050"
              className="w-full text-center rounded-full bg-white py-2 text-sm font-semibold text-black hover:bg-neutral-200 transition-colors"
            >
              View on Play Store
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}