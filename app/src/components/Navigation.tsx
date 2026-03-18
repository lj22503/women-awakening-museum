import { useState } from 'react'; // 修复：移除未使用的 useEffect (TS6133)
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Heart, Sparkles } from 'lucide-react'; // Sparkles 在第 26 行使用
import { Button } from '@/components/ui/button';

const navItems = [
  { name: '探索', href: '#problem-radar' },
  { name: '展厅', href: '#exhibition-halls' },
  { name: '测试', href: '#mbti-gallery' },
  { name: '今日', href: '#daily-card' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-champagne" />
              <span className="font-serif text-lg text-champagne">
                她觉醒博物馆
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-white/70 hover:text-white transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-champagne group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <div className="flex items-center gap-4">
                <button className="p-2 text-white/70 hover:text-white">
                  <Search className="w-5 h-5" />
                </button>
                <button className="relative p-2 text-white/70 hover:text-white">
                  <Heart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-burgundy text-white text-xs rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            className="fixed inset-0 z-40 bg-[#fdfaf7] pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-3xl text-[#242422]"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
