'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, createContext, useContext, useState } from 'react';

import { useLenis } from '@studio-freight/react-lenis';

import { gsap, useGSAP } from '@/utils/gsap';

// Define the TransitionContextProps interface directly in this file
export interface TransitionContextProps {
  isPending: boolean;
  pageEnter: () => Promise<void>;
  pageExit: (href: string) => Promise<void>;
}

const TransitionContext = createContext<TransitionContextProps | null>(null);

export const Transition = ({ children }: { children: ReactNode }) => {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const lenis = useLenis();
  const { contextSafe } = useGSAP();

  const pageEnter = contextSafe(async () => {
    const transitionElement = document.getElementById('overlay_page');
    if (!transitionElement || !isPending) return;

    gsap.timeline().fromTo(
      transitionElement?.querySelectorAll('span'),
      { xPercent: 100 },
      {
        xPercent: 200,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.inOut',
        onComplete: () => {
          setIsPending(false);
          lenis?.start();
        }
      }
    );
  });

  const pageExit = contextSafe(async (href: string) => {
    const transitionElement = document.getElementById('overlay_page');
    if (!transitionElement) return;

    gsap.fromTo(
      transitionElement.querySelectorAll('span'),
      { xPercent: 0 },
      {
        xPercent: 100,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.inOut',
        onStart: () => {
          setIsPending(true);
          lenis?.stop();
        },
        onComplete: () => router.push(href, { scroll: false })
      }
    );
  });

  return (
    <TransitionContext.Provider
      value={{
        isPending,
        pageEnter,
        pageExit
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a Provider');
  }

  return context;
}
