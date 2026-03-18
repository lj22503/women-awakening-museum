export interface Problem {
  id: string;
  question: string;
  category: string;
  description: string;
  relatedTypes: string[];
}

export const problems: Problem[] = [
  {
    id: "self-awareness",
    question: "我总在满足他人期待，不知道自己真正想要什么？",
    category: "自我认知",
    description: "探索内心真实的声音，建立独立的自我认知",
    relatedTypes: ["INFJ", "INFP", "ENFJ"]
  },
  {
    id: "economic-independence",
    question: "如何建立真正独立的经济能力？",
    category: "经济独立",
    description: "掌握财务知识，建立可持续的收入来源",
    relatedTypes: ["ENTJ", "ESTJ", "ESTP"]
  },
  {
    id: "gender-limits",
    question: "怎样打破社会对我的性别限制？",
    category: "权利觉醒",
    description: "认识性别不平等的结构，勇敢争取自己的权利",
    relatedTypes: ["ENTP", "INTJ", "INFJ"]
  },
  {
    id: "relationship-boundaries",
    question: "如何在亲密关系里保持自我？",
    category: "情感边界",
    description: "建立健康的边界，在爱与自我之间找到平衡",
    relatedTypes: ["ISFJ", "ESFJ", "ENFP"]
  },
  {
    id: "education-growth",
    question: "我想学习新知识，但不知从何开始？",
    category: "教育成长",
    description: "制定学习计划，找到适合的学习方法",
    relatedTypes: ["INTP", "INTJ", "INFJ"]
  },
  {
    id: "consumer-awareness",
    question: "如何做出符合内心的消费选择？",
    category: "消费觉醒",
    description: "理性消费，不被营销和社交压力左右",
    relatedTypes: ["ISTJ", "ISFJ", "ISTP"]
  },
  {
    id: "wellness",
    question: "怎样照顾好自己的身心健康？",
    category: "身心健康",
    description: "建立健康的生活方式，关注身心平衡",
    relatedTypes: ["ISFP", "ESFP", "INFP"]
  },
  {
    id: "life-meaning",
    question: "如何找到属于自己的人生意义？",
    category: "生命意义",
    description: "探索生命的深层意义，找到自己的人生使命",
    relatedTypes: ["INFJ", "ENFJ", "INTJ"]
  }
];

export const getProblemsByCategory = (category: string): Problem[] => {
  return problems.filter(p => p.category === category);
};
