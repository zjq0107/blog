```markdown
# 青玄 | CyanX

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)](https://greensock.com/gsap/)

> 一个基于 React + TypeScript + Vite 构建的暗黑风格个人主页，融合赛博朋克美学与流畅交互体验。

![Dark Theme](https://img.shields.io/badge/Theme-Dark-0a0a0a?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Online-green?style=for-the-badge)

---

## ✨ 特性

- 🌑 **极致暗黑美学** - 精心调校的深色配色方案，红色/青色强调色对比
- ⚡ **闪电般性能** - Vite 驱动，开发构建都快如闪电
- 🎭 **电影级动画** - GSAP + ScrollTrigger 打造的丝滑滚动效果
- 🎮 **赛博朋克元素** - 故障艺术(Glitch)、代码雨(Matrix)、粒子场(Particle)特效
- 📱 **完美响应式** - 从手机到桌面，全设备完美适配
- 🎯 **TypeScript** - 类型安全，开发体验极佳
- 🧩 **模块化架构** - 基于 shadcn/ui 的组件化设计

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看效果

### 构建生产版本

```bash
npm run build
```

构建产物将输出至 `dist/` 目录，可直接部署到任何静态托管服务。

---

## 📁 项目结构

```
.
├── public/                    # 静态资源
├── src/
│   ├── components/
│   │   ├── effects/           # 视觉特效组件
│   │   │   ├── GlitchText.tsx      # 故障文字效果
│   │   │   ├── MatrixRain.tsx      # 矩阵代码雨
│   │   │   ├── ParticleField.tsx   # 粒子场背景
│   │   │   └── TypewriterText.tsx  # 打字机效果
│   │   └── ui/                # shadcn/ui 组件库
│   ├── hooks/                 # 自定义 React Hooks
│   ├── lib/                   # 工具函数
│   ├── sections/              # 页面区块组件
│   │   ├── Navbar.tsx         # 导航栏
│   │   ├── Hero.tsx           # 首屏展示
│   │   ├── About.tsx          # 关于我
│   │   ├── Projects.tsx       # 项目展示
│   │   ├── Blog.tsx           # 博客文章
│   │   ├── Contact.tsx        # 联系方式
│   │   └── Footer.tsx         # 页脚
│   ├── App.tsx                # 主应用组件
│   ├── main.tsx               # 入口文件
│   └── index.css              # 全局样式
├── index.html                 # HTML 模板
├── package.json               # 项目配置
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json              # TypeScript 配置
└── vite.config.ts             # Vite 配置
```

---

## 🎨 自定义配置

### 修改个人信息

编辑 `src/sections/` 下的各组件：

| 文件 | 修改内容 |
|------|----------|
| `Hero.tsx` | 主标题"青玄"、副标题、身份标签 |
| `About.tsx` | 个人简介、技能树、统计数据 |
| `Projects.tsx` | 项目列表（标题、描述、链接、技术栈） |
| `Blog.tsx` | 博客文章列表 |
| `Contact.tsx` | 社交链接、邮箱、捐赠地址 |
| `Footer.tsx` | 页脚导航、版权信息 |

### 主题色彩配置

在 `tailwind.config.js` 中修改：

```javascript
theme: {
  extend: {
    colors: {
      // 主色调 - 可自定义
      primary: {
        DEFAULT: '#ef4444',    // 红色强调
        foreground: '#ffffff',
      },
      // 深色背景
      dark: {
        900: '#0a0a0a',        // 主背景
        800: '#151515',        // 卡片背景
        700: '#1f1f1f',        // 边框/分隔线
      },
      // 强调色
      accent: {
        cyan: '#06b6d4',       // 青色强调
        purple: '#a855f7',     // 紫色强调
        green: '#22c55e',      // 绿色强调
      }
    }
  }
}
```

---

## 🌐 部署指南

### GitHub Pages

```bash
# 安装 gh-pages
npm install -D gh-pages

# 修改 vite.config.ts 添加 base 路径
export default defineConfig({
  base: '/你的仓库名/',
  // ...
})

# 添加部署脚本到 package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# 执行部署
npm run deploy
```

### Vercel（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 一键部署
vercel --prod
```

### Netlify

```bash
# 构建
npm run build

# 部署 dist 目录
```

或连接 Git 仓库自动部署。

### Cloudflare Pages

1. 登录 Cloudflare Dashboard
2. 进入 Pages > 创建项目
3. 连接 GitHub 仓库
4. 构建设置：
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`

---

## 🛠️ 技术栈详解

| 类别 | 技术 | 用途 |
|------|------|------|
| 框架 | React 18 | UI 构建 |
| 语言 | TypeScript | 类型安全 |
| 构建 | Vite 5 | 极速开发与构建 |
| 样式 | Tailwind CSS | 原子化 CSS |
| 动画 | GSAP + ScrollTrigger | 滚动动画与特效 |
| 图标 | Lucide React | 矢量图标 |
| 组件 | shadcn/ui | 基础 UI 组件 |
| 字体 | Inter / 自定义 | 西文与中文显示 |

---

## 📝 可用脚本

```bash
npm run dev      # 启动开发服务器 (localhost:5173)
npm run build    # 构建生产版本 (输出到 dist/)
npm run lint     # 运行 ESLint 检查
npm run preview  # 预览生产构建
```

---

## 🎭 特效组件使用

### GlitchText（故障文字）

```tsx
import GlitchText from './components/effects/GlitchText';

<GlitchText 
  text="青玄" 
  intensity="high"      // low | medium | high
  triggerOnView={true}  // 进入视口时触发
  triggerOnHover={true} // 悬停时触发
/>
```

### MatrixRain（矩阵雨）

```tsx
import MatrixRain from './components/effects/MatrixRain';

<MatrixRain 
  color="#0F0"          // 文字颜色
  fontSize={14}         // 字体大小
  speed={1.5}           // 下落速度
  density={0.8}         // 密度
/>
```

### ParticleField（粒子场）

```tsx
import ParticleField from './components/effects/ParticleField';

<ParticleField 
  particleCount={60}           // 粒子数量
  connectionDistance={120}     // 连线距离
  color="rgba(255, 0, 0, 0.4)" // 粒子颜色
  speed={0.3}                  // 移动速度
/>
```

### TypewriterText（打字机）

```tsx
import TypewriterText from './components/effects/TypewriterText';

<TypewriterText 
  text="欢迎来到数字荒原..." 
  speed={40}            // 打字速度(ms)
  showCursor={true}     // 显示光标
/>
```

---

## 🔧 常见问题

### Q: 构建后字体丢失？
确保 `index.html` 中正确引用了字体 CDN，或将字体文件放入 `public/` 目录。

### Q: GSAP 动画在移动端卡顿？
减少 `ParticleField` 的 `particleCount`，或禁用部分复杂动画。

### Q: 如何修改网站标题和描述？
编辑 `index.html` 中的 `<title>` 和 `<meta name="description">` 标签。

### Q: 如何添加新的页面区块？
1. 在 `src/sections/` 创建新组件
2. 在 `App.tsx` 中引入并放置到合适位置
3. 在 `Navbar.tsx` 添加对应导航链接

---

## 📄 许可证

MIT License © 2026 [青玄 / CyanX](https://github.com/zjq0107)

> 在数字的深渊中，我们既是观察者，也是被观察者。

---

<p align="center">
  <sub>Built with ❤️ and ☕ by CyanX</sub>
</p>
```