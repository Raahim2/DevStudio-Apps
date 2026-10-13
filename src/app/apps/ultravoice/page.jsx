// app/apps/UltraVoice/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function UltraVoiceLandingPage() {
  // Playground state for interactive demo
  const [selectedVoice, setSelectedVoice] = useState('narrator');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('tts');
  const [demoText, setDemoText] = useState(
    "Welcome to UltraVoice. Experience lifelike speech synthesis with human-grade intonation, emotion, and zero robotic cadence."
  );

  const voices = [
    { id: 'narrator', name: 'Marcus - Cinematic Narrator', style: 'Deep, Resonant, Authoritative', tag: 'Storytelling' },
    { id: 'host', name: 'Elena - Warm Podcast Host', style: 'Natural, Expressive, Clear', tag: 'Podcasts' },
    { id: 'clone1', name: 'Alex - Cloned Voice (Custom)', style: 'Hyper-Realistic, Cloned Sample', tag: 'Voice Clone' },
    { id: 'game', name: 'Aria - Dynamic Video Game AI', style: 'Energetic, Precise, Sci-Fi', tag: 'Gaming' }
  ];

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#07070a] text-white selection:bg-violet-500/30 selection:text-white overflow-x-hidden">
      {/* Global Navbar */}
      <Navbar />

      {/* Background Glow Overlays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono tracking-wide uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
            Next-Gen AI Speech &amp; Instant Voice Cloning
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-400 leading-[1.08]">
            Human-grade AI voices. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-purple-400">
              Generated in milliseconds.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed">
            UltraVoice powers ultra-realistic text-to-speech synthesis and zero-shot voice cloning. Turn scripts into studio-mastered audio and replicate any voice from a 10-second sample.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-lg shadow-violet-600/25 transition-all text-sm tracking-wide text-center"
            >
              Start Generating Free
            </Link>
            <a
              href="#playground"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 font-medium transition-all text-sm tracking-wide text-center"
            >
              Live Voice Studio Demo
            </a>
          </div>

          {/* Micro Social Proof / Tech Specs */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5">⚡ Deepgram High-Speed Synthesis</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">🎙️ Instant Voice Cloning Engine</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">🔒 Clerk Protected Auth</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTERACTIVE DEMO / PLAYGROUND
      ======================================================== */}
      <section id="playground" className="py-12 md:py-20 relative">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-3xl border border-zinc-800 bg-[#0c0c12]/90 backdrop-blur-xl shadow-2xl p-6 sm:p-10 relative overflow-hidden">
            
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Playground Header Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
              <div className="flex items-center gap-2 p-1 bg-zinc-900/80 rounded-xl border border-zinc-800 w-fit">
                <button
                  onClick={() => setActiveTab('tts')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    activeTab === 'tts'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Text-to-Speech (TTS)
                </button>
                <button
                  onClick={() => setActiveTab('clone')}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    activeTab === 'clone'
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Voice Cloning Studio
                </button>
              </div>

              <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Models Online &bull; Latency &lt; 180ms
              </div>
            </div>

            {/* Tab 1: Text-To-Speech Interface */}
            {activeTab === 'tts' && (
              <div className="mt-6 flex flex-col gap-6">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 block">
                    1. Select Speaker Voice
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {voices.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVoice(v.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all flex flex-col gap-1 ${
                          selectedVoice === v.id
                            ? 'border-violet-500 bg-violet-500/10 text-white'
                            : 'border-zinc-800/80 bg-zinc-900/40 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-white">{v.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-violet-300">
                            {v.tag}
                          </span>
                        </div>
                        <span className="text-xs text-zinc-500">{v.style}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Text Prompt Area */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 block">
                    2. Script Input
                  </label>
                  <textarea
                    rows={4}
                    value={demoText}
                    onChange={(e) => setDemoText(e.target.value)}
                    className="w-full bg-black/60 border border-zinc-800 rounded-2xl p-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none font-sans"
                    placeholder="Type or paste any text to hear it spoken naturally..."
                  />
                </div>

                {/* Audio Output Player Bar */}
                <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <button
                      onClick={togglePlayback}
                      className="w-12 h-12 rounded-xl bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-violet-600/30 transition-transform active:scale-95"
                    >
                      {isPlaying ? (
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {isPlaying ? 'Streaming Audio Output...' : 'Click to Synthesize Speech'}
                      </div>
                      <div className="text-xs text-zinc-500 font-mono">
                        {isPlaying ? '48kHz &bull; Lossless MP3 Stream' : 'Instant Neural Waveform'}
                      </div>
                    </div>
                  </div>

                  {/* Simulated Waveform Visualizer */}
                  <div className="flex items-center gap-1 h-8 w-full sm:w-48 justify-end">
                    {[40, 75, 30, 90, 60, 20, 85, 45, 95, 65, 35, 80, 50].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: isPlaying ? `${h}%` : '20%' }}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          isPlaying ? 'bg-violet-400' : 'bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Voice Cloning Preview */}
            {activeTab === 'clone' && (
              <div className="mt-6 flex flex-col gap-6">
                <div className="border-2 border-dashed border-zinc-800 hover:border-violet-500/50 rounded-2xl p-8 text-center transition-colors bg-zinc-950/40 cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-violet-600/10 text-violet-400 flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white">Upload Clean Voice Reference</h4>
                  <p className="text-xs text-zinc-500 mt-1 max-w-sm mx-auto">
                    Drag and drop a 10–30 second clean voice sample (WAV, MP3, M4A) to generate an instant clone.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-zinc-800/80 bg-zinc-900/30 text-xs text-zinc-400 flex items-start gap-3">
                  <span className="text-violet-400 font-bold">ℹ️</span>
                  <span>
                    UltraVoice strictly requires consent to clone voices. Cloned audio is temporarily hosted for rapid iteration and subject to regular storage maintenance routines.
                  </span>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ========================================================
          CORE FEATURES GRID
      ======================================================== */}
      <section className="py-20 md:py-28 border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-violet-400 uppercase tracking-widest">
              Engineered for Creators &amp; Developers
            </h2>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Everything needed to produce professional synthetic voiceovers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl border border-zinc-850 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border-zinc-800/70 hover:border-violet-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-6">
                🎙️
              </div>
              <h4 className="text-lg font-semibold text-white">Deepgram Audio Engine</h4>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Powered by modern speech models capable of sub-200ms generation with natural pitch modulation, breathing cadences, and zero static.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl border border-zinc-850 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border-zinc-800/70 hover:violet-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-6">
                🧬
              </div>
              <h4 className="text-lg font-semibold text-white">Instant Voice Cloning</h4>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Clone accents, vocal traits, and specific voice personalities with only a short reference clip. Produce consistent branded voices across projects.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl border border-zinc-850 bg-gradient-to-b from-zinc-900/60 to-zinc-950/80 border-zinc-800/70 hover:border-violet-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center mb-6">
                ⚡
              </div>
              <h4 className="text-lg font-semibold text-white">Serverless Scale &amp; Speed</h4>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Integrated with high-speed Neon relational storage and Cloudinary CDN distribution to give you seamless history access and quick audio downloads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          HOW IT WORKS
      ======================================================== */}
      <section className="py-20 md:py-28 bg-[#09090e] border-t border-b border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-mono text-violet-400 uppercase tracking-widest">
              Simple 3-Step Workflow
            </h2>
            <h3 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              From text or sample to finished audio track
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-3xl font-extrabold text-violet-500">01</span>
              <h4 className="text-lg font-semibold text-white">Craft or Input Text</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Write or paste your scripts, dialogue, or audiobook chapters into the UltraVoice studio editor.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-3xl font-extrabold text-violet-500">02</span>
              <h4 className="text-lg font-semibold text-white">Select or Clone Voice</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Choose from a curated library of high-clarity voices, or clone your personal voice in seconds.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-3xl font-extrabold text-violet-500">03</span>
              <h4 className="text-lg font-semibold text-white">Stream &amp; Export</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Preview real-time audio playback, adjust speed/pace, and export studio-quality MP3/WAV files instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CALL TO ACTION (CTA)
      ======================================================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center relative z-10">
          <div className="p-10 sm:p-16 rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-950/30 via-zinc-950 to-black relative overflow-hidden">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to generate studio-grade AI audio?
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-sm sm:text-base">
              Create your account in seconds with Clerk and start producing natural voiceovers and custom voice clones today.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium shadow-xl shadow-violet-600/30 transition-all text-sm"
              >
                Sign Up &amp; Get Free Credits
              </Link>
              <Link
                href="/apps/UltraVoice/privacy"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all text-sm"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}