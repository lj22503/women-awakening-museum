import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';
import { getTodayCard, getRandomCard, dailyCards, type DailyCard } from '@/data/dailyCards';

// 头像映射
const avatarMap: Record<string, string> = {
  "Alexandra Botez": "", // 待添加头像
  "Alok Vaid-Menon": "", // 待添加头像
  "Amanda Gorman": "/images/amandagorman.jpg",
  "Angela Duckworth": "", // 待添加头像
  "Aurora James": "", // 待添加头像
  "Billie Jean King": "", // 待添加头像
  "Brene Brown": "", // 待添加头像
  "Caroline Criado Perez": "", // 待添加头像
  "Casey Newton": "", // 待添加头像
  "Caster Semenya": "", // 待添加头像
  "Cecilia Aragon": "", // 待添加头像
  "Celia Hodent": "", // 待添加头像
  "Chimamanda Ngozi Adichie": "/images/chimamanda.jpg",
  "Diana Nyad": "", // 待添加头像
  "Emily Oster": "", // 待添加头像
  "Esther Perel": "", // 待添加头像
  "Greta Thunberg": "/images/gretathunberg.jpg",
  "Gretchen Rubin": "", // 待添加头像
  "J.K.罗琳": "", // 待添加头像
  "Jia Tolentino": "", // 待添加头像
  "Lauren Bastide": "", // 待添加头像
  "Leah Lakshmi Piepzna-Samarasinha": "", // 待添加头像
  "Leslie Jamison": "", // 待添加头像
  "Lisa Feldman Barrett": "", // 待添加头像
  "Lizzo": "/images/lizzo.jpg",
  "Marie Kondo": "", // 待添加头像
  "Megan Rapinoe": "", // 待添加头像
  "Megan Thee Stallion": "", // 待添加头像
  "Michele G. Russo": "", // 待添加头像
  "Mikki Kendall": "", // 待添加头像
  "Minda Dentler": "", // 待添加头像
  "Mona Chalabi": "/images/monachalabi.jpg",
  "Naomi Alderman": "", // 待添加头像
  "Neri Oxman": "/images/nerioxman.jpg",
  "Patti Smith": "", // 待添加头像
  "Peggy O'Donnell": "", // 待添加头像
  "Rebecca Solnit": "/images/rebeccasolnit.jpg",
  "Robin Stern": "", // 待添加头像
  "Roxane Gay": "/images/roxanegay.jpg",
  "Sally Rooney": "/images/sallyrooney.jpg",
  "Samin Nosrat": "", // 待添加头像
  "Susan Cain": "", // 待添加头像
  "Tarana Burke": "", // 待添加头像
  "Tricia Hersey": "", // 待添加头像
  "Virgie Tovar": "", // 待添加头像
  "Waris Dirie": "", // 待添加头像
  "YUNGBLUD": "", // 待添加头像
  "Zadie Smith": "", // 待添加头像
  "bell hooks": "/images/bellhooks.jpg",
  "万青": "", // 待添加头像
  "上野千鹤子": "/images/ueno.jpg",
  "余秀华": "/images/yuxiuhua.jpg",
  "傅真": "", // 待添加头像
  "刘梦": "", // 待添加头像
  "匡灵秀": "", // 待添加头像
  "原子": "", // 待添加头像
  "叶梓涛": "", // 待添加头像
  "叶海洋": "", // 待添加头像
  "塔拉·韦斯特弗": "/images/tarawestover.jpg",
  "崔璀": "/images/cuicui.jpg",
  "川村由仁夜": "", // 待添加头像
  "张桂梅": "/images/zhangguimei.jpg",
  "张黎星": "/images/zhanglixing.jpg",
  "惠若琪": "", // 待添加头像
  "李一诺": "/images/liyino.jpg",
  "李雪琴": "/images/lixueqin.jpg",
  "李飞飞": "/images/lifeifei.jpg",
  "梁宁": "/images/liangning.jpg",
  "梅耶·马斯克": "/images/mayemusk.jpg",
  "欣儿": "", // 待添加头像
  "欧阳娜娜": "", // 待添加头像
  "洪晃": "/images/honghuang.jpg",
  "淡豹": "", // 待添加头像
  "王潇": "/images/wangxiao.jpg",
  "珍妮特·温特森": "", // 待添加头像
  "竹子": "", // 待添加头像
  "米歇尔·奥巴马": "/images/michelleobama.jpg",
  "赵丹喵": "", // 待添加头像
  "郝景芳": "/images/haojingfang.jpg",
  "郭佳": "", // 待添加头像
  "郭玉洁": "", // 待添加头像
  "阿饼": "", // 待添加头像
  "陈小雨": "", // 待添加头像
  "雪力": "", // 待添加头像
  "露西·金": "", // 待添加头像
  "韩江": "/images/hanjiang.jpg",
  "马拉拉": "/images/malala.jpg",
};

