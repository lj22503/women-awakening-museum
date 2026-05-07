# Color Comparison: 8 Brands vs Mangofolio

## How to Read This Table

- **Mangofolio accent** = `#c8b850` (Champagne Gold / 觉醒金)
- Compare our colors to 8 curated reference brands
- Use this when migrating a project's color system or choosing a new accent

---

## Our Baseline: Mangofolio (觉醒博物馆)

| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#0a0a0a` | Deep canvas |
| `--foreground` | `#ffffff` | Primary text |
| `--card` | `#2a2a2a` | Card surface |
| `--border` | `#424242` | Borders, dividers |
| `--muted-foreground` | `#b3b3b3` | Secondary text |
| `--secondary` / `--accent` | `#c8b850` | **Gold accent** — the only chromatic color |
| `--ring` | `#c8b850` | Focus indicator |

**Design logic**: Near-black + single warm gold. Restraint = luxury.

---

## Per-Brand Comparison

### 1. Linear — Deep Canvas Reference

| Linear Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| `canvas` | `#010102` | `#0a0a0a` | Ours is slightly lighter, warmer |
| `surface-1` | `#0f1011` | `#2a2a2a` | Linear surfaces much darker than ours |
| `ink` | `#f7f8f8` | `#ffffff` | Same white |
| `ink-muted` | `#d0d6e0` | `#b3b3b3` | Ours more muted |
| `hairline` | `#23252a` | `#424242` | Ours is brighter (more visible) |
| `primary` (lavender) | `#5e6ad2` | `#c8b850` | Both are the single accent |
| `semantic-success` | `#27a644` | — | Not used in our system |

**Takeaway**: Linear is the deepest-dark brand in our set. Our card surface `#2a2a2a` is roughly equivalent to Linear's surface-2. If we want to go deeper, we could push to `#1a1a1a`.

---

### 2. Stripe — Fintech Blue-Purple System

| Stripe Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| `Stripe Purple` | `#533afd` | — | Their single brand accent |
| `Deep Navy` (headings) | `#061b31` | `#0a0a0a` | Stripe headings on white, ours on black |
| `Canvas` | `#ffffff` | `#ffffff` | Stripe uses white canvas |
| `Ruby` | `#ea2261` | — | Secondary accent (notifications, alerts) |
| `Shadow Blue | `rgba(50,50,93,0.25)` | — | Multi-layer shadow, not in our system |

**Takeaway**: Stripe's blue-tinted shadows are their secret weapon. If Mangofolio ever needs elevated cards, this shadow formula is the reference: `0 4px 16px rgba(50,50,93,0.25), 0 8px 32px rgba(0,0,0,0.1)`.

---

### 3. Notion — Warm Minimalism

| Notion Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| Background | `#ffffff` | `#0a0a0a` | Inverse — Notion light, ours dark |
| Text | `#37352f` | `#ffffff` | Warm near-black vs pure white |
| Border | `#e5e3df` | `#424242` | Same tonal role, Notion's warmer |
| Accent blue | `#2a9d99` | `#c8b850` | Same single-accent logic |
| Red | `#e03131` | — | Error states, not in our system |

**Takeaway**: Notion's text warmth (`#37352f`) vs our pure white (`#ffffff`). If we ever want warmer text, try `#f0ede8` or `#e8e4df`. Notion's serif + warm neutral pairing is the model for our "warm editorial" aspiration.

---

### 4. Vercel — Pure Black & Precision Blue

| Vercel Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| `Vercel Black` | `#171717` | `#0a0a0a` | Our background is darker |
| `Gray 900` | `#171717` | `#2a2a2a` | Our card surface = their black |
| `Link Blue` | `#0070f3` | — | Single accent — they use blue |
| `Gray 50` | `#fafafa` | `#ffffff` | Same white |
| `Gray 100` | `#ebebeb` | `#424242` | Our border = their light gray |

**Takeaway**: Vercel's `#171717` (not pure black) is a sweet spot for tool UIs. Our `#0a0a0a` is deeper. If we build tool-specific subpages, `#171717` might feel more appropriate.

---

