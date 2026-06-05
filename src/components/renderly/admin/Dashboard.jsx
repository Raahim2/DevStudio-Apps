"use client";
import React, { useState, useEffect } from 'react';
import UnifiedUploader from './UnifiedUploader';
import InventoryManager from './InventoryManager';
import AnalyticsTab from './AnalyticsTab';

export default function DashboardView({ onLogout }) {
  const [activeTab, setActiveTab] = useState('inventory');
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching from your production URL
    fetch('/renderly/data.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-10">
        <div>
          <h1 className="text-4xl font-black gradient-text-dark tracking-tight">ADMIN <span className="text-indigo-500">PANEL</span></h1>
          <div className="flex gap-4 mt-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/5">
              Patterns: <b className="text-indigo-400">{data?.patterns[0].total || '...'}</b>
            </span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/5">
              Last Update: <b className="text-indigo-400">{data?.updatedAt || '...'}</b>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <nav className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
            <button 
              onClick={() => setActiveTab('inventory')}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'inventory' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              INVENTORY
            </button>
            <button 
              onClick={() => setActiveTab('upload')}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'upload' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              UPLOAD NEW
            </button>
              <button 
              onClick={() => setActiveTab('analytics')}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === 'analytics' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              ANALYTICS
            </button>
          </nav>
          <button onClick={onLogout} className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
        {activeTab === 'inventory' ? (
          <InventoryManager data={data} />
        ) : activeTab === 'analytics' ? (
          <AnalyticsTab />
        ) : (
          <UnifiedUploader currentData={data} onComplete={() => window.location.reload()} />
        )}
      </div>
    </div>
  );
}