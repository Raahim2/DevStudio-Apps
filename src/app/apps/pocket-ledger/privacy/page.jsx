// app/apps/pocket-ledger/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

// ==========================================
// 3. MAIN PRIVACY POLICY COMPONENT
// ==========================================
export default function PocketLedgerPrivacy() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'no-collection', label: '2. Zero Data Collection' },
    { id: 'local-first', label: '3. Local Storage' },
    { id: 'business-model', label: '4. Sustainable Model' },
    { id: 'children', label: '5. Children\'s Privacy' },
    { id: 'backups', label: '6. Security & Backups' },
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-emerald-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Ambient Top Glow in custom Green/Emerald matching Pocket Ledger's `#2af50b` colorTheme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-emerald-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">Pocket Ledger: Expense Tracker</span> | Last Updated: June 1, 2026
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
                      ? 'border-emerald-400 text-white pl-5'
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
              This Privacy Policy explains how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) protects your privacy and data when using our paid mobile application, <strong className="text-white">Pocket Ledger: Expense Tracker</strong> (published on the Google Play Store).
            </p>
            <p>
              By purchasing, installing, and utilizing Pocket Ledger, you consent to the offline storage and data handling practices detailed in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="no-collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Zero Data Collection
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Pocket Ledger is built as an offline-first premium utility with an absolute commitment to privacy:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">No Server Synchronization:</strong> We do not operate cloud databases that sync, harvest, or backup your personal transaction ledgers.</li>
              <li><strong className="text-white">No Personal Identifiers:</strong> The application does not require user accounts, emails, telephone numbers, or profile registrations.</li>
              <li><strong className="text-white">No Permission Bloat:</strong> The app operates without requesting access to your contacts, camera, location services, or SMS logs.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="local-first" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Local-First Processing &amp; Storage
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Your financial data—including budget caps, categorical expenses, income logs, and monthly ledgers—is **saved exclusively on your device&apos;s local storage database** [1].
            </p>
            <p>
              Because your personal financial parameters are fully contained on your device, we have zero capability to access, inspect, or retrieve them. Your data is private, secure, and entirely within your custody.
            </p>
          </section>

          {/* Section 4 */}
          <section id="business-model" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Premium Ad-Free Sustainable Model
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Pocket Ledger is published as a **paid application** on the Google Play Store.
            </p>
            <p>
              Because our business model relies entirely on your upfront purchase, **we have absolutely no commercial incentive or requirement to collect, track, aggregate, or sell your financial data to advertisers or third-party brokers.**
            </p>
            <p>
              The app contains zero ads, zero tracking SDKs, and zero background analytics packages, ensuring your ledger remains incredibly fast, secure, and quiet.
            </p>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              In accordance with COPPA guidelines and Google Play&apos;s families-safe policies, Pocket Ledger does not collect any personal data, making it naturally safe for users of all age groups.
            </p>
            <p>
              We do not knowingly request or gather data from children under the age of 13.
            </p>
          </section>

          {/* Section 6 */}
          <section id="backups" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Security &amp; Backups
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Since all database entries are held entirely locally, the ultimate security of your ledgers rests on your device&apos;s encryption and physical access.
            </p>
            <div className="mt-4 p-5 rounded-2xl border border-red-500/10 bg-red-500/5 text-[13.5px] leading-relaxed">
              <strong className="text-red-400 block mb-1">Important:</strong>
              Uninstalling Pocket Ledger from your device will permanently clear all compiled local database files and records. As we do not hold server-side backups, please ensure you export or manually back up your data regularly.
            </div>
          </section>

          {/* Section 7 */}
          <section id="support" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Support &amp; Contact Information
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              For legal questions, purchase verification, or help regarding your offline ledgers, please contact us directly on our Google Play Store developer listing:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">Pocket Ledger Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/dev?id=5812710502212545050" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/dev?id=5812710502212545050 ↗
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