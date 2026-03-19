import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { allPersonalities } from '@/data/personalities';
import { ChevronLeft, ChevronRight, X, Sparkles, BookOpen, Target, Lightbulb } from 'lucide-react';

// MBTI类型颜色映射
const mbtiColors: Record<string, string> = {
  "INTJ": "#4A6741", "INTP": "#5A7751", "ENTJ": "#6A8761", "ENTP": "#7A9771",
  "INFJ": "#8B4A5C", "INFP": "#9B5A6C", "ENFJ": "#AB6A7C", "ENFP": "#BB7A8C",
  "ISTJ": "#4A5C8B", "ISFJ": "#5A6C9B", "ESTJ": "#6A7CAB", "ESFJ": "#7A8CBB",
  "ISTP": "#8B6A4A", "ISFP": "#9B7A5A", "ESTP": "#AB8A6A", "ESFP": "#BB9A7A"
};

// 人物头像映射
const womanAvatars: Record<string, string> = {
  "jane-austen": "/images/jane-austen.jpg",
  "jk-rowling": "/images/jk-rowling.jpg",
  "eileen-gu": "/images/eileen-gu.jpg",
  "marie-curie": "/images/marie-curie.jpg",
  "hannah-arendt": "/images/hannah-arendt.jpg",
  "margaret-atwood": "/images/margaret-atwood.jpg",
  "sheryl-sandberg": "/images/sheryl-sandberg.jpg",
  "margaret-thatcher": "/images/margaret-thatcher.jpg",
  "ayn-rand": "/images/ayn-rand.jpg",
  "simone-de-beauvoir": "/images/simone-de-beauvoir.jpg",
  "audrey-hepburn": "/images/audrey-hepburn.jpg",
  "virginia-woolf": "/images/virginia-woolf.webp",
  "emily-dickinson": "/images/emily-dickinson.jpg",
  "oprah-winfrey": "/images/oprah-winfrey.jpg",
  "maya-angelou": "/images/maya-angelou.jpg",
  "annie-ernaux": "/images/annie-ernaux.jpg",
  "condoleezza-rice": "/images/condoleezza-rice.jpg",
  "mother-teresa": "/images/mother-teresa.jpg",
  "sonia-sotomayor": "/images/sonia-sotomayor.jpg",
  "adele": "/images/adele.jpg",
  "amelia-earhart": "/images/amelia-earhart.jpg",
  "coco-chanel": "/images/coco-chanel.jpg",
  "frida-kahlo": "/images/frida-kahlo.jpg",
  "madonna": "/images/madonna.jpg",
  "katharine-hepburn": "/images/katharine-hepburn.jpg",
  "marilyn-monroe": "/images/marilyn-monroe.jpg",
};

// 获取默认MBTI类型（从localStorage或默认INTJ）
const getDefaultType = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('mbtiType') || 'INTJ';
  }
  return 'INTJ';
};

// 去重后的 MBTI 类型列表（保持原始顺序）
const uniquePersonalities = (() => {
  const seen = new Set<string>();
  return allPersonalities.filter(p => {
    if (seen.has(p.type)) return false;
    seen.add(p.type);
    return true;
  });
})();

