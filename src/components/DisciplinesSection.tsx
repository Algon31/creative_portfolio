import React from 'react';
import { Video, Code2, Box, Film, Camera } from 'lucide-react';

interface Discipline {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  shape: 'circle' | 'square' | 'pill';
  skills: string[];
  description: string;
}

const disciplines: Discipline[] = [
  {
    title: 'Video Editing',
    subtitle: 'Narrative Pacing & Rhythm',
    icon: Video,
    shape: 'circle',
    skills: ['Cinematic Pacing', 'DaVinci Resolve Color', 'Sound Architecture', 'Commercial & Narrative Cuts'],
    description: 'Treating the timeline as musical notation. Balancing silence, rapid montage, and lingering tension to sustain visceral viewer engagement.',
  },
  {
    title: 'Creative Engineering',
    subtitle: 'Interactive Code & WebGL',
    icon: Code2,
    shape: 'square',
    skills: ['TypeScript', 'WebGL & Three.js', 'React & Tailwind', 'Micro-interaction Systems'],
    description: 'Writing software that lives as a tactile extension of design. Building responsive, high-performance interfaces without generic templates.',
  },
  {
    title: '3D & Spatial Art',
    subtitle: 'Form, Material & Shadow',
    icon: Box,
    shape: 'pill',
    skills: ['Blender & Cycles', 'Procedural Texturing', 'Lighting & Shadow Studies', 'Architectural Visualization'],
    description: 'Sculpting virtual geometry to explore volume, refraction, and monolithic weight. Crafting surreal physical forms in digital space.',
  },
  {
    title: 'Motion Design',
    subtitle: 'Kinetic Typography & Systems',
    icon: Film,
    shape: 'circle',
    skills: ['After Effects', 'Kinetic Typography', 'Brand Motion Systems', 'Lottie & CSS Physics'],
    description: 'Designing movement that feels deliberate and physically grounded. Replacing default easings with custom exponential curves.',
  },
  {
    title: 'Photography',
    subtitle: 'Geometric Framing & Light',
    icon: Camera,
    shape: 'square',
    skills: ['Spatial Composition', 'High-Contrast Shadows', 'Urban Geometry', '35mm Analog & Digital'],
    description: 'Capturing the raw geometries of architecture, natural light falloff, and stark human scale in structured environments.',
  },
];

export const DisciplinesSection: React.FC = () => {
  return (
    <section
      id="disciplines"
      aria-label="Creative disciplines and toolkit"
      className="relative min-h-screen w-full px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-16 lg:pr-24 py-28"
    >
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-sm bg-dark" aria-hidden="true" />
          <span className="font-display font-semibold text-xs tracking-widest text-dark uppercase">
            Multidisciplinary Craft
          </span>
          <div className="h-[1px] flex-1 max-w-xs bg-dark/20" />
        </div>

        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-light tracking-tight leading-tight">
          disciplines & practice
        </h2>
        <p className="mt-4 text-dark/80 font-sans text-base sm:text-lg max-w-2xl font-medium">
          Where editorial intuition meets engineering discipline. Five interrelated creative languages sharing one geometric foundation.
        </p>
      </div>

      {/* Grid of Disciplines */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {disciplines.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group relative rounded-3xl bg-light text-dark p-7 sm:p-8 border border-dark/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)]"
            >
              <div>
                {/* Shape Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-dark text-light flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-dark/5 text-dark/65">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-dark tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-sans font-semibold text-dark/60 tracking-wider uppercase mb-4">
                  {item.subtitle}
                </p>

                <p className="font-sans text-xs sm:text-sm text-dark/80 leading-relaxed font-medium mb-6">
                  {item.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-dark/10">
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-sans font-medium px-2.5 py-1 rounded-md bg-terracotta/15 text-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Geometric Synthesis Card (6th slot to balance 3x2 grid) */}
        <div className="rounded-3xl bg-dark text-light p-7 sm:p-8 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.25)] relative overflow-hidden group">
          {/* Subtle background circle motif */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-light/10 pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          
          <div>
            <div className="w-12 h-12 rounded-full border border-light/30 flex items-center justify-center mb-6">
              <div className="w-4 h-4 rounded-sm bg-light" />
            </div>

            <h3 className="font-display font-bold text-2xl text-light tracking-tight mb-2">
              The Intersection
            </h3>
            <p className="font-sans text-xs sm:text-sm text-light/80 leading-relaxed font-medium mb-6">
              Great video has code-like structure. Great code has cinematic pacing. Working across these frontiers eliminates handoff friction and guarantees singular art direction.
            </p>
          </div>

          <div className="pt-4 border-t border-light/20 flex items-center justify-between text-xs font-sans font-semibold text-light/70">
            <span>Unified Workflow</span>
            <span className="text-light">&bull; Zero Friction</span>
          </div>
        </div>
      </div>
    </section>
  );
};
