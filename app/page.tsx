'use client';

import { useState } from 'react';
import FinalCTA from '@/components/FinalCTA';
import HeroSection from '@/components/HeroSection';
import InteractiveSection from '@/components/InteractiveSection';
import ModelsSection from '@/components/ModelsSection';
import TechnologySection from '@/components/TechnologySection';

export default function Home() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <main
      className="relative overflow-hidden"
      onMouseMove={(event) => {
        const { innerWidth, innerHeight } = window;
        setPointer({
          x: (event.clientX / innerWidth) * 100,
          y: (event.clientY / innerHeight) * 100
        });
      }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(91,227,255,0.2), transparent 24%)`
        }}
      />
      <div className="absolute inset-0 -z-10 bg-neon-grid bg-[length:48px_48px] opacity-20" />
      <HeroSection />
      <ModelsSection />
      <InteractiveSection />
      <TechnologySection />
      <FinalCTA />
    </main>
  );
}
