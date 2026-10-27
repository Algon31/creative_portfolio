import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Ravi Bhuvan"
      className="relative min-h-screen w-full px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-16 lg:pr-24 py-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-full border-2 border-dark" aria-hidden="true" />
          <span className="font-display font-semibold text-xs tracking-widest text-dark uppercase">
            Philosophy & Background
          </span>
          <div className="h-[1px] flex-1 max-w-xs bg-dark/20" />
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-light tracking-tight leading-tight mb-12">
          about ravi bhuvan
        </h2>

        {/* Asymmetrical Geometric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Manifesto Card */}
          <div className="lg:col-span-7 rounded-3xl bg-light text-dark p-8 sm:p-12 border border-dark/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-dark" />
                <span className="text-xs font-mono font-bold tracking-widest text-dark/70 uppercase">
                  Spatial Vision
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-dark tracking-tight leading-snug mb-6">
                "Pacing is the soul of cinema. Geometry is the skeleton of interface."
              </h3>

              <div className="space-y-4 font-sans text-sm sm:text-base text-dark/85 leading-relaxed font-medium">
                <p>
                  I'm Ravi Bhuvan, a video editor, creative engineer, and visual artist. I operate at the intersection where temporal editing meets spatial interface design.
                </p>
                <p>
                  Instead of following standard software templates or predictable developer grids, I anchor my work in geometric fundamentals: squares, rectangles, and circles arranged with mathematical intent and expressive color discipline.
                </p>
                <p>
                  Every edit cut, frame of motion, or interactive transition is calculated to evoke physical weight, momentum, and unmistakable aesthetic authority.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-dark/10 flex items-center justify-between text-xs font-sans font-semibold text-dark/60">
              <span>Primary Focus: Video & Interactive Craft</span>
              <span className="text-dark font-bold">Independent Studio</span>
            </div>
          </div>

          {/* Right Column: 3 Geometric Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Pillar 1: Circles (Rhythm & Motion) */}
            <div className="rounded-3xl bg-dark text-light p-6 sm:p-7 flex items-start gap-4 border border-light/10 shadow-md">
              <div className="w-10 h-10 rounded-full border-2 border-light/50 flex-shrink-0 flex items-center justify-center font-display font-bold text-xs mt-0.5">
                01
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-light tracking-tight mb-1">
                  Circles &bull; Rhythm & Pacing
                </h4>
                <p className="font-sans text-xs sm:text-sm text-light/75 leading-relaxed">
                  Cycles, continuous motion, audio loops, and breathing room. Pacing that allows ideas to settle before the next surge.
                </p>
              </div>
            </div>

            {/* Pillar 2: Squares (Structure & Engineering) */}
            <div className="rounded-3xl bg-light text-dark p-6 sm:p-7 flex items-start gap-4 border border-dark/10 shadow-md">
              <div className="w-10 h-10 rounded-lg bg-dark text-light flex-shrink-0 flex items-center justify-center font-display font-bold text-xs mt-0.5">
                02
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-dark tracking-tight mb-1">
                  Squares &bull; Grid & Architecture
                </h4>
                <p className="font-sans text-xs sm:text-sm text-dark/80 leading-relaxed font-medium">
                  Modular frameworks, type scales, and predictable alignment. The rock-solid scaffolding that makes creative risks legible.
                </p>
              </div>
            </div>

            {/* Pillar 3: Rectangles (Cinematic Proportions) */}
            <div className="rounded-3xl bg-light/90 text-dark p-6 sm:p-7 flex items-start gap-4 border border-dark/10 shadow-md">
              <div className="w-10 h-10 rounded-full border border-dark/30 flex-shrink-0 flex items-center justify-center font-display font-bold text-xs mt-0.5">
                03
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-dark tracking-tight mb-1">
                  Rectangles &bull; Screen Frames
                </h4>
                <p className="font-sans text-xs sm:text-sm text-dark/80 leading-relaxed font-medium">
                  16:9 cinema, 9:16 vertical storytelling, 4:5 art prints. Framing content so every pixel contributes to the mood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
