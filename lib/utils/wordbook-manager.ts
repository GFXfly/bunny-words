/**
 * 词库管理工具
 * 统一管理所有词库数据
 */

import { Word, Wordbook, WordbookSection } from '../types/word'
import { CET4_WORDS, CET4_WORDBOOK, getCET4WordById, getCET4WordsByIds } from '../data/cet4-words'
import { CET6_WORDS, CET6_WORDBOOK, getCET6WordById, getCET6WordsByIds } from '../data/cet6-words'
import { PRIMARY_WORDS, PRIMARY_WORDBOOK, getPrimaryWordById, getPrimaryWordsByIds } from '../data/primary-words'

// 所有可用的词书
export const ALL_WORDBOOKS: Wordbook[] = [
    PRIMARY_WORDBOOK,  // 小学词库放在最前面
    CET4_WORDBOOK,
    CET6_WORDBOOK
]

// 所有单词（合并）
export const ALL_WORDS: Word[] = [
    ...PRIMARY_WORDS,
    ...CET4_WORDS,
    ...CET6_WORDS
]

/**
 * 根据ID获取词书
 */
export function getWordbookById(id: string): Wordbook | undefined {
    return ALL_WORDBOOKS.find(wb => wb.id === id)
}

/**
 * 根据难度获取词书列表
 */
export function getWordbooksByDifficulty(difficulty: string): Wordbook[] {
    return ALL_WORDBOOKS.filter(wb => wb.difficulty === difficulty)
}

/**
 * 根据ID获取单词
 */
export function getWordById(id: string | number): Word | undefined {
    // 先尝试从小学词库查找
    const primaryWord = getPrimaryWordById(id)
    if (primaryWord) return primaryWord

    // 再从CET4查找
    const cet4Word = getCET4WordById(id)
    if (cet4Word) return cet4Word

    // 最后从CET6查找
    const cet6Word = getCET6WordById(id)
    if (cet6Word) return cet6Word

    return undefined
}

/**
 * 根据ID列表获取单词列表
 */
export function getWordsByIds(ids: (string | number)[]): Word[] {
    return ids.map(id => getWordById(id)).filter(Boolean) as Word[]
}

/**
 * 获取词书的某个章节
 */
export function getWordbookSection(wordbookId: string, sectionId: string): WordbookSection | undefined {
    const wordbook = getWordbookById(wordbookId)
    if (!wordbook) return undefined

    // 检查是否为动态生成的列表ID (例如: primary_list_1)
    if (sectionId.includes('_list_')) {
        const match = sectionId.match(/_list_(\d+)$/)
        if (match) {
            const listIndex = parseInt(match[1]) - 1
            const pageSize = 50

            // 获取该词书的所有单词
            let allWords: Word[] = []
            if (wordbookId === 'primary_wordbook') allWords = PRIMARY_WORDS
            else if (wordbookId === 'cet4_wordbook') allWords = CET4_WORDS
            else if (wordbookId === 'cet6_wordbook') allWords = CET6_WORDS

            const start = listIndex * pageSize
            const end = start + pageSize
            const wordIds = allWords.slice(start, end).map(w => w.id)

            if (wordIds.length > 0) {
                return {
                    id: sectionId,
                    wordbookId: wordbookId,
                    name: `List ${listIndex + 1}`,
                    order: listIndex + 1,
                    wordIds: wordIds
                }
            }
        }
    }

    return wordbook.sections.find(section => section.id === sectionId)
}

/**
 * 获取章节的所有单词
 */
export function getSectionWords(wordbookId: string, sectionId: string): Word[] {
    const section = getWordbookSection(wordbookId, sectionId)
    if (!section) return []

    return getWordsByIds(section.wordIds)
}

/**
 * 搜索单词
 */
export function searchWords(query: string, options?: {
    difficulty?: string
    limit?: number
}): Word[] {
    const { difficulty, limit = 50 } = options || {}

    const lowerQuery = query.toLowerCase().trim()

    let results = ALL_WORDS.filter(word => {
        // 按单词匹配
        if (word.word.toLowerCase().includes(lowerQuery)) return true

        // 按翻译匹配
        if (word.translation.toLowerCase().includes(lowerQuery)) return true

        return false
    })

    // 按难度过滤
    if (difficulty) {
        results = results.filter(w => w.difficulty === difficulty)
    }

    // 限制结果数量
    return results.slice(0, limit)
}

