import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle2, Layers, Calendar, Tag } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { projects } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="relative z-10 pt-36 pb-24 px-6 text-center">
        <div className="max-w-xl mx-auto bento-card p-12">
          <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
          <p className="text-muted text-sm mb-6">
            The requested project "{slug}" could not be located in the catalog.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to All Projects</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative z-10 pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to projects</span>
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-theme/40 pb-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <time>{project.date}</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5 text-xs text-muted">
              <Tag className="w-3.5 h-3.5 text-accent" />
              <span>{project.category}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-muted leading-relaxed mb-6 font-normal">
            {project.tagline || project.summary}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-600 transition-all hover:scale-105 text-sm shadow-md shadow-accent/20"
              >
                <span>View Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-theme text-zinc-800 dark:text-zinc-200 font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </header>

        {/* Technologies Grid */}
        <div className="mb-12 bento-card p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-accent" />
            <span>Technologies & Frameworks</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-lg bg-accent/10 text-accent font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="prose mb-12">
          <h2>Project Overview</h2>
          <p>{project.description}</p>

          {/* Key Features */}
          <h2>Key Capabilities & Features</h2>
          <ul className="space-y-3 my-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-muted text-sm leading-relaxed list-none pl-0">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Architecture Section */}
          {project.architecture && (
            <>
              <h2>Architecture & Technical Design</h2>
              <p>{project.architecture}</p>
            </>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-theme/40 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore More Projects</span>
          </Link>

          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-muted hover:text-accent transition-colors"
          >
            Back to Top
          </a>
        </div>
      </article>
    </main>
  );
}
