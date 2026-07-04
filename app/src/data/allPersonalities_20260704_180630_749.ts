// ============================================================
// 统一数据源 — 女性觉醒博物馆所有人物数据
// 合并来源：personalities.ts（含 5 个附加文件）+ exhibitionHalls.ts 补充
// ============================================================

import { allPersonalities as baseAllPersonalities } from './personalities';

// ============================================================
// 统一接口定义
// ============================================================

export interface Woman {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  image: string;
  introduction: string;
  methodology: string;
  cognition: string;
  works: string[];
  quote?: string;
  microHabit?: string;
  mbtiType: string;
}

export interface PersonalityType {
  type: string;
  name: string;
  description: string;
  traits: {
    strengths: string[];
    challenges: string[];
  };
  women: Woman[];
}

// ============================================================
// 来自 ExhibitionHalls 的补充人物（不在 personalities 中的）
// ============================================================

interface ExhibitionWomanInput {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  image: string;
  introduction: string;
  methodology: string;
  cognition: string;
  works: string[];
  quote?: string;
}

const exhibitionWomenByMbti: Record<string, ExhibitionWomanInput[]> = {
  INTJ: [
    {
      id: "wang-xiao", name: "王潇", nameEn: "Wang Xiao",
      title: "作家、趁早品牌创始人", image: "/images/wangxiao.jpg",
      introduction: "中国作家、趁早品牌创始人。提出五种时间理论，帮助女性建立时间管理的系统思维。",
      methodology: "五种时间理论——将时间分为生存、赚钱、好看、好玩、心流五种，帮助女性建立时间管理的系统思维。",
      cognition: "当你开始主动分配时间，你就在练习为自己做选择。",
      works: ["《五种时间》", "《按自己的意愿过一生》"],
      quote: "当你开始主动分配时间，你就在练习为自己做选择。"
    },
    {
      id: "liang-ning", name: "梁宁", nameEn: "Liang Ning",
      title: "产品战略专家", image: "/images/liangning.jpg",
      introduction: "中国产品战略专家，用产品思维解构人生和商业。",
      methodology: "用产品视角解构人生，将人生视为一个需要不断迭代的产品，用系统思维解决复杂问题。",
      cognition: "用产品视角看人生，你会发现自己才是最好的产品。",
      works: ["《产品思维30讲》"],
      quote: "用产品视角看人生，你会发现自己才是最好的产品。"
    },
    {
      id: "ueno-chizuko", name: "上野千鹤子", nameEn: "Chizuko Ueno",
      title: "社会学家、作家", image: "/images/ueno.jpg",
      introduction: "日本社会学家、东京大学名誉教授。将厌女概念化，揭示社会性别偏见的结构性。",
      methodology: "将厌女概念化，揭示社会性别偏见的结构性，帮助女性从个人痛苦中看到系统问题。",
      cognition: "当你把这是我的问题换成这是社会的问题，愤怒就会变成力量。",
      works: ["《厌女》", "《从零开始的女性主义》"],
      quote: "当你把这是我的问题换成这是社会的问题，愤怒就会变成力量。"
    },
    {
      id: "li-fei-fei", name: "李飞飞", nameEn: "Fei-Fei Li",
      title: "AI科学家、斯坦福教授", image: "/images/lifeifei.jpg",
      introduction: "AI科学家、斯坦福大学教授，ImageNet创始人。用问题驱动学习法推动AI发展。",
      methodology: "问题驱动学习法——不是为了学习而学习，而是为了解决真实问题而学习。",
      cognition: "我从来不是为了成为AI科学家而学习。我只是想解决那个问题，而学习是必经之路。",
      works: ["AI for All"],
      quote: "我从来不是为了成为AI科学家而学习。我只是想解决那个问题，而学习是必经之路。"
    },
  ],
  ENFJ: [
    {
      id: "cui-cui", name: "崔璀", nameEn: "Cui Cui",
      title: "优势管理导师、Momself创始人", image: "/images/cuicui.jpg",
      introduction: "中国优势管理导师、Momself创始人。倡导不是补短板，而是让长板足够长。",
      methodology: "优势管理——不是补短板，而是让长板足够长。通过识别个人优势，找到适合自己的成长路径。",
      cognition: "真正的成长不是补短板，而是让你的长板足够长。",
      works: ["《每个人都有自己的职场优势》"],
      quote: "真正的成长不是补短板，而是让你的长板足够长。"
    },
    {
      id: "li-yinuo", name: "李一诺", nameEn: "Li Yinuo",
      title: "一土教育创始人、前麦肯锡合伙人", image: "/images/liyino.jpg",
      introduction: "一土教育创始人、前麦肯锡全球合伙人。从不敢到敢的转变，通过自我对话和认知重构找到内在力量。",
      methodology: "从不敢到敢的转变，通过自我对话和认知重构，找到内在力量的来源。",
      cognition: "真正的力量不是完美，而是敢于真实。",
      works: ["《力量从哪里来》"],
      quote: "真正的力量不是完美，而是敢于真实。"
    },
    {
      id: "malala", name: "马拉拉", nameEn: "Malala Yousafzai",
      title: "教育活动家", image: "/images/malala.jpg",
      introduction: "巴基斯坦教育活动家，诺贝尔和平奖最年轻得主。为女孩教育权利发声。",
      methodology: "用勇气和坚持为女孩教育权利发声，即使面对死亡威胁也不退缩。",
      cognition: "一本书、一支笔、一个孩子、一位老师，可以改变世界。",
      works: ["《我是马拉拉》"],
      quote: "一本书、一支笔、一个孩子、一位老师，可以改变世界。"
    },
  ],
  INFP: [
    {
      id: "yu-xiuhua", name: "余秀华", nameEn: "Yu Xiuhua",
      title: "诗人", image: "/images/yuxiuhua.jpg",
      introduction: "中国诗人，用诗歌表达身体、欲望与痛苦，将个人经历转化为普遍的情感共鸣。",
      methodology: "用诗歌表达身体、欲望与痛苦，将个人经历转化为普遍的情感共鸣。",
      cognition: "痛苦没有意义，但当你把它变成诗，它就有了意义。",
      works: ["《月光落在左手上》"],
      quote: "痛苦没有意义，但当你把它变成诗，它就有了意义。"
    },
    {
      id: "tara-westover", name: "塔拉·韦斯特弗", nameEn: "Tara Westover",
      title: "历史学家", image: "/images/tarawestover.jpg",
      introduction: "美国历史学家、作家。通过教育逃离极端家庭，用知识重构自我。",
      methodology: "通过教育逃离极端家庭，用知识重构自我，证明改变是可能的。",
      cognition: "你可以爱一个人，但仍然选择和他说再见。",
      works: ["《你当像鸟飞往你的山》"],
      quote: "你可以爱一个人，但仍然选择和他说再见。"
    },
  ],
  INFJ: [
    {
      id: "susan-cain", name: "Susan Cain", nameEn: "Susan Cain",
      title: "作家、安静革命倡导者", image: "/images/susancain.jpg",
      introduction: "美国作家，安静革命倡导者。重新定义内向，将内向从缺陷转化为独特的优势。",
      methodology: "重新定义内向，将内向从缺陷转化为独特的优势，为内向女性提供自我接纳的框架。",
      cognition: "内向不是缺陷，是你独特的优势。",
      works: ["《安静：内向性格的竞争力》"],
      quote: "内向不是缺陷，是你独特的优势。"
    },
    {
      id: "han-jiang", name: "韩江", nameEn: "Han Kang",
      title: "作家、诺贝尔奖得主", image: "/images/hanjiang.jpg",
      introduction: "韩国作家，2024年诺贝尔文学奖得主。用文学探索暴力、尊严与人性。",
      methodology: "用文学探索暴力、尊严与人性，通过极端情境揭示女性在社会中的处境。",
      cognition: "我写的是人，是人的尊严如何在暴力中幸存。",
      works: ["《素食者》"],
      quote: "我写的是人，是人的尊严如何在暴力中幸存。"
    },
    {
      id: "zhang-guimei", name: "张桂梅", nameEn: "Zhang Guimei",
      title: "教师、校长", image: "/images/zhangguimei.jpg",
      introduction: "中国教师，创办免费女子高中华坪女高，用教育改变山区女孩的命运。",
      methodology: "创办免费女子高中，用教育改变山区女孩的命运，一生奉献给教育事业。",
      cognition: "我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。",
      works: ["华坪女高"],
      quote: "我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。"
    },
    {
      id: "greta-thunberg", name: "Greta Thunberg", nameEn: "Greta Thunberg",
      title: "环保活动家", image: "/images/gretathunberg.jpg",
      introduction: "瑞典环保活动家。用科学说话，用行动证明，让年轻人成为改变世界的力量。",
      methodology: "用科学说话，用行动证明，让年轻人成为改变世界的力量。",
      cognition: "用科学说话，绝不妥协。",
      works: ["气候行动"],
      quote: "用科学说话，绝不妥协。"
    },
    {
      id: "xue-li", name: "雪力", nameEn: "Xue Li",
      title: "MBTI创作者", image: "/images/sherry.jpg",
      introduction: "中国MBTI内容创作者，用MBTI帮助年轻人了解自己。",
      methodology: "用MBTI帮助年轻人了解自己，是觉醒的第一步。",
      cognition: "了解自己，是觉醒的第一步。",
      works: ["心理学内容"],
      quote: "了解自己，是觉醒的第一步。"
    },
  ],
  ENTP: [
    {
      id: "mona-chalabi", name: "Mona Chalabi", nameEn: "Mona Chalabi",
      title: "数据新闻艺术家", image: "/images/monachalabi.jpg",
      introduction: "数据新闻艺术家，用手绘让数据活起来，让复杂的统计信息变得直观、有趣。",
      methodology: "用手绘让数据活起来，让复杂的统计信息变得直观、有趣、易懂。",
      cognition: "数据不会说谎，但使用数据的人会。我用画笔让真相可见。",
      works: ["数据可视化作品"],
      quote: "数据不会说谎，但使用数据的人会。我用画笔让真相可见。"
    },
    {
      id: "hong-huang", name: "洪晃", nameEn: "Hong Huang",
      title: "媒体人、作家", image: "/images/honghuang.jpg",
      introduction: "中国媒体人、作家。用犀利的语言解构消费主义和性别规训。",
      methodology: "用犀利的语言解构消费主义和性别规训，为女性提供文化祛魅的视角。",
      cognition: "别让任何人定义你是谁，尤其是那些想赚你钱的人。",
      works: ["专栏、评论"],
      quote: "别让任何人定义你是谁，尤其是那些想赚你钱的人。"
    },
    {
      id: "li-xueqin", name: "李雪琴", nameEn: "Li Xueqin",
      title: "脱口秀演员", image: "/images/lixueqin.jpg",
      introduction: "中国脱口秀演员，用幽默和哲学思辨解构精英叙事。",
      methodology: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
      cognition: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
      works: ["脱口秀"],
      quote: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。"
    },
  ],
  INTP: [
    {
      id: "neri-oxman", name: "Neri Oxman", nameEn: "Neri Oxman",
      title: "设计师、MIT教授", image: "/images/nerioxman.jpg",
      introduction: "以色列裔美国设计师、MIT教授。让建筑像自然一样生长，模糊自然、工程与艺术的边界。",
      methodology: "让建筑像自然一样生长，模糊自然、工程与艺术的边界，创造可持续的设计。",
      cognition: "让建筑像自然一样生长，模糊自然、工程与艺术的边界。",
      works: ["材料生态学"],
      quote: "让建筑像自然一样生长，模糊自然、工程与艺术的边界。"
    },
    {
      id: "hao-jingfang", name: "郝景芳", nameEn: "Hao Jingfang",
      title: "科幻作家、雨果奖得主", image: "/images/haojingfang.jpg",
      introduction: "中国科幻作家，雨果奖得主。用科幻审视现实，通过虚构的未来世界反思当下社会问题。",
      methodology: "用科幻审视现实，通过虚构的未来世界，反思当下的社会问题。",
      cognition: "科幻不是预测未来，而是用未来审视现在。",
      works: ["《北京折叠》"],
      quote: "科幻不是预测未来，而是用未来审视现在。"
    },
  ],
  ISFP: [
    {
      id: "zhang-lixing", name: "张黎星", nameEn: "Zhang Lixing",
      title: "苏绣传承人", image: "/images/zhanglixing.jpg",
      introduction: "中国苏绣传承人。将传统苏绣与现代审美结合，让非遗活在当下。",
      methodology: "将传统苏绣与现代审美结合，让非遗活在当下，吸引年轻人关注传统文化。",
      cognition: "传统不是用来供奉的，是用来活着的。",
      works: ["非遗创新"],
      quote: "传统不是用来供奉的，是用来活着的。"
    },
  ],
  ENFP: [
    {
      id: "roxane-gay", name: "Roxane Gay", nameEn: "Roxane Gay",
      title: "作家", image: "/images/roxanegay.jpg",
      introduction: "美国作家。打破完美女性主义者的神话，承认矛盾与复杂。",
      methodology: "打破完美女性主义者的神话，承认矛盾与复杂，让女性主义更加包容和真实。",
      cognition: "我不完美，我矛盾，但我真实。这比任何标准答案都重要。",
      works: ["《不良女性主义者》"],
      quote: "我不完美，我矛盾，但我真实。这比任何标准答案都重要。"
    },
    {
      id: "amanda-gorman", name: "Amanda Gorman", nameEn: "Amanda Gorman",
      title: "诗人", image: "/images/amandagorman.jpg",
      introduction: "美国诗人，在总统就职典礼上朗诵。用诗歌作为变革的武器。",
      methodology: "用诗歌作为变革的武器，在总统就职典礼上为美国发声。",
      cognition: "诗歌不是装饰，它是变革的武器。",
      works: ["《The Hill We Climb》"],
      quote: "诗歌不是装饰，它是变革的武器。"
    },
  ],
  ESTJ: [
    {
      id: "maye-musk", name: "梅耶·马斯克", nameEn: "Maye Musk",
      title: "模特、营养师", image: "/images/mayemusk.jpg",
      introduction: "模特、营养师。冒险而审慎地生活，在70岁依然重启人生。",
      methodology: "冒险而审慎地生活——制定计划，然后敢于执行，在70岁依然重启人生。",
      cognition: "冒险而审慎地生活。制定计划，然后敢于执行。",
      works: ["《人生由我》"],
      quote: "冒险而审慎地生活。制定计划，然后敢于执行。"
    },
  ],
  ESFP: [
    {
      id: "lizzo", name: "Lizzo", nameEn: "Lizzo",
      title: "歌手", image: "/images/lizzo.jpg",
      introduction: "美国歌手。用音乐和公众形象倡导身体自爱，打破完美身材的神话。",
      methodology: "用音乐和公众形象倡导身体自爱，打破完美身材的神话。",
      cognition: "如果你能爱自己最坏的部分，那么其他一切都会变得容易。",
      works: ["音乐、身体自爱倡导"],
      quote: "如果你能爱自己最坏的部分，那么其他一切都会变得容易。"
    },
  ],
};

