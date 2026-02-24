import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import GlitchText from '../components/effects/GlitchText';
import TypewriterText from '../components/effects/TypewriterText';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { rotateX: 90, opacity: 0, transformOrigin: 'center bottom' },
        { rotateX: 0, opacity: 1, duration: 1.2, ease: 'expo.out', delay: 0.3 }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.8 }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          delay: 1,
          onComplete: () => setShowTypewriter(true),
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 1.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleExploreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-red-950/20" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-transparent via-red-500/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Pre-title */}
        <div className="mb-6">
          <span className="inline-block px-4 py-2 text-xs font-mono text-green-500 border border-green-500/30 rounded-full bg-green-500/5">
            <span className="animate-pulse text-green-500">●</span> SYSTEM.ONLINE
          </span>
        </div>

        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display text-7xl md:text-9xl lg:text-[12rem] text-white mb-4 tracking-wider"
          style={{ perspective: '1000px' }}
        >
          <GlitchText
            text="青玄"
            intensity="high"
            triggerOnView={true}
            triggerOnHover={true}
          />
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-400 font-mono mb-4"
        >
          <span className="text-cyan-500">{'<'}</span>
          CyanX: Reshape the Unknown
          <span className="text-cyan-500">{'/>'}</span>
        </p>
        
        {/* Chinese subtitle */}
        <p className="text-lg text-gray-500 font-light mb-8 tracking-widest">
          青玄 · 重塑未知
        </p>

        {/* Description */}
        <p
          ref={descRef}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {showTypewriter && (
            <TypewriterText
              text="欢迎来到数字荒原的边缘。我在这里剖析代码、文化和混乱的交叉点。"
              speed={40}
              showCursor={true}
            />
          )}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleExploreClick}
            className="group relative px-8 py-4 bg-red-600 text-white font-mono text-sm overflow-hidden transition-all duration-300 hover:bg-red-700"
          >
            <span className="relative z-10 flex items-center gap-2">
              探索档案
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>

          <a
            href="#contact"
            className="px-8 py-4 border border-gray-700 text-gray-400 font-mono text-sm hover:border-red-500 hover:text-red-500 transition-all duration-300"
          >
            建立连接
          </a>
        </div>

        {/* Identity tags */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {['zjq0107', 'CyanX', 'CyanXLab'].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 text-xs font-mono text-gray-600 border border-gray-800 rounded hover:border-cyan-500/50 hover:text-cyan-500/70 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Corner decorations */}
      <div className="absolute top-32 left-8 w-16 h-16 border-l border-t border-red-500/20" />
      <div className="absolute top-32 right-8 w-16 h-16 border-r border-t border-red-500/20" />
      <div className="absolute bottom-32 left-8 w-16 h-16 border-l border-b border-red-500/20" />
      <div className="absolute bottom-32 right-8 w-16 h-16 border-r border-b border-red-500/20" />
    </section>
  );
}
