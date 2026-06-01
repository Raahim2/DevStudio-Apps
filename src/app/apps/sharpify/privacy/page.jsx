// app/apps/Sharpify/privacy/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../../../../components/commen/Navbar';
import Footer from '../../../../components/commen/Footer';

// ==========================================
// 3. MAIN SHARPIFY PRIVACY PAGE
// ==========================================
export default function SharpifyPrivacyPage() {
  const [activeSection, setActiveSection] = useState('scope');

  // List of privacy sections for the sticky table of contents
  const sections = [
    { id: 'scope', label: '1. Scope & Consent' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'storage', label: '3. Storage & Cloudinary' },
    { id: 'thirdparty', label: '4. Third-Party Partners' },
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
    <div className="relative min-h-screen bg-black text-white scroll-smooth selection:bg-emerald-500/30 selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Header Block */}
      <div className="relative pt-36 pb-20 md:pb-28 border-b border-zinc-900 overflow-hidden">
        {/* Custom Emerald (Green) top radial glow to match Sharpify's app theme */}
        <div className="absolute top-0 left-0 right-0 h-[240px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-left relative z-10">
          <span className="font-mono text-[11px] tracking-widest text-emerald-400 uppercase">
            Legal Documentation
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Privacy Policy
          </h1>
          <p className="font-mono text-zinc-500 text-xs sm:text-[13px] mt-6 leading-none">
            App Name: <span className="text-white">Sharpify: AI Image Enhancer</span> | Last Updated: June 1, 2026
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
              This Privacy Policy explains how <strong className="text-white">DevStudio Apps</strong> (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, discloses, and protects your information when you use our mobile application, <strong className="text-white">Sharpify: AI Image Enhancer</strong> (available on the Google Play Store).
            </p>
            <p>
              By installing and utilizing Sharpify, you consent to the updated collection, cloud storage, and diagnostic telemetry processing practices outlined in this policy. If you do not agree with these policies, you should uninstall the app and discontinue using our services immediately.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collection" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              2. Information We Collect
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              To execute deep feature upscaling, unblurring, and image enhancements, Sharpify collects and processes the following information:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">User-Uploaded Media:</strong> We collect and process the images you directly import into the app for AI enhancement.</li>
              <li><strong className="text-white">Device Diagnostics:</strong> Aggregated, anonymized performance metrics (including memory usage, processing times, and crash reports) to maintain optimized on-device AI pipelines.</li>
              <li><strong className="text-white">Google Play Billing Tokens:</strong> If you purchase a premium license, transaction tokens are processed securely to confirm your subscription status.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="storage" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              3. Storage &amp; Cloudinary Integration
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              While standard lower-resolution enhancements are performed locally on-device, premium deep-enhancement options utilize secure cloud servers.
            </p>
            <p>
              When using these premium cloud features:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li>We securely transmit and host your images utilizing <strong className="text-white">Cloudinary</strong>—our trusted, enterprise-grade cloud image management partner.</li>
              <li>Images uploaded to Cloudinary are used solely to run advanced AI upscaling models and temporarily serve the final, high-fidelity files back to your device.</li>
              <li>All transient cloud-enhanced files stored on Cloudinary are subject to regular, automatic deletion routines and are never used to train machine learning models or sold to advertisers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section id="thirdparty" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              4. Third-Party Partners
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Sharpify integrates services provided by trusted third-party providers to coordinate secure payment structures, cloud media hosting, and diagnostic telemetry:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-y-2 text-zinc-400">
              <li><strong className="text-white">Cloudinary:</strong> For secure image management, transformation pipelines, and high-performance CDN file deliveries.</li>
              <li><strong className="text-white">Google Play Billing:</strong> To securely handle premium in-app purchases and billing token transactions.</li>
              <li><strong className="text-white">Google Firebase / Analytics:</strong> For aggregate, non-personally identifiable diagnostic tracking and crash telemetry.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="children" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              5. Children&apos;s Privacy
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Sharpify complies strictly with Google Play&apos;s Families Policies. Our AI enhancement suite is intended for users aged 13 and above and does not knowingly collect, harvest, or request personal data from children under the age of 13.
            </p>
            <p>
              If we discover that a child under 13 has inadvertently bypassed this check and uploaded photos containing personal data, we will immediately execute purging protocols on our local databases and Cloudinary cloud environments.
            </p>
          </section>

          {/* Section 6 */}
          <section id="security" className="scroll-mt-24 flex flex-col gap-y-4">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              6. Data Security &amp; Retention
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              We implement comprehensive encryption and security frameworks (including Secure Socket Layers and tokens) to protect your uploaded assets during transmission to Cloudinary.
            </p>
            <p>
              Your local files remain fully sandboxed on your device, and cloud-processed images are purged from Cloudinary after processing or user session closure. We do not maintain any long-term databases of your enhanced personal photos.
            </p>
          </section>

          {/* Section 7 */}
          <section id="rights" className="scroll-mt-24 flex flex-col gap-y-4 pb-12">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              7. Your Rights &amp; Support
            </h2>
            <div className="h-[1px] w-full bg-zinc-900" />
            <p>
              Depending on your location (such as rights granted under GDPR, CCPA, or Google Play guidelines), you have the right to request access to, deletion of, or details about any personal metadata we hold about you.
            </p>
            <p>
              To request assistance or submit a data removal inquiry, please reach out to us:
            </p>
            <div className="mt-4 p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/40 flex flex-col gap-y-2">
              <span className="font-semibold text-white text-base">Sharpify App Support</span>
              <span className="text-[13px] font-mono text-zinc-500">Google Play Developer Account</span>
              <a 
                href="https://play.google.com/store/apps/details?id=com.raahim2.Sharpify" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline text-[13.5px] mt-2 inline-flex items-center gap-x-1"
              >
                play.google.com/store/apps/details?id=com.raahim2.Sharpify ↗
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