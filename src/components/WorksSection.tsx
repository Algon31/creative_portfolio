import { useState } from 'react';
import { Play } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'Video Editing' | 'Creative Tech' | '3D Art' | 'Motion Design' | 'Photography';
  year: string;
  role: string;
  aspect: 'landscape' | 'square' | 'portrait';
  description: string;
  metric: string;
  geometricTag: string;
}

const projects: Project[] = [
  {
    id: 'hyperion',
    title: 'Hyperion Sequence',
    category: 'Video Editing',
    year: '2025',
    role: 'Lead Editor & Sound Designer',
    aspect: 'landscape',
    description: 'High-velocity cinematic cut blending analog film rhythm with modern digital precision. Paced to precision beat alignment.',
    metric: '4K Cinema / 24fps',
    geometricTag: '16:9 Rectangle',
  },
  {
    id: 'kinetic-topology',
    title: 'Kinetic Topology',
    category: 'Creative Tech',
    year: '2025',
    role: 'Creative Engineer',
    aspect: 'square',
    description: 'Interactive mathematical surfaces reacting to pointer velocity and spatial audio frequencies in real-time WebGL.',
    metric: '60 FPS WebGL',
    geometricTag: '1:1 Square',
  },
  {
    id: 'monolith-void',
    title: 'Monolith & Void',
    category: '3D Art',
    year: '2024',
    role: '3D Artist & Art Director',
    aspect: 'portrait',
    description: 'Surreal architectural forms exploring negative space, ray-marched shadows, and monolithic brutalist mass.',
    metric: 'Cycles Render',
    geometricTag: '4:5 Rectangle',
  },
  {
    id: 'chrono-motion',
    title: 'Chrono Identity',
    category: 'Motion Design',
    year: '2024',
    role: 'Motion Designer',
    aspect: 'landscape',
    description: 'Parametric kinetic typographic package designed for a high-frequency trading platform launch.',
    metric: 'Dynamic Pacing',
    geometricTag: '16:9 Rectangle',
  },
  {
    id: 'arch-silence',
    title: 'Architectural Silence',
    category: 'Photography',
    year: '2024',
    role: 'Photographer',
    aspect: 'square',
    description: 'A study in high-contrast shadow lines, concrete intersections, and geometric framing in urban spaces.',
    metric: '35mm Prime',
    geometricTag: '1:1 Square',
  },
];

