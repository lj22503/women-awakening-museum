import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInSection } from '@/components/FadeInSection';
import { ProblemDetail } from '@/components/ProblemDetail';
import { problems } from '@/data/problems';
import { problemDetails } from '@/data/problemDetail';
import {
  Search, Heart, Brain, BookOpen, ShoppingBag,
  Activity, Compass, Scale, Sparkles, ChevronRight,
  ArrowRight
} from 'lucide-react';

// ─── Category Config ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { name: '自我认知', icon: <Search className="w-4 h-4" />, color: '#8B3A3A', bg: 'bg-burgundy', text: 'text-burgundy' },
  { name: '经济独立', icon: <Scale className="w-4 h-4" />, color: '#C9A96E', bg: 'bg-champagne', text: 'text-champagne' },
  { name: '权利觉醒', icon: <Heart className="w-4 h-4" />, color: '#5C7A5C', bg: 'bg-moss', text: 'text-moss' },
  { name: '情感边界', icon: <Brain className="w-4 h-4" />, color: '#8B3A3A', bg: 'bg-burgundy', text: 'text-burgundy' },
  { name: '教育成长', icon: <BookOpen className="w-4 h-4" />, color: '#C9A96E', bg: 'bg-champagne', text: 'text-champagne' },
  { name: '消费觉醒', icon: <ShoppingBag className="w-4 h-4" />, color: '#5C7A5C', bg: 'bg-moss', text: 'text-moss' },
  { name: '身心健康', icon: <Activity className="w-4 h-4" />, color: '#8B3A3A', bg: 'bg-burgundy', text: 'text-burgundy' },
  { name: '生命意义', icon: <Compass className="w-4 h-4" />, color: '#C9A96E', bg: 'bg-champagne', text: 'text-champagne' },
];

// Map category name → config
const CAT_MAP = Object.fromEntries(CATEGORIES.map(c => [c.name, c]));

// ─── Problem Card ─────────────────────────────────────────────────────────────
interface ProblemCardProps {
  problem: typeof problems[0];
  index: number;
  onClick: () => void;
}

