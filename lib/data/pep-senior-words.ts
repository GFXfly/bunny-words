/**
 * 人教版高中英语词库 (新课标)
 * 模拟人教版高中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟人教版高中教材结构 (新课标)
const PEP_SENIOR_STRUCTURE = [
    { grade: '必修第一册', units: ['Unit 1: Teenage Life', 'Unit 2: Travelling Around', 'Unit 3: Sports and Fitness', 'Unit 4: Natural Disasters', 'Unit 5: Languages Around the World'] },
    { grade: '必修第二册', units: ['Unit 1: Cultural Heritage', 'Unit 2: Wildlife Protection', 'Unit 3: The Internet', 'Unit 4: History and Traditions', 'Unit 5: Music'] },
    { grade: '必修第三册', units: ['Unit 1: Festivals and Celebrations', 'Unit 2: Morals and Virtues', 'Unit 3: Diverse Cultures', 'Unit 4: Space Exploration', 'Unit 5: The Value of Money'] },
    { grade: '选择性必修第一册', units: ['Unit 1: People of Achievement', 'Unit 2: Looking into the Future', 'Unit 3: Fascinating Parks', 'Unit 4: Body Language', 'Unit 5: Working the Land'] },
    { grade: '选择性必修第二册', units: ['Unit 1: Science and Scientists', 'Unit 2: Bridging Cultures', 'Unit 3: Food and Culture', 'Unit 4: Journey Across a Vast Land', 'Unit 5: First Aid'] },
    { grade: '选择性必修第三册', units: ['Unit 1: Art', 'Unit 2: Healthy Lifestyle', 'Unit 3: Environmental Protection', 'Unit 4: Adversity and Courage', 'Unit 5: Poems'] },
    { grade: '选择性必修第四册', units: ['Unit 1: Science Fiction', 'Unit 2: Iconic Attractions', 'Unit 3: Sea Exploration', 'Unit 4: Sharing', 'Unit 5: Launching Your Career'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
const WORDS_PER_UNIT = 35
let wordIndex = 0

export const PEP_SENIOR_SECTIONS: WordbookSection[] = []

PEP_SENIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `pep_senior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        const skip = (sIndex * 23 + uIndex * 11) % 200
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

        PEP_SENIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'pep_senior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: PEP_SENIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const PEP_SENIOR_WORDBOOK: Wordbook = {
    id: 'pep_senior_wordbook',
    name: '人教版高中英语',
    description: '人教版（新课标）高中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png',
    difficulty: 'CUSTOM',
    totalWords: PEP_SENIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: PEP_SENIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
