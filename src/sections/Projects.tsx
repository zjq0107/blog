import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Folder, Star, GitFork } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'DarkNet Blog',
    description: '暗网风格的个人博客系统，使用 React + TypeScript + Tailwind CSS 构建，具有矩阵代码雨、故障艺术等视觉效果。',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    github: 'https://github.com/zjq0107',
    demo: '#',
    stars: 42,
    forks: 12,
    color: 'red',
  },
  {
    id: 2,
    name: 'CyanX Toolkit',
    description: '开发者工具集，包含各种实用的代码生成器、格式化工具和效率插件。',
    tags: ['Vue', 'Node.js', 'Electron'],
    github: 'https://github.com/zjq0107',
    demo: '#',
    stars: 128,
    forks: 35,
    color: 'cyan',
  },
  {
    id: 3,
    name: 'Neural Vision',
    description: '基于深度学习的图像识别系统，支持实时物体检测和场景分析。',
    tags: ['Python', 'PyTorch', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/zjq0107',
    demo: '#',
    stars: 256,
    forks: 68,
    color: 'purple',
  },
  {
    id: 4,
    name: 'Crypto Tracker',
    description: '加密货币价格追踪器，实时显示市场数据，支持多交易所API。',
    tags: ['React', 'WebSocket', 'Chart.js'],
    github: 'https://github.com/zjq0107',
    demo: '#',
    stars: 89,
    forks: 23,
    color: 'green',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
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

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; glow: string; text: string; bg: string }> = {
      red: {
        border: 'hover:border-red-500/50',
        glow: 'hover:shadow-[0_0_30px_rgba(255,0,0,0.15)]',
        text: 'text-red-500',
        bg: 'bg-red-500/10',
      },
      cyan: {
        border: 'hover:border-cyan-500/50',
        glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]',
        text: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
      },
      purple: {
        border: 'hover:border-purple-500/50',
        glow: 'hover:shadow-[0_0_30px_rgba(147,51,234,0.15)]',
        text: 'text-purple-500',
        bg: 'bg-purple-500/10',
      },
      green: {
        border: 'hover:border-green-500/50',
        glow: 'hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]',
        text: 'text-green-500',
        bg: 'bg-green-500/10',
      },
    };
    return colors[color] || colors.red;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="mb-16">
          <span className="text-xs font-mono text-cyan-500 mb-4 block">{'// PROJECTS'}</span>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6">
            项目<span className="text-cyan-500">.</span>作品
          </h2>
          <p className="text-gray-500 max-w-xl">
            探索我的数字实验场。每个项目都是对未知的重塑。
          </p>
        </div>

        {/* Projects grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project) => {
            const colors = getColorClasses(project.color);
            return (
              <article
                key={project.id}
                className={`group relative bg-black/50 border border-gray-800 rounded-lg overflow-hidden transition-all duration-500 ${colors.border} ${colors.glow}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  transform: hoveredProject === project.id ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                {/* Card header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colors.bg}`}>
                      <Folder className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-display text-white mb-3 group-hover:${colors.text} transition-colors`}>
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-mono border rounded ${colors.text} ${colors.bg} border-${project.color}-500/30`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono">源码</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-sm text-gray-400 ${colors.text} transition-colors`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-mono">演示</span>
                    </a>
                  </div>
                </div>

                {/* Glitch effect on hover */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-${project.color}-500/10 to-transparent`}
                      style={{
                        animation: 'glitch 0.3s ease-out',
                      }}
                    />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* View more CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/zjq0107"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-cyan-500/50 text-cyan-500 font-mono hover:bg-cyan-500 hover:text-black transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            在 GitHub 查看更多
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
