/**
 * 人教版小学英语词库 (PEP)
 * 模拟人教版教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟人教版教材结构
// 三年级起点
const PEP_STRUCTURE = [
    { grade: '三年级上册', units: ['Unit 1: Hello!', 'Unit 2: Colours', 'Unit 3: Look at me!', 'Unit 4: We love animals', 'Unit 5: Let\'s eat!', 'Unit 6: Happy birthday!'] },
    { grade: '三年级下册', units: ['Unit 1: Welcome back to school!', 'Unit 2: My family', 'Unit 3: At the zoo', 'Unit 4: Where is my car?', 'Unit 5: Do you like pears?', 'Unit 6: How many?'] },
    { grade: '四年级上册', units: ['Unit 1: My classroom', 'Unit 2: My schoolbag', 'Unit 3: My friends', 'Unit 4: My home', 'Unit 5: Dinner\'s ready', 'Unit 6: Meet my family!'] },
    { grade: '四年级下册', units: ['Unit 1: My school', 'Unit 2: What time is it?', 'Unit 3: Weather', 'Unit 4: At the farm', 'Unit 5: My clothes', 'Unit 6: Shopping'] },
    { grade: '五年级上册', units: ['Unit 1: What\'s he like?', 'Unit 2: My week', 'Unit 3: What would you like?', 'Unit 4: We can dance', 'Unit 5: There is a big bed', 'Unit 6: In a nature park'] },
    { grade: '五年级下册', units: ['Unit 1: My day', 'Unit 2: My favourite season', 'Unit 3: My school calendar', 'Unit 4: When is the art show?', 'Unit 5: Whose dog is it?', 'Unit 6: Work quietly!'] },
    { grade: '六年级上册', units: ['Unit 1: How can I get there?', 'Unit 2: Ways to go to school', 'Unit 3: My weekend plan', 'Unit 4: I have a pen pal', 'Unit 5: What does he do?', 'Unit 6: How do you feel?'] },
    { grade: '六年级下册', units: ['Unit 1: How tall are you?', 'Unit 2: Last weekend', 'Unit 3: Where did you go?', 'Unit 4: Then and now'] },
]

// 真实词汇映射 (部分)
// 这里的单词ID对应 primary-words.ts 中的单词
const PEP_REAL_WORDS: Record<string, string[]> = {
    // 三年级上册
    'pep_section_0_0': ['primary_002', 'primary_016', 'primary_022', 'primary_026', 'primary_033'], // Unit 1: School things (book, pen, bag, pencil, desk)
    'pep_section_0_1': ['primary_015', 'primary_026', 'primary_029', 'primary_042'], // Unit 2: Colours (orange, blue, car, hat - mixed with colors)
    'pep_section_0_2': ['primary_035', 'primary_036', 'primary_037', 'primary_039', 'primary_041', 'primary_043', 'primary_045'], // Unit 3: Body (ear, eye, face, foot, hand, head, leg)
    'pep_section_0_3': ['primary_003', 'primary_004', 'primary_006', 'primary_021', 'primary_025', 'primary_031', 'primary_034'], // Unit 4: Animals (cat, dog, fish, ant, bird, cow, duck)
    'pep_section_0_4': ['primary_001', 'primary_005', 'primary_013', 'primary_030'], // Unit 5: Food (apple, egg, milk, cake)
    'pep_section_0_5': ['primary_044'], // Unit 6: Numbers/Toys (kite)

    // 三年级下册
    'pep_section_1_1': ['primary_047'], // Unit 2: Family (mom)
}

// 简单的分配算法：将现有单词分配到各个单元中
// 这是一个模拟实现，实际应用中应该使用真实的教材词表
const WORDS_PER_UNIT = 15
let wordIndex = 0

export const PEP_SECTIONS: WordbookSection[] = []

PEP_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `pep_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 如果有真实映射，优先使用
        if (PEP_REAL_WORDS[sectionId]) {
            unitWordIds = PEP_REAL_WORDS[sectionId]
        }

        // 补充剩余单词以达到每单元数量
        const needed = WORDS_PER_UNIT - unitWordIds.length
        if (needed > 0) {
            // 确保不超出单词总数
            if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

            // 简单的过滤：不要重复已经添加的单词
            let addedCount = 0
            while (addedCount < needed) {
                if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0
                const word = PRIMARY_WORDS[wordIndex]
                if (!unitWordIds.includes(word.id)) {
                    unitWordIds.push(word.id)
                    addedCount++
                }
                wordIndex++
            }
        }

        PEP_SECTIONS.push({
            id: sectionId,
            wordbookId: 'pep_primary_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: PEP_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const PEP_WORDBOOK: Wordbook = {
    id: 'pep_primary_wordbook',
    name: '人教版小学英语',
    description: '人教版（PEP）小学英语教材同步词汇，三年级起点',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面，建议后续更换
    difficulty: 'CUSTOM',
    totalWords: PEP_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: PEP_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
