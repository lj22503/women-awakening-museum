#!/bin/bash
# MBTI 画廊功能修复脚本
# 修复日期：2026-03-19

cd /home/admin/.openclaw/workspace/women-awakening-museum

echo "🔧 开始修复 MBTI 画廊功能..."

# 1. 修复 MBTIGallery.tsx - 添加 key 属性强制重新渲染
echo "📝 修复 MBTIGallery.tsx..."
sed -i 's/<section id="mbti-gallery" className="min-h-screen bg-background flex">/<section id="mbti-gallery" key={`mbti-${activeType}`} className="min-h-screen bg-background flex">/' app/src/sections/MBTIGallery.tsx

# 2. 修复 ExhibitionHalls.tsx - 修复滚动容器宽度
echo "📝 修复 ExhibitionHalls.tsx..."
sed -i 's/style={{ width: `${exhibitionHalls.length \* 100}vw` }}/style={{ width: `${exhibitionHalls.length * 100}%` }}/' app/src/sections/ExhibitionHalls.tsx

# 3. 检查 personalities.ts 数据合并
echo "📝 检查数据合并..."
grep -n "allPersonalities" app/src/data/personalities.ts

echo "✅ 修复完成！"
echo ""
echo "下一步："
echo "1. cd app"
echo "2. npm install"
echo "3. npm run dev"
echo "4. 访问 http://localhost:5173 测试"
