import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { profile } from '../data/profile';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="relative z-10 pt-36 pb-24 px-6 text-center">
        <div className="max-w-xl mx-auto bento-card p-12">
          <h1 className="text-3xl font-bold mb-3">Article Not Found</h1>
          <p className="text-muted text-sm mb-6">
            The requested article "{slug}" does not exist or has been relocated.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent-600 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Blog</span>
          </Link>
        </div>
      </main>
    );
  }

  // Simple renderer for markdown-like headings, code blocks and paragraphs
  const renderFormattedContent = (contentStr) => {
    const lines = contentStr.trim().split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBuffer = [];
    let codeLanguage = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (!inCodeBlock) {
          inCodeBlock = true;
          codeLanguage = line.replace('```', '').trim();
          codeBuffer = [];
        } else {
          inCodeBlock = false;
          elements.push(
            <div key={`code-${index}`} className="my-6 rounded-xl overflow-hidden border border-theme">
              {codeLanguage && (
                <div className="bg-zinc-800/80 px-4 py-1.5 text-xs font-mono text-zinc-400 border-b border-zinc-700/50 flex items-center justify-between">
                  <span>{codeLanguage}</span>
                  <span className="text-[10px] text-zinc-500">code</span>
                </div>
              )}
              <pre className="p-4 bg-zinc-950 text-zinc-100 text-xs md:text-sm font-mono overflow-x-auto leading-relaxed">
                <code>{codeBuffer.join('\n')}</code>
              </pre>
            </div>
          );
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4 tracking-tight">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={`h3-${index}`} className="text-xl font-bold mt-6 mb-3 tracking-tight">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={`quote-${index}`} className="border-l-4 border-accent pl-4 my-6 italic text-muted text-sm md:text-base">
            {line.replace('> ', '')}
          </blockquote>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={`li-${index}`} className="text-muted text-sm md:text-base leading-relaxed ml-5 list-disc mb-1.5">
            {line.replace('- ', '')}
          </li>
        );
      } else if (/^\d+\.\s/.test(line)) {
        elements.push(
          <li key={`num-li-${index}`} className="text-muted text-sm md:text-base leading-relaxed ml-5 list-decimal mb-1.5">
            {line.replace(/^\d+\.\s/, '')}
          </li>
        );
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={`p-${index}`} className="text-muted text-sm md:text-base leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <main className="relative z-10 pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to blog</span>
        </Link>

        {/* Header */}
        <header className="mb-12 border-b border-theme/40 pb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent" />
              <time dateTime={post.date}>{post.date}</time>
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>{post.readTime}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-current opacity-40" />
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-accent" />
              <span>{post.category}</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-muted leading-relaxed mb-6 font-normal">
            {post.summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-md bg-[rgb(var(--color-border))]/50 dark:bg-zinc-800/60 text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="prose mb-12">
          {renderFormattedContent(post.content)}
        </div>

        {/* Author Bio Box */}
        <div className="bento-card p-6 md:p-8 my-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent font-bold text-xl">
            {profile.initials}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold">{profile.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">Author</span>
            </div>
            <p className="text-xs text-muted leading-relaxed mb-3">
              Computer Science & Data Science undergraduate and MERN Stack Developer. Exploring AI agent architectures, vector search systems, and high-performance frontend interfaces.
            </p>
            <div className="flex items-center gap-4 text-xs text-accent">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
              <span>&bull;</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              <span>&bull;</span>
              <a href={`mailto:${profile.email}`} className="hover:underline">Contact</a>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="pt-8 border-t border-theme/40 flex items-center justify-between">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Read more articles</span>
          </Link>

          <button
            type="button"
            onClick={() => {
              if (navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Article URL copied to clipboard!');
              }
            }}
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Article</span>
          </button>
        </div>
      </article>
    </main>
  );
}
