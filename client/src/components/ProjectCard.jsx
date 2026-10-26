import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FolderGit2, ExternalLink, ArrowRight, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, featured = false, variant = 'default' }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation if the user clicked on an external link or interactive action directly
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

  // Dedicated Wide Rectangle Card Variant for Homepage
  if (variant === 'wide') {
    return (
      <article
        onClick={handleCardClick}
        className="project-card project-card-wide group cursor-pointer col-span-1 lg:col-span-4 w-full relative rounded-3xl border border-theme bg-[rgb(var(--color-bg))] dark:bg-[#ffffff0d] p-6 sm:p-8 lg:p-9 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10 dark:hover:shadow-accent/5 flex flex-col justify-between min-h-[220px] md:min-h-[240px]"
        data-slug={project.slug}
      >
        {/* Subtle hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-4">
          {/* 1. Project icon or existing visual indicator */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors text-accent shrink-0">
              <FolderGit2 className="w-5 h-5" />
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

          {/* 2. Project title */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-xs sm:text-sm text-accent/80 font-medium mt-1">
                {project.tagline}
              </p>
            )}
          </div>

          {/* 3. Concise project description */}
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-4xl font-normal">
            {project.summary}
          </p>

          {/* 4. Technology tags */}
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-lg bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 border border-theme/40 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 5. Existing project actions, such as GitHub, live demo, or architecture details */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent/10 hover:bg-accent/20 text-accent text-xs sm:text-sm font-medium transition-colors border border-accent/20 group/action"
              aria-label={`View architecture details for ${project.title}`}
            >
              <Layers className="w-4 h-4 text-accent" />
              <span>Architecture Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/action:translate-x-1 transition-transform" />
            </Link>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-theme hover:border-accent hover:text-accent text-muted text-xs sm:text-sm font-medium transition-colors bg-zinc-500/5 hover:bg-accent/5"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub Repository"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-theme hover:border-accent hover:text-accent text-muted text-xs sm:text-sm font-medium transition-colors bg-zinc-500/5 hover:bg-accent/5"
                aria-label={`View live demo of ${project.title}`}
                title="Live Demonstration"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onClick={handleCardClick}
      className={`project-card group cursor-pointer ${featured ? 'featured md:col-span-2' : ''}`}
      data-slug={project.slug}
    >
      {/* Subtle hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

      <div className="relative p-6 md:p-8 h-full flex flex-col z-10">
        {/* Header: Icon and Actions */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors text-accent">
            <FolderGit2 className="w-6 h-6" />
          </div>

          {/* External links */}
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 text-muted hover:text-accent transition-colors relative z-20"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub Repository"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 text-muted hover:text-accent transition-colors relative z-20"
                aria-label={`View live demo of ${project.title}`}
                title="Live Demonstration"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
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
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
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
                className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/50 text-muted"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent font-medium">
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
