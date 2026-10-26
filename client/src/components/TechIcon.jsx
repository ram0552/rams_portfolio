import React from 'react';
import {
  Globe,
  ShieldCheck,
  Search,
  Sparkles,
  Activity,
  Layers,
  Network
} from 'lucide-react';

/**
 * Authentic SVG brand logos and verified technology glyphs.
 * Optimized for crisp rendering at 18-20px with light and dark mode compatibility.
 */
export default function TechIcon({ name, className = "w-4 h-4 shrink-0" }) {
  switch (name) {
    case 'React':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'JavaScript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            d="M7 17.5c0 1.2.8 1.8 2 1.8 1.3 0 2.1-.7 2.1-2.1v-7.2h-1.8v7.1c0 .5-.3.7-.7.7-.4 0-.6-.2-.6-.7v-1.6H7v2zm8.5-3.3c.6.3 1.3.6 2 .6.9 0 1.4-.4 1.4-1 0-.7-.5-1-1.5-1.4-1.4-.5-2.4-1.2-2.4-2.6 0-1.5 1.2-2.6 3-2.6.9 0 1.7.2 2.3.6l-.6 1.4c-.5-.3-1.1-.5-1.7-.5-.8 0-1.2.4-1.2.9 0 .6.5.9 1.4 1.3 1.5.6 2.5 1.3 2.5 2.7 0 1.6-1.2 2.7-3.2 2.7-1 0-2-.3-2.7-.8l.6-1.3z"
            fill="#000000"
          />
        </svg>
      );

    case 'HTML5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3z" fill="#E34F26" />
          <path d="M12 22.2l5.7-1.4L19.2 3.6H12v18.6z" fill="#EF652A" />
          <path d="M12 8.4h3.9l-.3 3.6H12v2.4h3.4l-.4 4.5-3 .8V21l5.4-1.5.7-7.9h-6.1V8.4z" fill="#FFFFFF" />
          <path d="M12 8.4H8.1l.3-3.6H12V2.4H5.7l.8 9.6H12V8.4zm0 8.4l-3-.8-.2-2.2H6.4l.4 4.5L12 21v-4.2z" fill="#EBEBEB" />
        </svg>
      );

    case 'CSS3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 2l1.8 20.2L12 24l7.2-1.8L21 2H3z" fill="#1572B6" />
          <path d="M12 22.2l5.7-1.4L19.2 3.6H12v18.6z" fill="#33A9DC" />
          <path d="M12 8.4h3.9l-.3 3.6H12v2.4h3.4l-.4 4.5-3 .8V21l5.4-1.5.7-7.9h-6.1V8.4z" fill="#FFFFFF" />
          <path d="M12 8.4H8.1l.3-3.6H12V2.4H5.7l.8 9.6H12V8.4zm0 8.4l-3-.8-.2-2.2H6.4l.4 4.5L12 21v-4.2z" fill="#EBEBEB" />
        </svg>
      );

    case 'Tailwind CSS':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C14.07 13.25 15.82 15 20 15c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C17.93 7.75 16.18 6 12 6zm-8 7c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.14.28 1.96 1.11 2.86 2.03C6.07 20.25 7.82 22 12 22c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.14-.28-1.96-1.11-2.86-2.03C9.93 14.75 8.18 13 4 13z"
            fill="#38BDF8"
          />
        </svg>
      );

    case 'Node.js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z"
            fill="#339933"
          />
          <path
            d="M12 4.2L4.5 8.5v7l7.5 4.3 7.5-4.3v-7L12 4.2zm-2.8 11.2c-1.8 0-3-1-3-2.6 0-1.8 1.3-2.6 3.2-2.6h1.2v-.8c0-.7-.4-1.1-1.3-1.1-.7 0-1.4.2-1.9.6l-.5-1.1c.7-.5 1.7-.8 2.8-.8 1.9 0 2.8.9 2.8 2.4v4h-1.6v-1c-.5.7-1.2 1-1.7 1zm6.6-.2h-1.8V7.8h1.8v7.4z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'Express.js':
      return (
        <div className="w-4 h-4 rounded-md bg-zinc-800 text-zinc-100 dark:bg-zinc-200 dark:text-zinc-900 flex items-center justify-center font-mono font-bold text-[9px] select-none">
          ex
        </div>
      );

    case 'REST APIs':
      return <Globe className={`${className} text-emerald-500`} />;

    case 'Authentication & Authorization':
      return <ShieldCheck className={`${className} text-amber-500`} />;

    case 'MongoDB':
    case 'MongoDB Native Driver':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2s-6 5.5-6 11.5c0 4.2 3.2 7.7 6 8.5 2.8-.8 6-4.3 6-8.5C18 7.5 12 2 12 2zm.2 18.2c-.1.3-.3.5-.6.6.1-.2.2-.4.3-.6h.3zm-.2-15.5c.3 1.2 2.3 4.2 2.3 7.3 0 2.8-1.5 5.3-2.3 6.1v-13.4z"
            fill="#47A248"
          />
        </svg>
      );

    case 'Pinecone':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.8 3.8-3.3 1.8-6.8-3.8L12 4.2zM5.2 8.5L12 12.3v7.5l-6.8-3.8V8.5zm13.6 7.5L13.8 19v-7.5l6.8-3.8v8.3z" fill="#05A7FF" />
        </svg>
      );

    case 'LangChain':
      return (
        <div className="w-4 h-4 rounded-md bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-mono font-bold text-[10px]">
          🦜
        </div>
      );

    case 'LangGraph':
      return <Network className={`${className} text-accent`} />;

    case 'Retrieval-Augmented Generation (RAG)':
      return <Layers className={`${className} text-cyan-500`} />;

    case 'Semantic Search':
      return <Search className={`${className} text-violet-500`} />;

    case 'Google Gemini AI':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.523 7.523 12 2 12c5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z"
            fill="url(#gemini-gradient)"
          />
          <defs>
            <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1BA1E3" />
              <stop offset="0.5" stopColor="#5B7FFF" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'LangSmith / LLMOps':
      return <Activity className={`${className} text-accent`} />;

    case 'Git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M23.54 11.44L12.56.46a1.5 1.5 0 0 0-2.12 0L8.4 2.5l2.67 2.67a1.78 1.78 0 0 1 2.25 2.28l2.57 2.57a1.78 1.78 0 0 1 1.78 2.94 1.78 1.78 0 0 1-2.92-1.78l-2.43-2.43v5.43a1.78 1.78 0 1 1-1.5 0V8.72a1.78 1.78 0 0 1-.95-.88L7.2 5.16.46 11.9a1.5 1.5 0 0 0 0 2.12l10.98 10.98a1.5 1.5 0 0 0 2.12 0l9.98-9.98a1.5 1.5 0 0 0 0-2.12z"
            fill="#F05032"
          />
        </svg>
      );

    case 'GitHub':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'Postman':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M7 13.5l10-5-5 10-1.5-3.5L7 13.5z" fill="#FFFFFF" />
        </svg>
      );

    case 'VS Code':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.2L6.8 11.2l-4.5-3.5L1 8.8v6.4l1.3 1.1 4.5-3.5 10.7 9 5.5-2.6V4.8L17.5 2.2zm0 4.2v11.2l-7.3-5.6 7.3-5.6z" fill="#007ACC" />
        </svg>
      );

    default:
      return <Sparkles className={`${className} text-accent`} />;
  }
}
