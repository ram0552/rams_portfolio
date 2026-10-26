import React from 'react';
import { CreditCard, Network, Sliders, Activity } from 'lucide-react';
import { exploringTopics } from '../data/exploring';

export default function WhatImExploringSection() {
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      case 'Network':
        return <Network className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      default:
        return null;
    }
  };

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
            <article
              key={topic.id}
              tabIndex={0}
              className="exploring-card group p-6 sm:p-8 flex flex-col justify-between rounded-3xl border border-theme bg-[rgb(var(--color-bg))] dark:bg-[#ffffff0d] transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-default"
            >
              <div>
                {/* Header: Topic Icon + Subtle Exploring Label */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 group-hover:scale-105 transition-all duration-300 shrink-0">
                    {renderIcon(topic.icon)}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
