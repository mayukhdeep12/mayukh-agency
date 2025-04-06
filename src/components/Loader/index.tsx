'use client';

import React, { Fragment, memo, useEffect, useState } from 'react';

// Import useState and useEffect
import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const COLORS = ['#ffb46a', '#ce54e1', '#7e57c2', 'white'];
const LETTERS = 'MAZZERX'.split(''); // Split letters once
const REPEAT_COUNT = 7; // How many times the word repeats
const TOTAL_SPANS = LETTERS.length * REPEAT_COUNT; // Total number of spans

// Define a consistent initial color for server-render and initial client-render
const INITIAL_COLOR = 'white'; // Or COLORS[0], choose one consistent value

const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  // State to hold the colors for each span. Initialize with the default color.
  const [spanColors, setSpanColors] = useState<string[]>(() =>
    Array(TOTAL_SPANS).fill(INITIAL_COLOR)
  );

  // State to track if the component has mounted on the client
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // This effect runs only once on the client, after the initial render/hydration
    setHasMounted(true); // Mark as mounted

    // Generate the random colors *after* hydration
    const randomColors = Array.from({ length: TOTAL_SPANS }, () => getRandomColor());
    setSpanColors(randomColors);
  }, []); // Empty dependency array ensures it runs only once on mount

  // --- Optional: Early return if not mounted ---
  // You could choose to render nothing or a simpler version until mounted
  // This prevents the INITIAL_COLOR from flashing briefly if hideLoader becomes true quickly
  // if (!hasMounted && hideLoader) { // Example condition
  //    return null;
  // }
  // Or just rely on the hideLoader check below

  // Don't render if the animation hook says to hide
  if (hideLoader && hasMounted) {
    // Ensure it's mounted before hiding based on animation
    return null;
  }
  // Render initial state (with INITIAL_COLOR) if not mounted yet or if hideLoader is false
  if (!hasMounted && hideLoader) {
    // If it's not mounted and should be hidden, render nothing to avoid hydration issues
    // with the animation hiding it before mount finishes
    return null;
  }

  return (
    <section ref={ref} className={styles.loader}>
      <div>
        {/* Create an array representing each repetition */}
        {[...Array(REPEAT_COUNT)].map((_, repeatIndex) => (
          <Fragment key={`repeat-${repeatIndex}`}>
            {/* Map over the letters for each repetition */}
            {LETTERS.map((letter, letterIndex) => {
              // Calculate the unique index for this specific span
              const currentSpanIndex = repeatIndex * LETTERS.length + letterIndex;
              // Use the color from the state array
              const color = spanColors[currentSpanIndex]; // Will be INITIAL_COLOR initially

              return (
                <span
                  key={`${repeatIndex}-${letterIndex}`}
                  style={{ color: color }}
                  // No need for suppressHydrationWarning with this pattern
                >
                  {letter}
                </span>
              );
            })}
          </Fragment>
        ))}
      </div>
    </section>
  );
});

export default Loader;
