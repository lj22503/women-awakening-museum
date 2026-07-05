import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { exhibitionHalls, type Hall } from '../data/exhibitionHalls';

// 人物详情组件（统一详情卡片）
interface WomanDetailProps {
  woman: Hall['women'][0] & { id?: string; introduction?: string; cognition?: string; works?: string[] };
  onClose: () => void;
}

function WomanDetail({ woman, onClose }: WomanDetailProps) {
  return (
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
              onClick={onClose}
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
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-[#e0ddd5]">
              {woman.image ? (
                <img
                  src={`/images/${woman.image.split('/').pop()}`}
                  alt={woman.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                      parent.style.backgroundColor = '#C9B037';
                      const span = document.createElement('span');
                      span.className = 'text-white font-display text-3xl fallback-initial';
                      span.textContent = woman.name.charAt(0);
                      parent.appendChild(span);
                    }
                  }}
                  onLoad={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      // hide any fallback initial that might exist
                      const fallback = parent.querySelector('.fallback-initial') as HTMLElement | null;
                      if (fallback) fallback.style.display = 'none';
                    }
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#C9B037]">
                  <span className="text-white font-display text-3xl">{woman.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div>
              <h2 className="font-display text-4xl text-[#242422] mb-2">
                {woman.name}
              </h2>
              <p className="text-[#969188] text-lg mb-1">{woman.title}</p>
              {woman.work && (
                <p className="text-[#969188]">{woman.work}</p>
              )}
            </div>
          </div>

          {/* 引言 */}
          {woman.quote && (
            <div className="bg-[#242422] rounded-2xl p-8 mb-8">
              <p className="text-[#f5f3ef] text-2xl font-display italic leading-relaxed">
                "{woman.quote}"
              </p>
            </div>
          )}

          {/* 方法论 */}
          {woman.methodology && (
            <div className="mb-8">
              <h3 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-4">
                方法论
              </h3>
              <p className="text-[#242422] text-lg leading-relaxed">
                {woman.methodology}
              </p>
            </div>
          )}

          {/* 认知 */}
          {woman.cognition && (
            <div className="mb-8">
              <h3 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-4">
                认知方式
              </h3>
              <p className="text-[#242422] text-lg leading-relaxed">
                {woman.cognition}
              </p>
            </div>
          )}

          {/* 著作 */}
          {woman.works && woman.works.length > 0 && (
            <div className="mb-8">
              <h3 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-4">
                代表作品
              </h3>
              <div className="flex flex-wrap gap-2">
                {woman.works.map((work, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[#e0ddd5] text-[#242422] rounded-full text-sm"
                  >
                    {work}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 简介（兜底） */}
          {woman.introduction && !woman.methodology && (
            <div className="mb-8">
              <h3 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-4">
                简介
              </h3>
              <p className="text-[#242422] text-lg leading-relaxed">
                {woman.introduction}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const HALL_COLORS: Record<string, string> = {
  'system-builders': '#722F37',
  'boundary-breakers': '#6B8E6B',
  'culture-observers': '#C9B037',
  'action-inspirers': '#C9B037',
  'new-generation': '#6B8E6B',
};

// 每个展厅的差异化视觉配置
interface HallVisualConfig {
  cardClass: string;
  headerClass: string;
  avatarClass: string;
  contentClass: string;
  inlineStyle?: React.CSSProperties;
  headerInlineStyle?: React.CSSProperties;
}

function getHallVisualConfig(hallId: string, hallColor: string): HallVisualConfig {
  switch (hallId) {
    case 'system-builders':
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border-l-2',
        headerClass: 'h-48 flex items-end p-6 relative overflow-hidden',
        avatarClass: 'absolute top-4 right-4 w-24 h-24 overflow-hidden border-2 border-white/30 bg-white/10',
        contentClass: 'p-6 border-t border-white/5',
        inlineStyle: { borderLeftColor: hallColor },
        headerInlineStyle: {
          background: `linear-gradient(135deg, ${hallColor}44 0%, ${hallColor}11 50%, transparent 100%)`,
        },
      };
    case 'boundary-breakers':
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 hover:-rotate-1 transition-all duration-300 border border-dashed border-white/15',
        headerClass: 'h-48 flex items-end p-6 relative overflow-hidden',
        avatarClass: 'absolute top-4 right-4 w-24 h-24 overflow-hidden border-2 border-dashed border-white/40 bg-white/10 rotate-3 shadow-lg',
        contentClass: 'p-6 border-t border-dashed border-white/10',
        headerInlineStyle: {
          background: `linear-gradient(135deg, ${hallColor}33 0%, ${hallColor}22 40%, #C9B03722 70%, transparent 100%)`,
        },
      };
    case 'culture-observers':
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/10 hover:scale-[1.02] transition-all duration-300',
        headerClass: 'h-48 flex items-end p-8 relative overflow-hidden',
        avatarClass: 'absolute top-6 right-6 w-20 h-20 overflow-hidden ring-1 ring-offset-2 ring-offset-[#242422] ring-white/30 bg-white/10',
        contentClass: 'px-8 pb-8 pt-4',
        headerInlineStyle: {
          background: `linear-gradient(to bottom, transparent 40%, ${hallColor}15 100%)`,
        },
      };
    case 'action-inspirers':
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 border border-white/10',
        headerClass: 'h-48 flex items-end p-6 pl-10 relative overflow-hidden',
        avatarClass: 'absolute top-4 right-4 w-24 h-24 overflow-hidden ring-2 ring-offset-2 ring-offset-[#242422] ring-white/30 bg-white/10',
        contentClass: 'p-6 pl-10 relative',
        headerInlineStyle: {
          background: `linear-gradient(135deg, ${hallColor}33 0%, ${hallColor}11 100%)`,
        },
      };
    case 'new-generation':
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 border border-white/15',
        headerClass: 'h-48 flex items-end p-6 relative overflow-hidden',
        avatarClass: 'absolute top-4 right-4 w-24 h-24 overflow-hidden ring-2 ring-white/40 bg-white/10',
        contentClass: 'p-6',
        headerInlineStyle: {
          background: `linear-gradient(135deg, #7C3AED44 0%, ${hallColor}33 50%, #06B6D444 100%)`,
        },
      };
    default:
      return {
        cardClass: 'bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/10 hover:scale-[1.02] transition-all duration-300',
        headerClass: 'h-48 flex items-end p-6 relative overflow-hidden',
        avatarClass: 'absolute top-4 right-4 w-24 h-24 overflow-hidden border-2 border-white/30 bg-white/10',
        contentClass: 'p-6',
        headerInlineStyle: {
          background: `linear-gradient(135deg, ${hallColor}33 0%, ${hallColor}11 100%)`,
        },
      };
  }
}

export default function ExhibitionHalls() {
  const [activeHall, setActiveHall] = useState(0);
  const [selectedWoman, setSelectedWoman] = useState<
    (Hall['women'][0] & { id?: string; introduction?: string; cognition?: string; works?: string[] }) | null
  >(null);

  return (
    <>
      <section id="exhibition-halls" className="relative bg-[#242422] min-h-screen overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full"
            style={{
              background: `radial-gradient(circle, ${HALL_COLORS[exhibitionHalls[activeHall]?.id] || '#C9B037'} 0%, transparent 70%)`,
              transform: 'translate(30%, -30%)',
              transition: 'background 0.5s ease',
            }}
          />
        </div>

        {/* 标题区 */}
        <div className="relative z-10 pt-20 pb-8 px-4 md:px-6 max-w-7xl mx-auto">
          <span className="font-label text-xs tracking-[0.2em] text-white/40 uppercase mb-4 block">
            Exhibition Halls
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            五大主题展厅
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl">
            点击标签切换展厅，浏览每位女性榜样的思想与方法论
          </p>
        </div>

        {/* 标签切换区 */}
        <div className="relative z-10 px-4 md:px-6 mb-8 max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {exhibitionHalls.map((hall, index) => (
              <button
                key={hall.id}
                onClick={() => setActiveHall(index)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeHall === index
                    ? 'text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/15 hover:text-white border border-white/10'
                }`}
                style={{
                  backgroundColor:
                    activeHall === index
                      ? HALL_COLORS[hall.id] || '#C9B037'
                      : undefined,
                }}
              >
                {hall.title}
              </button>
            ))}
          </div>
        </div>

        {/* 展厅内容区 */}
        <div className="relative z-10 px-4 md:px-6 pb-24 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* 展厅简介 */}
              <div className="mb-8 max-w-3xl">
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  {exhibitionHalls[activeHall].description}
                </p>
              </div>

              {/* 人物卡片网格 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {exhibitionHalls[activeHall].women.map((woman, index) => {
                  const hall = exhibitionHalls[activeHall];
                  const hallColor = HALL_COLORS[hall.id] || '#C9B037';
                  const visual = getHallVisualConfig(hall.id, hallColor);

                  return (
                  <motion.div
                    key={`${hall.id}-${woman.name}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    onClick={() => setSelectedWoman(woman)}
                    className={visual.cardClass}
                    style={{
                      ...visual.inlineStyle,
                      boxShadow: hall.id === 'new-generation'
                        ? `0 0 24px ${hallColor}22, 0 0 6px ${hallColor}15`
                        : undefined,
                    }}
                  >
                    {/* 时间轴装饰线（行动启发者） */}
                    {hall.id === 'action-inspirers' && (
                      <div className="absolute left-4 top-0 bottom-0 flex flex-col items-center">
                        <div className="w-[3px] flex-1 bg-gradient-to-b from-white/30 to-white/5" />
                      </div>
                    )}

                    {/* 模块化网格线（体系构建者） */}
                    {hall.id === 'system-builders' && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-4 border border-white/[0.03]" />
                      </div>
                    )}

                    {/* 头像区域 */}
                    <div
                      className={visual.headerClass}
                      style={visual.headerInlineStyle}
                    >
                      <div className={visual.avatarClass}>
                        {woman.image ? (
                          <img
                            src={`/images/${woman.image.split('/').pop()}`}
                            alt={woman.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.style.display = 'flex';
                                parent.style.alignItems = 'center';
                                parent.style.justifyContent = 'center';
                                parent.style.backgroundColor = hallColor;
                                const span = document.createElement('span');
                                span.className = 'text-white font-display text-3xl';
                                span.textContent = woman.name.charAt(0);
                                parent.appendChild(span);
                              }
                            }}
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center"
                            style={{ backgroundColor: hallColor }}
                          >
                            <span className="text-white font-display text-3xl">{woman.name.charAt(0)}</span>
                          </div>
                        )}
                      </div>
                      <div className="text-white flex-1 pr-24">
                        <h4 className={`${hall.id === 'culture-observers' ? 'font-serif italic' : 'font-serif'} text-xl mb-1`}>
                          {woman.name}
                        </h4>
                        <p className="text-sm text-white/60">{woman.title}</p>
                      </div>
                    </div>

                    {/* 内容区域 */}
                    <div className={visual.contentClass}>
                      {woman.work && (
                        <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">
                          {woman.work}
                        </p>
                      )}
                      {woman.quote && (
                        <p className={`${hall.id === 'culture-observers' ? 'font-serif italic text-white/70' : 'text-white/60'} text-sm line-clamp-2 leading-relaxed`}>
                          "{woman.quote}"
                        </p>
                      )}
                      {woman.methodology && !woman.quote && (
                        <p className="text-white/50 text-sm line-clamp-3 leading-relaxed">
                          {woman.methodology}
                        </p>
                      )}
                    </div>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 人物详情弹窗 */}
      <AnimatePresence>
        {selectedWoman && (
          <WomanDetail woman={selectedWoman} onClose={() => setSelectedWoman(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
