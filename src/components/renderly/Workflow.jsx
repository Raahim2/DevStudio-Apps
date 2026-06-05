"use client"
import React, { useState, useEffect, useRef } from 'react';

const workflowData = [
  { id: 1, title: "Home Experience", desc: "Jump back into your projects or start fresh with a tap.", src: "/renderly/R1.jpg" },
  { id: 2, title: "Project Manager", desc: "Organize unlimited drafts with a professional dashboard.", src: "/renderly/R2.jpg" },
  { id: 3, title: "Mockup Gallery", desc: "Browse 50+ studio-quality models in 6 massive categories.", src: "/renderly/R3.jpg" },
  { id: 4, title: "The Power Editor", desc: "Full control. Colors, Textures, Patterns, and Fonts.", src: "/renderly/R4.jpg" }
];

const WorkFlow = ({ isDark }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);
  const stepsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // The scroll starts being 'active' when the container top hits the middle of the screen
      const scrollTriggerPoint = windowHeight / 2;
      
      // totalHeight is the scrollable area of the text side
      const totalHeight = containerRect.height - windowHeight;
      const currentEntry = scrollTriggerPoint - containerRect.top;
      
      // Calculate progress (0 to 1)
      let progress = currentEntry / totalHeight;
      progress = Math.max(0, Math.min(1, progress));

      // Map progress to height (0 to 100%)
      setLineHeight(progress * 100);

      // Map progress to current step index
      const stepIndex = Math.min(
        Math.floor(progress * workflowData.length),
        workflowData.length - 1
      );
      setCurrentStep(Math.max(0, stepIndex));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textMuted = isDark ? "text-slate-400" : "text-slate-500";
  const textHeading = isDark ? "text-white" : "text-slate-900";

  return (
    <section 
      ref={containerRef}
      id="workflow" 
      className={`relative py-32 transition-colors duration-500 border-t ${isDark ? 'border-gray-900' : 'border-gray-200'}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* LEFT SIDE: SCROLLING CONTENT */}
          <div className="w-full lg:w-1/2 relative" ref={stepsContainerRef}>
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-24 uppercase leading-none ${textHeading}`}>
              The Full <br /> <span className="text-blue-500">Workflow.</span>
            </h2>

            {/* THE PROGRESS LINE TRACK */}
            {/* 'top-[260px]' aligns with the center of Circle 1. 'bottom-[120px]' aligns with the center of Circle 4 */}
            <div className="absolute left-6 top-[242px] bottom-[100px] w-[2px] -z-10 bg-slate-200 dark:bg-slate-800">
              {/* THE ACTIVE FILL LINE */}
              <div 
                className="w-full bg-blue-500 relative transition-all duration-150 ease-out shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                style={{ height: `${lineHeight}%` }}
              >
                {/* The glowing tip of the moving line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full blur-[4px]"></div>
              </div>
            </div>

            <div className="space-y-[45vh] pb-[10vh]">
              {workflowData.map((step, idx) => (
                <div 
                  key={step.id} 
                  className={`flex gap-8 transition-all duration-700 items-start ${currentStep === idx ? 'opacity-100 translate-x-2' : 'opacity-20 translate-x-0'}`}
                >
                  {/* Circle Number */}
                  <div className={`w-12 h-12 shrink-0 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-500 z-10
                    ${currentStep === idx 
                      ? 'bg-blue-500 border-blue-500 text-white scale-110 shadow-[0_0_20px_rgba(59,130,246,0.4)]' 
                      : (isDark ? 'bg-[#050505] border-slate-700 text-slate-500' : 'bg-white border-slate-200 text-slate-400')}`}>
                    {step.id}
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h4 className={`text-3xl font-bold mb-4 transition-colors duration-500 ${textHeading}`}>{step.title}</h4>
                    <p className={`text-lg max-w-sm leading-relaxed ${textMuted}`}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: STICKY PHONE */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-32 lg:h-[70vh] flex items-center justify-center">
              <div className="relative">
                {/* Background Glow */}
                <div className={`absolute -inset-10 blur-[80px] rounded-full transition-opacity duration-1000 ${isDark ? 'bg-blue-600/20 opacity-100' : 'bg-blue-500/10 opacity-50'}`}></div>
                
                {/* Phone Container */}
                <div className={`relative w-[280px] h-[580px] md:w-[310px] md:h-[630px] rounded-[3rem] border-[10px] overflow-hidden shadow-2xl transition-all duration-700 
                  ${isDark ? 'bg-black border-[#111] shadow-blue-500/10' : 'bg-slate-900 border-slate-800 shadow-slate-300'}`}>
                  
                  {/* Cross-fading Images */}
                  {workflowData.map((step, idx) => (
                    <img 
                      key={step.id}
                      src={step.src} 
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${currentStep === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`} 
                      alt={`Screen ${idx + 1}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkFlow;