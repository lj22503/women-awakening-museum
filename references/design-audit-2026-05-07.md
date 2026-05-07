# 女性觉醒博物馆 — 设计走查报告

**走查日期**: 2026-05-07
**依据**: 线上网站快照 + 源码审查 (`women-awakening-museum/app/src/`)
**评估维度**: 颜色 / 字体 / 组件状态 / 动画 / 布局 / 可访问性

---

## 走查评分（6 大维度）

| 维度 | 评分 | 说明 |
|------|------|------|
| 颜色系统执行 | ⭐⭐ | 设计系统存在但几乎未被遵循，大量硬编码色值 |
| 字体层级 | ⭐⭐⭐⭐ | Newsreader/Inter/Bebas Neue 各司其职，层级清晰 |
| 组件一致性 | ⭐⭐ | Modal 用亮色、DataWall 用亮色背景、矛盾重重 |
| 动效系统 | ⭐⭐⭐⭐ | Framer Motion 参数正确，easing 统一 |
| 布局节奏 | ⭐⭐⭐ | Section 间距良好，Grid 使用合理 |
| 可访问性 | ⭐⭐⭐ | prefers-reduced-motion 有处理，focus ring 缺失 |

---

## P0 — 必须修复（严重）

### P0-1: DataWall 使用亮色背景 `[CRITICAL]`

**文件**: `app/src/sections/DataWall.tsx`
**问题**: DataWall 整个 section 使用 `bg-[#fdfaf7]`（暖白色），与全局深色背景 `#0a0a0a` 完全断裂。这是页面上最大的视觉矛盾。

```tsx
// 问题代码
<section className="py-24 md:py-32 bg-[#fdfaf7]">  // ← 违反全局背景
```

**影响**: 读者在滚动经过这个区块时感受到的不是"觉醒"的沉浸感，而是"换了一个网站"的割裂感。

**修复方向**: 改回 `bg-background`，数字用 `text-foreground`，描述用 `text-muted-foreground`。参考 Linear 的数据墙——深色背景 + 大字 + 金色高亮数字，完全在深色体系内表达权威感。

---

### P0-2: Role Model Modal 使用亮色主题 `[CRITICAL]`

**文件**: `app/src/sections/ProblemRadar.tsx` 第 196-228 行
**问题**: 选中榜样人物后弹出的 Modal 使用了完全不属于设计系统的亮色配色：

```tsx
// 问题代码
className="bg-[#fdfaf7] rounded-2xl"         // 暖白背景
<h3 className="text-[#242422]">              // 深棕文字
<p className="text-[#969188]">               // 暖灰次要文字
<button className="bg-[#242422] text-[#f5f3ef]"> // 深棕按钮
```

这与整个 Dark Theme 体系矛盾，打开 Modal = 视觉风格突变。

**修复方向**: 统一用 `bg-card` / `text-foreground` / `text-muted-foreground`。参考 shadcn/ui Dialog 的暗色模式实现。

---

### P0-3: 数字计数器始终显示 "0+" / "0" `[CRITICAL]`

**文件**: `app/src/sections/DataWall.tsx` + `app/src/components/AnimatedCounter.tsx`
**问题**: 现场看到 `0+ 女性榜样 / 0 种MBTI人格 / 0+ 本著作解读 / 0+ 觉醒行动卡` — 数字永远停在 0。

根因分析：
```tsx
// AnimatedCounter.tsx
const [displayValue, setDisplayValue] = useState(0);  // 初始值 0

// useEffect on springValue
const unsubscribe = springValue.on('change', (latest) => {
  setDisplayValue(Math.round(latest));  // ← springValue 变化才更新
});
```

`springValue.on('change')` 只在数字**变化时**触发，但如果初始 `motionValue` 和 `displayValue` 都是 0，组件挂载时不会触发 change 事件。`useInView` 触发 `motionValue.set(value)` 设置目标值，spring 开始动画，但 `on('change')` 回调的初始值可能不触发 setState（取决于实现）。

**验证**: 需要在浏览器中测试 `springValue.on('change')` 在初始设置时是否触发。如果不触发，`displayValue` 会停留在 0，直到数字变化。

