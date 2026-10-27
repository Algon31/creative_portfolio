import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently active based on viewport scroll position.
 */
export function useActiveSection(sectionIds: string[], offsetRatio = 0.35): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || 'hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // If at the very top (within 40% of viewport), active is always Home / Hero
      if (scrollY < windowHeight * 0.4) {
        setActiveSection(sectionIds[0] || 'hero');
        return;
      }

      // Check sections from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * offsetRatio) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, offsetRatio]);

  return activeSection;
}
