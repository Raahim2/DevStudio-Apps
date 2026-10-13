// app/apps/UltraVoice/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/commen/Navbar';
import Footer from '../../../../components/commen/Footer';

// ==========================================
// ULTRAVOICE PRIVACY POLICY PAGE
// ==========================================
export default function UltraVoicePrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'voice-cloning', label: '3. Voice Cloning & Audio Rights' },
    { id: 'processing-storage', label: '4. AI Processing & Storage' },
    { id: 'third-parties', label: '5. Third-Party Infrastructure' },
    { id: 'retention', label: '6. Retention & Storage Purges' },
    { id: 'children', label: '7. Children\'s Privacy' },
    { id: 'security', label: '8. Data Security' },
    { id: 'rights', label: '9. Your Rights & Account Controls' }
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
        {/* Violet radial glow to match UltraVoice's audio AI theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-600/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-violet-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            Platform: <span className="text-white">UltraVoice (TTS &amp; Voice Cloning)</span> | Last Updated: October 2026
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
              This Privacy Policy applies to <strong className="text-white">UltraVoice</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), an AI-driven Text-to-Speech (TTS) and Instant Voice Cloning platform. It outlines how we collect, process, store, and manage your account details, text inputs, voice recordings, and generated audio assets.
            </p>
            <p>
              By creating an account, uploading voice audio, or generating synthesized speech on UltraVoice, you acknowledge and consent to the data pipelines, cloud processing, and retention policies described herein. If you do not agree, please discontinue using the service and delete your account.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To provide realistic speech synthesis and voice modeling, we collect the following categories of data:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Account Information (via Clerk):</strong> Name, email address, external OAuth authentication identifiers (e.g., Google or GitHub sign-in), and user profile tokens.
              </li>
              <li>
                <strong className="text-white">Text Prompts &amp; Scripts:</strong> The text, dialogue, and scripts you enter into UltraVoice for speech synthesis.
              </li>
              <li>
                <strong className="text-white">User Voice Samples (for Cloning):</strong> Audio recordings or audio files you upload to train or clone a custom voice model.
              </li>
              <li>
                <strong className="text-white">Audio Generation History:</strong> Records of past generation runs, including timestamps, voice models selected, character counts, and links to generated audio files, securely mapped to your account in our database.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="voice-cloning" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Voice Cloning &amp; Audio Rights Notice
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Voice data contains unique acoustic and vocal characteristics. We enforce a strict policy regarding voice cloning:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Explicit Ownership &amp; Consent:</strong> You must own the rights or possess unambiguous, explicit consent from any individual whose voice you upload for cloning. Uploading third-party voice clips without permission, or producing misleading impersonations/deepfakes, violates our Acceptable Use Policy.
              </li>
              <li>
                <strong className="text-white">No Sale of Voice Data:</strong> Your voice clone samples and generated vocal footprints are never sold, rented, or licensed to data brokers.
              </li>
              <li>
                <strong className="text-white">No Public Training:</strong> We do not use your private voice clone samples to train general public models without your explicit opt-in.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="processing-storage" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. AI Processing &amp; Storage Architecture
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              UltraVoice relies on specialized distributed infrastructure to handle demanding speech synthesis and media storage:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Speech Synthesis (Deepgram):</strong> Text inputs and voice generation instructions are processed through Deepgram&apos;s real-time AI audio API models to convert text into speech.
              </li>
              <li>
                <strong className="text-white">Relational Data (Neon DB):</strong> Your user profile details, subscription tiers, generation logs, text prompt history, and audio asset references are stored in a secure serverless PostgreSQL database hosted on Neon.
              </li>
              <li>
                <strong className="text-white">Media Hosting (Cloudinary):</strong> Uploaded voice samples and generated speech files (MP3/WAV) are hosted on Cloudinary for rapid preview playback and download delivery.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="third-parties" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Third-Party Infrastructure
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We collaborate exclusively with industry-standard third-party providers who adhere to rigorous data protection standards:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                <strong className="text-white">Clerk:</strong> Manages user authentication, session security, password hashing, and OAuth tokens. Clerk processes credentials on isolated, encrypted servers.
              </li>
              <li>
                <strong className="text-white">Deepgram:</strong> Provides high-speed TTS neural processing. Text payload data is transmitted via encrypted API connections solely to synthesize your requested audio.
              </li>
              <li>
                <strong className="text-white">Neon Database:</strong> Enterprise-grade, encrypted PostgreSQL hosting ensuring your generation records and account references are protected with strict access controls.
              </li>
              <li>
                <strong className="text-white">Cloudinary:</strong> Provides high-performance content delivery network (CDN) routing and storage for generated sound bites and user audio uploads.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="retention" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Retention &amp; Periodic Storage Purges
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              <strong className="text-white">Important Notice Regarding File Lifespans:</strong> UltraVoice is an active creation tool, not a permanent cloud backup archive. 
            </p>
            <p>
              To maintain system performance and manage cloud storage footprints:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                Generated audio files hosted on Cloudinary are <strong className="text-white">not stored indefinitely</strong>. Audio files are subject to scheduled, periodic automated deletion routines (storage purges).
              </li>
              <li>
                Users are strongly advised to download generated speech clips immediately after creation if long-term offline retention is required.
              </li>
              <li>
                Metadata logs (e.g., text prompt history, creation date) stored in Neon DB may remain accessible in your dashboard history until you manually delete them or close your UltraVoice account.
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              UltraVoice is not intended for or directed at children under 13 years of age (or under 16 in the European Economic Area). We do not knowingly collect personal information, voice recordings, or account profiles from minors.
            </p>
            <p>
              If we discover that an account has been registered by a child under the legal age threshold, we will terminate the account and purge their voice files and associated records from Clerk, Cloudinary, and Neon DB.
            </p>
          </section>

          {/* Section 8 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              8. Data Security
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We implement industry-standard safeguards to protect your personal information and voice files:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>Encrypted transport layer security (HTTPS / TLS 1.3) across all API communications with Deepgram, Clerk, Neon, and Cloudinary.</li>
              <li>Restricted database connection pooling with role-based access permissions.</li>
              <li>Strict token-authenticated session management powered by Clerk.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section id="rights" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              9. Your Rights &amp; Account Controls
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Subject to applicable legal frameworks (such as GDPR and CCPA), you have the right to inspect, export, or permanently delete your data:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>
                <strong className="text-white">History Deletion:</strong> You may delete specific generation outputs, scripts, and voice clone models directly through your user dashboard.
              </li>
              <li>
                <strong className="text-white">Account Termination:</strong> You can delete your account via your profile settings (managed through Clerk), which cascades the removal of your user records and audio pointers from Neon DB.
              </li>
              <li>
                <strong className="text-white">Data Requests:</strong> To request a comprehensive dump or manual purge of any remaining Cloudinary assets or Neon DB logs, contact our team.
              </li>
            </ul>

            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#120e1a]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">UltraVoice Privacy &amp; Data Operations</span>
              <span className="text-[13px] font-mono text-zinc-500">Contact &amp; Account Inquiries</span>
              <a 
                href="mailto:support@ultravoice.ai" 
                className="text-violet-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                support@ultravoice.ai ↗
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