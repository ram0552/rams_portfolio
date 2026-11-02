import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoreVertical, FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const hasResume = Boolean(profile.resumeUrl && profile.resumeUrl.trim());
  const isDownloadable = hasResume && (profile.resumeUrl.endsWith('.pdf') || profile.resumeUrl.startsWith('/'));

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setMenuOpen((prev) => !prev);
  };

  const handleNavClick = (targetId) => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (location.pathname === '/') {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--color-bg))]/85 backdrop-blur-md border-b border-theme/40 transition-colors duration-300">
        <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 max-w-7xl mx-auto h-16 sm:h-20">
          {/* Left — Personal Name */}
          <Link
            to="/"
            onClick={() => handleNavClick('home')}
            className="text-base sm:text-lg font-semibold tracking-tight hover:text-accent transition-colors flex items-center gap-2.5 group shrink-0"
            aria-label={`${profile.name} - Home`}
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold group-hover:scale-105 transition-transform shrink-0">
              {profile.initials}
            </span>
            <span className="font-semibold text-foreground group-hover:text-accent transition-colors whitespace-nowrap">
              {profile.name}
            </span>
          </Link>

          {/* Center — Navigation Links (Exact requested order) */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7 text-sm font-medium text-muted">
            <Link
              to="/"
              onClick={() => handleNavClick('home')}
              className={`hover:text-accent transition-colors py-1 ${
                location.pathname === '/' && !location.hash ? 'text-accent font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/#about"
              onClick={() => handleNavClick('about')}
              className="hover:text-accent transition-colors py-1"
            >
              About
            </Link>
            <Link
              to="/#skills"
              onClick={() => handleNavClick('skills')}
              className="hover:text-accent transition-colors py-1"
            >
              Skills
            </Link>
            <Link
              to="/projects"
              className={`hover:text-accent transition-colors py-1 ${
                location.pathname.startsWith('/projects') ? 'text-accent font-semibold' : ''
              }`}
            >
              Projects
            </Link>
            <Link
              to="/#exploring"
              onClick={() => handleNavClick('exploring')}
              className="hover:text-accent transition-colors py-1 whitespace-nowrap"
            >
              What I'm Exploring
            </Link>
            <Link
              to="/#experience"
              onClick={() => handleNavClick('experience')}
              className="hover:text-accent transition-colors py-1"
            >
              Experience
            </Link>
            <Link
              to="/#contact"
              onClick={() => handleNavClick('contact')}
              className="hover:text-accent transition-colors py-1"
            >
              Contact
            </Link>
          </div>

          {/* Right — Social Profiles, Resume, and Theme Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Desktop Social Profiles & Resume (Exact requested order) */}
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2 mr-1">
              {/* 1. GitHub profile icon */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              {/* 2. LinkedIn profile icon */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-accent hover:bg-accent/10 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              {/* 3. Resume Button */}
              {hasResume ? (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={isDownloadable ? true : undefined}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-accent/10 text-accent border border-accent/30 hover:bg-accent hover:text-white hover:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none transition-all duration-200"
                  aria-label="View or download Resume"
                  title="Resume"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-accent/5 text-accent/50 border border-accent/20 cursor-not-allowed transition-colors select-none"
                  title="Resume coming soon"
                  aria-label="Resume not yet available"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </button>
              )}
            </div>

            {/* 4. Light/dark theme toggle */}
            <ThemeToggle />

            {/* Mobile/Tablet Three-Dot Menu Trigger */}
            <button
              id="menu-toggle"
              type="button"
              onClick={toggleMenu}
              className={`xl:hidden p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                menuOpen
                  ? 'bg-accent/10 text-accent'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60'
              }`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Slide-out mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
}
