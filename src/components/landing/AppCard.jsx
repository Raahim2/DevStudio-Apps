import React, { useState } from 'react';

/**
 * Safely converts hex colors to RGBA with a custom opacity
 */
const hexToRgba = (hex, alpha = 1) => {
  const defaultColor = `rgba(168, 85, 247, ${alpha})`; // Purple fallback
  if (!hex || typeof hex !== 'string') return defaultColor;
  
  let cleanHex = hex.trim().replace('#', '');
  
  // Handle 3-digit shorthand (e.g. "3bf" -> "33bbff")
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map(char => char + char).join('');
  }
  
  if (cleanHex.length !== 6) return defaultColor;
  
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  if (isNaN(r) || isNaN(g) || isNaN(b)) return defaultColor;
  
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export function AppCard({
  // Adjusted parameter names to match AppsSection's keys
  name = "Obsidian",
  logo = "https://play-lh.googleusercontent.com/6OWhVt_goGRVtTtwRShblkBinYeq9OjdvlIBTln5Y-PD3msEM5KpFM53wUYHPWPPiY920jUBlwmMtNcHrFa3yA=s512-rw",
  featureGraphic = "/fg1.png",
  description = "Capture information, manage tasks and pin notes to your menu bar.",
  colorTheme = "indigo", // Now supports theme names OR raw HEX values (e.g. '#a855f7')
  onActionClick
}) {
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  // Map theme strings from appsData to exact HEX color codes
  const themeColors = {
    indigo: '#6366f1',
    violet: '#8b5cf6',
    cyan: '#06b6d4',
    amber: '#f59e0b',
    orange: '#f97316',
    emerald: '#10b981',
  };

  // Safely resolve the brand color: check map first, then fallback to hex strings, then fallback to purple
  const brandColor = themeColors[colorTheme] || (colorTheme?.startsWith('#') ? colorTheme : '#a855f7');

  // Dynamically derived styles based on the resolved color
  const dynamicStyles = {
    cardBorder: isCardHovered ? hexToRgba(brandColor, 0.35) : hexToRgba(brandColor, 0.15),
    cardBackground: `linear-gradient(to bottom, ${hexToRgba(brandColor, 0.12)} 0%, #06040a 100%)`,
    glowOverlay: `radial-gradient(circle, ${hexToRgba(brandColor, 0.15)} 0%, transparent 70%)`,
    logoBorder: hexToRgba(brandColor, 0.25),
    logoBg: hexToRgba(brandColor, 0.05),
    logoGlow: `drop-shadow(0 0 8px ${hexToRgba(brandColor, 0.4)})`,
    dividerColor: hexToRgba(brandColor, 0.16),
    btnBorder: isBtnHovered ? hexToRgba(brandColor, 0.45) : hexToRgba(brandColor, 0.18),
    btnBg: isBtnHovered ? hexToRgba(brandColor, 0.15) : hexToRgba(brandColor, 0.06),
    btnText: isBtnHovered ? '#ffffff' : '#9ca3af'
  };

  return (
    <div 
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="relative w-[300px] h-[500px] flex-shrink-0 flex flex-col justify-between overflow-hidden rounded-3xl text-white shadow-2xl transition-all duration-300"
      style={{
        border: `1px solid ${dynamicStyles.cardBorder}`,
        background: dynamicStyles.cardBackground
      }}
    >
      
      {/* Dynamic background radial glow */}
      <div 
        className="absolute bottom-[-10%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full pointer-events-none blur-[80px]" 
        style={{
          background: dynamicStyles.glowOverlay
        }}
      />

      {/* Top Section */}
      <div className="relative z-10 flex flex-col gap-4 p-6">
        {/* Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* App Logo Container */}
            <div 
              className="relative flex h-12 w-12 items-center justify-center rounded-xl shadow-inner overflow-hidden transition-colors duration-300"
              style={{
                border: `1px solid ${dynamicStyles.logoBorder}`,
                backgroundColor: dynamicStyles.logoBg
              }}
            >
              <img 
                src={logo} 
                alt={`${name} Logo`} 
                className="h-full w-full object-contain"
                style={{
                  filter: dynamicStyles.logoGlow
                }}
              />
            </div>
            {/* App Name */}
            <h3 className="text-[19px] font-semibold tracking-wide text-gray-100">{name}</h3>
          </div>

          {/* Action Arrow Button */}
          <button 
            onMouseEnter={() => setIsBtnHovered(true)}
            onMouseLeave={() => setIsBtnHovered(false)}
            onClick={onActionClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 active:scale-95"
            style={{
              border: `1px solid ${dynamicStyles.btnBorder}`,
              backgroundColor: dynamicStyles.btnBg,
              color: dynamicStyles.btnText
            }}
          >
            {/* Inline SVG Chevron Right */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2.5" 
              stroke="currentColor" 
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Feature Description */}
        <p className="max-w-[90%] text-[14.5px] leading-relaxed text-gray-300">
          {description}
        </p>

        {/* Subtle Horizontal Divider */}
        <div 
          className="h-[1px] w-full transition-all duration-300" 
          style={{
            background: `linear-gradient(to right, transparent, ${dynamicStyles.dividerColor} 50%, transparent)`
          }}
        />
      </div>

      {/* Graphic Area (Middle & Bottom) */}
      <div className="relative flex h-[280px] w-full items-center justify-center shadow-inner overflow-hidden">
        {/* Feature Graphic with dynamic glow layer underneath */}
        <div 
          className="absolute h-24 w-24 rounded-full blur-[40px] pointer-events-none opacity-40"
          style={{
            backgroundColor: brandColor
          }}
        />
        <img 
          src={featureGraphic} 
          alt={`${name} Feature Graphic`} 
          className="relative z-10 max-h-[85%] w-auto object-contain transition-transform duration-500 hover:scale-[1.03] select-none pointer-events-none"
        />
      </div>
    </div>
  );
}