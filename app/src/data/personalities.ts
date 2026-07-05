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
}

export interface Personality {
  type: string;
  name: string;
  description: string;
  traits: {
    strengths: string[];
    challenges: string[];
  };
  women: Woman[];
}

export const personalities: Personality[] = [
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
        id: "jane-austen",
        name: "简·奥斯汀",
        nameEn: "Jane Austen",
        title: "英国经典小说家",
        image: "/images/jane-austen.jpg",
        introduction: "英国经典小说家，终身未婚，专注于写作。她的作品以犀利的理性分析和对社会结构的深刻洞察著称，擅长通过婚姻、家庭等微观场景揭示19世纪英国社会的阶级固化与人性复杂。",
        methodology: "通过细致观察社会现象，用理性拆解问题。从日常生活细节中提炼出对社会结构的深刻洞察。",
        cognition: "她以冷静如解剖刀般的理性拆解19世纪英国社会结构，揭示婚姻本质上是阶级博弈与经济契约的精密装置。在她的叙事中，爱情从来不是故事的终点，而是审视人性虚伪、阶层固化与性别政治的棱镜——每一位女主角的成长弧光，都暗含着她对女性独立判断力与内在自由最深沉的信念。",
        works: ["《傲慢与偏见》", "《爱玛》", "《理性与情感》"]
      },
      {
        id: "jk-rowling",
        name: "J.K.罗琳",
        nameEn: "J.K. Rowling",
        title: "英国作家",
        image: "/images/jk-rowling.jpg",
        introduction: "从失业单亲妈妈到全球知名作家。《哈利·波特》系列的创作者，通过战略规划与逻辑构建打造了宏大的魔法世界。",
        methodology: "战略规划与逻辑构建，通过市场调研调整创作方向。构建完整的魔法世界规则体系。",
        cognition: "她以系统工程师般的精密思维构建魔法世界——每一道咒语、每一条规则背后都是严密的因果链。但她真正的认知突破在于：爱不是魔法的对立面，而是最高阶的魔法。从单亲母亲到全球畅销作家，她用想象力的战略部署证明，女性的坚韧与创造力可以在最黑暗的时刻重新定义现实。",
        works: ["《哈利·波特》系列", "《偶发空缺》"]
      },
      {
        id: "eileen-gu",
        name: "谷爱凌",
        nameEn: "Eileen Gu",
        title: "自由式滑雪运动员",
        image: "/images/eileen-gu.jpg",
        introduction: "中国自由式滑雪运动员、斯坦福大学学生。通过精准时间管理，实现了体育与学业的双重突破。",
        methodology: "精准时间管理，兼顾滑雪训练与学业。理性分析技术改进，不断挑战自我极限。",
        cognition: "她将滑雪视为极限理性的实验场：每一个动作都可以被分解、分析、优化。但她的认知体系远不止于运动——精确的时间管理不是剥夺自由的枷锁，而是最大化可能性自由的工具。在斯坦福与冬奥赛场之间自由切换，她证明女性可以同时占领智识与体能的巅峰，无需在多元身份中做减法。",
        works: ["2022年冬奥会冠军"]
      }
    ]
  },
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
        id: "marie-curie",
        name: "玛丽·居里",
        nameEn: "Marie Curie",
        title: "物理学家、化学家",
        image: "/images/marie-curie.jpg",
        introduction: "物理学家、化学家，两次诺贝尔奖得主。用严谨的实验方法对放射性物质进行系统研究。",
        methodology: "严谨的实验方法，对放射性物质的系统研究。坚持不懈地追求科学真理。",
        cognition: "她将科学提炼为纯粹的信仰——不是盲目的崇拜，而是以实验为唯一准则的理性虔诚。在放射性物质灼伤手指的深夜实验室里，她确立了女性科学家的根本认知：知识不是男性的专属领地，自然规律不因性别而弯曲。两次跨越诺贝尔奖的门槛，她用最严谨的数据为所有后来者打开大门。",
        works: ["《放射性专论》"]
      },
      {
        id: "hannah-arendt",
        name: "汉娜·阿伦特",
        nameEn: "Hannah Arendt",
        title: "哲学家、政治理论家",
        image: "/images/hannah-arendt.jpg",
        introduction: "哲学家、政治理论家，以批判性思维对权力结构进行深度剖析。",
        methodology: "批判性思维，对权力结构的深度剖析。从哲学角度分析极权主义的本质。",
        cognition: "她将哲学从书斋带入法庭——'平庸之恶'不只是一种理论，而是对现代官僚制如何消解个体道德判断的精准解剖。在她看来，思考不是学者的特权，而是每个公民对抗体制化暴力的最后防线。这一认知颠覆了传统善恶二元论：最大的恶常常不是蓄意的，而是停止思考的。",
        works: ["《极权主义的起源》", "《人的境况》"]
      },
      {
        id: "margaret-atwood",
        name: "玛格丽特·阿特伍德",
        nameEn: "Margaret Atwood",
        title: "加拿大作家、诗人",
        image: "/images/margaret-atwood.jpg",
        introduction: "加拿大作家、诗人，2022年诺贝尔文学奖得主。用speculative fiction探讨社会问题。",
        methodology: "Speculative fiction探讨社会问题，用文学预言未来可能的社会形态。",
        cognition: "她用 speculative fiction 搭建思想实验室：当生育权被剥夺、身体成为国家财产时，女性还剩什么？《使女的故事》不是预言，而是对历史模式的前瞻性推演。她的认知核心在于：文学不应只记录过去，更应成为未来的预警系统——想象灾难，是为了阻止它发生。",
        works: ["《使女的故事》", "《猫眼》"]
      }
    ]
  },
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
        id: "sheryl-sandberg",
        name: "谢丽尔·桑德伯格",
        nameEn: "Sheryl Sandberg",
        title: "Facebook前COO",
        image: "/images/sheryl-sandberg.jpg",
        introduction: "Facebook前COO，硅谷第一女强人。倡导女性向前一步，主动争取职场机会。",
        methodology: "向前一步的职场策略，主动争取机会。建立女性互助网络Lean In。",
        cognition: "她用数据和亲身经历颠覆'女性不适合领导'的偏见——女性职场的每一次退让不是个人选择，而是系统性的自我设限。'向前一步'不是口号，而是她在硅谷博弈中提炼出的战略方法论：在谈判桌前，女性不仅要坐下，还要让声音被听见，让价值被量化。",
        works: ["《向前一步》", "《另一种选择》"]
      },
      {
        id: "margaret-thatcher",
        name: "玛格丽特·撒切尔",
        nameEn: "Margaret Thatcher",
        title: "英国前首相",
        image: "/images/margaret-thatcher.jpg",
        introduction: "英国前首相，铁娘子。以坚定的政治立场和强硬的外交政策著称。",
        methodology: "坚定的政治立场，强硬的外交政策。推行自由市场经济改革。",
        cognition: "她将个人责任原则贯彻到国家治理的每一个毛孔：没有社会，只有男人、女人和家庭。在男性主导的政坛中，她用不可动摇的信念证明，女性的强硬不是性格缺陷，而是一种在丛林政治中生存的必需品。她的认知遗产至今仍是关于权力、市场与个体关系的核心辩论。",
        works: ["《通往权力之路》"]
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
        id: "ayn-rand",
        name: "安·兰德",
        nameEn: "Ayn Rand",
        title: "俄裔美国作家、哲学家",
        image: "/images/ayn-rand.jpg",
        introduction: "俄裔美国作家、哲学家，客观主义哲学创始人。强调理性利己和个人主义。",
        methodology: "从零开始构建哲学体系，用小说传播思想。挑战传统道德观念。",
        cognition: "她将利己主义从道德污名中解放——理性不是冷血，而是人类最高贵的官能。在集体主义的20世纪，她用安·兰德式英雄宣告：创造者的价值不需要牺牲来证明。她的认知核心在于：当一个人为自我的理性幸福而活，他客观上在推动人类文明向前。",
        works: ["《源泉》", "《阿特拉斯耸耸肩》"]
      }
    ]
  },
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
        id: "simone-de-beauvoir",
        name: "西蒙娜·德·波伏瓦",
        nameEn: "Simone de Beauvoir",
        title: "法国存在主义哲学家",
        image: "/images/simone-de-beauvoir.jpg",
        introduction: "法国存在主义哲学家、作家，女性主义奠基人。提出女人不是天生的，而是被塑造的。",
        methodology: "用哲学思考女性处境，从存在主义角度分析性别问题。",
        cognition: "她以一句'女人不是天生的，而是后天形成的'撕裂了千年性别神话。在存在主义的框架下，她揭示：女性身份不是一个生物学的终点，而是一个可以被重新选择的起点。她毕生践行自己的理论——拒绝婚姻，选择思想伴侣，用写作证明女性可以同时是哲人、爱人、行动者。",
        works: ["《第二性》", "《端方淑女》"]
      },
      {
        id: "audrey-hepburn",
        name: "奥黛丽·赫本",
        nameEn: "Audrey Hepburn",
        title: "英国演员、慈善家",
        image: "/images/audrey-hepburn.jpg",
        introduction: "英国演员、慈善家，联合国儿童基金会亲善大使。晚年投身慈善事业。",
        methodology: "演艺事业与慈善事业的结合，用影响力帮助弱势群体。",
        cognition: "她将银幕上的优雅转化为战乱地区怀抱营养不良儿童的温柔臂弯。在她的人生后半场，美不再是裙摆的长度或颧骨的弧度，而是你愿意为不认识的孩子俯身的次数。她用联合国儿童基金会的行程证明：优雅的最高形式，是把世界的痛苦变成自己的责任。",
        works: ["《天使在人间》"]
      },
      {
        id: "virginia-woolf",
        name: "弗吉尼亚·伍尔夫",
        nameEn: "Virginia Woolf",
        title: "英国作家",
        image: "/images/virginia-woolf.webp",
        introduction: "英国作家，意识流文学代表。关注女性意识的觉醒和女性写作空间。",
        methodology: "意识流叙事，内心独白展现精神世界。用文学探索女性内心世界。",
        cognition: "她以意识流为手术刀剖开女性的内在宇宙——'一间自己的房间'不只是物理空间，而是精神主权的宣言。在她看来，女性写作之所以稀缺，不是因为能力不足，而是被剥夺了经济独立与独处的奢侈。她的认知在百年后依然锋利：自由的前提不是许可，而是一张属于自己的支票。",
        works: ["《达洛维夫人》", "《一间自己的房间》"]
      }
    ]
  },
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
        id: "emily-dickinson",
        name: "艾米莉·狄金森",
        nameEn: "Emily Dickinson",
        title: "美国传奇诗人",
        image: "/images/emily-dickinson.jpg",
        introduction: "美国传奇诗人，生前仅发表7首诗。用简洁语言承载深刻哲思。",
        methodology: "简洁语言承载深刻哲思，用诗歌探索生命本质。",
        cognition: "她在白色连衣裙与花园小径之间构建了比整个19世纪美国文学更广阔的宇宙。拒绝出版不是胆怯，而是对诗艺的极简主义虔诚——她选择让时间而非市场来验证她的价值。她的认知核心在于：外在世界的退缩不是逃避，而是为内在星空腾出所有的光。",
        works: ["《艾米莉·狄金森诗集》"]
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
        id: "oprah-winfrey",
        name: "奥普拉·温弗瑞",
        nameEn: "Oprah Winfrey",
        title: "美国著名主持人",
        image: "/images/oprah-winfrey.jpg",
        introduction: "美国著名主持人、企业家、慈善家。用媒体平台传递正能量。",
        methodology: "用媒体平台传递正能量，通过访谈建立情感连接。",
        cognition: "她将脱口秀演播室变为集体疗愈的圣殿——当摄像机亮起，最深层的羞耻与伤痛被转化为数百万观众的共同语言。从密西西比贫苦女孩到传媒帝国缔造者，她的认知核心在于：脆弱不是弱点，而是最有力的连接；当你不再隐藏自己的故事，你就夺回了定义自己的权利。",
        works: ["《我坚信》"]
      },
      {
        id: "maya-angelou",
        name: "玛雅·安吉罗",
        nameEn: "Maya Angelou",
        title: "美国黑人作家、诗人",
        image: "/images/maya-angelou.jpg",
        introduction: "美国黑人作家、诗人、社会活动家。用自传和诗歌对抗种族歧视。",
        methodology: "用自传和诗歌对抗种族歧视，用艺术传递社会价值。",
        cognition: "她的自传不只是个人叙事，而是为整个被噤声的族群发出的一声道破沉默的呐喊。'我知道笼中鸟为何歌唱'——因为歌唱是笼中鸟唯一不被剥夺的自由。她用诗歌、散文与演讲编织的认知体系，将个人创伤转化为集体疗愈，证明艺术不是逃避，而是最锋利的自由武器。",
        works: ["《我知道笼中鸟为何歌唱》"]
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
        id: "annie-ernaux",
        name: "安妮·埃尔诺",
        nameEn: "Annie Ernaux",
        title: "法国当代作家",
        image: "/images/annie-ernaux.jpg",
        introduction: "法国当代作家，2022年诺贝尔文学奖得主。用自传体文学记录个人与社会。",
        methodology: "用自传体文学记录个人与社会，将个人记忆与集体历史交织。",
        cognition: "她将'我'彻底溶解在'我们'之中——每一段私人记忆都是时代的切片，每一次羞耻、欲望、阶层焦虑都不只属于她个人。作为从工人阶级走出的诺贝尔奖得主，她以近乎社会学的冷静笔触记录女性身体经验与阶层流动，证明个体的诚实自传可以比宏大的历史教科书更逼近真相。",
        works: ["《位置》", "《悠悠岁月》"]
      }
    ]
  },
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
        id: "condoleezza-rice",
        name: "康多莉扎·赖斯",
        nameEn: "Condoleezza Rice",
        title: "美国前国务卿",
        image: "/images/condoleezza-rice.jpg",
        introduction: "美国前国务卿，斯坦福大学胡佛研究所研究员。通过战略规划与严格执行实现目标。",
        methodology: "战略规划与严格执行，从学者到政治家的跨越。",
        cognition: "从种族隔离的伯明翰到白宫战情室，她用钢琴般的精准指法在世界棋盘上落子。在她的认知体系中，实力不是侵略的代名词，而是对话的入场券；规则不是束缚，而是不可预测的国际关系中最可依赖的锚点。她的每一步跨越都在重写'黑人与女性'这个双重身份的局限叙事。",
        works: ["《非裔美国女性回忆录》"]
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
        id: "mother-teresa",
        name: "特蕾莎修女",
        nameEn: "Mother Teresa",
        title: "慈善工作者",
        image: "/images/mother-teresa.jpg",
        introduction: "慈善工作者，诺贝尔和平奖得主。一生践行爱与奉献，照顾社会最弱势群体。",
        methodology: "用行动践行爱与奉献，照顾被社会遗忘的人。",
        cognition: "她将爱从抽象的神学概念中拽出，塞进加尔各答贫民窟的每一碗粥、每一双被清洗的伤口。她的认知核心是对现代慈善最深层的质问：你是否愿意触碰那些连看都不愿多看一眼的人？在她的实践中，博爱不是遥远的理想，而是每个早晨为陌生的临终者整理床单的仪式。",
        works: ["《德兰修女传》", "《爱的能量》"]
      }
    ]
  },
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
        id: "sonia-sotomayor",
        name: "索尼娅·索托马约尔",
        nameEn: "Sonia Sotomayor",
        title: "美国联邦最高法院大法官",
        image: "/images/sonia-sotomayor.jpg",
        introduction: "美国联邦最高法院大法官，首位拉美裔女性大法官。通过教育改变命运。",
        methodology: "通过教育改变命运，用法律维护社会公平。",
        cognition: "从布朗克斯贫民区到联邦最高法院，她的法袍下包裹着对所有'不可能'叙事的有力反驳。她坚信法律不应是精英的加密文本，而是每一个普通人触手可及的保护伞。她在每一个判词中嵌入的不仅是先例与法条，更是对'出身决定论'最精准的司法消毒。",
        works: ["《我爱的世界》"]
      }
    ]
  },
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
        id: "adele",
        name: "阿黛尔",
        nameEn: "Adele",
        title: "英国流行乐女歌手",
        image: "/images/adele.jpg",
        introduction: "英国流行乐女歌手，多座格莱美奖得主。用音乐真诚表达情感。",
        methodology: "用音乐表达情感，真诚的情感表达打动人心。",
        cognition: "她拒绝成为音乐工业的完美产品，让自己的声音承载未经修饰的心碎、愧疚与重建。在她看来，一张专辑不是一堆商品的打包，而是一段情感考古的完整记录。她用沙哑的嗓音证明：艺术的力量不来自技术精确，而来自你敢不敢让百万陌生人看见你的裂痕。",
        works: ["《19》", "《21》", "《25》", "《30》"]
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
        id: "amelia-earhart",
        name: "阿梅莉亚·埃尔哈特",
        nameEn: "Amelia Earhart",
        title: "美国传奇飞行员",
        image: "/images/amelia-earhart.jpg",
        introduction: "美国传奇飞行员，首位独自飞越大西洋的女飞行员。勇敢尝试，突破极限。",
        methodology: "勇敢尝试，突破极限，用技术征服天空。",
        cognition: "当大西洋在机翼下展开，她不是在做冒险，而是在重新定义女性的物理边界。每一次起飞都是对'女人不适合技术领域'的公开驳斥。她的认知核心在于：性别从来不是能力的天花板，天空没有禁区划给男性——勇气与技能，才是唯一的航图。",
        works: ["《天空是我的画布》"]
      },
      {
        id: "coco-chanel",
        name: "可可·香奈儿",
        nameEn: "Coco Chanel",
        title: "法国时尚设计师",
        image: "/images/coco-chanel.jpg",
        introduction: "法国时尚设计师，香奈儿品牌创始人。打破传统，创造简约风格。",
        methodology: "打破传统，创造简约风格，用设计解放女性身体。",
        cognition: "她从修道院的黑白格纹中提炼出改变整个20世纪女性身体的密码——解放不是让女人穿得像男人，而是让她们不再需要取悦任何人。小黑裙、斜纹软呢外套，每一件设计都在说：你的舒适比他人的眼光更重要。她用一针一线拆解了维多利亚时代的束腰，也拆解了女性被观赏的命运。",
        works: ["《香奈儿：我没时间讨厌你》"]
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
        id: "frida-kahlo",
        name: "弗里达·卡罗",
        nameEn: "Frida Kahlo",
        title: "墨西哥传奇画家",
        image: "/images/frida-kahlo.jpg",
        introduction: "墨西哥传奇画家，超现实主义艺术代表。用绘画表达痛苦与生命力。",
        methodology: "用绘画表达痛苦与生命力，将个人经历转化为艺术。",
        cognition: "当脊柱被一次次手术刀切开，她选择把石膏胸衣变成画布。在她的认知里，痛苦不是需要隐藏的缺陷，而是最诚实的创作材料。她用浓密的眉毛与墨西哥传统服饰宣告：女性不需要符合任何标准的'美'——你的伤痕就是你的签名，你的脆弱就是你的超现实王国。",
        works: ["《弗里达·卡罗自传》"]
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
        id: "madonna",
        name: "麦当娜",
        nameEn: "Madonna",
        title: "美国歌手、演员",
        image: "/images/madonna.jpg",
        introduction: "美国歌手、演员，流行音乐icon。不断重塑自我，引领潮流。",
        methodology: "不断重塑自我，引领潮流，用音乐和形象挑战传统。",
        cognition: "她将每一个10年都做成一场精心策划的文化闪电战——性的表达权、宗教的挑衅、年龄的反叛，每一条战线都是为女性争夺'定义自己'的主权。她的认知核心在于：流行文化不是低俗的消费品，而是女性集体谈判社会规则的公开法庭。",
        works: ["《Like a Virgin》", "《Ray of Light》"]
      },
      {
        id: "katharine-hepburn",
        name: "凯瑟琳·赫本",
        nameEn: "Katharine Hepburn",
        title: "美国演员",
        image: "/images/katharine-hepburn.jpg",
        introduction: "美国演员，4次奥斯卡最佳女主角。打破传统女性形象，塑造独立角色。",
        methodology: "打破传统女性形象，塑造独立角色。",
        cognition: "在好莱坞要求女人做甜心花瓶的时代，她穿着长裤大步走过片场，拒绝化妆、拒绝奉承、拒绝在他人的剧本里扮演配角。她以四座奥斯卡证明：女性不必通过取悦任何人来获得成功——最好的角色是自己选择的，最锋利的武器是不妥协的自我。",
        works: ["《费城故事》", "《猜猜谁来吃晚餐》"]
      }
    ]
  },
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
        id: "marilyn-monroe",
        name: "玛丽莲·梦露",
        nameEn: "Marilyn Monroe",
        title: "美国传奇女演员",
        image: "/images/marilyn-monroe.jpg",
        introduction: "美国传奇女演员，20世纪流行文化符号。用魅力与表演征服观众。",
        methodology: "用魅力与表演征服观众，成为流行文化icon。",
        cognition: "她被世界钉在金发女郎的标签上，但她比任何人都更清楚标签的囚笼性质。从孤儿院到好莱坞巨星，她以自建制片公司对抗好莱坞体系——那场著名的裙摆飞扬不是失控，而是对一个时代女性处境的精准表演。在她的认知中，性感不是被动被观看，而是一场精心导演的权力游戏，只是这个世界还没有准备好承认它的复杂性。",
        works: ["《玛丽莲·梦露：私密日记》"]
      }
    ]
  }
];

