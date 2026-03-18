import { motion } from 'framer-motion';
import { problemDetails, type ProblemDetail } from '@/data/problemDetail';
import { Button } from '@/components/ui/button';
import { X, ChevronRight, BookOpen, Target, AlertTriangle, Lightbulb, Calendar, Search, Eye, Link2, Brain, Star, User } from 'lucide-react';

interface ProblemDetailProps {
  problemId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProblemDetail({ problemId, isOpen, onClose }: ProblemDetailProps) {
  if (!isOpen || !problemId) return null;

  const detail = problemDetails[problemId];
  if (!detail) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#242422]/80 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        className="min-h-screen bg-[#fdfaf7]"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#fdfaf7]/95 backdrop-blur-md border-b border-[#e0ddd5]">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <span className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase">
                {detail.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#f5f3ef] rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-[#969188]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="font-display text-3xl md:text-4xl text-[#242422] mb-6 leading-tight">
              {detail.question}
            </h1>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#f5f3ef] rounded-full text-sm text-[#969188]">
                {detail.category}
              </span>
            </div>
          </motion.div>

          {/* Core Problem */}
          <Section icon={BookOpen} title="核心问题提炼" delay={0.2}>
            <div className="bg-[#f5f3ef] rounded-xl p-6 space-y-4">
              <div>
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                  表面问题
                </span>
                <p className="text-[#242422]">{detail.surfaceProblem}</p>
              </div>
              <div>
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                  深层本质
                </span>
                <p className="text-[#242422]">{detail.coreEssence}</p>
              </div>
              <div>
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                  核心矛盾
                </span>
                <p className="text-[#242422]">{detail.coreConflict}</p>
              </div>
            </div>
          </Section>

          {/* Scope */}
          <Section icon={Target} title="问题范围界定" delay={0.3}>
            <div className="space-y-4">
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                  具体范围
                </span>
                <p className="text-[#242422]">{detail.scope.range}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#f5f3ef] rounded-xl p-6">
                  <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                    关键要素
                  </span>
                  <ul className="space-y-2">
                    {detail.scope.keyElements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#242422]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#242422] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#f5f3ef] rounded-xl p-6">
                  <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                    边界说明
                  </span>
                  <p className="text-[#242422]">{detail.scope.boundary}</p>
                </div>
              </div>
            </div>
          </Section>

          {/* Success Goals */}
          <Section icon={Star} title="成功目标设定" delay={0.4}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                  可衡量指标
                </span>
                <ul className="space-y-2">
                  {detail.successGoals.measurable.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#242422]">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#242422] text-[#f5f3ef] text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                  验证方式
                </span>
                <ul className="space-y-2">
                  {detail.successGoals.validation.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#242422]">
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Risks */}
          <Section icon={AlertTriangle} title="风险挑战识别" delay={0.5}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                  主要障碍
                </span>
                <ul className="space-y-2">
                  {detail.risks.obstacles.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#242422]">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#969188] text-[#f5f3ef] text-xs flex items-center justify-center">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                  典型困境
                </span>
                <ul className="space-y-2">
                  {detail.risks.scenarios.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#242422]">
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Solution */}
          <Section icon={Lightbulb} title="解决方案制定" delay={0.6}>
            <div className="bg-[#242422] rounded-xl p-6 mb-6">
              <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                核心策略
              </span>
              <p className="text-[#f5f3ef] text-lg">{detail.solution.strategy}</p>
            </div>
            <div className="space-y-4">
              {detail.solution.steps.map((step, i) => (
                <div key={i} className="bg-[#f5f3ef] rounded-xl p-6">
                  <h4 className="font-display text-lg text-[#242422] mb-3">
                    {step.title}
                  </h4>
                  <ul className="space-y-2">
                    {step.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#242422]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#242422] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>

          {/* Action Plan */}
          <Section icon={Calendar} title="行动计划规划" delay={0.7}>
            <div className="space-y-4">
              {Object.entries(detail.actionPlan.weekly).map(([week, action], i) => (
                <div key={i} className="bg-[#f5f3ef] rounded-xl p-6">
                  <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-2">
                    {week}
                  </span>
                  <p className="text-[#242422]">{action}</p>
                </div>
              ))}
              <div className="bg-[#f5f3ef] rounded-xl p-6">
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase block mb-3">
                  迭代机制
                </span>
                <ul className="space-y-2">
                  {detail.actionPlan.iteration.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#242422]">
                      <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* Multi-dimensional Analysis */}
          <Section icon={Search} title="多维度思维分析" delay={0.8}>
            {/* Facts */}
            <div className="bg-[#f5f3ef] rounded-xl p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Search className="w-5 h-5 text-[#969188]" />
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase">
                  事实依据
                </span>
              </div>
              <div className="space-y-3">
                {detail.facts.psychology && (
                  <p className="text-[#242422]"><span className="text-[#969188]">心理学研究：</span>{detail.facts.psychology}</p>
                )}
                {detail.facts.survey && (
                  <p className="text-[#242422]"><span className="text-[#969188]">社会调查：</span>{detail.facts.survey}</p>
                )}
                {detail.facts.neuroscience && (
                  <p className="text-[#242422]"><span className="text-[#969188]">神经科学：</span>{detail.facts.neuroscience}</p>
                )}
                {detail.facts.cases && (
                  <p className="text-[#242422]"><span className="text-[#969188]">现实案例：</span>{detail.facts.cases}</p>
                )}
              </div>
            </div>

            {/* Perspectives */}
            <div className="bg-[#f5f3ef] rounded-xl p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-[#969188]" />
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase">
                  多维视角
                </span>
              </div>
              <ul className="space-y-2">
                {detail.perspectives.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#242422]">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Connections */}
            <div className="bg-[#f5f3ef] rounded-xl p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Link2 className="w-5 h-5 text-[#969188]" />
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase">
                  关联分析
                </span>
              </div>
              <ul className="space-y-2">
                {detail.connections.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#242422]">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Assumptions */}
            <div className="bg-[#f5f3ef] rounded-xl p-6 mb-4">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-[#969188]" />
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase">
                  合理推论
                </span>
              </div>
              <ul className="space-y-2">
                {detail.assumptions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#242422]">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#969188] text-[#f5f3ef] text-xs flex items-center justify-center">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Importance */}
            <div className="bg-[#242422] rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-[#969188]" />
                <span className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase">
                  重要性评估
                </span>
              </div>
              <ul className="space-y-2">
                {detail.importance.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#f5f3ef]">
                    <ChevronRight className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#969188]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* Women Role Models */}
          <Section icon={User} title="榜样人物" delay={0.9}>
            <div className="grid md:grid-cols-3 gap-4">
              {detail.women.map((woman, i) => (
                <div key={i} className="bg-[#f5f3ef] rounded-xl p-6">
                  <div className="w-12 h-12 rounded-full bg-[#242422] flex items-center justify-center mb-4">
                    <span className="text-[#f5f3ef] font-display text-lg">
                      {woman.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-display text-lg text-[#242422] mb-1">
                    {woman.name}
                  </h4>
                  <p className="text-sm text-[#969188] mb-3">{woman.title}</p>
                  <p className="text-sm text-[#242422] mb-2">{woman.methodology}</p>
                  <p className="text-xs text-[#969188]">{woman.work}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Micro Habit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-[#242422] rounded-xl p-8 text-center"
          >
            <span className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase block mb-4">
              今日觉醒行动卡
            </span>
            <p className="text-[#f5f3ef] text-xl md:text-2xl font-display mb-4">
              {detail.microHabit.action}
            </p>
            <p className="text-[#969188]">
              —— {detail.microHabit.source}
            </p>
          </motion.div>

          {/* Footer */}
          <div className="flex justify-center pt-8 pb-12">
            <Button
              onClick={onClose}
              className="bg-[#242422] text-[#f5f3ef] hover:bg-[#3a3a38] rounded-full px-8 py-6"
            >
              返回问题雷达
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Section({ 
  icon: Icon, 
  title, 
  children, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  children: React.ReactNode; 
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#f5f3ef] flex items-center justify-center">
          <Icon className="w-5 h-5 text-[#242422]" />
        </div>
        <h2 className="font-display text-2xl text-[#242422]">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}
