// components/commen/Footer.jsx
'use client';

import React from 'react';

export default function Footer() {
  const footerColumns = [
    {
      title: "Our Apps",
      links: [
        { label: "Counter", href: "/apps/counter" },
        { label: "Momentum", href: "/apps/momentum" },
        { label: "OpenForms", href: "/apps/openforms" },
        { label: "Pocket Ledger", href: "/apps/pocket-ledger" },
        { label: "Renderly", href: "/apps/renderly" },
        { label: "Sharpify", href: "/apps/sharpify" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" }
      ]
    },
    {
      title: "Community",
      links: [
        { label: "Google Play Store", href: "https://play.google.com", isExternal: true },
        { label: "GitHub", href: "https://github.com", isExternal: true },
        { label: "X / Twitter", href: "https://x.com", isExternal: true }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-16 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Balanced Grid: 1 Brand Column + 3 Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3">
              <img 
            src="/logo.png"

                alt="DevStudio Apps Logo" 
                className="w-7 h-7 rounded-lg"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                DevStudio Apps
              </span>
            </div>
            <p className="text-[13px] text-zinc-500 leading-relaxed max-w-[240px]">
              Crafting lightweight, lightning-fast digital utilities and educational software.
            </p>
          </div>

          {/* Columns 2-4: Navigation links */}
          {footerColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              <h3 className="text-[14px] font-semibold text-white tracking-tight mb-5">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-y-3">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center text-[13.5px] text-[#8a8f98] hover:text-white transition-colors duration-150"
                    >
                      <span>{link.label}</span>
                      {link.isExternal && (
                        <span className="text-zinc-600 group-hover:text-white transition-colors duration-150 ml-0.5 text-[11px] font-medium leading-none">
                          &nbsp;↗
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright segment */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-y-4">
          <span className="text-[12.5px] text-zinc-600 font-mono">
            &copy; 2026 DevStudio Apps. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}