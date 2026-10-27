import React, { useState, useEffect } from 'react';

const professions = [
  '3D Artist',
  'Software Engineer',
  'Photographer',
  'Motion Designer',
  'Creative Developer',
  'Video Editor',
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
      }, 300); // smooth halfway fade/slide
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Introduction hero section"
      className="relative w-full flex flex-col justify-center items-start px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-48 lg:pr-56 pt-24 sm:pt-32 pb-10 overflow-hidden"
    >
      {/* Intentional Floating Geometric Motifs */}
      {/* 1. Large Light Hollow Circle (top-left) */}
      <div
        className="absolute top-12 left-8 md:left-24 w-40 h-40 md:w-64 md:h-64 rounded-full border-2 border-light/20 pointer-events-none -z-0"
        aria-hidden="true"
      />
      
      {/* 2. Solid Dark Square (bottom-left) */}
      <div
        className="absolute bottom-12 left-10 md:left-32 w-10 h-10 md:w-16 md:h-16 bg-dark/15 rounded-md pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* 3. Small Light Solid Circle (top-center) */}
      <div
        className="absolute top-28 right-1/3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-light/35 pointer-events-none -z-0"
        aria-hidden="true"
      />

      {/* 4. Rounded Rectangle Accent (mid-right background) */}
      <div
        className="absolute top-36 right-16 md:right-28 w-24 h-48 md:w-36 md:h-64 rounded-3xl border border-dark/20 pointer-events-none -z-0 hidden sm:block"
        aria-hidden="true"
      />

      {/* 5. Minimal Grid Intersection Crosshairs */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-full h-[1px] bg-dark" />
        <div className="h-full w-[1px] bg-dark absolute" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 flex items-center justify-center opacity-30 pointer-events-none">
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
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-light tracking-tighter leading-[0.88] lowercase mb-6 sm:mb-8 select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.12)]">
          ravi bhuvan
        </h1>

        {/* Third Line: Professional Introduction with Highlighted Animated Profession */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-lg sm:text-2xl md:text-3xl font-sans">
          <span className="text-dark font-semibold tracking-tight">
            I'm a video editor and
          </span>

          {/* Highlighted rectangular element: Background #E8ECD6, Text #000000 */}
          <span className="inline-flex items-center px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-xl bg-light text-dark font-display font-bold shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-dark/10 transition-all duration-300">
            <span
              className={`inline-block transition-all duration-300 transform ${
                isAnimating
                  ? 'opacity-0 -translate-y-2'
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {professions[index]}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};
