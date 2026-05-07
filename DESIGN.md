# Mangofolio Design System

## 1. Visual Theme & Atmosphere

**觉醒博物馆**是一个沉浸式深色体验空间，用金色作为觉醒与力量的象征。整体调性：沉稳、优雅、有温度——不是冷冰冰的深色工具，而是一个让人愿意停留的女性成长空间。

核心印象：**深夜里的香槟金**——极深背景之上，文字洁白，焦点用香槟金/琥珀色点缀，如同黑暗中点燃的光。

### Key Characteristics
- **极深背景**（#0a0a0a）+ **金色点缀** — 黑暗中的觉醒感，与"觉醒"主题强关联
- **衬线标题**（Newsreader）— 优雅、有文化感，与女性成长/文化叙事匹配
- **无彩色为主** — 黑/白/灰系统，金色只出现在关键交互点，不滥用
- **Framer Motion 动画** — 滚动淡入、stagger 进场，卡片悬停微抬，有呼吸感
- **Radial spotlight 效果** — Hero 区域用 radial-gradient 打出中心聚光，暗角戏剧感

---

## 2. Color Palette & Roles

### Primary Palette

| Token | Hex | HSL | Role |
|-------|-----|-----|------|
| `--background` | `#0a0a0a` | 0 0% 4% | 全局背景，最深的黑 |
| `--foreground` | `#ffffff` | 0 0% 100% | 主文字色 |
| `--primary` | `#0a0a0a` | 0 0% 4% | 主按钮背景（等于背景，形成"透明"感）|
| `--primary-foreground` | `#ffffff` | 0 0% 100% | 主按钮文字 |

### Accent / Gold System（觉醒金）

| Token | Hex | HSL | Role |
|-------|-----|-----|------|
| `--secondary` | `#c8b850` | 49 56% 50% | **主强调色** — 导航下划线、按钮、焦点环、滚动条 |
| `--secondary-foreground` | `#0a0a0a` | 0 0% 4% | 次按钮上的文字（衬底在金色上时）|
| `--accent` | `#c8b850` | 49 56% 50% | 与 secondary 相同，保证一致性 |
| `--accent-foreground` | `#0a0a0a` | 0 0% 4% | 同上 |
| `--ring` | `49 56% 50%` | — | Focus ring 颜色（浏览器焦点环）|

### Surface & Neutral Scale

| Token | Hex | HSL | Role |
|-------|-----|-----|------|
| `--card` | `#2a2a2a` | 0 0% 16.5% | 卡片背景 |
| `--card-foreground` | `#ffffff` | 0 0% 100% | 卡片文字 |
| `--muted` | `#2a2a2a` | 0 0% 16.5% | 弱化背景（等于 card）|
| `--muted-foreground` | `#b3b3b3` | 0 0% 70% | 次要文字、说明文字 |
| `--border` | `#424242` | 0 0% 26% | 边框颜色 |
| `--input` | `#424242` | 0 0% 26% | 输入框边框 |
| `--destructive` | `0 84.2% 60.2%` | — | 错误/危险状态 |

### Semantic Tokens

| Token | Hex | Role |
|-------|-----|------|
| `--border` | `#424242` | 分隔线、卡片边框 |
| `--ring` | `#c8b850` | 键盘焦点环（browser focus）|
| 滚动条滑块 | `#c8b850` | 自定义滚动条 |

---

## 3. Typography Rules

### Font Stack

| Role | Font | Fallback | Usage |
|------|------|----------|-------|
| **Display/Serif** | Newsreader | Georgia, serif | Hero 标题、H1-H4、Section 标题 |
| **Body/Sans** | Inter | system-ui, sans-serif | 正文、按钮、标签、说明文字 |
| **Label/Caps** | Bebas Neue | Impact, sans-serif | 小标签、eyebrow 文字、全大写短句 |

### Type Scale

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| Display XL | Newsreader | 72px / 4.5rem | 400 | 1.0 | -0.02em | Hero 主标题 |
| Display LG | Newsreader | 56px / 3.5rem | 400 | 1.1 | -0.02em | 大Section标题 |
| Display MD | Newsreader | 40px / 2.5rem | 400 | 1.15 | -0.02em | 中等标题 |
| Headline | Newsreader | 28px / 1.75rem | 400 | 1.2 | -0.02em | 卡片标题 |
| Body LG | Inter | 18px / 1.125rem | 400 | 1.6 | 0 | 正文段落 |
| Body | Inter | 16px / 1rem | 400 | 1.5 | 0 | 一般文字 |
| Body SM | Inter | 14px / 0.875rem | 400 | 1.5 | 0 | 说明文字 |
| Label | Bebas Neue | 13px | 400 | 1.0 | 0.1em | 全大写标签、eyebrow |