/**
 * 获取随机单词
 */
export function getRandomWords(count: number, options?: {
    difficulty?: string
    excludeIds?: (string | number)[]
}): Word[] {
    const { difficulty, excludeIds = [] } = options || {}

    let pool = ALL_WORDS.filter(w => !excludeIds.includes(w.id))

    if (difficulty) {
        pool = pool.filter(w => w.difficulty === difficulty)
    }

    // Fisher-Yates 洗牌算法
    const shuffled = [...pool]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    return shuffled.slice(0, count)
}

import { getCurrentUser } from './auth-manager'

/**
 * 获取词书统计信息
 */
export function getWordbookStats(wordbookId: string) {
    const wordbook = getWordbookById(wordbookId)
    if (!wordbook) return null

    const allWords = wordbook.sections.flatMap(section =>
        getWordsByIds(section.wordIds)
    )

    // Calculate SRS-based stats from localStorage
    let learnedWords = 0
    let dueForReview = 0
    let starredWords = 0

    if (typeof window !== 'undefined') {
        const user = getCurrentUser()

        // Get all list progress for this wordbook
        const totalLists = Math.ceil(allWords.length / 50)

        for (let i = 1; i <= totalLists; i++) {
            const sectionId = `${wordbookId}_list_${i}`
            const baseKey = `srs_progress_${wordbookId}_${sectionId}`
            const progressKey = user ? `${baseKey}_${user.phone}` : `${baseKey}_guest`
            const progressData = localStorage.getItem(progressKey)

            if (progressData) {
                try {
                    const progress = JSON.parse(progressData)
                    const now = Date.now()

                    Object.values(progress.words || {}).forEach((wordProgress: any) => {
                        if (wordProgress.reviewCount > 0) {
                            learnedWords++
                        }
                        if (wordProgress.reviewCount > 0 && wordProgress.nextReviewDate <= now) {
                            dueForReview++
                        }
                    })
                } catch (e) {
                    console.error('Failed to parse progress', e)
                }
            }
        }

        // Get starred words count
        const starredBaseKey = `starred_words`
        const starredKey = user ? `${starredBaseKey}_${user.phone}` : `${starredBaseKey}_guest`
        const starredData = localStorage.getItem(starredKey)
        if (starredData) {
            try {
                const starred = JSON.parse(starredData)
                // Count only words from this wordbook
                starredWords = starred.filter((wordId: string | number) => {
                    const word = allWords.find(w => w.id === wordId)
                    return !!word
                }).length
            } catch (e) {
                console.error('Failed to parse starred words', e)
            }
        }
    }

    return {
        totalWords: allWords.length,
        totalSections: wordbook.sections.length,
        averageWordsPerSection: Math.round(allWords.length / wordbook.sections.length),
        difficulty: wordbook.difficulty,
        learnedWords,
        dueForReview,
        starredWords
    }
}

/**
 * 验证单词拼写
 */
export function validateSpelling(input: string, correctWord: string): {
    isCorrect: boolean
    similarity: number // 0-1，相似度
} {
    const normalizedInput = input.toLowerCase().trim()
    const normalizedCorrect = correctWord.toLowerCase().trim()

    if (normalizedInput === normalizedCorrect) {
        return { isCorrect: true, similarity: 1 }
    }

    // 计算Levenshtein距离（编辑距离）
    const distance = levenshteinDistance(normalizedInput, normalizedCorrect)
    const maxLength = Math.max(normalizedInput.length, normalizedCorrect.length)
    const similarity = 1 - (distance / maxLength)

    return {
        isCorrect: false,
        similarity
    }
}

/**
 * Levenshtein距离算法（计算两个字符串的编辑距离）
 */
function levenshteinDistance(str1: string, str2: string): number {
    const m = str1.length
    const n = str2.length
    const dp: number[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0))

    for (let i = 0; i <= m; i++) dp[i][0] = i
    for (let j = 0; j <= n; j++) dp[0][j] = j

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,     // 删除
                    dp[i][j - 1] + 1,     // 插入
                    dp[i - 1][j - 1] + 1  // 替换
                )
            }
        }
    }

    return dp[m][n]
}
