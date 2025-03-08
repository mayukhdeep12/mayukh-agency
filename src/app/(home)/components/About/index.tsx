'use client';

import { memo } from 'react';

import SectionTitle from '@/components/SectionTitle';

import { useAboutAnimation } from './About.anime';
import styles from './About.module.scss';

const About = memo(function About({ about, spotify }: { about: string[]; spotify: string }) {
  const aboutRef = useAboutAnimation();

  return (
    <section id='about'>
      <SectionTitle text='Know Us' num={4} />
      <div ref={aboutRef} className={styles.about}>
        <h3>
          At our core, we are engineers of tomorrow&rsquo;s digital globe. We blend cutting-edge AI
          technologies, immersive extended reality (XR) experiences, and dynamic web solutions to
          push the boundaries of what&rsquo;s possible. Our agency doesn&rsquo;t just develop
          technology&mdash;we craft digital ecosystems that redefine how businesses and users
          interact with the digital world.
        </h3>
        <br />
        <p>Partner with us, and turn your boldest technological dreams into reality.</p>
      </div>
    </section>
  );
});

export default About;
