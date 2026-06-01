// app/terms/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/commen/Navbar';
import Footer from '../../components/commen/Footer';

// ==========================================
// 3. MAIN TERMS & CONDITIONS PAGE
// ==========================================
export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('agreement');

  // List of terms sections for the sticky table of contents
  const sections = [
    { id: 'agreement', label: '1. Agreement to Terms' },
    { id: 'intellectual', label: '2. Intellectual Property' },
    { id: 'user-rules', label: '3. User Representations' },
    { id: 'prohibited', label: '4. Prohibited Activities' },
    { id: 'liability', label: '5. Limitation of Liability' },
    { id: 'governing-law', label: '6. Governing Law' },
    { id: 'contact', label: '7. Contact Info' }
  ];

  // Optional Scroll-Spy effect to auto-highlight sections on scroll
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-indigo-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Ambient Top Glow matching the main theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-indigo-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Terms of Service
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            Last Updated: June 1, 2026
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
                      ? 'border-indigo-400 text-white pl-5'
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
          <section id="agreement" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              1. Agreement to Terms
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and <strong className="text-white">DevStudio Apps</strong>, concerning your access to and use of our mobile applications, utilities, websites, and services.
            </p>
            <p>
              By installing, accessing, or utilizing any of our products—including but not limited to <em>Counter</em>, <em>Momentum</em>, <em>OpenForms</em>, <em>Pocket Ledger</em>, <em>Renderly</em>, and <em>Sharpify</em>—you agree that you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these terms, you are expressly prohibited from using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section id="intellectual" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Intellectual Property Rights
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Unless otherwise indicated, all intellectual property rights in our apps—including source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics, and the trademarks, service marks, and logos contained therein—are owned or controlled by us, and are protected by copyright and trademark laws.
            </p>
            <p>
              Our content and marks are provided &quot;AS IS&quot; for your personal, non-commercial use or authorized professional workflow. Except as expressly provided, no part of our services or apps may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>

          {/* Section 3 */}
          <section id="user-rules" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. User Representations
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              By using our applications, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>All registration info you submit will be true, accurate, current, and complete.</li>
              <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
              <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
              <li>You will not access our applications through automated or non-human means.</li>
              <li>You will not use our services for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="prohibited" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Prohibited Activities
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              You may not access or use our applications for any purpose other than that for which we make them available. The applications may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
            <p>
              As a user of our applications, you agree not to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>Systematically retrieve data or other content from the applications to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission.</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the apps.</li>
              <li>Engage in unauthorized framing of, linking to, or reverse engineering of the applications.</li>
              <li>Use any information obtained from our products to harass, abuse, or harm another person.</li>
              <li>Interfere with, disrupt, or create an undue burden on the applications or the networks connected to them.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="liability" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Limitation of Liability
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              In no event will DevStudio Apps, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of our apps, even if we have been advised of the possibility of such damages.
            </p>
            <p>
              All our applications and services are provided on an <strong className="text-white">&quot;AS-IS&quot;</strong> and <strong className="text-white">&quot;AS-AVAILABLE&quot;</strong> basis. You agree that your use of our services is at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the applications and your use thereof.
            </p>
          </section>

          {/* Section 6 */}
          <section id="governing-law" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Governing Law
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              These Terms of Service and your use of our applications are governed by and construed in accordance with the laws of the country and state in which <strong className="text-white">DevStudio Apps</strong> operates, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms of Service will be brought exclusively in local courts of competent jurisdiction.
            </p>
          </section>

          {/* Section 7 */}
          <section id="contact" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Contact Information
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              In order to resolve a complaint regarding the applications, report any policy violations, or to receive further information regarding the legal usage of our utilities, please contact us at:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#0e101f]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">DevStudio Apps Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/dev?id=5812710502212545050" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/dev?id=5812710502212545050 ↗
              </a>
            </div>
          </section>

        </main>
      </div>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}