// app/apps/voicedocs/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';

// Clean imports pointing to your standard layout components
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function VoiceDocsPrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'no-collection', label: '2. Zero Data Collection' },
    { id: 'local-processing', label: '3. Local Processing' },
    { id: 'permissions', label: '4. Required Permissions' },
    { id: 'children', label: '5. Children\'s Privacy' },
    { id: 'security', label: '6. Data Security' },
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-sky-500/30 selection:text-white">
      
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Custom Sky-Blue top radial glow to match VoiceDocs' app theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-sky-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">VoiceDocs: Voice-to-Text &amp; PDF Transcriber</span> | Last Updated: June 1, 2026
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
                      ? 'border-sky-400 text-white pl-5'
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
              This Privacy Policy details how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) protects your privacy and manages data when using our mobile application, <strong className="text-white">VoiceDocs: Voice-to-Text &amp; PDF Transcriber</strong> (available on the Google Play Store).
            </p>
            <p>
              By installing and utilizing VoiceDocs, you consent to the offline, sandboxed processing structures and minimal device permissions detailed in this policy.
            </p>
          </section>

          {/* Section 2 */}
          <section id="no-collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Zero Data Collection
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              VoiceDocs is designed from the ground up to operate on a strict privacy-first model:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">No Server Uploads:</strong> We do not operate, rent, or maintain external cloud servers to process, analyze, or archive your spoken voice inputs.</li>
              <li><strong className="text-white">No Personal Harvesting:</strong> We do not collect personal information (such as email addresses, display names, phone numbers, or account details) [1].</li>
              <li><strong className="text-white">No Contact Scraping:</strong> The application does not request or access your device contacts, location history, or browser cookies.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="local-processing" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Local-First Processing &amp; Storage
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To protect the confidentiality of your meetings and personal dictations, VoiceDocs performs all audio analysis and text conversion locally:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400 font-mono text-[13px]">
              <li>
                <strong className="text-white font-sans">On-Device Transcription:</strong> Spoken audio is processed in real-time by a local machine learning engine built entirely inside the application.
              </li>
              <li>
                <strong className="text-white font-sans">Local File Sandboxing:</strong> All translated texts, raw voice clips, and compiled PDF meeting notes are saved securely within the app&apos;s local sandboxed directory on your device [1].
              </li>
            </ul>
            <p className="mt-2">
              Because your spoken words and transcribed documents are stored entirely on your device, we have zero access to them. Your recorded notes are fully protected and under your absolute control.
            </p>
          </section>

          {/* Section 4 */}
          <section id="permissions" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Required Permissions &amp; Justification
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              In compliance with Google Play Store Developer Guidelines, we disclose the essential device permissions required to operate VoiceDocs:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400 font-mono text-[13px]">
              <li>
                <strong className="text-white font-sans">RECORD_AUDIO:</strong><br />
                Required solely to capture live speech via your device&apos;s microphone so that the local AI engine can transcribe spoken words into text in real-time.
              </li>
              <li>
                <strong className="text-white font-sans">WRITE_EXTERNAL_STORAGE / CREATE_DOCUMENT:</strong><br />
                Required solely to compile and save your final, formatted voice-to-text transcripts as PDF documents in your device&apos;s local Documents folder [3].
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              VoiceDocs is designed as a secure, professional, and academic transcription utility. We comply strictly with the Children&apos;s Online Privacy Protection Act (COPPA) and Google Play&apos;s Families Policies.
            </p>
            <p>
              Because our application does not request, aggregate, or harvest personal identifiers or user profiles, we do not knowingly collect information from children under the age of 13.
            </p>
          </section>

          {/* Section 6 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We implement industry-standard database security structures to protect your on-device transcripts and PDF notes from unauthorized local modification.
            </p>
            <div className="mt-4 p-5 rounded-2xl border border-red-500/10 bg-red-500/5 text-[13.5px] leading-relaxed">
              <strong className="text-red-400 block mb-1">Important on Uninstallation:</strong>
              Uninstalling VoiceDocs from your device will permanently delete all locally saved project drafts, custom translation histories, and compiled PDF records [3]. Since we do not maintain cloud-based backups, this data is completely non-recoverable.
            </div>
          </section>

          {/* Section 7 */}
          <section id="support" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Support &amp; Contact Information
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              For legal questions, purchase confirmations, or help regarding your offline voice-to-text documents, please contact us directly on our Google Play Store developer listing:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#040810]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">VoiceDocs Support Team</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/dev?id=5812710502212545050" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
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