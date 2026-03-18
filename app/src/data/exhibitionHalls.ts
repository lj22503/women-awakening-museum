export interface Hall {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  visualStyle: string;
  image: string;
  women: {
    name: string;
    title: string;
    work: string;
    methodology: string;
    quote: string;
    image: string;
  }[];
}

export const exhibitionHalls: Hall[] = [
  {
    id: "system-builders",
    title: "体系构建者",
    subtitle: "提供完整方法论的女性思想家",
    description: "她们用系统化思维拆解复杂问题，为女性成长提供可执行的路径。从时间管理到优势管理，从心理学到社会学，她们构建了一套完整的女性觉醒方法论体系。",
    visualStyle: "秩序感、模块化",
    image: "/images/hall-system.jpg",
    women: [
      {
        name: "王潇",
        title: "作家、趁早品牌创始人",
        work: "《五种时间》《按自己的意愿过一生》",
        methodology: "五种时间理论——将时间分为生存、赚钱、好看、好玩、心流五种，帮助女性建立时间管理的系统思维。",
        quote: "当你开始主动分配时间，你就在练习为自己做选择。",
        image: "/images/wangxiao.jpg"
      },
      {
        name: "崔璀",
        title: "优势管理导师、Momself创始人",
        work: "《每个人都有自己的职场优势》",
        methodology: "优势管理——不是补短板，而是让长板足够长。通过识别个人优势，找到适合自己的成长路径。",
        quote: "真正的成长不是补短板，而是让你的长板足够长。",
        image: "/images/cuicui.jpg"
      },
      {
        name: "梁宁",
        title: "产品战略专家",
        work: "《产品思维30讲》",
        methodology: "用产品视角解构人生，将人生视为一个需要不断迭代的产品，用系统思维解决复杂问题。",
        quote: "用产品视角看人生，你会发现自己才是最好的产品。",
        image: "/images/liangning.jpg"
      },
      {
        name: "李一诺",
        title: "一土教育创始人、前麦肯锡合伙人",
        work: "《力量从哪里来》",
        methodology: "从不敢到敢的转变，通过自我对话和认知重构，找到内在力量的来源。",
        quote: "真正的力量不是完美，而是敢于真实。",
        image: "/images/liyino.jpg"
      },
      {
        name: "Susan Cain",
        title: "作家、安静革命倡导者",
        work: "《安静：内向性格的竞争力》",
        methodology: "重新定义内向，将内向从缺陷转化为独特的优势，为内向女性提供自我接纳的框架。",
        quote: "内向不是缺陷，是你独特的优势。",
        image: "/images/susancain.jpg"
      }
    ]
  },
  {
    id: "boundary-breakers",
    title: "领域破壁者",
    subtitle: "跨界融合创新的开拓者",
    description: "她们打破学科边界，将艺术与科技、哲学与商业、传统与现代融为一体，创造出全新的可能性。她们证明，女性的创造力不受任何领域限制。",
    visualStyle: "拼贴感、跨界元素",
    image: "/images/hall-boundary.jpg",
    women: [
      {
        name: "李飞飞",
        title: "AI科学家、斯坦福教授",
        work: "AI for All",
        methodology: "问题驱动学习法——不是为了学习而学习，而是为了解决真实问题而学习。",
        quote: "我从来不是为了成为AI科学家而学习。我只是想解决那个问题，而学习是必经之路。",
        image: "/images/lifeifei.jpg"
      },
      {
        name: "Neri Oxman",
        title: "设计师、MIT教授",
        work: "材料生态学",
        methodology: "让建筑像自然一样生长，模糊自然、工程与艺术的边界，创造可持续的设计。",
        quote: "让建筑像自然一样生长，模糊自然、工程与艺术的边界。",
        image: "/images/nerioxman.jpg"
      },
      {
        name: "Mona Chalabi",
        title: "数据新闻艺术家",
        work: "数据可视化作品",
        methodology: "用手绘让数据活起来，让复杂的统计信息变得直观、有趣、易懂。",
        quote: "数据不会说谎，但使用数据的人会。我用画笔让真相可见。",
        image: "/images/monachalabi.jpg"
      },
      {
        name: "郝景芳",
        title: "科幻作家、雨果奖得主",
        work: "《北京折叠》",
        methodology: "用科幻审视现实，通过虚构的未来世界，反思当下的社会问题。",
        quote: "科幻不是预测未来，而是用未来审视现在。",
        image: "/images/haojingfang.jpg"
      },
      {
        name: "张黎星",
        title: "苏绣传承人",
        work: "非遗创新",
        methodology: "将传统苏绣与现代审美结合，让非遗活在当下，吸引年轻人关注传统文化。",
        quote: "传统不是用来供奉的，是用来活着的。",
        image: "/images/zhanglixing.jpg"
      }
    ]
  },
  {
    id: "culture-observers",
    title: "文化洞察者",
    subtitle: "用文字重塑叙事的作家",
    description: "她们用敏锐的洞察力剖析社会文化，用文字挑战既定的叙事框架。从女性主义到身体政治，从阶级到种族，她们为被忽视的声音提供了表达的空间。",
    visualStyle: "文字质感、留白艺术",
    image: "/images/hall-culture.jpg",
    women: [
      {
        name: "Roxane Gay",
        title: "作家",
        work: "《不良女性主义者》",
        methodology: "打破完美女性主义者的神话，承认矛盾与复杂，让女性主义更加包容和真实。",
        quote: "我不完美，我矛盾，但我真实。这比任何标准答案都重要。",
        image: "/images/roxanegay.jpg"
      },
      {
        name: "上野千鹤子",
        title: "社会学家、作家",
        work: "《厌女》《从零开始的女性主义》",
        methodology: "将厌女概念化，揭示社会性别偏见的结构性，帮助女性从个人痛苦中看到系统问题。",
        quote: "当你把这是我的问题换成这是社会的问题，愤怒就会变成力量。",
        image: "/images/ueno.jpg"
      },
      {
        name: "洪晃",
        title: "媒体人、作家",
        work: "专栏、评论",
        methodology: "用犀利的语言解构消费主义和性别规训，为女性提供文化祛魅的视角。",
        quote: "别让任何人定义你是谁，尤其是那些想赚你钱的人。",
        image: "/images/honghuang.jpg"
      },
      {
        name: "韩江",
        title: "作家、诺贝尔奖得主",
        work: "《素食者》",
        methodology: "用文学探索暴力、尊严与人性，通过极端情境揭示女性在社会中的处境。",
        quote: "我写的是人，是人的尊严如何在暴力中幸存。",
        image: "/images/hanjiang.jpg"
      },
      {
        name: "余秀华",
        title: "诗人",
        work: "《月光落在左手上》",
        methodology: "用诗歌表达身体、欲望与痛苦，将个人经历转化为普遍的情感共鸣。",
        quote: "痛苦没有意义，但当你把它变成诗，它就有了意义。",
        image: "/images/yuxiuhua.jpg"
      }
    ]
  },
  {
    id: "action-inspirers",
    title: "行动启发者",
    subtitle: "用生命书写勇气的实践者",
    description: "她们用行动证明，改变是可能的。无论是逃离原生家庭、突破身体极限，还是为正义发声，她们的故事激励着每一个想要改变的人。",
    visualStyle: "故事感、时间轴",
    image: "/images/hall-action.jpg",
    women: [
      {
        name: "梅耶·马斯克",
        title: "模特、营养师",
        work: "《人生由我》",
        methodology: "冒险而审慎地生活——制定计划，然后敢于执行，在70岁依然重启人生。",
        quote: "冒险而审慎地生活。制定计划，然后敢于执行。",
        image: "/images/mayemusk.jpg"
      },
      {
        name: "塔拉·韦斯特弗",
        title: "历史学家",
        work: "《你当像鸟飞往你的山》",
        methodology: "通过教育逃离极端家庭，用知识重构自我，证明改变是可能的。",
        quote: "你可以爱一个人，但仍然选择和他说再见。",
        image: "/images/tarawestover.jpg"
      },
      {
        name: "马拉拉",
        title: "教育活动家",
        work: "《我是马拉拉》",
        methodology: "用勇气和坚持为女孩教育权利发声，即使面对死亡威胁也不退缩。",
        quote: "一本书、一支笔、一个孩子、一位老师，可以改变世界。",
        image: "/images/malala.jpg"
      },
      {
        name: "张桂梅",
        title: "教师、校长",
        work: "华坪女高",
        methodology: "创办免费女子高中，用教育改变山区女孩的命运，一生奉献给教育事业。",
        quote: "我生来就是高山而非溪流，我欲于群峰之巅俯视平庸的沟壑。",
        image: "/images/zhangguimei.jpg"
      },
      {
        name: "米歇尔·奥巴马",
        title: "律师、前第一夫人",
        work: "《成为》",
        methodology: "从芝加哥南区到白宫，用教育和努力打破阶层和种族的限制。",
        quote: "她们想把你放进一个盒子里。但那个盒子的盖子，永远可以从里面推开。",
        image: "/images/michelleobama.jpg"
      }
    ]
  },
  {
    id: "new-generation",
    title: "新生代思想者",
    subtitle: "Z世代的新锐声音",
    description: "她们用新媒体、新技术、新视角重新定义女性觉醒。从短视频到播客，从社交媒体到元宇宙，她们用Z世代的语言传播女性力量。",
    visualStyle: "数字原生、动态感",
    image: "/images/hall-newgen.jpg",
    women: [
      {
        name: "Greta Thunberg",
        title: "环保活动家",
        work: "气候行动",
        methodology: "用科学说话，用行动证明，让年轻人成为改变世界的力量。",
        quote: "用科学说话，绝不妥协。",
        image: "/images/gretathunberg.jpg"
      },
      {
        name: "Amanda Gorman",
        title: "诗人",
        work: "《The Hill We Climb》",
        methodology: "用诗歌作为变革的武器，在总统就职典礼上为美国发声。",
        quote: "诗歌不是装饰，它是变革的武器。",
        image: "/images/amandagorman.jpg"
      },
      {
        name: "李雪琴",
        title: "脱口秀演员",
        work: "脱口秀",
        methodology: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
        quote: "用幽默和哲学思辨解构精英叙事，给普通人平静的力量。",
        image: "/images/lixueqin.jpg"
      },
      {
        name: "雪力",
        title: "MBTI创作者",
        work: "心理学内容",
        methodology: "用MBTI帮助年轻人了解自己，是觉醒的第一步。",
        quote: "了解自己，是觉醒的第一步。",
        image: "/images/sherry.jpg"
      },
      {
        name: "Lizzo",
        title: "歌手",
        work: "音乐、身体自爱倡导",
        methodology: "用音乐和公众形象倡导身体自爱，打破完美身材的神话。",
        quote: "如果你能爱自己最坏的部分，那么其他一切都会变得容易。",
        image: "/images/lizzo.jpg"
      }
    ]
  }
];

export const getHallById = (id: string): Hall | undefined => {
  return exhibitionHalls.find(h => h.id === id);
};
