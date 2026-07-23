import { useState, useEffect } from 'react';

export default function RotatingHeroText() {
  const texts = [
    "Building scalable web experiences",
    "Crafting elegant code solutions",
    "Transforming ideas into reality",
    "Creating premium user interfaces",
    "Exploring the future of AI"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    // Pause animation on tab visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Animation pauses naturally via CSS
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return (
    <div className="h-8 md:h-10 flex items-center justify-center md:justify-start overflow-hidden">
      <div
        key={currentIndex}
        className={`rotating-text text-lg md:text-xl text-blue-400 font-semibold tracking-wide ${
          isTransitioning ? '' : 'slide'
        }`}
      >
        {texts[currentIndex]}
      </div>
    </div>
  );
}
