import React, { useRef } from 'react';
import { CreditCard, Network, Sliders, Activity } from 'lucide-react';
import { exploringTopics } from '../data/exploring';

/**
 * Individual Exploring Card component with pointer-driven 3D tilt,
 * hover elevation, depth transitions, and tailored icon animations
 * matching ProjectCard and AboutCard.
 */
function ExploringCard({ topic }) {
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

    // Restrained 3D tilt: max ~2.5 degrees rotation matching Project and About cards
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
  };

  const renderIcon = (id) => {
    switch (id) {
      case 'payment-integration':
        return (
          <CreditCard className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5" />
        );
      case 'multi-agent-orchestration':
        return (
          <Network className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
        );
      case 'llm-fine-tuning':
        return (
          <Sliders className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6" />
        );
      case 'llmops':
        return (
          <Activity className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5" />
        );
      default:
        return null;
    }
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      className="exploring-card group relative p-6 sm:p-8 flex flex-col justify-between rounded-3xl border border-theme bg-[rgb(var(--color-bg))] dark:bg-[#ffffff0d] cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {/* Subtle hover gradient overlay matching ProjectCard & AboutCard */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

      {/* Relative z-10 content to sit above gradient overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          {/* Header: Topic Icon + Subtle Exploring Label */}
          <div className="flex items-center justify-between mb-5">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-all duration-300 shrink-0">
              {renderIcon(topic.id)}
            </div>
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/40 group-hover:bg-accent/15 transition-all duration-300">
              Exploring
            </span>
          </div>

          {/* Topic Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5 group-hover:text-accent transition-colors duration-200">
            {topic.title}
          </h3>

          {/* Short Description */}
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            {topic.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function WhatImExploringSection() {
  return (
    <section id="exploring" className="py-24 px-6 border-t border-theme/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            What I'm Exploring
          </h2>
          <p className="text-muted text-lg max-w-3xl leading-relaxed">
            Exploring new engineering concepts, deepening my technical knowledge, and building a stronger foundation for intelligent, production-ready applications.
          </p>
        </div>

        {/* 2x2 Clean Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exploringTopics.map((topic) => (
            <ExploringCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
