import React, { useRef } from 'react';

/**
 * AboutCard
 * 
 * Reusable card wrapper for the About section bento grid.
 * Matches the subtle 3D tilt, hover lift, depth transitions, and border
 * highlights established by ProjectCard.
 */
export default function AboutCard({ children, className = '', ...props }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    // Respect reduced motion and touch devices
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.matchMedia('(pointer: coarse)').matches
    ) {
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Restrained 3D tilt: max ~2.5 degrees rotation matching ProjectCard
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      className={`about-card group relative cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
      {...props}
    >
      {/* Subtle hover gradient overlay matching ProjectCard */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

      {/* Content wrapper with relative z-10 positioning */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
