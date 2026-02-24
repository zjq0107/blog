import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: '数字荒野求生指南',
    excerpt: '在信息爆炸的时代，如何保持清醒的头脑，在数字荒野中找到自己的生存之道。',
    date: '2024-12-15',
    readTime: '8 min',
    tags: ['思考', '数字生活'],
    color: 'red',
  },
  {
    id: 2,
    title: '代码的诗意',
    excerpt: '当逻辑遇见美学，代码也可以是一种艺术形式。探索编程语言中的诗意表达。',
    date: '2024-11-28',
    readTime: '12 min',
    tags: ['编程', '美学'],
    color: 'cyan',
  },
  {
    id: 3,
    title: '赛博朋克美学解析',
    excerpt: '从高对比度的视觉风格到反乌托邦的叙事，深入解析赛博朋克文化的核心元素。',
    date: '2024-10-20',
    readTime: '15 min',
    tags: ['文化', '设计'],
    color: 'purple',
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 100, opacity: 0, rotateY: -15 },
          {
            y: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'group-hover:border-red-500/50 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.2)]';
      case 'cyan':
        return 'group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]';
      case 'purple':
        return 'group-hover:border-purple-500/50 group-hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]';
      default:
        return 'group-hover:border-red-500/50';
    }
  };

  const getTagColorClass = (color: string) => {
    switch (color) {
      case 'red':
        return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'cyan':
        return 'text-cyan-500 bg-cyan-500/10 border-cyan-500/30';
      case 'purple':
        return 'text-purple-500 bg-purple-500/10 border-purple-500/30';
      default:
        return 'text-red-500 bg-red-500/10 border-red-500/30';
    }
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hex-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-xs font-mono text-red-500 mb-4 block">{'// LATEST_POSTS'}</span>
            <h2 className="font-display text-6xl md:text-8xl text-white">
              最新<span className="text-red-500">.</span>发布
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <span className="font-mono text-sm">查看全部</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Blog cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: '1000px' }}
        >
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative bg-black/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-500 ${getColorClass(post.color)}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === post.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Card number */}
              <div className="absolute top-4 right-4 font-display text-6xl text-gray-800/50 select-none">
                0{index + 1}
              </div>

              {/* Card content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 text-xs font-mono border rounded ${getTagColorClass(post.color)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-red-500 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs font-mono text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Read more link */}
                <div className="mt-6 pt-6 border-t border-gray-800">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-mono text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Glitch overlay on hover */}
              {hoveredCard === post.id && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent"
                    style={{
                      animation: 'glitch 0.3s ease-out',
                    }}
                  />
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6">
            想要阅读更多内容？
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 border border-red-500/50 text-red-500 font-mono hover:bg-red-500 hover:text-black transition-all duration-300"
          >
            <Tag className="w-4 h-4" />
            浏览所有文章
          </a>
        </div>
      </div>
    </section>
  );
}
