# 设计参考工作流

## 三个使用场景

### 场景一：设计走查
**何时触发**：做完一个页面或组件，想看看有没有遗漏

**步骤**：
1. 打开 `references/brands/` 目录，选取最接近项目气质的 2-3 个品牌
2. 用 Preview 工具打开对应品牌的 `preview.html`（用浏览器截图或 iframe）
3. 对照 DESIGN.md 的 6 大维度逐项打分：
   - [ ] 颜色是否在正确位置出现（accent 只在交互点？）
   - [ ] 字体层级是否清晰（display / body / label 各司其职？）
   - [ ] 间距呼吸感如何（是否太挤/太散？）
   - [ ] 动效是否有节制（哪些地方动了？哪些地方不该动？）
   - [ ] 组件状态是否完整（default / hover / focus / disabled / loading）
4. 记录发现的问题，写入 ISSUE 或 directly fix

### 场景二：历史项目优化
**何时触发**：想给老项目换一个更现代的视觉系统，或者某个组件体验不好

**步骤**：
1. 明确目标：想改善什么？（配色？动效？组件一致性？排版节奏？）
2. 从 `references/brands/` 选一个在目标维度上做得最好的品牌
3. 用 `references/color-comparison.md` 快速找到色板迁移路径
4. 如果涉及动效：参考 Linear 的 `animation` 章节，提取 `duration / easing / stagger` 参数
5. 如果涉及字体：参考 Notion 的 type scale 表，映射到我们的字号
6. 改完后走一遍「设计走查」流程

### 场景三：设计规范制定（新项目 / 大改版）
**何时触发**：新开一个项目，或者现有系统要大改

**步骤**：
1. **选标杆**：从 `references/brands/` 选一个最接近目标的品牌作为起点
   - 深色工具感 → Linear
   - 温暖内容感 → Notion / Airbnb
   - 金融/专业感 → Stripe / Revolut
   - 极简开发者文档 → Vercel
   - 创意/视觉强 → Figma / Framer
2. **写 DESIGN.md**：以 `women-awakening-museum/DESIGN.md` 为模板，替换为自己的颜色/字体/组件
3. **同步到项目根目录**：cp 到对应项目 repo 根目录
4. **后续所有前端任务 prompt 开头加一句**：
   ```
   Follow the DESIGN.md in the project root for all visual decisions.
   ```
5. **定期走查**：每做完一个里程碑，走一遍「设计走查」

---

## 精选参考品牌（按维度）

| 维度 | 首选 | 次选 | 用途 |
|------|------|------|------|
| **深色系统 / Token 设计** | Linear | Vercel | 建立深色 UI 的 token 层级思维 |
| **金色/暖色点缀** | Airbnb | Mastercard | 找到"点缀而非铺开"的用色纪律 |
| **动效 / 时间曲线** | Linear | Framer | stagger、duration、easing 参数参考 |
| **卡片 / 组件状态** | Linear | Stripe | 完整状态系统（default/hover/focus/loading）|
| **Type Scale / 字体层级** | Notion | Apple | 清晰的 display/body/label 分工 |
| **阴影系统** | Stripe | Revolut | 多层蓝调阴影的实操参数 |
| **温暖内容感** | Notion | Airbnb | 文档/内容型产品的排版节奏 |
| **Fintech 专业感** | Stripe | Revolut | 金融产品配色和信任感建立 |

---

## 文件索引

```
references/
├── design-workflow.md          ← 本文件：三大场景工作流
├── brands/                     ← 精选 8 个品牌的 DESIGN.md + preview.html
│   ├── linear/                 ← 深色工具标杆
│   ├── stripe/                 ← Fintech 配色+阴影
│   ├── notion/                 ← 温暖内容感
│   ├── vercel/                 ← 极简开发者文档
│   ├── airbnb/                 ← 温暖点缀色
│   ├── figma/                  ← 创意品牌视觉
│   ├── framer/                 ← 动效先行设计
│   └── revolut/                ← 现代金融 App 感
├── color-comparison.md         ← 8 个品牌 vs 我们的色板对照
└── brand-selection-guide.md    ← 如何给新项目选标杆品牌
```
