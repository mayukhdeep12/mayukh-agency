'use client';

import Image from 'next/image';
import { memo } from 'react';

import { useMarqueeAnimation } from './Marquee.anime';
import styles from './Skills.module.scss';

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
  return [...row, ...row].map((item, index) => (
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
        <Image
          src={item.image}
          alt={`${item.name || 'Client'} profile`}
          className={styles.testimonialImage}
          width={100}
          height={100}
        />
        <h4 className={styles.clientName}>{item.name || `Client ${index + 1}`}</h4>
        <p className={styles.testimonialText}>&ldquo;{item.text}&rdquo;</p>
      </div>
    </div>
  ));
});

export default Marquee;
