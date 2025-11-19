/**
 * CET-4 词库数据
 * 包含CET-4核心词汇
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

// CET-4 核心词汇（示例数据，包含100个高频词）
export const CET4_WORDS: Word[] = [
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
        tags: ['动词', '名词']
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
        tags: ['名词'],
        synonyms: ['capability', 'capacity', 'competence']
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
        tags: ['副词']
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
        tags: ['形容词', '动词'],
        antonyms: ['present']
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
        tags: ['形容词'],
        synonyms: ['complete', 'total', 'utter']
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
        tags: ['动词']
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
        tags: ['形容词', '名词', '动词'],
        antonyms: ['concrete']
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
        tags: ['形容词', '名词']
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
        tags: ['动词'],
        antonyms: ['reject', 'refuse']
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
        tags: ['名词', '动词']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['动词'],
        synonyms: ['achieve', 'complete', 'fulfill']
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
        tags: ['名词', '动词']
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
        tags: ['名词', '动词']
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
        tags: ['形容词'],
        synonyms: ['precise', 'exact', 'correct'],
        antonyms: ['inaccurate']
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
        tags: ['动词'],
        synonyms: ['accomplish', 'attain', 'reach']
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
        tags: ['动词']
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
        tags: ['动词'],
        synonyms: ['obtain', 'gain', 'get']
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
        tags: ['形容词'],
        antonyms: ['passive', 'inactive']
    }
]

// CET-4 词书章节划分（按字母顺序）
export const CET4_SECTIONS: WordbookSection[] = [
    {
        id: 'cet4_section_a',
        wordbookId: 'cet4_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET4_WORDS.filter(w => w.word.startsWith('a')).map(w => w.id)
    }
]

// CET-4 词书
export const CET4_WORDBOOK: Wordbook = {
    id: 'cet4_wordbook',
    name: 'CET-4 核心词汇',
    description: '大学英语四级考试核心词汇，包含高频必考单词',
    difficulty: 'CET4',
    totalWords: CET4_WORDS.length,
    sections: CET4_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}

// 导出便捷函数
export function getCET4WordById(id: string | number): Word | undefined {
    return CET4_WORDS.find(w => w.id === id)
}

export function getCET4WordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getCET4WordById(id)).filter(Boolean) as Word[]
}
