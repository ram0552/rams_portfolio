import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FolderGit2, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

/**
 * Reusable action icons component displaying GitHub and Live Demo buttons
 * positioned in the top-right corner of the project card.
 */
function ProjectActionIcons({ project }) {
  const hasGithub = Boolean(project.github && project.github.trim() && project.github !== '#');
  const hasDemo = Boolean(project.demo && project.demo.trim() && project.demo !== '#');

  return (
    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0 relative z-20">
      {/* GitHub Action Icon */}
      {hasGithub ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200 hover:scale-110 active:scale-95 inline-flex items-center justify-center"
          aria-label={`View GitHub repository for ${project.title}`}
          title="View GitHub repository"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
      ) : (
        <span
          aria-disabled="true"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg text-muted/30 cursor-not-allowed inline-flex items-center justify-center select-none"
          aria-label="GitHub repository not available"
          title="GitHub repository not available"
        >
          <GithubIcon className="w-5 h-5" />
        </span>
      )}

      {/* Live Demo Action Icon */}
      {hasDemo ? (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200 hover:scale-110 active:scale-95 inline-flex items-center justify-center"
          aria-label={`Open live demo for ${project.title}`}
          title="Open live demo"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      ) : (
        <span
          aria-disabled="true"
          onClick={(e) => e.stopPropagation()}
          className="p-2 rounded-lg text-muted/30 cursor-not-allowed inline-flex items-center justify-center select-none"
          aria-label="Live demo not available"
          title="Live demo not available"
        >
          <ExternalLink className="w-5 h-5" />
        </span>
      )}
    </div>
  );
}

export default function ProjectCard({ project, featured = false, variant = 'default' }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  const handleCardClick = (e) => {
    // Prevent navigation if the user clicked on an external link or interactive action directly
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

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

    // Restrained 3D tilt: max ~2.5 degrees rotation
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;

    cardRef.current.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
  };

  // Dedicated Wide Rectangle Card Variant for Homepage
  if (variant === 'wide') {
    return (
      <article
        ref={cardRef}
        onClick={handleCardClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="project-card project-card-wide group cursor-pointer col-span-1 lg:col-span-4 w-full relative rounded-3xl border border-theme bg-[rgb(var(--color-bg))] dark:bg-[#ffffff0d] p-6 sm:p-8 lg:p-9 flex flex-col justify-between min-h-[220px] md:min-h-[240px]"
        data-slug={project.slug}
      >
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          {/* Top Row: Project icon + metadata on left, GitHub & Live Demo actions on right */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 text-accent shrink-0">
                <FolderGit2 className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {project.category}
                </span>
                {project.date && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-accent/40" />
                    <span className="text-xs text-muted font-mono">{project.date}</span>
                  </>
                )}
              </div>
            </div>

            {/* Top-right GitHub and Live Demo action icons */}
            <ProjectActionIcons project={project} />
          </div>

          {/* Project title and tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-xs sm:text-sm text-accent/80 font-medium mt-1">
                {project.tagline}
              </p>
            )}
          </div>

          {/* Concise project description */}
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
            {project.summary}
          </p>

          {/* Technology tags */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-theme/40 font-medium transition-colors duration-200 hover:border-accent/40 hover:text-accent hover:bg-accent/5 select-none cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Bottom action: Architecture Details */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent text-xs sm:text-sm font-medium transition-colors border border-accent/20 group/action focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
              aria-label={`View architecture details for ${project.title}`}
            >
              <Layers className="w-4 h-4 text-accent" />
              <span>Architecture Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/action:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Standard Card Variant (Dedicated Projects Page)
  return (
    <article
      ref={cardRef}
      onClick={handleCardClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`project-card group cursor-pointer ${featured ? 'featured md:col-span-2' : ''}`}
      data-slug={project.slug}
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />

      <div className="relative p-6 md:p-8 h-full flex flex-col z-10">
        {/* Header: Project icon on upper-left, GitHub & Live Demo actions on upper-right */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 text-accent shrink-0">
            <FolderGit2 className="w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
          </div>

          {/* Top-right GitHub and Live Demo action icons */}
          <ProjectActionIcons project={project} />
        </div>

        {/* Content */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2 text-xs font-medium text-accent">
            <span>{project.category}</span>
            {project.date && (
              <>
                <span className="w-1 h-1 rounded-full bg-accent/40" />
                <span className="text-muted">{project.date}</span>
              </>
            )}
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed flex-grow">
            {project.summary}
          </p>
        </div>

        {/* Footer: Tags and View Details */}
        <div className="mt-auto pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/50 text-muted border border-theme/30 transition-colors duration-200 hover:border-accent/40 hover:text-accent hover:bg-accent/5 select-none cursor-default"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent font-medium select-none">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs font-medium text-muted group-hover:text-accent transition-colors shrink-0">
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </article>
  );
}
