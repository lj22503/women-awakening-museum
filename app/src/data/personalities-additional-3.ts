// 从飞书文档补充的额外人物数据 - Part 3 (最后一批)
// 修复记录 (2026-03-18): 补充到 100+ 位女性榜样

import type { Personality } from './personalities';

export const additionalPersonalitiesPart3: Personality[] = [
  // INFP - 调停者型（补充）
  {
    type: "INFP",
    name: "调停者型",
    description: "理想主义、富有创造力、重视真实，擅长共情和艺术表达",
    traits: {
      strengths: ["共情能力强", "艺术天赋", "追求价值"],
      challenges: ["可能过于敏感", "难以决策"]
    },
    women: [
      {
        id: "iris-chang",
        name: "张纯如",
        nameEn: "Iris Chang",
        title: "美国华裔作家、历史学家",
        image: "",
        introduction: "《南京大屠杀》作者，用文字揭露历史真相。",
        methodology: "用执着追求真相，用文字改变世界。",
        cognition: "关注深层意义，记忆与遗忘。",
        works: ["《南京大屠杀：被遗忘的二战浩劫》"]
      }
    ]
  },
  // ISFP - 探险家型（补充）
  {
    type: "ISFP",
    name: "探险家型",
    description: "艺术气质、敏感、活在当下、热爱自由，擅长艺术和适应",
    traits: {
      strengths: ["艺术天赋", "适应力强", "真诚"],
      challenges: ["可能过于敏感", "难以规划未来"]
    },
    women: [
      {
        id: "lin-bai",
        name: "林白",
        nameEn: "Lin Bai",
        title: "中国当代作家",
        image: "",
        introduction: "女性主义写作代表，关注身体意识与欲望。",
        methodology: "用文字表达真实，一咬牙走了黄河。",
        cognition: "一个人的战争就是自己嫁给自己。",
        works: ["《一个人的战争》", "《北流》", "《身体的雷霆》"]
      },
      {
        id: "isabella-bird",
        name: "伊莎贝拉·伯德",
        nameEn: "Isabella Bird",
        title: "英国女性探险家",
        image: "",
        introduction: "皇家地理学会首位女会员，70 岁仍骑马上摩洛哥。",
        methodology: "用行动探索世界，用实际记录人生。",
        cognition: "山是有生命的，它在呼吸。",
        works: ["《我渴望疾劲的风》"]
      }
    ]
  },
  // ESFJ - 执政官型（补充）
  {
    type: "ESFJ",
    name: "执政官型",
    description: "热心、善于社交、有同情心、重视和谐，擅长维护关系和照顾他人",
    traits: {
      strengths: ["照顾他人", "组织活动", "维护关系"],
      challenges: ["可能过度在意他人评价", "忽视自己需求"]
    },
    women: [
      {
        id: "duan-fang",
        name: "段芳",
        nameEn: "Duan Fang",
        title: "中国职场女性成长导师",
        image: "",
        introduction: "从大山里走到复旦，帮助上万名女性成长。",
        methodology: "用行动改变命运，注重实际。",
        cognition: "无畏成长。",
        works: ["《无畏成长：新职场女性成长 7 堂课》"]
      }
    ]
  },
  // ESFP - 表演者型（补充）
  {
    type: "ESFP",
    name: "表演者型",
    description: "热情、善于社交、热爱表演、活在当下，擅长娱乐和乐观",
    traits: {
      strengths: ["娱乐他人", "适应力强", "乐观"],
      challenges: ["可能过于关注当下", "缺乏规划"]
    },
    women: [
      {
        id: "miley-cyrus",
        name: "麦莉·赛勒斯",
        nameEn: "Miley Cyrus",
        title: "美国演员、歌手",
        image: "",
        introduction: "从迪士尼童星转型为流行歌手。",
        methodology: "不想做乖乖女，想做自己。",
        cognition: "拒绝束缚，追求自由。",
        works: ["《Miles to Go》"]
      }
    ]
  },
  // INTP - 逻辑学家型（补充）
  {
    type: "INTP",
    name: "逻辑学家型",
    description: "好奇心强、客观分析、追求真理，擅长深度思考和创新理论",
    traits: {
      strengths: ["深度思考", "创新理论", "解决复杂问题"],
      challenges: ["可能脱离实际", "社交困难"]
    },
    women: [
      {
        id: "katherine-johnson",
        name: "凯瑟琳·约翰逊",
        nameEn: "Katherine Johnson",
        title: "美国数学家",
        image: "",
        introduction: "《隐藏人物》原型，用计算助力阿波罗登月。",
        methodology: "用理性拆解问题，用坚持实现目标。",
        cognition: "用科学改变世界。",
        works: []
      },
      {
        id: "marissa-mayer",
        name: "玛丽莎·梅耶尔",
        nameEn: "Marissa Mayer",
        title: "计算机科学家、企业家",
        image: "",
        introduction: "前 Yahoo CEO，Google 早期员工。",
        methodology: "用数据驱动决策，注重效率。",
        cognition: "用理性分析解决问题。",
        works: ["《人工智能的未来》"]
      },
      {
        id: "judith-butler",
        name: "朱迪斯·巴特勒",
        nameEn: "Judith Butler",
        title: "性别理论家",
        image: "",
        introduction: "《性别麻烦》作者，后现代女性主义代表。",
        methodology: "用理论挑战传统，用思辨探索边界。",
        cognition: "性别是表演性的。",
        works: ["《性别麻烦》", "《身体之重》"]
      }
    ]
  }
];
