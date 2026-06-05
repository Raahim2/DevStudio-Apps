import React from 'react';

const CategoriesSection = ({ isDark }) => {
  const categories = [
    {
      id: "01",
      title: "Automobile",
      desc: "Supercars & Concept Cars",
      lightBg: "bg-[#F1F4FF]",
      lightBorder: "border-blue-100",
      lightAccent: "text-blue-600",
      darkAccent: "text-blue-400",
      circleColor: "bg-blue-500/10",
    },
    {
      id: "02",
      title: "Furniture",
      desc: "Modern Interiors",
      lightBg: "bg-[#FFF5F1]",
      lightBorder: "border-orange-100",
      lightAccent: "text-orange-600",
      darkAccent: "text-orange-400",
      circleColor: "bg-orange-500/10",
    },
    {
      id: "03",
      title: "Apparels",
      desc: "Streetwear & Fashion",
      lightBg: "bg-[#F5FFF1]",
      lightBorder: "border-green-100",
      lightAccent: "text-green-600",
      darkAccent: "text-green-400",
      circleColor: "bg-green-500/10",
    },
    {
      id: "04",
      title: "Prints",
      desc: "Posters & Branding",
      lightBg: "bg-[#F1FBFF]",
      lightBorder: "border-cyan-100",
      lightAccent: "text-cyan-600",
      darkAccent: "text-cyan-400",
      circleColor: "bg-cyan-500/10",
    },
    {
      id: "05",
      title: "Devices",
      desc: "Phones & Laptops",
      lightBg: "bg-[#F9F1FF]",
      lightBorder: "border-purple-100",
      lightAccent: "text-purple-600",
      darkAccent: "text-purple-400",
      circleColor: "bg-purple-500/10",
    },
    {
      id: "06",
      title: "Products",
      desc: "Packaging & 3D Items",
      lightBg: "bg-[#FFF1F1]",
      lightBorder: "border-red-100",
      lightAccent: "text-red-600",
      darkAccent: "text-red-400",
      circleColor: "bg-red-500/10",
    },
  ];

  return (
    <section className={`py-32 px-6 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#050505]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>
              6 MASSIVE <br /> CATEGORIES
            </h2>
          </div>
          <p className={`text-right max-w-xs font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            From supercars to streetwear, we have everything you need to showcase your art.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`group relative p-10 rounded-[2.5rem] border transition-all duration-500 overflow-hidden cursor-default
                ${isDark 
                  ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                  : `${cat.lightBg} ${cat.lightBorder} hover:shadow-xl hover:-translate-y-1`
                }`}
            >
              <h3 className={`text-4xl font-black mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {cat.title}
              </h3>
              
              <p className={`font-bold mb-8 italic transition-colors ${isDark ? cat.darkAccent : cat.lightAccent}`}>
                {cat.desc}
              </p>

              {/* Decorative Circle Effect */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 rounded-full transition-transform duration-700 group-hover:scale-150 ${cat.circleColor}`}></div>
              
              {/* Background Number */}
              <span className={`text-8xl absolute right-4 bottom-4 font-black transition-opacity pointer-events-none
                ${isDark ? 'text-white opacity-[0.03] group-hover:opacity-10' : 'text-black opacity-[0.05] group-hover:opacity-10'}`}>
                {cat.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;