// 导入额外的人物数据（仅用于向后兼容的 deprecated 导出）
import { additionalPersonalities } from './personalities-additional';
import { additionalPersonalitiesPart2 } from './personalities-additional-2';
import { additionalPersonalitiesPart3 } from './personalities-additional-3';
import { additionalPersonalitiesPart4 } from './personalities-additional-4';
import { additionalPersonalitiesPart5 } from './personalities-additional-5';

/**
 * @deprecated 请使用 `@/data/allPersonalities` 中的 `allPersonalities`（PersonalityType[] 类型）
 * 新版本包含更完整的接口定义（Woman 含 mbtiType、quote、microHabit 等字段）
 */
export const allPersonalities: Personality[] = [...personalities, ...additionalPersonalities, ...additionalPersonalitiesPart2, ...additionalPersonalitiesPart3, ...additionalPersonalitiesPart4, ...additionalPersonalitiesPart5];

/**
 * @deprecated 请使用 `@/data/allPersonalities` 中的 `getPersonalityByType`
 */
export const getPersonalityByType = (type: string): Personality | undefined => {
  return allPersonalities.find(p => p.type === type.toUpperCase());
};

/**
 * @deprecated 请使用 `@/data/allPersonalities` 中的 `getAllWomen()`（返回 Woman[]，含 mbtiType）
 */
export const getAllWomen = () => {
  return allPersonalities.flatMap(p => p.women);
};
