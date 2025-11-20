// Starred Words Manager
// 管理用户收藏的单词

import { getCurrentUser } from './auth-manager'

const STARRED_WORDS_BASE_KEY = 'starred_words'

// 获取当前用户的存储key
function getStorageKey(): string {
    const user = getCurrentUser()
    if (user) {
        return `${STARRED_WORDS_BASE_KEY}_${user.phone}`
    }
    return `${STARRED_WORDS_BASE_KEY}_guest`
}

// 获取所有星标单词ID
export function getStarredWords(): Array<string | number> {
    if (typeof window === 'undefined') return []

    const key = getStorageKey()
    const data = localStorage.getItem(key)
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
        const key = getStorageKey()
        localStorage.setItem(key, JSON.stringify(starred))
    }
}

// 移除星标
export function removeStarredWord(wordId: string | number): void {
    const starred = getStarredWords()
    const filtered = starred.filter(id => id !== wordId)
    const key = getStorageKey()
    localStorage.setItem(key, JSON.stringify(filtered))
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
