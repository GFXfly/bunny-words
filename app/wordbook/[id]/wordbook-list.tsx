'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { getSectionWords } from '@/lib/utils/wordbook-manager'
import { getListProgress, getListStats } from '@/lib/utils/srs-manager'

interface WordbookListProps {
    wordbookId: string
    lists: Array<{
        id: number
        name: string
        startIndex: number
        endIndex: number
    }>
}

export function WordbookList({ wordbookId, lists }: WordbookListProps) {
    const [listStats, setListStats] = useState<Record<number, {
        learned: number
        reviewNeeded: number
        total: number
        completed: boolean
        previewWords: string[]
        allWords: Array<{ word: string, translation: string }>
    }>>({})
    const [showAllWordsModal, setShowAllWordsModal] = useState(false)
    const [selectedListWords, setSelectedListWords] = useState<Array<{ word: string, translation: string }>>([])
    const [selectedListName, setSelectedListName] = useState('')

    const loadStats = () => {
        const stats: Record<number, any> = {}

        lists.forEach(list => {
            const sectionId = `${wordbookId}_list_${list.id}`
            const words = getSectionWords(wordbookId, sectionId)

            // Get SRS progress
            const progress = getListProgress(wordbookId, sectionId)
            const srsStats = getListStats(progress, words.length)

            stats[list.id] = {
                learned: srsStats.learned,
                reviewNeeded: srsStats.dueForReview,
                total: srsStats.total,
                completed: srsStats.completed,
                previewWords: words.slice(0, 3).map(w => w.word),
                allWords: words.map(w => ({ word: w.word, translation: w.translation }))
            }
        })

        setListStats(stats)
    }

    useEffect(() => {
        loadStats()

        // Listen for updates
        window.addEventListener('bunny_words_progress_updated', loadStats)
        window.addEventListener('focus', loadStats)

        return () => {
            window.removeEventListener('bunny_words_progress_updated', loadStats)
            window.removeEventListener('focus', loadStats)
        }
    }, [wordbookId, lists])

    const handleResetProgress = () => {
        if (confirm('确定要重置所有进度吗？此操作不可恢复。')) {
            lists.forEach(list => {
                const sectionId = `${wordbookId}_list_${list.id}`
                localStorage.removeItem(`bunny_words_progress_${wordbookId}_${sectionId}`)
            })
            window.location.reload()
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">单词列表</h2>
                <Button
                    variant="ghost"
                    onClick={handleResetProgress}
                    className="text-muted-foreground hover:text-[#E85D75] hover:bg-[#FFF0F3] gap-2 cursor-pointer"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12" />
                        <path d="M3 3v9h9" />
                    </svg>
                    重置进度
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {lists.map((list) => {
                    const stats = listStats[list.id] || { learned: 0, reviewNeeded: 0, total: 50, completed: false, previewWords: [], allWords: [] }
                    // Construct the dynamic section ID
                    const sectionId = `${wordbookId}_list_${list.id}`

                    return (
                        <Card
                            key={list.id}
                            className={`border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white rounded-2xl overflow-hidden group ${stats.completed ? 'opacity-50' : ''
                                }`}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-lg font-bold text-foreground">
                                            {list.name}
                                        </h3>
                                        {stats.reviewNeeded > 0 && (
                                            <span className="px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-medium rounded-full flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></span>
                                                需复习 {stats.reviewNeeded} 词
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground bg-gray-50 px-3 py-1 rounded-full">
                                        {stats.learned} / {stats.total} 词
                                    </span>
                                </div>

                                {/* Preview Words */}
                                <div className="mb-4">
                                    <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider flex justify-between">
                                        <span>预览单词</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {stats.previewWords.map((word, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-gray-50 text-foreground text-sm rounded-lg border border-gray-100 group-hover:border-pink-100 transition-colors"
                                            >
                                                {word}
                                            </span>
                                        ))}
                                        <button
                                            onClick={() => {
                                                setSelectedListWords(stats.allWords || [])
                                                setSelectedListName(list.name)
                                                setShowAllWordsModal(true)
                                            }}
                                            className="px-3 py-1.5 text-[#E85D75] text-sm font-medium hover:bg-[#FFF0F3] rounded-lg transition-colors cursor-pointer"
                                        >
                                            查看全部
                                        </button>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-4 gap-3">
                                    <Link href={`/wordbook/${wordbookId}/study/${sectionId}?mode=flashcard`} className="contents">
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-[#FFF5F8] hover:bg-[#FFE4E9] text-[#E85D75] border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none relative overflow-hidden cursor-pointer"
                                        >
                                            {stats.reviewNeeded > 0 && (
                                                <div className="absolute top-0 right-0 w-2 h-2 bg-orange-400 rounded-full -mr-1 -mt-1"></div>
                                            )}
                                            记忆卡片
                                        </Button>
                                    </Link>
                                    <Link href={`/wordbook/${wordbookId}/study/${sectionId}?mode=dictation`} className="contents">
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            听写大师
                                        </Button>
                                    </Link>
                                    <Link href={`/wordbook/${wordbookId}/study/${sectionId}?mode=choice`} className="contents">
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            词义选择
                                        </Button>
                                    </Link>
                                    <Link href={`/wordbook/${wordbookId}/study/${sectionId}?mode=matching`} className="contents">
                                        <Button
                                            variant="secondary"
                                            className="w-full bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            连连看
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* All Words Modal */}
            {showAllWordsModal && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowAllWordsModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-foreground">
                                {selectedListName} - 全部单词
                            </h3>
                            <button
                                onClick={() => setShowAllWordsModal(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="overflow-y-auto max-h-[calc(80vh-80px)] p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedListWords.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-4 bg-gray-50 rounded-xl hover:bg-[#FFF5F8] transition-colors border border-gray-100 hover:border-pink-100"
                                    >
                                        <div className="font-bold text-lg text-foreground mb-1">
                                            {item.word}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {item.translation}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
