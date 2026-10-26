import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  GraduationCap,
  ArrowRight,
  Layers,
  Mail,
  Code2,
  Database,
  Bot,
  Terminal,
  Cpu,
  GitBranch
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Typewriter from '../components/Typewriter';
import ProjectCard from '../components/ProjectCard';
import AboutCard from '../components/AboutCard';
import WhatImExploringSection from '../components/WhatImExploringSection';
import ContactForm from '../components/ContactForm';
import HeroPortrait from '../components/sections/hero/HeroPortrait';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { experiences, education } from '../data/experience';
import { skillCategories } from '../data/skills';

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case 'Frontend Development':
        return <Code2 className="w-5 h-5 text-accent" />;
      case 'Backend Development':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'Databases & Vector Storage':
        return <Database className="w-5 h-5 text-accent" />;
      case 'AI & Generative AI':
        return <Bot className="w-5 h-5 text-accent" />;
      default:
        return <Terminal className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <div className="relative z-10">
      {/* 1. HERO SECTION (Responsive 2-column layout: portrait on left, content on right) */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 lg:py-20 overflow-hidden lg:overflow-visible">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          {/* Left Column: Premium Animated Circular Portrait (~40% desktop ratio) */}
          <div className="lg:col-span-5 flex items-center justify-center order-1 lg:order-1 px-4 sm:px-6">
            <HeroPortrait />
          </div>

          {/* Right Column: Hero Content & CTAs (~60% desktop ratio) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
            {/* Greeting */}
            <p className="text-base md:text-lg font-mono mb-3 lg:mb-4 animate-fade-in text-muted">
              Hi, I'm <span className="text-accent font-semibold">{profile.shortName}</span>
            </p>

            {/* Main Heading with Typewriter */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-[1.18] mb-5 lg:mb-6 animate-fade-in tracking-tight" style={{ animationDelay: '0.1s' }}
            >
              Building innovative solutions
              <br className="hidden sm:inline lg:block" />
              {' '}as a <Typewriter words={profile.typewriterRoles} />
            </h1>

            {/* Professional Subtitle */}
            <p
              className="text-base md:text-lg lg:text-xl text-muted max-w-2xl lg:max-w-xl mb-6 lg:mb-8 leading-relaxed animate-fade-in font-normal"
              style={{ animationDelay: '0.2s' }}
            >
              {profile.title}
            </p>

            {/* Tags */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-muted font-mono text-xs md:text-sm animate-fade-in mb-8 lg:mb-10"
              style={{ animationDelay: '0.3s' }}
            >
              {profile.heroTags.map((tag) => (
                <span key={tag} className="hover:text-accent transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25 text-sm"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-theme text-zinc-800 dark:text-zinc-200 font-medium hover:border-accent hover:text-accent hover:bg-accent/5 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION (BENTO GRID) */}
      <section id="about" className="py-24 px-6 border-t border-theme/30">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              About Me
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              A little bit about who I am, my academic background, and what I build
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Main Bio Card (Spans 2 columns) */}
            <AboutCard className="md:col-span-2 p-8">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Monogram Avatar with Gradient */}
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all duration-300 ease-out border border-accent/20 group-hover:border-accent/40 group-hover:shadow-md group-hover:shadow-accent/10">
                  <span className="text-3xl md:text-4xl font-bold text-accent">
                    {profile.initials}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base mb-4">
                    {profile.bio}
                  </p>
                </div>
              </div>
            </AboutCard>

            {/* Location Card */}
            <AboutCard className="p-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-all duration-300 text-accent">
                <MapPin className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <p className="text-xs text-muted mb-1">Based in</p>
                <p className="text-lg font-semibold">{profile.location}</p>
                <p className="text-xs text-muted/70 mt-1">Open to remote & onsite opportunities</p>
              </div>
            </AboutCard>

            {/* Education Card */}
            <AboutCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 text-accent">
                  <GraduationCap className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 group-hover:border-accent/40 transition-colors duration-200">
                  CGPA: 8.13{/* or {education.cgpa} */}
                </span>
              </div>
              <div>
                <p className="text-xs text-muted mb-1">Undergraduate Studies</p>
                <p className="text-base font-semibold">CS & Data Science</p>
                <p className="text-xs text-muted mt-1">{education.institution}</p>
              </div>
            </AboutCard>

            {/* What I Build Card */}
            <AboutCard className="md:col-span-2 p-6">
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300 text-accent">
                    <Cpu className="w-5 h-5 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-medium text-accent">
                    Core Focus
                  </span>
                </div>

                <div>
                  <p className="text-base font-semibold">What I Build</p>
                </div>

                {/* Sub-Focus Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3.5 rounded-xl bg-muted/5 border border-border/50 hover:border-accent/30 transition-all duration-200 group/sub">
                    <div className="flex items-center gap-2 mb-1.5 text-foreground font-medium text-sm">
                      <Layers className="w-4 h-4 text-accent transition-transform duration-200 group-hover/sub:scale-110" />
                      <span>Full-Stack Platforms</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Production web apps using React, Node.js, and MongoDB with secure auth, rate-limited APIs, and clean state.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-muted/5 border border-border/50 hover:border-accent/30 transition-all duration-200 group/sub">
                    <div className="flex items-center gap-2 mb-1.5 text-foreground font-medium text-sm">
                      <GitBranch className="w-4 h-4 text-accent transition-transform duration-200 group-hover/sub:scale-110" />
                      <span>Agentic & RAG Systems</span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Orchestrated workflows using LangGraph and LangChain, featuring tool calling, RAG pipelines, and human-in-the-loop loops.
                    </p>
                  </div>
                </div>
              </div>
            </AboutCard>


            {/* Quick Skills Pill Card */}
            {/* <div className="bento-card p-6 flex flex-col justify-between group">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors text-accent">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted mb-2">Core Competencies</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickSkills.slice(0, 6).map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 border-t border-theme/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Technical Arsenal
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Technologies, frameworks, and architectural paradigms I work with daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="bento-card p-6 flex flex-col group hover:border-accent transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                </div>

                <p className="text-xs text-muted mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 text-xs rounded-lg bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/60 hover:bg-accent/10 hover:text-accent transition-colors cursor-default text-zinc-700 dark:text-zinc-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 border-t border-theme/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Featured Projects
              </h2>
              <p className="text-muted text-lg max-w-2xl">
                A selection of full-stack MERN and AI systems I've designed and developed
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline shrink-0"
            >
              <span>View all projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Project List: Vertically stacked wide rectangle cards spanning four columns */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="wide" />
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-theme text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-all text-sm font-medium"
            >
              <span>Explore All {projects.length} Projects with Filters & Search</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHAT I'M EXPLORING SECTION */}
      <WhatImExploringSection />

      {/* 6. EXPERIENCE TIMELINE SECTION */}
      <section id="experience" className="py-24 px-6 border-t border-theme/30">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Experience & Journey
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              My verified professional experience and academic milestones
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[rgb(var(--color-border))] md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={exp.id}
                    className={`relative pl-8 md:pl-0 ${isEven ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
                      }`}
                  >
                    {/* Timeline Dot with Accent Ring */}
                    <div className="absolute top-1.5 w-3.5 h-3.5 rounded-full bg-accent border-4 border-[rgb(var(--color-bg))] left-0 md:left-1/2 md:-translate-x-1/2 z-10 shadow-sm shadow-accent/50" />

                    {/* Content Card */}
                    <div className={`experience-card p-6 ${isEven ? 'md:mr-8' : 'md:ml-8'}`}>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent mb-3">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <p className="text-accent font-semibold text-sm mb-1">
                        {exp.organization}
                      </p>
                      <p className="text-xs text-muted mb-3">{exp.location}</p>
                      <p className="text-muted text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <ul className={`space-y-1.5 text-xs text-muted ${isEven ? 'md:text-right' : ''}`}>
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 ${isEven ? 'md:flex-row-reverse' : ''
                              }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 border-t border-theme/30">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20 shadow-lg shadow-accent/10">
            <Mail className="w-10 h-10 text-accent" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Let's work together
          </h2>

          <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Have an interesting project, an internship opportunity, or want to discuss full-stack & AI architectures? I'm always open to discussing new challenges.
          </p>

          {/* Primary Email Button */}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/25 mb-12 text-base"
          >
            <span>Say Hello Directly</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-12 h-12 rounded-2xl flex items-center justify-center text-muted hover:text-accent transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link w-12 h-12 rounded-2xl flex items-center justify-center text-muted hover:text-accent transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="social-link w-12 h-12 rounded-2xl flex items-center justify-center text-muted hover:text-accent transition-all"
              aria-label="Email Me"
              title="Direct Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Functional Contact Form */}
          <div className="pt-8 border-t border-theme/40">
            <h3 className="text-xl font-bold mb-2">Or Send a Direct Inquiry</h3>
            <p className="text-xs text-muted mb-8">
              Fill out the form below to initiate communication
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
