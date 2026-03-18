// 从飞书文档补充的额外人物数据 - Part 2
// 修复记录 (2026-03-18): 补充到 80+ 位女性榜样

import type { Personality } from './personalities';

export const additionalPersonalitiesPart2: Personality[] = [
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
        id: "yang-lan",
        name: "杨澜",
        nameEn: "Yang Lan",
        title: "中国著名主持人、媒体人",
        image: "",
        introduction: "《杨澜访谈录》主持人，用对话连接全球名人。",
        methodology: "用提问探索深度，用倾听建立连接。",
        cognition: "多元文化，人文关怀。",
        works: ["《一问一世界》", "《杨澜访谈录》"]
      },
      {
        id: "zeng-yijing",
        name: "曾怡菁",
        nameEn: "Zeng Yijing",
        title: "跨领域创意品牌顾问",
        image: "",
        introduction: "两岸青年创客论坛嘉宾，用创意传播健康与养生。",
        methodology: "选赛道如同择偶，找价值观相同的伙伴。",
        cognition: "用创意为传统品牌注入新活力。",
        works: []
      }
    ]
  },
  // ENFP - 竞选者型（补充）
  {
    type: "ENFP",
    name: "竞选者型",
    description: "热情、创意无限、善于社交，擅长激励他人和探索可能性",
    traits: {
      strengths: ["激励他人", "适应力强", "充满可能性"],
      challenges: ["可能缺乏专注", "容易分心"]
    },
    women: [
      {
        id: "xiao-qin",
        name: "肖勤",
        nameEn: "Xiao Qin",
        title: "中国当代作家",
        image: "",
        introduction: "仡佬族作家，关注西部小城的人情世相。",
        methodology: "用文字留住记忆，不让平凡人被遗忘。",
        cognition: "关注个人成长，用行动传递价值。",
        works: ["《守卫者长诗》", "《血液科医生》", "《暖》"]
      },
      {
        id: "meng-xiaoshu",
        name: "孟小书",
        nameEn: "Meng Xiaoshu",
        title: "中国当代作家",
        image: "",
        introduction: "北京出生的刊物编辑，关注都市年轻人生活。",
        methodology: "让自己处于被激活的状态，探索有趣的事情。",
        cognition: "用文字探索人生意义。",
        works: ["《猎物》", "《业余玩家》", "《午后两点半》"]
      }
    ]
  },
  // ENTP - 辩论家型（补充）
  {
    type: "ENTP",
    name: "辩论家型",
    description: "机智、创新、喜欢挑战，擅长思维敏捷和推动变革",
    traits: {
      strengths: ["思维敏捷", "善于辩论", "推动变革"],
      challenges: ["可能缺乏执行力", "容易厌倦"]
    },
    women: [
      {
        id: "ye-fengying",
        name: "叶凤英",
        nameEn: "Ye Fengying",
        title: "中国香港女企业家",
        image: "",
        introduction: "维新集团董事长，从东莞农村到涂料界探索者。",
        methodology: "用创新推动行业发展，坚持中国制造。",
        cognition: "人生是一场美丽的修行。",
        works: ["《人生是一场美丽的修行》"]
      }
    ]
  },
  // ENTJ - 指挥官型（补充）
  {
    type: "ENTJ",
    name: "指挥官型",
    description: "天生的领导者、果断、战略眼光，擅长组织和激励他人",
    traits: {
      strengths: ["组织能力强", "目标导向", "激励他人"],
      challenges: ["可能过于强势", "缺乏耐心"]
    },
    women: [
      {
        id: "meng-wanzhou",
        name: "孟晚舟",
        nameEn: "Meng Wanzhou",
        title: "华为副董事长、轮值董事长",
        image: "",
        introduction: "从基层做起，主导华为财务体系改革。",
        methodology: "注重规则，用系统提升效率。",
        cognition: "如果信念有颜色，那一定是中国红。",
        works: []
      },
      {
        id: "wu-jianxiong",
        name: "吴健雄",
        nameEn: "Chien-Shiung Wu",
        title: "美籍华裔物理学家",
        image: "",
        introduction: "原子弹之母，推翻宇称守恒定律。",
        methodology: "用科学改变世界，注重效率。",
        cognition: "用坚持实现目标。",
        works: ["《β衰变》"]
      }
    ]
  },
  // ESTJ - 总经理型（补充）
  {
    type: "ESTJ",
    name: "总经理型",
    description: "组织能力强、务实、果断、有领导力，擅长管理和执行",
    traits: {
      strengths: ["执行力强", "可靠", "善于管理"],
      challenges: ["可能过于专制", "缺乏灵活性"]
    },
    women: [
      {
        id: "katherine-graham",
        name: "凯瑟琳·格雷厄姆",
        nameEn: "Katharine Graham",
        title: "美国企业家，《华盛顿邮报》前 owner",
        image: "",
        introduction: "从笨女孩到新闻界最有权势的女人。",
        methodology: "务实的管理风格，重视记者的现场报道能力。",
        cognition: "活在当下，做好今天的报纸。",
        works: ["《个人历史》"]
      }
    ]
  },
  // ESTP - 企业家型（补充）
  {
    type: "ESTP",
    name: "企业家型",
    description: "精力充沛、务实、喜欢冒险、善于应变，擅长行动和谈判",
    traits: {
      strengths: ["行动力强", "善于谈判", "活在当下"],
      challenges: ["可能冲动", "缺乏长期规划"]
    },
    women: [
      {
        id: "liu-xiaoqing",
        name: "刘晓庆",
        nameEn: "Liu Xiaoqing",
        title: "中国演员、企业家",
        image: "",
        introduction: "从演员到企业家，创办多家影视公司。",
        methodology: "说做就做，人生不怕从头再来。",
        cognition: "自己的命运自己做主。",
        works: ["《人生不怕从头再来》"]
      }
    ]
  }
];