function ProblemCard({ problem, index, onClick }: ProblemCardProps) {
  const cat = CAT_MAP[problem.category];
  const detail = problemDetails[problem.id];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Hover reveal line */}
      <motion.div
        className="absolute -left-3 top-0 bottom-0 w-0.5 rounded-full"
        style={{ backgroundColor: cat.color }}
        initial={{ scaleY: 0, originY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="bg-white/[0.04] hover:bg-white/[0.08] rounded-2xl p-5 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300">
        {/* Header row: number + category tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-serif text-3xl font-bold text-white/20 group-hover:text-white/40 transition-colors">
            {num}
          </span>
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: cat.color + '22', color: cat.color }}
          >
            {cat.icon}
            <span>{problem.category}</span>
          </div>
        </div>

        {/* Question — large, serif, readable */}
        <h3 className="font-serif text-lg text-white leading-snug mb-3 group-hover:text-white/90 transition-colors">
          {problem.question}
        </h3>

        {/* Core essence teaser — revealed on hover */}
        {detail && (
          <p className="text-sm text-white/40 leading-relaxed line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {detail.coreEssence}
          </p>
        )}

        {/* Related MBTI types */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {problem.relatedTypes.slice(0, 3).map(type => (
              <span key={type} className="text-xs text-white/30 font-mono">{type}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-secondary text-xs font-medium group-hover:gap-2.5 transition-all">
            <span>深入探索</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export function ProblemRadar() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? problems.filter(p => p.category === activeCategory)
    : problems;

  return (
    <>
      <section id="problem-radar" className="py-24 bg-background">

        {/* ── Section Header ── */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <FadeInSection>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0 mt-1">
                <Search className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">
                  问题探索
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-3">
                  你的困惑，<br />
                  <span className="text-champagne">早有答案</span>
                </h2>
                <p className="text-white/50 text-base max-w-lg leading-relaxed">
                  8 个女性成长核心议题，每一个都有深度拆解——
                  从表象问题到本质洞察，再到可执行的改变路径。
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* ── Category Filter Tabs ── */}
          <FadeInSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mt-8">
              <button
                onClick={() => setActiveCategory(null)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === null
                    ? 'bg-white text-neutral-900 shadow-lg'
                    : 'bg-white/[0.07] text-white/50 hover:bg-white/[0.12] hover:text-white/70'
                }`}
              >
                全部 8 个
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name === activeCategory ? null : cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.name
                      ? 'text-white shadow-lg'
                      : 'bg-white/[0.07] text-white/50 hover:bg-white/[0.12] hover:text-white/70'
                  }`}
                  style={{
                    backgroundColor: activeCategory === cat.name ? cat.color : undefined,
                  }}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </FadeInSection>
        </div>

        {/* ── Problem Grid — 2 columns, staggered ── */}
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory ?? 'all'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {filtered.map((problem) => (
                <ProblemCard
                  key={problem.id}
                  problem={problem}
                  index={problems.indexOf(problem)}
                  onClick={() => setSelectedProblem(problem.id)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20 text-white/40">
              <p>该分类下暂无问题</p>
            </div>
          )}

          {/* Bottom hint */}
          <FadeInSection delay={0.2}>
            <div className="mt-12 flex items-center justify-center gap-3 text-white/30 text-sm">
              <div className="w-8 h-px bg-white/20" />
              <span>点击卡片深入探索问题的本质与解法</span>
              <div className="w-8 h-px bg-white/20" />
            </div>
          </FadeInSection>
        </div>

        {/* ── Divider ── */}
        <div className="max-w-7xl mx-auto px-6 my-24">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* ── Role Models Section ── */}
        <RoleModelsSection />
      </section>

      {/* ── Problem Detail Modal ── */}
      <ProblemDetail
        problemId={selectedProblem}
        isOpen={!!selectedProblem}
        onClose={() => setSelectedProblem(null)}
      />
    </>
  );
}

// ─── Role Models Sub-section ──────────────────────────────────────────────────
const roleModels = [
  { name: '王潇', title: '趁早品牌创始人', category: '体系构建者', color: 'bg-burgundy', image: '/images/wangxiao.jpg' },
  { name: '崔璀', title: '优势管理导师', category: '体系构建者', color: 'bg-burgundy', image: '/images/cuicui.jpg' },
  { name: '上野千鹤子', title: '女性主义学者', category: '文化洞察者', color: 'bg-champagne', image: '/images/ueno.jpg' },
  { name: '李飞飞', title: 'AI科学家', category: '领域破壁者', color: 'bg-moss', image: '/images/lifeifei.jpg' },
  { name: '梅耶·马斯克', title: '模特、营养师', category: '行动启发者', color: 'bg-champagne', image: '/images/mayemusk.jpg' },
  { name: '塔拉·韦斯特弗', title: '历史学家', category: '行动启发者', color: 'bg-champagne', image: '/images/tarawestover.jpg' },
  { name: 'Greta Thunberg', title: '环保活动家', category: '新生代思想者', color: 'bg-moss', image: '/images/gretathunberg.jpg' },
  { name: 'Amanda Gorman', title: '诗人', category: '新生代思想者', color: 'bg-moss', image: '/images/amandagorman.jpg' },
];

function RoleModelsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <FadeInSection>
        <div className="flex items-start gap-4 mb-10">
          <div className="w-12 h-12 rounded-xl bg-white/[0.07] flex items-center justify-center flex-shrink-0 mt-1">
            <Sparkles className="w-6 h-6 text-champagne" />
          </div>
          <div>
            <span className="font-label text-xs tracking-[0.2em] uppercase text-white/40 block mb-2">
              榜样人物
            </span>
            <h2 className="font-serif text-3xl text-white">
              找到你的觉醒向导
            </h2>
          </div>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {roleModels.map((model, index) => (
          <motion.div
            key={model.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer bg-neutral-900 border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
          >
            {/* Color band */}
            <div className={`${model.color} h-10 transition-all duration-300 group-hover:h-16`} />

            {/* Avatar */}
            <div className="relative z-10 -mt-12 mx-auto w-20 h-20 rounded-full border-4 border-neutral-900 overflow-hidden">
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Info */}
            <div className="p-4 text-center">
              <h3 className="font-serif text-lg text-white">{model.name}</h3>
              <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{model.title}</p>
              <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full bg-white/[0.07]">
                <span className="text-xs text-white/60">{model.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <button
          onClick={() => document.getElementById('mbti-gallery')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-secondary text-primary rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors shadow-lg shadow-secondary/20"
        >
          <span>查看全部 100+ 榜样</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