export const WorksSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Video Editing', 'Creative Tech', '3D Art', 'Motion Design', 'Photography'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="works"
      aria-label="Selected creative works"
      className="relative min-h-screen w-full px-6 sm:px-12 md:pl-28 lg:pl-36 md:pr-16 lg:pr-24 py-28"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-4 h-4 rounded-full bg-light" aria-hidden="true" />
          <span className="font-display font-semibold text-xs tracking-widest text-dark uppercase">
            Curated Index
          </span>
          <div className="h-[1px] flex-1 max-w-xs bg-dark/20" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-light tracking-tight leading-tight">
            selected works
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-dark text-light scale-105 shadow-sm'
                    : 'bg-light/20 text-dark hover:bg-light/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Geometric Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          // Asymmetric geometric column spans
          const colSpan =
            project.aspect === 'landscape'
              ? 'lg:col-span-8'
              : project.aspect === 'portrait'
              ? 'lg:col-span-4'
              : 'lg:col-span-6';

          return (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${colSpan} group relative rounded-3xl bg-light text-dark p-6 sm:p-8 flex flex-col justify-between cursor-pointer border border-dark/10 shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.2)]`}
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-dark" />
                  <span className="text-xs font-sans font-bold tracking-wider text-dark/70 uppercase">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono font-medium text-dark/60 px-2 py-0.5 rounded-full bg-dark/5">
                  {project.year}
                </span>
              </div>

              {/* Geometric Visual Canvas / Preview Area */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl bg-terracotta/20 border border-dark/10 flex items-center justify-center overflow-hidden mb-6 group-hover:bg-terracotta/30 transition-colors">
                {/* Abstract geometric animation composition */}
                {project.category === 'Video Editing' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-dark flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-dark fill-dark ml-1" />
                    </div>
                    {/* Film timecode indicators */}
                    <div className="absolute bottom-2 right-3 font-mono text-[10px] text-dark/60 tracking-wider">
                      00:04:18:24
                    </div>
                  </div>
                )}

                {project.category === 'Creative Tech' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-24 h-24 border border-dark/40 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-dark/60 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-dark" />
                      </div>
                    </div>
                  </div>
                )}

                {project.category === '3D Art' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-16 h-28 border-2 border-dark rounded-md group-hover:skew-x-6 transition-transform flex flex-col justify-between p-2">
                      <div className="w-full h-1 bg-dark/30 rounded" />
                      <div className="w-6 h-6 rounded-full bg-dark/20 self-center" />
                      <div className="w-full h-1 bg-dark/30 rounded" />
                    </div>
                  </div>
                )}

                {project.category === 'Motion Design' && (
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-12 rounded-full bg-dark group-hover:h-16 transition-all" />
                    <span className="w-4 h-8 rounded-full bg-dark/60 group-hover:h-12 transition-all" />
                    <span className="w-4 h-16 rounded-full bg-dark/40 group-hover:h-8 transition-all" />
                  </div>
                )}

                {project.category === 'Photography' && (
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-4 border-dark flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-dark/80" />
                    </div>
                  </div>
                )}

                {/* Aspect Badge */}
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-light/90 text-dark text-[10px] font-sans font-semibold border border-dark/10">
                  {project.geometricTag}
                </div>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-dark tracking-tight leading-tight group-hover:text-dark/90 mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-dark/75 leading-relaxed line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Bottom details */}
                <div className="pt-4 border-t border-dark/10 flex items-center justify-between text-xs font-sans text-dark/60">
                  <span>{project.role}</span>
                  <span className="font-semibold text-dark flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Project &rarr;
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Project Details Drawer / Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-light text-dark rounded-3xl p-6 sm:p-10 shadow-2xl border border-dark/20 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-dark text-light flex items-center justify-center text-sm font-bold hover:scale-105 transition-transform"
            >
              &times;
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-dark" />
              <span className="text-xs font-sans font-bold tracking-wider text-dark/70 uppercase">
                {selectedProject.category} &bull; {selectedProject.year}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-dark tracking-tight leading-tight mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm font-sans font-semibold text-dark/80 mb-6">
              {selectedProject.role} &bull; {selectedProject.metric}
            </p>

            <div className="w-full h-64 rounded-2xl bg-terracotta text-light p-6 flex flex-col justify-between rounded-bl-3xl border border-dark/20 mb-6 relative overflow-hidden">
              <div className="flex items-center justify-between z-10">
                <span className="text-xs font-mono font-medium px-2 py-1 rounded bg-dark/30">
                  {selectedProject.geometricTag}
                </span>
                <span className="text-xs font-sans font-bold uppercase tracking-wider">
                  Case Study Preview
                </span>
              </div>
              <div className="self-center z-10 flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full bg-light text-dark flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 fill-dark ml-0.5" />
                </div>
                <span className="text-xs font-sans font-medium opacity-80">Interactive Reel</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono opacity-80 z-10">
                <span>Ravi Bhuvan Cut</span>
                <span>Stereo Mix / Master</span>
              </div>
              {/* Background geometric accents */}
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border-4 border-light/10 pointer-events-none" />
            </div>

            <p className="font-sans text-sm sm:text-base text-dark/85 leading-relaxed mb-6 font-medium">
              {selectedProject.description} Designed with an unwavering focus on timing, tension, and kinetic impact. Every cut is measured against narrative intention and audio rhythm.
            </p>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-dark/10">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-dark/10 text-dark font-sans font-semibold text-xs tracking-wide hover:bg-dark/20 transition-colors"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-full bg-dark text-light font-sans font-semibold text-xs tracking-wide hover:bg-light hover:text-dark hover:border hover:border-dark transition-all"
              >
                Inquire About Similar Work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