### Italics
- Hero 副标题中的关键词用 `italic` — `<span class="italic">觉醒榜样</span>`

### DO
- 标题永远用 Newsreader weight 300-400（轻量优雅，不过重）
- 正文永远用 Inter
- eyebrow/标签用 Bebas Neue + `tracking-widest` + `uppercase`

### DON'T
- 不要在正文中用衬线字体
- 不要用 weight 600+ 的粗体做标题（违体系感）
- 不要混用三个以上字号层级在同一组件内

---

## 4. Component Stylings

### Button

```tsx
// variants（来自 button.tsx）
variant: {
  default:    "bg-primary (#0a0a0a) text-white hover:bg-primary/90"
  secondary:  "bg-secondary (#c8b850) text-black hover:bg-secondary/80"  ← 主要CTA
  outline:    "border bg-background hover:bg-accent hover:text-accent-foreground"
  ghost:      "hover:bg-accent hover:text-accent-foreground"
  destructive:"bg-destructive text-white"
  link:      "text-primary underline-offset-4 hover:underline"
}
size: { default: h-9 px-4 py-2, sm: h-8, lg: h-10, icon: size-9 }
```

**默认按钮** = 透明黑底 + 白字（等于背景，视觉上像"幽灵按钮"但有深度）
**主要 CTA** = 金色背景 + 黑字 — 唯一使用场景：Hero 的行动引导
**悬停**：secondary 按钮悬停时 `bg-secondary/80`（微暗）
**Focus ring**：金色 `#c8b850`，3px blur

### Card

```tsx
// 基础 Card
bg-card (#2a2a2a) / text-card-foreground (#ffffff)
border: 1px solid #424242
rounded-xl (0.75rem)
p-6

// 悬停效果（whileHover）
y: -4px, transition: duration 0.3
配合 box-shadow 增强：shadow-md
```

**特征**：深灰卡片 + 细边框 + 悬停上浮 — 标准深色 UI 模式

### Navigation

```tsx
// 导航链接
text-muted-foreground (#b3b3b3) hover:text-foreground (#fff)
// 当前位置
text-foreground (#fff)
// 下划线动画（hover）
underline offset-4, scaleX transform from center
color: #c8b850
```

### Tabs

```tsx
// 激活态
text-foreground border-b-2 border-secondary
// 非激活
text-muted-foreground hover:text-foreground
```

### Separator

```tsx
bg-border (#424242) // 细线分隔
```

### Scrollbar（自定义）

```css
::-webkit-scrollbar { width: 8px }
::-webkit-scrollbar-track { background: #0a0a0a }
::-webkit-scrollbar-thumb { background: #c8b850; border-radius: 4px }
::-webkit-scrollbar-thumb:hover { background: #ffffff }
```

---

## 5. Layout Principles

### Spacing Scale

使用 Tailwind 默认 spacing scale，重点节点：
- Section padding: `py-24` ~ `py-32`（充分呼吸空间）
- Container: `max-w-5xl` ~ `max-w-7xl mx-auto px-6`
- Card gap: `gap-6` ~ `gap-8`

### Grid

- 首页：单列沉浸式流（每个 section 全宽，不做 grid 限制）
- Gallery 类：响应式 grid — `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- 卡片列表：`gap-6`，`grid-cols-1 md:grid-cols-2`

### Responsive Breakpoints

| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | 小手机 |
| md | 768px | 平板 |
| lg | 1024px | 小桌面 |
| xl | 1280px | 桌面 |
| 2xl | 1536px | 大屏 |

---

## 6. Depth & Elevation

### Shadows

当前系统**极少用阴影**（深色背景上阴影不明显）。主要靠：
- **背景色差** — card (#2a2a2a) vs background (#0a0a0a) 的色阶差
- **边框** — `border-border (#424242)` 分隔表面
- **悬停上浮** — `y: -4` transform 暗示层级

未来扩展可参考 Stripe 的多层蓝调阴影：
```css
box-shadow: 0 4px 16px rgba(50, 50, 93, 0.25), 0 8px 32px rgba(0, 0, 0, 0.1);
```

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius` | 0.75rem | 标准圆角 |
| xl | calc(var(--radius) + 4px) ≈ 1rem | 卡片 |
| lg | var(--radius) = 0.75rem | 按钮、输入框 |
| md | calc(var(--radius) - 2px) | 小元素 |
| sm | calc(var(--radius) - 4px) | 最小圆角 |

---

## 7. Animation Specification

### Core Timing

| Duration | Usage |
|----------|-------|
| 0.2s | 微交互：按钮悬停、焦点 |
| 0.3s | 卡片悬停上浮 |
| 0.6s | 单元素淡入 |
| 0.8s | Hero 主标题进场 |
| 1.0s | Scroll-triggered 淡入 |
| 2.0s | 数字计数动画 |

### Easing

```ts
// 标准出场（outQuart）— 快出、慢收
ease: [0.165, 0.84, 0.44, 1]

// 数字弹簧
useSpring(value, { duration: 2000 })
```

### Key Animations

**① 页面加载序列**
```tsx
// Hero eyebrow: delay 0.2s, opacity 0→1, y: 20→0
{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }

// Hero 标题: delay 0.4s, opacity 0→1, y: 30→0
{ duration: 0.8, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }

// 副标题: delay 0.6s
{ duration: 0.6, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }
```

**② Scroll 淡入（所有 Section）**
```tsx
<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, ease: [0.165, 0.84, 0.44, 1] }}
  viewport={{ once: true, margin: "-100px" }}
