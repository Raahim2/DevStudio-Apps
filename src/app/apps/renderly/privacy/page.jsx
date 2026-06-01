// app/apps/renderly/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

// ==========================================
// 3. MAIN RENDERLY PRIVACY PAGE
// ==========================================
export default function RenderlyPrivacyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'overview', label: '1. Overview' },
    { id: 'architecture', label: '2. Data Architecture' },
    { id: 'permissions', label: '3. App Permissions' },
    { id: 'telemetry', label: '4. Third-Party Telemetry' },
    { id: 'security', label: '5. Security & Retention' },
    { id: 'compliance', label: '6. Global Compliance' },
    { id: 'children', label: '7. Children\'s Privacy' }
  ];

  // Scroll-Spy effect to auto-highlight sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-blue-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Blue/indigo top radial glow to match Renderly's theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-blue-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white font-sans">Renderly: Mockup Design Maker</span> | Ref: <span className="text-white">RND-2025-001</span> | Updated: April 10, 2026
          </p>
        </div>
      </div>

      {/* Main Content Layout Block */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-4 gap-16 relative">
        
        {/* Sidebar: Sticky Navigation (Hidden on Mobile) */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-28 flex flex-col gap-y-4">
            <h4 className="text-[12px] font-mono tracking-widest text-zinc-500 uppercase">
              Table of Contents
            </h4>
            <nav className="flex flex-col gap-y-2 mt-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-[13.5px] font-medium tracking-tight border-l-2 py-1.5 pl-4 transition-all duration-150 ${
                    activeSection === section.id
                      ? 'border-blue-400 text-white pl-5'
                      : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Core Legal Terms Text Block */}
        <main className="lg:col-span-3 prose prose-invert max-w-none text-zinc-400 text-[14.5px] md:text-base leading-relaxed flex flex-col gap-y-12">
          
          {/* Section 1 */}
          <section id="overview" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              1. Overview
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              <strong className="text-white">Renderly: Mockup Design Maker</strong> (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;the App&quot;) is a professional on-device design utility operated by <strong className="text-white">DevStudio Apps</strong>.
            </p>
            <p>
              Unlike traditional template editors that harvest files on centralized cloud servers, Renderly is built on a **Privacy-First local processing architecture**. We process and generate your creative canvases locally to ensure maximum speed, complete offline capability, and absolute data protection.
            </p>
          </section>

          {/* Section 2 */}
          <section id="architecture" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Data Processing Architecture
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p className="font-semibold text-white text-[15px]">
              Local Processing Only
            </p>
            <p>
              Renderly utilizes your mobile device&apos;s hardware acceleration (GPU and CPU) to render complex 3D mockups. All imported assets—such as your portfolio images, design shapes, procedural patterns, and brand logos—are processed and rendered strictly within your device&apos;s isolated memory space. We do not host, store, or maintain any cloud-based repositories of your creative work.
            </p>
            <p className="font-semibold text-white text-[15px] mt-4">
              No Personal Tracking
            </p>
            <p>
              We believe in respect for your space. We do not track your physical location, browser history, biometric parameters, or contact lists. The application operates completely without requiring any account creation or registration.
            </p>
          </section>

          {/* Section 3 */}
          <section id="permissions" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. App Permissions &amp; Justification
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              In strict accordance with Google Play Developer Program Policies, we disclose the following system permissions required to enable core utility functions inside Renderly:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400 font-mono text-[13px]">
              <li>
                <strong className="text-white font-sans">READ_EXTERNAL_STORAGE / READ_MEDIA_IMAGES:</strong><br />
                Required solely to allow you to browse and select your designs, photos, or logos from your local gallery to overlay onto mockup canvases.
              </li>
              <li>
                <strong className="text-white font-sans">WRITE_EXTERNAL_STORAGE:</strong><br />
                Required solely to export, encode, and save your final high-resolution (up to 4K) mockup renderings back to your device&apos;s storage directory.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="telemetry" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Third-Party Telemetry
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To ensure app stability, detect bugs, and continuously optimize our 3D processing pipelines, we utilize trusted, anonymized third-party telemetry SDKs. These SDKs process non-personal, technical identifiers (such as device model, OS build, and performance logs):
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Google Play Services:</strong> Coordinates secure background billing structures and critical security protocols.</li>
              <li><strong className="text-white">Expo SDK / Sentry:</strong> Monitors the on-device layout engine, transmitting anonymous diagnostic crash dumps to isolate rendering bottlenecks.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Data Security &amp; Retention
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Since Renderly is built as a local-first application, the security of your mockups, drafts, and assets is bound entirely to the security of your physical mobile device.
            </p>
            <div className="mt-4 p-5 rounded-2xl border border-red-500/10 bg-red-500/5 text-[13.5px] leading-relaxed">
              <strong className="text-red-400 block mb-1">Important Note on App Uninstallation:</strong>
              Uninstalling Renderly from your device will permanently erase all locally stored workspace drafts, custom presets, and cached models. Because we maintain zero cloud-based backups, this data is completely non-recoverable.
            </div>
          </section>

          {/* Section 6 */}
          <section id="compliance" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Global Compliance
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p className="font-semibold text-white text-[15px]">
              GDPR Compliance (EU Rights)
            </p>
            <p>
              Under the European Union General Data Protection Regulation (GDPR), users have the right to inspect, correct, or permanently erase their personal data. Because Renderly does not transmit or harvest personal details, our on-device architecture inherently maintains absolute compliance with GDPR standards.
            </p>
            <p className="font-semibold text-white text-[15px] mt-4">
              CCPA Compliance (California Rights)
            </p>
            <p>
              The California Consumer Privacy Act (CCPA) protects consumers from unauthorized selling, renting, or trading of personal information. Renderly does not collect and consequently never sells, shares, or rents your parameters to any commercial advertisers or data brokers.
            </p>
          </section>

          {/* Section 7 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Children&apos;s Privacy &amp; Contact
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Renderly does not target or knowingly collect data from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with diagnostic contact information, please contact us immediately on Google Play so we can clear it from our telemetry logs:
            </p>
            
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#0c101f]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">Renderly App Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.raahim2.Renderly" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/details?id=com.raahim2.Renderly ↗
              </a>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}