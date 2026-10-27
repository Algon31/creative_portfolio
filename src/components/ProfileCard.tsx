import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { profileConfig } from '../config/profile.ts';

interface ProfileCardProps {
  activeSection: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ activeSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Visibility: appear on every section EXCEPT Home ('hero')
  const isVisible = activeSection !== 'hero';

  // Keyboard Escape listener & focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false);
        triggerRef.current?.focus();
      }
    };

    if (isExpanded) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  const handleClose = () => {
    setIsExpanded(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      {/* Floating Profile Card: Top-Right Corner (Hidden on Home) */}
      <aside
        aria-label="Creator profile card"
        className={`fixed top-5 right-5 md:top-7 md:right-8 lg:top-8 lg:right-10 z-40 transition-all duration-300 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setIsExpanded(true)}
          aria-expanded={isExpanded}
          aria-haspopup="dialog"
          aria-label="Open expanded profile details for Ravi Bhuvan"
          className="relative flex flex-col items-center p-3.5 sm:p-4 bg-light text-dark rounded-2xl md:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.22)] border border-dark/15 w-36 sm:w-40 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_16px_45px_rgba(0,0,0,0.3)] active:scale-95 text-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-dark"
        >
          {/* Subtle corner square accent */}
          <div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-dark/25 rounded-sm" aria-hidden="true" />

          {/* Circular Profile Image Placeholder */}
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 rounded-full border-2 border-dashed border-dark/30 bg-terracotta/10 flex items-center justify-center overflow-hidden transition-colors duration-200 group-hover:border-dark/60">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dark/15 flex items-center justify-center">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-dark/35 group-hover:text-dark/50 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>

          {/* 1. Name: Ravi Bhuvan */}
          <h2 className="font-display font-bold text-sm sm:text-base text-dark tracking-tight leading-tight">
            {profileConfig.name}
          </h2>

          {/* 2. Professional Title: Video Editor */}
          <p className="font-sans text-xs font-semibold text-dark/75 mt-0.5 tracking-wide">
            {profileConfig.title}
          </p>

          {/* Tap-to-expand prompt */}
          <span className="mt-2 text-xs font-sans font-medium text-dark/50 group-hover:text-dark/80 transition-colors">
            Tap to expand &rarr;
          </span>
        </button>
      </aside>

      {/* Expanded Profile Overlay / Modal */}
      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="expanded-profile-name"
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8 bg-dark/65 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Expanded Panel: Centered near top-middle of the viewport */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-light text-dark rounded-3xl p-6 sm:p-9 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-dark/20 animate-in zoom-in-95 duration-200 flex flex-col items-center text-center"
          >
            {/* Close Button marked X at Top-Right */}
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleClose}
              aria-label="Close profile modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-dark text-light flex items-center justify-center text-sm font-bold hover:scale-105 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-dark"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Geometric Top Accent */}
            <div className="flex items-center gap-1.5 mb-5 opacity-40">
              <span className="w-2 h-2 rounded-full bg-dark" />
              <span className="w-1.5 h-1.5 rounded-sm bg-dark" />
            </div>

            {/* 1. Circular Profile-Image Placeholder (Large) */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 rounded-full border-2 border-dashed border-dark/40 bg-terracotta/10 flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dark/15 flex items-center justify-center">
                <svg
                  className="w-10 h-10 sm:w-12 sm:h-12 text-dark/35"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
            </div>

            {/* 2. Name: Ravi Bhuvan */}
            <h3
              id="expanded-profile-name"
              className="font-display font-black text-2xl sm:text-3xl text-dark tracking-tight leading-tight"
            >
              {profileConfig.name}
            </h3>

            {/* 3. Professional Title: Video Editor */}
            <p className="font-sans text-sm sm:text-base font-semibold text-dark/75 mt-1 tracking-wide">
              {profileConfig.title}
            </p>

            {/* Availability Badge */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark/5 border border-dark/10">
              <span className="w-2 h-2 rounded-full bg-dark animate-pulse" />
              <span className="text-xs font-sans font-medium text-dark/75">
                Available for Select Projects
              </span>
            </div>

            {/* 4. Short Introduction (approx 2-3 lines of placeholder text) */}
            <div className="mt-5 pt-5 border-t border-dark/10 w-full text-center">
              <div className="space-y-2 font-sans text-xs sm:text-sm text-dark/85 leading-relaxed font-medium">
                {profileConfig.shortBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Footer action button */}
            <div className="mt-6 pt-4 border-t border-dark/10 w-full flex items-center justify-center gap-3">
              <a
                href="#contact"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-full bg-dark text-light font-sans font-semibold text-xs tracking-wide hover:bg-dark/80 transition-all shadow-sm"
              >
                Contact Ravi
              </a>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2.5 rounded-full border border-dark/20 text-dark font-sans font-semibold text-xs tracking-wide hover:bg-dark/5 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