**修复方向**（两种方案）:
```tsx
// 方案 A: 用 useEffect 直接驱动
useEffect(() => {
  if (!isInView) return;
  const interval = setInterval(() => {
    setDisplayValue(prev => {
      const target = value;
      const step = Math.ceil((target - prev) / 60); // 60帧内完成
      return prev >= target ? (clearInterval(interval), target) : prev + step;
    });
  }, 1000 / 60);
  return () => clearInterval(interval);
}, [isInView, value]);
```

```tsx
// 方案 B: 修正 spring initial 值
// 在 useSpring 中加入 stiffness/damping 让它在 value 变化时触发
// 或在 on('change') 前加一个立即 set
const [started, setStarted] = useState(false);
useEffect(() => {
  if (isInView && !started) {
    setStarted(true);
    motionValue.set(value);  // 先 set，再监听 change
  }
}, [isInView, value, motionValue, started]);
```

---

## P1 — 应该修复（影响体验）

### P1-1: 颜色 Token 系统未被遵循

**问题**: 组件大量使用硬编码 Tailwind 类，而非 CSS 变量 token：

| 位置 | 硬编码值 | 应使用 Token |
|------|---------|-------------|
| ProblemRadar 卡片背景 | `bg-white/5` | `bg-card` |
| ProblemRadar 卡片边框 | `border-white/10` | `border-border` |
| ProblemRadar 图标容器 | `bg-white/10` | `bg-muted` |
| Role Model Modal 背景 | `bg-[#fdfaf7]` | `bg-card` |
| DataWall 背景 | `bg-[#fdfaf7]` | `bg-background` |
| DataWall 标题 | `text-[#242422]` | `text-foreground` |
| DataWall 描述 | `text-[#969188]` | `text-muted-foreground` |

**风险**: 未来统一调整主题色时，这些硬编码点会成为漏网之鱼。维护成本随项目增长指数级上升。

**修复方向**: 全局搜索 `[#` 和 `bg-white` 的使用，全部替换为 token。最快方式：用 VS Code 全局 Replace。

---

### P1-2: 金色点缀 (Secondary) 使用不足

**问题**: DESIGN.md 定义金色 `#c8b850` 为唯一强调色，但 ProblemRadar 刻意用多色系统（burgundy/champagne/moss）来区分 8 个问题类别，导致视觉焦点分散：

```tsx
// ProblemRadar.tsx — 当前做法：每个类别用不同颜色
"自我认知": { bg: "bg-burgundy/30", light: "bg-burgundy/10", text: "text-burgundy" }
"经济独立": { bg: "bg-champagne/30", light: "bg-champagne/10", text: "text-champagne" }
"权利觉醒": { bg: "bg-moss/30", light: "bg-moss/10", text: "text-moss" }
```

**分析**: 多色系统在**轻量/浅色**界面上可以工作（如 Figma、Notion），但在**深色沉浸式**界面上，多个亮色竞争焦点，金色的"觉醒能量感"被稀释。

**参考对比**: Linear 的做法——所有类别用同一个 lavender `#5e6ad2`，用**形状/位置**区分不同类型，不靠颜色。

**修复方向选择**:
- **方案 A（推荐）**: 保持多色，但限定 2 个而非 3 个（去掉 moss，只用 burgundy 和 champagne），减少视觉噪音
- **方案 B**: 全部统一用 `secondary`（金色系），让颜色语义从"类别区分"变为"重要性区分"

---

### P1-3: ProblemCard 缺少明确的 Focus 状态

**问题**: 可交互的 ProblemCard（点击打开 Modal）只有 `hover:bg-white/10`，没有键盘 Focus 状态。

**当前**:
```tsx
className="... cursor-pointer transition-all duration-300 border border-white/10"
```

**缺失**: `focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background`

**修复方向**: 在 shadcn/ui 的 button 组件中已有 `focus-visible:ring-ring`，直接参考其实现。Focus ring 是可访问性的核心要求。

---

### P1-4: 分类标签（eyebrow）用的是 `text-white/60` 而非官方 Label 色

**问题**: Section eyebrow 使用：
```tsx
<span className="text-xs tracking-widest uppercase text-white/60">
  问题探索
</span>
```

