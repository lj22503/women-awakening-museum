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
        image: "",
        introduction: "希尔顿集团继承人，从名媛转型为商人。",
        methodology: "用商业头脑打造个人品牌。",
        cognition: "曾被低估为'花瓶'的酒店帝国继承者，用二十年的时间证明：商业智慧可以隐藏在粉红色高跟鞋之下。她将个人品牌从娱乐符号升级为商业体系，展示了一种非传统的女性力量——不完美但真实，不严肃但有力。",
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
        image: "",
        introduction: "失明失聪却成为作家，用文字传递希望。",
        methodology: "珍惜当下，用行动传递爱。",
        cognition: "在黑暗与寂静中重构对世界的理解。她用手指触摸水流学会'水'这个单词，证明沟通可以不依赖视觉与听觉。她的认知核心在于：身体的限制从来不是精神的边界——珍惜每一个感知瞬间，就是对生命最深的敬意。",
        works: ["《假如给我三天光明》", "《我的生活故事》"]
      },
      {
        id: "qiong-yao",
        name: "琼瑶",
        nameEn: "Qiong Yao",
        title: "中国台湾作家",
        image: "",
        introduction: "《还珠格格》作者，用爱情故事影响几代人。",
        methodology: "用大众文化传递爱与善良。",
        cognition: "她用爱情故事编织了几代人的情感启蒙。虽然常被批评为过于浪漫，她始终相信：在坚硬现实中保留温柔的可能性，本身就是一种勇气。她的认知核心在于：情感连接不是弱点，而是女性在压抑时代中建立共鸣、互相支撑的方式。",
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
        cognition: "她们想把你放进盒子里，但那个盒子的盖子永远可以从里面推开。从芝加哥南区到普林斯顿再到白宫，她用每一步打破了社会对黑人女性的层层预期。她的认知核心在于：'成为'不是一个终点，而是一个永续的过程——你永远在成为下一个版本的自己，教育、自律和真实的自我表达是你唯一的通行证。她将第一夫人的角色从礼仪性位置重新定义为赋权平台，证明领导力不来自头衔，而来自你是否敢于讲述完整的自己。",
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
        image: "",
        introduction: "用犀利的笔触描绘上海滩的爱恨情仇。",
        methodology: "用理性分析情感，用文字记录时代。",
        cognition: "她用犀利的笔触解剖上海滩的爱恨情仇，将人性的幽暗与欲望赤裸裸地呈现。她不相信任何空洞的理想，只记录真实的生存处境——在她看来，生命的那袭华美袍子，正是因为爬满虱子才显得真实而有力。",
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
