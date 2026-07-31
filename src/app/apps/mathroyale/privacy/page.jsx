
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

// ==========================================
// 3. MAIN PRIVACY POLICY COMPONENT
// ==========================================
export default function MathRoyalePrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'data-collection', label: '2. Data Collection' },
    { id: 'local-first', label: '3. Progress & Storage' },
    { id: 'third-party', label: '4. Third-Party Analytics' },
    { id: 'children', label: '5. Children\'s Privacy' },
    { id: 'security', label: '6. Security & Retention' },
    { id: 'support', label: '7. Support & Contact' }
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-violet-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-violet-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">Math Royale</span> | Last Updated: June 1, 2026
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
                      ? 'border-violet-400 text-white pl-5'
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
          <section id="scope" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              1. Scope &amp; Consent
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              This Privacy Policy explains how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) protects your privacy when using our mobile application, <strong className="text-white">Math Royale</strong> (distributed on the Google Play Store).
            </p>
            <p>
              By installing and utilizing Math Royale, you consent to the storage architectures, telemetry processing, and analytic parameters detailed within this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To coordinate gamified quest progression, leveling structures, and habit tracking, Math Royale collects and processes the following parameters:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Anonymized Telemetry:</strong> Hardware configurations, operating system versions, and performance reports (such as rendering lag or loading errors) are collected to ensure core stability.</li>
              <li><strong className="text-white">Secure Billing Tokens:</strong> If you purchase in-app upgrades or premium quest modules, transaction tokens are securely processed via Google Play Billing.</li>
              <li><strong className="text-white">No Personal Identifiers:</strong> We do not collect or request your name, personal email, contact list, telephone numbers, or physical location.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="local-first" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Progress &amp; Local-First Storage
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Your gamified progress—including accumulated experience points (XP), unlocked levels, completed logic challenges, daily quest streaks, and custom achievements—is **saved exclusively on your device&apos;s isolated local storage** [1].
            </p>
            <p>
              Because your academic parameters are strictly sandboxed on your device, we have zero access to them. When you delete or uninstall Math Royale from your device, your accumulated levels, quest histories, and running progress metrics are permanently and non-recoverably deleted.
            </p>
          </section>

          {/* Section 4 */}
          <section id="third-party" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Third-Party Analytics
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To maintain secure payment validations and aggregate crash diagnostics, we integrate trusted third-party SDK packages that process non-personal, technical identifiers:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Google Play Services:</strong> Manages in-app purchases, software license checks, and general Play Console integrations.</li>
              <li><strong className="text-white">Google Firebase / Sentry:</strong> Transmits anonymous bug diagnostics and system crash traces to help us debug cognitive challenges and render paths.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Math Royale is a logic-aptitude training tool designed for personal development. We comply strictly with COPPA and Google Play&apos;s Families Policies.
            </p>
            <p>
              Because our application does not request, harvest, or maintain personal profiles, we do not knowingly gather any personally identifiable information from children under the age of 13.
            </p>
          </section>

          {/* Section 6 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We apply industry-standard security structures to safeguard your local progress files on-device from unauthorized modification.
            </p>
            <p>
              Any transient diagnostic parameters or transaction billing tokens transmitted to our secure billing verification nodes are encrypted during transmission and are subject to automatic, permanent deletion routines once validated.
            </p>
          </section>

          {/* Section 7 */}
          <section id="support" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Support &amp; Contact Information
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              For legal questions, purchase confirmations, or help regarding your learning progress or streaks, please reach out to us directly on Google Play:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#100c14]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">Math Royale Support Team</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.raahim2.Math Royale" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/details?id=com.raahim2.Math Royale ↗
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