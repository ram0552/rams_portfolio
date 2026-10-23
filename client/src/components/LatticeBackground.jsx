import React, { useMemo } from 'react';

// Pre-generate stable cell animations (20x20 = 400 cells)
function generateCells() {
  const cells = [];
  // Use a deterministic pseudorandom formula so it never causes hydration or rerender mismatches
  for (let i = 0; i < 400; i++) {
    // Generate pseudo-random delay (0s to 8s) and duration (3s to 7s)
    const seed1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
    const seed2 = Math.cos(i * 93.9898 + 67.345) * 24634.6345;
    const delay = ((Math.abs(seed1) % 1) * 8).toFixed(2);
    const duration = (3 + (Math.abs(seed2) % 1) * 4).toFixed(2);

    cells.push({
      id: i,
      delay: `${delay}s`,
      duration: `${duration}s`
    });
  }
  return cells;
}

export default function LatticeBackground() {
  const cells = useMemo(() => generateCells(), []);

  return (
    <div className="lattice-background" aria-hidden="true">
      {/* Ambient subtle glow lights */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Geometric lattice grid */}
      <div className="lattice-grid">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className="lattice-cell"
            style={{
              '--delay': cell.delay,
              '--duration': cell.duration
            }}
          />
        ))}
      </div>
    </div>
  );
}
