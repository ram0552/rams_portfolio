import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import { profile } from '../data/profile';

const CURRENT_YEAR = new Date().getFullYear();

export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);

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

  const navLinks = [
    { name: 'About', path: '/#about', isHash: true },
    { name: 'Projects', path: '/projects', isHash: false },
    { name: "What I'm Exploring", path: '/#exploring', isHash: true },
    { name: 'Experience', path: '/#experience', isHash: true },
    { name: 'Contact', path: '/#contact', isHash: true }
  ];

  const handleLinkClick = (isHash, path) => {
    onClose();
    if (isHash && location.pathname === '/') {
      const targetId = path.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        id="menu-overlay"
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Slide-out navigation drawer */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[rgb(var(--color-bg))] z-50 transform transition-transform duration-300 ease-out shadow-2xl border-l border-theme ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close button */}
          <div className="flex justify-end mb-8">
            <button
              id="menu-close"
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 transition-colors text-zinc-700 dark:text-zinc-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.isHash, link.path)}
                  className="block text-2xl font-medium py-2 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Drawer footer */}
          <div className="mt-auto pt-8 border-t border-theme">
            <p className="text-sm text-muted">
              &copy; {CURRENT_YEAR} {profile.shortName}
            </p>
            <p className="text-xs text-muted/70 mt-1">
              {profile.location}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
