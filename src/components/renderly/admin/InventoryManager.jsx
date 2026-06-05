export default function InventoryManager({ data }) {
  if (!data) return <div className="text-center py-20 text-slate-500 animate-pulse">Synchronizing with Vercel Storage...</div>;

  const totalPatterns = parseInt(data.patterns[0].total);
  const premiumIds = data.patterns[1].premium_ids;

  return (
    <div className="space-y-20">
      
      {/* SECTION 1: PATTERNS LIBRARY (The ones you upload) */}
      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <div className="bg-indigo-600/20 p-3 rounded-2xl border border-indigo-500/30">
            <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white tracking-tight">Pattern Library</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Global patterns used for rendering</p>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: totalPatterns }).map((_, index) => {
            const patternId = index + 1;
            const isPremium = premiumIds.includes(patternId);
            return (
              <div key={patternId} className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-xl">
                <div className="aspect-square relative bg-black/40">
                  <img 
                    src={`https://devstudio-apps.vercel.app/renderly/Patterns/${patternId}.webp`} 
                    alt={`Pattern ${patternId}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <button className="w-full py-2 bg-white text-black text-[9px] font-black rounded-lg uppercase tracking-tighter">Replace Pattern</button>
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center bg-black/20">
                  <span className="text-[10px] font-black text-slate-400">#{patternId}</span>
                  {isPremium && (
                    <span className="bg-amber-500/10 text-amber-500 text-[8px] font-black px-1.5 py-0.5 rounded border border-amber-500/20 uppercase">PRO</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: CATEGORIES (Apparels, Automobiles, etc.) */}
      <div className="space-y-16">
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-black text-white tracking-tight">Mockup Categories</h2>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Base assets for mockup generation</p>
        </div>
        
        {data.categories.map((cat) => (
          <section key={cat.id} className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-sm font-black text-indigo-400 uppercase tracking-[0.2em]">{cat.title}</h3>
              <div className="h-px flex-1 bg-white/5"></div>
              <span className="text-[10px] font-bold text-slate-600 bg-white/5 px-2 py-1 rounded-md">{cat.images.length} ASSETS</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {cat.images.map((img) => (
                <div key={img.id} className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all">
                  <div className="aspect-[4/5] relative overflow-hidden bg-black/40">
                    <img src={img.url} alt={img.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {img.isPremium && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-black text-[8px] font-black px-2 py-1 rounded-lg shadow-xl">PRO</div>
                    )}
                  </div>
                  <div className="p-4 bg-black/40 backdrop-blur-md">
                    <p className="text-[11px] font-bold text-slate-200 truncate mb-3">{img.name}</p>
                    <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[9px] font-black rounded-xl transition-all uppercase tracking-widest">
                      Edit Asset
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}