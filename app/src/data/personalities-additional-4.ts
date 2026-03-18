// 从飞书文档补充的额外人物数据 - Part 4 (修复头像路径)
// 修复记录 (2026-03-18): 修复头像路径问题，补充更多人物

import type { Personality } from './personalities';

export const additionalPersonalitiesPart4: Personality[] = [
  // ISTP - 鉴赏家型（补充）
  {
    type: "ISTP",
    name: "鉴赏家型",
    description: "灵活、理性、善于解决问题、喜欢动手，擅长技术能力和冷静应对",
    traits: {
      strengths: ["技术能力强", "冷静", "适应力强"],
      challenges: ["可能过于独立", "不善表达情感"]
    },
    women: [
      {
        id: "paris-hilton",
        name: "帕丽斯·希尔顿",
        nameEn: "Paris Hilton",
        title: "美国模特、演员、商人",
        image: "/images/paris-hilton.jpg",
        introduction: "希尔顿集团继承人，从名媛转型为商人。",
        methodology: "用商业头脑打造个人品牌。",
        cognition: "我不是完美的，但我真实。",
        works: ["《继承人自述》"]
      }
    ]
  },
  // INFJ - 提倡者型（补充）
  {
    type: "INFJ",
    name: "提倡者型",
    description: "理想主义、洞察力强、富有同情心，擅长理解他人和追求意义",
    traits: {
      strengths: ["理解他人", "追求意义", "有远见"],
      challenges: ["可能过度理想化", "容易疲惫"]
    },
    women: [
      {
        id: "helen-keller",
        name: "海伦·凯勒",
        nameEn: "Helen Keller",
        title: "美国作家、教育家",
        image: "/images/helen-keller.jpg",
        introduction: "失明失聪却成为作家，用文字传递希望。",
        methodology: "珍惜当下，用行动传递爱。",
        cognition: "假如给我三天光明。",
        works: ["《假如给我三天光明》", "《我的生活故事》"]
      },
      {
        id: "qiong-yao",
        name: "琼瑶",
        nameEn: "Qiong Yao",
        title: "中国台湾作家",
        image: "/images/qiong-yao.jpg",
        introduction: "《还珠格格》作者，用爱情故事影响几代人。",
        methodology: "用大众文化传递爱与善良。",
        cognition: "关注情感连接。",
        works: ["《我的故事》", "《窗外》", "《还珠格格》"]
      }
    ]
  },
  // ENFJ - 主人公型（补充）
  {
    type: "ENFJ",
    name: "主人公型",
    description: "魅力四射、富有同情心、天生的领导者，擅长激励和影响他人",
    traits: {
      strengths: ["激励他人", "善于沟通", "有影响力"],
      challenges: ["可能过度付出", "忽视自己需求"]
    },
    women: [
      {
        id: "michelle-obama",
        name: "米歇尔·奥巴马",
        nameEn: "Michelle Obama",
        title: "美国前第一夫人、律师",
        image: "/images/michelleobama.jpg",
        introduction: "从芝加哥南区到白宫，用教育打破限制。",
        methodology: "向前一步，赋能他人。",
        cognition: "她们想把你放进盒子里，但盒子可以从里面推开。",
        works: ["《成为》"]
      }
    ]
  },
  // 继续补充更多人物...
  {
    type: "INTJ",
    name: "建筑师型",
    description: "理性、战略思维、独立思考",
    traits: {
      strengths: ["长远规划", "逻辑分析"],
      challenges: ["可能显得冷漠"]
    },
    women: [
      {
        id: "zhang-aijia",
        name: "张爱玲",
        nameEn: "Eileen Chang",
        title: "中国现代作家",
        image: "/images/zhang-ailing.jpg",
        introduction: "用犀利的笔触描绘上海滩的爱恨情仇。",
        methodology: "用理性分析情感，用文字记录时代。",
        cognition: "生命是一袭华美的袍，爬满了虱子。",
        works: ["《倾城之恋》", "《金锁记》", "《红玫瑰与白玫瑰》"]
      },
      {
        id: "wangxiaobo",
        name: "王小波",
        nameEn: "Wang Xiaobo",
        title: "中国当代作家",
        image: "",
        introduction: "用幽默和哲学思辨解构生活。",
        methodology: "用理性思考，用幽默表达。",
        cognition: "一个人只拥有此生此世是不够的。",
        works: ["《黄金时代》", "《沉默的大多数》"]
      }
    ]
  }
];
