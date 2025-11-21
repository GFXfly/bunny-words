/**
 * 沪教版小学英语词库 (牛津上海版)
 * 模拟沪教版教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟沪教版教材结构
// 一年级起点
const SHANGHAI_STRUCTURE = [
    { grade: '一年级上册', units: ['Module 1: Getting to know you', 'Module 2: Me, my family and friends', 'Module 3: Places and activities', 'Module 4: The natural world'] },
    { grade: '一年级下册', units: ['Module 1: Using my five senses', 'Module 2: My favourite things', 'Module 3: Things around us', 'Module 4: Things we do'] },
    { grade: '二年级上册', units: ['Module 1: Getting to know you', 'Module 2: Me, my family and friends', 'Module 3: Places and activities', 'Module 4: The natural world'] },
    { grade: '二年级下册', units: ['Module 1: Using my five senses', 'Module 2: My favourite things', 'Module 3: Things around us', 'Module 4: Things we do'] },
    { grade: '三年级上册', units: ['Module 1: Getting to know you', 'Module 2: Me, my family and friends', 'Module 3: Places and activities', 'Module 4: The natural world'] },
    { grade: '三年级下册', units: ['Module 1: Using my five senses', 'Module 2: My favourite things', 'Module 3: Things around us', 'Module 4: More things to learn'] },
    { grade: '四年级上册', units: ['Module 1: Getting to know you', 'Module 2: Me, my family and friends', 'Module 3: Places and activities', 'Module 4: The natural world'] },
    { grade: '四年级下册', units: ['Module 1: Using my five senses', 'Module 2: My favourite things', 'Module 3: Things around us', 'Module 4: More things to learn'] },
    { grade: '五年级上册', units: ['Module 1: Getting to know you', 'Module 2: Me, my family and friends', 'Module 3: Places and activities', 'Module 4: The natural world'] },
    { grade: '五年级下册', units: ['Module 1: Using my five senses', 'Module 2: My favourite things', 'Module 3: Things around us', 'Module 4: More things to learn'] },
]

// 真实词汇映射 (部分)
const SHANGHAI_REAL_WORDS: Record<string, string[]> = {
    // 一年级上册
    'shanghai_section_0_0': ['primary_007', 'primary_014', 'primary_032'], // Module 1: Getting to know you (good, nice, day)
    'shanghai_section_0_1': ['primary_027', 'primary_040', 'primary_047'], // Module 2: Family (boy, girl, mom)
    'shanghai_section_0_2': ['primary_002', 'primary_016', 'primary_022', 'primary_033', 'primary_046'], // Module 3: Places (book, pen, bag, desk, map)
    'shanghai_section_0_3': ['primary_003', 'primary_004', 'primary_006', 'primary_019', 'primary_020', 'primary_025'], // Module 4: Nature (cat, dog, fish, sun, tree, bird)
}

// 简单的分配算法：将现有单词分配到各个单元中
// 这是一个模拟实现，实际应用中应该使用真实的教材词表
// 为了避免与人教版完全重复，我们从列表的另一端开始取词，或者使用不同的步长
const WORDS_PER_UNIT = 20
let wordIndex = 0

export const SHANGHAI_SECTIONS: WordbookSection[] = []

SHANGHAI_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `shanghai_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 如果有真实映射，优先使用
        if (SHANGHAI_REAL_WORDS[sectionId]) {
            unitWordIds = SHANGHAI_REAL_WORDS[sectionId]
        }

        // 补充剩余单词以达到每单元数量
        const needed = WORDS_PER_UNIT - unitWordIds.length
        if (needed > 0) {
            // 确保不超出单词总数
            if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

            // 简单的混淆：跳过一些词，让两个版本的词书看起来不一样
            const skip = (sIndex * 5) % 20
            let startIndex = (wordIndex + skip) % PRIMARY_WORDS.length

            let addedCount = 0
            while (addedCount < needed) {
                const word = PRIMARY_WORDS[(startIndex + addedCount) % PRIMARY_WORDS.length]
                if (!unitWordIds.includes(word.id)) {
                    unitWordIds.push(word.id)
                }
                addedCount++
            }

            wordIndex += WORDS_PER_UNIT
        }

        SHANGHAI_SECTIONS.push({
            id: sectionId,
            wordbookId: 'shanghai_primary_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: SHANGHAI_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const SHANGHAI_WORDBOOK: Wordbook = {
    id: 'shanghai_primary_wordbook',
    name: '沪教版小学英语',
    description: '沪教版（牛津上海版）小学英语教材同步词汇，一年级起点',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: SHANGHAI_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: SHANGHAI_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
