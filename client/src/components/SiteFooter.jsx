import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export default function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-8 px-6 border-t border-theme/60 bg-[rgb(var(--color-bg))]/50 backdrop-blur-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        {/* Copyright */}
        <p className="text-center md:text-left">
          &copy; {CURRENT_YEAR} {profile.name}. All rights reserved.
        </p>

        {/* Center / Attribution */}
        <p className="flex items-center gap-1.5 text-center">
          <span>Engineered with</span>
          <Heart className="w-4 h-4 text-accent fill-accent" />
          <span>using React, Tailwind CSS & Vite</span>
        </p>

        {/* Scroll to top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-accent transition-colors"
          aria-label="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
