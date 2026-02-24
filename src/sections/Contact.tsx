import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, 
  Github, 
  Twitter, 
  Youtube,
  Send,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  Bitcoin
} from 'lucide-react';
import ParticleField from '../components/effects/ParticleField';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: 'GitHub',
    handle: 'zjq0107',
    url: 'https://github.com/zjq0107',
    icon: Github,
    color: 'hover:text-white',
  },
  {
    name: 'X (Twitter)',
    handle: '@zjq0107',
    url: 'https://x.com/zjq0107',
    icon: Twitter,
    color: 'hover:text-blue-400',
  },
  {
    name: '哔哩哔哩',
    handle: 'CyanXLab',
    url: 'https://space.bilibili.com/1934156474',
    icon: Youtube,
    color: 'hover:text-pink-400',
  },
  {
    name: 'Discord',
    handle: 'CyanXLab Server',
    url: 'https://discord.com/channels/1475824784133853336',
    icon: MessageCircle,
    color: 'hover:text-indigo-400',
  },
];

const donationAddresses = [
  { name: 'Bitcoin', address: 'bc1q7mdt3fy9zlyywpzj8rles5mpprzmxjr9lcdeq3', icon: Bitcoin },
  { name: 'Ethereum', address: '0xAec95208588544751782a06D4A92c2E21E6cAe95', icon: ExternalLink },
];

const emails = [
  { address: 'zjq0107qiyun@outlook.com', label: '主要' },
  { address: 'zjq0107@proton.me', label: '备用' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('消息已发送！我会尽快回复。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden min-h-screen"
    >
      {/* Particle background */}
      <div className="absolute inset-0">
        <ParticleField
          particleCount={60}
          connectionDistance={120}
          color="rgba(255, 0, 0, 0.4)"
          speed={0.3}
        />
      </div>

      {/* Large watermark text */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20rem] md:text-[30rem] text-red-500/[0.03] select-none whitespace-nowrap translate-y-1/3">
          青玄
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-xs font-mono text-red-500 mb-4 block">{'// CONTACT'}</span>
          <h2 className="font-display text-6xl md:text-8xl text-white mb-6">
            建立<span className="text-red-500">.</span>连接
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            无论是项目合作、技术交流，还是只是想打个招呼，都欢迎联系我。
          </p>
        </div>

        {/* Content grid */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <div className="space-y-8">
            {/* Social links */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-mono text-gray-400 mb-6 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-red-500" />
                社交平台
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-red-500/50 transition-all duration-300 ${link.color}`}
                  >
                    <div className="flex items-center gap-4">
                      <link.icon className="w-5 h-5 text-gray-500 group-hover:text-current transition-colors" />
                      <div>
                        <div className="text-white group-hover:text-current transition-colors">
                          {link.name}
                        </div>
                        <div className="text-xs text-gray-500 font-mono">
                          {link.handle}
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-current opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Email addresses */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-mono text-gray-400 mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500" />
                电子邮箱
              </h3>
              <div className="space-y-3">
                {emails.map((email) => (
                  <div
                    key={email.address}
                    className="group flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-red-500/50 transition-all duration-300"
                  >
                    <div>
                      <div className="text-white font-mono text-sm">
                        {email.address}
                      </div>
                      <div className="text-xs text-gray-500">
                        {email.label}邮箱
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyEmail(email.address)}
                      className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                      title="复制邮箱地址"
                    >
                      {copiedEmail === email.address ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Donation addresses */}
            <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-mono text-gray-400 mb-6 flex items-center gap-2">
                <Bitcoin className="w-4 h-4 text-orange-500" />
                捐赠支持
              </h3>
              <div className="space-y-3">
                {donationAddresses.map((crypto) => (
                  <div
                    key={crypto.name}
                    className="group flex items-center justify-between p-4 bg-gray-900/30 border border-gray-800 rounded hover:border-orange-500/50 transition-all duration-300"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-orange-500 font-mono text-xs mb-1">
                        {crypto.name}
                      </div>
                      <div className="text-white font-mono text-xs truncate">
                        {crypto.address}
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopyAddress(crypto.address)}
                      className="p-2 text-gray-500 hover:text-orange-500 transition-colors flex-shrink-0"
                      title={`复制${crypto.name}地址`}
                    >
                      {copiedAddress === crypto.address ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right column - Contact form */}
          <div className="bg-black/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-mono text-gray-400 mb-6 flex items-center gap-2">
              <Send className="w-4 h-4 text-red-500" />
              发送消息
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2">
                  称呼
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded text-white placeholder-gray-600 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="你的名字"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2">
                  邮箱
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded text-white placeholder-gray-600 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-500 mb-2">
                  消息
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded text-white placeholder-gray-600 focus:border-red-500/50 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                  placeholder="想说什么..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full group relative px-8 py-4 bg-red-600 text-white font-mono overflow-hidden transition-all duration-300 hover:bg-red-700"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  发送消息
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
