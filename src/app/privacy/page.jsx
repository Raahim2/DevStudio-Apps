// app/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../components/commen/Navbar';
import Footer from '../../components/commen/Footer';

// ==========================================
// 3. MAIN PRIVACY POLICY PAGE
// ==========================================
export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'usage', label: '3. How We Use Data' },
    { id: 'sharing', label: '4. Third-Party Services' },
    { id: 'children', label: '5. Children\'s Privacy' },
    { id: 'security', label: '6. Data Security' },
    { id: 'rights', label: '7. Your Rights & Support' }
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
            Privacy Policy
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
          <section id="scope" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              1. Scope &amp; Consent
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              This Privacy Policy explains how <strong className="text-white">DevStudio Apps</strong> collects, uses, discloses, and protects your information when you use our mobile applications published on the Google Play Store—including <em>Counter</em>, <em>Momentum</em>, <em>OpenForms</em>, <em>Pocket Ledger</em>, <em>Renderly</em>, and <em>Sharpify</em>.
            </p>
            <p>
              By installing and utilizing our applications, you consent to the data collection and usage practices outlined in this policy. We prioritize your privacy and aim to collect only the absolute minimum amount of information required to deliver high-quality, lightweight utility software.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Our applications are built with a **local-first** approach. This means the vast majority of your data (such as financial transactions in <em>Pocket Ledger</em>, form layouts in <em>OpenForms</em>, and values in <em>Counter</em>) is stored securely on your local device storage.
            </p>
            <p>
              However, we may occasionally access or process:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Device Information:</strong> Device model, OS version, hardware specifications, and system performance logs to fix crashes and optimize scaling.</li>
              <li><strong className="text-white">Usage Data:</strong> Aggregated, anonymized metadata reflecting feature usage (e.g., active tools opened, average session lengths) to help guide app upgrades.</li>
              <li><strong className="text-white">User-Provided Data:</strong> Files and image inputs that you directly upload (such as images processed inside <em>Sharpify</em> or layouts built in <em>Renderly</em>). These are processed strictly locally or on-demand and are never stored on our external servers without your direct consent.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="usage" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. How We Use Data
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We strictly utilize collected metadata and telemetry metrics to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>Operate, troubleshoot, debug, and optimize application core speeds and UI responsiveness.</li>
              <li>Improve security, prevent fraud, and block any illegal utilization of our open components.</li>
              <li>Provide responsive customer support and coordinate updates to our Google Play Store listings.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Third-Party Services
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Because our applications are built as utility tools, <strong className="text-white">we do not sell, trade, or rent your personal information to third parties</strong>.
            </p>
            <p>
              Our applications may integrate some standard API services provided by third parties (like Google Play Services or Firebase Crashlytics) to coordinate background performance reporting and secure cloud backups. These partners process information in accordance with their respective privacy standards:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Google Play Services Privacy Policy ↗</a></li>
              <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">Google Firebase Privacy Policy ↗</a></li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We comply strictly with the Children&apos;s Online Privacy Protection Act (COPPA) and Google Play&apos;s Families Policies. Our apps—especially educational and tally utilities—do not knowingly collect or harvest personal identifiable information from children under the age of 13.
            </p>
            <p>
              If you are a parent or guardian and believe that your child has provided us with personal details without your authorization, please contact us immediately so we can remove the data from our logs.
            </p>
          </section>

          {/* Section 6 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Security
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We apply industry-standard electronic, administrative, and physical security measures to safeguard your information from unauthorized access, modification, or exposure.
            </p>
            <p>
              Please note that while we take all reasonable actions to safeguard your data, no method of transmission over the internet or mobile storage is 100% secure. Because of this, we encourage users to run secure local backups of vital information (such as local ledgers in <em>Pocket Ledger</em>) regularly.
            </p>
          </section>

          {/* Section 7 */}
          <section id="rights" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Your Rights &amp; Support
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Depending on your current geographical jurisdiction (such as rights granted under GDPR or CCPA), you have the right to request access to, correction of, or permanent deletion of any personal data we have collected about you.
            </p>
            <p>
              To submit a data access or deletion request, or to receive support regarding how your data is processed, please visit our developer page or contact us:
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