export function MBTIGallery() {
  const [activeType, setActiveType] = useState(0);
  const [selectedWoman, setSelectedWoman] = useState<typeof allPersonalities[0]['women'][0] | null>(null);
  const [activeWomanIndex, setActiveWomanIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const womanScrollRef = useRef<HTMLDivElement>(null);

  // 初始化定位到用户测试的类型
  useEffect(() => {
    const defaultType = getDefaultType();
    const index = allPersonalities.findIndex(p => p.type === defaultType);
    if (index >= 0) {
      setActiveType(index);
    }
  }, []);

  // 点击事件轴定位
  const handleTypeClick = (index: number) => {
    setActiveType(index);
    setActiveWomanIndex(0);
    if (scrollRef.current) {
      const typeElement = scrollRef.current.children[index] as HTMLElement;
      if (typeElement) {
        typeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // 切换人物
  const changeWoman = (direction: 'prev' | 'next') => {
    const currentPersonality = uniquePersonalities[activeType];
    const newIndex = direction === 'next'
      ? (activeWomanIndex + 1) % currentPersonality.women.length
      : (activeWomanIndex - 1 + currentPersonality.women.length) % currentPersonality.women.length;
    
    setActiveWomanIndex(newIndex);
    if (womanScrollRef.current) {
      const womanElement = womanScrollRef.current.children[newIndex] as HTMLElement;
      if (womanElement) {
        womanElement.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  };

  const currentPersonality = uniquePersonalities[activeType];
  const color = mbtiColors[currentPersonality.type] || '#242422';

  return (
    <>
      <section id="mbti-gallery" key={`mbti-${activeType}`} className="min-h-screen bg-background flex">
        {/* 左侧事件轴 - MBTI类型导航 */}
        <div className="w-20 md:w-28 bg-neutral-900 border-r border-white/10 flex flex-col items-center py-8 sticky top-0 h-screen overflow-y-auto scrollbar-hide">
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.15em] text-white/60 uppercase writing-vertical">
              16种人格
            </span>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            {uniquePersonalities.map((p, index) => {
              const isActive = index === activeType;
              const pColor = mbtiColors[p.type];
              return (
                <button
                  key={p.type}
                  onClick={() => handleTypeClick(index)}
                  className={`relative w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary text-primary shadow-lg'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <span className="font-display text-sm font-bold">{p.type}</span>
                  {isActive && (
                    <motion.div
                      layoutId="mbtiIndicator"
                      className="absolute -right-1 w-1 h-6 rounded-full"
                      style={{ backgroundColor: pColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 当前类型指示 */}
          <div className="mt-6 text-center">
            <span className="text-white/60 text-xs">{activeType + 1}/{uniquePersonalities.length}</span>
          </div>
        </div>

        {/* 右侧内容区 */}
        <div className="flex-1 flex flex-col">
          {/* 类型信息头部 */}
          <div className="px-8 py-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-lg flex items-center justify-center bg-secondary text-primary">
                <span className="font-display text-2xl font-bold">
                  {currentPersonality.type}
                </span>
              </div>
              <div className="flex-1 ml-4">
                <h2 className="font-serif text-3xl text-white">
                  {currentPersonality.name}
                </h2>
                <p className="text-white/60 text-sm mt-2">{currentPersonality.description}</p>
              </div>
            </div>

            {/* 特质标签 */}
            <div className="mt-4">
              <p className="text-xs text-white/40">
                {currentPersonality.traits.strengths.map((trait, i) => (
                  <span key={i}>
                    {trait}
                    {i < currentPersonality.traits.strengths.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* 人物大卡滑动区 */}
          <div className="flex-1 p-8 overflow-hidden">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xs tracking-widest uppercase text-white/60">
                代表榜样 ({currentPersonality.women.length}位)
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => changeWoman('prev')}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => changeWoman('next')}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* 人物卡片滑动容器 */}
            <div 
              ref={womanScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            >
              {currentPersonality.women.map((woman, index) => {
                const avatarUrl = womanAvatars[woman.id];
                return (
                  <motion.div
                    key={woman.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedWoman(woman)}
                    className={`flex-shrink-0 w-[320px] md:w-[400px] snap-center cursor-pointer transition-all duration-300 ${
                      index === activeWomanIndex ? 'scale-100' : 'scale-95 opacity-70'
                    }`}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      {/* 图片区域 */}
                      <div className="pt-12 pb-6 flex flex-col items-center">
                        {/* 头像 */}
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                          {avatarUrl ? (
                            <img
                              src={avatarUrl}
                              alt={woman.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : null}
                          {/* 如果没有图片或加载失败，显示首字母 */}
                          <div className="w-full h-full flex items-center justify-center bg-secondary">
                            <span className="text-white font-display text-3xl">{woman.name.charAt(0)}</span>
                          </div>
                        </div>
                        {/* 姓名和身份 */}
                        <div className="text-center">
                          <h4 className="font-serif text-xl text-neutral-900">{woman.name}</h4>
                          <p className="text-xs text-neutral-500 mt-1">{woman.title}</p>
                        </div>
                      </div>

                      {/* 内容区域 */}
                      <div className="p-6">
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                          {woman.introduction}
                        </p>
                        
                        {/* 代表作 */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {woman.works.slice(0, 2).map((work, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-neutral-100 rounded text-xs text-neutral-600"
                            >
                              {work}
                            </span>
                          ))}
                        </div>

                        {/* 查看详情 */}
                        <div className="group flex items-center gap-2 text-secondary font-medium text-sm hover:underline cursor-pointer">
                          <span>查看详情</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* 人物指示器 */}
            <div className="flex justify-center gap-2 mt-4">
              {currentPersonality.women.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveWomanIndex(index);
                    if (womanScrollRef.current) {
                      const element = womanScrollRef.current.children[index] as HTMLElement;
                      element?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeWomanIndex
                      ? 'w-6'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                  style={{ backgroundColor: index === activeWomanIndex ? color : undefined }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 人物详情弹窗 */}
      <AnimatePresence>
        {selectedWoman && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#242422]/90 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen p-6 md:p-12">
              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedWoman(null)}
                className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="max-w-4xl mx-auto">
                {/* 头部 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-12"
                >
                  <div className="flex items-start gap-6">
                    {/* 头像 */}
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                      {womanAvatars[selectedWoman.id] ? (
                        <img
                          src={womanAvatars[selectedWoman.id]}
                          alt={selectedWoman.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      ) : null}
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: color }}
                      >
                        <span className="text-white font-display text-4xl">{selectedWoman.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="font-display text-5xl text-white mb-2">
                        {selectedWoman.name}
                      </h2>
                      <p className="text-white/60 text-xl">{selectedWoman.title}</p>
                    </div>
                  </div>
                </motion.div>

                {/* 内容网格 */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* 人物介绍 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white/5 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-white/60" />
                      <h3 className="font-label text-xs tracking-[0.15em] text-white/60 uppercase">
                        人物介绍
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {selectedWoman.introduction}
                    </p>
                  </motion.div>

                  {/* 方法论 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/5 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-white/60" />
                      <h3 className="font-label text-xs tracking-[0.15em] text-white/60 uppercase">
                        方法论
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {selectedWoman.methodology}
                    </p>
                  </motion.div>

                  {/* 认知体系 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/5 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-5 h-5 text-white/60" />
                      <h3 className="font-label text-xs tracking-[0.15em] text-white/60 uppercase">
                        认知体系
                      </h3>
                    </div>
                    <p className="text-white/80 leading-relaxed">
                      {selectedWoman.cognition}
                    </p>
                  </motion.div>

                  {/* 代表作 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white/5 rounded-2xl p-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="w-5 h-5 text-white/60" />
                      <h3 className="font-label text-xs tracking-[0.15em] text-white/60 uppercase">
                        代表作
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedWoman.works.map((work, i) => (
                        <span 
                          key={i}
                          className="px-3 py-2 bg-white/10 rounded-lg text-white/80 text-sm"
                        >
                          {work}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* 行动建议 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 bg-white rounded-2xl p-8"
                >
                  <h3 className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase mb-4">
                    从{selectedWoman.name}身上学到的
                  </h3>
                  <p className="text-[#242422] text-lg leading-relaxed">
                    {selectedWoman.name}的方法论告诉我们：{selectedWoman.methodology.slice(0, 50)}...
                    你可以从今天开始，尝试将她的理念应用到自己的生活中。
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
