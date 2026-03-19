import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { exhibitionHalls, type Hall } from '@/data/exhibitionHalls';
import { ChevronRight, X, BookOpen, Layers, Lightbulb, Heart, Zap } from 'lucide-react';

const hallIcons: Record<string, React.ElementType> = {
  "system-builders": BookOpen,
  "boundary-breakers": Layers,
  "culture-observers": Lightbulb,
  "action-inspirers": Heart,
  "new-generation": Zap
};

const hallColors: Record<string, string> = {
  "system-builders": "#722F37", // burgundy
  "boundary-breakers": "#6B8E6B", // moss
  "culture-observers": "#C9B037", // champagne
  "action-inspirers": "#C9B037", // champagne
  "new-generation": "#6B8E6B" // moss
};

// 头像浮动位置配置（只显示3个核心人物）
const avatarPositions = [
  { top: '30%', left: '20%', size: 90 },
  { top: '50%', left: '50%', size: 100 },
  { top: '70%', left: '80%', size: 85 },
];

export function ExhibitionHalls() {
  const [activeHall, setActiveHall] = useState(0);
  const [selectedWoman, setSelectedWoman] = useState<Hall['women'][0] | null>(null);
  const [selectedHall, setSelectedHall] = useState<Hall | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 点击事件轴定位
  const handleHallClick = (index: number) => {
    setActiveHall(index);
    if (scrollRef.current) {
      const typeElement = scrollRef.current.children[index] as HTMLElement;
      if (typeElement) {
        typeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / window.innerWidth);
        if (newIndex !== activeHall && newIndex >= 0 && newIndex < exhibitionHalls.length) {
          setActiveHall(newIndex);
        }
      }
    };

    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScroll, { passive: true });
      return () => ref.removeEventListener('scroll', handleScroll);
    }
  }, [activeHall]);

  return (
    <>
      <section id="exhibition-halls" className="relative h-screen bg-background overflow-hidden">
        {/* 左侧事件轴导航 */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-24 bg-background/90 backdrop-blur-md z-20 flex flex-col items-center justify-center border-r border-white/10">
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <span className="font-label text-[10px] tracking-[0.2em] text-white/50 uppercase writing-vertical">
              五大展厅
            </span>
          </div>
          
          <div className="flex flex-col gap-6">
            {exhibitionHalls.map((hall, index) => {
              const HallIcon = hallIcons[hall.id];
              const isActive = index === activeHall;
              return (
                <button
                  key={hall.id}
                  onClick={() => handleHallClick(index)}
                  className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-white text-[#242422]' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <HallIcon className="w-5 h-5" />
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -right-3 w-1 h-8 bg-white rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* 进度指示 */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-sm font-display">
              {activeHall + 1} / {exhibitionHalls.length}
            </span>
            <div className="w-1 h-16 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="w-full bg-white rounded-full"
                animate={{ height: `${((activeHall + 1) / exhibitionHalls.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* 横屏滚动内容区 */}
        <div 
          ref={scrollRef}
          className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex h-full" style={{ width: `${exhibitionHalls.length * 100}%` }}>
            {exhibitionHalls.map((hall, index) => {
              const HallIcon = hallIcons[hall.id];
              const color = hallColors[hall.id];
              
              return (
                <div
                  key={hall.id}
                  className="h-full flex-shrink-0 snap-center"
                  style={{ width: '100vw', paddingLeft: '96px' }}
                >
                  <div className="h-full flex">
                    {/* 左侧内容 */}
                    <div className="flex-[4] flex flex-col justify-center px-8 md:px-16 py-12 max-w-2xl">
                      {/* 展厅标签 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: activeHall === index ? 1 : 0, y: activeHall === index ? 0 : 20 }}
                        className="flex items-center gap-3 mb-6"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: color }}
                        >
                          <HallIcon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xs tracking-widest uppercase text-secondary">
                          {hall.subtitle}
                        </span>
                      </motion.div>

                      {/* 标题 */}
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeHall === index ? 1 : 0, y: activeHall === index ? 0 : 30 }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-4xl md:text-6xl text-white mb-6"
                      >
                        {hall.title}
                      </motion.h2>

                      {/* 描述 */}
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeHall === index ? 1 : 0, y: activeHall === index ? 0 : 30 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 text-lg mb-8 leading-relaxed"
                      >
                        {hall.description}
                      </motion.p>

                      {/* 视觉风格 */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeHall === index ? 1 : 0, y: activeHall === index ? 0 : 30 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 mb-8"
                      >
                        <span className="text-white/40 text-sm">视觉风格：</span>
                        <span className="text-white/60 text-sm">{hall.visualStyle}</span>
                      </motion.div>

                      {/* 进入展厅按钮 */}
                      <motion.button
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: activeHall === index ? 1 : 0, y: activeHall === index ? 0 : 30 }}
                        transition={{ delay: 0.4 }}
                        onClick={() => setSelectedHall(hall)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors w-fit"
                      >
                        <span className="font-medium">进入展厅</span>
                        <ChevronRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* 右侧 - 头像脑图状浮动展示 */}
                    <div className="hidden lg:flex flex-[6] items-center justify-center relative">
                      <div className="relative w-[500px] h-[500px]">
                        {/* 中心圆 */}
                        <motion.div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: color }}
                          initial={{ scale: 0 }}
                          animate={{ scale: activeHall === index ? 1 : 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <HallIcon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        {/* 连接线 */}
                        <svg className="absolute inset-0 w-full h-full">
                          {hall.women.slice(0, 3).map((_, i) => {
                            const pos = avatarPositions[i];
                            const centerX = 250;
                            const centerY = 250;
                            const endX = parseInt(pos.left) * 5 + pos.size / 2;
                            const endY = parseInt(pos.top) * 5 + pos.size / 2;
                            return (
                              <motion.line
                                key={i}
                                x1={centerX}
                                y1={centerY}
                                x2={endX}
                                y2={endY}
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: activeHall === index ? 1 : 0 }}
                                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                              />
                            );
                          })}
                        </svg>

                        {/* 浮动头像 */}
                        {hall.women.slice(0, 3).map((woman, i) => {
                          const pos = avatarPositions[i];
                          return (
                            <motion.div
                              key={woman.name}
                              className="absolute rounded-full overflow-hidden cursor-pointer border-2 border-white/30 hover:border-white hover:scale-110 transition-all"
                              style={{
                                top: pos.top,
                                left: pos.left,
                                width: pos.size,
                                height: pos.size,
                              }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ 
                                opacity: activeHall === index ? 1 : 0, 
                                scale: activeHall === index ? 1 : 0 
                              }}
                              transition={{ delay: 0.6 + i * 0.1 }}
                              onClick={() => setSelectedWoman(woman)}
                              title={woman.name}
                            >
                              <img
                                src={`/images/${woman.image.split('/').pop()}`}
                                alt={woman.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // 如果图片加载失败，显示首字母
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.style.backgroundColor = color;
                                    parent.style.display = 'flex';
                                    parent.style.alignItems = 'center';
                                    parent.style.justifyContent = 'center';
                                    const span = document.createElement('span');
                                    span.className = 'text-white font-display text-xl';
                                    span.textContent = woman.name.charAt(0);
                                    parent.appendChild(span);
                                  }
                                }}
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 滑动提示 */}
        <div className="absolute bottom-8 right-8 text-white/40 text-sm flex items-center gap-2">
          <span>左右滑动浏览</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </section>

      {/* 展厅详情弹窗 */}
      <AnimatePresence>
        {selectedHall && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#242422]/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen p-6 md:p-12">
              {/* 关闭按钮 */}
              <button
                onClick={() => setSelectedHall(null)}
                className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* 展厅标题 */}
              <div className="max-w-6xl mx-auto mb-16">
                <span className="font-label text-xs tracking-[0.2em] text-white/50 uppercase mb-4 block">
                  {selectedHall.subtitle}
                </span>
                <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
                  {selectedHall.title}
                </h2>
                <p className="text-white/70 text-xl max-w-2xl">
                  {selectedHall.description}
                </p>
              </div>

              {/* 人物卡片网格 */}
              <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedHall.women.map((woman, index) => (
                  <motion.div
                    key={woman.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedWoman(woman)}
                    className="bg-white/5 rounded-2xl overflow-hidden cursor-pointer hover:bg-white/10 transition-colors"
                  >
                    {/* 头像区域 */}
                    <div className="h-48 bg-gradient-to-br from-white/10 to-white/5 flex items-end p-6 relative">
                      <div className="absolute top-4 right-4 w-20 h-20 rounded-full overflow-hidden border-2 border-white/30">
                        <img
                          src={`/images/${woman.image.split('/').pop()}`}
                          alt={woman.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="text-white">
                        <h4 className="font-display text-xl">{woman.name}</h4>
                        <p className="text-sm text-white/60">{woman.title}</p>
                      </div>
                    </div>
                    
                    {/* 内容区域 */}
                    <div className="p-6">
                      <p className="text-white/40 text-sm mb-3">{woman.work}</p>
                      <p className="text-white/60 text-sm italic line-clamp-2">
                        "{woman.quote}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 人物详情弹窗 */}
      <AnimatePresence>
        {selectedWoman && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#fdfaf7] overflow-y-auto"
          >
            <div className="min-h-screen">
              {/* 头部 */}
              <div className="sticky top-0 bg-[#fdfaf7]/95 backdrop-blur-md border-b border-[#e0ddd5] z-10">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedWoman(null)}
                    className="flex items-center gap-2 text-[#969188] hover:text-[#242422] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 rotate-180" />
                    <span>返回</span>
                  </button>
                </div>
              </div>

              {/* 内容 */}
              <div className="max-w-4xl mx-auto px-6 py-12">
                {/* 人物信息 */}
                <div className="flex items-start gap-6 mb-12">
                  <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={`/images/${selectedWoman.image.split('/').pop()}`}
                      alt={selectedWoman.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-4xl text-[#242422] mb-2">
                      {selectedWoman.name}
                    </h2>
                    <p className="text-[#969188] text-lg mb-2">{selectedWoman.title}</p>
                    <p className="text-[#969188]">{selectedWoman.work}</p>
                  </div>
                </div>

                {/* 金句 */}
                <div className="bg-[#242422] rounded-2xl p-8 mb-8">
                  <p className="text-[#f5f3ef] text-2xl font-display italic leading-relaxed">
                    "{selectedWoman.quote}"
                  </p>
                </div>

                {/* 方法论 */}
                <div className="mb-8">
                  <h3 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-4">
                    方法论
                  </h3>
                  <p className="text-[#242422] text-lg leading-relaxed">
                    {selectedWoman.methodology}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
