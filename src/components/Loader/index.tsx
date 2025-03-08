'use client';

import { Fragment, memo } from 'react';

import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  if (hideLoader) return;

  return (
    <section ref={ref} className={styles.loader}>
      <div>
        {[...Array(7)].map((_, i) => (
          <Fragment key={i}>
            <span>M</span>
            <span>A</span>
            <span>Z</span>
            <span>Z</span>
            <span>E</span>
            <span>R</span>
            <span>X</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
});

export default Loader;
