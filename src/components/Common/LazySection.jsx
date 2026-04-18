import React from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * LazySection wrapper to defer rendering of heavy components until they are near the viewport.
 * This significantly reduces initial JS execution (TBT) and unused JS scores.
 */
const LazySection = ({ children, height = '400px', offset = 200 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: `${offset}px 0px`,
  });

  return (
    <div ref={ref} style={{ minHeight: inView ? 'auto' : height }}>
      {inView ? children : null}
    </div>
  );
};

export default LazySection;
