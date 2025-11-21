/**
 * 沪教版高中英语词库 (牛津上海版)
 * 模拟沪教版高中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟沪教版高中教材结构
const SHANGHAI_SENIOR_STRUCTURE = [
    { grade: '高一上册', units: ['Unit 1: School life', 'Unit 2: Language', 'Unit 3: Looking good, feeling good', 'Unit 4: Tales of the unexplained'] },
    { grade: '高一下册', units: ['Unit 1: Getting along with others', 'Unit 2: Wish you were here', 'Unit 3: Amazing people', 'Unit 4: Protecting the environment'] },
    { grade: '高二上册', units: ['Unit 1: Laughter is good for you', 'Unit 2: The universal language', 'Unit 3: Understanding each other', 'Unit 4: Helping people around the world'] },
    { grade: '高二下册', units: ['Unit 1: Living with technology', 'Unit 2: Fit for life', 'Unit 3: The world online', 'Unit 4: Public transport'] },
    { grade: '高三上册', units: ['Unit 1: Other countries, other cultures', 'Unit 2: Witnessing time', 'Unit 3: The meaning of colour', 'Unit 4: Films and film events'] },
    { grade: '高三下册', units: ['Unit 1: Building the future', 'Unit 2: Man and nature', 'Unit 3: The world meets China', 'Unit 4: Protecting our heritage'] },
]

// 简单的分配算法
const WORDS_PER_UNIT = 40
let wordIndex = 0

export const SHANGHAI_SENIOR_SECTIONS: WordbookSection[] = []

SHANGHAI_SENIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `shanghai_senior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        const skip = (sIndex * 31 + uIndex * 17) % 250
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

        SHANGHAI_SENIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'shanghai_senior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: SHANGHAI_SENIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const SHANGHAI_SENIOR_WORDBOOK: Wordbook = {
    id: 'shanghai_senior_wordbook',
    name: '沪教版高中英语',
    description: '沪教版（牛津上海版）高中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: SHANGHAI_SENIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: SHANGHAI_SENIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
