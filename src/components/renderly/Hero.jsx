"use client"



const Hero = ( {isDark } ) => {
  const textMuted = isDark ? "text-slate-400" : "text-slate-500";

  return (
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] blur-[120px] rounded-full -z-10 opacity-30 transition-colors duration-1000 ${isDark ? 'bg-indigo-600' : 'bg-indigo-300'}`}></div>
          <div className="max-w-6xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-bounce border transition-all ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className={`text-xs font-bold tracking-widest uppercase ${textMuted}`}>Mobile Engine v1.0 is Live</span>
            </div>
            <h1 className={`text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 ${isDark ? 'gradient-text-dark' : 'gradient-text-light'}`}>
              MASTER YOUR <br /> <span className="text-indigo-500">MOCKUPS.</span>
            </h1>
            <p className={`text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light ${textMuted}`}>
              Why settle for flat images? Renderly gives you studio-grade lighting, 
              <span className={`font-semibold ml-2 ${isDark ? 'text-white' : 'text-indigo-600'}`}>90+ device categories</span>, and real-time rendering.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <img onClick={()=>window.location.href = "https://play.google.com/store/apps/details?id=com.raahim2.Renderly"} src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-16 hover:scale-105 transition cursor-pointer" alt="Google Play" />
              <p className={`text-sm font-bold tracking-widest uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Android Exclusive</p>
            </div>
          </div>
        </section>

  );
};

export default Hero;