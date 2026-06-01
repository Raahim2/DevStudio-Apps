// app/apps/openforms/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';

// Clean imports pointing to your standard layout components
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function OpenFormsPrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'supabase', label: '3. Supabase Integration' },
    { id: 'credpoints', label: '4. The CredPoints System' },
    { id: 'sharing', label: '5. Third-Party Partners' },
    { id: 'children', label: '6. Children\'s Privacy' },
    { id: 'security', label: '7. Data Security' },
    { id: 'rights', label: '8. Rights & Support' }
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-cyan-500/30 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Custom Cyan top radial glow to match OpenForms' app theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-cyan-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">OpenForms: Survey &amp; Form Maker</span> | Last Updated: June 1, 2026
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
                      ? 'border-cyan-400 text-white pl-5'
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
              This Privacy Policy explains how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and protects your information when you use our mobile application, <strong className="text-white">OpenForms: Survey &amp; Form Maker</strong> (available on the Google Play Store).
            </p>
            <p>
              By installing and utilizing OpenForms, you consent to the account validation, cloud database storage, and global community metrics detailed within this policy. If you do not agree with these policies, you should uninstall the app and discontinue using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To run our decentralized form-builder and submission community pipelines, OpenForms collects and processes the following parameters:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Account Information:</strong> Personal details provided securely during registration via Google Sign-In (including your email address, display name, and profile image URL) [1].</li>
              <li><strong className="text-white">Form &amp; Community Assets:</strong> Any custom forms you construct, edit, publish, or fork (clone), as well as any quantitative responses you submit to other public/private community questionnaires.</li>
              <li><strong className="text-white">Device Telemetry:</strong> Aggregated, non-personal parameters (including system version, device model, and performance traces) to troubleshoot UI latency and optimize network calls.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="supabase" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Supabase Database Integration
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              OpenForms is built as a cloud-synchronized community. All user accounts, published forms, community responses, clone/fork histories, and database profiles are securely synchronized and stored utilizing <strong className="text-white">Supabase</strong>—our enterprise-grade PostgreSQL cloud database partner.
            </p>
            <p>
              By submitting forms or publishing questions inside the app, you acknowledge that this data is hosted securely in Supabase&apos;s cloud infrastructure. Your private credentials are fully protected and isolated behind robust Row-Level Security (RLS) policies [1].
            </p>
          </section>

          {/* Section 4 */}
          <section id="credpoints" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. The CredPoints (Karma) System
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To coordinate organic ranking algorithms and highlight high-quality surveys, OpenForms features an in-app karma scoring metric called <strong className="text-white">CredPoints</strong>.
            </p>
            <p>
              This system logs and aggregates your community interactions—such as how other users vote on your published forms, the credability of your answers, and how often your layouts are copied or forked. These metrics are stored in Supabase to determine your profile&apos;s overall ranking standing and visibility on the public feed.
            </p>
          </section>

          {/* Section 5 */}
          <section id="sharing" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Third-Party Partners
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We integrate third-party services to handle secure authentication, real-time data sync, and background diagnostics:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Supabase:</strong> For PostgreSQL storage, database hosting, and secure asset processing.</li>
              <li><strong className="text-white">Google Auth:</strong> To manage secure, seamless OAuth account logins [1].</li>
              <li><strong className="text-white">Firebase / Crashlytics:</strong> For aggregate diagnostic tracking to isolate system bugs and crash traces.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              OpenForms complies strictly with COPPA guidelines and Google Play Store family policies.
            </p>
            <p>
              Because our platform allows public form distribution and text-input surveys, we do not knowingly harvest, collect, or request personal details from children under the age of 13. If you are a parent and discover your child has registered an account, please reach out so we can permanently delete their data from our Supabase tables.
            </p>
          </section>

          {/* Section 7 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Data Security &amp; Retention
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We implement comprehensive security measures—including SSL/TLS transport encryption and secure Supabase API access tokens—to protect your forms and responses from unauthorized exposure or alteration.
            </p>
            <p>
              Your personal profile and community data are retained for as long as your account is active. If you delete your account, your published forms and personal information will be permanently purged from our active Supabase production tables.
            </p>
          </section>

          {/* Section 8 */}
          <section id="rights" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              8. Your Rights &amp; Support
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Under global data protection laws (such as GDPR or CCPA), you have the right to request access to, correction of, or permanent deletion of your profile data.
            </p>
            <p>
              To request assistance or submit a data removal inquiry, please reach out to us on Google Play:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#0c1314]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">OpenForms App Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.raahim2.openforms" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/details?id=com.raahim2.openforms ↗
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