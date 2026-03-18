export interface Question {
  id: number;
  question: string;
  optionA: {
    text: string;
    type: string;
  };
  optionB: {
    text: string;
    type: string;
  };
}

export interface MBTIResult {
  type: string;
  name: string;
  description: string;
  women: {
    name: string;
    title: string;
    work: string;
    insight: string;
  }[];
  nextSteps: string[];
  microHabit: {
    action: string;
    source: string;
  };
}

export const questions: Question[] = [
  {
    id: 1,
    question: "周末独处时，你会怎么度过？",
    optionA: {
      text: "约朋友聚会、参加活动、去热闹的地方",
      type: "E"
    },
    optionB: {
      text: "在家看书、追剧、做自己的事",
      type: "I"
    }
  },
  {
    id: 2,
    question: "做重要决定时，你更依赖什么？",
    optionA: {
      text: "实际经验和具体事实（以前这么做有效）",
      type: "S"
    },
    optionB: {
      text: "直觉和可能性（感觉这样更有潜力）",
      type: "N"
    }
  },
  {
    id: 3,
    question: "面对他人的情绪困扰，你通常？",
    optionA: {
      text: "先共情安抚，理解对方感受",
      type: "F"
    },
    optionB: {
      text: "先分析问题，给出解决方案",
      type: "T"
    }
  },
  {
    id: 4,
    question: "你的生活/工作风格更接近？",
    optionA: {
      text: "喜欢计划，列清单，按部就班",
      type: "J"
    },
    optionB: {
      text: "喜欢灵活，随性而为，保留可能性",
      type: "P"
    }
  }
];

