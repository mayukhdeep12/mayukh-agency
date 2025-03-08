'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { useToastAnimation } from './Toast.anime';
import styles from './Toast.module.scss';

const START_TIMER = 5000;
const HIDE_TIMER = 20000;

const Toast = ({
  text = "Let's Connect",
  websiteUrl = 'https://calendly.com/mayukhdeepm/15-minute-meeting-clone'
}: {
  text?: string;
  websiteUrl?: string;
}) => {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();
  const { ref, showToast, hideToast } = useToastAnimation();

  useEffect(() => {
    return clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    const loader = sessionStorage.getItem('hideLoader');
    let startTimer: NodeJS.Timeout;
    let hideTimer: NodeJS.Timeout;

    if (loader) {
      showToast();
    } else {
      startTimer = setTimeout(showToast, START_TIMER);
    }
    hideTimer = setTimeout(hideToast, HIDE_TIMER);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(startTimer);
    };
  }, []);

  const handleToastClick = useCallback(() => {
    setRedirecting(true);
    window.open(websiteUrl, '_blank');
    timerRef.current = setTimeout(() => setRedirecting(false), 500);
  }, [websiteUrl]);

  return (
    <div className={styles.toast} ref={ref}>
      <p onClick={handleToastClick}>{redirecting ? 'Opening website...' : text}</p>
      <button onClick={hideToast}>×</button>
    </div>
  );
};

export default Toast;
