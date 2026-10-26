import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LatticeBackground from './components/LatticeBackground';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen flex flex-col selection:bg-accent/20 selection:text-accent">
        {/* Lattice background system */}
        <LatticeBackground />

        {/* Persistent fixed header */}
        <SiteHeader />

        {/* Application route views */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<Navigate to="/#exploring" replace />} />
            <Route path="/blog/*" element={<Navigate to="/#exploring" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* Global footer */}
        <SiteFooter />
      </div>
    </Router>
  );
}
