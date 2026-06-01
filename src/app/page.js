import Navbar from '@/components/commen/Navbar';
import { Shader } from '@/components/landing/Shader';
import { FeaturesSection } from '@/components/landing/FeaturesSection';
import { AppsSection } from '@/components/landing/AppsSection';
import { PerfectToolsSection } from '@/components/landing/PerfectToolsSection'; 
import Footer from '@/components/commen/Footer';


export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <Shader />
        <span className="absolute pointer-events-none z-10 text-center text-5xl md:text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
          DevStudio Apps
        </span>
      </div>

      {/* Features Grid Section */}
      <FeaturesSection />

      {/* Apps Section */}
      <AppsSection />

      {/* Perfect Tools Section */}
      <PerfectToolsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}