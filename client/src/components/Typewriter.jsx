import React, { useState, useEffect } from 'react';

export default function Typewriter({
  words = ["developer", "designer", "creative engineer"],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] || "";
    let timeoutId;

    if (!isDeleting) {
      if (charIndex < currentWord.length) {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 500);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  const currentWord = words[wordIndex] || "";
  const displayedText = currentWord.substring(0, charIndex);

  return (
    <span className="typewriter-container inline-flex items-center">
      <span className="text-accent">[</span>
      <span className="text-accent font-medium tracking-tight px-0.5">{displayedText}</span>
      <span className="cursor text-accent font-bold" aria-hidden="true">|</span>
      <span className="text-accent">]</span>
    </span>
  );
}
