import React, { useEffect, useState } from 'react';

export const GeometricBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
    >
      {/* Dynamic parallax shapes */}
      {/* 1. Large Terracotta tinted circle */}
      <div
        className="absolute w-[420px] h-[420px] rounded-full border border-dark/10 transition-transform duration-700 ease-out"
        style={{
          top: '15%',
          left: '8%',
          transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
        }}
      />

      {/* 2. Soft Light Color disc */}
      <div
        className="absolute w-72 h-72 rounded-full bg-light/5 blur-2xl transition-transform duration-1000 ease-out"
        style={{
          top: '40%',
          right: '12%',
          transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`,
        }}
      />

      {/* 3. Floating rotated square */}
      <div
        className="absolute w-24 h-24 rounded-2xl border-2 border-light/10 transition-transform duration-500 ease-out"
        style={{
          top: '70%',
          left: '18%',
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px) rotate(${12 + mousePos.x * 10}deg)`,
        }}
      />

      {/* 4. Small dark accent circle */}
      <div
        className="absolute w-8 h-8 rounded-full bg-dark/10 transition-transform duration-300 ease-out"
        style={{
          top: '30%',
          right: '35%',
          transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
        }}
      />

      {/* 5. Pill-shaped floating rectangle */}
      <div
        className="absolute w-32 h-14 rounded-full border border-dark/15 transition-transform duration-700 ease-out"
        style={{
          bottom: '15%',
          right: '20%',
          transform: `translate(${mousePos.x * 18}px, ${mousePos.y * 18}px)`,
        }}
      />
    </div>
  );
};
