import React, { useEffect, useState } from 'react';

/**
 * ScrollProgressBar
 * A thin, elegant animated progress bar fixed at the very top of the screen
 * that fills dynamically as the user scrolls down the landing page.
 */
export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const calculateScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight || document.documentElement.clientHeight;
      const totalHeight = scrollHeight - clientHeight;

      if (totalHeight > 0) {
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(calculateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    calculateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none select-none"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Tiến độ cuộn trang"
    >
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-amber-400 relative transition-[width] duration-150 ease-out shadow-[0_0_10px_rgba(168,85,247,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Subtle luminous spark at the leading edge */}
        {scrollProgress > 0.5 && scrollProgress < 99.5 && (
          <span 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24] -mr-1 pointer-events-none animate-pulse"
          />
        )}
      </div>
    </div>
  );
};
