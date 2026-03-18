# 女性觉醒线上博物馆 - 技术规划文档

---

## 1. 组件清单

### shadcn/ui 组件

| 组件 | 用途 | 自定义需求 |
|------|------|------------|
| Button | CTA按钮、导航按钮 | 药丸形状，悬停动画 |
| Card | 人格卡片、展厅卡片 | 自定义悬停效果 |
| Dialog | 人格详情弹窗 | 全屏或大幅面 |
| Tabs | 人格类型切换 | 自定义样式 |
| ScrollArea | 内容滚动区域 | 自定义滚动条 |
| Separator | 分隔线 | 颜色自定义 |

### 自定义组件

| 组件 | 用途 | 复杂度 |
|------|------|--------|
| HeroSection | 首页Hero区域 | 高 |
| ProblemRadar | 八大维度问题卡片网格 | 中 |
| MBTIGrid | 16种人格画廊 | 中 |
| ExhibitionHall | 五大展厅展示 | 高 |
| DailyCard | 今日觉醒卡片 | 低 |
| DataWall | 动态数据展示 | 中 |
| PersonalityDetail | 人格详情页 | 高 |
| AnimatedCounter | 数字计数动画 | 中 |
| FadeInSection | 滚动淡入容器 | 中 |
| StaggerChildren | 子元素依次动画 | 中 |

---

## 2. 动画实现规划

| 动画 | 库 | 实现方式 | 复杂度 |
|------|------|----------|--------|
| 页面加载序列 | Framer Motion | AnimatePresence + stagger | 高 |
| 滚动淡入 | Framer Motion | useInView + motion.div | 中 |
| 数字计数 | Framer Motion | useSpring + useMotionValue | 中 |
| 卡片悬停 | CSS + Framer Motion | whileHover | 低 |
| 导航下划线 | CSS | transform scaleX | 低 |
| 图片缩放 | CSS | transform scale | 低 |
| 粒子背景 | Canvas/CSS | 自定义或轻量库 | 高 |
| 滚动指示器 | CSS | animation bounce | 低 |
| 菜单滑入 | Framer Motion | AnimatePresence | 中 |

### 动画详细规范

**1. 页面加载动画 (2200ms)**
```typescript
// 使用 Framer Motion
const loadAnimation = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const heroTextAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.7, 
      delay: 0.3,
      ease: [0.165, 0.84, 0.44, 1] // outQuart
    }
  }
}
```

**2. 滚动淡入动画 (1000ms)**
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1,
      ease: [0.165, 0.84, 0.44, 1]
    }
  },
  viewport: { once: true, margin: "-100px" }
}
```

**3. Stagger 子元素动画**
```typescript
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}
```

**4. 数字计数动画**
```typescript
const AnimatedCounter = ({ value }: { value: number }) => {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 2000 })
  
  useEffect(() => {
    motionValue.set(value)
  }, [value, motionValue])
  
  return <motion.span>{springValue}</motion.span>
}
```

**5. 卡片悬停效果**
```typescript
const cardHover = {
  whileHover: { 
    y: -4,
    transition: { duration: 0.3 }
  }
}
```

---

## 3. 项目文件结构

```
app/
├── app/
│   ├── sections/
│   │   ├── Hero.tsx              # 首页Hero区域
│   │   ├── ProblemRadar.tsx      # 八大维度问题雷达
│   │   ├── MBTIGallery.tsx       # MBTI人格画廊
│   │   ├── ExhibitionHalls.tsx   # 五大核心展厅
│   │   ├── DailyCard.tsx         # 今日觉醒卡片
│   │   ├── DataWall.tsx          # 动态数据墙
│   │   └── Footer.tsx            # 页脚
│   ├── components/
│   │   ├── FadeInSection.tsx     # 滚动淡入容器
│   │   ├── StaggerContainer.tsx  # 子元素依次动画
│   │   ├── AnimatedCounter.tsx   # 数字计数动画
│   │   ├── PersonalityCard.tsx   # 人格卡片
│   │   ├── ProblemCard.tsx       # 问题卡片
│   │   ├── HallCard.tsx          # 展厅卡片
│   │   ├── Navigation.tsx        # 导航栏
│   │   └── MobileMenu.tsx        # 移动端菜单
│   ├── hooks/
│   │   └── useScrollAnimation.ts # 滚动动画hook
│   ├── lib/
│   │   ├── utils.ts              # 工具函数
│   │   ├── personalities.ts      # MBTI人格数据
│   │   └── problems.ts           # 问题数据
│   ├── types/
│   │   └── index.ts              # TypeScript类型
│   ├── page.tsx                  # 主页面
│   ├── layout.tsx                # 根布局
│   └── globals.css               # 全局样式
├── components/ui/                 # shadcn/ui组件
├── public/
│   └── images/                   # 图片资源
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 4. 依赖清单