// ============================================================
// 从旧的 Personality 接口转换为新的 Woman 接口
// ============================================================

interface OldWoman {
  id: string;
  name: string;
  nameEn: string;
  title: string;
  image: string;
  introduction: string;
  methodology: string;
  cognition: string;
  works: string[];
  quote?: string;
  microHabit?: string;
}

interface OldPersonality {
  type: string;
  name: string;
  description: string;
  traits: { strengths: string[]; challenges: string[]; };
  women: OldWoman[];
}

function toWoman(w: OldWoman, mbtiType: string): Woman {
  return {
    id: w.id,
    name: w.name,
    nameEn: w.nameEn,
    title: w.title,
    image: w.image,
    introduction: w.introduction,
    methodology: w.methodology,
    cognition: w.cognition,
    works: w.works,
    quote: (w as any).quote,
    microHabit: (w as any).microHabit,
    mbtiType,
  };
}

function toExhibitionWoman(w: ExhibitionWomanInput, mbtiType: string): Woman {
  return {
    id: w.id,
    name: w.name,
    nameEn: w.nameEn,
    title: w.title,
    image: w.image,
    introduction: w.introduction,
    methodology: w.methodology,
    cognition: w.cognition,
    works: w.works,
    quote: w.quote,
    mbtiType,
  };
}

