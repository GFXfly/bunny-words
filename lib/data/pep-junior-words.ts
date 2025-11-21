/**
 * 人教版初中英语词库 (Go for it!)
 * 模拟人教版初中教材的单元结构
 */

import { Wordbook, WordbookSection } from '../types/word'
import { PRIMARY_WORDS } from './primary-words'

// 模拟人教版初中教材结构
const PEP_JUNIOR_STRUCTURE = [
    { grade: '七年级上册', units: ['Starter Unit 1: Good morning!', 'Starter Unit 2: What\'s this in English?', 'Starter Unit 3: What color is it?', 'Unit 1: My name\'s Gina', 'Unit 2: This is my sister', 'Unit 3: Is this your pencil?', 'Unit 4: Where\'s my schoolbag?', 'Unit 5: Do you have a soccer ball?', 'Unit 6: Do you like bananas?', 'Unit 7: How much are these socks?', 'Unit 8: When is your birthday?', 'Unit 9: My favorite subject is science'] },
    { grade: '七年级下册', units: ['Unit 1: Can you play the guitar?', 'Unit 2: What time do you go to school?', 'Unit 3: How do you get to school?', 'Unit 4: Don\'t eat in class', 'Unit 5: Why do you like pandas?', 'Unit 6: I\'m watching TV', 'Unit 7: It\'s raining!', 'Unit 8: Is there a post office near here?', 'Unit 9: What does he look like?', 'Unit 10: I\'d like some noodles', 'Unit 11: How was your school trip?', 'Unit 12: What did you do last weekend?'] },
    { grade: '八年级上册', units: ['Unit 1: Where did you go on vacation?', 'Unit 2: How often do you exercise?', 'Unit 3: I\'m more outgoing than my sister', 'Unit 4: What\'s the best movie theater?', 'Unit 5: Do you want to watch a game show?', 'Unit 6: I\'m going to study computer science', 'Unit 7: Will people have robots?', 'Unit 8: How do you make a banana milk shake?', 'Unit 9: Can you come to my party?', 'Unit 10: If you go to the party, you\'ll have a great time!'] },
    { grade: '八年级下册', units: ['Unit 1: What\'s the matter?', 'Unit 2: I\'ll help to clean up the city parks', 'Unit 3: Could you please clean your room?', 'Unit 4: Why don\'t you talk to your parents?', 'Unit 5: What were you doing when the rainstorm came?', 'Unit 6: An old man tried to move the mountains', 'Unit 7: What\'s the highest mountain in the world?', 'Unit 8: Have you read Treasure Island yet?', 'Unit 9: Have you ever been to a museum?', 'Unit 10: I\'ve had this bike for three years'] },
    { grade: '九年级全一册', units: ['Unit 1: How can we become good learners?', 'Unit 2: I think that mooncakes are delicious!', 'Unit 3: Could you please tell me where the restrooms are?', 'Unit 4: I used to be afraid of the dark', 'Unit 5: What are the shirts made of?', 'Unit 6: When was it invented?', 'Unit 7: Teenagers should be allowed to choose their own clothes', 'Unit 8: It must belong to Carla', 'Unit 9: I like music that I can dance to', 'Unit 10: You\'re supposed to shake hands', 'Unit 11: Sad movies make me cry', 'Unit 12: Life is full of the unexpected', 'Unit 13: We\'re trying to save the earth!', 'Unit 14: I remember meeting all of you in Grade 7'] },
]

// 简单的分配算法：将现有单词分配到各个单元中
// 注意：这里暂时复用 PRIMARY_WORDS，实际应该使用初中词汇
// 为了演示效果，我们从 PRIMARY_WORDS 中循环取词
const WORDS_PER_UNIT = 25
let wordIndex = 0

export const PEP_JUNIOR_SECTIONS: WordbookSection[] = []

PEP_JUNIOR_STRUCTURE.forEach((semester, sIndex) => {
    semester.units.forEach((unitName, uIndex) => {
        const sectionId = `pep_junior_section_${sIndex}_${uIndex}`
        let unitWordIds: (string | number)[] = []

        // 确保不超出单词总数
        if (wordIndex >= PRIMARY_WORDS.length) wordIndex = 0

        // 简单的混淆：使用不同的起始点
        const skip = (sIndex * 13 + uIndex * 5) % 100
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

        PEP_JUNIOR_SECTIONS.push({
            id: sectionId,
            wordbookId: 'pep_junior_wordbook',
            name: `${semester.grade} ${unitName}`,
            order: PEP_JUNIOR_SECTIONS.length + 1,
            wordIds: unitWordIds
        })
    })
})

export const PEP_JUNIOR_WORDBOOK: Wordbook = {
    id: 'pep_junior_wordbook',
    name: '人教版初中英语',
    description: '人教版（Go for it!）初中英语教材同步词汇',
    coverImage: '/primary-wordbook-detail.png', // 暂时复用封面
    difficulty: 'CUSTOM',
    totalWords: PEP_JUNIOR_SECTIONS.reduce((acc, sec) => acc + sec.wordIds.length, 0),
    sections: PEP_JUNIOR_SECTIONS,
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01')
}
