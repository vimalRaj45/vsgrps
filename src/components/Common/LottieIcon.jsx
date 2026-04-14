import React, { useEffect, useRef, useState } from 'react';

/**
 * Reusable LottieIcon component with improved React compatibility and loading states.
 */
const LottieIcon = ({ 
  src, 
  size = '60px', 
  className = '', 
  loop = true, 
  autoplay = true,
  background = 'transparent',
  speed = 1,
  darker = false
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the script is already loaded
    if (!window.customElements.get('lottie-player')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Lazy load observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' } // Load a bit early
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`lottie-icon-container ${className}`} 
      style={{ 
        width: size, 
        height: size, 
        display: 'inline-flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        transition: 'all 0.2s ease',
        opacity: isLoaded ? 1 : 0.9,
        filter: darker ? 'brightness(0.7) contrast(1.2)' : 'none'
      }}
    >
      {isInView && (
        <lottie-player
          ref={playerRef}
          src={src}
          background={background}
          speed={speed}
          style={{ width: '100%', height: '100%' }}
          loop={loop ? true : undefined}
          autoplay={autoplay ? true : undefined}
          onEvent={(e) => {
            if (e.type === 'load') setIsLoaded(true);
          }}
          key={src}
        />
      )}
    </div>
  );
};

export default LottieIcon;
