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
              href="mailto:lj22503@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              lj22503@gmail.com
            </a>
            <div className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.659 0 9.937c0 2.417 1.207 4.578 3.117 6.138-.263.839-.552 1.684-.792 2.426-.145.448.266.884.708.728.812-.287 2.584-.935 3.348-1.238.898.48 1.916.757 2.997.757 4.8 0 8.691-3.471 8.691-7.749S13.491 2.188 8.691 2.188zM7.222 14.62c-.217.085-.461.108-.687.052-.397-.098-1.283-.469-1.283-.469s-1.824 1.036-2.356 1.236c-.161.06-.337.005-.433-.141-.096-.146-.072-.355.062-.475.539-.482 1.196-1.21 1.445-1.555.075-.104.063-.243-.031-.332-.485-.455-.962-1.077-1.243-1.644-.281-.567-.421-1.177-.421-1.775 0-2.874 2.641-5.205 5.893-5.205 3.252 0 5.893 2.331 5.893 5.205 0 1.366-.567 2.607-1.508 3.538-.941.931-2.234 1.508-3.667 1.508-1.081 0-2.099-.277-2.997-.757-.287.152-.573.304-.86.456-.287.152-.573.304-.86.456z"/>
              </svg>
              微信：lj22503
            </div>
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
