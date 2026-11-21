import React, { useEffect } from 'react';

// Calls AOS.init() once window.AOS is available (aos.js loads async globally).
export default function AosInit() {
  useEffect(() => {
    let tries = 0;
    const timer = setInterval(() => {
      tries += 1;
      if (window.AOS) {
        clearInterval(timer);
        try {
          window.AOS.init();
        } catch (e) {
          console.warn('AOS init:', e);
        }
      } else if (tries > 50) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return null;
}
