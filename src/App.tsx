import { Navigation } from './components/Navigation.tsx';
import { ProfileCard } from './components/ProfileCard.tsx';
import { GeometricBackground } from './components/GeometricBackground.tsx';
import { Hero } from './components/Hero.tsx';
import { HeroIntroText } from './components/HeroIntroText.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { WorksSection } from './components/WorksSection.tsx';
import { DisciplinesSection } from './components/DisciplinesSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { useActiveSection } from './hooks/useActiveSection.ts';

const sectionIds = ['hero', 'about', 'works', 'contact'];

export default function App() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen bg-terracotta text-dark overflow-x-hidden selection:bg-light selection:text-dark">
      {/* Dynamic Parallax Geometric Canvas */}
      <GeometricBackground />

      {/* Floating Vertical Navigation Panel on the Left (with Icons and Text Labels) */}
      <Navigation activeSection={activeSection} />

      {/* Floating Profile Card in the Top-Right Corner (Hidden on Home, Expands on Click) */}
      <ProfileCard activeSection={activeSection} />

      {/* Main Single-Page Journey */}
      <main className="relative z-10 flex flex-col w-full">
        {/* 1. Hero Introduction */}
        <Hero />

        {/* 2. Text Section Immediately Below Hero (Lorem Ipsum placeholder) */}
        <HeroIntroText />

        {/* 3. About & Philosophy */}
        <AboutSection />

        {/* 4. Selected Works / Projects */}
        <WorksSection />

        {/* 5. Disciplines & Craft */}
        <DisciplinesSection />

        {/* 6. Inquiries & Contact */}
        <ContactSection />
      </main>
    </div>
  );
}
