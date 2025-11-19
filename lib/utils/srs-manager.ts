// Spaced Repetition System (SRS) Manager
// 基于 Anki 算法的间隔重复学习系统

export interface WordProgress {
    wordId: string | number
    lastReviewDate: number // timestamp
    nextReviewDate: number // timestamp
    interval: number // days
    easeFactor: number // 难度系数
    reviewCount: number
    rating: 'again' | 'hard' | 'good' | 'easy' | null
}

export interface ListProgress {
    listId: string
    wordbookId: string
    words: Record<string, WordProgress>
    firstStudyCompleted: boolean
    lastStudyDate: number
}

// Anki 算法的间隔时间（分钟）
const INTERVALS = {
    again: 1, // 1 分钟后
    hard: 10, // 10 分钟后
    good: 1440, // 1 天后 (24 * 60)
    easy: 5760, // 4 天后 (4 * 24 * 60)
}

// 获取列表的学习进度
export function getListProgress(wordbookId: string, listId: string): ListProgress | null {
    if (typeof window === 'undefined') return null

    const key = `srs_progress_${wordbookId}_${listId}`
    const data = localStorage.getItem(key)

    if (!data) return null

    try {
        return JSON.parse(data)
    } catch (e) {
        console.error('Failed to parse list progress', e)
        return null
    }
}

// 保存列表的学习进度
export function saveListProgress(progress: ListProgress): void {
    if (typeof window === 'undefined') return

    const key = `srs_progress_${progress.wordbookId}_${progress.listId}`
    localStorage.setItem(key, JSON.stringify(progress))

    // Dispatch custom event for UI updates
    window.dispatchEvent(new Event('bunny_words_progress_updated'))
}

// 初始化列表进度
export function initializeListProgress(
    wordbookId: string,
    listId: string,
    wordIds: Array<string | number>
): ListProgress {
    const progress: ListProgress = {
        listId,
        wordbookId,
        words: {},
        firstStudyCompleted: false,
        lastStudyDate: Date.now(),
    }

    wordIds.forEach(wordId => {
        progress.words[wordId] = {
            wordId,
            lastReviewDate: 0,
            nextReviewDate: 0,
            interval: 0,
            easeFactor: 2.5,
            reviewCount: 0,
            rating: null,
        }
    })

    return progress
}

// 更新单词的学习进度
export function updateWordProgress(
    progress: ListProgress,
    wordId: string | number,
    rating: 'again' | 'hard' | 'good' | 'easy'
): ListProgress {
    const now = Date.now()
    const wordProgress = progress.words[wordId] || {
        wordId,
        lastReviewDate: 0,
        nextReviewDate: 0,
        interval: 0,
        easeFactor: 2.5,
        reviewCount: 0,
        rating: null,
    }

    // 更新复习次数
    wordProgress.reviewCount += 1
    wordProgress.lastReviewDate = now
    wordProgress.rating = rating

    // 计算下次复习时间（基于 Anki 算法）
    let intervalMinutes = INTERVALS[rating]

    // 如果不是第一次复习，使用间隔重复算法
    if (wordProgress.reviewCount > 1) {
        if (rating === 'again') {
            // 重置间隔
            intervalMinutes = INTERVALS.again
            wordProgress.easeFactor = Math.max(1.3, wordProgress.easeFactor - 0.2)
        } else if (rating === 'hard') {
            intervalMinutes = wordProgress.interval * 1.2 * wordProgress.easeFactor
            wordProgress.easeFactor = Math.max(1.3, wordProgress.easeFactor - 0.15)
        } else if (rating === 'good') {
            intervalMinutes = wordProgress.interval * wordProgress.easeFactor
        } else if (rating === 'easy') {
            intervalMinutes = wordProgress.interval * wordProgress.easeFactor * 1.3
            wordProgress.easeFactor = wordProgress.easeFactor + 0.15
        }
    }

    wordProgress.interval = intervalMinutes
    wordProgress.nextReviewDate = now + intervalMinutes * 60 * 1000

    progress.words[wordId] = wordProgress
    progress.lastStudyDate = now

    return progress
}

