// 修复 MBTIGallery.tsx 中的重复类型问题
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/src/sections/MBTIGallery.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. 添加 uniquePersonalities 去重逻辑
const importInsert = `// 去重后的 MBTI 类型列表（保持原始顺序）
const uniquePersonalities = (() => {
  const seen = new Set<string>();
  return allPersonalities.filter(p => {
    if (seen.has(p.type)) return false;
    seen.add(p.type);
    return true;
  });
})();

`;

// 在 export function MBTIGallery 之前插入
content = content.replace(
  'export function MBTIGallery()',
  importInsert + 'export function MBTIGallery()'
);

// 2. 替换 allPersonalities.map 为 uniquePersonalities.map（在按钮渲染部分）
content = content.replace(
  '{allPersonalities.map((p, index) => {',
  '{uniquePersonalities.map((p, index) => {'
);

// 3. 替换 allPersonalities[activeType] 为 uniquePersonalities[activeType]
content = content.replace(
  /allPersonalities\[activeType\]/g,
  'uniquePersonalities[activeType]'
);

// 4. 更新分母为 uniquePersonalities.length
content = content.replace(
  '{activeType + 1}/16',
  '{activeType + 1}/{uniquePersonalities.length}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ 修复完成！');
console.log('修改内容:');
console.log('1. 添加 uniquePersonalities 去重数组');
console.log('2. 按钮渲染使用 uniquePersonalities');
console.log('3. 当前类型显示使用 uniquePersonalities');
