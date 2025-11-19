/**
 * 小学英语词库
 * 包含小学阶段常用英语单词
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

// 小学英语词汇（常用基础词汇）
export const PRIMARY_WORDS: Word[] = [
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
        tags: ['名词', '水果']
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
        tags: ['名词', '学习用品']
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
        tags: ['名词', '动物']
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
        tags: ['名词', '动物']
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
        tags: ['名词', '食物']
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
        tags: ['名词', '动物']
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
        tags: ['形容词']
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
        tags: ['形容词'],
        antonyms: ['sad']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['名词']
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
        tags: ['动词', '名词']
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
        tags: ['名词', '饮料']
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
        tags: ['形容词']
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
        tags: ['名词', '形容词', '水果']
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
        tags: ['名词', '学习用品']
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
        tags: ['名词']
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
        tags: ['动词']
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
        tags: ['名词', '自然']
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
        tags: ['名词', '植物']
    }
]

// 小学词书章节
export const PRIMARY_SECTIONS: WordbookSection[] = [
    {
        id: 'primary_section_basic',
        wordbookId: 'primary_wordbook',
        name: 'Unit 1: 基础词汇',
        order: 1,
        wordIds: PRIMARY_WORDS.map(w => w.id)
    }
]

// 小学词书
export const PRIMARY_WORDBOOK: Wordbook = {
    id: 'primary_wordbook',
    name: '小学英语词汇',
    description: '小学阶段常用英语单词，适合初学者',
    difficulty: 'CUSTOM',
    totalWords: PRIMARY_WORDS.length,
    sections: PRIMARY_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}

// 导出便捷函数
export function getPrimaryWordById(id: string | number): Word | undefined {
    return PRIMARY_WORDS.find(w => w.id === id)
}

export function getPrimaryWordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getPrimaryWordById(id)).filter(Boolean) as Word[]
}
