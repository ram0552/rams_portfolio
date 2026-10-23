import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card group">
      <Link to={`/blog/${post.slug}`} className="block p-6 md:p-8 h-full flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 text-sm text-muted">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <span className="w-1 h-1 rounded-full bg-current opacity-50" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            <span>{post.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors leading-snug">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
          {post.summary}
        </p>

        {/* Tags & Read more */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-theme/40">
          <span className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/50 text-muted">
            {post.category}
          </span>

          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted group-hover:text-accent transition-colors">
            <span>Read more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </article>
  );
}
