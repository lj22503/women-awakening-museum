// Supplementary personality data - Part 5
// Goal: reach 100+ women across all MBTI types

import type { Personality } from './personalities';

export const additionalPersonalitiesPart5: Personality[] = [
  // INFJ - Advocate (supplement to 5)
  {
    type: "INFJ",
    name: "提倡者型",
    description: "理想主义、洞察力强、富有同情心，擅长理解他人和追求意义",
    traits: {
      strengths: ["理解他人", "追求意义", "有远见"],
      challenges: ["可能过于理想化", "容易疲惫"]
    },
    women: [
      {
        id: "angela-duckworth",
        name: "安吉拉·达克沃斯",
        nameEn: "Angela Duckworth",
        title: "Psychologist, Author",
        image: "",
        introduction: "UPenn professor, grit researcher. TED talk viewed over 15 million times.",
        methodology: "Grit = passion + perseverance. Talent is just the starting point.",
        cognition: "Grit is not a talent, it is a choice. 她通过数十年的实证研究证明：成功的关键不是天赋，而是对长期目标的持续激情与坚持。在她的认知体系中，毅力是一种可以被培养的素养，而非天生的品格——这为每个普通人提供了通往卓越的可能性。",
        works: ["Grit: The Power of Passion and Perseverance"]
      },
      {
        id: "eleanor-roosevelt",
        name: "埃莉诺·罗斯福",
        nameEn: "Eleanor Roosevelt",
        title: "Former U.S. First Lady, Human Rights Activist",
        image: "",
        introduction: "Longest-serving First Lady, chaired the UN Human Rights Commission, helped draft the Universal Declaration of Human Rights.",
        methodology: "Transform personal experience into social progress.",
        cognition: "No one can make you feel inferior without your consent. 这句名言背后是她用一生实践的认知体系：将个人经历转化为社会进步的动力。作为美国任职最长的第一夫人，她主持起草了《世界人权宣言》，将第一夫人的角色从礼仪性的'总统配偶'转变为独立的政治行动者。她的认知核心在于：女性的力量不来自他人的授权，而来自于认识到自己的价值不需要任何外部验证——当你拒绝接受贬低，你就已经改变了权力的结构。",
        works: ["It Must Be Felt"]
      }
    ]
  },

  // INFP - Mediator (supplement to 5)
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
        id: "anne-frank",
        name: "安妮·弗兰克",
        nameEn: "Anne Frank",
        title: "Jewish-German Teenage Diarist",
        image: "",
        introduction: "Author of the most famous diary in history, a definitive document of WWII and human resilience.",
        methodology: "Writing as a survival strategy, hope as a form of resistance.",
        cognition: "Despite everything, I still believe people are good at heart. 在密室中躲避纳粹追捕的两年里，她用日记将写作从消遣升华为生存策略。她的认知核心不是天真——恰恰相反，她亲眼目睹了人性最黑暗的一面，却依然选择相信善的存在。这种选择本身就是最激进的抵抗：当暴政试图剥夺你的人性，坚持对人性基本善的信念，就是一种不可征服的精神自由。她用十五年的短暂人生证明，希望不是对现实的逃避，而是对现实最深刻的反驳。",
        works: ["The Diary of Anne Frank"]
      },
      {
        id: "li-ge",
        name: "黎戈",
        nameEn: "Li Ge",
        title: "Chinese Writer, Literary Critic",
        image: "",
        introduction: "Known for her refined literary sensibility, writes about reading, life and women's growth.",
        methodology: "Use reading to build inner order, find beauty and meaning in daily life.",
        cognition: "Reading is a form of self-education——而且是最深刻的那一种。她以精致的文学感受力闻名，将阅读从消遣提升为构建内在秩序的修行。在她看来，每一本书都是一次与另一个灵魂的深度对话，而女性的成长本质上是一场通过阅读完成的自我教育：你读过的文字会在某个时刻变成你的骨骼，支撑你在现实中站立。她的认知为所有在书页间寻找答案的女性提供了一个优雅的辩护：阅读不是逃避世界，而是以更清醒的方式重返世界。",
        works: ["各自膝", "把生活过成诗"]
      }
    ]
  },

  // ENFP - Campaigner (supplement to 5)
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
        id: "taylor-swift",
        name: "泰勒·斯威夫特",
        nameEn: "Taylor Swift",
        title: "Singer, Songwriter",
        image: "",
        introduction: "12-time Grammy winner. Each album is a transformation, chronicling personal growth through music.",
        methodology: "Transform personal experience into art, create resonance through narrative.",
        cognition: "Only your own life is the story that really matters. 她将每一次心碎和舆论风暴转化为创作的燃料，证明女性的情感叙事不是脆弱的标记，而是最强大的艺术材料。她不断重写自己的叙事，拒绝被他人定义。",
        works: ["Folklore", "Midnights", "1989"]
      },
      {
        id: "jia-tolentino",
        name: "陈嘉琳",
        nameEn: "Jia Tolentino",
        title: "American Writer, Critic",
        image: "",
        introduction: "New Yorker staff writer, author of Trick Mirror, known for sharp social observation.",
        methodology: "Use autobiographical writing to reflect the ailments of the era.",
        cognition: "The internet is both liberator and cage. 作为《纽约客》撰稿人，她用自传体写作揭示数字时代如何重塑女性的自我认知——社交媒体让我们前所未有地连接，却也让我们陷入精心策划的自我表演。她的认知核心在于：清醒是最好的解药。",
        works: ["Trick Mirror"]
      },
      {
        id: "emma-gonzalez",
        name: "艾玛·冈萨雷斯",
        nameEn: "Emma Gonzalez",
        title: "American Gun Control Activist",
        image: "",
        introduction: "Parkland shooting survivor, co-founder of March for Our Lives movement.",
        methodology: "Transform anger into action, use voice to shake power.",
        cognition: "This generation will not be silent. 帕克兰枪击案的幸存者，将愤怒转化为让政客无法忽视的社会运动。她的认知核心在于：年轻不是政治参与的障碍，而是最有力的武器——当生命权受到威胁，沉默本身就是一种共谋。",
        works: []
      }
    ]
  },

  // ENTP - Debater (supplement to 5)
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
        id: "drew-goddard",
        name: "德鲁·吉尔伯特·高达德",
        nameEn: "Drew Goddard",
        title: "Astrophysicist",
        image: "",
        introduction: "NASA scientist on Mars exploration projects, inspiring public curiosity about the universe.",
        methodology: "Curiosity-driven exploration, storytelling to communicate science.",
        cognition: "The universe is full of unknowns, and that is what makes it beautiful. 作为NASA火星探测项目的科学家，她将好奇心视为驱动人类文明的最原始引擎。她的认知核心在于：科学的本质不是积累已知，而是拥抱未知——每一个未解之谜不是知识的边界，而是想象力的邀请函。她用叙事的力量将深奥的天体物理学转化为公众可以共鸣的故事，证明科学传播的核心不是简化，而是点燃好奇心本身。",
        works: ["The Martian (science consultant)"]
      },
      {
        id: "kim-kardashian",
        name: "金·卡戴珊",
        nameEn: "Kim Kardashian",
        title: "Entrepreneur, Media Personality",
        image: "",
        introduction: "From reality TV star to beauty empire founder, redefining personal branding through social media.",
        methodology: "Convert every曝光 into a business opportunity.",
        cognition: "Your voice is your power. 她将真人秀明星的身份转化为商业帝国，证明影响力不是虚荣的指标，而是可以兑现为实质权力的资本。她的认知核心在于：在一个注意力经济的时代，懂得如何讲述自己的故事，就是掌握了最稀缺的生产资料。",
        works: ["Kardashian-Jenner books"]
      }
    ]
  },

  // ISTJ - Logistician (supplement to 5)
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
        id: "grace-hopper",
        name: "格蕾丝·霍珀",
        nameEn: "Grace Hopper",
        title: "Computer Scientist, U.S. Navy Rear Admiral",
        image: "",
        introduction: "Computer pioneer, invented the first compiler, led COBOL language design. Known as Mother of Computer Software.",
        methodology: "Rigorous systems thinking, use standards to drive efficiency.",
        cognition: "The most dangerous phrase: it has always been done this way. 作为计算机软件之母，她发明了第一个编译器，让编程语言不再是机器专属。她的认知核心在于：技术的最高境界不是服从惯例，而是用标准化解放创造力，让更多人能够参与计算。",
        works: ["COBOL compiler"]
      },
      {
        id: "rosabeth-kanter",
        name: "罗斯贝丝·坎特",
        nameEn: "Rosabeth Moss Kanter",
        title: "Harvard Business School Professor",
        image: "",
        introduction: "Management scholar, HBR editor, researcher on women breaking through in business.",
        methodology: "Use organizational behavior to explain workplace challenges for women.",
        cognition: "Bias is not a personal problem, it is a systems problem. 她用组织行为学揭示职场中的性别壁垒不是个体缺陷，而是制度设计的结果。她的认知核心在于：改变系统比责备个人更有意义——当规则开始倾斜，个体的努力才能真正被看见。",
        works: ["Confidence", "Think Outside the Building"]
      }
    ]
  },

  // ISFJ - Defender (supplement to 5)
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
        id: "freda-payton",
        name: "弗雷达·佩顿",
        nameEn: "Freda Payton",
        title: "Social Services Pioneer",
        image: "",
        introduction: "Detroit social services pioneer, helping homeless and abused women rebuild their lives.",
        methodology: "Build trust through patience, change lives through action.",
        cognition: "Everyone deserves to be seen. 她扎根底特律社区数十年，为无家可归和受虐待的女性提供庇护与重建人生的路径。她的认知核心在于：社会服务的本质不是施舍，而是通过耐心与信任，让每一个被社会遗忘的人重新找到自己在这个世界中的位置。",
        works: []
      },
      {
        id: "peggy-olson",
        name: "佩吉·奥尔森",
        nameEn: "Peggy Olson",
        title: "Advertising Industry Pioneer (Mad Men inspiration)",
        image: "",
        introduction: "From secretary to creative director, breaking the glass ceiling in advertising.",
        methodology: "Use creativity to prove worth, let the work speak for itself.",
        cognition: "In an industry where women must work twice as hard to be considered half as good, she let her creativity speak louder than prejudice. 从打字员到创意总监的跃迁证明：在男性主导的创意产业中，女性唯一的入场券是无可辩驳的作品质量——当你无法改变规则时，就让作品成为新的规则。",
        works: []
      }
    ]
  },

  // ISTP - Virtuoso (supplement to 5)
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
        id: "ada-lovelace",
        name: "艾达·洛芙莱斯",
        nameEn: "Ada Lovelace",
        title: "Mathematician, Writer",
        image: "",
        introduction: "Lord Byron's daughter, world's first programmer. Foretold computers could process any content, not just numbers.",
        methodology: "Use poetry to understand science, bridge poetry and logic.",
        cognition: "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves——her poetic understanding of mathematics allowed her to see computation 100 years before its time. 她相信机器可以处理任何符号系统，不仅限于数字，这一远见奠定了计算机科学最核心的哲学根基。",
        works: ["Notes on the Analytical Engine"]
      },
      {
        id: "hedy-lamarr",
        name: "海蒂·拉玛尔",
        nameEn: "Hedy Lamarr",
        title: "Actress, Inventor",
        image: "",
        introduction: "Hollywood golden age star AND inventor of frequency-hopping spread spectrum technology - the basis for modern WiFi and Bluetooth.",
        methodology: "Stay curious about the world, turn interests into inventions.",
        cognition: "Hollywood forgot her acting, but the world remembers her invention. 她在钢琴卷帘中找到灵感设计跳频扩频技术，证明美与智慧从不对立。她的认知核心在于：任何无聊都可以被好奇心转化为创新——没有领域界限，只有思维限制。",
        works: ["Frequency-hopping spread spectrum patent"]
      },
      {
        id: "janet-yellen",
        name: "珍妮特·耶伦",
        nameEn: "Janet Yellen",
        title: "Former U.S. Treasury Secretary, Former Fed Chair",
        image: "",
        introduction: "First woman to lead Fed and Treasury. Used economic models to navigate financial crises.",
        methodology: "Data and models drive decisions, rational response to uncertainty.",
        cognition: "The damage unemployment does to families and communities is far greater than inflation——a conviction that guided her through two financial crises. 作为首位执掌美联储和财政部的女性，她用数据证明经济政策不是抽象的数字游戏，而是关乎每个家庭餐桌的现实。",
        works: []
      }
    ]
  },

  // ISFP - Adventurer (supplement to 5)
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
        id: "alice-walker",
        name: "艾丽丝·沃克",
        nameEn: "Alice Walker",
        title: "Writer, Poet",
        image: "",
        introduction: "Pulitzer Prize winner. The Color Purple author gave voice to African American women.",
        methodology: "Use writing to find the self, use story to heal trauma.",
        cognition: "The most uncreative writing space is where I am forbidden to go——because imagination thrives on freedom. 她以《紫色》为黑人女性赋声，证明文学不仅是美学的载体，更是一个被边缘化的群体夺回叙事主权的武器。",
        works: ["The Color Purple"]
      },
      {
        id: "yuan-zhang",
        name: "袁媛",
        nameEn: "Yuan Yuan",
        title: "Documentary Filmmaker",
        image: "",
        introduction: "Documentary director focused on marginalized communities, recording overlooked stories.",
        methodology: "Use the camera to capture truth, let silence be heard.",
        cognition: "Every ordinary person's story deserves to be told——而她选择用镜头做那个讲述者。作为聚焦边缘群体的纪录片导演，她的认知核心在于：沉默不是故事的缺席，而是权力的运作结果。当主流叙事系统性地忽略某些声音时，纪录片就是一场反向的考古——不是挖掘遗迹，而是发掘被活埋的当下。她相信每一个平凡生命的经历都承载着时代的重量，而让这些故事被看见，本身就是一种赋予尊严的政治行动。",
        works: ["Documentary series"]
      }
    ]
  },

  // ESFJ - Consul (supplement to 5)
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
        id: "vivian-ma",
        name: "陈婉婷",
        nameEn: "Vivian Ma",
        title: "Chinese-American Journalist",
        image: "",
        introduction: "Bridging language and culture divides, giving voice to the Chinese American community.",
        methodology: "Connection over division, understanding over prejudice.",
        cognition: "Between two cultures, it is not either/or——而是一个可以同时容纳两种真实的广阔空间。作为华裔记者，她终身致力于在中美两种语言和文化之间搭建桥梁，她的认知核心在于：身份认同不是一道单选题。你不需要为了融入主流而放弃母文化，也不需要为了保持传统而拒绝新环境。真正的文化自信是能够自如地游走于两个世界之间，将'夹缝'重新定义为'双重视角'——一种只有移民后代才能拥有的、看穿两种叙事盲点的特权。",
        works: ["Chinese-language press"]
      },
      {
        id: "joan-didion",
        name: "琼·迪迪翁",
        nameEn: "Joan Didion",
        title: "American Writer, Journalist",
        image: "",
        introduction: "New Journalism pioneer. Used a cool, detached style to chronicle American social upheaval.",
        methodology: "Observer's perspective to document the madness of the era.",
        cognition: "We tell ourselves stories in order to live——这是她对新新闻主义最精炼的哲学定义。她用冷静到近乎冷酷的笔触记录了美国六七十年代的社会动荡，却从不假装自己是客观的旁观者。她深知每一个'客观报道'背后都隐藏着一个叙事者，而承认这一点不是削弱新闻的力量，恰恰是赋予它诚实。她的认知核心在于：人类无法直接承受混乱的现实，必须通过叙事这个滤镜才能将经验转化为意义——而她选择做那个最诚实的滤镜。",
        works: ["The White Album", "The Year of Magical Thinking"]
      },
      {
        id: "verna-vance",
        name: "薇尔娜·万斯",
        nameEn: "Verna Vance",
        title: "Community Organizer",
        image: "",
        introduction: "Detroit community revival movement leader, using organizing power to transform neighborhoods.",
        methodology: "Turn neighbors into community, turn community into power.",
        cognition: "Change starts at your doorstep——不是修辞，而是她数十年扎根底特律社区的行动纲领。当人们讨论社会变革时习惯望向远方的政治中心，她却在自家门口的荒地上种出了第一片社区花园。她的认知核心在于：宏大的社会议题最终都必须在具体的街道、具体的邻居、具体的对话中落地。社区组织的力量不在于口号，而在于将陌生人变成邻居、将邻居变成盟友的那一次次敲门。她证明女性的领导力可以不以权力为中心，而以关系为半径。",
        works: []
      }
    ]
  },

  // ESTJ - Executive (supplement to 5)
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
        id: "madeline-albright",
        name: "马德琳·奥尔布赖特",
        nameEn: "Madeline Albright",
        title: "Former U.S. Secretary of State",
        image: "",
        introduction: "First female Secretary of State. Used pragmatic diplomacy to advance international cooperation.",
        methodology: "Use power to speak, use negotiation to achieve goals.",
        cognition: "Asking the right question is more important than finding the right answer——这是她作为美国首位女性国务卿在外交场上反复验证的认知原则。在充满男性气概宣言的谈判桌上，她选择用提问代替宣告，用倾听代替威胁。她的认知核心在于：真正的外交力量不是让对方屈服，而是让对方在回答你的问题时不知不觉地走向共识。她为女性在权力场中提供了一种另类的领导力范式：不模仿男性的强硬，而是将提问本身转化为最锋利的战略工具。",
        works: ["Fascism and Democracy"]
      },
      {
        id: "mark-parker",
        name: "马克·帕克",
        nameEn: "Mark Parker",
        title: "Former Nike CEO",
        image: "",
        introduction: "Nike CEO during its global expansion era. Led brand transformation.",
        methodology: "Goal-driven growth, culture shapes brand.",
        cognition: "Sport can teach girls how powerful they are.",
        works: []
      }
    ]
  },

  // ESTP - Entrepreneur (supplement to 5)
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
        id: "oprah-winfrey",
        name: "奥普拉·温弗瑞",
        nameEn: "Oprah Winfrey",
        title: "TV Host, Producer, Philanthropist",
        image: "",
        introduction: "From a poor childhood to a media empire. Redefined the talk show with authentic connection.",
        methodology: "Build connection through authenticity, create resonance through empathy.",
        cognition: "The more you know yourself, the more power you have. 从贫苦童年到传媒帝国，她将脱口秀变为集体疗愈的空间。她的认知核心在于：真诚的自我袒露不是软弱，而是最有力量的领导力——当你不再隐藏自己的故事，你就夺回了定义自己的权利。",
        works: ["What I Know For Sure"]
      },
      {
        id: "kylie-jenner",
        name: "凯莉·詹娜",
        nameEn: "Kylie Jenner",
        title: "Entrepreneur",
        image: "",
        introduction: "Kylie Cosmetics founder. Became the youngest self-made billionaire at 21.",
        methodology: "Direct-to-consumer through social media, personal brand as business empire.",
        cognition: "I do not need to be anyone else. 她在社交媒体时代重新定义了'白手起家'——不是否认特权，而是将已有的关注度转化为有形的商业资产。她的核心认知在于：21世纪的女性创业不需要遵循传统路径，个人IP本身就是最大的生产资料。",
        works: ["Kylie Cosmetics"]
      }
    ]
  },

  // ESFP - Entertainer (supplement to 5)
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
        id: "rihanna",
        name: "蕾哈娜",
        nameEn: "Rihanna",
        title: "Singer, Entrepreneur",
        image: "",
        introduction: "8 Grammy Awards. Fenty Beauty founder redefined beauty industry with inclusive standards.",
        methodology: "Turn personal style into a business empire.",
        cognition: "Beauty is defined by me——and by every woman who has ever been excluded by traditional standards. 她以40个色号的粉底液重写美妆规则，证明包容性不是营销话术，而是一种重塑行业标准、赋予每个女性被看见权利的商业哲学。",
        works: ["Fenty Beauty"]
      },
      {
        id: "lady-gaga",
        name: "嘎嘎小姐",
        nameEn: "Lady Gaga",
        title: "Singer, Actress, Philanthropist",
        image: "",
        introduction: "Oscar winner for Best Original Song. Broke pop culture boundaries with music and performance.",
        methodology: "Extreme exterior to express extreme interior.",
        cognition: "I was born to break rules——not for shock value, but to prove that art has no form it cannot inhabit. 她用极端的外在表达极致的内在，将痛苦和脆弱转化为震撼人心的表演。她的认知核心在于：'怪异'不是缺陷，而是拒绝被简化的自由宣言。",
        works: ["A Star Is Born"]
      },
      {
        id: "serena-williams",
        name: "塞雷娜·威廉姆斯",
        nameEn: "Serena Williams",
        title: "Tennis Champion",
        image: "",
        introduction: "23 Grand Slam titles. One of the greatest tennis players ever. Also founded a venture capital fund.",
        methodology: "Turn pressure into dominance.",
        cognition: "Champions are not born, they are made on the court——shot by shot, setback by setback. 她将22年职业生涯中的每一次质疑都转化为动力，证明女性的身体可以是力量、速度和统治力的载体，而不仅是被凝视的对象。",
        works: ["Queen of the Court"]
      }
    ]
  },

  // ENTJ - Commander (supplement to 5)
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
        id: "marillyn-hewson",
        name: "马里琳·休森",
        nameEn: "Marillyn Hewson",
        title: "Former CEO, Lockheed Martin",
        image: "",
        introduction: "CEO of the world's largest defense contractor. Led with strategic thinking.",
        methodology: "Vision drives execution, trust builds teams.",
        cognition: "A leader's most important job is helping others see the future——and then having the courage to build it. 执掌全球最大国防承包商期间，她用战略远见推动组织转型，证明领导力不是发号施令，而是为团队绘制值得奔赴的远景。",
        works: []
      },
      {
        id: "ginni-rometty",
        name: "吉尼·罗梅蒂",
        nameEn: "Ginni Rometty",
        title: "Former IBM CEO",
        image: "",
        introduction: "IBM's first female CEO. Led the company's transformation around Watson AI.",
        methodology: "Data drives transformation, cognitive computing defines the future.",
        cognition: "Do not think of your career as a ladder but as a building with many floors——each level opens new possibilities, not just vertical progress. 作为IBM首位女性CEO，她带领这家百年企业转型AI，她的认知核心在于：职业生涯不是单向攀爬，而是在每次转向中积累多维度的能力体系。",
        works: []
      }
    ]
  },

  // ENFJ - Protagonist (supplement to 5)
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
        id: "bell-hooks",
        name: "贝尔·胡克斯",
        nameEn: "bell hooks",
        title: "American Author, Feminist",
        image: "",
        introduction: "Used all-lowercase to protest patriarchy. Wrote on race, gender and class intersection.",
        methodology: "Use love as the foundation of political action.",
        cognition: "Love is an action, not a feeling——and it is the foundation of any meaningful political struggle. 她坚持用小写字母署名以消解个人崇拜，将爱定义为颠覆父权制、种族主义和阶级压迫的实践力量。她的认知核心在于：没有爱的政治是暴政，没有政治的爱是空谈。",
        works: ["All About Love", "Feminism Is for Everybody"]
      },
      {
        id: "chimamanda-adichie",
        name: "奇玛曼达·阿迪奇埃",
        nameEn: "Chimamanda Ngozi Adichie",
        title: "Nigerian Writer",
        image: "",
        introduction: "TED talk We Should All Be Feminists sparked global conversations, influenced school curricula worldwide.",
        methodology: "Use story to dismantle prejudice, use narrative to build empathy.",
        cognition: "A single story creates a single understanding——and to deny someone their complexity is to deny their humanity. 她用叙事对抗偏见，证明非洲不是单一故事的集合，女性主义不是西方的专利。在她看来，好的故事是人类共情的最后堡垒。",
        works: ["Americanah", "We Should All Be Feminists"]
      },
      {
        id: "jk-rowling",
        name: "J.K.罗琳",
        nameEn: "J.K. Rowling",
        title: "British Author",
        image: "",
        introduction: "From unemployed single mother to the world's best-selling author. Harry Potter healed hundreds of millions of readers.",
        methodology: "Build another world with imagination, deliver universal values through story.",
        cognition: "Failure means you are trying something new——and rock bottom became the solid foundation on which she rebuilt her life. 从靠救济金生活的单亲母亲到全球畅销作家，她用想象力构建了一个让亿万读者找到勇气的世界。她的认知核心在于：故事的疗愈力量不亚于任何药物。",
        works: ["Harry Potter series"]
      }
    ]
  },

  // INTP - Logician (supplement to 5)
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
        id: "elizabeth-blackburn",
        name: "伊丽莎白·布莱克本",
        nameEn: "Elizabeth Blackburn",
        title: "Biologist, Nobel Laureate",
        image: "",
        introduction: "Nobel Prize in Physiology or Medicine. Discovered telomerase, pioneering anti-aging research.",
        methodology: "Curiosity drives research, experiments test hypotheses.",
        cognition: "Aging is not inevitable but an intervenable biological process——这一发现为她赢得了诺贝尔奖，也为人类重新理解衰老提供了革命性的科学基础。她发现的端粒酶揭示了细胞衰老的分子机制，将对'衰老是宿命'的古老认知转化为一个可以被科学干预的变量。她的认知核心在于：生物学中的'必然'往往是尚未被理解的因果链，而女性的好奇心与实验精神足以拆解任何看似不可动摇的自然法则。她证明女性的科学视野可以同时具备分子级的精确与人类级的关怀。",
        works: ["Telomere research"]
      },
      {
        id: "carol-dweck",
        name: "卡罗尔·德韦克",
        nameEn: "Carol Dweck",
        title: "Stanford Psychology Professor",
        image: "",
        introduction: "Discovered growth vs fixed mindset. Transformed education philosophy globally.",
        methodology: "Use mindset theory to explain the root of success and failure.",
        cognition: "Ability is not fixed, it can be developed. 她以数十年的心理学实验揭示：对自身能力的信念本身，就是影响成就的关键变量。成长型思维不是鸡汤，而是一个可以通过训练重塑的神经通路——这为教育公平提供了革命性的科学基础。",
        works: ["Mindset: The New Psychology of Success"]
      }
    ]
  },

  // Additional Chinese/Asian women across types
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
        id: "dong-mingzhu",
        name: "董明珠",
        nameEn: "Dong Mingzhu",
        title: "Chairwoman, Gree Electric",
        image: "",
        introduction: "From ordinary salesperson to leader of China's largest air conditioning company. Known for her tough management style.",
        methodology: "Build brand reputation with extreme product quality.",
        cognition: "The best service is no after-sales service needed——a philosophy that drove her from salesperson to chairwoman. 她用极端的产品质量标准倒逼整个中国制造业升级，证明女性的'强势'不是性格缺陷，而是对专业和品质不可妥协的信仰。",
        works: []
      }
    ]
  },

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
        id: "zhu-ning",
        name: "朱宁",
        nameEn: "Zhu Ning",
        title: "Economist, Tsinghua Professor",
        image: "",
        introduction: "Behavioral finance researcher. Uses scientific methods to decode investor psychology and market patterns.",
        methodology: "Use data and models to explain irrational behavior.",
        cognition: "An investor's greatest enemy is themselves——这位清华教授用行为金融学的实证研究将这句格言变成了科学结论。他的认知核心在于：市场波动不可怕，可怕的是人在波动面前不可抑制的非理性冲动。他用数据和模型解码投资者的心理陷阱，证明贪婪与恐惧不是性格弱点，而是可以被识别、被训练的认知偏差。在金融教育领域，他将'认识你自己'从古老的哲学训诫转化为每一个投资者都可以使用的操作性工具——先了解自己，再理解市场。",
        works: ["Investor's Spiritual Practice"]
      }
    ]
  },

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
        id: "ann-hui",
        name: "许鞍华",
        nameEn: "Ann Hui",
        title: "Hong Kong Film Director",
        image: "",
        introduction: "Hong Kong New Wave director. 6-time Hong Kong Film Awards Best Director. Chronicled Hong Kong's social transformation.",
        methodology: "Capture ordinary people's survival state with delicate perspective.",
        cognition: "Film is observation and reflection on life——三十年来她用镜头践行着这个朴素得近乎固执的信念。六次香港电影金像奖最佳导演的背后，是她对普通人生活近乎人类学式的凝视：没有戏剧化的冲突，只有日常中暗涌的命运。她的认知核心在于：电影不需要英雄，每个人在时代洪流中的微小挣扎本身已足够壮阔。在商业大片泛滥的时代，她选择做一个耐心的观察者，证明女性的凝视可以既柔软又锋利——柔软到捕捉一饭一菜的温情，锋利到切开社会结构的肌理。",
        works: ["A Simple Life", "Our Time Will Come"]
      }
    ]
  },

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
        id: "mai-zi",
        name: "麦子",
        nameEn: "Mai Zi",
        title: "Short Video Creator, Drama Director",
        image: "",
        introduction: "Uses short videos to spread art and women's growth ideas. Over 10 million followers across platforms.",
        methodology: "Connect young people with beauty and authenticity.",
        cognition: "Every girl has her own season——她不是在贩卖鸡汤，而是在用戏剧导演的叙事功底为千万年轻女性绘制一张可参考的成长地图。从话剧舞台到短视频平台，她将艺术的严肃内容装进了大众可及的媒介容器。她的认知核心在于：女性成长不是一个需要竞争的赛道，而是各有花期的花园。有人二十岁绽放，有人四十岁才找到自己的节奏，关键不在于快慢，而在于你是否在等待中保持了对自己的诚实。她用美和真实两种力量重塑了'女性觉醒'在互联网时代的传播方式。",
        works: ["Short video series"]
      }
    ]
  },

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
        id: "zhang-yiming",
        name: "张一鸣",
        nameEn: "Zhang Yiming",
        title: "Founder of ByteDance",
        image: "",
        introduction: "Founder of TikTok/Douyin. Redefined content distribution with algorithms.",
        methodology: "Use machine learning to understand users, recommendation algorithms to connect people with information.",
        cognition: "Do not forget the original goal because of unexpected success.",
        works: ["ByteDance"]
      }
    ]
  },

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
        id: "gong-li",
        name: "巩俐",
        nameEn: "Gong Li",
        title: "Actress",
        image: "",
        introduction: "Cannes Film Festival jury member. Bridged Eastern and Western cinema, becoming China's international face in film.",
        methodology: "Devote sincerely to every role.",
        cognition: "Acting is my life, but it is also her method of cultural diplomacy. 她以极致的角色投入为东方女性在国际影坛赢得尊严，证明演技不是技术堆砌，而是对人性深处情感的虔诚抵达。在她看来，每一个角色都是一次生命的重新投胎。",
        works: ["Red Sorghum", "To Live"]
      }
    ]
  },

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
        id: "zhou-qunfei",
        name: "周群飞",
        nameEn: "Zhou Qunfei",
        title: "Founder of Lens Technology",
        image: "",
        introduction: "From factory worker to touch screen queen. Broke into Apple's supply chain through technological innovation.",
        methodology: "Push manufacturing to the extreme, build barriers through technology.",
        cognition: "Nothing is impossible when you are willing to learn. 从工厂流水线女工到触屏玻璃女王，她用技术迭代打破供应链的壁垒。她的认知核心在于：制造业的极致不是廉价劳动，而是用工艺创新重新定义'中国制造'的价值。",
        works: []
      }
    ]
  },

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
        id: "he-yin",
        name: "和英",
        nameEn: "He Yin",
        title: "Social Entrepreneur",
        image: "",
        introduction: "Founded nonprofit organization focused on rural girls education. Changed the fate of marginalized groups through action.",
        methodology: "Use education to break intergenerational poverty transmission.",
        cognition: "Every girl deserves to be given a chance——not charity, but a fair starting line. 她以教育项目打破农村女孩的贫困代际传递，相信教育不是锦上添花的装饰，而是每一个被忽视的生命重新定义自己命运的武器。",
        works: []
      }
    ]
  },

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
        id: "he-jiaping",
        name: "何嘉玠",
        nameEn: "He Jiaping",
        title: "Fashion Blogger, Writer",
        image: "",
        introduction: "Connected Eastern and Western aesthetics through fashion writing. Influenced the taste and lifestyle of China's new elite women.",
        methodology: "Influence public aesthetics through personal style.",
        cognition: "Fashion is a tool for self-expression, not a label——她的时装写作始终在践行这个区分。在消费主义拼命给女性贴上各种风格标签的时代，她选择用文字和穿搭来论证：风格不是买来的，而是你内在审美秩序的对外投射。她在东西方美学之间自如切换，不是为了炫技，而是为了证明文化融合的真正形态不是妥协的混搭，而是一种更高维度的审美自觉。她的认知为那些在'应该穿什么'和'想穿什么'之间挣扎的女性提供了一个解放性的答案：你穿的不是衣服，是你对自己的理解。",
        works: ["Elegance Is a Habit"]
      }
    ]
  }
];
