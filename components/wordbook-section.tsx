'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

const categories = [
  { id: 'studying', name: '在学' },
  { id: 'cet4', name: '四级' },
  { id: 'cet6', name: '六级' },
  { id: 'kaoyan', name: '考研' },
  { id: 'zhuanshengben', name: '专升本' },
  { id: 'yingzhuan', name: '英专' },
  { id: 'ielts', name: '雅思' },
  { id: 'toefl', name: '托福' },
  { id: 'highschool', name: '高中' },
  { id: 'middleschool', name: '初中' },
  { id: 'primary', name: '小学' },
]

const wordbooksByCategory: Record<
  string,
  Array<{
    id: string
    name: string
    subtitle?: string
    words: number
    hasImage?: boolean
    image?: string
    progress?: number
  }>
> = {
  studying: [
    { id: 'yingzhuan-4', name: '英专四级', subtitle: '正序版', words: 3974, progress: 45 },
    { id: 'cet6-1', name: '六级必备词汇', subtitle: '正序版', words: 3200, progress: 100 },
    { id: 'kaoyan-1', name: '考研核心词汇', subtitle: '正序版', words: 5500, progress: 12 },
  ],
  cet4: [
    { id: 'cet4-1', name: '四级核心词汇', subtitle: '正序版', words: 2500, hasImage: true, image: '/cet4-wordbook-cover.png', progress: 0 },
    { id: 'cet4-2', name: '四级高频词汇', subtitle: '乱序版', words: 1800, progress: 0 },
    { id: 'cet4-3', name: '四级真题词汇', subtitle: '2020-2024', words: 2200, progress: 0 },
  ],
  cet6: [
    { id: 'cet6-1', name: '六级必备词汇', subtitle: '正序版', words: 3200, progress: 100 },
    { id: 'cet6-2', name: '六级高频词汇', subtitle: '乱序版', words: 2400, progress: 0 },
  ],
  kaoyan: [
    { id: 'kaoyan-1', name: '考研核心词汇', subtitle: '正序版', words: 5500, progress: 12 },
    { id: 'kaoyan-2', name: '考研真题词汇', subtitle: '2020-2024', words: 4800, progress: 0 },
  ],
  zhuanshengben: [
    { id: 'zhuanshengben-1', name: '专升本必备词汇', subtitle: '正序版', words: 3800, progress: 0 },
  ],
  yingzhuan: [
    { id: 'yingzhuan-4', name: '英专四级', subtitle: '正序版', words: 3974, progress: 45 },
    { id: 'yingzhuan-8', name: '英专八级', subtitle: '正序版', words: 12197, progress: 0 },
    {
      id: 'yingzhuan-zhang',
      name: '张汉熙《高级英语》',
      subtitle: '1-2册',
      words: 1915,
      hasImage: true,
      progress: 0,
    },
  ],
  ielts: [
    { id: 'ielts-1', name: '雅思核心词汇', subtitle: '正序版', words: 3500, progress: 0 },
    { id: 'ielts-2', name: '雅思听力词汇', subtitle: '分类版', words: 2100, progress: 0 },
  ],
  toefl: [
    { id: 'toefl-1', name: '托福必背单词', subtitle: '正序版', words: 4000, progress: 0 },
    { id: 'toefl-2', name: '托福分类词汇', subtitle: '学科版', words: 3600, progress: 0 },
  ],
  highschool: [
    { id: 'pep-senior', name: '人教版高中英语', subtitle: '新课标', words: PEP_SENIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'nse-senior', name: '外研社版高中英语', subtitle: '新标准', words: NSE_SENIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'shanghai-senior', name: '沪教版高中英语', subtitle: '牛津上海版', words: SHANGHAI_SENIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'gaokao', name: '高考英语大纲词汇', subtitle: '3500词 乱序版', words: GAOKAO_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'gaokao-highfreq', name: '高考英语高频词汇', subtitle: '核心版', words: GAOKAO_HIGHFREQ_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
  ],
  middleschool: [
    { id: 'pep-junior', name: '人教版初中英语', subtitle: 'Go for it!', words: PEP_JUNIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'nse-junior', name: '外研社版初中英语', subtitle: '新标准', words: NSE_JUNIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'shanghai-junior', name: '沪教版初中英语', subtitle: '牛津上海版', words: SHANGHAI_JUNIOR_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
  ],
  primary: [
    { id: 'pep-primary', name: '人教版小学英语', subtitle: '三年级起点', words: PEP_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'shanghai-primary', name: '沪教版小学英语', subtitle: '一年级起点', words: SHANGHAI_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'nse-primary', name: '外研社版小学英语', subtitle: '三年级起点', words: NSE_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
    { id: 'yilin-primary', name: '苏教版小学英语', subtitle: '三年级起点', words: YILIN_WORDBOOK.totalWords, hasImage: true, image: '/primary-wordbook-cover.png', progress: 0 },
  ],
}

import { getWordbookStats } from '@/lib/utils/wordbook-manager'
import { isUserLoggedIn } from '@/lib/utils/auth-manager'
import { PEP_WORDBOOK } from '@/lib/data/pep-primary-words'
import { SHANGHAI_WORDBOOK } from '@/lib/data/shanghai-primary-words'
import { NSE_WORDBOOK } from '@/lib/data/nse-primary-words'
import { YILIN_WORDBOOK } from '@/lib/data/yilin-primary-words'
import { PEP_JUNIOR_WORDBOOK } from '@/lib/data/pep-junior-words'
import { NSE_JUNIOR_WORDBOOK } from '@/lib/data/nse-junior-words'
import { SHANGHAI_JUNIOR_WORDBOOK } from '@/lib/data/shanghai-junior-words'
import { PEP_SENIOR_WORDBOOK } from '@/lib/data/pep-senior-words'
import { NSE_SENIOR_WORDBOOK } from '@/lib/data/nse-senior-words'
import { SHANGHAI_SENIOR_WORDBOOK } from '@/lib/data/shanghai-senior-words'
import { GAOKAO_WORDBOOK } from '@/lib/data/gaokao-words'
import { GAOKAO_HIGHFREQ_WORDBOOK } from '@/lib/data/gaokao-highfreq-words'

// ... (keep existing imports and constants)

export function WordbookSection() {
  const [selectedCategory, setSelectedCategory] = useState('studying')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [bookStats, setBookStats] = useState<Record<string, number>>({})

  useEffect(() => {
    // 使用新的认证管理工具检查登录状态
    setIsLoggedIn(isUserLoggedIn())

    // 监听登出事件
    const handleLogout = () => {
      setIsLoggedIn(false)
    }

    window.addEventListener('bunny_user_logout', handleLogout)

    return () => {
      window.removeEventListener('bunny_user_logout', handleLogout)
    }
  }, [])

  const updateBookStats = () => {
    const stats: Record<string, number> = {}

    // Iterate through all categories and books
    Object.values(wordbooksByCategory).flat().forEach(book => {
      // Map homepage book IDs to actual wordbook IDs
      const WORDBOOK_ID_MAP: Record<string, string> = {
        'pep-primary': 'pep_primary_wordbook',
        'shanghai-primary': 'shanghai_primary_wordbook',
        'nse-primary': 'nse_primary_wordbook',
        'yilin-primary': 'yilin_primary_wordbook',
        'pep-junior': 'pep_junior_wordbook',
        'nse-junior': 'nse_junior_wordbook',
        'shanghai-junior': 'shanghai_junior_wordbook',
        'pep-senior': 'pep_senior_wordbook',
        'nse-senior': 'nse_senior_wordbook',
        'shanghai-senior': 'shanghai_senior_wordbook',
        'gaokao': 'gaokao_wordbook',
        'gaokao-highfreq': 'gaokao_highfreq_wordbook',
        'cet4-1': 'cet4_wordbook',
        'cet6-1': 'cet6_wordbook',
      }

      const actualId = WORDBOOK_ID_MAP[book.id]
      if (actualId) {
        const wordbookStats = getWordbookStats(actualId)
        if (wordbookStats && wordbookStats.totalWords > 0) {
          // Calculate progress percentage: learned / total
          const progress = Math.round((wordbookStats.learnedWords / wordbookStats.totalWords) * 100)
          stats[book.id] = progress
        }
      }
    })

    setBookStats(stats)
  }

  useEffect(() => {
    updateBookStats()

    // Listen for updates
    window.addEventListener('bunny_words_progress_updated', updateBookStats)
    window.addEventListener('bunny_user_login', updateBookStats)
    window.addEventListener('focus', updateBookStats)

    return () => {
      window.removeEventListener('bunny_words_progress_updated', updateBookStats)
      window.removeEventListener('bunny_user_login', updateBookStats)
      window.removeEventListener('focus', updateBookStats)
    }
  }, [])

  const studyingBooks = useMemo(() => {
    const books: typeof wordbooksByCategory['studying'] = []
    const seenIds = new Set<string>()

    Object.entries(wordbooksByCategory).forEach(([category, categoryBooks]) => {
      if (category === 'studying') return

      categoryBooks.forEach((book) => {
        const progress = bookStats[book.id] || 0
        if (progress > 0 && !seenIds.has(book.id)) {
          books.push({ ...book, progress })
          seenIds.add(book.id)
        }
      })
    })
    return books
  }, [bookStats])

  const visibleCategories = isLoggedIn
    ? categories
    : categories.filter((cat) => cat.id !== 'studying')

  const currentWordbooks = selectedCategory === 'studying'
    ? studyingBooks
    : (wordbooksByCategory[selectedCategory] || [])

  useEffect(() => {
    if (!isLoggedIn && selectedCategory === 'studying') {
      setSelectedCategory('cet4')
    }
  }, [isLoggedIn, selectedCategory])

  return (
    <section className="pt-6 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-14 flex flex-wrap justify-center gap-3 md:gap-4">
          {visibleCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={`rounded-full px-5 py-2.5 md:px-7 min-h-[48px] transition-all duration-300 font-medium text-sm md:text-base cursor-pointer ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-[#FFE4E9] to-[#FFD4DC] text-[#E85D75] hover:shadow-lg hover:shadow-[#FFE4E9]/50 border-[#FFE4E9] scale-105 shadow-md'
                : 'bg-white text-foreground hover:bg-gray-50 hover:border-gray-300 border-gray-200 hover:scale-105 hover:shadow-md'
                }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7 max-w-5xl mx-auto">
          {currentWordbooks.map((book, index) => (
            <Link key={index} href={`/wordbook/${book.id}`} className="cursor-pointer">
              <Card className="group border-2 border-gray-100 transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 hover:border-[#FFE4E9] overflow-hidden h-full cursor-pointer min-h-[90px] bg-white">
                <CardContent className="p-3 md:p-4">
                  <div className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-14 h-18 md:w-16 md:h-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-sm flex items-center justify-center overflow-hidden border border-gray-200 group-hover:shadow-md transition-shadow">
                      {book.hasImage ? (
                        <img
                          src={book.image || "/abstract-book-cover.png"}
                          alt={book.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-1 p-1.5">
                          <div className="w-8 h-6 bg-white rounded-md border-2 border-gray-300 flex items-center justify-center text-[9px] font-bold text-gray-700 shadow-sm">
                            happy
                          </div>
                          <div className="w-8 h-6 bg-white rounded-md border-2 border-gray-300 flex items-center justify-center shadow-sm">
                            <div className="w-3 h-3 bg-gray-800 rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-foreground text-balance mb-0.5 line-clamp-2 group-hover:text-[#E85D75] transition-colors">
                          {book.name}
                        </h3>
                        <p className="text-xs text-muted-foreground/80 mb-1.5 line-clamp-1">
                          {book.subtitle}
                        </p>
                      </div>

                      {/* 只在登录时显示学习进度 */}
                      {isLoggedIn && (
                        <div className="mb-1.5">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                            <span className="font-medium">学习进度</span>
                            <span className="font-semibold text-[#E85D75]">{bookStats[book.id] || book.progress || 0}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                            <div
                              className="h-full bg-gradient-to-r from-[#E85D75] to-[#F7A1B0] rounded-full transition-all duration-500 shadow-sm"
                              style={{ width: `${bookStats[book.id] || book.progress || 0}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <div className={`inline-block px-2.5 py-1 md:px-3 bg-gradient-to-r from-[#FFE4E9] to-[#FFF0F3] text-[#E85D75] text-xs md:text-sm rounded-full self-start font-semibold shadow-sm ${!isLoggedIn ? 'mt-1.5' : ''}`}>
                        {book.words} 词
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {currentWordbooks.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-lg">
            该分类暂无单词书
          </div>
        )}
      </div>
    </section>
  )
}
