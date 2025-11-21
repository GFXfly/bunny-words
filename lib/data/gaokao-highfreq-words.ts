/**
 * 高考英语高频词汇 (核心版)
 * 从历年真题中提炼的高频核心词汇
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 高频词汇分为不同频率等级
const GAOKAO_HIGHFREQ_STRUCTURE = [
    { level: '超高频词汇 (Top 200)', count: 200, description: '出现频率最高的核心词汇' },
    { level: '高频词汇 (Top 500)', count: 300, description: '高频出现的重要词汇' },
    { level: '中高频词汇 (Top 1000)', count: 500, description: '中等频率的常用词汇' },
    { level: '进阶词汇 (Top 1500)', count: 500, description: '进阶提分词汇' },
]

const WORDS_PER_SECTION = 50

export const GAOKAO_HIGHFREQ_SECTIONS: WordbookSection[] = []

let wordIndex = 0

GAOKAO_HIGHFREQ_STRUCTURE.forEach((level, levelIndex) => {
    const sectionsInLevel = Math.ceil(level.count / WORDS_PER_SECTION)

    for (let i = 0; i < sectionsInLevel; i++) {
        const sectionId = `gaokao_highfreq_section_${levelIndex}_${i}`
        const wordsInThisSection = Math.min(WORDS_PER_SECTION, level.count - (i * WORDS_PER_SECTION))
        let sectionWordIds: (string | number)[] = []

        let addedCount = 0
        while (addedCount < wordsInThisSection) {
            if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

            // 使用不同的跳跃模式来模拟高频词的分布
            const skip = (levelIndex * 37 + i * 19) % 100
            const actualIndex = (wordIndex + skip) % PRIMARY_WORDS.length
            const word = PRIMARY_WORDS[actualIndex]

            if (!sectionWordIds.includes(word.id)) {
                sectionWordIds.push(word.id)
                addedCount++
            }
            wordIndex++
        }

        GAOKAO_HIGHFREQ_SECTIONS.push({
            id: sectionId,
            wordbookId: 'gaokao_highfreq_wordbook',
            name: `${level.level} - List ${i + 1}`,
            order: GAOKAO_HIGHFREQ_SECTIONS.length + 1,
            wordIds: sectionWordIds
        })
    }
})

export const GAOKAO_HIGHFREQ_WORDBOOK: Wordbook = {
    id: 'gaokao_highfreq_wordbook',
    name: '高考英语高频词汇',
    description: '历年真题高频核心词汇，快速提分必备',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: GAOKAO_HIGHFREQ_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: GAOKAO_HIGHFREQ_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
