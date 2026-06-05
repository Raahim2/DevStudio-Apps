"use client";
import React, { useEffect, useState, useMemo, useRef } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function AnalyticsTab() {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeView, setTimeView] = useState('Daily');
  const [hoverData, setHoverData] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  async function fetchAnalytics() {
    try {
      const response = await fetch(`${BASE_URL}/fetch`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          API_KEY: API_KEY,
          db_name: process.env.NEXT_PUBLIC_DBNAME,
          collection_name: process.env.NEXT_PUBLIC_COLLECTION,
          filter_condition: {}
        })
      });
      if (response.ok) {
        const result = await response.json();
        const data = Array.isArray(result) ? result : result.data || [];
        setRawData(data);
      }
    } catch (error) {
      console.error("Error fetching analytics:", error);
    } finally {
      setLoading(false);
    }
  }

  const stats = useMemo(() => {
    if (!rawData.length) return null;

    const data = {
      total: rawData.length,
      frequency: {}, roles: {}, goals: {}, tools: {}, levels: {},
      platforms: { android: 0, ios: 0 },
      timeSeries: {},
    };

    rawData.forEach(item => {
      if (item["1"]) data.frequency[item["1"]] = (data.frequency[item["1"]] || 0) + 1;
      if (item["2"]) data.roles[item["2"]] = (data.roles[item["2"]] || 0) + 1;
      if (item["3"]) data.goals[item["3"]] = (data.goals[item["3"]] || 0) + 1;
      if (item["4"]) data.tools[item["4"]] = (data.tools[item["4"]] || 0) + 1;
      if (item["5"]) data.levels[item["5"]] = (data.levels[item["5"]] || 0) + 1;
      
      const p = item.platform?.toLowerCase() || 'android';
      if (data.platforms.hasOwnProperty(p)) data.platforms[p]++;

      if (item.createdAt) {
        const date = new Date(item.createdAt);
        let key;
        if (timeView === 'Daily') key = date.toISOString().split('T')[0];
        else if (timeView === 'Weekly') {
          const firstDay = new Date(date.setDate(date.getDate() - date.getDay()));
          key = `${firstDay.getMonth() + 1}/${firstDay.getDate()}`;
        } else {
          key = date.toLocaleString('default', { month: 'short', year: 'numeric' });
        }
        data.timeSeries[key] = (data.timeSeries[key] || 0) + 1;
      }
    });

    const chartData = Object.entries(data.timeSeries)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    return { ...data, chartData };
  }, [rawData, timeView]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-40">
      <div className="w-10 h-10 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Building HUD...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-12 pb-20 animate-in fade-in duration-700">
      
      {/* 1. TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <RealStat title="Gross Users" value={stats.total} sub="Total Onboarded" color="indigo" />
        <RealStat title="Primary Segment" value={getTopKey(stats.roles)} sub="Winning Persona" color="amber" />
        <RealStat title="Primary Tool" value={getTopKey(stats.tools)} sub="Tech Stack" color="emerald" />
        <RealStat title="Habitual" value={getTopKey(stats.frequency)} sub="Retention Rate" color="rose" />
      </div>

      {/* 2. CUSTOM SVG GROWTH CHART */}
      <section className="bg-slate-900/50 border border-white/10 rounded-[2.5rem] p-10 space-y-10 backdrop-blur-3xl relative overflow-hidden">
        <div className="flex justify-between items-center relative z-10">
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter italic">GROWTH VELOCITY</h3>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-[0.3em]">Live acquisition stream</p>
          </div>
          <div className="flex bg-black/40 p-1.5 rounded-2xl border border-white/10">
            {['Daily', 'Weekly', 'Monthly'].map((v) => (
              <button 
                key={v}
                onClick={() => setTimeView(v)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black transition-all ${timeView === v ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:text-white'}`}
              >
                {v.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="h-72 w-full relative group" ref={containerRef}>
          <CustomLineChart 
            data={stats.chartData} 
            onHover={(d) => setHoverData(d)} 
          />
          
          {/* TOOLTIP */}
          {hoverData && (
            <div 
              className="absolute bg-slate-900 border border-indigo-500/50 p-4 rounded-2xl shadow-2xl pointer-events-none z-50 backdrop-blur-xl animate-in fade-in zoom-in duration-200"
              style={{ left: `${hoverData.x}%`, top: '0', transform: 'translateX(-50%)' }}
            >
              <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">{hoverData.date}</p>
              <p className="text-2xl font-black text-white">{hoverData.count} <span className="text-[10px] text-slate-500">USERS</span></p>
            </div>
          )}
        </div>
      </section>

      {/* 3. DETAIL GRIDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DetailGrid title="Usage Cadence" data={stats.frequency} total={stats.total} />
        <DetailGrid title="Global Roles" data={stats.roles} total={stats.total} />
        <DetailGrid title="Objectives" data={stats.goals} total={stats.total} />
        <DetailGrid title="Design Stack" data={stats.tools} total={stats.total} />
        <DetailGrid title="Expertise" data={stats.levels} total={stats.total} />
        
        {/* Platform Card */}
        <div className="bg-indigo-600 rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="text-[10px] font-black text-indigo-200 uppercase tracking-[0.4em] mb-8">Ecosystem</h4>
                <div className="space-y-8">
                    <PlatformProgress label="Android" val={stats.platforms.android} total={stats.total} />
                    <PlatformProgress label="iOS" val={stats.platforms.ios} total={stats.total} />
                </div>
            </div>
            <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
                <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2H7C5.89 2 5 2.89 5 4V20C5 21.11 5.89 22 7 22H17C18.11 22 19 21.11 19 20V4C19 2.89 18.11 2 17 2M17 18H7V6H17V18Z"/></svg>
            </div>
        </div>
      </div>
    </div>
  );
}

// --- PURE SVG CHART COMPONENT ---

function CustomLineChart({ data, onHover }) {
  if (!data.length) return null;

  const width = 1000;
  const height = 200;
  const max = Math.max(...data.map(d => d.count), 5);
  
  // Generate SVG points
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1 || 1)) * width;
    const y = height - (d.count / max) * height;
    return `${x},${y}`;
  }).join(' ');

  const areaPoints = `0,${height} ${points} ${width},${height}`;

  return (
    <div className="w-full h-full">
      <svg 
        viewBox={`0 0 ${width} ${height}`} 
        className="w-full h-full overflow-visible" 
        preserveAspectRatio="none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
          const index = Math.round((xPercent / 100) * (data.length - 1));
          if (data[index]) onHover({ ...data[index], x: xPercent });
        }}
        onMouseLeave={() => onHover(null)}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Grid Lines */}
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1="0" y1={(height / 3) * i} x2={width} y2={(height / 3) * i} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}

        {/* The Area */}
        <polygon points={areaPoints} fill="url(#areaGrad)" />
        
        {/* The Line */}
        <polyline
          fill="none"
          stroke="#6366f1"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
          className="drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]"
        />

        {/* Data Points */}
        {data.map((d, i) => (
          <circle 
            key={i} 
            cx={(i / (data.length - 1 || 1)) * width} 
            cy={height - (d.count / max) * height} 
            r="4" 
            fill="#6366f1" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          />
        ))}
      </svg>
    </div>
  );
}

