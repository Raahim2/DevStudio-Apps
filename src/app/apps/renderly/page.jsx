"use client"
import React, { useState} from 'react';
import Hero from '@/components/renderly/Hero';
import WorkFlow from '@/components/renderly/Workflow';
import Navbar from '@/components/commen/Navbar';
import BentoGrid from '@/components/renderly/BentoGrid';
import CategoriesSection from '@/components/renderly/Categories';
import EditorSection from '@/components/renderly/EditorSection';
import Footer from '@/components/commen/Footer';



const App = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  const themeClass = isDark ? "bg-[#050505] text-slate-200" : "bg-[#f8fafc] text-slate-900";
  


  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans ${themeClass}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .gradient-text-dark { background: linear-gradient(135deg, #fff 0%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .gradient-text-light { background: linear-gradient(135deg, #0f172a 0%, #475569 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .brand-gradient { background: linear-gradient(to right, #6366f1, #a855f7, #ec4899); }
        .pattern-bg { background-image: radial-gradient(${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>

      <Navbar  />

      <div className="pattern-bg">
        <Hero isDark={isDark} />

        <WorkFlow isDark={isDark} />

        <BentoGrid isDark={isDark} />

        <CategoriesSection isDark={isDark} />

        <EditorSection isDark={isDark} />

        <Footer  />
      </div>
    </div>
  );
};

export default App;