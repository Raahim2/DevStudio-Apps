// app/apps/PocketLedger/page.jsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Relative pathing matching three folders up (src/app/apps/PocketLedger/ -> src/)
import Navbar from '../../../components/commen/Navbar';
import Footer from '../../../components/commen/Footer';

export default function PocketLedgerLandingPage() {
  // Interactive budget state tracker
  const [monthlyExpense, setMonthlyExpense] = useState(2400);
  const monthlyIncome = 5000;
  
  const percentSpent = Math.min(100, Math.max(0, (monthlyExpense / monthlyIncome) * 100));
  const remainingBalance = Math.max(0, monthlyIncome - monthlyExpense);

  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.raahim2.PocketLedger";

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-500/30 selection:text-white overflow-hidden">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <section className="relative pt-36 pb-16 md:pb-20">
        {/* Dynamic Emerald radial glow */}
        <div className="absolute top-0 left-0 right-0 h-[280px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center">
          {/* Slogan Badge */}
          <div className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500/5 border border-emerald-500/15 px-4 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md shadow-inner select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Simplify Your Financial Habits</span>
          </div>

          <h1 className="mt-8 text-4xl sm:text-6xl font-bold tracking-tight text-white leading-none max-w-3xl">
            Take complete control of{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              your expenses.
            </span>
          </h1>
          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
            Track transactions, visualize spending patterns, and maintain customizable monthly budgets effortlessly with a secure, local-first ledger app.
          </p>

          <div className="mt-8">
            <a 
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-black hover:bg-emerald-400 active:scale-95 transition-all duration-150 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              Get PocketLedger on Google Play
              <span className="text-zinc-900 font-mono text-sm leading-none">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Interactive Budget Planner Preview */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 pb-20 md:pb-28 flex justify-center">
        <div className="relative w-full max-w-[500px] rounded-[24px] border border-[#1b3824]/60 bg-[#060b07] p-6 sm:p-8 shadow-2xl overflow-hidden">
          
          {/* Header Area */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-widest text-emerald-500">PocketLedger Simulator</p>
              <h3 className="text-lg font-bold text-white mt-1">Monthly Budget Overview</h3>
            </div>
            <span className="bg-zinc-900 border border-zinc-800 rounded-md px-2 py-0.5 text-[10px] font-mono text-zinc-400">
              Active Budget
            </span>
          </div>

          {/* Balance Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-900">
              <span className="text-[10px] text-zinc-500 block uppercase font-mono">Monthly Income</span>
              <span className="text-xl font-bold text-emerald-400">${monthlyIncome.toLocaleString()}</span>
            </div>
            <div className="bg-zinc-950/80 p-4 rounded-xl border border-zinc-900">
              <span className="text-[10px] text-zinc-500 block uppercase font-mono">Remaining Balance</span>
              <span className="text-xl font-bold text-white">${remainingBalance.toLocaleString()}</span>
            </div>
          </div>

          {/* Interactive Slider Section */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-baseline">
              <span className="text-xs text-zinc-400">Simulate Monthly Spendings:</span>
              <span className="text-base font-semibold text-zinc-200">${monthlyExpense.toLocaleString()}</span>
            </div>
            
            <input 
              type="range" 
              min="0" 
              max={monthlyIncome} 
              step="50"
              value={monthlyExpense} 
              onChange={(e) => setMonthlyExpense(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
          </div>

          {/* Visual Budget Meter */}
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-mono">
              <span className="text-zinc-500">Budget Limit Meter</span>
              <span className={percentSpent > 85 ? "text-red-400" : "text-emerald-400"}>
                {percentSpent.toFixed(0)}% Used
              </span>
            </div>
            
            <div className="w-full bg-zinc-900 rounded-full h-3.5 overflow-hidden p-0.5 border border-zinc-850">
              <div 
                className="h-full rounded-full transition-all duration-150 bg-gradient-to-r from-emerald-500 to-emerald-400"
                style={{ 
                  width: `${percentSpent}%`,
                  backgroundColor: percentSpent > 85 ? '#ef4444' : undefined 
                }} 
              />
            </div>
          </div>

          {/* Categories Sub-details */}
          <div className="mt-6 pt-5 border-t border-zinc-900 grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-zinc-400">
            <div>
              <span className="block text-[9px] text-zinc-600">HOUSING (30%)</span>
              <span className="text-zinc-200">${(monthlyExpense * 0.3).toFixed(0)}</span>
            </div>
            <div>
              <span className="block text-[9px] text-zinc-600">FOOD (15%)</span>
              <span className="text-zinc-200">${(monthlyExpense * 0.15).toFixed(0)}</span>
            </div>
            <div>
              <span className="block text-[9px] text-zinc-600">UTILITIES (10%)</span>
              <span className="text-zinc-200">${(monthlyExpense * 0.1).toFixed(0)}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Product Highlights Bento Grid */}
      <section className="bg-black py-20 border-t border-b border-zinc-900 relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_01</span>
              <div>
                <h3 className="text-base font-semibold text-white">Instant Logging</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Record your income and expenses in two taps with smart auto-categorization.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_02</span>
              <div>
                <h3 className="text-base font-semibold text-white">Dynamic Budgets</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Set limits on custom spending pools and track real-time thresholds dynamically.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_03</span>
              <div>
                <h3 className="text-base font-semibold text-white">Deep Analytics</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Understand your net savings and trends over weeks, months, or years.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-zinc-800 bg-[#0c140e]/30 flex flex-col justify-between h-[200px]">
              <span className="font-mono text-[10px] tracking-wider text-emerald-500 uppercase">FIG_04</span>
              <div>
                <h3 className="text-base font-semibold text-white">Local &amp; Secure</h3>
                <p className="text-xs sm:text-[13px] text-zinc-400 mt-2 font-mono leading-relaxed">
                  Entirely offline architecture. Your sensitive financial data never leaves your device.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Bottom Call-To-Action Banner */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 py-24 md:py-32 text-center relative z-10 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
          Ready to simplify your tracking?
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base mt-4 max-w-md">
          Download PocketLedger today for completely local, secure, and privacy-focused financial monitoring.
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

      {/* 6. Footer Navigation */}
      <Footer />
    </div>
  );
}