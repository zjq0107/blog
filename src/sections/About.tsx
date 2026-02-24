import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Coffee, BookOpen, Lightbulb, Terminal, Cpu, Globe, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: '代码', icon: Code, level: 90 },
  { name: '设计', icon: Lightbulb, level: 75 },
  { name: '哲学', icon: BookOpen, level: 60 },
  { name: '咖啡', icon: Coffee, level: 100 },
];

const stats = [
  { label: '代码行数', value: '100K+', icon: Terminal },
  { label: '项目数', value: '50+', icon: Cpu },
  { label: '访问者', value: '10K+', icon: Globe },
  { label: '咖啡因摄入量', value: '∞', icon: Zap },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skills animation
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { x: 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[30rem] text-red-500/[0.02] select-none whitespace-nowrap">
          青玄
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-mono text-red-500 mb-4 block">{'// ABOUT_ME'}</span>
          <h2
            ref={titleRef}
            className="font-display text-6xl md:text-8xl text-white"
          >
            关于<span className="text-red-500">.</span>我
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Terminal style content */}
          <div ref={contentRef} className="space-y-8">
            {/* Terminal window */}
            <div className="bg-black/50 border border-gray-800 rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-xs font-mono text-gray-500">cyanx@darknet:~</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-sm space-y-4">
                <div className="text-gray-500">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-500"> ~</span>
                  <span className="text-white"> cat about.txt</span>
                </div>

                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    <span className="text-red-500">$</span> 我是青玄，一名在数字荒原中游荡的开发者。
                  </p>
                  <p>
                    我的代码在<span className="text-cyan-400">霓虹灯</span>与<span className="text-red-500">阴影</span>之间穿梭，
                    探索技术与人性的边界。
                  </p>
                  <p>
                    在这里，我记录我的思考、我的项目，以及我对这个数字世界的观察。
                  </p>
                  <p className="text-gray-500">
                    {'// '}相信代码可以改变世界，哪怕只是一点点。
                  </p>
                </div>

                <div className="text-gray-500">
                  <span className="text-green-500">➜</span>
                  <span className="text-blue-500"> ~</span>
                  <span className="text-white"> _</span>
                  <span className="inline-block w-2 h-4 bg-red-500 ml-1 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-mono text-gray-400 mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-red-500" />
                技能树
              </h3>
              <div ref={skillsRef} className="space-y-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-red-500/50 transition-all duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-red-500" />
                    <span className="text-gray-300 font-mono w-20">{skill.name}</span>
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Stats & Info */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-gray-900/30 border border-gray-800 rounded hover:border-red-500/30 transition-all duration-300 group"
                >
                  <stat.icon className="w-6 h-6 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-4xl text-white mb-2">{stat.value}</div>
                  <div className="text-xs font-mono text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Identity card */}
            <div className="p-6 bg-gradient-to-br from-cyan-950/20 to-black border border-cyan-500/20 rounded">
              <h3 className="text-lg font-mono text-gray-400 mb-4">数字身份</h3>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">用户名:</span>
                  <span className="text-white">zjq0107</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">昵称:</span>
                  <span className="text-white">青玄</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">英文名:</span>
                  <span className="text-cyan-400">CyanX</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">状态:</span>
                  <span className="text-green-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    ONLINE
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 border-l-2 border-red-500 bg-red-500/5">
              <p className="text-gray-400 italic mb-4">
                "在数字的深渊中，我们既是观察者，也是被观察者。"
              </p>
              <span className="text-xs font-mono text-red-500">— 青玄</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
