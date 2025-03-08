// components/Skills.tsx
import { memo } from 'react';

import SectionTitle from '@/components/SectionTitle';

import Marquee from './Marquee';

interface ReviewProps {
  review: Array<{ text: string; image: string }>;
}

const Review = memo(function Review({ review }: ReviewProps) {
  return (
    <section id='review'>
      <SectionTitle text='Review' num={3} />
      <Marquee review={create3dArray(review, 6)} />
    </section>
  );
});

const create3dArray = (
  array: Array<{ text: string; image: string }>,
  size: number
): Array<Array<{ text: string; image: string }>> =>
  Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
    array.slice(i * size, (i + 1) * size)
  );

export default Review;
