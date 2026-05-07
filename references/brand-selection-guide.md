# Brand Selection Guide

How to pick the right reference brand for a new project or redesign.

---

## Decision Tree

```
What type of project?
│
├─ 深色工具类产品（后台/仪表盘/代码编辑器）
│   └─ → Linear 优先，Vercel 次选
│
├─ 内容/文档类产品（博客/知识库/教程）
│   └─ → Notion 优先，Airbnb 次选
│
├─ 金融/专业类产品（支付/银行/投顾）
│   └─ → Stripe 优先，Revolut 次选
│
├─ 消费品/品牌类产品（电商/零售/生活服务）
│   └─ → Airbnb 优先，Mastercard 次选
│
├─ 创意/视觉类产品（设计工具/视频/创意平台）
│   └─ → Figma 优先，Framer 次选
│
└─ 深色沉浸式体验（博物馆/故事叙述/品牌展示）
    └─ → Mangofolio 现有系统 优先，Linear/Framer 参考
```

---

## Brand Profiles

### Linear
**Style**: Near-black dark UI, ultra-minimal, technical luxury
**Palette**: `#010102` canvas / `#0f1011` surfaces / `#5e6ad2` lavender accent
**Font**: SF Pro Display (similar to Inter) — no custom typeface
**Strengths**: Token system depth, surface hierarchy, hairline borders, focus ring design
**Best for**: Developer tools, code editors, technical dashboards
**Avoid if**: You need warmth, content readability, or consumer-facing simplicity

---

### Stripe
**Style**: White canvas, rich purple, multi-layer blue-tinted shadows
**Palette**: `#ffffff` canvas / `#533afd` purple / `#061b31` navy headings / `rgba(50,50,93,0.25)` shadow
**Font**: sohne-var (custom) + Source Code Pro
**Strengths**: Shadow system, weight-300 display headlines, financial trust aesthetic
**Best for**: Fintech, payment UIs, professional SaaS with premium feel
**Avoid if**: You need dark mode or are building consumer apps

---

### Notion
**Style**: Warm minimalism, cream/white canvas, editorial serif headings
**Palette**: `#ffffff` canvas / `#37352f` warm text / single accent color
**Font**: Georgia serif (headings) + Inter-like sans (body)
**Strengths**: Type scale clarity, warm neutrality, document readability, label system
**Best for**: Documentation, knowledge bases, editorial content sites, apps with long reading
**Avoid if**: You need high visual drama or are building dark-mode-first products

---

### Vercel
**Style**: Pure black and white, precision grid, developer-centric
**Palette**: `#000000` black / `#ffffff` white / `#0070f3` precision blue
**Font**: Geist (custom) + Geist Mono
**Strengths**: Extreme restraint, no decorative elements, clear hierarchy
**Best for**: Developer tools, API documentation, technical landing pages
**Avoid if**: You need warmth, brand personality, or non-technical audiences

---

### Airbnb
**Style**: Warm, photographic, coral-red energy
**Palette**: `#ffffff` canvas / `#ff385c` rausch coral / `#222222` near-black text
**Font**: Cereal (custom) + Space Mono
**Strengths**: Photography integration, coral accent restraint (used only for CTAs), card design
**Best for**: Travel, hospitality, consumer marketplaces, lifestyle brands
**Avoid if**: You need dark mode, technical credibility, or low-chroma restraint

---

### Figma
**Style**: Vibrant multi-color on white, playful but professional
**Palette**: `#ffffff` canvas / `#ff3d8b` pink + `#1ea64a` green + multiple accent
**Font**: Inter + custom display
**Strengths**: Color confidence, creative energy, multi-accent system that somehow works
**Best for**: Creative tools, design communities, youth-oriented products
**Caveat**: Works because it's on white. Multiple colors on dark backgrounds create chaos.

---

### Framer
**Style**: Near-black dark, vibrant single accent, motion-forward
**Palette**: `#090909` canvas / `#1a1a1a` surfaces / `#6a4cf5` brand purple / `#ff5577` pink
**Font**: Inter + custom (layout-driven sizing)
**Strengths**: Closest dark aesthetic to Mangofolio, motion-first philosophy, dark cards work
**Best for**: Creative portfolio tools, design tool marketing sites, dark immersive experiences
**Caveat**: Uses multiple accents — requires discipline to adapt to single-accent systems

---

### Revolut
**Style**: Pure black deep surfaces, layered elevation, modern fintech
**Palette**: `#000000` canvas / `#0a0a0a` deep / `#16181a` elevated / `#4f55f1` cobalt
**Font**: Revolut's proprietary (fallback: Inter)
**Strengths**: Surface hierarchy depth, modern fintech feel, dark cards with clear elevation
**Best for**: Banking apps, financial dashboards, modern fintech products
**Caveat**: Uses blue accent — different emotional register than warm gold

---

## Quick Reference: What to Steal From Each

| Brand | Steal This | Not That |
|-------|-----------|---------|
| Linear | Token naming, surface hierarchy, hairline borders | Lavender accent (too cool) |
| Stripe | Shadow formula, weight-300 headlines, heading color | White canvas (not our context) |
| Notion | Warm text colors, serif/sans pairing, label rhythm | Light canvas default |
| Vercel | Extreme restraint, single blue, pure B&W | Coldness, no personality |
| Airbnb | Coral restraint (only CTAs), card hover states | High-chroma coral on dark |
| Figma | Vibrant confidence | Any multi-color on dark |
| Framer | Dark surface stack, motion philosophy | Multiple accent colors |
| Revolut | Deep surface layering, fintech trust | Pure black + blue (too cold for us) |
