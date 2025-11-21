'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getStarredWords, removeStarredWord } from '@/lib/utils/starred-manager'
import { getWordsByIds } from '@/lib/utils/wordbook-manager'
import { Word } from '@/lib/types/word'

interface StarredWordsClientProps {
    fromWordbook?: string
}

export default function StarredWordsClient({ fromWordbook }: StarredWordsClientProps) {
    const [words, setWords] = useState<Word[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadWords = () => {
            const starredIds = getStarredWords()
            const starredWords = getWordsByIds(starredIds)
            setWords(starredWords)
            setIsLoading(false)
        }

        loadWords()

        // Listen for updates (in case user unstars in study mode)
        window.addEventListener('focus', loadWords)
        return () => window.removeEventListener('focus', loadWords)
    }, [])

    const handleRemoveWord = (wordId: string | number) => {
        removeStarredWord(wordId)
        setWords(words.filter((w) => w.id !== wordId))
    }

    const returnUrl = fromWordbook ? `/wordbook/${fromWordbook}` : '/'
    const returnText = fromWordbook ? '返回词书' : '返回首页'
    const studyUrlParams = fromWordbook ? `&fromWordbook=${fromWordbook}` : ''

    return (
        <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
            <header className="bg-white border-b border-gray-100 py-3 md:py-4 sticky top-0 z-50">
                <div className="container mx-auto px-4 md:px-6 flex items-center relative">
                    <Link
                        href={returnUrl}
                        className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#E85D75] transition-colors cursor-pointer"
                    >
                        <span className="text-lg">←</span>
                        <span>{returnText}</span>
                    </Link>
                    <h1 className="absolute left-1/2 -translate-x-1/2 text-base md:text-lg font-bold text-gray-900">
                        生词本
                    </h1>
                </div>
            </header>

            <div className="flex-1 container mx-auto px-4 md:px-6 py-6 md:py-8 max-w-5xl">

                {/* Summary Card with Study Actions */}
                <Card className="mb-8 border-none shadow-sm bg-white rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            {/* Cover Image */}
                            <div className="flex-shrink-0">
                                <div className="relative aspect-[3/4] w-32 md:w-40 rounded-xl overflow-hidden shadow-lg shadow-pink-100">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                                    <img
                                        src="/starred-words-cover.png"
                                        alt="生词本"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Star Icon Overlay */}
                                    <div className="absolute top-3 right-3 z-20 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#FBC02D] shadow-md">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">我的生词本</h2>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <span className="px-2.5 py-0.5 bg-[#FFF0F3] text-[#E85D75] rounded-full text-xs font-medium">
                                            {words.length} 词
                                        </span>
                                        <span className="text-sm">重点复习，扫除盲点</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-4 gap-3 w-full md:w-auto">
                                    <Link href={`/starred/study?mode=flashcard${studyUrlParams}`} className="contents">
                                        <Button
                                            variant="secondary"
                                            disabled={words.length === 0}
                                            className="flex-1 bg-[#FFF5F8] hover:bg-[#FFE4E9] text-[#E85D75] border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none relative overflow-hidden cursor-pointer"
                                        >
                                            记忆卡片
                                        </Button>
                                    </Link>
                                    <Link href={`/starred/study?mode=dictation${studyUrlParams}`} className="contents">
                                        <Button
                                            variant="secondary"
                                            disabled={words.length === 0}
                                            className="flex-1 bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            听写大师
                                        </Button>
                                    </Link>
                                    <Link href={`/starred/study?mode=choice${studyUrlParams}`} className="contents">
                                        <Button
                                            variant="secondary"
                                            disabled={words.length === 0}
                                            className="flex-1 bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            词义选择
                                        </Button>
                                    </Link>
                                    <Link href={`/starred/study?mode=matching${studyUrlParams}`} className="contents">
                                        <Button
                                            variant="secondary"
                                            disabled={words.length === 0}
                                            className="flex-1 bg-gray-50 hover:bg-gray-100 text-foreground border-0 h-10 text-xs md:text-sm font-medium rounded-xl shadow-none cursor-pointer"
                                        >
                                            连连看
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Word List */}
                {isLoading ? (
                    <div className="text-center py-12 text-muted-foreground">加载中...</div>
                ) : words.length === 0 ? (
                    <div className="text-center py-16 text-muted-foreground">
                        <div className="text-4xl mb-4">⭐</div>
                        <p>还没有收藏的单词</p>
                        <p className="text-sm mt-2">在学习过程中点击星号即可收藏</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {words.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-all duration-300 hover:border-pink-100 group"
                            >
                                <div className="flex items-start justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#E85D75] transition-colors">
                                            {item.word}
                                        </h3>
                                        {item.phonetic && (
                                            <span className="text-xs text-muted-foreground font-mono bg-gray-50 px-1.5 py-0.5 rounded">
                                                {item.phonetic}
                                            </span>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleRemoveWord(item.id)}
                                        className="text-[#FBC02D] hover:scale-110 transition-transform cursor-pointer"
                                        title="取消收藏"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600 line-clamp-2">{item.translation}</p>

                                {item.definition && (
                                    <p className="text-xs text-gray-400 mt-2 line-clamp-1">{item.definition}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
