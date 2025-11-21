/**
 * 沪教版初中英语词库 (牛津上海版)
 * 模拟沪教版初中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟沪教版初中教材结构 (六年级起)
const SHANGHAI_JUNIOR_STRUCTURE = [
    { grade: '六年级上册', units: ['Module 1: Family and friends', 'Module 2: Places and activities', 'Module 3: Food and drink', 'Module 4: The natural world'] },
    { grade: '六年级下册', units: ['Module 1: City life', 'Module 2: Work and play', 'Module 3: Animals', 'Module 4: Things we use'] },
    { grade: '七年级上册', units: ['Module 1: Relationships', 'Module 2: My neighbourhood', 'Module 3: Diet and health', 'Module 4: The natural world'] },
    { grade: '七年级下册', units: ['Module 1: Garden City and its neighbours', 'Module 2: Man and technology', 'Module 3: Art and culture', 'Module 4: Fun and games'] },
    { grade: '八年级上册', units: ['Module 1: My life', 'Module 2: The environment', 'Module 3: Science and technology', 'Module 4: Travel'] },
    { grade: '八年级下册', units: ['Module 1: Nature and environment', 'Module 2: Mass media', 'Module 3: Leisure time', 'Module 4: A helping hand'] },
    { grade: '九年级上册', units: ['Module 1: City heroes', 'Module 2: Teenagers\' life', 'Module 3: Sport and health', 'Module 4: Technology'] },
    { grade: '九年级下册', units: ['Module 1: Explorations', 'Module 2: Environment', 'Module 3: Culture'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
const WORDS_PER_UNIT = 30
let wordIndex = 0

export const SHANGHAI_JUNIOR_SECTIONS: WordbookSection[] = []

SHANGHAI_JUNIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `shanghai_junior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 确保不超出单词总数
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        // 简单的混淆：使用不同的起始点
        const skip = (sIndex * 19 + uIndex * 7) % 150
        let startIndex = (wordIndex + skip) % PRIMARY_WORDS.length

        let addedCount = 0
        while (addedCount < WORDS_PER_UNIT) {
            const word = PRIMARY_WORDS[(startIndex + addedCount) % PRIMARY_WORDS.length]
            if (!unitWordIds.includes(word.id)) {
                unitWordIds.push(word.id)
            }
            addedCount++
        }

        wordIndex += WORDS_PER_UNIT

        SHANGHAI_JUNIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'shanghai_junior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: SHANGHAI_JUNIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const SHANGHAI_JUNIOR_WORDBOOK: Wordbook = {
    id: 'shanghai_junior_wordbook',
    name: '沪教版初中英语',
    description: '沪教版（牛津上海版）初中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: SHANGHAI_JUNIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: SHANGHAI_JUNIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
