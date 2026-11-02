import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  const hasResume = Boolean(profile.resumeUrl && profile.resumeUrl.trim());
  const isDownloadable = hasResume && (profile.resumeUrl.endsWith('.pdf') || profile.resumeUrl.startsWith('/'));

  // Close menu only when route (pathname) actually changes, NOT when opening
  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (isOpen) {
        onClose();
      }
    }
  }, [location.pathname, isOpen, onClose]);

  // Handle outside click when menu is open without closing immediately upon opening
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      const menuEl = document.getElementById('mobile-menu');
      const toggleEl = document.getElementById('menu-toggle');
      if (
        (menuEl && menuEl.contains(e.target)) ||
        (toggleEl && toggleEl.contains(e.target))
      ) {
        return;
      }
      onClose();
    };

    // Attach in next frame so the opening click/tap does not immediately trigger it
    const timer = setTimeout(() => {
      document.addEventListener('click', handleOutsideClick);
    }, 50);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Handle escape key and body overflow lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close menu on screen resize to desktop (xl: 1280px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280 && isOpen) {
        onClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  // Ordered navigation links matching desktop layout
  const navLinks = [
    { name: 'Home', path: '/', isHash: false },
    { name: 'About', path: '/#about', isHash: true },
    { name: 'Skills', path: '/#skills', isHash: true },
    { name: 'Projects', path: '/projects', isHash: false },
    { name: "What I'm Exploring", path: '/#exploring', isHash: true },
    { name: 'Experience', path: '/#experience', isHash: true },
    { name: 'Contact', path: '/#contact', isHash: true }
  ];

  const handleLinkClick = (isHash, path) => {
    onClose();
    if (location.pathname === '/') {
      if (!isHash && path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (isHash) {
        const targetId = path.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        id="menu-overlay"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-out navigation drawer */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed top-16 sm:top-20 right-0 h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] w-80 max-w-[85vw] bg-[rgb(var(--color-bg))] z-50 transform transition-transform duration-300 ease-out shadow-2xl border-l border-theme overflow-y-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col min-h-full p-6 pb-8">
          {/* Header with Title and Close button */}
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-theme/40">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold">
                {profile.initials}
              </span>
              <span className="font-semibold text-xs uppercase tracking-wider text-muted font-mono">
                Menu
              </span>
            </div>
            <button
              id="menu-close"
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 transition-colors text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isProjects = link.path === '/projects';
              const isHome = link.path === '/' && location.pathname === '/' && !location.hash;
              const isActive = (isProjects && location.pathname.startsWith('/projects')) || isHome;

              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.isHash, link.path)}
                    className={`block text-lg font-medium px-3 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'text-accent bg-accent/10 font-semibold'
                        : 'text-foreground hover:text-accent hover:bg-accent/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Drawer footer: Resume & Social Links */}
          <div className="mt-auto pt-8 border-t border-theme/40">
            {/* Resume Action */}
            <div className="mb-4">
              {hasResume ? (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={isDownloadable ? true : undefined}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accent text-white font-medium hover:bg-accent-600 transition-colors shadow-sm shadow-accent/20 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-accent/10 text-accent/60 border border-accent/20 cursor-not-allowed text-sm font-medium"
                  title="Resume coming soon"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume (Coming Soon)</span>
                </button>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl border border-theme text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-colors text-xs font-medium"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-2 px-3 rounded-xl border border-theme text-muted hover:text-accent hover:border-accent hover:bg-accent/5 transition-colors text-xs font-medium"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Copyright & Location */}
            <p className="text-xs text-muted">
              &copy; {CURRENT_YEAR} {profile.name}
            </p>
            <p className="text-xs text-muted/70 mt-0.5">
              {profile.location}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
