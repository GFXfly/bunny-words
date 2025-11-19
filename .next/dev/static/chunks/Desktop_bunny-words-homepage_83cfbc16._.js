(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CET-4 词库数据
 * 包含CET-4核心词汇
 */ __turbopack_context__.s([
    "CET4_SECTIONS",
    ()=>CET4_SECTIONS,
    "CET4_WORDBOOK",
    ()=>CET4_WORDBOOK,
    "CET4_WORDS",
    ()=>CET4_WORDS,
    "getCET4WordById",
    ()=>getCET4WordById,
    "getCET4WordsByIds",
    ()=>getCET4WordsByIds
]);
const CET4_WORDS = [
    {
        id: 'cet4_001',
        word: 'abandon',
        phonetic: '/əˈbændən/',
        phoneticUK: '/əˈbændən/',
        translation: 'v. 放弃；遗弃；抛弃 n. 放任；狂热',
        examples: [
            {
                english: 'They had to abandon the car and walk the rest of the way.',
                chinese: '他们不得不弃车步行完成剩下的路程。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2156,
        tags: [
            '动词',
            '名词'
        ]
    },
    {
        id: 'cet4_002',
        word: 'ability',
        phonetic: '/əˈbɪləti/',
        phoneticUK: '/əˈbɪləti/',
        translation: 'n. 能力；才能；本领',
        examples: [
            {
                english: 'She has the ability to speak three languages fluently.',
                chinese: '她有流利说三种语言的能力。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 856,
        tags: [
            '名词'
        ],
        synonyms: [
            'capability',
            'capacity',
            'competence'
        ]
    },
    {
        id: 'cet4_003',
        word: 'abroad',
        phonetic: '/əˈbrɔːd/',
        phoneticUK: '/əˈbrɔːd/',
        translation: 'adv. 在国外；到国外；广为流传',
        examples: [
            {
                english: 'She went abroad to study medicine.',
                chinese: '她出国学医了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1523,
        tags: [
            '副词'
        ]
    },
    {
        id: 'cet4_004',
        word: 'absent',
        phonetic: '/ˈæbsənt/',
        phoneticUK: '/ˈæbsənt/',
        translation: 'adj. 缺席的；缺少的；心不在焉的 v. 缺席',
        examples: [
            {
                english: 'He was absent from school due to illness.',
                chinese: '他因病没来上学。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2341,
        tags: [
            '形容词',
            '动词'
        ],
        antonyms: [
            'present'
        ]
    },
    {
        id: 'cet4_005',
        word: 'absolute',
        phonetic: '/ˈæbsəluːt/',
        phoneticUK: '/ˈæbsəluːt/',
        translation: 'adj. 绝对的；完全的；专制的',
        examples: [
            {
                english: 'I have absolute confidence in her ability to lead.',
                chinese: '我对她的领导能力有绝对的信心。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1876,
        tags: [
            '形容词'
        ],
        synonyms: [
            'complete',
            'total',
            'utter'
        ]
    },
    {
        id: 'cet4_006',
        word: 'absorb',
        phonetic: '/əbˈsɔːrb/',
        phoneticUK: '/əbˈzɔːb/',
        translation: 'v. 吸收；吸引；承受；理解',
        examples: [
            {
                english: 'Plants absorb carbon dioxide from the air.',
                chinese: '植物从空气中吸收二氧化碳。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_007',
        word: 'abstract',
        phonetic: '/ˈæbstrækt/',
        phoneticUK: '/ˈæbstrækt/',
        translation: 'adj. 抽象的；深奥的 n. 摘要；抽象概念 v. 提取；抽象化',
        examples: [
            {
                english: 'The concept of freedom is very abstract.',
                chinese: '自由的概念非常抽象。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: [
            '形容词',
            '名词',
            '动词'
        ],
        antonyms: [
            'concrete'
        ]
    },
    {
        id: 'cet4_008',
        word: 'academic',
        phonetic: '/ˌækəˈdemɪk/',
        phoneticUK: '/ˌækəˈdemɪk/',
        translation: 'adj. 学术的；理论的；学院的 n. 学者；大学教师',
        examples: [
            {
                english: 'The university is known for its high academic standards.',
                chinese: '这所大学以其高学术标准而闻名。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1432,
        tags: [
            '形容词',
            '名词'
        ]
    },
    {
        id: 'cet4_009',
        word: 'accept',
        phonetic: '/əkˈsept/',
        phoneticUK: '/əkˈsept/',
        translation: 'v. 接受；承认；同意；相信',
        examples: [
            {
                english: 'She accepted the job offer immediately.',
                chinese: '她立即接受了这份工作邀请。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 567,
        tags: [
            '动词'
        ],
        antonyms: [
            'reject',
            'refuse'
        ]
    },
    {
        id: 'cet4_010',
        word: 'access',
        phonetic: '/ˈækses/',
        phoneticUK: '/ˈækses/',
        translation: 'n. 通道；入口；接近的机会 v. 访问；存取',
        examples: [
            {
                english: 'Students need a password to access the library database.',
                chinese: '学生需要密码才能访问图书馆数据库。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1234,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_011',
        word: 'accident',
        phonetic: '/ˈæksɪdənt/',
        phoneticUK: '/ˈæksɪdənt/',
        translation: 'n. 事故；意外；偶然',
        examples: [
            {
                english: 'He was injured in a car accident last week.',
                chinese: '他上周在一场车祸中受伤了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1678,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet4_012',
        word: 'accompany',
        phonetic: '/əˈkʌmpəni/',
        phoneticUK: '/əˈkʌmpəni/',
        translation: 'v. 陪伴；伴随；为...伴奏',
        examples: [
            {
                english: 'I will accompany you to the hospital.',
                chinese: '我会陪你去医院。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2456,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_013',
        word: 'accomplish',
        phonetic: '/əˈkɑːmplɪʃ/',
        phoneticUK: '/əˈkʌmplɪʃ/',
        translation: 'v. 完成；实现；达到',
        examples: [
            {
                english: 'We accomplished our mission ahead of schedule.',
                chinese: '我们提前完成了任务。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2789,
        tags: [
            '动词'
        ],
        synonyms: [
            'achieve',
            'complete',
            'fulfill'
        ]
    },
    {
        id: 'cet4_014',
        word: 'accord',
        phonetic: '/əˈkɔːrd/',
        phoneticUK: '/əˈkɔːd/',
        translation: 'n. 一致；协议 v. 给予；使一致',
        examples: [
            {
                english: 'The two countries signed a peace accord.',
                chinese: '两国签署了和平协议。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 3123,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_015',
        word: 'account',
        phonetic: '/əˈkaʊnt/',
        phoneticUK: '/əˈkaʊnt/',
        translation: 'n. 账户；账目；报告；解释 v. 解释；认为',
        examples: [
            {
                english: 'Please give us an account of what happened.',
                chinese: '请向我们说明发生了什么事。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 789,
        tags: [
            '名词',
            '动词'
        ]
    },
    {
        id: 'cet4_016',
        word: 'accurate',
        phonetic: '/ˈækjərət/',
        phoneticUK: '/ˈækjərət/',
        translation: 'adj. 精确的；准确的',
        examples: [
            {
                english: 'The report must be accurate and detailed.',
                chinese: '报告必须准确详细。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2134,
        tags: [
            '形容词'
        ],
        synonyms: [
            'precise',
            'exact',
            'correct'
        ],
        antonyms: [
            'inaccurate'
        ]
    },
    {
        id: 'cet4_017',
        word: 'achieve',
        phonetic: '/əˈtʃiːv/',
        phoneticUK: '/əˈtʃiːv/',
        translation: 'v. 实现；取得；达到',
        examples: [
            {
                english: 'She achieved her goal of becoming a doctor.',
                chinese: '她实现了成为医生的目标。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1345,
        tags: [
            '动词'
        ],
        synonyms: [
            'accomplish',
            'attain',
            'reach'
        ]
    },
    {
        id: 'cet4_018',
        word: 'acknowledge',
        phonetic: '/əkˈnɑːlɪdʒ/',
        phoneticUK: '/əkˈnɒlɪdʒ/',
        translation: 'v. 承认；答谢；告知收到',
        examples: [
            {
                english: 'He acknowledged his mistake and apologized.',
                chinese: '他承认了错误并道歉。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 2567,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet4_019',
        word: 'acquire',
        phonetic: '/əˈkwaɪər/',
        phoneticUK: '/əˈkwaɪə(r)/',
        translation: 'v. 获得；学到；取得',
        examples: [
            {
                english: 'Children acquire language naturally.',
                chinese: '儿童自然地习得语言。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1987,
        tags: [
            '动词'
        ],
        synonyms: [
            'obtain',
            'gain',
            'get'
        ]
    },
    {
        id: 'cet4_020',
        word: 'active',
        phonetic: '/ˈæktɪv/',
        phoneticUK: '/ˈæktɪv/',
        translation: 'adj. 积极的；活跃的；主动的',
        examples: [
            {
                english: 'She takes an active part in school activities.',
                chinese: '她积极参加学校活动。',
                source: 'manual'
            }
        ],
        difficulty: 'CET4',
        frequency: 1123,
        tags: [
            '形容词'
        ],
        antonyms: [
            'passive',
            'inactive'
        ]
    }
];
const CET4_SECTIONS = [
    {
        id: 'cet4_section_a',
        wordbookId: 'cet4_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET4_WORDS.filter((w)=>w.word.startsWith('a')).map((w)=>w.id)
    }
];
const CET4_WORDBOOK = {
    id: 'cet4_wordbook',
    name: 'CET-4 核心词汇',
    description: '大学英语四级考试核心词汇，包含高频必考单词',
    difficulty: 'CET4',
    totalWords: CET4_WORDS.length,
    sections: CET4_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getCET4WordById(id) {
    return CET4_WORDS.find((w)=>w.id === id);
}
function getCET4WordsByIds(ids) {
    return ids.map((id)=>getCET4WordById(id)).filter(Boolean);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * CET-6 词库数据
 * 包含CET-6核心词汇（较CET-4更难）
 */ __turbopack_context__.s([
    "CET6_SECTIONS",
    ()=>CET6_SECTIONS,
    "CET6_WORDBOOK",
    ()=>CET6_WORDBOOK,
    "CET6_WORDS",
    ()=>CET6_WORDS,
    "getCET6WordById",
    ()=>getCET6WordById,
    "getCET6WordsByIds",
    ()=>getCET6WordsByIds
]);
const CET6_WORDS = [
    {
        id: 'cet6_001',
        word: 'abduct',
        phonetic: '/æbˈdʌkt/',
        phoneticUK: '/æbˈdʌkt/',
        translation: 'v. 诱拐；绑架；劫持',
        examples: [
            {
                english: 'The alien attempted to abduct the cow from the field.',
                chinese: '外星人试图从田野里诱拐那头牛。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_002',
        word: 'abide',
        phonetic: '/əˈbaɪd/',
        phoneticUK: '/əˈbaɪd/',
        translation: 'v. 遵守；忍受；停留',
        examples: [
            {
                english: 'You must abide by the rules of the game.',
                chinese: '你必须遵守游戏规则。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4567,
        tags: [
            '动词'
        ],
        synonyms: [
            'comply',
            'obey',
            'follow'
        ]
    },
    {
        id: 'cet6_003',
        word: 'abject',
        phonetic: '/ˈæbdʒekt/',
        phoneticUK: '/ˈæbdʒekt/',
        translation: 'adj. 卑鄙的；可怜的；(境况)凄惨的',
        examples: [
            {
                english: 'They lived in abject poverty for many years.',
                chinese: '他们在赤贫中生活了很多年。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 6789,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'cet6_004',
        word: 'abolish',
        phonetic: '/əˈbɑːlɪʃ/',
        phoneticUK: '/əˈbɒlɪʃ/',
        translation: 'v. 废除；废止；取消',
        examples: [
            {
                english: 'The government voted to abolish the death penalty.',
                chinese: '政府投票决定废除死刑。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5432,
        tags: [
            '动词'
        ],
        synonyms: [
            'eliminate',
            'eradicate',
            'remove'
        ]
    },
    {
        id: 'cet6_005',
        word: 'abort',
        phonetic: '/əˈbɔːrt/',
        phoneticUK: '/əˈbɔːt/',
        translation: 'v. 流产；堕胎；夭折；中止',
        examples: [
            {
                english: 'They had to abort the mission due to bad weather.',
                chinese: '由于天气恶劣，他们不得不中止任务。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5678,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_006',
        word: 'abrupt',
        phonetic: '/əˈbrʌpt/',
        phoneticUK: '/əˈbrʌpt/',
        translation: 'adj. 突然的；意外的；唐突的；陡峭的',
        examples: [
            {
                english: 'The meeting came to an abrupt end.',
                chinese: '会议突然结束了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4890,
        tags: [
            '形容词'
        ],
        synonyms: [
            'sudden',
            'unexpected'
        ],
        antonyms: [
            'gradual'
        ]
    },
    {
        id: 'cet6_007',
        word: 'absentee',
        phonetic: '/ˌæbsənˈtiː/',
        phoneticUK: '/ˌæbsənˈtiː/',
        translation: 'n. 缺席者；不在场者',
        examples: [
            {
                english: 'An absentee landlord often neglects the property.',
                chinese: '不在地主经常忽视房产管理。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 7234,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet6_008',
        word: 'absurd',
        phonetic: '/əbˈsɜːrd/',
        phoneticUK: '/əbˈsɜːd/',
        translation: 'adj. 荒谬的；可笑的；不合理的',
        examples: [
            {
                english: 'It would be absurd to suggest that he knew nothing about it.',
                chinese: '说他对此一无所知是荒谬的。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4321,
        tags: [
            '形容词'
        ],
        synonyms: [
            'ridiculous',
            'preposterous',
            'irrational'
        ]
    },
    {
        id: 'cet6_009',
        word: 'abundance',
        phonetic: '/əˈbʌndəns/',
        phoneticUK: '/əˈbʌndəns/',
        translation: 'n. 丰富；充裕；大量',
        examples: [
            {
                english: 'There was an abundance of food at the party.',
                chinese: '聚会上有大量的食物。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5123,
        tags: [
            '名词'
        ],
        antonyms: [
            'scarcity',
            'shortage'
        ]
    },
    {
        id: 'cet6_010',
        word: 'abyss',
        phonetic: '/əˈbɪs/',
        phoneticUK: '/əˈbɪs/',
        translation: 'n. 深渊；深邃；无底洞',
        examples: [
            {
                english: 'He stood on the edge of the cliff, looking down into the abyss.',
                chinese: '他站在悬崖边，向下凝视着深渊。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 6543,
        tags: [
            '名词'
        ]
    },
    {
        id: 'cet6_011',
        word: 'accelerate',
        phonetic: '/əkˈseləreɪt/',
        phoneticUK: '/əkˈseləreɪt/',
        translation: 'v. 加速；促进；增加',
        examples: [
            {
                english: 'The car accelerated smoothly.',
                chinese: '汽车平稳地加速了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 3456,
        tags: [
            '动词'
        ],
        antonyms: [
            'decelerate',
            'slow'
        ]
    },
    {
        id: 'cet6_012',
        word: 'accommodate',
        phonetic: '/əˈkɑːmədeɪt/',
        phoneticUK: '/əˈkɒmədeɪt/',
        translation: 'v. 容纳；为...提供住宿；适应；调解',
        examples: [
            {
                english: 'The hotel can accommodate up to 500 guests.',
                chinese: '这家酒店最多可容纳500位客人。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4234,
        tags: [
            '动词'
        ]
    },
    {
        id: 'cet6_013',
        word: 'accountable',
        phonetic: '/əˈkaʊntəbl/',
        phoneticUK: '/əˈkaʊntəbl/',
        translation: 'adj. 负有责任的；应作解释的',
        examples: [
            {
                english: 'Politicians should be accountable to the public.',
                chinese: '政治家应该对公众负责。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 3890,
        tags: [
            '形容词'
        ],
        synonyms: [
            'responsible',
            'answerable'
        ]
    },
    {
        id: 'cet6_014',
        word: 'accumulate',
        phonetic: '/əˈkjuːmjəleɪt/',
        phoneticUK: '/əˈkjuːmjəleɪt/',
        translation: 'v. 积累；积聚；堆积',
        examples: [
            {
                english: 'Dust had accumulated on the furniture.',
                chinese: '灰尘已经在家具上堆积了。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 4567,
        tags: [
            '动词'
        ],
        synonyms: [
            'gather',
            'collect',
            'amass'
        ]
    },
    {
        id: 'cet6_015',
        word: 'acquaint',
        phonetic: '/əˈkweɪnt/',
        phoneticUK: '/əˈkweɪnt/',
        translation: 'v. 使熟悉；使认识',
        examples: [
            {
                english: 'Please acquaint me with the facts of the case.',
                chinese: '请让我了解这个案件的事实。',
                source: 'manual'
            }
        ],
        difficulty: 'CET6',
        frequency: 5678,
        tags: [
            '动词'
        ]
    }
];
const CET6_SECTIONS = [
    {
        id: 'cet6_section_a',
        wordbookId: 'cet6_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET6_WORDS.filter((w)=>w.word.startsWith('a')).map((w)=>w.id)
    }
];
const CET6_WORDBOOK = {
    id: 'cet6_wordbook',
    name: 'CET-6 核心词汇',
    description: '大学英语六级考试核心词汇，难度高于CET-4',
    difficulty: 'CET6',
    totalWords: CET6_WORDS.length,
    sections: CET6_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getCET6WordById(id) {
    return CET6_WORDS.find((w)=>w.id === id);
}
function getCET6WordsByIds(ids) {
    return ids.map((id)=>getCET6WordById(id)).filter(Boolean);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/data/primary-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 小学英语词库
 * 包含小学阶段常用英语单词
 */ __turbopack_context__.s([
    "PRIMARY_SECTIONS",
    ()=>PRIMARY_SECTIONS,
    "PRIMARY_WORDBOOK",
    ()=>PRIMARY_WORDBOOK,
    "PRIMARY_WORDS",
    ()=>PRIMARY_WORDS,
    "getPrimaryWordById",
    ()=>getPrimaryWordById,
    "getPrimaryWordsByIds",
    ()=>getPrimaryWordsByIds
]);
const PRIMARY_WORDS = [
    {
        id: 'primary_001',
        word: 'apple',
        phonetic: '/ˈæpl/',
        phoneticUK: '/ˈæpl/',
        translation: 'n. 苹果',
        examples: [
            {
                english: 'I like to eat apples.',
                chinese: '我喜欢吃苹果。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 100,
        tags: [
            '名词',
            '水果'
        ]
    },
    {
        id: 'primary_002',
        word: 'book',
        phonetic: '/bʊk/',
        phoneticUK: '/bʊk/',
        translation: 'n. 书；书本',
        examples: [
            {
                english: 'This is my English book.',
                chinese: '这是我的英语书。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 50,
        tags: [
            '名词',
            '学习用品'
        ]
    },
    {
        id: 'primary_003',
        word: 'cat',
        phonetic: '/kæt/',
        phoneticUK: '/kæt/',
        translation: 'n. 猫',
        examples: [
            {
                english: 'I have a cute cat.',
                chinese: '我有一只可爱的猫。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 80,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_004',
        word: 'dog',
        phonetic: '/dɔːɡ/',
        phoneticUK: '/dɒɡ/',
        translation: 'n. 狗',
        examples: [
            {
                english: 'My dog is very friendly.',
                chinese: '我的狗很友好。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 75,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_005',
        word: 'egg',
        phonetic: '/eɡ/',
        phoneticUK: '/eɡ/',
        translation: 'n. 鸡蛋；蛋',
        examples: [
            {
                english: 'I eat an egg for breakfast.',
                chinese: '我早餐吃一个鸡蛋。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 90,
        tags: [
            '名词',
            '食物'
        ]
    },
    {
        id: 'primary_006',
        word: 'fish',
        phonetic: '/fɪʃ/',
        phoneticUK: '/fɪʃ/',
        translation: 'n. 鱼',
        examples: [
            {
                english: 'There are many fish in the sea.',
                chinese: '海里有很多鱼。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 85,
        tags: [
            '名词',
            '动物'
        ]
    },
    {
        id: 'primary_007',
        word: 'good',
        phonetic: '/ɡʊd/',
        phoneticUK: '/ɡʊd/',
        translation: 'adj. 好的；良好的',
        examples: [
            {
                english: 'You are a good student.',
                chinese: '你是一个好学生。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 30,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'primary_008',
        word: 'happy',
        phonetic: '/ˈhæpi/',
        phoneticUK: '/ˈhæpi/',
        translation: 'adj. 快乐的；高兴的',
        examples: [
            {
                english: 'I am very happy today.',
                chinese: '我今天很开心。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 60,
        tags: [
            '形容词'
        ],
        antonyms: [
            'sad'
        ]
    },
    {
        id: 'primary_009',
        word: 'ice',
        phonetic: '/aɪs/',
        phoneticUK: '/aɪs/',
        translation: 'n. 冰',
        examples: [
            {
                english: 'I want some ice cream.',
                chinese: '我想要一些冰淇淋。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 95,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_010',
        word: 'jump',
        phonetic: '/dʒʌmp/',
        phoneticUK: '/dʒʌmp/',
        translation: 'v. 跳；跳跃',
        examples: [
            {
                english: 'The rabbit can jump very high.',
                chinese: '兔子能跳得很高。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 70,
        tags: [
            '动词'
        ]
    },
    {
        id: 'primary_011',
        word: 'king',
        phonetic: '/kɪŋ/',
        phoneticUK: '/kɪŋ/',
        translation: 'n. 国王；君主',
        examples: [
            {
                english: 'The king lives in a big castle.',
                chinese: '国王住在一座大城堡里。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 120,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_012',
        word: 'love',
        phonetic: '/lʌv/',
        phoneticUK: '/lʌv/',
        translation: 'v. 爱；喜欢 n. 爱',
        examples: [
            {
                english: 'I love my family.',
                chinese: '我爱我的家人。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 40,
        tags: [
            '动词',
            '名词'
        ]
    },
    {
        id: 'primary_013',
        word: 'milk',
        phonetic: '/mɪlk/',
        phoneticUK: '/mɪlk/',
        translation: 'n. 牛奶',
        examples: [
            {
                english: 'I drink milk every morning.',
                chinese: '我每天早上喝牛奶。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 65,
        tags: [
            '名词',
            '饮料'
        ]
    },
    {
        id: 'primary_014',
        word: 'nice',
        phonetic: '/naɪs/',
        phoneticUK: '/naɪs/',
        translation: 'adj. 好的；美好的',
        examples: [
            {
                english: 'What a nice day!',
                chinese: '多么美好的一天！',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 55,
        tags: [
            '形容词'
        ]
    },
    {
        id: 'primary_015',
        word: 'orange',
        phonetic: '/ˈɔːrɪndʒ/',
        phoneticUK: '/ˈɒrɪndʒ/',
        translation: 'n. 橙子；橙色 adj. 橙色的',
        examples: [
            {
                english: 'I like orange juice.',
                chinese: '我喜欢橙汁。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 110,
        tags: [
            '名词',
            '形容词',
            '水果'
        ]
    },
    {
        id: 'primary_016',
        word: 'pen',
        phonetic: '/pen/',
        phoneticUK: '/pen/',
        translation: 'n. 钢笔；笔',
        examples: [
            {
                english: 'This is my pen.',
                chinese: '这是我的钢笔。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 45,
        tags: [
            '名词',
            '学习用品'
        ]
    },
    {
        id: 'primary_017',
        word: 'queen',
        phonetic: '/kwiːn/',
        phoneticUK: '/kwiːn/',
        translation: 'n. 女王；王后',
        examples: [
            {
                english: 'The queen is very beautiful.',
                chinese: '女王非常美丽。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 125,
        tags: [
            '名词'
        ]
    },
    {
        id: 'primary_018',
        word: 'run',
        phonetic: '/rʌn/',
        phoneticUK: '/rʌn/',
        translation: 'v. 跑；奔跑',
        examples: [
            {
                english: 'I can run very fast.',
                chinese: '我能跑得很快。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 35,
        tags: [
            '动词'
        ]
    },
    {
        id: 'primary_019',
        word: 'sun',
        phonetic: '/sʌn/',
        phoneticUK: '/sʌn/',
        translation: 'n. 太阳',
        examples: [
            {
                english: 'The sun is shining.',
                chinese: '太阳在照耀。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 88,
        tags: [
            '名词',
            '自然'
        ]
    },
    {
        id: 'primary_020',
        word: 'tree',
        phonetic: '/triː/',
        phoneticUK: '/triː/',
        translation: 'n. 树',
        examples: [
            {
                english: 'There is a big tree in the garden.',
                chinese: '花园里有一棵大树。',
                source: 'manual'
            }
        ],
        difficulty: 'CUSTOM',
        frequency: 92,
        tags: [
            '名词',
            '植物'
        ]
    }
];
const PRIMARY_SECTIONS = [
    {
        id: 'primary_section_basic',
        wordbookId: 'primary_wordbook',
        name: 'Unit 1: 基础词汇',
        order: 1,
        wordIds: PRIMARY_WORDS.map((w)=>w.id)
    }
];
const PRIMARY_WORDBOOK = {
    id: 'primary_wordbook',
    name: '小学英语词汇',
    description: '小学阶段常用英语单词，适合初学者',
    difficulty: 'CUSTOM',
    totalWords: PRIMARY_WORDS.length,
    sections: PRIMARY_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
};
function getPrimaryWordById(id) {
    return PRIMARY_WORDS.find((w)=>w.id === id);
}
function getPrimaryWordsByIds(ids) {
    return ids.map((id)=>getPrimaryWordById(id)).filter(Boolean);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 词库管理工具
 * 统一管理所有词库数据
 */ __turbopack_context__.s([
    "ALL_WORDBOOKS",
    ()=>ALL_WORDBOOKS,
    "ALL_WORDS",
    ()=>ALL_WORDS,
    "getRandomWords",
    ()=>getRandomWords,
    "getSectionWords",
    ()=>getSectionWords,
    "getWordById",
    ()=>getWordById,
    "getWordbookById",
    ()=>getWordbookById,
    "getWordbookSection",
    ()=>getWordbookSection,
    "getWordbookStats",
    ()=>getWordbookStats,
    "getWordbooksByDifficulty",
    ()=>getWordbooksByDifficulty,
    "getWordsByIds",
    ()=>getWordsByIds,
    "searchWords",
    ()=>searchWords,
    "validateSpelling",
    ()=>validateSpelling
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet4-words.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/cet6-words.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/data/primary-words.ts [app-client] (ecmascript)");
;
;
;
const ALL_WORDBOOKS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDBOOK"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDBOOK"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDBOOK"]
];
const ALL_WORDS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDS"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDS"]
];
function getWordbookById(id) {
    return ALL_WORDBOOKS.find((wb)=>wb.id === id);
}
function getWordbooksByDifficulty(difficulty) {
    return ALL_WORDBOOKS.filter((wb)=>wb.difficulty === difficulty);
}
function getWordById(id) {
    // 先尝试从小学词库查找
    const primaryWord = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPrimaryWordById"])(id);
    if (primaryWord) return primaryWord;
    // 再从CET4查找
    const cet4Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCET4WordById"])(id);
    if (cet4Word) return cet4Word;
    // 最后从CET6查找
    const cet6Word = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCET6WordById"])(id);
    if (cet6Word) return cet6Word;
    return undefined;
}
function getWordsByIds(ids) {
    return ids.map((id)=>getWordById(id)).filter(Boolean);
}
function getWordbookSection(wordbookId, sectionId) {
    const wordbook = getWordbookById(wordbookId);
    if (!wordbook) return undefined;
    // 检查是否为动态生成的列表ID (例如: primary_list_1)
    if (sectionId.includes('_list_')) {
        const match = sectionId.match(/_list_(\d+)$/);
        if (match) {
            const listIndex = parseInt(match[1]) - 1;
            const pageSize = 50;
            // 获取该词书的所有单词
            let allWords = [];
            if (wordbookId === 'primary_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$primary$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_WORDS"];
            else if (wordbookId === 'cet4_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet4$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET4_WORDS"];
            else if (wordbookId === 'cet6_wordbook') allWords = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$data$2f$cet6$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CET6_WORDS"];
            const start = listIndex * pageSize;
            const end = start + pageSize;
            const wordIds = allWords.slice(start, end).map((w)=>w.id);
            if (wordIds.length > 0) {
                return {
                    id: sectionId,
                    wordbookId: wordbookId,
                    name: `List ${listIndex + 1}`,
                    order: listIndex + 1,
                    wordIds: wordIds
                };
            }
        }
    }
    return wordbook.sections.find((section)=>section.id === sectionId);
}
function getSectionWords(wordbookId, sectionId) {
    const section = getWordbookSection(wordbookId, sectionId);
    if (!section) return [];
    return getWordsByIds(section.wordIds);
}
function searchWords(query, options) {
    const { difficulty, limit = 50 } = options || {};
    const lowerQuery = query.toLowerCase().trim();
    let results = ALL_WORDS.filter((word)=>{
        // 按单词匹配
        if (word.word.toLowerCase().includes(lowerQuery)) return true;
        // 按翻译匹配
        if (word.translation.toLowerCase().includes(lowerQuery)) return true;
        return false;
    });
    // 按难度过滤
    if (difficulty) {
        results = results.filter((w)=>w.difficulty === difficulty);
    }
    // 限制结果数量
    return results.slice(0, limit);
}
function getRandomWords(count, options) {
    const { difficulty, excludeIds = [] } = options || {};
    let pool = ALL_WORDS.filter((w)=>!excludeIds.includes(w.id));
    if (difficulty) {
        pool = pool.filter((w)=>w.difficulty === difficulty);
    }
    // Fisher-Yates 洗牌算法
    const shuffled = [
        ...pool
    ];
    for(let i = shuffled.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [
            shuffled[j],
            shuffled[i]
        ];
    }
    return shuffled.slice(0, count);
}
function getWordbookStats(wordbookId) {
    const wordbook = getWordbookById(wordbookId);
    if (!wordbook) return null;
    const allWords = wordbook.sections.flatMap((section)=>getWordsByIds(section.wordIds));
    return {
        totalWords: allWords.length,
        totalSections: wordbook.sections.length,
        averageWordsPerSection: Math.round(allWords.length / wordbook.sections.length),
        difficulty: wordbook.difficulty
    };
}
function validateSpelling(input, correctWord) {
    const normalizedInput = input.toLowerCase().trim();
    const normalizedCorrect = correctWord.toLowerCase().trim();
    if (normalizedInput === normalizedCorrect) {
        return {
            isCorrect: true,
            similarity: 1
        };
    }
    // 计算Levenshtein距离（编辑距离）
    const distance = levenshteinDistance(normalizedInput, normalizedCorrect);
    const maxLength = Math.max(normalizedInput.length, normalizedCorrect.length);
    const similarity = 1 - distance / maxLength;
    return {
        isCorrect: false,
        similarity
    };
}
/**
 * Levenshtein距离算法（计算两个字符串的编辑距离）
 */ function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(()=>Array(n + 1).fill(0));
    for(let i = 0; i <= m; i++)dp[i][0] = i;
    for(let j = 0; j <= n; j++)dp[0][j] = j;
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1 // 替换
                );
            }
        }
    }
    return dp[m][n];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WordbookPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/lib/utils/wordbook-manager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$app$2f$wordbook$2f5b$id$5d2f$wordbook$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/wordbook-list.tsx [app-client] (ecmascript)");
'use client';
;
;
// 模拟单词书数据
const wordbookData = {
    'yingzhuan-4': {
        id: 'yingzhuan-4',
        name: '英专四级',
        category: '英专',
        totalWords: 3974,
        cover: '/abstract-book-cover.png',
        lists: [
            {
                id: 1,
                name: 'List 1',
                totalWords: 50,
                previewWords: [
                    'adjective',
                    'activity',
                    'adult'
                ],
                learned: 0
            },
            {
                id: 2,
                name: 'List 2',
                totalWords: 50,
                previewWords: [
                    'allow',
                    'already',
                    'also'
                ],
                learned: 0
            },
            {
                id: 3,
                name: 'List 3',
                totalWords: 50,
                previewWords: [
                    'apology',
                    'area',
                    'anyone'
                ],
                learned: 0
            },
            {
                id: 4,
                name: 'List 4',
                totalWords: 50,
                previewWords: [
                    'association',
                    'attract',
                    'automatic'
                ],
                learned: 0
            }
        ]
    },
    'zhuanshengben-1': {
        id: 'zhuanshengben-1',
        name: '专升本必备词汇',
        category: '专升本',
        totalWords: 3800,
        cover: '/abstract-book-cover.png',
        lists: [
            {
                id: 1,
                name: 'List 1',
                totalWords: 50,
                previewWords: [
                    'abandon',
                    'ability',
                    'about'
                ],
                learned: 0
            },
            {
                id: 2,
                name: 'List 2',
                totalWords: 50,
                previewWords: [
                    'accept',
                    'access',
                    'accident'
                ],
                learned: 0
            }
        ]
    }
};
;
;
;
async function WordbookPage({ params }) {
    const { id } = await params;
    // Get real wordbook data
    const wordbook = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordbookById"])(id);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$lib$2f$utils$2f$wordbook$2d$manager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWordbookStats"])(id);
    if (!wordbook) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Wordbook not found"
        }, void 0, false, {
            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
            lineNumber: 101,
            columnNumber: 12
        }, this);
    }
    // Calculate lists (50 words per list)
    const pageSize = 50;
    const totalLists = Math.ceil(wordbook.totalWords / pageSize);
    const lists = Array.from({
        length: totalLists
    }, (_, i)=>({
            id: i + 1,
            name: `List ${i + 1}`,
            startIndex: i * pageSize,
            endIndex: Math.min((i + 1) * pageSize, wordbook.totalWords)
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#FFF9F0]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-6 h-16 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 text-muted-foreground hover:text-[#E85D75] transition-colors cursor-pointer group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "group-hover:-translate-x-1 transition-transform",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M19 12H5"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 19l-7-7 7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "返回首页"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl font-bold text-foreground",
                            children: wordbook.name
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:gap-12 mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-foreground",
                                        children: "星标单词本"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/starred",
                                        className: "group cursor-pointer relative block",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative aspect-[3/4] w-full max-w-[240px] mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl shadow-pink-100 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-pink-200 group-hover:-translate-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full bg-gradient-to-br from-[#FF9A9E] to-[#FECFEF] flex items-center justify-center text-white text-2xl font-bold p-4 text-center",
                                                    children: wordbook.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#E85D75] shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "currentColor",
                                                        stroke: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-foreground",
                                        children: "学习情况"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FFF0F3] text-[#E85D75] transition-transform hover:scale-[1.02]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 p-3 bg-white/60 rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "22 4 12 14.01 9 11.01"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 180,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold mb-1",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium opacity-80",
                                                        children: "已学习"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center p-6 rounded-2xl bg-[#E0F7FA] text-[#00BCD4] transition-transform hover:scale-[1.02]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 p-3 bg-white/60 rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "currentColor",
                                                            stroke: "none",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                                points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold mb-1",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium opacity-80",
                                                        children: "已加星"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center p-6 rounded-2xl bg-[#F3E5F5] text-[#9C27B0] transition-transform hover:scale-[1.02]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 p-3 bg-white/60 rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "23 6 13.5 15.5 8.5 10.5 1 18"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "17 6 23 6 23 12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                            lineNumber: 201,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold mb-1",
                                                        children: "0%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium opacity-80",
                                                        children: "正确率"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center p-6 rounded-2xl bg-[#E8F5E9] text-[#4CAF50] transition-transform hover:scale-[1.02]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-3 p-3 bg-white/60 rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "24",
                                                            height: "24",
                                                            viewBox: "0 0 24 24",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: "2",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 214,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "12 6 12 12 16 14"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                            lineNumber: 213,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl font-bold mb-1",
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium opacity-80",
                                                        children: "今日已学"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$app$2f$wordbook$2f5b$id$5d2f$wordbook$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WordbookList"], {
                        wordbookId: wordbook.id,
                        lists: lists
                    }, void 0, false, {
                        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/bunny-words-homepage/app/wordbook/[id]/page.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c = WordbookPage;
var _c;
__turbopack_context__.k.register(_c, "WordbookPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$bunny$2d$words$2d$homepage$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Desktop/bunny-words-homepage/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
]);

//# sourceMappingURL=Desktop_bunny-words-homepage_83cfbc16._.js.map