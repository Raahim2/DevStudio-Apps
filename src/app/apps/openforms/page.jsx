// app/apps/openforms/page.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Clean imports pointing to your standard layout components
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

export default function OpenFormsLandingPage() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.openforms";

  // --- Dynamic Form Builder States ---
  const [formFields, setFormFields] = useState([
    { id: '1', label: 'Full Name', type: 'text', placeholder: 'Enter your name' },
    { id: '2', label: 'Experience Rating', type: 'rating', max: 5 }
  ]);
  const [submissions, setSubmissions] = useState([
    { id: 'sub-1', author: 'user', date: '2m ago', data: 'Full Name: user | Rating: ★★★★★' },
    { id: 'sub-2', author: 'sara_ux', date: '10m ago', data: 'Full Name: Sara | Rating: ★★★★☆' }
  ]);

  // Form builder actions
  const addField = (type) => {
    const fieldTemplates = {
      email: { id: String(Date.now()), label: 'Email Address', type: 'text', placeholder: 'hello@devstudio.com' },
      feedback: { id: String(Date.now()), label: 'Additional Feedback', type: 'textarea', placeholder: 'Write your thoughts...' },
      custom: { id: String(Date.now()), label: 'Custom Parameter', type: 'text', placeholder: 'Specify detail' }
    };
    
    if (formFields.length < 5) {
      setFormFields(prev => [...prev, fieldTemplates[type]]);
    }
  };

  const removeField = (id) => {
    setFormFields(prev => prev.filter(f => f.id !== id));
  };

  // Triggers simulated database submissions in real-time
  const handleSubmitForm = (e) => {
    e.preventDefault();

    // Construct a mock submission from the current live-configured fields
    const mockData = formFields.map(f => `${f.label}: ${f.type === 'rating' ? '★★★★★' : 'Submitted'}`).join(' | ');
    const newSubmission = {
      id: `sub-${Date.now()}`,
      author: 'anon_creator',
      date: 'Just now',
      data: mockData
    };

    setSubmissions(prev => [newSubmission, ...prev]);
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-cyan-500/30 selection:text-white overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        .cyan-grid-bg {
          background-image: radial-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}} />

      {/* Header Navigation */}
      <Navbar />

      <div className="cyan-grid-bg pb-12">
        {/* Hero Section */}
        <section className="relative pt-36 pb-16 md:pb-24">
          <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-x-2 rounded-full bg-cyan-500/5 border border-cyan-500/15 px-4 py-1 text-xs font-medium text-cyan-400 backdrop-blur-md shadow-inner select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>A New Wave of Distributed Data</span>
            </div>

            <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-4xl">
              Construct. Share. Gather.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                OpenForms Community.
              </span>
            </h1>
            <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Build gorgeous, tailored surveys in seconds. Distribute them instantly across our global decentralized community and watch qualitative insights compile.
            </p>

            <div className="mt-8">
              <a 
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black hover:bg-cyan-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Download OpenForms for Android
                <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC FORM BUILDER SIMULATOR (The "Crazy" Interactive Section) --- */}
        <section className="mx-auto max-w-6xl px-6 sm:px-8 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-zinc-800 rounded-[28px] p-6 md:p-8 bg-[#06080e]/40 backdrop-blur-md">
            
            {/* Left Box: Builder Controls (Col 1 to 4) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-cyan-500 uppercase">Interactive Studio</span>
                <h3 className="text-xl font-bold text-white mt-1.5">No-Code Builder</h3>
                <p className="text-xs text-zinc-500 mt-2 font-mono">Click to inject custom input components into the live workspace canvas below.</p>
              </div>

              {/* Dynamic Injection Controls */}
              <div className="flex flex-col gap-2.5">
                <button 
                  onClick={() => addField('email')}
                  disabled={formFields.length >= 5}
                  className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 text-left flex justify-between items-center transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span>+ Add Email Block</span>
                  <span className="text-[10px] font-mono text-zinc-500">EMAIL_FIELD</span>
                </button>
                <button 
                  onClick={() => addField('feedback')}
                  disabled={formFields.length >= 5}
                  className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 text-left flex justify-between items-center transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span>+ Add Feedback Box</span>
                  <span className="text-[10px] font-mono text-zinc-500">TEXTAREA</span>
                </button>
                <button 
                  onClick={() => addField('custom')}
                  disabled={formFields.length >= 5}
                  className="w-full py-3 px-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 active:scale-95 text-xs font-semibold text-zinc-300 text-left flex justify-between items-center transition-all disabled:opacity-40 disabled:pointer-events-none"
                >
                  <span>+ Add Custom Param</span>
                  <span className="text-[10px] font-mono text-zinc-500">VARCHAR</span>
                </button>
              </div>

              {/* Limit Counter Indicator */}
              <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-xs font-mono">
                <span className="text-zinc-500">Component Capacity</span>
                <span className={`${formFields.length >= 5 ? 'text-rose-400' : 'text-cyan-400'}`}>
                  {formFields.length} / 5 used
                </span>
              </div>
            </div>

            {/* Middle Box: Live Form Preview Canvas (Col 5 to 8) */}
            <div className="lg:col-span-4 rounded-2xl border border-cyan-500/10 bg-black/60 p-5 flex flex-col justify-between relative overflow-hidden min-h-[360px]">
              <div className="absolute top-0 left-0 right-0 h-[60px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500/15 via-transparent to-transparent pointer-events-none" />
              
              <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-xs font-semibold text-zinc-300">Live Canvas</span>
                <span className="text-[10px] font-mono text-zinc-500">PREVIEW</span>
              </div>

              {/* Interactive Form Rendering */}
              <form onSubmit={handleSubmitForm} className="flex-1 flex flex-col gap-3.5 mt-5">
                <AnimatePresence initial={false}>
                  {formFields.map((field) => (
                    <motion.div 
                      key={field.id}
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-1.5 relative group"
                    >
                      <label className="text-[11px] font-mono font-bold text-zinc-400 flex justify-between items-center uppercase">
                        {field.label}
                        {/* Remove Field Button */}
                        <button 
                          type="button"
                          onClick={() => removeField(field.id)}
                          className="text-[9px] text-zinc-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Remove
                        </button>
                      </label>
                      
                      {field.type === 'text' && (
                        <input 
                          type="text" 
                          disabled
                          placeholder={field.placeholder} 
                          className="h-8 rounded-lg bg-[#0e1017] border border-white/5 px-2.5 text-xs text-zinc-400 select-none"
                        />
                      )}

                      {field.type === 'textarea' && (
                        <textarea 
                          rows={2}
                          disabled
                          placeholder={field.placeholder} 
                          className="rounded-lg bg-[#0e1017] border border-white/5 p-2 text-xs text-zinc-400 select-none resize-none"
                        />
                      )}

                      {field.type === 'rating' && (
                        <div className="flex gap-1 text-cyan-400 select-none text-xs">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {/* Submit Action */}
                <button 
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-cyan-600 text-white font-bold text-xs hover:bg-cyan-500 active:scale-95 transition-all mt-auto shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  Publish to Community
                </button>
              </form>
            </div>

            {/* Right Box: Live Submission Feed (Col 9 to 12) */}
            <div className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-8 pt-6 lg:pt-0">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">Decentralized Feed</span>
                <h3 className="text-lg font-bold text-white mt-1">Live Database</h3>
                <p className="text-xs text-zinc-500 mt-2 font-mono leading-relaxed">Watch submissions stream in instantly as community users submit replies across your published forms.</p>
              </div>

              {/* Scrolling Live Feed */}
              <div className="flex-1 flex flex-col gap-3 mt-6 max-h-[220px] overflow-y-auto scrollbar-none pr-1">
                <AnimatePresence initial={false}>
                  {submissions.map((sub) => (
                    <motion.div 
                      key={sub.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="p-3.5 rounded-xl border border-white/5 bg-white/5 flex flex-col gap-1.5"
                    >
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-cyan-400 font-bold">@{sub.author}</span>
                        <span className="text-zinc-600">{sub.date}</span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap">
                        {sub.data}
                      </p>
                    </motion.div>
                  ))}
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
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1314]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-cyan-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">Community Distribution</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Publish forms directly to the OpenForms public feed and collect instant global responses.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1314]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-cyan-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">No-Code Logic</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Apply advanced conditional logic, field routing, and calculations without writing a single line of code.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1314]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-cyan-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Real-Time Dashboards</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Watch quantitative charts, statistics, and qualitative sentiment trends compile on a live analytics board.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c1314]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-cyan-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Local-First Sandbox</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Sensitive internal forms can be kept offline, fully encrypted and protected on your local device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to deploy your first form?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download OpenForms today and start constructing beautiful surveys for our active global audience.
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