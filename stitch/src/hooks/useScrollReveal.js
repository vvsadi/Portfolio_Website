import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal(containerRef) {
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const setup = () => {
      const root = containerRef?.current || document;
      const elements = root.querySelectorAll('[data-reveal]:not(.shown)');

      if (mq.matches) {
        elements.forEach((el) => el.classList.add('shown'));
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const parent = el.parentElement;
              const siblings = parent ? [...parent.querySelectorAll(':scope > [data-reveal]')] : [el];
              const idx = siblings.indexOf(el);
              const delay = Math.min(idx * 70, 420);
              el.style.transitionDelay = `${delay}ms`;
              el.classList.add('shown');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('shown');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    const timer = setTimeout(() => {
      const obs = setup();
      return () => obs?.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [containerRef, location.pathname]);
}