### 核心依赖
```bash
# 动画库
npm install framer-motion

# 图标库
npm install lucide-react

# 字体
npm install @fontsource/newsreader @fontsource/inter @fontsource/bebas-neue
```

### shadcn/ui 组件
```bash
npx shadcn add button
npx shadcn add card
npx shadcn add dialog
npx shadcn add tabs
npx shadcn add scroll-area
npx shadcn add separator
```

---

## 5. 关键技术决策

### 动画库选择：Framer Motion

**原因：**
- React原生支持，声明式API
- 强大的滚动触发动画（useInView）
- 优秀的stagger支持
- AnimatePresence处理进入/退出动画
- 性能优化良好

### 字体加载策略

使用 @fontsource 包本地加载字体：
- 避免Google Fonts的外部依赖
- 更好的加载控制
- 支持font-display: swap

### 图片优化

使用 Next.js Image 组件：
- 自动优化和压缩
- 懒加载支持
- 响应式图片
- 占位符效果

### 响应式设计

使用 Tailwind CSS 断点：
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

### 性能优化

1. **动画性能**
   - 仅使用 transform 和 opacity
   - 对动画元素应用 will-change
   - 使用 GPU 加速

2. **图片优化**
   - 使用 WebP 格式
   - 适当的图片尺寸
   - 懒加载非首屏图片

3. **代码分割**
   - 按需加载组件
   - 动态导入大型库

---

## 6. 数据结构

### MBTI人格数据

```typescript
interface Personality {
  type: string;           // "INTJ"
  name: string;           // "建筑师型"
  description: string;    // 人格描述
  traits: {
    strengths: string[];
    challenges: string[];
  };
  women: Woman[];
  actionCards: ActionCard[];
}

interface Woman {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  image: string;
  introduction: string;
  methodology: string;
  cognition: string;
  works: string[];
}

interface ActionCard {
  title: string;
  description: string;
  source: string;
}
```

### 问题数据

```typescript
interface Problem {
  id: string;
  question: string;
  category: string;
  relatedWomen: string[];
}
```

---

## 7. 实现优先级

### Phase 1: 基础架构
1. 项目初始化
2. 字体和全局样式设置
3. 导航组件
4. 布局组件

### Phase 2: 首页区块
1. Hero区域
2. 问题雷达
3. MBTI人格画廊
4. 五大展厅
5. 今日觉醒卡片
6. 动态数据墙
7. Footer

### Phase 3: 人格详情
1. 人格详情页布局
2. 人格特质解析
3. 榜样人物卡片
4. 行动建议

### Phase 4: 优化和部署
1. 动画调优
2. 响应式适配
3. 性能优化
4. 构建部署

---

## 8. 注意事项

1. **动画性能**：确保所有动画使用 transform 和 opacity
2. **可访问性**：提供 reduced-motion 媒体查询支持
3. **SEO优化**：使用语义化HTML，添加适当的meta标签
4. **加载体验**：添加加载状态，优化首屏加载
5. **浏览器兼容**：测试主流浏览器，提供降级方案
