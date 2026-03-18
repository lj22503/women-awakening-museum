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
        cognition: "犀利的理性分析，对社会结构的深刻洞察。认为婚姻不仅是爱情，更是社会阶层和经济地位的博弈。",
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
        cognition: "魔法世界的规则构建，对权力与正义的探讨。相信爱与牺牲是战胜邪恶的力量。",
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
        cognition: "挑战极限的运动理念，理性分析技术改进。相信努力与坚持可以突破任何界限。",
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
        cognition: "科学实证主义，对知识的纯粹追求。相信科学可以改变世界。",
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
        cognition: "极权主义批判，行动与自由的哲学。提出平庸之恶概念。",
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
        cognition: "女性主义视角，对权力与控制的批判。关注女性身体自主权。",
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
        cognition: "女性领导力，工作与家庭的平衡。相信女性可以在职场中取得同等成就。",
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
        cognition: "保守主义，自由市场经济。相信个人责任和自由竞争。",
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
        cognition: "理性利己主义，个人主义哲学。相信个人成就和理性思考。",
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
        cognition: "存在主义女性主义，女性是社会建构的产物。相信女性可以超越传统角色。",
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
        cognition: "优雅与善良的统一，相信美不仅在外表，更在内心。",
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
        cognition: "女性需要独立空间，一个女人要有自己的房间和钱。",
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
        cognition: "对死亡、自然、永恒的探索。相信诗歌是灵魂的表达。",
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
        cognition: "自我接纳与成长，成为最好的自己。相信每个人都有潜力。",
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
        cognition: "黑人女性的身份认同，相信艺术可以改变世界。",
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
        cognition: "个人记忆与集体历史的交织，相信文学可以记录时代。",
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
        cognition: "现实主义外交政策，相信实力和规则。",
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
        cognition: "爱是一种行动，不是情感。相信每个人都有被爱的权利。",
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
        cognition: "法律正义与社会公平，相信教育可以改变命运。",
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
        cognition: "真诚的情感表达，相信音乐可以治愈心灵。",
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
        cognition: "天空是我的画布，相信女性可以在任何领域取得成就。",
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
        cognition: "我没时间讨厌你的独立精神，相信简约即是优雅。",
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
        cognition: "用疼痛作画，艺术即生命。相信痛苦可以转化为美。",
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
        cognition: "叛逆与创新的精神，相信女性可以掌控自己的形象。",
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
        cognition: "女权主义先驱，相信女性可以独立自强。",
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
        cognition: "性感与脆弱的复杂结合，相信美丽可以是一种力量。",
        works: ["《玛丽莲·梦露：私密日记》"]
      }
    ]
  }
];

export const getPersonalityByType = (type: string): Personality | undefined => {
  return personalities.find(p => p.type === type.toUpperCase());
};
