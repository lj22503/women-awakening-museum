import { FadeInSection } from '@/components/FadeInSection';
import { Sparkles, Mail, Instagram, Twitter } from 'lucide-react';

const navigation = [
  { name: '首页', href: '#' },
  { name: 'MBTI人格画廊', href: '#mbti-gallery' },
  { name: '五大展厅', href: '#exhibition-halls' },
  { name: '问题雷达', href: '#problem-radar' },
];

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Email', icon: Mail, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-[#242422] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-[#969188]" />
                <span className="font-display text-xl text-[#f5f3ef]">
                  女性觉醒线上博物馆
                </span>
              </div>
              <p className="text-[#969188] leading-relaxed max-w-md">
                致力于为每一位寻求成长的女性提供榜样力量和方法论。在这里，你可以找到与你共鸣的觉醒之路。
              </p>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-7">
              <h4 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-6">
                导航
              </h4>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[#f5f3ef] hover:text-[#969188] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="font-label text-xs tracking-[0.2em] text-[#969188] uppercase mb-6">
                联系我们
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="w-10 h-10 rounded-full bg-[#f5f3ef]/10 flex items-center justify-center text-[#f5f3ef] hover:bg-[#f5f3ef]/20 transition-colors duration-200"
                      aria-label={item.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-[#f5f3ef]/10 mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#969188] text-sm">
              © 2025 女性觉醒线上博物馆. All rights reserved.
            </p>
            <p className="text-[#969188]/60 text-sm">
              用榜样的力量，点亮觉醒之路
            </p>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
}
