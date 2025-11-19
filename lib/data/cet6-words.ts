/**
 * CET-6 词库数据
 * 包含CET-6核心词汇（较CET-4更难）
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

// CET-6 核心词汇（示例数据）
export const CET6_WORDS: Word[] = [
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
        tags: ['动词']
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
        tags: ['动词'],
        synonyms: ['comply', 'obey', 'follow']
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
        tags: ['形容词']
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
        tags: ['动词'],
        synonyms: ['eliminate', 'eradicate', 'remove']
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
        tags: ['动词']
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
        tags: ['形容词'],
        synonyms: ['sudden', 'unexpected'],
        antonyms: ['gradual']
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
        tags: ['名词']
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
        tags: ['形容词'],
        synonyms: ['ridiculous', 'preposterous', 'irrational']
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
        tags: ['名词'],
        antonyms: ['scarcity', 'shortage']
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
        tags: ['名词']
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
        tags: ['动词'],
        antonyms: ['decelerate', 'slow']
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
        tags: ['动词']
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
        tags: ['形容词'],
        synonyms: ['responsible', 'answerable']
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
        tags: ['动词'],
        synonyms: ['gather', 'collect', 'amass']
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
        tags: ['动词']
    }
]

// CET-6 词书章节
export const CET6_SECTIONS: WordbookSection[] = [
    {
        id: 'cet6_section_a',
        wordbookId: 'cet6_wordbook',
        name: 'Unit 1: A字母开头',
        order: 1,
        wordIds: CET6_WORDS.filter(w => w.word.startsWith('a')).map(w => w.id)
    }
]

// CET-6 词书
export const CET6_WORDBOOK: Wordbook = {
    id: 'cet6_wordbook',
    name: 'CET-6 核心词汇',
    description: '大学英语六级考试核心词汇，难度高于CET-4',
    difficulty: 'CET6',
    totalWords: CET6_WORDS.length,
    sections: CET6_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}

// 导出便捷函数
export function getCET6WordById(id: string | number): Word | undefined {
    return CET6_WORDS.find(w => w.id === id)
}

export function getCET6WordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getCET6WordById(id)).filter(Boolean) as Word[]
}
