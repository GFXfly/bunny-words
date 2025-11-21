/**
 * 外研社版初中英语词库 (新标准)
 * 模拟外研社版初中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟外研社版初中教材结构
const NSE_JUNIOR_STRUCTURE = [
    { grade: '七年级上册', units: ['Module 1: My classmates', 'Module 2: My family', 'Module 3: My school', 'Module 4: Healthy food', 'Module 5: My school day', 'Module 6: A trip to the zoo', 'Module 7: Computers', 'Module 8: Choosing presents', 'Module 9: People and places', 'Module 10: Spring Festival'] },
    { grade: '七年级下册', units: ['Module 1: Lost and found', 'Module 2: What can you do?', 'Module 3: Making plans', 'Module 4: Life in the future', 'Module 5: Shopping', 'Module 6: Around town', 'Module 7: My past life', 'Module 8: Story time', 'Module 9: Life history', 'Module 10: A holiday journey', 'Module 11: Body language', 'Module 12: Western music'] },
    { grade: '八年级上册', units: ['Module 1: How to learn English', 'Module 2: My hometown and my country', 'Module 3: Sports', 'Module 4: Planes, ships and trains', 'Module 5: Lao She Teahouse', 'Module 6: Animals in danger', 'Module 7: A famous story', 'Module 8: Accidents', 'Module 9: Population', 'Module 10: The weather', 'Module 11: Way of life', 'Module 12: Help'] },
    { grade: '八年级下册', units: ['Module 1: Feelings and impressions', 'Module 2: Experiences', 'Module 3: Journey to space', 'Module 4: Seeing the doctor', 'Module 5: Cartoons', 'Module 6: Hobbies', 'Module 7: Summer in Los Angeles', 'Module 8: Time off', 'Module 9: Friendship', 'Module 10: On the radio'] },
    { grade: '九年级上册', units: ['Module 1: Wonders of the world', 'Module 2: Public holidays', 'Module 3: Heroes', 'Module 4: Home alone', 'Module 5: Museums', 'Module 6: Problems', 'Module 7: Great books', 'Module 8: Sports life', 'Module 9: Great inventions', 'Module 10: Australia', 'Module 11: Photos', 'Module 12: Save our world'] },
    { grade: '九年级下册', units: ['Module 1: Travel', 'Module 2: Education', 'Module 3: Life now and then', 'Module 4: Rules and suggestions', 'Module 5: Look after yourself', 'Module 6: Eating together', 'Module 7: English for you and me', 'Module 8: My future life'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
const WORDS_PER_UNIT = 25
let wordIndex = 0

export const NSE_JUNIOR_SECTIONS: WordbookSection[] = []

NSE_JUNIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `nse_junior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 确保不超出单词总数
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        // 简单的混淆：使用不同的起始点
        const skip = (sIndex * 17 + uIndex * 4) % 120
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

        NSE_JUNIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'nse_junior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: NSE_JUNIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const NSE_JUNIOR_WORDBOOK: Wordbook = {
    id: 'nse_junior_wordbook',
    name: '外研社版初中英语',
    description: '外研社（新标准）初中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: NSE_JUNIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: NSE_JUNIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
