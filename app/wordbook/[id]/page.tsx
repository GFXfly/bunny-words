

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getWordbookById } from '@/lib/utils/wordbook-manager'
import { WordbookList } from './wordbook-list'
import { WordbookStats } from './wordbook-stats'

export default async function WordbookPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // ID Mapping to handle URL aliases
  const WORDBOOK_ID_MAP: Record<string, string> = {
    'primary': 'primary_wordbook',
    'primary-1': 'primary_wordbook',
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
    'xiaoxue': 'primary_wordbook',
    'cet4': 'cet4_wordbook',
    'cet4-1': 'cet4_wordbook',
    'cet6': 'cet6_wordbook',
    'cet6-1': 'cet6_wordbook',
  }

  const actualId = WORDBOOK_ID_MAP[id] || id

  // Get real wordbook data
  const wordbook = getWordbookById(actualId)

  if (!wordbook) {
    return <div>Wordbook not found</div>
  }

  const totalWords = wordbook.totalWords

  // Determine lists/sections to display
  let lists: { id: string | number; name: string; startIndex?: number; endIndex?: number; wordCount?: number }[] = []

  // For all curriculum-based wordbooks (Primary, Junior, Senior), use their predefined sections
  const curriculumWordbooks = [
    'pep_primary_wordbook', 'shanghai_primary_wordbook', 'nse_primary_wordbook', 'yilin_primary_wordbook',
    'pep_junior_wordbook', 'nse_junior_wordbook', 'shanghai_junior_wordbook',
    'pep_senior_wordbook', 'nse_senior_wordbook', 'shanghai_senior_wordbook',
    'gaokao_wordbook', 'gaokao_highfreq_wordbook'
  ]

  if (curriculumWordbooks.includes(actualId)) {
    lists = wordbook.sections.map(section => ({
      id: section.id,
      name: section.name,
      wordCount: section.wordIds.length
    }))
  } else {
    // For other wordbooks, generate lists (50 words per list)
    const pageSize = 50
    const totalLists = Math.ceil(totalWords / pageSize)
    lists = Array.from({ length: totalLists }, (_, i) => ({
      id: i + 1,
      name: `List ${i + 1}`,
      startIndex: i * pageSize,
      endIndex: Math.min((i + 1) * pageSize, totalWords),
      wordCount: Math.min((i + 1) * pageSize, totalWords) - (i * pageSize)
    }))
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      {/* Header - White to match homepage */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#E85D75] transition-colors cursor-pointer group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">返回首页</span>
          </Link>

          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg md:text-xl font-bold text-foreground">
            {wordbook.name}
          </h1>

          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 md:gap-12 mb-12">
          {/* Left: Starred/Cover */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-foreground">生词本</h2>
            <Link href={`/starred?fromWordbook=${id}`} className="block">
              <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                <img
                  src="/starred-words-cover.png"
                  alt="生词本"
                  className="w-full h-full object-cover"
                />
                {/* Star Icon Overlay */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#FBC02D] shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Right: Stats */}
          <WordbookStats
            wordbookId={wordbook.id}
            totalWords={totalWords}
            lists={lists}
          />
        </div>

        {/* Word List Section */}
        <WordbookList
          wordbookId={wordbook.id}
          lists={lists}
        />
      </div>
    </div>
  )
}
