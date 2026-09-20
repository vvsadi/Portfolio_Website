import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal(containerRef) {
  const location = useLocation();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

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

    function revealElement(el) {
      if (mq.matches) {
        el.classList.add('shown');
        return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('shown');
      } else {
        observer.observe(el);
      }
    }

    function scanElements() {
      const root = containerRef?.current || document;
      root.querySelectorAll('[data-reveal]:not(.shown)').forEach(revealElement);
    }

    const timer = setTimeout(scanElements, 50);

    const mutObs = new MutationObserver(() => {
      scanElements();
    });

    const root = containerRef?.current || document.body;
    mutObs.observe(root, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutObs.disconnect();
    };
  }, [containerRef, location.pathname]);
}
