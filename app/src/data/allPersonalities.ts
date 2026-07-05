// ============================================================
// 统一数据源 — 女性觉醒博物馆所有人物数据
// 合并来源：personalities.ts + 5 个附加文件 + exhibitionHalls.ts
// ============================================================

import { personalities } from './personalities';
import { additionalPersonalities } from './personalities-additional';
import { additionalPersonalitiesPart2 } from './personalities-additional-2';
import { additionalPersonalitiesPart3 } from './personalities-additional-3';
import { additionalPersonalitiesPart4 } from './personalities-additional-4';
import { additionalPersonalitiesPart5 } from './personalities-additional-5';

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
  mbtiType?: string;  // 合并时自动填充，输入源可不带此字段
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

/** mergePersonalities 接受的宽松输入类型（women 字段无需 mbtiType） */
type PersonalityInput = Omit<PersonalityType, 'women'> & { women: Omit<Woman, 'mbtiType'>[] };

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
      cognition: "她将时间管理从效率工具提升为人生哲学——五种时间不是五份清单，而是五种生命质量的分配策略。在她的认知体系中，每一次对时间的主动分配都是对‘被动人生’的一次革命。当你决定这两小时属于心流而非社交媒体，你就在为自己投票。她的方法论本质上是一个女性的自我赋权宣言：选择权从不来自外部授权，而来自每一分钟的自决。",
      works: ["《五种时间》", "《按自己的意愿过一生》"],
      quote: "当你开始主动分配时间，你就在练习为自己做选择。"
    },
    {
      id: "liang-ning", name: "梁宁", nameEn: "Liang Ning",
      title: "产品战略专家", image: "/images/liangning.jpg",
      introduction: "中国产品战略专家，用产品思维解构人生和商业。",
      methodology: "用产品视角解构人生，将人生视为一个需要不断迭代的产品，用系统思维解决复杂问题。",
      cognition: "她将产品思维从商业领域带入个人成长，提出一个根本性的认知翻转：你的人生不是一连串随机事件，而是一个可以设计、迭代、优化的产品。痛点即需求、反馈即数据、迭代即成长——她用这套冷酷而精确的框架，为感性的自我探索提供了可操作的路径。在她看来，女性最被低估的能力正是系统性思考。",
      works: ["《产品思维30讲》"],
      quote: "用产品视角看人生，你会发现自己才是最好的产品。"
    },
    {
      id: "ueno-chizuko", name: "上野千鹤子", nameEn: "Chizuko Ueno",
      title: "社会学家、作家", image: "/images/ueno.jpg",
      introduction: "日本社会学家、东京大学名誉教授。将厌女概念化，揭示社会性别偏见的结构性。",
      methodology: "将厌女概念化，揭示社会性别偏见的结构性，帮助女性从个人痛苦中看到系统问题。",
      cognition: "她将女性最私密的羞耻与愤怒从个人房间里拽出，放到社会学的手术台上解剖。在她的认知体系中，厌女不是某个男人的恶意，而是弥漫在语言、制度、日常互动中的结构性毒雾。她教女性做一道关键的认知转换：当你不再质问‘我哪里不够好’，而是审视‘这个系统哪里出了问题’，愤怒就不再是毒药，而是燃料。",
      works: ["《厌女》", "《从零开始的女性主义》"],
      quote: "当你把这是我的问题换成这是社会的问题，愤怒就会变成力量。"
    },
    {
      id: "li-fei-fei", name: "李飞飞", nameEn: "Fei-Fei Li",
      title: "AI科学家、斯坦福教授", image: "/images/lifeifei.jpg",
      introduction: "AI科学家、斯坦福大学教授，ImageNet创始人。用问题驱动学习法推动AI发展。",
      methodology: "问题驱动学习法——不是为了学习而学习，而是为了解决真实问题而学习。",
      cognition: "她为技术精英叙事提供了一种罕见的反叙事——驱动力不来自头衔或地位，而来自被某个问题深深困扰的诚实。ImageNet 不是她的简历项目，而是她解答‘机器如何真正看见世界’的必经驿站。她的认知核心是一种祛魅式成长：真正的卓越不是追逐标签的结果，而是被一个好问题引领着穿过所有学科边界的旅程。",
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
      cognition: "她颠覆了传统的补短板式教育逻辑，提出优势管理的核心认知：你不是一堆待修复的缺陷，而是一套独特的优势组合。在她的框架里，成长不是削足适履地迎合标准，而是找到自己最锋利的刀刃并反复打磨。对于在‘我不够好’的焦虑中长大的女性来说，这个认知本身就是一种解放——停止修复自己，开始释放自己。",
      works: ["《每个人都有自己的职场优势》"],
      quote: "真正的成长不是补短板，而是让你的长板足够长。"
    },
    {
      id: "li-yinuo", name: "李一诺", nameEn: "Li Yinuo",
      title: "一土教育创始人、前麦肯锡合伙人", image: "/images/liyino.jpg",
      introduction: "一土教育创始人、前麦肯锡全球合伙人。从不敢到敢的转变，通过自我对话和认知重构找到内在力量。",
      methodology: "从不敢到敢的转变，通过自我对话和认知重构，找到内在力量的来源。",
      cognition: "她用从麦肯锡到一土教育的转身证明了认知升级的完整路径：卓越的第一阶段是学会在别人的标准里做到最好；第二阶段是发现自己从来不需要那些标准。她的方法论本质上是用自我对话替代外部验证——当你敢于对镜中的自己说出完整的真相，你就不再需要任何人给你颁发授权证书。",
      works: ["《力量从哪里来》"],
      quote: "真正的力量不是完美，而是敢于真实。"
    },
    {
      id: "malala", name: "马拉拉", nameEn: "Malala Yousafzai",
      title: "教育活动家", image: "/images/malala.jpg",
      introduction: "巴基斯坦教育活动家，诺贝尔和平奖最年轻得主。为女孩教育权利发声。",
      methodology: "用勇气和坚持为女孩教育权利发声，即使面对死亡威胁也不退缩。",
      cognition: "她在子弹面前拒绝沉默，将教育权从抽象的理想转化为具体的意象——一本书、一支笔、一个孩子、一位老师。她的认知核心是对文明最原始的回归：所有的宏大的变革最终都始于一个人对另一个人说‘你可以知道更多’。当她站在联合国讲坛上，她不是作为受害者发言，而是作为教育权本身的化身在宣告：枪可以杀死一个人，但杀不死一个开始思考的女孩。",
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
      cognition: "她拒绝给痛苦镀金——不说什么‘苦难使人坚强’的廉价安慰，而是诚实地说：痛苦本身毫无意义。真正的魔法发生在转化的那一刻：当身体的疼痛、欲望的焦灼、婚姻的窒息被锻造成诗行，那种无意义的折磨突然获得了形式，而形式本身就是对抗混沌的最古老武器。她的认知给所有在黑暗中书写的人一个位置：你不是在承受痛苦，你是在把它变成别人的镜子。",
      works: ["《月光落在左手上》"],
      quote: "痛苦没有意义，但当你把它变成诗，它就有了意义。"
    },
    {
      id: "tara-westover", name: "塔拉·韦斯特弗", nameEn: "Tara Westover",
      title: "历史学家", image: "/images/tarawestover.jpg",
      introduction: "美国历史学家、作家。通过教育逃离极端家庭，用知识重构自我。",
      methodology: "通过教育逃离极端家庭，用知识重构自我，证明改变是可能的。",
      cognition: "她用一个句子炸毁了‘爱=顺从’的千年等式。在她的认知体系里，爱不是勒索你留下的绳索，而是一种可以与被爱者分离的情感能力。从巴克峰废料场到剑桥博士，她用教育重新编程了自己的世界观，却从未否认对家人的爱。这种复杂性的承受力本身，就是她对女性最深层的启示：你可以同时拥有爱和自由，两者不需要互相消灭。",
      works: ["《你当像鸟飞往你的山》"],
      quote: "你可以爱一个人，但仍然选择和他说再见。"
    },
  ],
  INFJ: [
    {
      id: "susan-cain", name: "Susan Cain", nameEn: "Susan Cain",
      title: "作家、安静革命倡导者", image: "",
      introduction: "美国作家，安静革命倡导者。重新定义内向，将内向从缺陷转化为独特的优势。",
      methodology: "重新定义内向，将内向从缺陷转化为独特的优势，为内向女性提供自我接纳的框架。",
      cognition: "她在喧嚣的文化中为沉默者夺回了合法性——内向不是社交无能，而是一种不同的神经系统设定。她用研究和叙事双重武器攻击‘外向优势’的神话，揭示深度的思考、一对一的连接和独处的创造力正是内向者未被开发的超能力。对于在会议室、教室、约会现场因安静而自责的女性，她的认知是一张迟到的诊断书：你不需要被修复，你需要换一个适合自己的战场。",
      works: ["《安静：内向性格的竞争力》"],
      quote: "内向不是缺陷，是你独特的优势。"
    },
    {
      id: "han-jiang", name: "韩江", nameEn: "Han Kang",
      title: "作家、诺贝尔奖得主", image: "/images/hanjiang.jpg",
      introduction: "韩国作家，2024年诺贝尔文学奖得主。用文学探索暴力、尊严与人性。",
      methodology: "用文学探索暴力、尊严与人性，通过极端情境揭示女性在社会中的处境。",
      cognition: "她拒绝将作品归类为女性主义文学，而是坚持自己写的是‘人’——这一拒绝本身就包含了深刻的认知立场：当女性拒绝所有叙述都必须通过性别滤镜，就是在要求一种不被标注的普遍人性。在《素食者》中，一个拒绝吃肉的女人撕开的不仅是餐桌上的张力，更是整个社会对身体、欲望和服从的暴力性规则。她用极简的文字承载最极端的身体政治，证明尊严的最后一寸防线不在外界，而在身体里。",
      works: ["《素食者》"],
      quote: "我写的是人，是人的尊严如何在暴力中幸存。"
    },
    {
      id: "zhang-guimei", name: "张桂梅", nameEn: "Zhang Guimei",
      title: "教师、校长", image: "/images/zhangguimei.jpg",
      introduction: "中国教师，创办免费女子高中华坪女高，用教育改变山区女孩的命运。",
      methodology: "创办免费女子高中，用教育改变山区女孩的命运，一生奉献给教育事业。",
      cognition: "她用一个校训改写了山区女孩的集体潜意识——当整个环境都在暗示你只能随波逐流，她把一张升学率表格变成了反叙事的武器。在她的认知体系中，贫困不是命运的判决书，而是一个需要被教育击穿的隔离墙。她用燃烧自我的方式点亮了数千个女孩的未来，证明一个女性的觉醒可以不是一个人的觉醒，而是一代人的。华坪女高的每一盏深夜的灯，都是对‘女性不需要读书’的最沉默的反驳。",
      works: ["华坪女高"],
      quote: "我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。"
    },
    {
      id: "greta-thunberg", name: "Greta Thunberg", nameEn: "Greta Thunberg",
      title: "环保活动家", image: "/images/gretathunberg.jpg",
      introduction: "瑞典环保活动家。用科学说话，用行动证明，让年轻人成为改变世界的力量。",
      methodology: "用科学说话，用行动证明，让年轻人成为改变世界的力量。",
      cognition: "她将青少年从‘太小不懂事’的刻板印象中解放出来——当她举着‘气候罢课’的牌子坐在瑞典议会前，她做了一个认知上的战略决策：不是与成年人争论她的年龄是否构成资格，而是把对话的框架直接拉到科学事实层面。在她的战场里，焦虑不是弱点，而是对这个世界的诚实反应。她证明了一个十几岁的女孩可以打破全世界的回避机制——不是因为她的愤怒足够大声，而是因为她的引用足够精确。",
      works: ["气候行动"],
      quote: "用科学说话，绝不妥协。"
    },
    {
      id: "xue-li", name: "雪力", nameEn: "Xue Li",
      title: "MBTI创作者", image: "",
      introduction: "中国MBTI内容创作者，用MBTI帮助年轻人了解自己。",
      methodology: "用MBTI帮助年轻人了解自己，是觉醒的第一步。",
      cognition: "她将MBTI从娱乐化的人格标签中拯救出来，还原为一件严肃的自我考古工具。在她的认知框架里，了解自己的类型不是给自己贴标签，而是识别那些你以为是‘性格缺陷’的东西其实是某种类型的自然运作方式。对于在‘我是不是太敏感了’、‘我是不是太理性了’的自我质疑中徘徊的女性，她的核心信息具有诊断意义：觉醒不始于变成一个更好的人，而始于停止否定现在的自己。",
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
      cognition: "她在数字与色彩之间架起了一座属于普通人的桥梁。数据可视化之于她，不是为了让报表更好看，而是对隐蔽偏见的溯源——一个柱状图背后可能藏着系统性歧视，一张饼图上可能躺着被统计遗忘的人群。她用女性的直觉和艺术家的坦率突破数据的冰冷外表，证明真相并不遥远，只是需要一个更诚实的声音把它讲出来。",
      works: ["数据可视化作品"],
      quote: "数据不会说谎，但使用数据的人会。我用画笔让真相可见。"
    },
    {
      id: "hong-huang", name: "洪晃", nameEn: "Hong Huang",
      title: "媒体人、作家", image: "/images/honghuang.jpg",
      introduction: "中国媒体人、作家。用犀利的语言解构消费主义和性别规训。",
      methodology: "用犀利的语言解构消费主义和性别规训，为女性提供文化祛魅的视角。",
      cognition: "她把文化批评变成了一门生存技能——当消费主义用‘独立女性’的包装卖给你更贵的口红，她的认知就是一面照妖镜：谁在定义你的‘自由’？谁在出售你的‘解放’？在中国精英圈层浸泡半生的她，比谁都清楚语言如何被收编为规训工具。她的核心认知是一种文化免疫学：在购买任何叙事之前，先问一句——这个故事的作者是谁，他想从我这里拿走什么？",
      works: ["专栏、评论"],
      quote: "别让任何人定义你是谁，尤其是那些想赚你钱的人。"
    },
    {
      id: "li-xueqin", name: "李雪琴", nameEn: "Li Xueqin",
      title: "脱口秀演员", image: "/images/lixueqin.jpg",
      introduction: "中国脱口秀演员，用幽默和哲学思辨解构精英叙事。",
      methodology: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
      cognition: "她用北大学历和脱口秀舞台做了一个优雅的认知降维——当精英叙事用复杂的词汇让你感到渺小，她用幽默把这些词汇拆成最简单的疑问。她的核心武器不是让观众笑，而是让观众在笑声中意识到：那些令你自卑的标准本身就不值得你尊重。在她看来，真正的思想者不是把简单的事说复杂，而是把复杂的事说到普通人心里去——这不只是传播技巧，而是一种认知上的民主实践。",
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
      cognition: "她拒绝在科学、艺术与工程之间做选择——这种拒绝本身就是一种认知革命。在她的材料生态学中，蚕丝可以变成建筑，甲壳素可以替代塑料，自然不是被征服的对象而是被协作的伙伴。她证明女性的跨学科直觉不是跳跃性的弱点，而是一种整体性思维的天赋。当一个领域用‘这不是你的专业’来限制你时，她的回答是：边界是人造的，而创造发生在所有边界的裂缝中。",
      works: ["材料生态学"],
      quote: "让建筑像自然一样生长，模糊自然、工程与艺术的边界。"
    },
    {
      id: "hao-jingfang", name: "郝景芳", nameEn: "Hao Jingfang",
      title: "科幻作家、雨果奖得主", image: "/images/haojingfang.jpg",
      introduction: "中国科幻作家，雨果奖得主。用科幻审视现实，通过虚构的未来世界反思当下社会问题。",
      methodology: "用科幻审视现实，通过虚构的未来世界，反思当下的社会问题。",
      cognition: "她将科幻从技术预言的神坛上拉下，重新定义为当下的诊断工具。在《北京折叠》的空间分层里，她不是在预测北京的2026年，而是在解剖当下的阶层隔离如何被物理化。她的认知核心在于：未来学的价值不在于准确性，而在于它提供了一种离开当下困境的安全距离——从未来回看今天，那些看似不可逾越的障碍突然变得清晰可见、甚至可笑。",
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
      cognition: "她用手中的绣花针做了一个看似微小却意义深远的认知翻盘——非遗保护不是把老东西放进玻璃柜，而是让它在今天的审美里重新呼吸。每一针苏绣都在宣告：传统手工艺不是‘女性的家务延伸’，而是一种需要时间、专注与创造力的高级技艺。她为所有在传承与创新之间挣扎的女性提供了第三条路：不是二选一，而是让传统成为你创新的原材料。",
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
      cognition: "她为女性主义做了一场重要的祛魅手术——‘不良女性主义者’不是自我贬低，而是对‘完美政治正确’霸权的拒绝。在她看来，一个承认自己矛盾的人比一个声称自己拥有所有正确答案的人更可信。她用身体书写证明：女性主义不是一场纯洁性竞赛，不是检查你是否听了所有正确的音乐、读了所有正确的书，而是你是否在每一次跌倒后依然愿意站起来继续质疑那些让你跌倒的结构。",
      works: ["《不良女性主义者》"],
      quote: "我不完美，我矛盾，但我真实。这比任何标准答案都重要。"
    },
    {
      id: "amanda-gorman", name: "Amanda Gorman", nameEn: "Amanda Gorman",
      title: "诗人", image: "/images/amandagorman.jpg",
      introduction: "美国诗人，在总统就职典礼上朗诵。用诗歌作为变革的武器。",
      methodology: "用诗歌作为变革的武器，在总统就职典礼上为美国发声。",
      cognition: "她在国会山台阶上证明，一个年轻黑人女性的声音可以在同一时刻被数百万人听见——不是因为她被赋予麦克风，而是因为她写下的每一个字都经过了最严苛的锻打。在她的认知中，诗歌不是逃避现实的抒情练习，而是语言作为行动的最高形式。她为所有被教导‘艺术只是消遣’的女孩提供了一个颠覆性的视角：当你把词语排列到令权力不安的精确度时，你就把纸变成了战场。",
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
      cognition: "她用70岁的人生轨迹重写了‘什么年龄该做什么事’的剧本——离婚、带着三个孩子离开、在白发时成为超模，每一步都同时包含了冒险和审慎。她的认知核心在于：计划不是为了限制自由，而是为了让勇气有一个可落地的框架。‘冒险而审慎’不是矛盾修辞，而是对女性最常被剥夺的两种特质的平等致敬：你既要有纵身一跃的胆量，也要有在跳跃前计算过风阻的冷静。",
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
      cognition: "她将身体自爱从心理学书籍的段落中带到了流行文化的舞台中央——不是那种‘尽管你胖所以你要加倍努力’的怜悯式接纳，而是对身体每一个部分的全然拥抱。当她穿着紧身衣在舞台上吹长笛，她不是在表演自信，而是在行使一个基本的权利：你的身体是你的，不需要经过任何人的审美审查。在这个认知里，自我接纳不是自恋，而是将身体从他人的评价系统中彻底赎回。",
      works: ["音乐、身体自爱倡导"],
      quote: "如果你能爱自己最坏的部分，那么其他一切都会变得容易。"
    },
  ],
};

