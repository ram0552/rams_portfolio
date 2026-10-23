import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, RefreshCw } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Pagination from '../components/Pagination';
import { projects } from '../data/projects';

const ITEMS_PER_PAGE = 4;

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(projects.map((p) => p.category))];
    return cats;
  }, []);

  // Filtered dataset
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Total pages
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE) || 1;

  // Sliced page items
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to page 1
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setCurrentPage(1);
  };

  return (
    <main className="relative z-10 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            All Projects
          </h1>

          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            A comprehensive collection of my engineering work, from full-stack MERN systems to intelligent vector retrieval pipelines and autonomous AI workflows.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex-grow">
              <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search projects by name, description, or tech stack..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[rgb(var(--color-bg))] border border-theme focus:border-accent text-sm text-zinc-800 dark:text-zinc-100 placeholder:text-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setCurrentPage(1);
                  }}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-accent transition-colors px-1.5 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-muted font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-accent" />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategorySelect(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? 'bg-accent text-white font-medium shadow-sm shadow-accent/20'
                    : 'border border-theme text-muted hover:border-accent hover:text-accent hover:bg-accent/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-muted">
          <span>
            Showing {filteredProjects.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}–
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)} of {filteredProjects.length} projects
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-accent font-medium">Category: {selectedCategory}</span>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="bento-card p-12 text-center my-8">
            <Search className="w-10 h-10 text-muted mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">No projects match your criteria</h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-6">
              Try adjusting your search query or select another category filter to explore other projects.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paginatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Functional Pagination */}
        {filteredProjects.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 150, behavior: 'smooth' });
            }}
          />
        )}
      </div>
    </main>
  );
}
