import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const professions = [
  'Software Engineer',
  '3D Artist',
  'Photographer',
  'Video Editor',
  'Creative Developer',
  'Motion Designer',
];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % professions.length);
        setIsAnimating(false);
      }, 350); // halfway transition for smooth crossfade/slide
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const scrollToWorks = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction hero section"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-48 lg:pr-56 py-24 overflow-hidden"
    >
      {/* Intentional Floating Geometric Motifs */}
      {/* 1. Large Light Hollow Circle (top-left) */}
      <div
        className="absolute top-12 left-8 md:left-24 w-40 h-40 md:w-64 md:h-64 rounded-full border-2 border-light/20 pointer-events-none -z-0"
        aria-hidden="true"
      />
      
      {/* 2. Solid Dark Square (bottom-left) */}
      <div
        className="absolute bottom-20 left-10 md:left-32 w-10 h-10 md:w-16 md:h-16 bg-dark/15 rounded-md pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* 3. Small Light Solid Circle (top-center) */}
      <div
        className="absolute top-28 right-1/3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-light/35 pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* 4. Rounded Rectangle Accent (mid-right background) */}
      <div
        className="absolute bottom-36 right-16 md:right-28 w-24 h-48 md:w-36 md:h-64 rounded-3xl border border-dark/20 pointer-events-none -z-0 hidden sm:block"
        aria-hidden="true"
      />

      {/* 5. Minimal Grid Intersection Crosshairs */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-full h-[1px] bg-dark" />
        <div className="h-full w-[1px] bg-dark absolute" />
      </div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-full h-[1px] bg-dark" />
        <div className="h-full w-[1px] bg-dark absolute" />
      </div>

      {/* Main Content Flow */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-start justify-center">
        {/* Subtle geometric framing bar */}
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <span className="w-3 h-3 rounded-sm bg-dark" aria-hidden="true" />
          <span className="w-12 h-[2px] bg-dark/40" aria-hidden="true" />
          <span className="w-2 h-2 rounded-full border border-dark/60" aria-hidden="true" />
        </div>

        {/* First Line: "i'm" */}
        <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dark tracking-tight leading-none mb-1 md:mb-2 lowercase">
          i'm
        </p>

        {/* Second Line: "ravi bhuvan" */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] text-light tracking-tighter leading-[0.88]  mb-6 sm:mb-8 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          Ravi Bhuvan
        </h1>

        {/* Third Line: Professional Introduction with Animated Title */}
        <div className="flex flex-wrap items-baseline gap-x-2.5 sm:gap-x-3 gap-y-2 text-lg sm:text-2xl md:text-3xl font-sans">
          <span className="text-dark font-semibold tracking-tight">
            I'm a video editor and
          </span>

          {/* Animated Profession Title */}
          <span className="relative inline-flex items-center min-w-[200px] sm:min-w-[280px] md:min-w-[340px]">
            <span
              className={`font-display font-bold text-light transition-all duration-300 ease-out transform ${
                isAnimating
                  ? 'opacity-0 -translate-y-3 blur-[1px]'
                  : 'opacity-100 translate-y-0 blur-0'
              }`}
            >
              {professions[index]}
            </span>
          </span>
        </div>

        {/* Supporting description & quick actions */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-dark/15 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-dark/85 font-sans text-sm sm:text-base max-w-md leading-relaxed font-medium">
            Bridging cinematic pacing, creative code, and geometric structure. Crafting visual rhythms that command attention across screens.
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollToWorks}
              className="px-5 py-2.5 rounded-full bg-dark text-light font-sans font-semibold text-xs sm:text-sm tracking-wide flex items-center gap-2 transition-all duration-200 hover:bg-light hover:text-dark hover:scale-105 shadow-md active:scale-95"
            >
              <span>Explore Works</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-dark/30 text-dark font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:border-dark hover:bg-dark/10"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Geometric Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="w-1 h-6 rounded-full bg-dark/40" />
      </div>
    </section>
  );
};
