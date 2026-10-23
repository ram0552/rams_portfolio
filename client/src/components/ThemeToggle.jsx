import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800/60 transition-colors text-zinc-700 dark:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-accent/50"
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-zinc-200 hover:text-accent transition-colors" />
      ) : (
        <Moon className="w-5 h-5 text-zinc-700 hover:text-accent transition-colors" />
      )}
    </button>
  );
}
