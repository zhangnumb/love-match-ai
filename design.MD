# Love Match AI 项目设计文档

## 项目结构

```
love-match-ai/
├── .cursor/                # Cursor IDE 配置文件
├── node_modules/          # 项目依赖
├── public/               # 静态资源文件
├── src/                 # 源代码目录
│   └── app/            # Next.js App Router 目录
│       ├── page.tsx    # 主页面组件
│       ├── layout.tsx  # 全局布局组件
│       ├── favicon.ico # 网站图标
│       └── globals.css # 全局样式
├── package.json        # 项目配置和依赖管理
├── package-lock.json   # 依赖版本锁定文件
├── tsconfig.json      # TypeScript 配置
├── next.config.ts     # Next.js 配置
├── postcss.config.mjs # PostCSS 配置
├── eslint.config.mjs  # ESLint 配置
└── README.md         # 项目说明文档

## 技术栈

### 核心框架和库
- Next.js 15.2.0 - React 框架，用于构建服务端渲染和静态网站
- React 19.0.0 - 用户界面库
- TypeScript - 类型安全的 JavaScript 超集

### 样式解决方案
- TailwindCSS 4.x - 原子化 CSS 框架
- PostCSS - CSS 处理器

### 开发工具
- ESLint - 代码质量检查
- TypeScript - 静态类型检查
- Turbopack - 快速的开发构建工具

## 项目特点

1. **现代化技术栈**
   - 使用最新版本的 Next.js 15.2.0
   - 采用 React 19.0.0
   - 完全支持 TypeScript

2. **App Router 架构**
   - 采用 Next.js 的 App Router 架构
   - 基于文件系统的路由
   - 支持布局嵌套

3. **开发体验**
   - 使用 Turbopack 进行快速开发构建
   - ESLint 保证代码质量
   - 完整的 TypeScript 支持

4. **样式方案**
   - 使用 TailwindCSS 实现原子化 CSS
   - 全局样式通过 globals.css 管理

## 后续开发建议

1. 考虑添加以下目录：
   - `src/components/` - 存放可复用组件
   - `src/lib/` - 存放工具函数和业务逻辑
   - `src/types/` - 存放 TypeScript 类型定义
   - `src/styles/` - 存放组件样式
   - `src/api/` - 存放 API 路由处理函数

2. 建议引入的工具：
   - 状态管理工具（如 Zustand 或 Redux）
   - 表单处理库（如 React Hook Form）
   - API 请求库（如 Axios 或 TanStack Query）
   - 单元测试框架（如 Jest 和 React Testing Library） 