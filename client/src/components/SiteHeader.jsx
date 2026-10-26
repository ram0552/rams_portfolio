import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';
import { profile } from '../data/profile';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (targetId) => {
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[rgb(var(--color-bg))]/80 backdrop-blur-md border-b border-theme/40 transition-colors duration-300">
        <nav className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight hover:text-accent transition-colors flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold group-hover:scale-105 transition-transform">
              {profile.initials}
            </span>
            <span>{profile.shortName}</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-muted">
            <Link
              to="/#about"
              onClick={() => handleNavClick('about')}
              className="hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`hover:text-accent transition-colors ${
                location.pathname.startsWith('/projects') ? 'text-accent font-semibold' : ''
              }`}
            >
              Projects
            </Link>
            <Link
              to="/#exploring"
              onClick={() => handleNavClick('exploring')}
              className="hover:text-accent transition-colors whitespace-nowrap"
            >
              What I'm Exploring
            </Link>
            <Link
              to="/#experience"
              onClick={() => handleNavClick('experience')}
              className="hover:text-accent transition-colors"
            >
              Experience
            </Link>
            <Link
              to="/#contact"
              onClick={() => handleNavClick('contact')}
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Menu button */}
            <button
              id="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 transition-colors text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Slide-out mobile menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