/>
```

**③ Stagger 子元素**
```tsx
// Container
variants={{
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}}

// Item
variants={{
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}}
```

**④ 卡片悬停**
```tsx
whileHover={{ y: -4, transition: { duration: 0.3 } }}
```

**⑤ 导航下划线**
```css
/* CSS transform 实现 */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px; left: 0; right: 0;
  height: 1px;
  background: #c8b850;
  transform: scaleX(0);
  transition: transform 0.2s ease;
}
.nav-link:hover::after { transform: scaleX(1); }
```

**⑥ Reduced Motion**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. Do's and Don'ts

### DO
- 金色 `#c8b850` 只出现在：焦点环、悬停状态、主要 CTA 按钮、滚动条滑块、装饰性分隔线
- 深色背景永远用 `#0a0a0a`，不用 `#000000`（太硬）
- 标题字体用 Newsreader weight 300-400
- 每个 section 之间留足 `py-24` ~ `py-32` 的空白
- 图片用 `opacity-90` 微微压暗，融入深色背景

### DON'T
- 不要在正文区域用金色背景（那是高亮信号，不是铺开用的）
- 不要用 Tailwind 的 `bg-black`（用 `bg-background` 代替）
- 不要在深色背景上用纯白色以外的高饱和色（颜色会溢出）
- 不要省 `prefers-reduced-motion`（无动画偏好用户的可访问性）
- 不要在正文用 Bebas Neue（那是 label 专用）

---

## 9. Special Component Rules

### DataWall / 数字展示区
数字展示与普通内容不同——数字本身就是焦点，不需要再用金色强调。
- **背景**: `bg-background`（不是 `bg-card`，用更深的背景突出数字）
- **大数字字体**: `font-serif`（Newsreader）— 不要用 Bebas Neue（Bebas Neue 适合英文全大写标签，不适合数字）
- **数字颜色**: `text-foreground`（纯白，不是金色）
- **后缀/单位**: 用 `suffix` prop，不要单独打 `+` 字符
- **动画**: 数字滚动动画 + Stagger 进场，进场 ease `[0.165, 0.84, 0.44, 1]`

### Modal / Dialog
- 永远使用 shadcn/ui Dialog 组件，自动继承暗色 token
- **禁止**在 Modal 内使用 `bg-[#fdfaf7]` / `text-[#242422]` 等亮色值
- Modal 背景：`bg-popover`（等于 `bg-card`，与背景融合）
- 文字：`text-foreground` + `text-muted-foreground`

### 分类标签（多色 vs 单色）
- **规则**: 深色沉浸式页面（背景 `#0a0a0a`）上，分类标签最多用 **2 个颜色**，不能超过 3 个
- **推荐**: 只用 `secondary`（金色）+ `muted-foreground` 区分重要/次要，不用多个亮色
- **原因**: 多个亮色在深色背景上竞争焦点，金色的"觉醒能量感"被稀释

---

## 10. Agent Prompt Guide

```
Primary Gold:  #c8b850 (hsl(49, 56%, 50%))
Background:    #0a0a0a
Card surface:  #2a2a2a
Border:        #424242
Text:          #ffffff
Muted text:    #b3b3b3

Fonts:  Newsreader (headings), Inter (body), Bebas Neue (labels)
Radius: 0.75rem (12px)
Easing: [0.165, 0.84, 0.44, 1]
```

### Sample Prompt for New Components

> Build a [component name] for the Mangofolio "觉醒博物馆" project. Follow DESIGN.md:
> - Dark theme: bg #0a0a0a, text #ffffff, card #2a2a2a
> - Gold accent: #c8b850 for interactive states only
> - Fonts: Newsreader for headings, Inter for body
> - Animation: Framer Motion, ease [0.165, 0.84, 0.44, 1]
> - Follow the existing button/card patterns in the codebase
