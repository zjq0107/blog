import { Github, Twitter, Youtube, MessageCircle, Heart, ArrowUp } from 'lucide-react';

const footerLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '博客', href: '#blog' },
  { name: '联系', href: '#contact' },
  { name: '隐私', href: '#' },
];

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/zjq0107' },
  { name: 'X', icon: Twitter, url: 'https://x.com/zjq0107' },
  { name: '哔哩哔哩', icon: Youtube, url: 'https://space.bilibili.com/1934156474' },
  { name: 'Discord', icon: MessageCircle, url: 'https://discord.com/channels/1475824784133853336' },
];

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="font-display text-4xl text-white hover:text-red-500 transition-colors"
          >
            <span className="text-red-500">[</span>
            青玄
            <span className="text-red-500">]</span>
          </a>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-gray-500 hover:text-red-500 transition-colors link-underline"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                title={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-gray-600 font-mono">
            <span>© 2026 </span>
            <span className="text-cyan-500">CyanX / 青玄</span>
            <span>. 保留所有权利。</span>
          </div>

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>用</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>和</span>
            <span className="text-red-500">代码</span>
            <span>构建</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition-colors"
          >
            <span>返回顶部</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Terminal-style info */}
        <div className="mt-12 p-4 bg-black/50 border border-gray-800 rounded font-mono text-xs text-gray-600">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-green-500">➜</span>
            <span className="text-blue-500">~</span>
            <span className="text-white">system.info</span>
          </div>
          <div className="space-y-1 pl-4">
            <div>user: zjq0107</div>
            <div>alias: CyanX / 青玄</div>
            <div>status: online</div>
            <div>location: digital_wilderness</div>
            <div className="text-cyan-500/50">connection.encrypted: true</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