### 5. Airbnb — Coral Red Warmth

| Airbnb Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| `Rausch` (primary) | `#ff385c` | — | Hot coral-pink, much louder than gold |
| `Ink` | `#222222` | `#ffffff` | Airbnb uses near-black, not pure white |
| `Body` | `#3f3f3f` | `#b3b3b3` | Same muted text role |
| `Hairline` | `#dddddd` | `#424242` | Border tonal weight |
| `Canvas` | `#ffffff` | `#0a0a0a` | Inverse again |

**Takeaway**: Airbnb's coral `#ff385c` is very high-chroma. Our gold `#c8b850` is lower chroma — easier to use as a restrained accent without overwhelming. Good validation that our color choice has discipline.

---

### 6. Figma — Vibrant Multi-Color

| Figma Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| Brand pink | `#ff3d8b` | — | No direct equivalent |
| Success green | `#1ea64a` | — | Status colors not in our system |
| Background | `#ffffff` | `#0a0a0a` | Figma is light-mode brand |
| Gray | `#e6e6e6` | `#424242` | Border tonal weight |

**Takeaway**: Figma uses multiple high-chroma colors — that's only possible because they have a light base. On dark backgrounds, multiple colors compete and cause visual chaos. Our single-accent rule is especially important for dark UIs.

---

### 7. Framer — Near-Black Vibrant

| Framer Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| Background | `#090909` | `#0a0a0a` | Nearly identical depth |
| Surface | `#1a1a1a` | `#2a2a2a` | Slightly darker than ours |
| Border | `#262626` | `#424242` | Darker border than ours |
| Brand purple | `#6a4cf5` | — | Framer's single accent |
| Pink | `#ff5577` | — | Secondary vibrant |

**Takeaway**: Framer is the closest to our aesthetic in this set. Key difference: Framer uses `#1a1a1a` as surface (vs our `#2a2a2a`) and `#262626` as border (vs our `#424242`). Their system is more compressed/lower-contrast. Good reference for when we want a more "integrated" dark feel.

---

### 8. Revolut — Modern Fintech Precision

| Revolut Token | Hex | Mangofolio Equivalent | Notes |
|-------------|-----|---------------------|-------|
| `Canvas Dark` | `#000000` | `#0a0a0a` | Revolut uses pure black |
| `Surface Deep` | `#0a0a0a` | `#0a0a0a` | Same as our background |
| `Surface Elevated` | `#16181a` | `#2a2a2a` | Revolut's elevated = our card |
| `Cobalt Bright` | `#4f55f1` | — | Primary accent — blue-purple |
| `Hairline Strong` | `#191c1f` | `#424242` | Border tonal weight |
| `Accent Danger` | `#e23b4a` | — | Error states |

**Takeaway**: Revolut's layered surface system is sophisticated: `#000000` canvas → `#0a0a0a` deep → `#16181a` elevated → `#ffffff` text. We could adopt this: push our background to `#000000`, use `#0a0a0a` for cards, `#1a1a1a` for elevated panels.

---

## Migration Cheat Sheet

| Our Token | Linear | Stripe | Vercel | Framer | Revolut |
|-----------|--------|--------|--------|--------|---------|
| `#0a0a0a` bg | `#010102` | — | `#171717` | `#090909` | `#000000` |
| `#2a2a2a` card | `#0f1011` | — | `#171717` | `#1a1a1a` | `#16181a` |
| `#424242` border | `#23252a` | — | `#ebebeb` | `#262626` | `#191c1f` |
| `#c8b850` gold | — | `#533afd` | `#0070f3` | `#6a4cf5` | `#4f55f1` |
| `#ffffff` text | `#f7f8f8` | `#ffffff` | `#ffffff` | `#ffffff` | `#ffffff` |

**When to use which**:
- Going deeper dark → Linear (`#010102` bg, `#0f1011` cards)
- Need shadows → Stripe (blue-tinted multi-layer)
- Warm text → Notion (`#37352f` warm near-black)
- Fintech precision → Revolut (layered surface hierarchy)
- Closest aesthetic → Framer (nearly identical dark palette)
