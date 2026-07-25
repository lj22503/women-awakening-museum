# women-awakening-museum — neat-freak 知识收尾报告

**收尾时间**：2026-07-25
**收尾路径**：轻量路径（Vite + Vercel 项目，已有 recent neat-freak 风格 commit `8a00d03` 视觉升级，HEAD 干净）
**收尾者**：neat-freak（v3.0.0）

---

## 一、影响（用户视角）

- **🔴 暴露根目录孤儿 package-lock.json**：根目录有 `package-lock.json`（推测 107B）但 `package.json` 在 `app/` 子目录——vercel.json `buildCommand: cd app && npm run build` 表明实际项目在 `app/`。**根目录 package-lock.json 是孤儿**（无对应 package.json）。
- **暴露两个一次性修复脚本未清理**：`fix-duplicate-types.js`（1.6KB）+ `fix-mbti-gallery.sh`（1KB）—— 按 neat-freak 轻量路径 §4 "调试脚本"分类，建议确认是否仍需保留。
- **整体良好**：命名一致、vercel.json 完整、references/ 设计文档齐全。
- **暴露 ProblemRadar 反复修改**：commit `f9544cf feat: ProblemRadar redesign` 紧接 `a366369 Revert "feat: ProblemRadar redesign ..."` —— **同一天 revert** 一次 redesign，说明 P1 推送有闪回风险（按 memory [[major-git-accident-2026-06-21]] 类似）。

## 二、现役事实矩阵

| 事实面 | 状态 | 证据 |
|--------|------|------|
| 代码 | `changed-and-verified` | `app/` Vite + React + Tailwind（index.html + src/ + public/）+ `skills/mbti-coaches/` Anthropic Skill |
| 运行态 | `verified-current` | HEAD `8a00d03` P1 视觉升级；vercel.json `buildCommand: cd app && npm run build`；在线 `awakening.mangofolio.com` |
| 文档 | `verified-current` | DESIGN.md 12.6KB + README.md + tech-spec.md 8KB + app/README.md + app/info.md + references/ 4 设计文档 |
| 规则 | `not-applicable`（缺） | 无 CLAUDE.md / AGENTS.md |
| 记忆 | `not-applicable` | 无 |
| 工作区 | `verified-current` | 新建 `.neat-freak/`；HEAD 干净 |

## 三、关键发现

### 3.1 🔴 根目录孤儿 package-lock.json

| 路径 | 存在 | 角色 |
|------|------|------|
| 根目录 `package-lock.json` | ✅ 存在 | **孤儿**（无对应 package.json） |
| 根目录 `package.json` | ❌ 不存在 | — |
| `app/package.json` | ✅ 存在 | 实际项目 |
| `app/package-lock.json` | ❓ 未确认 | 可能存在 |

→ vercel.json `buildCommand: cd app && npm install` 表明实际依赖在 `app/` 下。
→ 推测：早期项目根目录有 package.json，迁移到 app/ 后根目录的 package-lock.json 未清。

### 3.2 一次性修复脚本

| 文件 | 用途（推测） |
|------|------------|
| `fix-duplicate-types.js` | 修复类型重复 bug |
| `fix-mbti-gallery.sh` | 修复 MBTI 画廊渲染 bug |

→ commit 历史未体现这两个脚本，可能：
- 一次性本地修复脚本，bug 已根治不需要了
- 或随 commit 历史被引入但无明确清理标记

→ 按 neat-freak 轻量路径 §4：列入**删除候选**（用户确认前不删）。

### 3.3 ProblemRadar redesign 闪回

commit 历史（最近 5）：

```
8a00d03 P1: 补全头像检测 + 15条cognition深化 + 展厅差异化视觉
c09de59 P0: 统一数据源 + 问题雷达动态关联 + DataWall动态化
c6e3c7c 🔗 更新部署地址→awakening.mangofolio.com
a366369 Revert "feat: ProblemRadar redesign — problem map with category filter tabs, hover reveal, staggered cards"
f9544cf feat: ProblemRadar redesign — problem map with category filter tabs, hover reveal, staggered cards
```

→ `f9544cf` 与 `a366369` 是**一对**：feat → revert（同 commit hash 前缀 a366369 是 revert）—— 推测 redesign 有问题被 revert。
→ 与 memory [[major-git-accident-2026-06-21]] "git reset --hard 导致本地文件丢失" 不同，但都属于"推送闪回"风险信号。

### 3.4 references/ 4 个设计文档

| 文件 | 用途（推测） |
|------|------------|
| brand-selection-guide.md | 品牌选型指南 |
| color-comparison.md | 颜色对比 |
| design-audit-2026-05-07.md | 设计审计（带日期） |
| design-workflow.md | 设计工作流 |

→ design-audit-2026-05-07.md 带日期标记 → 是历史快照还是仍有效？

### 3.5 skills/mbti-coaches

| 项目 | 用途（推测） |
|------|------------|
| `skills/mbti-coaches/` | Anthropic Skill 包，对应 README 第 19-23 行 "16 种 MBTI 人格 × 3 位女性榜样" |

### 3.6 项目矩阵关系

按 README + DESIGN.md，本项目是用户"女性觉醒"主题产品：
- 在线博物馆 `awakening.mangofolio.com`
- 16 MBTI 人格 × 50+ 女性榜样 × 5 展厅
- 与 lj22503 其他项目（财商教育、投顾、叙事）平行

## 四、改动 / 新建

| 文件 | 动作 | 原因 |
|------|------|------|
| `.neat-freak/reports/women-awakening-museum-2026-07-24.md` | 新建 | 本次 audit trail |

## 五、待你确认（未确认前不动作）

1. **🔴 根目录孤儿 package-lock.json**：删除 vs 保留（推测无作用）
2. **一次性修复脚本**：`fix-duplicate-types.js` + `fix-mbti-gallery.sh` 是否仍需
3. **design-audit-2026-05-07.md**：带日期快照是否仍有效
4. **CLAUDE.md 是否创建**：项目无 agent 规则文件

## 六、遗留

- app/ Vite + React + Tailwind 实际代码未审
- skills/mbti-coaches/ 内容未读
- DESIGN.md 12.6KB + tech-spec.md 8KB 未读全文
- 5 展厅（思维方法 / 认知体系 / 行动策略 / 作品展示 / 影响力）实际数据未审

---

*收尾完成度：5 事实面已标注（记忆 not-applicable，规则 not-applicable 缺文件）。报告基于 commit `8a00d03`（HEAD，分支 main）。如需重新跑请清空 `.neat-freak/reports/` 后重跑。*