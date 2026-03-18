import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // 修复：移除未使用的 Sparkles (TS6133)
import { Button } from '@/components/ui/button';
import { MBTITest } from '@/components/MBTITest';

export function Hero() {
  const [isTestOpen, setIsTestOpen] = useState(false);

  const scrollToContent = () => {
    const element = document.getElementById('problem-radar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const scrollToAction = () => {
    const element = document.getElementById('daily-card');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Radial gradient for spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-background" />

        {/* Subtle particle effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.165, 0.84, 0.44, 1] }}
            className="mb-8"
          >
            <span className="text-xs tracking-widest uppercase text-secondary/70">
              女性觉醒线上博物馆
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            遇见你的
            <br />
            <span className="italic">觉醒榜样</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.165, 0.84, 0.44, 1] }}
            className="text-lg text-secondary mt-4 max-w-2xl mx-auto leading-relaxed"
          >
            100+女性榜样 · 16种人格类型 · 可执行的方法论
            <br />
            找到与你共鸣的觉醒之路
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.165, 0.84, 0.44, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToContent}
              className="bg-secondary text-primary rounded-full px-8 py-3 font-medium hover:bg-secondary/90 transition-all duration-300"
            >
              开启探索之旅
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsTestOpen(true)}
              className="border border-secondary/30 text-secondary rounded-full px-8 py-3 font-medium hover:bg-secondary/10 transition-all duration-300"
            >
              测测你的 MBTI
            </Button>
            <Button
              variant="outline"
              onClick={scrollToAction}
              className="border border-secondary/30 text-secondary rounded-full px-8 py-3 font-medium hover:bg-secondary/10 transition-all duration-300"
            >
              今日行动
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="cursor-pointer"
            onClick={scrollToContent}
          >
            <ChevronDown className="w-6 h-6 text-secondary/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* MBTI Test Modal */}
      <MBTITest isOpen={isTestOpen} onClose={() => setIsTestOpen(false)} />
    </>
  );
}
