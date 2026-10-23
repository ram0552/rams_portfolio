import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FolderGit2, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, featured = false }) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // Prevent navigation if the user clicked on an external link directly
    if (e.target.closest('a')) {
      return;
    }
    navigate(`/projects/${project.slug}`);
  };

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
