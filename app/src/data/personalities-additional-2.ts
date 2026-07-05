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
        cognition: "多元文化的深度对话者。她认为提问不仅是获取信息，更是一种为他人搭建表达舞台的艺术。通过连接全球思想者，她致力于打破文化壁垒，让不同背景的女性在交流中找到共鸣与力量。",
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
        cognition: "用创意为传统品牌注入新活力。她将品牌视作价值观的载体，坚信跨界合作的本质是寻找精神同频的伙伴。在她的方法论中，好的商业创意既要有文化厚度，也要有传播的生命力。",
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
        cognition: "关注个人成长，用行动传递价值。作为仡佬族作家，她深知边缘声音被忽视的疼痛。她用文字为西部小城的普通人立传，坚信每一个平凡生命的记忆，都构成了时代最真实的底色。",
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
        cognition: "都市青年的敏锐观察者。她用文字探索人生意义，将城市生活中的疏离与渴望转化为文学追问。在她看来，创作的本质是不断激活自己的感知力，在看似无聊的日常中发现暗流涌动。",
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
        cognition: "从东莞农村到涂料行业的探索者，她将人生视为一场持续的修行——每一次从零开始的勇气都是对自我的超越。她坚信中国制造不仅关乎技术，更关乎创业者内心的韧性与格局。",
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
        cognition: "规则与韧性的双重代表。她以系统思维重塑华为财务体系，用理性构建秩序；在困境中，她将个人信念升华为集体精神的象征。她的认知核心在于：真正的力量来自对规则的敬畏与对使命的坚守。",
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
        cognition: "用精确的实验推翻被广泛接受的物理定律——她以一丝不苟的科学方法证明了宇称不守恒，却拒绝让性别成为被评判的标准。她的认知核心在于：自然规律面前，唯一有效的语言是严谨的数据。",
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
        cognition: "从自我怀疑中走出的新闻女王。她将报纸视为民主的基石，坚信新闻人的最高职责是让权力接受监督。当五角大楼文件风波席卷而来，她用行动证明：活在当下，不仅是做好今天的报纸，更是在关键时刻捍卫真相的勇气。",
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
        cognition: "从演员到企业家，她的人生信条是'自己的命运自己做主'。在她看来，人生没有标准剧本——每一次从零开始的勇气，都是对宿命论最有力的反击。她用行动而非言语，诠释了女性可以既是艺术的创造者，也是商业的掌控者。",
        works: ["《人生不怕从头再来》"]
      }
    ]
  }
];
