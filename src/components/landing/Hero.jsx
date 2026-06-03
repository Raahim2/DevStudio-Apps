"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

// Custom inline SVG Icons
const MoveRightIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 8L22 12L18 16" />
    <path d="M2 12H22" />
  </svg>
);

const SparklesIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5z" />
    <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" />
  </svg>
);

// Custom self-contained Button component supporting sizes and variants
function Button({
  children,
  className = "",
  variant = "default",
  size = "default",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none";

  const variants = {
    default:
      "bg-zinc-50 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-50/90",
    secondary:
      "bg-zinc-800 text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80",
    outline:
      "border border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900 hover:text-white dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
  };

  const sizes = {
    default: "h-10 py-2 px-4 rounded-md text-sm",
    sm: "h-9 px-3 rounded-md text-xs",
    lg: "h-11 px-8 rounded-md text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}

function Hero({ onCycleShader }) {
  const [titleNumber, setTitleNumber] = useState(0);
  
  // Custom keywords representing mobile app standards
  const titles = useMemo(
    () => ["intuitive", "essential", "seamless", "powerful", "beautiful"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4" onClick={() => window.open("https://devstudio-apps.vercel.app/about",)}>
              Explore DevStudio Releases <MoveRightIcon className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular text-white">
              <span>Crafting mobile apps that are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-zinc-100"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-zinc-400 max-w-2xl text-center">
              Explore our selection of productivity tools, utilities, and lifestyle features directly on the Google Play Store. Crafted with precision to simplify your workflows and streamline your day.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Interactive Shader Button */}
            <Button 
              size="lg" 
              className="gap-4" 
              variant="outline"
              onClick={onCycleShader}
            >
              Change Shader <SparklesIcon className="w-4 h-4" />
            </Button>
            
            {/* Play Store Redirect Button */}
            <a 
              href="https://play.google.com/store/apps/dev?id=5812710502212545050" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-4 w-full sm:w-auto">
                Browse Play Store <MoveRightIcon className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;