// app/apps/Counter/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/commen/Navbar';
import Footer from '../../../../components/commen/Footer';

// ==========================================
// 3. MAIN PRIVACY POLICY COMPONENT
// ==========================================
export default function CounterPrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'data-collection', label: '2. Zero Data Collection' },
    { id: 'local-first', label: '3. Local-First Storage' },
    { id: 'ads', label: '4. Third-Party Ads' },
    { id: 'children', label: '5. Children\'s Privacy' },
    { id: 'support', label: '6. Support & Contact' }
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
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Counter";


  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-rose-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Ambient Top Glow in custom Rose/Coral */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-rose-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">Counter: Click Counter App</span> | Last Updated: June 1, 2026
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
                      ? 'border-rose-400 text-white pl-5'
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
              This Privacy Policy details how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) manages and protects your data when utilizing our mobile application, <strong className="text-white">Counter: Click Counter App</strong> (distributed on the Google Play Store).
            </p>
            <p>
              By installing and using the Counter app, you consent to the storage configurations and automated third-party advertising parameters detailed within this policy. If you do not agree, you are advised to delete the app and discontinue its use.
            </p>
          </section>

          {/* Section 2 */}
          <section id="data-collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Zero Data Collection
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Counter is engineered from the ground up to respect your absolute privacy:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">No Accounts Required:</strong> You can utilize the application without creating an account, registering your email, or submitting personal profiles.</li>
              <li><strong className="text-white">No Cloud Transmission:</strong> We do not operate or host databases that collect your running tallies, scores, or habit configurations.</li>
              <li><strong className="text-white">No Contact Scraping:</strong> The app does not request or access your contacts, files, media, microphone, or geographical GPS location.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="local-first" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Local-First Storage
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Any database entries, count logs, timestamps, and multi-counter configurations that you build inside the app are **saved locally on your device&apos;s isolated storage memory** [1].
            </p>
            <p>
              Because your tallies never leave your hand, we have no access to them. When you delete or uninstall Counter from your device, your local tally records and historical configurations are permanently deleted.
            </p>
          </section>

          {/* Section 4 */}
          <section id="ads" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. In-App Advertisements
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To maintain Counter as a completely free utility, **this application contains advertisements** served by third-party ad networks (such as Google AdMob).
            </p>
            <p>
              While we do not collect your personal details, these third-party advertising SDKs may process anonymized device identifiers, mobile carrier details, IP addresses, and performance diagnostics to serve relevant ads. These services process data in accordance with Google Play Store compliance structures:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">Google AdMob Privacy Policy ↗</a></li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Counter is a family-friendly tally tool compliant with the Children&apos;s Online Privacy Protection Act (COPPA) and Google Play&apos;s Families Policies.
            </p>
            <p>
              Because our application collects zero personal information, we do not knowingly harvest, collect, or process any personal details from children under the age of 13.
            </p>
          </section>

          {/* Section 6 */}
          <section id="support" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Support &amp; Contact
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              For legal inquiries, documentation concerns, or general usage support regarding the Counter application, please contact us on Google Play:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#140c0d]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">Counter App Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/details?id=com.raahim2.Counter ↗
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