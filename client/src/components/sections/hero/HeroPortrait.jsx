import React, { useState } from 'react';
import { profileData, profile } from '../../../data/profile';

/**
 * HeroPortrait
 *
 * A premium circular portrait component with:
 * - Isolated entrance animation (portrait-enter)
 * - Gentle floating motion (portrait-float)
 * - Continuous slow-orbiting gradient ring with orbital bead (portrait-orbit)
 * - Subtle ambient coral-red glow with breathing animation (portrait-glow)
 * - Resilient fallback handling with initials avatar and zero layout shift
 * - Full light/dark mode adaptability
 * - Accessibility support for prefers-reduced-motion
 */
export default function HeroPortrait({
  src = profileData.portraitUrl,
  alt = profileData.portraitAlt || `Portrait of ${profile.name}`,
  objectPosition = 'center 20%',
  className = '',
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const initials = profile.initials || 'SG';
  const displayName = profileData.name || profile.shortName || 'Sai Ganesh';

  return (
    <div
      className={`portrait-enter relative flex items-center justify-center select-none ${className}`}
      aria-label={alt}
    >
      {/* 1. Floating Animation Container (Independent layer for vertical translation) */}
      <div className="portrait-float relative flex items-center justify-center">

        {/* 2. Ambient Glow Layer (Breathing radial illumination behind everything) */}
        <div
          className="portrait-glow absolute inset-[-14%] sm:inset-[-18%] lg:inset-[-22%] rounded-full pointer-events-none blur-2xl lg:blur-3xl transition-opacity"
          style={{
            background:
              'radial-gradient(circle, rgba(239, 68, 68, 0.22) 0%, rgba(239, 68, 68, 0.08) 50%, rgba(239, 68, 68, 0) 72%)',
          }}
          aria-hidden="true"
        />

        {/* 3. Outer Orbit Ring Layer (Continuous slow rotation 18-28s) */}
        <div
          className="portrait-orbit absolute inset-[-18px] sm:inset-[-24px] md:inset-[-28px] lg:inset-[-34px] pointer-events-none z-0"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="orbitRingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="45%" stopColor="#ef4444" stopOpacity="0.15" />
                <stop offset="75%" stopColor="currentColor" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
              </linearGradient>
              <filter id="orbitalGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#ef4444" floodOpacity="0.9" />
              </filter>
            </defs>

            {/* Subtle guide track */}
            <circle
              cx="200"
              cy="200"
              r="192"
              stroke="currentColor"
              className="text-zinc-400/20 dark:text-zinc-600/30"
              strokeWidth="1.2"
              strokeDasharray="3 5"
            />

            {/* Rotating gradient arc */}
            <circle
              cx="200"
              cy="200"
              r="192"
              stroke="url(#orbitRingGradient)"
              className="text-zinc-300 dark:text-zinc-700"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Glowing orbital point (orbit bead) */}
            <circle
              cx="200"
              cy="8"
              r="4.5"
              fill="#ef4444"
              filter="url(#orbitalGlow)"
            />
            <circle
              cx="200"
              cy="8"
              r="2"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* 4. Secondary Counter-Orbit Ring (Delicate fine-line cosmic detail) */}
        <div
          className="absolute inset-[-10px] sm:inset-[-14px] md:inset-[-16px] lg:inset-[-20px] rounded-full border border-accent/15 dark:border-accent/20 pointer-events-none z-0"
          aria-hidden="true"
        />

        {/* 5. Main Portrait Frame (Foreground circular container) */}
        <div
          className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[360px] xl:h-[360px] aspect-square rounded-full p-1 sm:p-1.5 transition-all duration-300 shadow-2xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(239, 68, 68, 0.45) 0%, rgba(239, 68, 68, 0.12) 50%, rgba(161, 161, 170, 0.25) 100%)',
          }}
        >
          {/* Inner masking container */}
          <div className="w-full h-full rounded-full overflow-hidden relative bg-light-100 dark:bg-dark-100 border border-white/60 dark:border-zinc-800/80 shadow-inner flex items-center justify-center">

            {/* Skeleton shimmer before image loads */}
            {!imageLoaded && !imageError && (
              <div
                className="absolute inset-0 bg-gradient-to-tr from-zinc-200 via-zinc-100 to-zinc-200 dark:from-dark-200 dark:via-dark-100 dark:to-dark-200 animate-pulse flex items-center justify-center"
                aria-hidden="true"
              >
                <span className="text-accent/30 font-bold text-3xl font-mono">{initials}</span>
              </div>
            )}

            {/* Portrait Image */}
            {!imageError ? (
              <img
                src={src}
                alt={alt}
                loading="eager"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover select-none transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  aspectRatio: '1 / 1',
                  objectPosition: objectPosition,
                }}
              />
            ) : (
              /* Fallback if placeholder/image fails to load */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-accent/15 via-light-100 to-dark-50/10 dark:from-accent/20 dark:via-dark-100 dark:to-dark-200 p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-3 text-accent font-bold text-2xl sm:text-3xl font-mono">
                  {initials}
                </div>
                <p className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200">
                  {displayName}
                </p>
                <span className="text-[10px] sm:text-xs text-muted font-mono mt-1 px-2.5 py-0.5 rounded-full bg-accent/10 text-accent">
                  Portrait Placeholder
                </span>
              </div>
            )}

            {/* Subtle inner glass highlight sheen */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-b from-white/15 via-transparent to-black/10 dark:from-white/10 dark:to-black/30"
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
