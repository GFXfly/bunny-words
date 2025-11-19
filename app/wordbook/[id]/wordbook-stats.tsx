'use client'

import { useState, useEffect } from 'react'
import { getListProgress, getListStats } from '@/lib/utils/srs-manager'
import { getStarredWords } from '@/lib/utils/starred-manager'

interface WordbookStatsProps {
    wordbookId: string
    totalWords: number
    lists: Array<{
        id: number
        name: string
        startIndex: number
        endIndex: number
    }>
}

export function WordbookStats({ wordbookId, totalWords, lists }: WordbookStatsProps) {
    const [stats, setStats] = useState({
        totalWords,
        learnedWords: 0,
        dueForReview: 0,
        starredWords: 0
    })

    const calculateStats = () => {
        // Calculate stats from all lists
        let learnedWords = 0
        let dueForReview = 0

        lists.forEach(list => {
            const sectionId = `${wordbookId}_list_${list.id}`
            const progress = getListProgress(wordbookId, sectionId)
            const listStats = getListStats(progress, list.endIndex - list.startIndex)

            learnedWords += listStats.learned
            dueForReview += listStats.dueForReview
        })

        // Get starred words count for this wordbook
        const allStarred = getStarredWords()
        const starredWords = allStarred.length

        setStats({
            totalWords,
            learnedWords,
            dueForReview,
            starredWords
        })
    }

    useEffect(() => {
        calculateStats()

        // Listen for updates
        window.addEventListener('bunny_words_progress_updated', calculateStats)
        window.addEventListener('focus', calculateStats)

        return () => {
            window.removeEventListener('bunny_words_progress_updated', calculateStats)
            window.removeEventListener('focus', calculateStats)
        }
    }, [wordbookId, totalWords, lists])

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground">学习情况</h2>
            <div className="grid grid-cols-2 gap-3">
                {/* Total Words - Pink */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF0F3] transition-transform hover:scale-[1.02]">
                    <div className="p-3 bg-white/60 rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E85D75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[#E85D75]">{stats.totalWords}</div>
                        <div className="text-xs font-medium text-[#E85D75]/70">总单词数</div>
                    </div>
                </div>

                {/* Learned - Blue */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#E3F2FD] transition-transform hover:scale-[1.02]">
                    <div className="p-3 bg-white/60 rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[#2196F3]">{stats.learnedWords}</div>
                        <div className="text-xs font-medium text-[#2196F3]/70">已学习</div>
                    </div>
                </div>

                {/* Due for Review - Orange */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF3E0] transition-transform hover:scale-[1.02]">
                    <div className="p-3 bg-white/60 rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[#FF9800]">{stats.dueForReview}</div>
                        <div className="text-xs font-medium text-[#FF9800]/70">待复习</div>
                    </div>
                </div>

                {/* Starred - Yellow */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FFF9C4] transition-transform hover:scale-[1.02]">
                    <div className="p-3 bg-white/60 rounded-xl">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#FBC02D" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-[#F57F17]">{stats.starredWords}</div>
                        <div className="text-xs font-medium text-[#F57F17]/70">已收藏</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
