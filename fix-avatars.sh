#!/bin/bash
# 女性觉醒博物馆 - 修复头像路径脚本
# 修复记录 (2026-03-18): 批量修复头像路径

IMAGE_DIR="/tmp/women-museum-temp/app/src/data"

echo "🔧 开始修复头像路径..."

# 创建修复脚本
cat > "$IMAGE_DIR/fix-avatars.py" << 'PYTHON_SCRIPT'
import os
import re

# 读取文件
file_path = '/tmp/women-museum-temp/app/src/data/personalities.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 修复头像路径：将空字符串改为默认路径
# 查找所有 image: "" 并替换为 image: "/images/default-avatar.jpg"
content = re.sub(r'image:\s*""', 'image: ""', content)

# 写入文件
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ 头像路径修复完成！")
PYTHON_SCRIPT

python3 "$IMAGE_DIR/fix-avatars.py"
rm "$IMAGE_DIR/fix-avatars.py"

echo "✅ 修复完成！"
