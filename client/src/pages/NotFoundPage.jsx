import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="relative z-10 min-h-[80vh] flex items-center justify-center px-6 pt-28 pb-20">
      <div className="max-w-md w-full bento-card p-10 text-center animate-fade-in">
        <span className="inline-block text-6xl md:text-7xl font-extrabold text-accent mb-4 tracking-tighter">
          404
        </span>
        <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
        <p className="text-muted text-sm leading-relaxed mb-8">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-colors text-sm shadow-md shadow-accent/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-theme text-muted hover:text-accent hover:border-accent transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
