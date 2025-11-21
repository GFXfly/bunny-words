/**
 * 苏教版小学英语词库 (译林版)
 * 模拟苏教版教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟苏教版教材结构 (三年级起点)
const YILIN_STRUCTURE = [
    { grade: '三年级上册', units: ['Unit 1: Hello', 'Unit 2: I\'m Liu Tao', 'Unit 3: My friends', 'Unit 4: My family', 'Unit 5: Look at me', 'Unit 6: Colours', 'Unit 7: Would you like a pie?', 'Unit 8: Happy New Year!'] },
    { grade: '三年级下册', units: ['Unit 1: In class', 'Unit 2: In the library', 'Unit 3: Is this your pencil?', 'Unit 4: Where\'s the bird?', 'Unit 5: How old are you?', 'Unit 6: What time is it?', 'Unit 7: On the farm', 'Unit 8: We\'re twins!'] },
    { grade: '四年级上册', units: ['Unit 1: I like dogs', 'Unit 2: Let\'s make a fruit salad', 'Unit 3: How many?', 'Unit 4: I can play basketball', 'Unit 5: Our new home', 'Unit 6: At the snack bar', 'Unit 7: How much?', 'Unit 8: Dolls'] },
    { grade: '四年级下册', units: ['Unit 1: Our school subjects', 'Unit 2: After school', 'Unit 3: My day', 'Unit 4: Drawing in the park', 'Unit 5: Seasons', 'Unit 6: Whose dress is this?', 'Unit 7: What\'s the matter?', 'Unit 8: How are you?'] },
    { grade: '五年级上册', units: ['Unit 1: Goldilocks and the three bears', 'Unit 2: A new student', 'Unit 3: Our animal friends', 'Unit 4: Hobbies', 'Unit 5: What do they do?', 'Unit 6: My e-friend', 'Unit 7: At weekends', 'Unit 8: At Christmas'] },
    { grade: '五年级下册', units: ['Unit 1: Cinderella', 'Unit 2: How do you come to school?', 'Unit 3: Asking the way', 'Unit 4: Seeing the doctor', 'Unit 5: Helping our parents', 'Unit 6: In the kitchen', 'Unit 7: Chinese festivals', 'Unit 8: Birthdays'] },
    { grade: '六年级上册', units: ['Unit 1: The King\'s new clothes', 'Unit 2: What a day!', 'Unit 3: Holiday fun', 'Unit 4: Then and now', 'Unit 5: Signs', 'Unit 6: Keep our city clean', 'Unit 7: Protect the Earth', 'Unit 8: Chinese New Year'] },
    { grade: '六年级下册', units: ['Unit 1: The lion and the mouse', 'Unit 2: Good habits', 'Unit 3: Healthy diet', 'Unit 4: Road safety', 'Unit 5: A party', 'Unit 6: An interesting country', 'Unit 7: Summer holiday plans', 'Unit 8: Our dreams'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
// 这是一个模拟实现，实际应用中应该使用真实的教材词表
const WORDS_PER_UNIT = 15
let wordIndex = 0

export const YILIN_SECTIONS: WordbookSection[] = []

YILIN_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `yilin_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 确保不超出单词总数
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        // 简单的混淆：使用不同的起始点
        const skip = (sIndex * 11 + uIndex * 2) % 80
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

        YILIN_SECTIONS.push({
            id: sectionId,
            wordbookId: 'yilin_primary_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: YILIN_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const YILIN_WORDBOOK: Wordbook = {
    id: 'yilin_primary_wordbook',
    name: '苏教版小学英语',
    description: '苏教版（译林版）小学英语教材同步词汇，三年级起点',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: YILIN_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: YILIN_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
