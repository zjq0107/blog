import { useEffect, useRef, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  triggerOnHover?: boolean;
  triggerOnView?: boolean;
  intensity?: 'low' | 'medium' | 'high';
}

export default function GlitchText({
  text,
  className = '',
  as: Component = 'span',
  triggerOnHover = true,
  triggerOnView = true,
  intensity = 'medium'
}: GlitchTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isGlitching, setIsGlitching] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const originalText = useRef(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  const getIntensityValues = () => {
    switch (intensity) {
      case 'low': return { iterations: 3, duration: 0.3 };
      case 'high': return { iterations: 15, duration: 0.8 };
      default: return { iterations: 8, duration: 0.5 };
    }
  };

  const triggerGlitch = () => {
    if (isGlitching) return;
    setIsGlitching(true);

    const { iterations, duration } = getIntensityValues();
    const chars = originalText.current.split('');
    const stepDuration = duration / iterations;

    let currentIteration = 0;

    const glitchInterval = setInterval(() => {
      if (currentIteration >= iterations) {
        clearInterval(glitchInterval);
        setDisplayText(originalText.current);
        setIsGlitching(false);
        return;
      }

      const glitchedChars = chars.map((char, index) => {
        if (char === ' ') return ' ';
        // More characters get revealed as iterations progress
        const revealThreshold = (currentIteration / iterations) * chars.length;
        if (index < revealThreshold) return char;
        return glitchChars[Math.floor(Math.random() * glitchChars.length)];
      });

      setDisplayText(glitchedChars.join(''));
      currentIteration++;
    }, stepDuration * 1000);
  };

  useEffect(() => {
    if (!triggerOnView || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerGlitch();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    originalText.current = text;
    setDisplayText(text);
  }, [text]);

  return (
    <Component
      ref={containerRef as any}
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerOnHover ? triggerGlitch : undefined}
      data-text={originalText.current}
    >
      <span className="relative z-10">{displayText}</span>
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500 opacity-70"
            style={{ 
              clipPath: 'inset(20% 0 60% 0)',
              transform: 'translateX(-2px)'
            }}
          >
            {displayText}
          </span>
          <span 
            className="absolute top-0 left-0 text-green-500 opacity-70"
            style={{ 
              clipPath: 'inset(60% 0 20% 0)',
              transform: 'translateX(2px)'
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </Component>
  );
}
