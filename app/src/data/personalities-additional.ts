// 从飞书文档补充的额外人物数据
// 修复记录 (2026-03-18): 补充到 100+ 位女性榜样

import type { Personality } from './personalities';

export const additionalPersonalities: Personality[] = [
  // ISTJ - 物流师型
  {
    type: "ISTJ",
    name: "物流师型",
    description: "务实、可靠、注重细节、坚守原则，擅长执行和坚持",
    traits: {
      strengths: ["执行力强", "忠诚", "有责任感"],
      challenges: ["可能过于保守", "不善变通"]
    },
    women: [
      {
        id: "mary-karr",
        name: "玛丽·卡尔",
        nameEn: "Mary Karr",
        title: "美国作家、诗人",
        image: "",
        introduction: "回忆录三部曲作者，用黑色幽默记录动荡童年。",
        methodology: "用事实说话，用理性梳理情绪。",
        cognition: "从创伤到治愈，写作是自我救赎的方式。",
        works: ["《说谎者俱乐部》", "《樱桃》", "《点亮》"]
      },
      {
        id: "pl-travers",
        name: "P.L.特拉弗斯",
        nameEn: "P.L. Travers",
        title: "澳大利亚裔英国作家",
        image: "",
        introduction: "《玛丽·波平斯》系列作者，坚守传统的创作者。",
        methodology: "注重细节，用严谨结构支撑故事。",
        cognition: "坚守原则但灵活应变。",
        works: ["《玛丽·波平斯》系列"]
      },
      {
        id: "edith-wharton",
        name: "伊迪丝·华顿",
        nameEn: "Edith Wharton",
        title: "美国女作家",
        image: "",
        introduction: "首位获得普利策小说奖的女性作家。",
        methodology: "用细节描绘社会，用理性反思人生。",
        cognition: "用坚持突破限制。",
        works: ["《纯真年代》", "《回首往事》"]
      }
    ]
  },
  // ISFJ - 守卫者型
  {
    type: "ISFJ",
    name: "守卫者型",
    description: "善良、责任感强、注重细节、温暖，擅长照顾他人和维护关系",
    traits: {
      strengths: ["照顾他人", "忠诚", "有耐心"],
      challenges: ["可能过度牺牲", "害怕冲突"]
    },
    women: [
      {
        id: "yang-jiang",
        name: "杨绛",
        nameEn: "Yang Jiang",
        title: "中国作家、翻译家",
        image: "",
        introduction: "《我们仨》作者，用细腻笔触记录家庭生活。",
        methodology: "默默付出，用行动表达爱。",
        cognition: "情感内敛，注重家庭。",
        works: ["《我们仨》"]
      },
      {
        id: "caidong",
        name: "蔡东",
        nameEn: "Cai Dong",
        title: "中国当代作家",
        image: "",
        introduction: "关注普通人生活的作家。",
        methodology: "温暖而有力的写作风格。",
        cognition: "关注细节，重视平凡中的美好。",
        works: ["《月光下》", "《星辰书》"]
      },
      {
        id: "sun-pin",
        name: "孙频",
        nameEn: "Sun Pin",
        title: "中国当代作家",
        image: "",
        introduction: "以故乡为背景描写普通人命运。",
        methodology: "对故乡的牵挂，对亲人的思念。",
        cognition: "注重传统，重视家庭。",
        works: ["《截岔往事》", "《天物墟》"]
      }
    ]
  },
  // INTJ - 建筑师型（补充）
  {
    type: "INTJ",
    name: "建筑师型",
    description: "理性、战略思维、独立思考，擅长通过逻辑分析与长远规划解决问题",
    traits: {
      strengths: ["长远规划", "逻辑分析", "追求卓越", "独立思考"],
      challenges: ["可能显得冷漠", "过度完美主义"]
    },
    women: [
      {
        id: "dou-dou",
        name: "豆豆",
        nameEn: "Li Xue",
        title: "中国当代作家",
        image: "",
        introduction: "《天道》原著作者，作品以深刻的理性分析和社会规律追问著称。",
        methodology: "文化属性理论——强势文化与弱势文化的区别。",
        cognition: "见路不走——拒绝经验主义，从事物本质出发。",
        works: ["《遥远的救世主》", "《天幕红尘》"]
      }
    ]
  }
];