**设计系统定义**: eyebrow 应该用 Bebas Neue + `tracking-widest` + `text-secondary/70`

```tsx
// 正确做法
<span className="font-label text-xs tracking-widest uppercase text-secondary/70">
  问题探索
</span>
```

金色 eyebrow 能让 Section 分隔更有仪式感，当前白色太弱。

---

## P2 — 可以优化（体验提升）

### P2-1: ExhibitionHalls Tabs 激活态不够明确

**快照证据**: Tabs 按钮在激活和非激活时差异仅靠 `bg-secondary` 区分。

**问题**: 在深灰背景 (`#2a2a2a`) 上，`bg-secondary` 金色按钮是可辨识的，但如果标签内容多（金色按钮过多），会失去焦点感。

**参考**: Linear 的 Tabs 做法——激活态用 `border-b-2 border-secondary`，不靠背景色区分；非激活态用 `text-muted-foreground hover:text-foreground`。

---

### P2-2: 数据墙的 Bebas Neue 大数字

**问题**: DataWall 的数字用 `font-display`（即 Bebas Neue），但这个字体是 **全大写无衬线 display 字体**，用来显示数字 100+ 会产生奇怪的视觉效果：

```
100+  →  100+（Bebas Neue 的数字字形很窄，与旁边 Newsreader 的中文字搭配奇怪）
```

**参考**: Stripe 的数字用 `sohne-var` weight 300，数字和文字在视觉上更协调。Linear 的数字用 SF Pro Display，与系统字体一致。

**修复方向**: 数字改用 `font-serif`（Newsreader），与页面其他标题字体一致。Bebas Neue 只适合纯英文标签，不适合数字。

---

### P2-3: MBTI 按钮网格缺少 hover 时的视觉反馈

**快照证据**: 16 个 MBTI 按钮当前用 `border-white/10` 分隔，点击时切换选中态。但 hover 状态未在快照中体现，需要确认代码实现。

**建议**: 参考 Linear 的 badge 悬停做法——`hover:bg-secondary hover:text-primary`。

---

### P2-4: Role Model 头像灰度处理

**代码证据**:
```tsx
className="... grayscale hover:grayscale-0 ..."
```

未选中时是灰度图，悬停才显示彩色。这个做法在照片质量参差不齐时可以接受，但如果图片加载失败会导致空白。

**建议**: 加上 `onError` fallback（如显示姓名首字）。

---

## 总结：优先修复顺序

```
P0（立即修）:
  1. DataWall 背景色 — bg-[#fdfaf7] → bg-background
  2. Role Model Modal 配色 — 亮色 → 暗色 token
  3. 数字计数器不工作 — AnimatedCounter logic fix

P1（本周修）:
  4. 全局硬编码颜色替换 — 搜索 bg-[# / text-[#，替换为 token
  5. 分类颜色精简 — moss → 只保留 burgundy + champagne
  6. ProblemCard 添加 focus-visible ring
  7. eyebrow 标签改用金色

P2（下一版）:
  8. ExhibitionHalls Tabs 改用 border-bottom 激活态
  9. 数据墙数字字体改为 Newsreader
  10. MBTI 按钮 hover 反馈
```

---

## 走查后的设计系统更新

走查发现两个系统性问题，需要同步更新 DESIGN.md：

**更新 1**: 明确禁止在组件内使用硬编码 hex/rgb 值
```
// DESIGN.md Do's 增加：
✅ 永远用 CSS 变量 token (bg-background, text-foreground, bg-card, border-border)
❌ 永远不要写 bg-[#xxxxxx] / text-[#xxxxxx] / border-[#xxxxxx]
```

**更新 2**: DataWall / 数字展示区的特殊规则
```
// DESIGN.md 增加 Section 9: Special Component Rules
数字展示区域（如 DataWall）:
- 背景: bg-background (不是 bg-card)
- 大数字: font-serif (Newsreader), 不要用 Bebas Neue
- 数字颜色: text-foreground，金色不用在数字上（数字本身已经是焦点）
- 数字格式: 用 suffix/prefix 而非单独字符
```
