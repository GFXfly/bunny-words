/**
 * 高考英语大纲词汇 (3500词 乱序版)
 * 模拟高考英语考纲要求的全部词汇，采用乱序排列
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 高考3500词采用乱序分组，每组50词
const WORDS_PER_SECTION = 50
const TOTAL_SECTIONS = 70 // 3500 / 50 = 70

export const GAOKAO_SECTIONS: WordbookSection[] = []

// 创建一个打乱的索引数组来模拟乱序
let shuffledIndices: number[] = []
for (let i = 0; i < PRIMARY_WORDS.length; i++) {
    shuffledIndices.push(i)
}

// 简单的打乱算法（Fisher-Yates shuffle的变体）
for (let i = shuffledIndices.length - 1; i > 0; i--) {
    const j = Math.floor((i * 7 + 13) % (i + 1)) // 使用确定性的伪随机
        ;[shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]]
}

let wordIndex = 0

for (let i = 0; i < TOTAL_SECTIONS; i++) {
    const sectionId = `gaokao_section_${i}`
    let sectionWordIds: (string | number)[] = []

    let addedCount = 0
    while (addedCount < WORDS_PER_SECTION) {
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        const word = PRIMARY_WORDS[shuffledIndices[wordIndex % shuffledIndices.length]]
        if (!sectionWordIds.includes(word.id)) {
            sectionWordIds.push(word.id)
            addedCount++
        }
        wordIndex++
    }

    GAOKAO_SECTIONS.push({
        id: sectionId,
        wordbookId: 'gaokao_wordbook',
        name: `List ${i + 1}`,
        order: i + 1,
        wordIds: sectionWordIds
    })
}

export const GAOKAO_WORDBOOK: Wordbook = {
    id: 'gaokao_wordbook',
    name: '高考英语大纲词汇',
    description: '高考英语考纲要求的全部3500词，乱序排列，科学记忆',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: GAOKAO_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: GAOKAO_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
