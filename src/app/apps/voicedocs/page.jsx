// app/apps/voicedocs/page.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Clean imports pointing to your standard layout components
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function VoiceDocsLandingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transcript, setTranscript] = useState([]);
  const [isCompilingPdf, setIsCompilingPdf] = useState(false);
  const [pdfReady, setPdfReady] = useState(false);

  // Play Store target url (Placeholder for the new App)
  const playStoreUrl = "https://play.google.com/store/apps/dev?id=5812710502212545050";

  // Simulated transcription dialogue sequence
  const transcriptSteps = [
    { id: 1, speaker: "Host", text: "Good morning team, let's review the DevStudio launch metrics.", delay: 1000 },
    { id: 2, speaker: "AI Transcriber", text: "[Processing audio... Punctuation applied]", delay: 2500 },
    { id: 3, speaker: "AI Spanish Translation", text: "Buenos días equipo, repasemos las métricas de lanzamiento de DevStudio.", delay: 4200 }
  ];

  // Runs the progressive real-time voice-to-text simulation
  const startRecordingSim = () => {
    setIsRecording(true);
    setTranscript([]);
    setPdfReady(false);
    setProgress(0);

    transcriptSteps.forEach((step) => {
      setTimeout(() => {
        setTranscript(prev => [...prev, step]);
        setProgress(prev => prev + 33);
      }, step.delay);
    });

    // End simulation after final dialogue is printed
    setTimeout(() => {
      setIsRecording(false);
      setProgress(100);
    }, 5500);
  };

  // Simulates document compiling engine
  const handleCompilePdf = () => {
    setIsCompilingPdf(true);
    setTimeout(() => {
      setIsCompilingPdf(false);
      setPdfReady(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-sky-500/30 selection:text-white overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .sky-grid-bg {
          background-image: radial-gradient(rgba(14, 165, 233, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        @keyframes soundwave {
          0%, 100% { height: 8px; }
          50% { height: 28px; }
        }
        .wave-bar {
          animation: soundwave 1s ease-in-out infinite;
        }
      `}} />

      {/* Header Navigation */}
      <Navbar />

      <div className="sky-grid-bg pb-12">
        {/* Hero Header Section */}
        <section className="relative pt-36 pb-16 md:pb-24">
          <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
            {/* Slogan Tag */}
            <div className="inline-flex items-center gap-x-2 rounded-full bg-sky-500/5 border border-sky-500/15 px-4 py-1 text-xs font-medium text-sky-400 backdrop-blur-md shadow-inner select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span>Speak. Transcribe. Export.</span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-4xl">
              Turn voice into structured<br />
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                formatted documents.
              </span>
            </h1>
            <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Record meetings, lectures, or thoughts live. Instantly transcribe speech to text, translate to 40+ languages, and compile into print-ready PDF formats [3].
            </p>

            <div className="mt-8">
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-black hover:bg-sky-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
              >
                Download VoiceDocs for Android
                <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC RECORDER & PDF COMPILER SHOWER (The Interactive Section) --- */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-zinc-800 rounded-[28px] p-6 md:p-8 bg-[#040810]/40 backdrop-blur-md">
            
            {/* Panel 1: Interactive Control Deck (Col 1 to 4) */}
            <div className="lg:col-span-4 flex flex-col justify-between min-h-[340px]">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase">Live Sandbox</span>
                <h3 className="text-xl font-bold text-white mt-1.5">Interactive Engine</h3>
                <p className="text-xs text-zinc-500 mt-2 font-mono leading-relaxed">Experience a live mock demonstration. Click record to simulate live meeting speech-to-text indexing and PDF compiles.</p>
              </div>

              {/* Core Recorder trigger */}
              <div className="flex flex-col gap-3 mt-6 lg:mt-0">
                <button 
                  onClick={startRecordingSim}
                  disabled={isRecording || isCompilingPdf}
                  className="w-full py-3 px-4 rounded-xl border border-sky-500/20 bg-sky-500/5 hover:bg-sky-500/10 active:scale-95 text-xs font-semibold text-sky-400 flex items-center justify-between transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full bg-red-500 ${isRecording ? 'animate-ping' : ''}`} />
                    {isRecording ? 'Listening live...' : 'Record Voice Input'}
                  </span>
                  <span className="text-[10px] font-mono opacity-60">MIC_LIVE</span>
                </button>

                {/* PDF compilation Trigger */}
                <button 
                  onClick={handleCompilePdf}
                  disabled={progress < 100 || isCompilingPdf || pdfReady}
                  className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 flex items-center justify-between transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  <span>{isCompilingPdf ? 'Compiling PDF...' : 'Compile Transcript to PDF'}</span>
                  <span className="text-[10px] font-mono opacity-50">PDF_RENDER</span>
                </button>
              </div>
            </div>

            {/* Panel 2: Live Transcript & Visualizer (Col 5 to 8) */}
            <div className="lg:col-span-4 rounded-2xl border border-sky-500/10 bg-black/60 p-5 flex flex-col justify-between min-h-[340px] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[60px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs font-semibold text-zinc-300">Live Transcript</span>
                {/* Simulated soundwave bars */}
                <div className="flex gap-x-[3px] items-center h-7 px-2 bg-sky-500/5 rounded-lg border border-sky-500/10">
                  <div className="wave-bar w-[2px] bg-sky-400" style={{ animationDelay: '0.1s' }} />
                  <div className="wave-bar w-[2px] bg-sky-400" style={{ animationDelay: '0.3s' }} />
                  <div className="wave-bar w-[2px] bg-sky-400" style={{ animationDelay: '0.5s' }} />
                  <div className="wave-bar w-[2px] bg-sky-400" style={{ animationDelay: '0.2s' }} />
                  <div className="wave-bar w-[2px] bg-sky-400" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>

              {/* Dynamic Transcript feed */}
              <div className="flex-1 flex flex-col gap-y-4 mt-5 text-left select-none overflow-y-auto max-h-[220px]">
                <AnimatePresence>
                  {transcript.map((line) => (
                    <motion.div 
                      key={line.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-1"
                    >
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                        line.speaker.includes('Translation') ? 'text-sky-400' : 'text-zinc-500'
                      }`}>
                        {line.speaker}
                      </span>
                      <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                        {line.text}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {transcript.length === 0 && !isRecording && (
                  <div className="flex-1 flex items-center justify-center text-zinc-600 text-xs font-mono">
                    Awaiting voice trigger...
                  </div>
                )}
              </div>
            </div>

            {/* Panel 3: PDF Document Compiler (Col 9 to 12) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-8 pt-6 lg:pt-0 min-h-[340px]">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Document Output</span>
                <h3 className="text-lg font-bold text-white mt-1">Compiled PDFs</h3>
                <p className="text-xs text-zinc-500 mt-2 font-mono leading-relaxed">Once transcribed, compile your spoken audio into styled, clean, print-ready PDF formats.</p>
              </div>

              {/* PDF compiled state card */}
              <div className="flex-1 flex items-center justify-center mt-6">
                <AnimatePresence mode="wait">
                  {isCompilingPdf && (
                    <motion.div 
                      key="spinner"
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center gap-2"
                    >
                      <div className="w-6 h-6 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
                      <span className="text-[10px] font-mono text-zinc-500">Formatting layout...</span>
                    </motion.div>
                  )}

                  {pdfReady && (
                    <motion.div 
                      key="pdf"
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full p-4 rounded-xl border border-sky-500/20 bg-sky-500/5 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/15 flex items-center justify-center text-sky-400">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white">voicedocs_note_01.pdf</p>
                          <span className="text-[10px] font-mono text-zinc-500">24.5 KB // Compiled successfully</span>
                        </div>
                      </div>
                      <a href="#" className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </a>
                    </motion.div>
                  )}

                  {!isCompilingPdf && !pdfReady && (
                    <div className="text-xs font-mono text-zinc-600">Awaiting compilation...</div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* Feature Bento Grid */}
      <section className="bg-black py-20 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1214]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-sky-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">Live Meeting Recording</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Acoustic-aware dual microphone pipeline optimized to isolate speaker voices in noisy meeting rooms.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1214]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-sky-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">Voice-to-PDF compiler</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Instantly format transcripts into professional, structured PDFs with custom headers, timestamps, and bulleted takeaways [3].
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1214]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-sky-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Real-Time Translation</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Translate voice inputs instantly into over 40 global languages with context-aware semantic accuracy.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1214]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-sky-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Device-Local Sandbox</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Sensitive corporate meetings remain private. Optional offline processing engine ensures your voice clips never hit the cloud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to export your meetings?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download VoiceDocs today and start capturing real-time transcriptions, translations, and print-ready PDF reports [3].
        </p>
        <a 
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-x-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition-colors"
        >
          Download for Android
          <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}