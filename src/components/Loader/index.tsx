'use client';

import { Fragment, memo } from 'react';

import { useLoaderAnime } from './Loader.anime';
import styles from './Loader.module.scss';

const COLORS = ['#ffb46a', '#ce54e1', '#7e57c2', 'white'];

const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

const Loader = memo(function Loader() {
  const { ref, hideLoader } = useLoaderAnime();

  if (hideLoader) return null;

  return (
    <section ref={ref} className={styles.loader}>
      <div>
        {[...Array(7)].map((_, i) => (
          <Fragment key={i}>
            <span style={{ color: getRandomColor() }}>M</span>
            <span style={{ color: getRandomColor() }}>A</span>
            <span style={{ color: getRandomColor() }}>Z</span>
            <span style={{ color: getRandomColor() }}>Z</span>
            <span style={{ color: getRandomColor() }}>E</span>
            <span style={{ color: getRandomColor() }}>R</span>
            <span style={{ color: getRandomColor() }}>X</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
});

export default Loader;
