/**
 * 外研社版高中英语词库 (新标准)
 * 模拟外研社版高中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟外研社版高中教材结构
const NSE_SENIOR_STRUCTURE = [
    { grade: '必修第一册', units: ['Unit 1: A new start', 'Unit 2: Exploring English', 'Unit 3: Family matters', 'Unit 4: Friends forever', 'Unit 5: Into the wild', 'Unit 6: At one with nature'] },
    { grade: '必修第二册', units: ['Unit 1: Food for thought', 'Unit 2: Let\'s celebrate!', 'Unit 3: On the move', 'Unit 4: Stage and screen', 'Unit 5: On the road', 'Unit 6: Earth first'] },
    { grade: '必修第三册', units: ['Unit 1: Knowing me, knowing you', 'Unit 2: Making a difference', 'Unit 3: The world of science', 'Unit 4: Amazing art', 'Unit 5: What an adventure!', 'Unit 6: Disaster and hope'] },
    { grade: '选择性必修第一册', units: ['Unit 1: Laugh out loud!', 'Unit 2: Onwards and upwards', 'Unit 3: Faster, higher, stronger', 'Unit 4: Meeting the muse', 'Unit 5: Revealing nature', 'Unit 6: Nurturing nature'] },
    { grade: '选择性必修第二册', units: ['Unit 1: Growing up', 'Unit 2: Improving yourself', 'Unit 3: Times change!', 'Unit 4: Breaking boundaries', 'Unit 5: A delicate world', 'Unit 6: Survival'] },
    { grade: '选择性必修第三册', units: ['Unit 1: Face values', 'Unit 2: A life\'s work', 'Unit 3: War and peace', 'Unit 4: A glimpse of the future', 'Unit 5: Learning from nature', 'Unit 6: Nature in words'] },
    { grade: '选择性必修第四册', units: ['Unit 1: Looking forwards', 'Unit 2: Lessons in life', 'Unit 3: The world meets China', 'Unit 4: Everyday economics', 'Unit 5: Into the unknown', 'Unit 6: Space and beyond'] },
]

// 简单的分配算法
const WORDS_PER_UNIT = 35
let wordIndex = 0

export const NSE_SENIOR_SECTIONS: WordbookSection[] = []

NSE_SENIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `nse_senior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        const skip = (sIndex * 29 + uIndex * 13) % 220
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

        NSE_SENIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'nse_senior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: NSE_SENIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const NSE_SENIOR_WORDBOOK: Wordbook = {
    id: 'nse_senior_wordbook',
    name: '外研社版高中英语',
    description: '外研社（新标准）高中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: NSE_SENIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: NSE_SENIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
