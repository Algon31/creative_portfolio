import React from 'react';
import { Home, User, FolderKanban, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'works', label: 'Projects', icon: FolderKanban },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop & Tablet: Floating Vertical Rectangular Panel along Left Viewport */}
      <nav
        aria-label="Primary navigation"
        className="hidden md:flex fixed left-5 lg:left-8 top-1/2 -translate-y-1/2 z-40 flex-col justify-between w-44 lg:w-48 p-3.5 bg-light text-dark rounded-2xl lg:rounded-3xl shadow-[0_12px_36px_rgba(0,0,0,0.2)] border border-dark/15 backdrop-blur-md transition-all duration-300"
      >
        {/* Subtle geometric header accent */}
        <div className="flex items-center justify-between px-2 pt-1 pb-2.5 mb-1 border-b border-dark/10">
          <span className="text-xs font-mono font-bold tracking-widest text-dark/60 uppercase">
            Navigation
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-dark/40" aria-hidden="true" />
        </div>

        {/* Navigation list with both Icons and Text Labels visible at all times */}
        <ul className="flex flex-col gap-1.5 w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="w-full">
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-sans font-semibold text-xs lg:text-sm tracking-wide transition-all duration-200 text-left select-none ${
                    isActive
                      ? 'bg-dark text-light shadow-sm scale-[1.02]'
                      : 'text-dark/75 hover:text-dark hover:bg-dark/10 hover:translate-x-1'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0 stroke-[2.2]" />
                  <span className="truncate">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Subtle geometric footer stamp */}
        <div className="flex items-center justify-between px-2 pt-2.5 mt-2 border-t border-dark/10 text-xs font-mono text-dark/40">
          <span>PORTFOLIO</span>
          <span className="w-1.5 h-1.5 rounded-sm bg-dark/25" />
        </div>
      </nav>

      {/* Mobile: Floating Horizontal Navigation Panel at Bottom */}
      <nav
        aria-label="Mobile navigation"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center justify-around gap-1 p-2 bg-light text-dark rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-dark/15 backdrop-blur-md w-[92vw] max-w-sm"
      >
        <ul className="flex items-center justify-between w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-1">
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={isActive ? 'page' : undefined}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 px-1 rounded-xl font-sans font-semibold text-xs transition-all duration-200 ${
                    isActive ? 'bg-dark text-light shadow-sm' : 'text-dark/75 hover:text-dark'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 stroke-[2.2]" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