// ============================================================
// 合并：personalities 基础数据 + exhibition hall 补充
// ============================================================

function buildAllPersonalities(): PersonalityType[] {
  const map = new Map<string, {
    type: string;
    name: string;
    description: string;
    traits: { strengths: string[]; challenges: string[] };
    womenMap: Map<string, Woman>;
  }>();

  // 第一轮：导入 personalities.ts 已合并的数据
  for (const p of (baseAllPersonalities as unknown as OldPersonality[])) {
    if (!map.has(p.type)) {
      map.set(p.type, {
        type: p.type,
        name: p.name,
        description: p.description,
        traits: p.traits,
        womenMap: new Map(),
      });
    }
    const entry = map.get(p.type)!;
    for (const w of p.women) {
      if (!entry.womenMap.has(w.id)) {
        entry.womenMap.set(w.id, toWoman(w, p.type));
      }
    }
  }

  // 第二轮：添加 exhibition hall 补充人物（去重）
  for (const [mbtiType, womenArr] of Object.entries(exhibitionWomenByMbti)) {
    if (!map.has(mbtiType)) {
      // 如果该 MBTI 类型在 personalities 中不存在，跳过
      // （所有 16 种类型都在 personalities 中存在）
      continue;
    }
    const entry = map.get(mbtiType)!;
    for (const w of womenArr) {
      if (!entry.womenMap.has(w.id)) {
        entry.womenMap.set(w.id, toExhibitionWoman(w, mbtiType));
      }
    }
  }

  return Array.from(map.values()).map(entry => ({
    type: entry.type,
    name: entry.name,
    description: entry.description,
    traits: entry.traits,
    women: Array.from(entry.womenMap.values()),
  }));
}

export const allPersonalities: PersonalityType[] = buildAllPersonalities();

// ============================================================
// 便捷查询函数
// ============================================================

/** 获取所有女性的扁平数组 */
export function getAllWomen(): Woman[] {
  return allPersonalities.flatMap(p => p.women);
}

/** 按 MBTI 类型查询女性 */
export function getWomenByMbti(type: string): Woman[] {
  const pt = allPersonalities.find(p => p.type === type.toUpperCase());
  return pt ? [...pt.women] : [];
}

/** 按 MBTI 类型查询人格 */
export function getPersonalityByType(type: string): PersonalityType | undefined {
  return allPersonalities.find(p => p.type === type.toUpperCase());
}
