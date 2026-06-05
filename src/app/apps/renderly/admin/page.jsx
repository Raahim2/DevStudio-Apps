"use client";
import React, { useState, useEffect } from 'react';
import DashboardView from '@/components/renderly/admin/Dashboard';

// --- MAIN PAGE COMPONENT ---
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // AUTH IS NO LONGER PERSISTED. 
  // Refreshing the page will now trigger a logout by default.

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (username === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setTimeout(() => {
        setIsAuthenticated(true);
        setLoading(false);
        // Clear inputs for security
        setUsername('');
        setPassword('');
      }, 800);
    } else {
      setTimeout(() => {
        setError('Invalid credentials');
        setLoading(false);
      }, 400);
    }
  };

  const handleLogout = () => {
    // Simply reset the state to false.
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .gradient-text-dark { background: linear-gradient(135deg, #fff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .pattern-bg { background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>

      <div className="pattern-bg min-h-screen relative p-6 md:p-12 flex flex-col items-center">
        
        {/* Background Glow Effect */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-600 blur-[140px] rounded-full -z-10 transition-opacity duration-1000 ${isAuthenticated ? 'opacity-10' : 'opacity-20'}`}></div>

        {isAuthenticated ? (
          /* SHOW DASHBOARD */
          <div className="w-full animate-in fade-in zoom-in-95 duration-700">
             <DashboardView onLogout={handleLogout} />
          </div>
        ) : (
          /* SHOW LOGIN FORM */
          <div className="flex-1 flex items-center justify-center w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl border border-white/10 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
              {/* Login Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 border border-white/10 bg-white/5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Restricted Session</span>
                </div>
                <h1 className="text-4xl font-black tracking-tighter gradient-text-dark mb-2 uppercase">
                  Admin <span className="text-indigo-500">Login</span>
                </h1>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Login expires on page refresh</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="./admin"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all font-medium"
                    required
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all font-medium"
                    required
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold tracking-tight transition-all active:scale-[0.98] shadow-lg shadow-indigo-500/20 disabled:opacity-50"
                >
                  {loading ? "VERIFYING IDENTITY..." : "ESTABLISH SESSION"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}