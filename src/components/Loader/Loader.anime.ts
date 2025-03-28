import { useRef, useState } from 'react';

import { gsap, useGSAP } from '@/utils/gsap';

export const useLoaderAnime = () => {
  const loaderRef = useRef<HTMLElement>(null);
  const [hideLoader, setHideLoader] = useState<boolean>(false);

  useGSAP(
    () => {
      const loader = sessionStorage.getItem('hideLoader');
      if (loader) {
        setHideLoader(true);
        return;
      }

      gsap
        .timeline()
        .to('div', {
          autoAlpha: 1
        })
        .from('span', {
          opacity: 1,
          duration: 0.75,
          scale: 0.001,
          rotate: 10,
          yPercent: 0, // Changed from responsive value to 0
          xPercent: 0, // Added xPercent to ensure centered origin
          ease: 'power1.inOut',
          stagger: {
            amount: 2,
            from: 'center', // Changed from 'end' to 'center'
            grid: [7, 7],
            yoyo: true,
            repeat: 3
          }
        })
        // Loader FadeOut Animation
        .to(
          loaderRef.current,
          {
            autoAlpha: 0,
            ease: 'none',
            duration: 0.5,
            onComplete: () => {
              sessionStorage.setItem('hideLoader', 'true');
              setHideLoader(true);
            }
          },
          '-=1'
        );
    },
    { scope: loaderRef, dependencies: [] }
  );

  return { ref: loaderRef, hideLoader };
};
