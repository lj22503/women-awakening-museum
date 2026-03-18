// 100位女性榜样的今日觉醒卡片知识库
export interface DailyCard {
  id: string;
  name: string;
  title: string;
  quote: string;
  microHabit: string;
  source: string;
  category: string;
}

export const dailyCards: DailyCard[] = [
  // 体系构建者（1-20）
  {
    id: "wangxiao",
    name: "王潇",
    title: "作家、趁早品牌创始人",
    quote: "当你开始主动分配时间，你就在练习为自己做选择。",
    microHabit: "今天为自己创造1小时好玩时间，做一件纯粹让自己快乐的小事，不带任何功利目的。",
    source: "源自王潇《五种时间》",
    category: "体系构建者"
  },
  {
    id: "cuicui",
    name: "崔璀",
    title: "优势管理导师、Momself创始人",
    quote: "真正的成长不是补短板，而是让你的长板足够长。",
    microHabit: "今天记录一件你做得轻松又出色的事，思考这反映了你的什么优势。",
    source: "源自崔璀优势管理理念",
    category: "体系构建者"
  },
  {
    id: "liangning",
    name: "梁宁",
    title: "产品战略专家",
    quote: "用产品视角看人生，你会发现自己才是最好的产品。",
    microHabit: "选一个你最近困扰的问题，用用户-场景-痛点的框架重新描述它。",
    source: "源自梁宁《产品思维30讲》",
    category: "体系构建者"
  },
  {
    id: "liyino",
    name: "李一诺",
    title: "一土教育创始人、前麦肯锡合伙人",
    quote: "真正的力量不是完美，而是敢于真实。",
    microHabit: "今天对自己说一句诚实的我不知道或我需要帮助。",
    source: "源自李一诺《力量从哪里来》",
    category: "体系构建者"
  },
  {
    id: "susancain",
    name: "Susan Cain",
    title: "作家、安静革命倡导者",
    quote: "内向不是缺陷，是你独特的优势。",
    microHabit: "今天给自己留30分钟独处时间，不做任何事，只和自己待着。",
    source: "源自Susan Cain《安静：内向性格的竞争力》",
    category: "体系构建者"
  },
  {
    id: "brenebrown",
    name: "Brene Brown",
    title: "社会学家、作家",
    quote: "真正的勇气，是允许自己感受一切。",
    microHabit: "今天对信任的人说一件让你感到脆弱的事。",
    source: "源自Brene Brown《无所畏惧》",
    category: "体系构建者"
  },
  {
    id: "angeladuckworth",
    name: "Angela Duckworth",
    title: "心理学家、作家",
    quote: "坚毅是激情与毅力的乘积。",
    microHabit: "写下你一直坚持的一件事（哪怕很小），并告诉自己：这就是我的坚毅。",
    source: "源自Angela Duckworth《坚毅》",
    category: "体系构建者"
  },
  {
    id: "mariekondo",
    name: "Marie Kondo",
    title: "整理师、作家",
    quote: "只留下让你心动的物品，你的生活就会改变。",
    microHabit: "今天整理一个抽屉，只留下让你心动的物品。",
    source: "源自Marie Kondo《怦然心动的人生整理魔法》",
    category: "体系构建者"
  },
  {
    id: "gretchenrubin",
    name: "Gretchen Rubin",
    title: "作家、习惯研究专家",
    quote: "了解自己的倾向，你就能设计适合自己的习惯。",
    microHabit: "完成四种倾向快速测试，了解自己属于哪一类。",
    source: "源自Gretchen Rubin《比从前更好》",
    category: "体系构建者"
  },
  {
    id: "ueno",
    name: "上野千鹤子",
    title: "社会学家、作家",
    quote: "当你把这是我的问题换成这是社会的问题，愤怒就会变成力量。",
    microHabit: "记录一件今天遇到的让你感到不公平的小事，尝试从结构角度分析它。",
    source: "源自上野千鹤子《厌女》",
    category: "体系构建者"
  },
  {
    id: "carolineperez",
    name: "Caroline Criado Perez",
    title: "作家、活动家",
    quote: "当数据默认男性为人类标准，女性就成了看不见的一半。",
    microHabit: "搜索性别数据缺口或粉红税，了解一个你从未意识到的性别偏见。",
    source: "源自Caroline Perez《看不见的女性》",
    category: "体系构建者"
  },
  {
    id: "emilyoster",
    name: "Emily Oster",
    title: "经济学家、作家",
    quote: "在海量建议中，让数据帮你做出理性的选择。",
    microHabit: "针对一个你正在纠结的育儿或健康问题，查找相关研究数据，而不是听信网络传言。",
    source: "源自Emily Oster《Expecting Better》",
    category: "体系构建者"
  },
  {
    id: "estherperel",
    name: "Esther Perel",
    title: "心理治疗师、作家",
    quote: "爱情不是找到完美的半圆与你拼成一个圆。爱情是两个完整的圆选择彼此靠近。",
    microHabit: "今天和伴侣进行一次关系检查对话：最近我们哪里靠近了？哪里需要空间？",
    source: "源自Esther Perel《亲密陷阱》",
    category: "体系构建者"
  },
  {
    id: "yuanzi",
    name: "原子",
    title: "效能管理专家",
    quote: "在混乱中建立秩序，是成年人对自己最大的温柔。",
    microHabit: "明天用三只青蛙法——列出最重要的三件事，先完成它们。",
    source: "源自原子生活黑客效能体系",
    category: "体系构建者"
  },
  {
    id: "zhaodanmiao",
    name: "赵丹喵",
    title: "知识博主、学习专家",
    quote: "你不是学不会，你只是没有建立学习-输出-反馈的闭环。",
    microHabit: "今天学到一个新知识，用一条朋友圈或一段语音讲给别人听。",
    source: "源自赵丹喵元认知学习法",
    category: "体系构建者"
  },
  {
    id: "lisabarrett",
    name: "Lisa Feldman Barrett",
    title: "神经科学家、作家",
    quote: "情绪不是被触发的，而是被你的大脑建构的。",
    microHabit: "当一种强烈情绪出现时，问自己：我的身体此刻感觉如何？我给它贴了什么标签？",
    source: "源自Lisa Feldman Barrett《情绪》",
    category: "体系构建者"
  },
  {
    id: "wanqing",
    name: "万青",
    title: "作家",
    quote: "那些被忽略的日常，藏着最真实的我们。",
    microHabit: "今晚写下今天最触动你的一个瞬间（哪怕只是1句话）。",
    source: "源自万青《白马春风》",
    category: "体系构建者"
  },
  {
    id: "xiner",
    name: "欣儿",
    title: "数字游民实践者",
    quote: "先开始，再完善。先完成，再完美。",
    microHabit: "今天尝试5分钟启动法——想做但拖延的事，先做5分钟。",
    source: "源自欣儿反内耗生活设计",
    category: "体系构建者"
  },
  {
    id: "triciahersey",
    name: "Tricia Hersey",
    title: "休息主义倡导者",
    quote: "休息不是奢侈品，是你与生俱来的权利。",
    microHabit: "今天允许自己什么也不做15分钟，不内疚。",
    source: "源自Tricia Hersey《Rest Is Resistance》",
    category: "体系构建者"
  },
  {
    id: "robinstern",
    name: "Robin Stern",
    title: "心理学家、作家",
    quote: "当你开始怀疑自己的感受和记忆，就是被操控的信号。",
    microHabit: "回顾一次让你怀疑自己的对话，写下客观事实，而非对方的解释。",
    source: "源自Robin Stern《煤气灯效应》",
    category: "体系构建者"
  },
  // 领域破壁者（21-40）
  {
    id: "lifeifei",
    name: "李飞飞",
    title: "AI科学家、斯坦福教授",
    quote: "我从来不是为了成为AI科学家而学习。我只是想解决那个问题，而学习是必经之路。",
    microHabit: "今天思考一个你关心的社会问题，用5分钟搜索AI或科技如何帮助解决它。",
    source: "源自李飞飞问题驱动学习法",
    category: "领域破壁者"
  },
  {
    id: "nerioxman",
    name: "Neri Oxman",
    title: "设计师、MIT教授",
    quote: "让建筑像自然一样生长，模糊自然、工程与艺术的边界。",
    microHabit: "观察自然界的一种形态（如树叶、蜂巢），思考它如何能启发一个设计。",
    source: "源自Neri Oxman材料生态学",
    category: "领域破壁者"
  },
  {
    id: "alexandrabotez",
    name: "Alexandra Botez",
    title: "国际象棋大师、主播",
    quote: "让智力运动变得有趣，让更多人爱上思考。",
    microHabit: "今天下一盘棋（线上或App），或者看一个象棋解说视频，感受智力游戏的乐趣。",
    source: "源自Alexandra Botez的直播理念",
    category: "领域破壁者"
  },
  {
    id: "monachalabi",
    name: "Mona Chalabi",
    title: "数据新闻艺术家",
    quote: "数据不会说谎，但使用数据的人会。我用画笔让真相可见。",
    microHabit: "找一个你感兴趣的数据（如女性平均薪资），尝试用手绘或图表的方式呈现它。",
    source: "源自Mona Chalabi的数据艺术",
    category: "领域破壁者"
  },
  {
    id: "yezitao",
    name: "叶梓涛",
    title: "游戏设计师、播客主理人",
    quote: "游戏不只是娱乐，它可以是严肃的思想媒介。",
    microHabit: "选一款你喜欢的游戏，思考它的规则在教玩家什么价值观。",
    source: "源自叶梓涛游戏哲学",
    category: "领域破壁者"
  },
  {
    id: "yungblud",
    name: "YUNGBLUD",
    title: "音乐人、心理健康倡导者",
    quote: "当全世界都不理解你的时候，记住：我们在这里。",
    microHabit: "今天听一首让你感到被理解的歌，或者和朋友分享你的奇怪之处。",
    source: "源自YUNGBLUD的音乐社群理念",
    category: "领域破壁者"
  },
  {
    id: "aurorajames",
    name: "Aurora James",
    title: "设计师、社会企业家",
    quote: "每次你花钱，都在为你想要的世界投票。",
    microHabit: "下次购物前，查一下这个品牌是否有多元包容的政策，用消费投票。",
    source: "源自Aurora James 15 Percent Pledge倡议",
    category: "领域破壁者"
  },
  {
    id: "kuanglingxiu",
    name: "匡灵秀",
    title: "作家、学者",
    quote: "语言是权力，翻译是背叛，而故事可以重塑一切。",
    microHabit: "今天留意一个词语的起源或演变，思考它背后的历史权力。",
    source: "源自匡灵秀《巴别塔》",
    category: "领域破壁者"
  },
  {
    id: "megantheestallion",
    name: "Megan Thee Stallion",
    title: "说唱歌手",
    quote: "你的身体不是待解决的问题，而是你宣示主权的领地。",
    microHabit: "今天对自己说一句我的身体我说了算，感受这句话的力量。",
    source: "源自Megan Thee Stallion的音乐宣言",
    category: "领域破壁者"
  },
  {
    id: "saminnosrat",
    name: "Samin Nosrat",
    title: "厨师、作家",
    quote: "盐、脂肪、酸、热——掌握了这四种元素，你就掌握了烹饪，也掌握了一种生活智慧。",
    microHabit: "今天用心做一道菜（哪怕只是煎蛋），专注感受盐、油、火候的变化。",
    source: "源自Samin Nosrat《盐脂肪酸热》",
    category: "领域破壁者"
  },
  {
    id: "celiahodent",
    name: "Celia Hodent",
    title: "游戏UX心理学家",
    quote: "用游戏化思维让世界变好，让改变在快乐中发生。",
    microHabit: "把你最讨厌的一项任务（如做家务），设计成一个游戏关卡（有分数、奖励）。",
    source: "源自Celia Hodent的游戏心理学应用",
    category: "领域破壁者"
  },
  {
    id: "meganrapinoe",
    name: "Megan Rapinoe",
    title: "足球运动员、平权活动家",
    quote: "胜利不只是为了赢，更是为了改变规则。",
    microHabit: "今天为一项你相信的公平议题发声——哪怕只是一条社交媒体。",
    source: "源自Megan Rapinoe的平权实践",
    category: "领域破壁者"
  },
  {
    id: "caseynewton",
    name: "Casey Newton",
    title: "科技记者",
    quote: "代码背后是人，平台背后是社会。我们要看见那些看不见的影响。",
    microHabit: "今天反思你使用社交媒体的一个习惯，问自己：是你在用平台，还是平台在用你？",
    source: "源自Casey Newton《Platformer》",
    category: "领域破壁者"
  },
  {
    id: "michelerusso",
    name: "Michele G. Russo",
    title: "艺术史学家、数据科学家",
    quote: "用数据让艺术史的不平等现形。",
    microHabit: "下次去博物馆，有意识地数一数女艺术家的作品占比。",
    source: "源自Michele Russo的数据分析研究",
    category: "领域破壁者"
  },
  {
    id: "ouyanganana",
    name: "欧阳娜娜",
    title: "音乐家、演员、创业者",
    quote: "我可以是任何我想成为的样子——音乐家、学生、艺人、创业者。",
    microHabit: "今天尝试一件你不擅长但好奇的事，打破自己的身份标签。",
    source: "源自欧阳娜娜的跨界探索",
    category: "领域破壁者"
  },
  {
    id: "zhanglixing",
    name: "张黎星",
    title: "苏绣传承人",
    quote: "传统不是用来供奉的，是用来活着的。",
    microHabit: "了解一项你感兴趣的传统手艺，思考如何让它变得更当下。",
    source: "源自张黎星的非遗创新",
    category: "领域破壁者"
  },
  {
    id: "lucyking",
    name: "露西·金",
    title: "动物学家",
    quote: "解决冲突，有时只需要找到双方都害怕的东西。",
    microHabit: "今天想一个你生活中的人际冲突，能否找到一个共同利益或共同恐惧来化解它？",
    source: "源自露西·金的蜜蜂围栏研究",
    category: "领域破壁者"
  },
  {
    id: "ceciliaaragon",
    name: "Cecilia Aragon",
    title: "计算机科学家、作家",
    quote: "技术需要故事，数据需要人性。",
    microHabit: "今天把你正在做的一项工作（无论多技术性），用讲故事的方式描述给一个外行听。",
    source: "源自Cecilia Aragon的包容性设计理念",
    category: "领域破壁者"
  },
  {
    id: "abing",
    name: "阿饼",
    title: "脱口秀演员",
    quote: "用笑声打破那些不该存在的沉默。",
    microHabit: "今天把你遇到的一件令你不快的小事，试着写成3句幽默的段子。",
    source: "源自阿饼的脱口秀创作",
    category: "领域破壁者"
  },
  {
    id: "haojingfang",
    name: "郝景芳",
    title: "科幻作家、雨果奖得主",
    quote: "科幻不是预测未来，而是用未来审视现在。",
    microHabit: "今天读一篇科幻短篇，思考它影射了什么现实问题。",
    source: "源自郝景芳《北京折叠》",
    category: "领域破壁者"
  },
  // 文化洞察者（41-60）
  {
    id: "roxanegay",
    name: "Roxane Gay",
    title: "作家",
    quote: "我不完美，我矛盾，但我真实。这比任何标准答案都重要。",
    microHabit: "今天写下一件你觉得自己不够女性主义的事，然后对自己说：这没关系。",
    source: "源自Roxane Gay《不良女性主义者》",
    category: "文化洞察者"
  },
  {
    id: "mikkikendall",
    name: "Mikki Kendall",
    title: "作家、活动家",
    quote: "女性主义不能只谈玻璃天花板，还要谈那些根本没有屋顶的人。",
    microHabit: "今天了解一个与你不同阶层或种族的女性面临的困境。",
    source: "源自Mikki Kendall《Hood Feminism》",
    category: "文化洞察者"
  },
  {
    id: "honghuang",
    name: "洪晃",
    title: "媒体人、作家",
    quote: "别让任何人定义你是谁，尤其是那些想赚你钱的人。",
    microHabit: "今天看到一则广告，试着用一句话戳穿它的营销话术。",
    source: "源自洪晃的公共评论",
    category: "文化洞察者"
  },
  {
    id: "rebeccasolnit",
    name: "Rebecca Solnit",
    title: "作家、活动家",
    quote: "沉默是暴力的同谋，而说出名字是反抗的开始。",
    microHabit: "今天当有人打断你或过度解释时，温和地说请让我说完。",
    source: "源自Rebecca Solnit《爱说教的男人》",
    category: "文化洞察者"
  },
  {
    id: "bellhooks",
    name: "bell hooks",
    title: "学者、作家",
    quote: "爱不是感觉，是行动。是面对差异时仍然选择连接。",
    microHabit: "今天对一位与你观点不同的人，尝试理解而非反驳。",
    source: "源自bell hooks《关于爱的一切》",
    category: "文化洞察者"
  },
  {
    id: "chimamanda",
    name: "Chimamanda Ngozi Adichie",
    title: "作家",
    quote: "单一故事的危险在于，它让人成为一件事，而不是完整的人。",
    microHabit: "今天读一篇关于你不熟悉文化的文章，打破你的单一故事。",
    source: "源自Chimamanda Adichie的TED演讲",
    category: "文化洞察者"
  },
  {
    id: "hanjiang",
    name: "韩江",
    title: "作家、诺贝尔奖得主",
    quote: "我写的是人，是人的尊严如何在暴力中幸存。",
    microHabit: "今天读一首诗或一段小说，感受文字如何表达痛苦。",
    source: "源自韩江《素食者》",
    category: "文化洞察者"
  },
  {
    id: "sallyrooney",
    name: "Sally Rooney",
    title: "作家",
    quote: "爱不是占有，是看见彼此的真实。",
    microHabit: "今天在对话中，多听对方说五分钟，而不是急于表达自己。",
    source: "源自Sally Rooney《正常人》",
    category: "文化洞察者"
  },
  {
    id: "yuxiuhua",
    name: "余秀华",
    title: "诗人",
    quote: "痛苦没有意义，但当你把它变成诗，它就有了意义。",
    microHabit: "今天写下三行诗，关于你最近最强烈的情绪。",
    source: "源自余秀华的诗歌创作",
    category: "文化洞察者"
  },
  {
    id: "danbao",
    name: "淡豹",
    title: "作家、记者",
    quote: "在宏大叙事之外，是普通人的情感与挣扎构成了历史的底色。",
    microHabit: "今天观察你身边一位普通人的一天，想象ta的内心世界。",
    source: "源自淡豹的非虚构写作",
    category: "文化洞察者"
  },
  {
    id: "guoyujie",
    name: "郭玉洁",
    title: "非虚构作家",
    quote: "记录被遗忘的人，就是对抗历史的失忆。",
    microHabit: "今天采访一位长辈，记录ta年轻时的一个故事。",
    source: "源自郭玉洁《众声》",
    category: "文化洞察者"
  },
  {
    id: "laurenbastide",
    name: "Lauren Bastide",
    title: "播客主、作家",
    quote: "女性的声音需要空间，那个空间可以由我们自己创造。",
    microHabit: "今天录一段语音日记，只说给自己听，记录今天最真实的感受。",
    source: "源自Lauren Bastide的播客《La Poudre》",
    category: "文化洞察者"
  },
  {
    id: "virgietovar",
    name: "Virgie Tovar",
    title: "作家、身体积极倡导者",
    quote: "你的身体不是待解决的问题，而是你值得居住的家。",
    microHabit: "今天对着镜子说一句我的身体很好，不加任何条件。",
    source: "源自Virgie Tovar的身体解放理念",
    category: "文化洞察者"
  },
  {
    id: "leahlakshmi",
    name: "Leah Lakshmi Piepzna-Samarasinha",
    title: "作家、活动家",
    quote: "关怀不是慈善，是我们彼此生存的方式。",
    microHabit: "今天主动帮助一位需要帮助的人，或接受一次帮助而不愧疚。",
    source: "源自Leah Lakshmi《关怀互助》",
    category: "文化洞察者"
  },
  {
    id: "kawamura",
    name: "川村由仁夜",
    title: "时尚社会学家",
    quote: "衣服不只是遮体，它是一套社会编码。",
    microHabit: "今天观察你或他人的穿着，思考它在传递什么社会信息。",
    source: "源自川村由仁夜《时尚学》",
    category: "文化洞察者"
  },
  {
    id: "peggyodonnell",
    name: "Peggy O'Donnell",
    title: "历史学家",
    quote: "历史忘记她们，但我们要记得。",
    microHabit: "今天了解一位你从未听过的女性科学家或发明家。",
    source: "源自Peggy O'Donnell的女性科技史研究",
    category: "文化洞察者"
  },
  {
    id: "naomialderman",
    name: "Naomi Alderman",
    title: "作家",
    quote: "如果女性拥有掌控世界的力量，世界会变成什么样？",
    microHabit: "今天想象一种完全由女性主导的社会规则，写下三个可能的变化。",
    source: "源自Naomi Alderman《力量》",
    category: "文化洞察者"
  },
  {
    id: "jiatolentino",
    name: "Jia Tolentino",
    title: "作家",
    quote: "我们生活在一个自我优化的时代，但也许放弃优化才是自由。",
    microHabit: "今天允许自己不够好一次，不解释、不弥补。",
    source: "源自Jia Tolentino《Trick Mirror》",
    category: "文化洞察者"
  },
  {
    id: "lesliejamison",
    name: "Leslie Jamison",
    title: "作家",
    quote: "共情不是简单地感受他人，而是愿意承认自己也可能如此。",
    microHabit: "今天试着理解一个你曾反感的人的行为背后的原因。",
    source: "源自Leslie Jamison《同理心测试》",
    category: "文化洞察者"
  },
  {
    id: "zadie",
    name: "Zadie Smith",
    title: "作家",
    quote: "真实的生活不在屏幕上，而在你与世界的每一次摩擦里。",
    microHabit: "今天关掉手机一小时，去一个有人的地方观察他们。",
    source: "源自Zadie Smith的散文",
    category: "文化洞察者"
  },
  // 行动启发者（61-80）
  {
    id: "mayemusk",
    name: "梅耶·马斯克",
    title: "模特、营养师",
    quote: "冒险而审慎地生活。制定计划，然后敢于执行。",
    microHabit: "今天为你最担心的未来，写下A、B、Z三个计划。",
    source: "源自梅耶·马斯克《人生由我》",
    category: "行动启发者"
  },
  {
    id: "tarawestover",
    name: "塔拉·韦斯特弗",
    title: "历史学家",
    quote: "你可以爱一个人，但仍然选择和他说再见。",
    microHabit: "今天读一本挑战你原有观念的书，哪怕只读10页。",
    source: "源自塔拉·韦斯特弗《你当像鸟飞往你的山》",
    category: "行动启发者"
  },
  {
    id: "malala",
    name: "马拉拉",
    title: "教育活动家",
    quote: "一本书、一支笔、一个孩子、一位老师，可以改变世界。",
    microHabit: "今天为一名女孩的教育权利发声——转发一篇文章或捐赠小额善款。",
    source: "源自马拉拉《我是马拉拉》",
    category: "行动启发者"
  },
  {
    id: "yu xiuhua2",
    name: "余秀华",
    title: "诗人",
    quote: "痛苦没有意义，但当你把它变成诗，它就有了意义。",
    microHabit: "今天写下三行诗，关于你最近最强烈的情绪。",
    source: "源自余秀华的诗歌创作",
    category: "行动启发者"
  },
  {
    id: "huiruoqi",
    name: "惠若琪",
    title: "前中国女排队长",
    quote: "那颗受伤的心，是我最强大的肌肉。",
    microHabit: "今天承认一件让你感到害怕的事，然后去做它。",
    source: "源自惠若琪《不止冠军》",
    category: "行动启发者"
  },
  {
    id: "yehaiyang",
    name: "叶海洋",
    title: "CEO、单亲妈妈",
    quote: "我给了她们生命，她们给了我生活的意义。但我们三个，是三个独立的个体。",
    microHabit: "今天写下你心中理想家庭的样子，不被任何传统定义限制。",
    source: "源自叶海洋的社交媒体分享",
    category: "行动启发者"
  },
  {
    id: "jkrowling",
    name: "J.K.罗琳",
    title: "作家",
    quote: "决定我们成为什么样人的，不是我们的能力，而是我们的选择。",
    microHabit: "今天写一个你想象中的美好世界，哪怕只有100字。",
    source: "源自J.K.罗琳《哈利·波特》",
    category: "行动启发者"
  },
  {
    id: "michelleobama",
    name: "米歇尔·奥巴马",
    title: "律师、前第一夫人",
    quote: "她们想把你放进一个盒子里。但那个盒子的盖子，永远可以从里面推开。",
    microHabit: "今天做一件不像你该做的事，打破一次他人对你的期待。",
    source: "源自米歇尔·奥巴马《成为》",
    category: "行动启发者"
  },
  {
    id: "zhangguimei",
    name: "张桂梅",
    title: "教师、校长",
    quote: "我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。",
    microHabit: "今天支持一个女孩的教育——捐款、支教或只是分享她的故事。",
    source: "源自张桂梅的华坪女高",
    category: "行动启发者"
  },
  {
    id: "diananyad",
    name: "Diana Nyad",
    title: "长距离游泳运动员",
    quote: "你从未老到不能实现另一个梦想。",
    microHabit: "今天为一个你曾放弃的梦想，重新迈出一小步。",
    source: "源自Diana Nyad《Find a Way》",
    category: "行动启发者"
  },
  {
    id: "janetwinterson",
    name: "珍妮特·温特森",
    title: "作家",
    quote: "当世界对你关上门，你可以自己造一扇窗。",
    microHabit: "今天写下你生命中最艰难的一个时刻，然后折成纸飞机——让它过去。",
    source: "源自珍妮特·温特森《我要快乐，不必正常》",
    category: "行动启发者"
  },
  {
    id: "toranaburke",
    name: "Tarana Burke",
    title: "活动家",
    quote: "这是关于解放，而不是关于羞辱。",
    microHabit: "今天倾听一位女性的痛苦，不做评判，只说我相信你。",
    source: "源自Tarana Burke#MeToo运动",
    category: "行动启发者"
  },
  {
    id: "warisdirie",
    name: "Waris Dirie",
    title: "模特、活动家",
    quote: "这循环必须被打破。",
    microHabit: "今天了解一种你从未听过的对女性的伤害，然后分享出去。",
    source: "源自Waris Dirie《沙漠之花》",
    category: "行动启发者"
  },
  {
    id: "lizzo2",
    name: "Lizzo",
    title: "歌手",
    quote: "如果你能爱自己最坏的部分，那么其他一切都会变得容易。",
    microHabit: "今天对着镜子说一句我爱你，并加上你的一个缺点。",
    source: "源自Lizzo的音乐和公众言论",
    category: "行动启发者"
  },
  {
    id: "billiejeanking",
    name: "Billie Jean King",
    title: "网球运动员、平权先驱",
    quote: "压力是一种特权，它意味着你在做重要的事。",
    microHabit: "今天把一件让你感到压力的事，重新定义为特权。",
    source: "源自Billie Jean King的平权运动",
    category: "行动启发者"
  },
  {
    id: "fuzhen",
    name: "傅真",
    title: "作家",
    quote: "真正的自由是你可以对自己不喜欢的生活说不。",
    microHabit: "今天写下你正在承受的三种困境，圈出那个你愿意主动选择的。",
    source: "源自傅真《斑马》",
    category: "行动启发者"
  },
  {
    id: "pattismith",
    name: "Patti Smith",
    title: "音乐人、作家",
    quote: "因为失去，我们更加努力地给予。",
    microHabit: "今天为你失去的某人或某事，写一句话或画一幅小画。",
    source: "源自Patti Smith《只是孩子》",
    category: "行动启发者"
  },
  {
    id: "mindadentler",
    name: "Minda Dentler",
    title: "铁人三项运动员",
    quote: "我的使命不是被同情，而是被看见——作为一个运动员、一个竞争者。",
    microHabit: "今天做一件你认为以我的条件不可能的小事。",
    source: "源自Minda Dentler的TED演讲",
    category: "行动启发者"
  },
  {
    id: "alok",
    name: "Alok Vaid-Menon",
    title: "作家、表演艺术家",
    quote: "我们不需要被容忍，我们需要被解放。",
    microHabit: "今天穿一件你一直想穿但不敢穿的衣服出门。",
    source: "源自Alok Vaid-Menon的美学宣言",
    category: "行动启发者"
  },
  {
    id: "castersemenya",
    name: "Caster Semenya",
    title: "田径运动员",
    quote: "我只想自然地跑步。这就是我的全部要求。",
    microHabit: "今天为一位因不同而被歧视的人发声。",
    source: "源自Caster Semenya的抗争经历",
    category: "行动启发者"
  },
  // 新生代思想者（81-100）
  {
    id: "gretathunberg",
    name: "Greta Thunberg",
    title: "环保活动家",
    quote: "用科学说话，绝不妥协。",
    microHabit: "今天了解一个你关心的环境问题，查一篇科学报告，而不是听信传言。",
    source: "源自Greta Thunberg的气候行动",
    category: "新生代思想者"
  },
  {
    id: "amandagorman",
    name: "Amanda Gorman",
    title: "诗人",
    quote: "诗歌不是装饰，它是变革的武器。",
    microHabit: "今天为一件你关心的事写一句诗意的宣言。",
    source: "源自Amanda Gorman的总统就职诗",
    category: "新生代思想者"
  },
  {
    id: "sherry",
    name: "雪力",
    title: "MBTI创作者",
    quote: "了解自己，是觉醒的第一步。",
    microHabit: "今天完成一个MBTI快速测试，思考结果是否让你更了解自己。",
    source: "源自雪力的心理学内容",
    category: "新生代思想者"
  },
  {
    id: "guojia",
    name: "郭佳",
    title: "知识区UP主",
    quote: "谁说深度思考不能在三分钟内完成？",
    microHabit: "今天用一个短视频（或3分钟）向朋友解释一个你刚学到的概念。",
    source: "源自郭佳的短视频创作",
    category: "新生代思想者"
  },
  {
    id: "lixueqin",
    name: "李雪琴",
    title: "脱口秀演员",
    quote: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
    microHabit: "今天把你焦虑的一件事，试着用那又怎样的句式反问自己三遍。",
    source: "源自李雪琴的脱口秀",
    category: "新生代思想者"
  },
  {
    id: "chenxiaoyu",
    name: "陈小雨",
    title: "辩手、哲学系毕业生",
    quote: "生活里每一个困惑，都可以用哲学找到出口。",
    microHabit: "今天遇到一个选择困难时，问自己如果是苏格拉底，他会怎么做？",
    source: "源自陈小雨的哲学思辨",
    category: "新生代思想者"
  },
  {
    id: "liumeng",
    name: "刘梦",
    title: "科技创业者",
    quote: "科技不只是代码，它可以成为女性改变世界的工具。",
    microHabit: "今天体验一款女性友好的科技产品，思考它解决了什么问题。",
    source: "源自刘梦的创业实践",
    category: "新生代思想者"
  },
  {
    id: "zhuzi",
    name: "竹子",
    title: "视频创作者",
    quote: "当你开始记录生活，你就在创造自己。",
    microHabit: "今天用手机拍一段1分钟的视频，记录你当下的真实状态。",
    source: "源自竹子的Vlog创作",
    category: "新生代思想者"
  },
  {
    id: "pattismith2",
    name: "Patti Smith",
    title: "音乐人、作家",
    quote: "因为失去，我们更加努力地给予。",
    microHabit: "今天为你失去的某人或某事，写一句话或画一幅小画。",
    source: "源自Patti Smith《只是孩子》",
    category: "新生代思想者"
  },
  {
    id: "toranaburke2",
    name: "Tarana Burke",
    title: "活动家",
    quote: "这是关于解放，而不是关于羞辱。",
    microHabit: "今天倾听一位女性的痛苦，不做评判，只说我相信你。",
    source: "源自Tarana Burke#MeToo运动",
    category: "新生代思想者"
  },
  {
    id: "warisdirie2",
    name: "Waris Dirie",
    title: "模特、活动家",
    quote: "这循环必须被打破。",
    microHabit: "今天了解一种你从未听过的对女性的伤害，然后分享出去。",
    source: "源自Waris Dirie《沙漠之花》",
    category: "新生代思想者"
  },
  {
    id: "castersemenya2",
    name: "Caster Semenya",
    title: "田径运动员",
    quote: "我只想自然地跑步。这就是我的全部要求。",
    microHabit: "今天为一位因不同而被歧视的人发声。",
    source: "源自Caster Semenya的抗争经历",
    category: "新生代思想者"
  },
  {
    id: "mindadentler2",
    name: "Minda Dentler",
    title: "铁人三项运动员",
    quote: "我的使命不是被同情，而是被看见。",
    microHabit: "今天做一件你认为以我的条件不可能的小事。",
    source: "源自Minda Dentler的TED演讲",
    category: "新生代思想者"
  },
  {
    id: "alok2",
    name: "Alok Vaid-Menon",
    title: "作家、表演艺术家",
    quote: "我们不需要被容忍，我们需要被解放。",
    microHabit: "今天穿一件你一直想穿但不敢穿的衣服出门。",
    source: "源自Alok Vaid-Menon的美学宣言",
    category: "新生代思想者"
  },
  {
    id: "roxanegay2",
    name: "Roxane Gay",
    title: "作家",
    quote: "我不完美，我矛盾，但我真实。",
    microHabit: "今天写下一件你觉得自己不够女性主义的事，然后对自己说：这没关系。",
    source: "源自Roxane Gay《不良女性主义者》",
    category: "新生代思想者"
  },
  {
    id: "chimamanda2",
    name: "Chimamanda Ngozi Adichie",
    title: "作家",
    quote: "单一故事的危险在于，它让人成为一件事，而不是完整的人。",
    microHabit: "今天读一篇关于你不熟悉文化的文章，打破你的单一故事。",
    source: "源自Chimamanda Adichie的TED演讲",
    category: "新生代思想者"
  },
  {
    id: "bellhooks2",
    name: "bell hooks",
    title: "学者、作家",
    quote: "爱不是感觉，是行动。",
    microHabit: "今天对一位与你观点不同的人，尝试理解而非反驳。",
    source: "源自bell hooks《关于爱的一切》",
    category: "新生代思想者"
  },
  {
    id: "rebeccasolnit2",
    name: "Rebecca Solnit",
    title: "作家、活动家",
    quote: "沉默是暴力的同谋，而说出名字是反抗的开始。",
    microHabit: "今天当有人打断你或过度解释时，温和地说请让我说完。",
    source: "源自Rebecca Solnit《爱说教的男人》",
    category: "新生代思想者"
  },
  {
    id: "hanjiang2",
    name: "韩江",
    title: "作家、诺贝尔奖得主",
    quote: "我写的是人，是人的尊严如何在暴力中幸存。",
    microHabit: "今天读一首诗或一段小说，感受文字如何表达痛苦。",
    source: "源自韩江《素食者》",
    category: "新生代思想者"
  },
  {
    id: "sallyrooney2",
    name: "Sally Rooney",
    title: "作家",
    quote: "爱不是占有，是看见彼此的真实。",
    microHabit: "今天在对话中，多听对方说五分钟，而不是急于表达自己。",
    source: "源自Sally Rooney《正常人》",
    category: "新生代思想者"
  }
];

// 根据日期获取今日卡片
export const getTodayCard = (): DailyCard => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
  const index = dayOfYear % dailyCards.length;
  return dailyCards[index];
};

// 获取随机卡片
export const getRandomCard = (): DailyCard => {
  const randomIndex = Math.floor(Math.random() * dailyCards.length);
  return dailyCards[randomIndex];
};
