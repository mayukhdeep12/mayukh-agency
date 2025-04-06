'use client';

import Image from 'next/image';
import { memo, useMemo } from 'react';

import { useMarqueeAnimation } from './Marquee.anime';
import styles from './Skills.module.scss';

// Array of vibrant gradient combinations for profile backgrounds
const colorGradients = [
  { primary: '#FF6B6B', secondary: '#FF8E53' }, // Red-Orange
  { primary: '#4ECDC4', secondary: '#2AB7CA' }, // Teal-Blue
  { primary: '#FFD166', secondary: '#FF9A5A' }, // Yellow-Orange
  { primary: '#6A0572', secondary: '#AB83A1' }, // Purple-Lavender
  { primary: '#1A936F', secondary: '#88D498' }, // Green-Mint
  { primary: '#3A86FF', secondary: '#5E60CE' }, // Blue-Indigo
  { primary: '#FF8600', secondary: '#FFB627' }, // Orange-Amber
  { primary: '#06D6A0', secondary: '#1B9AAA' }, // Mint-Teal
  { primary: '#EF476F', secondary: '#FF84A1' }, // Pink-Rose
  { primary: '#118AB2', secondary: '#73D2DE' } // Cyan-Sky
];

// Patterns for avatar backgrounds (CSS patterns)
const patterns = [
  'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.1) 5px, rgba(255,255,255,0.1) 10px)',
  'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.1) 5px, transparent 5px)',
  'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)',
  'repeating-radial-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1) 5px, transparent 5px, transparent 10px)',
  'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)'
];

// Helper function to generate random design elements
const generateRandomDesign = (name: string | undefined) => {
  const colorIndex = Math.floor(Math.random() * colorGradients.length);
  const patternIndex = Math.floor(Math.random() * patterns.length);
  const initials = name
    ? name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2)
    : 'C';

  return {
    gradient: colorGradients[colorIndex],
    pattern: patterns[patternIndex],
    initials
  };
};

interface MarqueeProps {
  review: Array<
    Array<{
      text: string;
      image: string;
      name?: string;
      country?: string; // Country image URL
    }>
  >;
}

const Marquee = memo(function Marquee({ review }: MarqueeProps) {
  const ref = useMarqueeAnimation();

  return (
    <div className={styles.marquee} ref={ref}>
      {review.map((reviewRow, i) => (
        <div key={i} className={styles.testimonialRow}>
          <TestimonialRow row={reviewRow} />
        </div>
      ))}
    </div>
  );
});

interface TestimonialRowProps {
  row: Array<{
    text: string;
    image: string;
    name?: string;
    country?: string; // Country image URL
  }>;
}

const TestimonialRow = memo(function TestimonialRow({ row }: TestimonialRowProps) {
  // Generate random designs for each testimonial at the component level
  const designsForItems = useMemo(() => {
    const combinedRow = [...row, ...row];
    return combinedRow.map((item) => ({
      item,
      design: generateRandomDesign(item.name)
    }));
  }, [row]);

  return designsForItems.map((itemWithDesign, index) => {
    const { item, design } = itemWithDesign;

    return (
      <div key={index} className={styles.testimonialCard}>
        {item.country && (
          <div className={styles.countryIconWrapper}>
            <Image
              src={item.country}
              alt='Country flag'
              className={styles.countryIcon}
              width={24}
              height={24}
            />
          </div>
        )}
        <div className={styles.testimonialContent}>
          <div
            className={styles.testimonialImage}
            style={{
              background: `linear-gradient(135deg, ${design.gradient.primary}, ${design.gradient.secondary})`,
              backgroundSize: 'cover',
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffffff',
              fontSize: '28px',
              fontWeight: 'bold',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: design.pattern,
                backgroundSize: '20px 20px'
              }}
            ></div>
            <span
              style={{
                position: 'relative',
                zIndex: 2,
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}
            >
              {design.initials}
            </span>
          </div>
          <h4 className={styles.clientName}>{item.name || `Client ${index + 1}`}</h4>
          <p className={styles.testimonialText}>&ldquo;{item.text}&rdquo;</p>
        </div>
      </div>
    );
  });
});

export default Marquee;
