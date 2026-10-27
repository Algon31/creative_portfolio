import React from 'react';

export const ProfileCard: React.FC = () => {
  return (
    <aside
      aria-label="Creator identity card"
      className="fixed top-5 right-5 md:top-7 md:right-8 lg:top-8 lg:right-10 z-40 select-none group"
    >
      <div className="relative flex flex-col items-center p-3.5 sm:p-4 bg-light text-dark rounded-2xl md:rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.22)] border border-dark/10 w-36 sm:w-44 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_14px_45px_rgba(0,0,0,0.3)]">
        {/* Subtle geometric corner square stamp */}
        <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-dark/25 rounded-sm" aria-hidden="true" />
        
        {/* Profile Image: Circular Empty Placeholder */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full border-2 border-dashed border-dark/30 bg-terracotta/10 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-dark/60">
          {/* Subtle concentric inner guide circle */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dark/15 flex items-center justify-center">
            {/* Minimal geometric empty avatar glyph */}
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-dark/35"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          {/* Placeholder ready label tooltip for developer convenience */}
          <span className="sr-only">Profile photo placeholder</span>
        </div>

        {/* 1. Name: Ravi Bhuvan */}
        <h2 className="font-display font-bold text-sm sm:text-base text-dark tracking-tight text-center leading-tight">
          Ravi Bhuvan
        </h2>

        {/* 2. Professional Title: Video Editor */}
        <p className="font-sans text-xs sm:text-xs font-semibold text-dark/75 mt-0.5 tracking-wide text-center">
          Video Editor
        </p>

        {/* Subtle geometric status pill */}
        <div className="mt-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-dark/5 border border-dark/10">
          <span className="w-1.5 h-1.5 rounded-full bg-dark animate-pulse" />
          <span className="text-[10px] font-sans font-medium text-dark/70 tracking-wider uppercase">
            Available
          </span>
        </div>
      </div>
    </aside>
  );
};