// --- UI HELPERS ---

function RealStat({ title, value, sub, color }) {
    const themes = {
        indigo: "text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
        amber: "text-amber-400 border-amber-500/20 bg-amber-500/5",
        emerald: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
        rose: "text-rose-400 border-rose-500/20 bg-rose-500/5",
    };
    return (
        <div className={`p-8 rounded-[2.5rem] border ${themes[color]} group hover:bg-white/5 transition-all`}>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-50 mb-1">{title}</p>
            <p className="text-3xl font-black truncate">{value}</p>
            <p className="text-[9px] font-bold opacity-30 uppercase tracking-tighter mt-1">{sub}</p>
        </div>
    );
}

function DetailGrid({ title, data, total }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 space-y-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-widest border-b border-white/5 pb-4">{title}</h4>
            <div className="space-y-5">
                {Object.entries(data).sort((a,b) => b[1] - a[1]).map(([key, val]) => (
                    <div key={key} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase">
                            <span className="text-slate-400">{key}</span>
                            <span className="text-indigo-400">{Math.round((val/total)*100)}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 shadow-[0_0_12px_#6366f1]" style={{ width: `${(val/total)*100}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function PlatformProgress({ label, val, total }) {
    const perc = Math.round((val/total)*100) || 0;
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-end">
                <p className="text-xs font-black text-white uppercase tracking-widest">{label}</p>
                <p className="text-2xl font-black text-white/40">{perc}%</p>
            </div>
            <div className="h-3 w-full bg-black/20 rounded-full p-1 border border-white/10">
                <div className="h-full bg-white rounded-full transition-all duration-1000 shadow-[0_0_15px_#fff]" style={{ width: `${perc}%` }}></div>
            </div>
        </div>
    );
}

function getTopKey(obj) {
  if (!obj || Object.keys(obj).length === 0) return "N/A";
  return Object.entries(obj).sort((a,b) => b[1] - a[1])[0][0];
}