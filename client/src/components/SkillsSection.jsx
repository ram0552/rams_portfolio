import React, { useState, useEffect, useRef } from 'react';
import { Code2, Cpu, Database, Bot, Terminal } from 'lucide-react';
import TechIcon from './TechIcon';
import { skillCategories } from '../data/skills';

/**
 * Returns the corresponding Lucide category icon.
 */
function getCategoryIcon(name) {
  switch (name) {
    case 'Frontend':
      return <Code2 className="w-5 h-5 text-accent" />;
    case 'Backend':
      return <Cpu className="w-5 h-5 text-accent" />;
    case 'Databases & Vector Storage':
      return <Database className="w-5 h-5 text-accent" />;
    case 'AI & Generative AI':
      return <Bot className="w-5 h-5 text-accent" />;
    case 'Developer Tools':
      return <Terminal className="w-5 h-5 text-accent" />;
    default:
      return <Code2 className="w-5 h-5 text-accent" />;
  }
}

/**
 * Maps the floatVariant string to the corresponding CSS floating class.
 */
function getFloatClass(variant) {
  switch (variant) {
    case 'a':
      return 'float-subtle-a';
    case 'b':
      return 'float-subtle-b';
    case 'c':
      return 'float-subtle-c';
    default:
      return '';
  }
}

/**
 * Returns Bento responsive column spans.
 */
function getBentoColSpan(id) {
  switch (id) {
    case 'ai-generative-ai':
      return 'md:col-span-2 lg:col-span-7';
    case 'developer-tools':
      return 'md:col-span-1 lg:col-span-5';
    default:
      return 'md:col-span-1 lg:col-span-4';
  }
}

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  // Check prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Viewport entrance observer (triggers once)
  useEffect(() => {
    if (isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Automatic Category Highlight Cycle (cycles every 3.5s when not paused and tab is active)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;

    const interval = setInterval(() => {
      // Pause animation work when browser tab is hidden
      if (document.hidden) return;
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [prefersReducedMotion, isPaused]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 border-t border-theme/30 relative"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading with subtle entrance */}
        <div
          className="mb-14 transition-all duration-500 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <span className="text-xs uppercase tracking-wider font-semibold text-accent font-mono mb-2 block">
            Technical Skills
          </span>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
          >
            My Technical Toolkit
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Technologies I use to build full-stack applications and explore AI-powered systems.
          </p>
        </div>

        {/* Bento Grid: 12-column composition on desktop, 2-col on tablet, 1-col on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {skillCategories.map((category, index) => {
            const isActive = activeCategory === index;
            const bentoSpan = getBentoColSpan(category.id);

            // Staggered entrance animation delay
            const entranceStyle = {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: `${index * 80}ms`
            };

            return (
              <div
                key={category.id}
                tabIndex={0}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveCategory(index);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onFocus={() => {
                  setIsPaused(true);
                  setActiveCategory(index);
                }}
                onBlur={() => setIsPaused(false)}
                className={`bento-card group relative p-6 sm:p-7 flex flex-col justify-between rounded-3xl transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${bentoSpan} ${
                  isActive
                    ? 'border-accent shadow-lg shadow-accent/10 -translate-y-1'
                    : 'border-theme hover:border-accent/60'
                }`}
                style={entranceStyle}
              >
                {/* Subtle ambient active highlight wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl pointer-events-none transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Category Card Header */}
                  <div className="mb-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                            isActive ? 'bg-accent/20' : 'bg-accent/10'
                          }`}
                        >
                          {getCategoryIcon(category.name)}
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold group-hover:text-accent transition-colors duration-200">
                          {category.name}
                        </h3>
                      </div>

                      {/* Active indicator dot and category counter */}
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full bg-accent transition-all duration-300 ${
                            isActive
                              ? 'opacity-100 scale-100 shadow-sm shadow-accent'
                              : 'opacity-0 scale-75'
                          }`}
                          aria-hidden="true"
                        />
                        <span
                          className={`text-xs font-mono transition-colors duration-300 ${
                            isActive ? 'text-accent font-semibold' : 'text-muted/60'
                          }`}
                        >
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Technology Pills: Every technology is clearly visible without interaction */}
                  <div
                    className={
                      category.id === 'ai-generative-ai'
                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto'
                        : 'flex flex-wrap gap-2.5 mt-auto'
                    }
                  >
                    {category.skills.map((skill) => {
                      const floatClass = prefersReducedMotion
                        ? ''
                        : getFloatClass(skill.floatVariant);

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[rgb(var(--color-border))]/30 dark:bg-zinc-800/40 border border-theme/40 hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 group/tech cursor-default select-none"
                        >
                          {/* Floating icon wrapper (only icon floats gently, text remains completely stable) */}
                          <span className={`inline-flex shrink-0 ${floatClass}`}>
                            <TechIcon
                              name={skill.name}
                              className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
                            />
                          </span>
                          <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover/tech:text-accent transition-colors duration-200">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
