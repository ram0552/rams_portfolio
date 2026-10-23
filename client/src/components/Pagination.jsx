import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange
}) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipses if needed
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm rounded-xl border border-theme transition-all ${
          currentPage === 1
            ? 'opacity-40 cursor-not-allowed text-muted'
            : 'hover:border-accent hover:text-accent hover:bg-accent/5 text-zinc-700 dark:text-zinc-200'
        }`}
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-1.5">
        {pages.map((p, idx) => {
          if (p === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 text-muted select-none">
                ...
              </span>
            );
          }

          const isCurrent = p === currentPage;
          return (
            <button
              key={`page-${p}`}
              type="button"
              onClick={() => onPageChange(p)}
              aria-current={isCurrent ? 'page' : undefined}
              className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                isCurrent
                  ? 'bg-accent text-white shadow-md shadow-accent/25'
                  : 'border border-theme hover:border-accent hover:text-accent hover:bg-accent/5 text-muted'
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm rounded-xl border border-theme transition-all ${
          currentPage === totalPages
            ? 'opacity-40 cursor-not-allowed text-muted'
            : 'hover:border-accent hover:text-accent hover:bg-accent/5 text-zinc-700 dark:text-zinc-200'
        }`}
        aria-label="Go to next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
