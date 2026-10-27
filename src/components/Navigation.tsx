import React, { useEffect, useState } from 'react';
import { Home, Film, Sparkles, User, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'works', label: 'Works', icon: Film },
  { id: 'disciplines', label: 'Craft', icon: Sparkles },
  { id: 'about', label: 'About', icon: User },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (scrollY >= top - windowHeight * 0.4 && scrollY < top + rect.height - windowHeight * 0.4) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet: Floating Vertical Navigation Bar on the Left */}
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex fixed left-5 lg:left-8 top-[52%] -translate-y-1/2 z-40 flex-col items-center justify-between w-14 lg:w-16 h-[40vh] min-h-[290px] max-h-[380px] py-4 bg-light text-dark rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-dark/10 transition-all duration-300 backdrop-blur-sm"
      >
        {/* Top geometric accent */}
        <div className="w-2.5 h-2.5 rounded-full bg-dark/20" aria-hidden="true" />

        {/* Navigation Items */}
        <ul className="flex flex-col items-center justify-center gap-3 lg:gap-4 my-auto w-full px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative group w-full flex justify-center">
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Scroll to ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'bg-dark text-light scale-110 shadow-sm'
                      : 'text-dark/70 hover:text-dark hover:bg-dark/10 hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                  {/* Subtle active indicator dot */}
                  {isActive && (
                    <span className="absolute -left-1.5 w-1 h-3 rounded-full bg-dark hidden lg:block" />
                  )}
                </button>

                {/* Floating tooltip */}
                <div className="absolute left-full ml-3 px-2.5 py-1 bg-dark text-light text-xs font-sans font-medium rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md tracking-wider">
                  {item.label}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Bottom geometric square accent */}
        <div className="w-2.5 h-2.5 rounded-sm bg-dark/20" aria-hidden="true" />
      </nav>

      {/* Mobile: Floating Horizontal Navigation Pill at Bottom */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center justify-between px-4 py-2.5 bg-light text-dark rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.25)] border border-dark/15 backdrop-blur-md"
      >
        <ul className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Scroll to ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
                    isActive ? 'bg-dark text-light scale-105' : 'text-dark/70 hover:text-dark'
                  }`}
                >
                  <Icon className="w-4 h-4 stroke-[2.2]" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