export const mbtiResults: Record<string, MBTIResult> = {
  "INTJ": {
    type: "INTJ",
    name: "战略家",
    description: "理性、有远见、追求系统思维，善于将复杂问题拆解为可执行的框架",
    women: [
      {
        name: "梁宁",
        title: "产品专家",
        work: "《产品思维30讲》",
        insight: "用产品视角解构人生"
      },
      {
        name: "王凤英",
        title: "汽车业高管",
        work: "长城汽车/小鹏汽车战略",
        insight: "精准市场洞察"
      }
    ],
    nextSteps: [
      "探索体系构建者展厅，学习系统思维",
      "阅读《产品思维30讲》，建立框架思维",
      "尝试用思维导图规划你的年度目标"
    ],
    microHabit: {
      action: "每天用10分钟梳理一件复杂事情的逻辑框架",
      source: "源自梁宁的系统思维方法论"
    }
  },
  "INTP": {
    type: "INTP",
    name: "逻辑学家",
    description: "热爱理论、喜欢分析、追求知识本身，不急于应用",
    women: [
      {
        name: "Lisa Feldman Barrett",
        title: "神经科学家",
        work: "《情绪》",
        insight: "情绪建构论"
      },
      {
        name: "Susan Cain",
        title: "作家",
        work: "《安静》",
        insight: "内向者优势研究"
      }
    ],
    nextSteps: [
      "进入科学×人文破壁者专区",
      "记录你的思考笔记，建立个人知识库",
      "找一个深度话题，写一篇分析文章"
    ],
    microHabit: {
      action: "每天记录一个让你好奇的问题，并尝试找到答案",
      source: "源自Susan Cain的深度思考习惯"
    }
  },
  "ENTJ": {
    type: "ENTJ",
    name: "指挥官",
    description: "目标明确、善于领导、享受挑战",
    women: [
      {
        name: "米歇尔·奥巴马",
        title: "前美国第一夫人",
        work: "《成为》",
        insight: "从南到白宫的成长"
      },
      {
        name: "Megan Rapinoe",
        title: "足球运动员",
        work: "《One Life》",
        insight: "球场与平权"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，学习领导力",
      "设定一个90天挑战目标",
      "寻找一位导师，建立指导关系"
    ],
    microHabit: {
      action: "每天早晨写下今天最重要的3件事，按优先级执行",
      source: "源自米歇尔·奥巴马的目标管理方法"
    }
  },
  "ENTP": {
    type: "ENTP",
    name: "辩论家",
    description: "思维敏捷、喜欢挑战、享受思想碰撞",
    women: [
      {
        name: "洪晃",
        title: "媒体人",
        work: "专栏、评论",
        insight: "文化祛魅者"
      },
      {
        name: "Roxane Gay",
        title: "作家",
        work: "《不良女性主义者》",
        insight: "犀利文化批评"
      }
    ],
    nextSteps: [
      "进入文化洞察者展厅，体验晃式锐评",
      "尝试写一篇批判性思考的文章",
      "参加一场辩论或思想交流活动"
    ],
    microHabit: {
      action: "每天对一件习以为常的事情提出一个质疑",
      source: "源自洪晃的批判性思维"
    }
  },
  "INFJ": {
    type: "INFJ",
    name: "提倡者",
    description: "有深度洞察力，追求意义，渴望帮助他人成长",
    women: [
      {
        name: "雪力 (Sherry)",
        title: "MBTI内容创作者",
        work: "MBTI内容创作",
        insight: "深度自我探索"
      },
      {
        name: "IU (李知恩)",
        title: "歌手、演员",
        work: "音乐创作",
        insight: "音乐与公众表达"
      },
      {
        name: "万青",
        title: "作家",
        work: "《白马春风》",
        insight: "日常的文学勘探"
      }
    ],
    nextSteps: [
      "重点关注新生代思想者展厅",
      "开始写情绪日记，记录内心感受",
      "寻找一个可以深度交流的小圈子"
    ],
    microHabit: {
      action: "每天记录一个'啊哈时刻'——让你有所领悟的瞬间",
      source: "源自雪力的自我探索方法"
    }
  },
  "INFP": {
    type: "INFP",
    name: "调停者",
    description: "内心丰富、价值观驱动、追求真实",
    women: [
      {
        name: "J.K.罗琳",
        title: "作家",
        work: "《哈利·波特》系列",
        insight: "用想象改变世界"
      },
      {
        name: "余秀华",
        title: "诗人",
        work: "《月光落在左手上》",
        insight: "诗歌劈开命运"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，学习以创作重塑自我",
      "尝试写一首诗或一篇散文",
      "建立一个创意日记本，记录灵感"
    ],
    microHabit: {
      action: "每天用15分钟自由写作，不评判内容好坏",
      source: "源自余秀华的创作习惯"
    }
  },
  "ENFJ": {
    type: "ENFJ",
    name: "主人公",
    description: "有感染力、善于激励、乐于赋能他人",
    women: [
      {
        name: "米歇尔·奥巴马",
        title: "前美国第一夫人",
        work: "《成为》",
        insight: "激励人心的成长叙事"
      },
      {
        name: "马拉拉",
        title: "教育平权倡导者",
        work: "《我是马拉拉》",
        insight: "教育平权倡导"
      }
    ],
    nextSteps: [
      "进入体系构建者展厅，学习领导力方法论",
      "尝试组织一次小型分享会",
      "寻找一位需要指导的人，提供支持"
    ],
    microHabit: {
      action: "每天真诚地赞美或鼓励一个人",
      source: "源自米歇尔·奥巴马的激励艺术"
    }
  },
  "ENFP": {
    type: "ENFP",
    name: "活动家",
    description: "热情、创意无限、喜欢探索新可能",
    women: [
      {
        name: "Amanda Gorman",
        title: "诗人",
        work: "《The Hill We Climb》",
        insight: "诗意政治"
      },
      {
        name: "Lizzo",
        title: "歌手",
        work: "音乐与身体自爱倡导",
        insight: "无歉意自爱"
      }
    ],
    nextSteps: [
      "进入新生代思想者展厅，感受Z世代创造力",
      "尝试一个新爱好，持续一个月",
      "参加一个创意工作坊或社群"
    ],
    microHabit: {
      action: "每天尝试一件从未做过的小事",
      source: "源自ENFP的探索精神"
    }
  },
  "ISTJ": {
    type: "ISTJ",
    name: "物流师",
    description: "务实、可靠、注重细节和秩序",
    women: [
      {
        name: "樊锦诗",
        title: "敦煌研究院名誉院长",
        work: "《我心归处是敦煌》",
        insight: "一生守护敦煌"
      },
      {
        name: "叶海洋",
        title: "企业家",
        work: "社交媒体",
        insight: "非典型家庭实践"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，学习坚守的力量",
      "制定一个长期计划，分解为月度目标",
      "建立个人知识管理系统"
    ],
    microHabit: {
      action: "每天睡前整理第二天的工作清单",
      source: "源自樊锦诗的秩序感"
    }
  },
  "ISFJ": {
    type: "ISFJ",
    name: "守护者",
    description: "温和、体贴、默默付出",
    women: [
      {
        name: "任茜",
        title: "中学教师",
        work: "21年坚守一线",
        insight: "平凡中的力量"
      },
      {
        name: "曹 (银发少女)",
        title: "社交媒体创作者",
        work: "晚年自我探索",
        insight: "终身成长"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，感受平凡中的力量",
      "记录你帮助他人的小故事",
      "学习如何更好地照顾自己"
    ],
    microHabit: {
      action: "每天做一件让自己感到温暖的小事",
      source: "源自ISFJ的关怀本能"
    }
  },
  "ESTJ": {
    type: "ESTJ",
    name: "组织者",
    description: "果断、务实、善于组织管理",
    women: [
      {
        name: "王凤英",
        title: "汽车业高管",
        work: "长城汽车/小鹏汽车战略",
        insight: "精准管理"
      },
      {
        name: "Catherine Cortez Masto",
        title: "美国参议员",
        work: "首位拉丁裔女性参议员",
        insight: "政治领导力"
      }
    ],
    nextSteps: [
      "进入体系构建者展厅，学习职场方法论",
      "优化你的工作流程，提高效率",
      "尝试带领一个小团队完成项目"
    ],
    microHabit: {
      action: "每天复盘当天的工作，找出可优化的地方",
      source: "源自ESTJ的持续改进精神"
    }
  },
  "ESFJ": {
    type: "ESFJ",
    name: "执政官",
    description: "热心、重视传统、善于照顾他人",
    women: [
      {
        name: "杨静宜",
        title: "家庭成长专家",
        work: "家庭成长支持系统",
        insight: "平衡与滋养"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，学习平衡与滋养",
      "组织一次家庭或朋友聚会",
      "建立你的支持网络"
    ],
    microHabit: {
      action: "每天主动联系一位关心的人",
      source: "源自ESFJ的社交本能"
    }
  },
  "ISTP": {
    type: "ISTP",
    name: "鉴赏家",
    description: "冷静、动手能力强、追求刺激",
    women: [
      {
        name: "Maud Le Pladec",
        title: "编舞家",
        work: "《唯物主义》",
        insight: "身体哲学"
      },
      {
        name: "Wendy Suzuki",
        title: "神经科学家",
        work: "《健康大脑，快乐人生》",
        insight: "运动改造大脑"
      }
    ],
    nextSteps: [
      "进入领域破壁者展厅，探索身体与艺术",
      "尝试一项新的运动或手工活动",
      "学习一项实用技能"
    ],
    microHabit: {
      action: "每天进行10分钟的身体活动",
      source: "源自Wendy Suzuki的运动理念"
    }
  },
  "ISFP": {
    type: "ISFP",
    name: "探险家",
    description: "温柔、艺术气质、活在当下",
    women: [
      {
        name: "张黎星",
        title: "苏绣传承人",
        work: "非遗与当代审美结合",
        insight: "传统新表达"
      },
      {
        name: "樊锦诗",
        title: "敦煌研究院名誉院长",
        work: "《我心归处是敦煌》",
        insight: "艺术守护"
      }
    ],
    nextSteps: [
      "进入新生代思想者展厅，感受传统文化新表达",
      "尝试一种手工艺或艺术创作",
      "去参观一个艺术展览"
    ],
    microHabit: {
      action: "每天花5分钟欣赏一件美好的事物",
      source: "源自ISFP的审美本能"
    }
  },
  "ESTP": {
    type: "ESTP",
    name: "企业家",
    description: "精力充沛、善于应变、享受冒险",
    women: [
      {
        name: "梅耶·马斯克",
        title: "营养师、模特",
        work: "《人生由我》",
        insight: "多次重启人生"
      },
      {
        name: "Diana Nyad",
        title: "长距离游泳运动员",
        work: "《Find a Way》",
        insight: "64岁极限游泳"
      }
    ],
    nextSteps: [
      "进入行动启发者展厅，学习冒险与重启",
      "制定一个挑战计划，突破舒适区",
      "尝试一项极限运动或冒险活动"
    ],
    microHabit: {
      action: "每周做一件让你感到刺激的新鲜事",
      source: "源自梅耶·马斯克的冒险精神"
    }
  },
  "ESFP": {
    type: "ESFP",
    name: "表演者",
    description: "热情、有趣、享受当下",
    women: [
      {
        name: "Lizzo",
        title: "歌手",
        work: "音乐与表演",
        insight: "无歉意自爱"
      },
      {
        name: "Ali Wong",
        title: "喜剧演员",
        work: "脱口秀",
        insight: "禁忌话题的爆笑坦诚"
      }
    ],
    nextSteps: [
      "进入文化洞察者展厅的乐观重塑者专区",
      "尝试表演或公开表达",
      "组织一场欢乐的聚会"
    ],
    microHabit: {
      action: "每天做一件让自己开心大笑的事",
      source: "源自ESFP的快乐哲学"
    }
  }
};

export const calculateMBTI = (answers: string[]): string => {
  return answers.join('');
};
