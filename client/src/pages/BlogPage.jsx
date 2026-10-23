import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, Filter, RefreshCw, BookOpen } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import Pagination from '../components/Pagination';
import { blogPosts } from '../data/blog';

const POSTS_PER_PAGE = 3;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    return ['All', ...new Set(blogPosts.map((p) => p.category))];
  }, []);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE) || 1;

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
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
            Engineering Blog
          </h1>

          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            Technical tutorials, full-stack architectural explorations, and practical guides on building modern MERN & AI applications.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search articles by title, topic, or keyword..."
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

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs text-muted font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-accent" />
              <span>Category:</span>
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

        {/* Counter */}
        <div className="flex items-center justify-between mb-6 text-xs text-muted">
          <span>
            Showing {filteredPosts.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1}–
            {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} articles
          </span>
          {selectedCategory !== 'All' && (
            <span className="text-accent font-medium">Category: {selectedCategory}</span>
          )}
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="bento-card p-12 text-center my-8">
            <BookOpen className="w-10 h-10 text-muted mx-auto mb-3" />
            <h3 className="text-lg font-bold mb-2">No articles found</h3>
            <p className="text-muted text-sm max-w-md mx-auto mb-6">
              No published articles match your current search criteria. Try searching for different keywords or clearing your category filters.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent-600 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* Functional Pagination */}
        {filteredPosts.length > POSTS_PER_PAGE && (
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
