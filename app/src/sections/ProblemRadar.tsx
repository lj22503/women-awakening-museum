import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/FadeInSection';
import { ProblemDetail } from '@/components/ProblemDetail';
import { problems } from '@/data/problems';
import { problemDetails } from '@/data/problemDetail';
import { Search, Heart, Brain, BookOpen, ShoppingBag, Activity, Compass, Scale, ChevronRight } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "自我认知": <Search className="w-5 h-5" />,
  "经济独立": <Scale className="w-5 h-5" />,
  "权利觉醒": <Heart className="w-5 h-5" />,
  "情感边界": <Brain className="w-5 h-5" />,
  "教育成长": <BookOpen className="w-5 h-5" />,
  "消费觉醒": <ShoppingBag className="w-5 h-5" />,
  "身心健康": <Activity className="w-5 h-5" />,
  "生命意义": <Compass className="w-5 h-5" />
};

const categoryColors: Record<string, { bg: string; light: string; text: string }> = {
  "自我认知": { bg: "bg-burgundy/30", light: "bg-burgundy/10", text: "text-burgundy" },
  "经济独立": { bg: "bg-champagne/30", light: "bg-champagne/10", text: "text-champagne" },
  "权利觉醒": { bg: "bg-moss/30", light: "bg-moss/10", text: "text-moss" },
  "情感边界": { bg: "bg-burgundy/30", light: "bg-burgundy/10", text: "text-burgundy" },
  "教育成长": { bg: "bg-champagne/30", light: "bg-champagne/10", text: "text-champagne" },
  "消费觉醒": { bg: "bg-moss/30", light: "bg-moss/10", text: "text-moss" },
  "身心健康": { bg: "bg-burgundy/30", light: "bg-burgundy/10", text: "text-burgundy" },
  "生命意义": { bg: "bg-champagne/30", light: "bg-champagne/10", text: "text-champagne" }
};

// 榜样人物数据 — 已迁移至 ProblemDetail 组件中动态读取 allPersonalities
// 人物数据通过 problemDetails[problem.id].women 关联，在弹窗中展示

export function ProblemRadar() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

  return (
    <>
      <section id="problem-radar" className="py-20 bg-background">
        {/* 模块一：问题探索 - 网格展示 */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Search className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-white/60">
                  问题探索
                </span>
                <h2 className="font-serif text-3xl text-white">
                  你正在寻找什么答案？
                </h2>
              </div>
            </div>
            <p className="text-white/60 max-w-xl mb-8">
              点击深入了解每个问题的本质与解法
            </p>
          </FadeInSection>

          {/* 问题卡片网格 - 交错排列增加扫描节奏 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((problem, index) => {
              const colors = categoryColors[problem.category];
              const detail = problemDetails[problem.id];
              // 交错布局：让第2、5、8张卡片略高，增加扫描节奏感
              const isTall = index === 1 || index === 4 || index === 7;
              return (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProblem(problem.id)}
                  className={`bg-white/5 hover:bg-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 border border-white/10 ${isTall ? 'lg:row-span-2' : ''}`}
                >
                  {/* 分类标签 */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bg} mb-4`}>
                    <span className={colors.text}>{categoryIcons[problem.category]}</span>
                    <span className={`font-label text-xs tracking-wider uppercase ${colors.text}`}>
                      {problem.category}
                    </span>
                  </div>

                  {/* 问题 */}
                  <h3 className="font-serif text-lg text-white font-medium mb-4 leading-snug">
                    {problem.question}
                  </h3>

                  {/* 核心本质预览 */}
                  {detail && (
                    <p className="text-sm text-white/60 mt-2 leading-relaxed line-clamp-3 mb-4">
                      {detail.coreEssence}
                    </p>
                  )}

                  {/* 查看详情 */}
                  <div className="group flex items-center gap-2 text-secondary text-xs hover:underline cursor-pointer">
                    <span>寻找答案</span>
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Detail Modal */}
      <ProblemDetail 
        problemId={selectedProblem} 
        isOpen={!!selectedProblem} 
        onClose={() => setSelectedProblem(null)} 
      />
    </>
  );
}
