// app/apps/momentum/page.jsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/commen/Navbar';
import Footer from '@/components/commen/Footer';

// ==========================================
// 3. MAIN MOMENTUM LANDING PAGE
// ==========================================
export default function MomentumLandingPage() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [levelUpTrigger, setLevelUpTrigger] = useState(false);
  const [xpProgress, setXpProgress] = useState(40); // 40% initial progress
  const [currentLevel, setCurrentLevel] = useState(1);

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.Momentum";
  const appLogo = "https://lh3.googleusercontent.com/vbrAcXouSnfoODwLLGZhdHDCfXhcW_i4lp9eTtOoSYAUCinGziNAkVYS41QEC3tccHmR3YQak2agqefl1ZVe";

  const quizOptions = [26, 28, 30, 32];
  const correctAnswer = 30;

  // Handles cognitive challenge selection & animates progression loop
  const handleSelectOption = (option) => {
    if (selectedAnswer !== null) return; // Prevent multiple selection triggers
    setSelectedAnswer(option);

    if (option === correctAnswer) {
      // Correct Answer logic: Fill progress bar to 100%, level up, then reset bar progress slightly
      setXpProgress(100);
      setTimeout(() => {
        setLevelUpTrigger(true);
        setCurrentLevel(2);
        setXpProgress(15); // Start fresh at Level 2
      }, 800);
    } else {
      // Incorrect answer shake
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-violet-500/30 selection:text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-16 md:pb-24">
        {/* Dynamic Violet top radial glow matching your `#8b5cf6` colorTheme */}
        <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-violet-500/5 border border-violet-500/15 px-4 py-1 text-xs font-medium text-violet-400 backdrop-blur-md shadow-inner select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span>Cognitive Aptitude, Gamified</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-3xl">
            Turn learning into an{' '}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              epic quest.
            </span>
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Conquer critical logic, arithmetic patterns, and spatial reasoning. Gain experience points, scale leaderboard rankings, and build your daily habit.
          </p>

          <div className="mt-8">
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-black hover:bg-violet-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Get Momentum on Google Play
              <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Quest Simulator Showcase */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 pb-20 md:pb-28 flex justify-center relative">
        {/* Decorative background glow behind the interactive card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative w-full max-w-[350px] rounded-[28px] border border-violet-500/15 bg-gradient-to-b from-violet-500/5 to-black p-6 flex flex-col justify-between items-center shadow-2xl overflow-hidden">
          {/* Top Header details */}
          <div className="flex items-center justify-between w-full z-10">
            <div className="flex items-center gap-2.5">
              <img src={appLogo} alt="Momentum Logo" className="w-9 h-9 rounded-lg border border-white/5" />
              <span className="text-xs font-semibold text-zinc-300">Level Quest</span>
            </div>
            
            {/* Live Progress Stats */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">Current Stat</span>
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentLevel}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="text-xs font-mono font-bold text-violet-400"
                >
                  LVL 0{currentLevel}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Level Progress Bar */}
          <div className="w-full mt-6 flex flex-col gap-1.5 z-10">
            <div className="w-full h-2 bg-black border border-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>

          {/* Question area */}
          <div className="text-center my-6 z-10 px-2">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Aptitude Logic</p>
            <h4 className="text-base font-semibold text-white mt-1.5 leading-relaxed">
              Complete the sequence:<br />
              <span className="font-mono text-violet-400 tracking-wide">2, 6, 12, 20, <span className="underline animate-pulse">?</span></span>
            </h4>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-3 w-full z-10">
            {quizOptions.map((option, idx) => {
              let btnStyle = "border-white/5 bg-white/5 text-zinc-300 hover:bg-white/10";
              if (selectedAnswer !== null) {
                if (option === correctAnswer) {
                  btnStyle = "bg-emerald-500/10 border-emerald-500/40 text-emerald-400";
                } else if (selectedAnswer === option) {
                  btnStyle = "bg-red-500/10 border-red-500/40 text-red-400 animate-shake";
                } else {
                  btnStyle = "border-white/5 bg-white/5 text-zinc-600 opacity-40";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelectOption(option)}
                  className={`py-3 rounded-xl border font-mono text-sm font-bold transition-all duration-150 active:scale-95 ${btnStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Prompt / Notification Banner */}
          <div className="h-6 mt-5 z-10 flex items-center justify-center">
            {selectedAnswer === null && (
              <span className="text-[11px] text-zinc-500 font-mono">Select the correct logic</span>
            )}
            {selectedAnswer === correctAnswer && levelUpTrigger && (
              <span className="text-[11px] font-bold text-fuchsia-400 font-mono animate-bounce">
                ✨ Level Up! XP Transferred!
              </span>
            )}
            {selectedAnswer !== null && selectedAnswer !== correctAnswer && (
              <span className="text-[11px] font-bold text-red-400 font-mono">
                Incorrect sequence multiplier. Try again!
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="bg-black py-20 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#100c14]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-violet-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">RPG Skill Trees</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Unlock topics across logical reasoning, arithmetic patterns, and spatial awareness as structured node trees.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#100c14]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-violet-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">Daily Learning Quests</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Maintain your daily cognitive momentum with micro-challenges, daily streaks, and streak protectors.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#100c14]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-violet-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Live Duel Arenas</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Put your focus to the test. Compete against global users in high-speed, real-time logic duels.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#100c14]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-violet-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Deep Core Analytics</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Track performance stats, isolate weak skill vectors, and monitor speed improvements over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to level up your brain?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download Momentum today and start conquering micro-logic tasks and gamified reasoning quests.
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