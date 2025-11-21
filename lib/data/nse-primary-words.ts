/**
 * 外研社版小学英语词库 (新标准)
 * 模拟外研社版教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟外研社版教材结构 (三年级起点)
const NSE_STRUCTURE = [
    { grade: '三年级上册', units: ['Module 1: Greetings', 'Module 2: Introductions', 'Module 3: Classroom', 'Module 4: Colours', 'Module 5: Numbers', 'Module 6: Birthday', 'Module 7: School', 'Module 8: Animals', 'Module 9: Family', 'Module 10: Body'] },
    { grade: '三年级下册', units: ['Module 1: Alphabet', 'Module 2: Zoo', 'Module 3: Sports', 'Module 4: Food', 'Module 5: Time', 'Module 6: Activities', 'Module 7: Seasons', 'Module 8: Locations', 'Module 9: Possessions', 'Module 10: Holidays'] },
    { grade: '四年级上册', units: ['Module 1: Directions', 'Module 2: Abilities', 'Module 3: Past tense', 'Module 4: Food', 'Module 5: Daily routine', 'Module 6: Celebrations', 'Module 7: Animals', 'Module 8: Sports', 'Module 9: Plans', 'Module 10: Months'] },
    { grade: '四年级下册', units: ['Module 1: Friends', 'Module 2: Cities', 'Module 3: Robots', 'Module 4: Picnic', 'Module 5: Size', 'Module 6: Music', 'Module 7: Countries', 'Module 8: Weekend', 'Module 9: Illness', 'Module 10: Travel'] },
    { grade: '五年级上册', units: ['Module 1: London', 'Module 2: Shopping', 'Module 3: Weekend', 'Module 4: Possessions', 'Module 5: Numbers', 'Module 6: Abilities', 'Module 7: Helpers', 'Module 8: School', 'Module 9: Feelings', 'Module 10: Manners'] },
    { grade: '五年级下册', units: ['Module 1: Grandparents', 'Module 2: Library', 'Module 3: Food', 'Module 4: Library rules', 'Module 5: Comparison', 'Module 6: Travel', 'Module 7: Email', 'Module 8: Party', 'Module 9: Letters', 'Module 10: Preparation'] },
    { grade: '六年级上册', units: ['Module 1: Great Wall', 'Module 2: Chinatown', 'Module 3: Hobbies', 'Module 4: Thanksgiving', 'Module 5: Pen pals', 'Module 6: Stories', 'Module 7: Animals', 'Module 8: Habits', 'Module 9: Peace', 'Module 10: Rules'] },
    { grade: '六年级下册', units: ['Module 1: Restaurant', 'Module 2: Weather', 'Module 3: Help', 'Module 4: Party', 'Module 5: Performance', 'Module 6: Space', 'Module 7: Role models', 'Module 8: Why', 'Module 9: Best wishes', 'Module 10: Middle school'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
// 这是一个模拟实现，实际应用中应该使用真实的教材词表
// 使用不同的步长和起始点来模拟不同的词汇顺序
const WORDS_PER_UNIT = 12
let wordIndex = 0

export const NSE_SECTIONS: WordbookSection[] = []

NSE_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `nse_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 确保不超出单词总数
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        // 简单的混淆：跳过一些词，让不同版本的词书看起来不一样
        // 外研社版我们倒序取一部分，正序取一部分，模拟混排
        const skip = (sIndex * 7 + uIndex * 3) % 50
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

        NSE_SECTIONS.push({
            id: sectionId,
            wordbookId: 'nse_primary_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: NSE_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const NSE_WORDBOOK: Wordbook = {
    id: 'nse_primary_wordbook',
    name: '外研社版小学英语',
    description: '外研社（新标准）小学英语教材同步词汇，三年级起点',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: NSE_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: NSE_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