// 获取需要复习的单词 ID 列表
export function getDueWords(progress: ListProgress | null): Array<string | number> {
    if (!progress) return []

    const now = Date.now()
    const dueWords: Array<string | number> = []

    Object.values(progress.words).forEach(wordProgress => {
        // 如果从未学习过，或者到了复习时间
        if (wordProgress.reviewCount === 0 || wordProgress.nextReviewDate <= now) {
            dueWords.push(wordProgress.wordId)
        }
    })

    return dueWords
}

// 获取列表统计信息
export function getListStats(progress: ListProgress | null, totalWords: number) {
    if (!progress) {
        return {
            total: totalWords,
            learned: 0,
            dueForReview: 0,
            completed: false,
        }
    }

    const now = Date.now()
    let learned = 0
    let dueForReview = 0

    Object.values(progress.words).forEach(wordProgress => {
        if (wordProgress.reviewCount > 0) {
            learned += 1
        }

        if (wordProgress.reviewCount > 0 && wordProgress.nextReviewDate <= now) {
            dueForReview += 1
        }
    })

    const completed = progress.firstStudyCompleted && dueForReview === 0

    return {
        total: totalWords,
        learned,
        dueForReview,
        completed,
    }
}

// 标记首次学习完成
export function markFirstStudyCompleted(progress: ListProgress): ListProgress {
    progress.firstStudyCompleted = true
    return progress
}

// 检查是否是首次学习
export function isFirstStudy(progress: ListProgress | null): boolean {
    return !progress || !progress.firstStudyCompleted
}

// 处理测试模式中的错误（听写、选择、连连看）
// 当用户做错时，提升该单词的复习优先级
export function markWordForReview(
    progress: ListProgress,
    wordId: string | number,
    isCorrect: boolean
): ListProgress {
    const now = Date.now()
    const wordProgress = progress.words[wordId] || {
        wordId,
        lastReviewDate: 0,
        nextReviewDate: 0,
        interval: 0,
        easeFactor: 2.5,
        reviewCount: 0,
        rating: null,
    }

    if (!isCorrect) {
        // 做错了，提升复习优先级
        wordProgress.lastReviewDate = now

        // 根据之前的错误次数决定复习间隔
        if (wordProgress.reviewCount === 0) {
            // 首次做错：1小时后复习
            wordProgress.nextReviewDate = now + 60 * 60 * 1000
            wordProgress.interval = 60 // 60分钟
        } else if (wordProgress.rating === 'again' || wordProgress.nextReviewDate <= now) {
            // 重复做错或已经在复习队列中：10分钟后复习
            wordProgress.nextReviewDate = now + 10 * 60 * 1000
            wordProgress.interval = 10 // 10分钟
        } else {
            // 之前掌握较好但现在做错：30分钟后复习
            wordProgress.nextReviewDate = now + 30 * 60 * 1000
            wordProgress.interval = 30 // 30分钟
        }

        // 降低难度系数，表示这个词比较难
        wordProgress.easeFactor = Math.max(1.3, wordProgress.easeFactor - 0.1)
        wordProgress.rating = 'again'

        // 增加复习计数
        if (wordProgress.reviewCount === 0) {
            wordProgress.reviewCount = 1
        }
    } else {
        // 做对了，轻微延后复习时间（可选）
        if (wordProgress.reviewCount > 0 && wordProgress.nextReviewDate > now) {
            // 如果已经在复习计划中，稍微延后一点
            const currentInterval = wordProgress.nextReviewDate - now
            wordProgress.nextReviewDate = now + currentInterval * 1.2
        }
        // 不修改 easeFactor，保持原有难度
    }

    progress.words[wordId] = wordProgress
    progress.lastStudyDate = now

    return progress
}