export function DailyCard() {
  const [currentCard, setCurrentCard] = useState<DailyCard | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  // 初始化今日卡片
  useEffect(() => {
    const todayCard = getTodayCard();
    const index = dailyCards.findIndex(c => c.id === todayCard.id);
    setCurrentCard(todayCard);
    setCurrentIndex(index >= 0 ? index : 0);
  }, []);

  // 切换卡片
  const changeCard = (direction: 'prev' | 'next' | 'random') => {
    if (isAnimating) return;
    setIsAnimating(true);

    let newIndex: number;
    if (direction === 'random') {
      const randomCard = getRandomCard();
      newIndex = dailyCards.findIndex(c => c.id === randomCard.id);
    } else {
      newIndex = direction === 'next' 
        ? (currentIndex + 1) % dailyCards.length
        : (currentIndex - 1 + dailyCards.length) % dailyCards.length;
    }

    setCurrentIndex(newIndex);
    setCurrentCard(dailyCards[newIndex]);

    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!currentCard) return null;

  const avatarUrl = avatarMap[currentCard.name];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* 标题 */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-xs tracking-widest uppercase text-white/60">
            今日觉醒卡片
          </span>
          <Sparkles className="w-4 h-4 text-secondary" />
        </div>

        {/* 卡片容器 */}
        <div className="relative">
          {/* 导航按钮 */}
          <button
            onClick={() => changeCard('prev')}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={() => changeCard('next')}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors disabled:opacity-50 z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* 卡片 */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-neutral-900 rounded-3xl p-8 md:p-12"
            >
              {/* 分类标签 */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs uppercase">
                  {currentCard.category}
                </span>
                <span className="text-white/60 text-sm">
                  {currentIndex + 1} / {dailyCards.length}
                </span>
              </div>

              {/* 人物信息 */}
              <div className="flex items-center gap-4 mb-8">
                {/* 头像 */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  {avatarUrl ? (
                    <img
                      src={avatarUrl}
                      alt={currentCard.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="w-full h-full bg-[#242422] flex items-center justify-center">
                    <span className="text-white font-display text-2xl">{currentCard.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">{currentCard.name}</h3>
                  <p className="text-sm text-white/50">{currentCard.title}</p>
                </div>
              </div>

              {/* 金句 */}
              <div className="relative mb-8 text-center">
                <Quote className="absolute -top-2 left-4 w-8 h-8 text-secondary/30 opacity-30" />
                <blockquote className="font-serif text-3xl italic text-white leading-relaxed px-8">
                  "{currentCard.quote}"
                </blockquote>
                <Quote className="absolute -bottom-2 right-4 w-8 h-8 text-secondary/30 opacity-30 rotate-180" />
              </div>

              {/* 分隔线 */}
              <div className="w-16 h-px bg-secondary/30 mx-auto mb-8" />

              {/* 今日练习 */}
              <div className="bg-white/5 rounded-2xl p-6">
                <p className="text-xs uppercase tracking-widest text-secondary mb-3">
                  今日练习
                </p>
                <p className="font-serif text-lg text-white text-center mb-6">
                  {currentCard.microHabit}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/60">
                    —— {currentCard.source}
                  </p>
                  <button 
                    onClick={handleCheckIn}
                    className="border border-secondary text-secondary rounded-full px-6 py-2 text-sm hover:bg-secondary hover:text-primary transition-colors"
                  >
                    完成打卡
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 底部操作 */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => changeCard('random')}
            disabled={isAnimating}
            className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors disabled:opacity-50"
          >
            <RefreshCw className="w-4 h-4 text-secondary" />
            <span>随机抽取</span>
          </button>
        </div>

        {/* 提示 */}
        <p className="text-center text-white/40 text-sm mt-8">
          每日更新一位榜样，100+女性智慧等你探索
        </p>
      </div>
    </section>
  );
}
