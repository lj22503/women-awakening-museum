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
        cognition: "Grit is not a talent, it is a choice.",
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
        cognition: "No one can make you feel inferior without your consent.",
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
        cognition: "Despite everything, I still believe people are good at heart.",
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
        cognition: "Reading is a form of self-education.",
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
        cognition: "Only your own life is the story that really matters.",
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
        cognition: "The internet is both liberator and cage.",
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
        cognition: "This generation will not be silent.",
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
        cognition: "The universe is full of unknowns, and that is what makes it beautiful.",
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
        cognition: "Your voice is your power.",
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
        cognition: "The most dangerous phrase: it has always been done this way.",
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
        cognition: "Bias is not a personal problem, it is a systems problem.",
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
        cognition: "Everyone deserves to be seen.",
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
        cognition: "In this industry, women must be twice as good to be considered half as good.",
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
        cognition: "The Analytical Engine has no pretensions to originate anything. It can do whatever we know how to order it to perform.",
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
        cognition: "Movies will be forgotten, but inventions will be remembered.",
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
        cognition: "The damage unemployment does to families and communities is far greater than inflation.",
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
        cognition: "The most uncreative writing space is where I am forbidden to go.",
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
        cognition: "Every ordinary person's story deserves to be told.",
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
        cognition: "Between two cultures, it is not either/or.",
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
        cognition: "We tell ourselves stories in order to live.",
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
        cognition: "Change starts at your doorstep.",
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
        cognition: "Asking the right question is more important than finding the right answer.",
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
        cognition: "The more you know yourself, the more power you have.",
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
        cognition: "I do not need to be anyone else.",
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
        cognition: "Beauty is defined by me.",
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
        cognition: "I was born to break rules.",
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
        cognition: "Champions are not born, they are made on the court.",
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
        cognition: "A leader's most important job is helping others see the future.",
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
        cognition: "Do not think of your career as a ladder but as a building with many floors.",
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
        cognition: "Love is an action, not a feeling.",
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
        cognition: "A single story creates a single understanding.",
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
        cognition: "Failure means you are trying something new.",
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
        cognition: "Aging is not inevitable but an intervenable biological process.",
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
        cognition: "Ability is not fixed, it can be developed.",
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
        cognition: "The best service is no after-sales service needed.",
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
        cognition: "An investor's greatest enemy is themselves.",
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
        cognition: "Film is observation and reflection on life.",
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
        cognition: "Every girl has her own season.",
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
        cognition: "Acting is my life.",
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
        cognition: "Nothing is impossible.",
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
        cognition: "Every girl deserves to be given a chance.",
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
        cognition: "Fashion is a tool for self-expression, not a label.",
        works: ["Elegance Is a Habit"]
      }
    ]
  }
];
