import { motion } from 'framer-motion';

/**
 * 页脚组件
 * 
 * 修复记录 (2026-03-18):
 * - 移除无效的联系方式
 * - 添加公益项目合作引导
 * - 添加 GitHub 仓库链接
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] text-white/70 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 合作引导 */}
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl text-champagne mb-4">
            一起让女性觉醒被更多人看见
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            这是一个开放的公益项目，期待与你一起探索女性成长的可能性。
            如果你有好的想法、资源或建议，欢迎联系我们。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/lj22503/women-awakening-museum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-champagne text-[#1a1a1a] rounded-full hover:bg-champagne/90 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub 仓库
            </a>
            <a
              href="https://github.com/lj22503"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              联系发起人
            </a>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>© {currentYear} 她觉醒博物馆 · 公益项目</p>
          <p className="mt-2 text-xs text-white/50">
            基于 One Person CEO Skills 开源项目构建
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
