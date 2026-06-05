import React from 'react';

const EditorSection = ({ isDark }) => {
  // Inverted logic: Section is LIGHT when site is DARK
  const sectionBg = !isDark ? 'bg-white' : 'bg-[#050505]';
  const sectionText = !isDark ? 'text-slate-900' : 'text-white';
  const sectionMuted = !isDark ? 'text-slate-500' : 'text-zinc-400';
  const marqueeOpacity = !isDark ? 'opacity-[0.08]' : 'opacity-20';
  const cardBg = !isDark ? 'bg-slate-100 border-slate-200' : 'bg-zinc-900 border-white/10';
  const stepThreeBg = !isDark ? 'bg-black text-white' : 'bg-white text-black';

  return (
    <section className={`py-32 overflow-hidden transition-colors duration-700 ${sectionBg} ${sectionText}`}>
      {/* Infinite Marquee Component */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
      `}</style>

      <div className={`mb-20 select-none pointer-events-none ${marqueeOpacity}`}>
        <div className="animate-marquee text-[120px] font-black uppercase tracking-tighter leading-none">
          <span className="mx-4">100+ Textures • 30+ Patterns • Infinite Colors • 8K Exports •</span>
          <span className="mx-4">100+ Textures • 30+ Patterns • Infinite Colors • 8K Exports •</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-6xl font-black tracking-tighter mb-10 leading-tight uppercase">
            THE EDITOR THAT <br /> 
            <span className="text-indigo-600">DOES IT ALL.</span>
          </h2>

          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-indigo-500/20">
                01
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Infinite Custom Colors</h4>
                <p className={sectionMuted}>Change the color of any part of the mockup. Chrome, Matte, or Glossy—your choice.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#FF5C00] flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-orange-500/20">
                02
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Patterns & Textures</h4>
                <p className={sectionMuted}>Apply 30+ curated patterns or choose from 100+ high-res textures like leather, carbon, or silk.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-bold text-2xl transition-colors duration-500 ${stepThreeBg}`}>
                03
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Typography & Icons</h4>
                <p className={sectionMuted}>Add text or upload your own SVG icons. Drag, scale, and rotate in real-time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Preview Card (Simulated Editor UI) */}
        <div className={`relative h-[600px] rounded-[3rem] border transition-all duration-700 overflow-hidden group ${cardBg}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 p-8">
              {/* Texture Swatches */}
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/2.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/3.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/4.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/5.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/6.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/7.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/8.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/9.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/10.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/11.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/12.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/13.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/14.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/15.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/18.webp" alt="" />
                                <img  className="w-16 h-16 md:w-20 md:h-20 rounded-xl hover:scale-110 transition cursor-pointer shadow-lg"src="/renderly/Patterns/16.webp" alt="" />

                              
            </div>
          </div>
          
          {/* Bottom Floating Tip */}
          
        </div>
      </div>
    </section>
  );
};

export default EditorSection;