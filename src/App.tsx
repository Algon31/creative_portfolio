import { Navigation } from './components/Navigation.tsx';
import { ProfileCard } from './components/ProfileCard.tsx';
import { GeometricBackground } from './components/GeometricBackground.tsx';
import { Hero } from './components/Hero.tsx';
import { WorksSection } from './components/WorksSection.tsx';
import { DisciplinesSection } from './components/DisciplinesSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';

export default function App() {
  return (
    <div className="relative min-h-screen bg-terracotta text-dark overflow-x-hidden selection:bg-light selection:text-dark">
      {/* Dynamic Parallax Geometric Canvas */}
      <GeometricBackground />

      {/* Floating Vertical Navigation Bar on the Left (40% viewport height) */}
      <Navigation />

      {/* Floating Profile Card in the Top-Right Corner */}
      <ProfileCard />

      {/* Main Single-Page Journey */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <WorksSection />
        <DisciplinesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
