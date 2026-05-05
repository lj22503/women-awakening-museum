# 女性觉醒博物馆 🦋

> 50+ 位女性榜样 × 16 种 MBTI 人格 × 5 大核心展厅

一个互动式线上博物馆，通过 MBTI 人格类型连接女性榜样的思维方法与认知体系，帮助现代女性找到属于自己的成长路径。

**🌐 在线访问**: [待部署]  
**📱 移动端**: 完全响应式设计

---

## ✨ 核心功能

### 🎯 问题雷达
八大维度问题卡片，直击现代女性的核心困惑：
- 职业发展、亲密关系、自我认知、社会期待...
- 每个问题关联多位女性榜样的解决方案

### 👥 MBTI 人格画廊
16 种人格类型 × 3 位女性榜样：
- **INTJ 建筑师型**: 简·奥斯汀、J.K.罗琳、谷爱凌
- **INTP 逻辑学家型**: 玛丽·居里、汉娜·阿伦特...
- 每个人格都有详细的特质分析和行动建议

### 🏛️ 五大核心展厅
1. **思维方法厅** - 她们如何思考问题
2. **认知体系厅** - 她们的世界观与价值观
3. **行动策略厅** - 她们的具体实践方法
4. **作品展示厅** - 她们的代表作与成就
5. **影响力厅** - 她们对世界的改变

### 📅 今日觉醒卡片
每日一张行动建议卡片：
- 来自女性榜样的原话或方法论
- 可立即执行的小行动
- 累计你的觉醒天数

### 📊 动态数据墙
实时展示博物馆数据：
- 收录女性榜样数量
- 覆盖人格类型
- 用户觉醒天数统计

---

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | React 19 + TypeScript |
| 构建 | Vite |
| 样式 | Tailwind CSS |
| 组件 | shadcn/ui (60+ 组件) |
| 动画 | Framer Motion |
| 字体 | @fontsource (Newsreader, Inter, Bebas Neue) |
| 图标 | Lucide React |

### 核心依赖
```json
{
  "react": "^19.2.0",
  "framer-motion": "^12.34.3",
  "tailwindcss": "^3.4.19",
  "lucide-react": "^0.562.0"
}
```

---

## 🚀 本地运行

### 环境要求
- Node.js 18+ 
- npm 或 pnpm

### 快速开始

```bash
# 1. 进入项目目录
cd projects/female-role-models/app

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev

# 4. 访问 http://localhost:5173
```

### 构建生产版本

```bash
# 构建
npm run build

# 预览构建结果
npm run preview
```

构建产物在 `app/dist/` 目录，可部署到任意静态托管服务。

---

## 📦 部署方案

### 方案 1: Vercel (推荐)
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
cd app
vercel --prod
```

### 方案 2: Netlify
```bash
# 安装 Netlify CLI
npm i -g netlify-cli

# 部署
cd app
netlify deploy --prod --dir=dist
```

### 方案 3: GitHub Pages
1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 `main` 分支的 `/app/dist` 文件夹
3. 访问 `https://lj22503.github.io/one-person-ceo-skills/female-role-models/`

### 方案 4: 任意静态托管
将 `app/dist/` 目录上传到：
- Cloudflare Pages
- Surge.sh
- 自己的服务器 Nginx/Apache

---

## 📁 项目结构

```
female-role-models/
├── app/                    # React 应用源码
│   ├── src/
│   │   ├── components/     # 可复用组件
│   │   ├── sections/       # 页面区块组件
│   │   ├── data/           # 数据结构定义
│   │   ├── hooks/          # 自定义 Hooks
│   │   └── lib/            # 工具函数
│   ├── public/
│   │   └── images/         # 女性榜样图片
│   ├── dist/               # 构建产物
│   └── package.json
├── images/                 # 原始图片资源
├── tech-spec.md            # 技术规格文档
└── README.md               # 本文件
```

---

## 🎨 设计亮点

### 动画系统
- **页面加载序列**: 2200ms 分层动画
- **滚动淡入**: 元素进入视口时触发
- **数字计数**: 弹簧动画效果
- **Stagger 子元素**: 依次出现的卡片动画

### 响应式设计
- 移动端优先
- 断点：sm(640px) / md(768px) / lg(1024px) / xl(1280px)
- 完全适配手机、平板、桌面

### 性能优化
- 图片懒加载
- 代码分割
- GPU 加速动画
- 字体本地加载

---

## 📊 数据规模

| 类型 | 数量 |
|------|------|
| 女性榜样 | 50+ 位 |
| MBTI 人格 | 16 种 |
| 问题维度 | 8 个 |
| 核心展厅 | 5 个 |
| UI 组件 | 60+ 个 |

### 收录的部分女性榜样
- **文学家**: 简·奥斯汀、弗吉尼亚·伍尔夫、玛格丽特·阿特伍德
- **科学家**: 玛丽·居里、康多莉扎·赖斯
- **社会活动家**: 马拉拉、米歇尔·奥巴马、格蕾塔·桑伯格
- **艺术家**: 弗里达·卡罗、可可·香奈儿、奥普拉·温弗瑞
- **中国女性**: 谷爱凌、张桂梅、李雪琴、余秀华...

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📝 更新日志

### 2026-03-17
- ✅ 新增 FloatingActionButton 组件
- ✅ 清理 Windows 系统文件 (554 个)
- ✅ 优化文件权限
- ✅ 更新技术规格文档

### 2026-03-14
- ✅ 完成 50+ 位女性榜样数据录入
- ✅ 实现 16 种 MBTI 人格画廊
- ✅ 五大展厅核心功能开发完成

---

## 📄 许可证

MIT License - 详见 LICENSE 文件

---

## 🔗 相关链接

- [一人 CEO Skills 仓库](https://github.com/lj22503/one-person-ceo-skills)
- [技术规格文档](./tech-spec.md)
- [更新记录](./UPDATE-SUMMARY.md)

---

**🦋 一人 CEO，不是一个人干所有事，是用工具和 AI，放大个人能力。**