// ============================================================
// 合并工具函数
// ============================================================

function toWoman(w: {
  id: string; name: string; nameEn: string; title: string; image: string;
  introduction: string; methodology: string; cognition: string; works: string[];
  quote?: string; microHabit?: string;
}, mbtiType: string): Woman {
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

function mergePersonalities(...arrays: PersonalityInput[][]): PersonalityType[] {
  const map = new Map<string, { type: string; name: string; description: string; traits: { strengths: string[]; challenges: string[] }; womenMap: Map<string, Woman> }>();

  for (const arr of arrays) {
    for (const p of arr) {
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
        // 去重：相同 id 只保留首次出现
        if (!entry.womenMap.has(w.id)) {
          entry.womenMap.set(w.id, toWoman(w, p.type));
        }
      }
    }
  }

  // 添加 exhibition 人物
  for (const [mbtiType, womenArr] of Object.entries(exhibitionWomenByMbti)) {
    if (map.has(mbtiType)) {
      const entry = map.get(mbtiType)!;
      for (const w of womenArr) {
        if (!entry.womenMap.has(w.id)) {
          entry.womenMap.set(w.id, toWoman(w, mbtiType));
        }
      }
    }
  }

  const result: PersonalityType[] = [];
  for (const [, entry] of map) {
    result.push({
      type: entry.type,
      name: entry.name,
      description: entry.description,
      traits: entry.traits,
      women: Array.from(entry.womenMap.values()),
    });
  }
  return result;
}

// ============================================================
// 合并所有数据源
// ============================================================

export const allPersonalities: PersonalityType[] = mergePersonalities(
  personalities,
  additionalPersonalities,
  additionalPersonalitiesPart2,
  additionalPersonalitiesPart3,
  additionalPersonalitiesPart4,
  additionalPersonalitiesPart5,
);

// ============================================================
// 便捷查询函数
// ============================================================

/** 获取所有女性的扁平数组 */
export function getAllWomen(): Woman[] {
  return allPersonalities.flatMap(p => p.women);
}

/** 按 MBTI 类型查询女性 */
export function getWomenByMbti(type: string): Woman[] {
  const pt = allPersonalities.find(p => p.type === type);
  return pt ? [...pt.women] : [];
}

/** 按 MBTI 类型查询人格 */
export function getPersonalityByType(type: string): PersonalityType | undefined {
  return allPersonalities.find(p => p.type === type);
}
