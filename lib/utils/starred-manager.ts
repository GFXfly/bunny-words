// Starred Words Manager
// 管理用户收藏的单词

const STARRED_WORDS_KEY = 'starred_words'

// 获取所有星标单词ID
export function getStarredWords(): Array<string | number> {
    if (typeof window === 'undefined') return []

    const data = localStorage.getItem(STARRED_WORDS_KEY)
    if (!data) return []

    try {
        return JSON.parse(data)
    } catch (e) {
        console.error('Failed to parse starred words', e)
        return []
    }
}

// 检查单词是否已星标
export function isWordStarred(wordId: string | number): boolean {
    const starred = getStarredWords()
    return starred.includes(wordId)
}

// 添加星标
export function addStarredWord(wordId: string | number): void {
    const starred = getStarredWords()
    if (!starred.includes(wordId)) {
        starred.push(wordId)
        localStorage.setItem(STARRED_WORDS_KEY, JSON.stringify(starred))
    }
}

// 移除星标
export function removeStarredWord(wordId: string | number): void {
    const starred = getStarredWords()
    const filtered = starred.filter(id => id !== wordId)
    localStorage.setItem(STARRED_WORDS_KEY, JSON.stringify(filtered))
}

// 切换星标状态
export function toggleStarredWord(wordId: string | number): boolean {
    const isStarred = isWordStarred(wordId)
    if (isStarred) {
        removeStarredWord(wordId)
        return false
    } else {
        addStarredWord(wordId)
        return true
    }
}
