import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Zap } from 'lucide-react';

export function FloatingActionButton() {
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // 检查今日是否已打卡（模拟）
  useEffect(() => {
    const checkedIn = localStorage.getItem('daily-checkin');
    const today = new Date().toDateString();
    if (checkedIn === today) {
      setHasCheckedInToday(true);
    } else {
      setHasCheckedInToday(false);
      // 启动红点脉冲动画
      setIsPulsing(true);
    }
  }, []);

  const handleClick = () => {
    // 打卡逻辑
    const today = new Date().toDateString();
    localStorage.setItem('daily-checkin', today);
    setHasCheckedInToday(true);
    setIsPulsing(false);
    // 可以触发其他操作，比如打开打卡面板
    alert('今日已打卡！');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-champagne shadow-2xl flex items-center justify-center hover:bg-champagne/90 transition-colors focus:outline-none focus:ring-2 focus:ring-champagne/50"
      aria-label="每日打卡"
    >
      {/* 图标 */}
      <Zap className="w-8 h-8 text-primary" />

      {/* 红点提示（如果今日未打卡） */}
      {!hasCheckedInToday && (
        <>
          {/* 脉冲背景 */}
          <motion.div
            className="absolute inset-0 rounded-full bg-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ opacity: 0.3 }}
          />
          {/* 红点 */}
          <div className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full" />
        </>
      )}
    </motion.button>
  );
}