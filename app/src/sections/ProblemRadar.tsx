import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInSection } from '@/components/FadeInSection';
import { ProblemDetail } from '@/components/ProblemDetail';
import { problems } from '@/data/problems';
import { problemDetails } from '@/data/problemDetail';
import { Search, Heart, Brain, BookOpen, ShoppingBag, Activity, Compass, Scale, ChevronRight, Sparkles } from 'lucide-react';

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

// 榜样人物数据
const roleModels = [
  { name: "王潇", title: "趁早品牌创始人", category: "体系构建者", color: "bg-burgundy", image: "/images/wangxiao.jpg" },
  { name: "崔璀", title: "优势管理导师", category: "体系构建者", color: "bg-burgundy", image: "/images/cuicui.jpg" },
  { name: "上野千鹤子", title: "女性主义学者", category: "文化洞察者", color: "bg-champagne", image: "/images/ueno.jpg" },
  { name: "李飞飞", title: "AI科学家", category: "领域破壁者", color: "bg-moss", image: "/images/lifeifei.jpg" },
  { name: "梅耶·马斯克", title: "模特、营养师", category: "行动启发者", color: "bg-champagne", image: "/images/mayemusk.jpg" },
  { name: "塔拉·韦斯特弗", title: "历史学家", category: "行动启发者", color: "bg-champagne", image: "/images/tarawestover.jpg" },
  { name: "Greta Thunberg", title: "环保活动家", category: "新生代思想者", color: "bg-moss", image: "/images/gretathunberg.jpg" },
  { name: "Amanda Gorman", title: "诗人", category: "新生代思想者", color: "bg-moss", image: "/images/amandagorman.jpg" },
];

export function ProblemRadar() {
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<typeof roleModels[0] | null>(null);

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

          {/* 问题卡片网格 - 每行3个 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map((problem, index) => {
              const colors = categoryColors[problem.category];
              const detail = problemDetails[problem.id];
              return (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProblem(problem.id)}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-6 cursor-pointer transition-all duration-300 border border-white/10"
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

        {/* 模块二：榜样人物 - 大模块展示 */}
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xs tracking-widest uppercase text-white/60">
                  榜样人物
                </span>
                <h2 className="font-serif text-3xl text-white">
                  找到你的觉醒向导
                </h2>
              </div>
            </div>
          </FadeInSection>

          {/* 榜样人物网格 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {roleModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedModel(model)}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-neutral-900"
              >
                {/* 色带 */}
                <div className={`${model.color} h-8 transition-all duration-300 group-hover:h-12 rounded-t-xl`} />
                {/* 头像 */}
                <div className="relative z-10 -mt-10 mx-auto w-20 h-20 rounded-full border-4 border-neutral-900 overflow-hidden transition-all duration-300 group-hover:grayscale-0 grayscale">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                {/* 内容 */}
                <div className="p-4 text-center">
                  <h4 className="font-serif text-xl text-white">{model.name}</h4>
                  <p className="text-xs text-white/50 uppercase tracking-wider mt-1">{model.title}</p>
                  <div className="inline-flex items-center justify-center mt-3 bg-white/10 rounded-full px-3 py-1">
                    <span className="text-xs text-white">{model.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <div className="text-center mt-8">
            <button
              onClick={() => document.getElementById('mbti-gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors"
            >
              <span>查看全部100+榜样</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Problem Detail Modal */}
      <ProblemDetail 
        problemId={selectedProblem} 
        isOpen={!!selectedProblem} 
        onClose={() => setSelectedProblem(null)} 
      />

      {/* Role Model Modal */}
      {selectedModel && (
        <div 
          className="fixed inset-0 z-50 bg-[#242422]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedModel(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#fdfaf7] rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img 
                  src={selectedModel.image} 
                  alt={selectedModel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl text-[#242422]">{selectedModel.name}</h3>
                <p className="text-[#969188]">{selectedModel.title}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-[#f5f3ef] rounded-full text-xs text-[#969188]">
                  {selectedModel.category}
                </span>
              </div>
            </div>
            <button
              onClick={() => setSelectedModel(null)}
              className="w-full py-3 bg-[#242422] text-[#f5f3ef] rounded-full hover:bg-[#3a3a38] transition-colors"
            >
              关闭
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
