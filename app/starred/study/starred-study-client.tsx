'use client'

import { useState, useEffect, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Volume2,
  Lightbulb,
  ChevronRight,
  Star,
  Layers,
  PenTool,
  ListChecks,
  LayoutGrid,
  RotateCcw
} from 'lucide-react'

import { speakWord, speakSentence, stopSpeaking } from '@/lib/utils/text-to-speech'
import type { Word } from '@/lib/types/word'
import { getStarredWords, isWordStarred, toggleStarredWord } from '@/lib/utils/starred-manager'
import { getWordsByIds, getRandomWords } from '@/lib/utils/wordbook-manager'
import confetti from 'canvas-confetti'

// 适配器：将新的Word类型转换为组件使用的格式
interface AdaptedWord {
  id: string | number
  word: string
  pronunciation: string
  definition: string
  example: string
  exampleTranslation: string
}

function adaptWord(word: Word): AdaptedWord {
  return {
    id: word.id,
    word: word.word,
    pronunciation: word.phonetic,
    definition: word.translation,
    example: word.examples?.[0]?.english || '',
    exampleTranslation: word.examples?.[0]?.chinese || ''
  }
}

type StudyMode = 'flashcard' | 'dictation' | 'choice' | 'matching'

interface StarredStudyClientProps {
  mode: string
}

export default function StarredStudyClient({ mode: initialMode }: StarredStudyClientProps) {
  const router = useRouter()
  const mode = initialMode as StudyMode

  // 加载真实单词数据
  const words = useMemo(() => {
    const ids = getStarredWords()
    const rawWords = getWordsByIds(ids)
    return rawWords.map(adaptWord)
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState('')
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isStarred, setIsStarred] = useState(false)
  const [currentOptions, setCurrentOptions] = useState<string[]>([])
  const [matchingItems, setMatchingItems] = useState<{ text: string, type: 'en' | 'cn', id: string | number }[]>([])
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null)
  const [matchedIndices, setMatchedIndices] = useState<number[]>([])
  const [showHint, setShowHint] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [wordResults, setWordResults] = useState<Array<{
    word: AdaptedWord
    isCorrect: boolean
  }>>([])
  const [starredIds, setStarredIds] = useState<Set<string>>(new Set())

  // Initialize starredIds when showing results
  useEffect(() => {
    if (showResults) {
      const ids = new Set<string>()
      wordResults.forEach(r => {
        if (isWordStarred(r.word.id)) {
          ids.add(String(r.word.id))
        }
      })
      setStarredIds(ids)
    }
  }, [showResults, wordResults])

  const currentWord = words[currentIndex]
  const progress = currentIndex + 1
  const total = words.length
  const accuracy = correctCount + wrongCount > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0

  // Sync star state with localStorage when word changes
  useEffect(() => {
    if (currentWord) {
      setIsStarred(isWordStarred(currentWord.id))
    }
  }, [currentWord])

  // Reset state when mode or word changes
  useEffect(() => {
    resetState()
  }, [currentIndex, mode, words])

  // Auto-play audio
  useEffect(() => {
    if (currentWord && (mode === 'flashcard' || mode === 'dictation' || mode === 'choice')) {
      // Small delay to ensure UI is ready
      const timer = setTimeout(() => {
        speakWord(currentWord.word)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [currentWord, mode])

  // Cleanup speech
  useEffect(() => {
    return () => {
      stopSpeaking()
    }
  }, [])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === 'flashcard') {
        if (e.code === 'Space') {
          e.preventDefault()
          setShowAnswer(prev => !prev)
        } else if (e.code === 'ArrowRight') {
          handleNext()
        } else if (e.code === 'ArrowLeft') {
          handlePrevious()
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mode, currentIndex, words.length])

  // Confetti effect
  useEffect(() => {
    if (showResults) {
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      const randomInRange = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#E85D75', '#FF9A9E', '#FECFEF', '#FFD6E0']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#E85D75', '#FF9A9E', '#FECFEF', '#FFD6E0']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [showResults])

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const resetState = () => {
    setUserInput('')
    setSelectedOption(null)
    setShowAnswer(false)
    setSelectedItemIndex(null)
    setMatchedIndices([])
    setShowHint(false)

    if (!currentWord) return

    // 为选择题模式生成选项
    if (mode === 'choice') {
      // 获取3个干扰项
      const distractors = getRandomWords(3, { excludeIds: [currentWord.id] })
      const allOptions = [
        currentWord.definition,
        ...distractors.map(w => w.translation)
      ]
      // 打乱选项顺序
      for (let i = allOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]]
      }
      setCurrentOptions(allOptions)
    }

    // 为连连看模式生成数据 (仅在初始化或重新开始时)
    if (mode === 'matching' && matchingItems.length === 0) {
      // 获取6个单词用于匹配
      const startIndex = currentIndex % (words.length - 5 > 0 ? words.length - 5 : 1);
      const gameWords = words.slice(startIndex, startIndex + 6);

      // If not enough words, take from the beginning
      if (gameWords.length < 6 && words.length >= 6) {
        const remaining = 6 - gameWords.length;
        gameWords.push(...words.slice(0, remaining));
      } else if (words.length < 6) {
        // If total words are less than 6, use all available words
        gameWords.push(...words);
      }

      const items: { text: string, type: 'en' | 'cn', id: string | number }[] = []

      gameWords.forEach(w => {
        items.push({ text: w.word, type: 'en', id: w.id })
        items.push({ text: w.definition, type: 'cn', id: w.id })
      })

      // 打乱顺序
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]]
      }
      setMatchingItems(items)
    }
  }

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      // End of list reached
      if (mode === 'matching') {
        setCurrentIndex(0); // Loop back to start for continuous matching practice
        setMatchingItems([]); // Force regeneration of matching items
      } else if (mode === 'flashcard') {
        // For flashcard mode, return to list page immediately
        router.push('/starred')
      } else {
        // For test modes (dictation, choice), show results page
        setShowResults(true)
      }
    }
  }

  const handlePlayAudio = () => {
    if (!currentWord) return
    speakWord(currentWord.word, {
      slow: false,
      repeat: 1
    })
  }

  const handleCardFlip = () => {
    setShowAnswer(!showAnswer)
  }

  const handleToggleStar = () => {
    if (!currentWord) return
    const newStarredState = toggleStarredWord(currentWord.id)
    setIsStarred(newStarredState)
  }

  // Anki Rating Handler (Simplified for Starred Words - just tracking counts)
  const handleRating = (rating: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentWord) return

    if (rating === 'again') {
      setWrongCount(wrongCount + 1)
    } else {
      setCorrectCount(correctCount + 1)
    }

    handleNext()
  }

  // Dictation Logic
  const handleDictationSubmit = () => {
    const isCorrect = userInput.toLowerCase().trim() === currentWord.word.toLowerCase()

    // Record result for this word
    setWordResults(prev => [...prev, { word: currentWord, isCorrect }])

    if (isCorrect) {
      setCorrectCount(correctCount + 1)
    } else {
      setWrongCount(wrongCount + 1)
    }
    setTimeout(handleNext, 1000)
  }

  // Choice Logic
  const handleChoiceSubmit = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    const selectedText = currentOptions[optionIndex]
    const isCorrect = selectedText === currentWord.definition

    // Record result for this word
    setWordResults(prev => [...prev, { word: currentWord, isCorrect }])

    if (isCorrect) {
      setCorrectCount(correctCount + 1)
    } else {
      setWrongCount(wrongCount + 1)
    }
    setTimeout(handleNext, 1000)
  }

  // Matching Logic
  const handleMatchingClick = (index: number) => {
    if (matchedIndices.includes(index) || selectedItemIndex === index) return

    if (selectedItemIndex === null) {
      setSelectedItemIndex(index)
      const item = matchingItems[index]
      if (item.type === 'en') {
        speakWord(item.text)
      }
      return
    }

    const firstItem = matchingItems[selectedItemIndex]
    const secondItem = matchingItems[index]

    if (firstItem.id === secondItem.id) {
      setMatchedIndices([...matchedIndices, selectedItemIndex, index])
      setSelectedItemIndex(null)
      setCorrectCount(correctCount + 1)

      if (matchedIndices.length + 2 >= matchingItems.length) {
        setTimeout(() => {
          setMatchingItems([])
          setMatchedIndices([])
          handleNext()
        }, 1000)
      }
    } else {
      setSelectedItemIndex(index)
      setWrongCount(wrongCount + 1)
      if (secondItem.type === 'en') {
        speakWord(secondItem.text)
      }
    }
  }

  // Render Components
  const renderHeader = () => (
    <div className="bg-white">
      <div className="container mx-auto px-4 h-14 flex items-center">
        <Link
          href="/starred"
          className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>返回列表</span>
        </Link>
      </div>
    </div>
  )

  const renderModeSelector = () => (
    <div className="bg-white pb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-8 md:gap-16">
          {[
            { icon: Layers, name: '记忆卡片', value: 'flashcard' },
            { icon: PenTool, name: '听写大师', value: 'dictation' },
            { icon: ListChecks, name: '词义选择', value: 'choice' },
            { icon: LayoutGrid, name: '连连看', value: 'matching' },
          ].map((item) => (
            <Link
              key={item.value}
              href={`/starred/study?mode=${item.value}`}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${mode === item.value
                ? 'bg-[#FFF0F3] border-[#E85D75] text-[#E85D75]'
                : 'bg-white border-gray-200 text-gray-500 group-hover:border-[#E85D75]/50 group-hover:text-[#E85D75]/70'
                }`}>
                <item.icon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <span className={`text-xs font-medium ${mode === item.value ? 'text-[#E85D75]' : 'text-gray-500'
                }`}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )

  const renderProgressBar = () => (
    <div className="bg-white pb-6">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>
            {mode === 'flashcard' ? '记忆进度' :
              mode === 'dictation' ? '听写进度' :
                '测试进度'}
          </span>
          <span>{progress} / {total}</span>
        </div>
        <div className="h-1.5 bg-[#FFF0F3] rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-300"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )

  const renderFlashcard = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-[500px]">
      <div className="perspective-1000 w-full max-w-xl">
        <div
          className="relative w-full aspect-[4/3] transition-transform duration-500 transform-style-3d cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transform: showAnswer ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
          onClick={handleCardFlip}
        >
          {/* Front of Card */}
          <Card
            className="absolute inset-0 bg-white rounded-3xl shadow-lg border-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="h-full flex flex-col items-center justify-center p-8 relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleToggleStar()
                }}
                className="absolute top-6 right-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer z-10"
              >
                <Star className={`w-6 h-6 ${isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                  {currentWord.word}
                </h2>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlayAudio()
                  }}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                >
                  <Volume2 className="w-6 h-6 text-gray-400 hover:text-[#E85D75]" />
                </button>
              </div>

              <div className="text-sm text-gray-400">
                (点击卡片或按空格键查看答案)
              </div>
            </div>
          </Card>

          {/* Back of Card */}
          <Card
            className="absolute inset-0 bg-white rounded-3xl shadow-lg border-0 backface-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="h-full flex flex-col p-6 relative">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleToggleStar()
                }}
                className="absolute top-6 right-6 text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer z-10"
              >
                <Star className={`w-6 h-6 ${isStarred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </button>

              {/* Word & Pronunciation */}
              <div className="text-center mb-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {currentWord.word}
                </h2>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                  <span className="font-mono text-sm">{currentWord.pronunciation}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePlayAudio()
                    }}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Definition */}
              <div className="mb-4 text-center">
                <p className="text-lg text-gray-800 font-medium">
                  {currentWord.definition}
                </p>
              </div>

              {/* Example Section */}
              <div className="bg-[#FFF5F8] rounded-xl p-3 mb-4 flex-shrink-0">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-[#E85D75] font-bold text-xs mt-0.5">EN</span>
                  <p className="text-gray-700 leading-relaxed text-sm flex-1">
                    {currentWord.example}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      speakSentence(currentWord.example)
                    }}
                    className="p-1 hover:bg-white/60 rounded-full transition-colors cursor-pointer flex-shrink-0"
                    title="播放例句"
                  >
                    <Volume2 className="w-3.5 h-3.5 text-[#E85D75]" />
                  </button>
                </div>
                <div className="flex items-start gap-2 border-t border-[#FFD6E0] pt-2 mt-2">
                  <span className="text-[#E85D75] font-bold text-xs mt-0.5">CN</span>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {currentWord.exampleTranslation}
                  </p>
                </div>
              </div>

              {/* Rating Buttons - Inside Card */}
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col gap-1">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRating('again')
                      }}
                      variant="outline"
                      className="h-10 border-2 border-red-100 hover:border-red-200 hover:bg-red-50 text-red-600 font-medium rounded-lg cursor-pointer text-xs"
                    >
                      忘记
                    </Button>
                    <span className="text-[9px] text-center text-gray-400 font-medium uppercase">1m</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRating('hard')
                      }}
                      variant="outline"
                      className="h-10 border-2 border-orange-100 hover:border-orange-200 hover:bg-orange-50 text-orange-600 font-medium rounded-lg cursor-pointer text-xs"
                    >
                      模糊
                    </Button>
                    <span className="text-[9px] text-center text-gray-400 font-medium uppercase">10m</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRating('good')
                      }}
                      variant="outline"
                      className="h-10 border-2 border-green-100 hover:border-green-200 hover:bg-green-50 text-green-600 font-medium rounded-lg cursor-pointer text-xs"
                    >
                      认识
                    </Button>
                    <span className="text-[9px] text-center text-gray-400 font-medium uppercase">1d</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRating('easy')
                      }}
                      variant="outline"
                      className="h-10 border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 text-blue-600 font-medium rounded-lg cursor-pointer text-xs"
                    >
                      熟练
                    </Button>
                    <span className="text-[9px] text-center text-gray-400 font-medium uppercase">4d</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderDictation = () => (
    <div className="flex-1 flex flex-col items-center justify-center p-4 min-h-[400px]">
      <div className="w-full max-w-2xl text-center space-y-12">
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {currentWord.definition}
          </h2>
          <button
            onClick={() => handlePlayAudio()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            title="播放发音"
          >
            <Volume2 className="w-6 h-6 text-gray-400 hover:text-[#E85D75]" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowHint(!showHint)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              title="查看提示"
            >
              <Lightbulb className={`w-6 h-6 ${showHint ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`} />
            </button>
            {/* 提示气泡 */}
            {showHint && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 bg-[#E85D75] text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap animate-in fade-in zoom-in-95 duration-200">
                {currentWord.word}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-[#E85D75]"></div>
              </div>
            )}
          </div>
        </div>

        <div className="relative">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleDictationSubmit()
              }
            }}
            className="w-full h-12 text-center text-xl border-0 border-b border-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-gray-900 px-0 bg-transparent"
            placeholder="在此输入单词"
            autoFocus
          />
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => {
              setWrongCount(wrongCount + 1)
              handleNext()
            }}
            variant="secondary"
            className="px-8 py-6 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium cursor-pointer border-0"
          >
            跳过
          </Button>
          <Button
            onClick={handleDictationSubmit}
            className="px-8 py-6 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-medium cursor-pointer shadow-sm"
          >
            下一个
          </Button>
        </div>
      </div>
    </div>
  )

  const renderChoice = () => {
    if (currentOptions.length === 0) return null

    return (
      <div className="flex-1 flex flex-col items-center p-4 min-h-[500px]">
        <div className="mt-8 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {currentWord.word}
            </h2>
            <button
              onClick={() => handlePlayAudio()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              <Volume2 className="w-6 h-6 text-gray-400 hover:text-[#E85D75]" />
            </button>
          </div>
          <div className="text-gray-500 font-mono mt-2">
            {currentWord.pronunciation}
          </div>
        </div>

        <div className="w-full max-w-lg space-y-4">
          {currentOptions.map((option, idx) => {
            const isSelected = selectedOption === idx
            const isCorrect = option === currentWord.definition

            let buttonStyle = 'bg-white border-gray-200 text-gray-700 hover:border-[#E85D75] hover:bg-[#FFF5F8]'

            // 显示答案状态
            if (selectedOption !== null) {
              if (isCorrect) {
                buttonStyle = 'bg-green-50 border-green-500 text-green-700'
              } else if (isSelected && !isCorrect) {
                buttonStyle = 'bg-red-50 border-red-500 text-red-700'
              } else {
                buttonStyle = 'bg-gray-50 border-gray-200 text-gray-400'
              }
            }

            return (
              <button
                key={idx}
                onClick={() => selectedOption === null && handleChoiceSubmit(idx)}
                disabled={selectedOption !== null}
                className={`w-full p-4 text-left border rounded-xl transition-all duration-200 cursor-pointer font-medium ${buttonStyle}`}
              >
                {option}
              </button>
            )
          })}
        </div>

        <div className="mt-12">
          <Button
            onClick={handleNext}
            className="px-8 py-6 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-500 font-medium cursor-pointer shadow-sm gap-2 min-w-[160px]"
          >
            下一个 <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  }

  const renderMatching = () => {
    if (matchingItems.length === 0) return null

    return (
      <div className="flex-1 p-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {matchingItems.map((item, idx) => {
              const isMatched = matchedIndices.includes(idx)
              const isSelected = selectedItemIndex === idx

              let cardStyle = ''
              if (isMatched) {
                cardStyle = 'opacity-0 cursor-default pointer-events-none'
              } else if (isSelected) {
                cardStyle = 'bg-[#E85D75] text-white shadow-lg scale-105 ring-4 ring-[#FFD6E0]'
              } else {
                cardStyle = item.type === 'en'
                  ? 'bg-[#F0F7FF] text-blue-600 hover:bg-[#E0EFFF] hover:scale-[1.02]'
                  : 'bg-[#FFF9E6] text-[#D97706] hover:bg-[#FFF0B3] hover:scale-[1.02]'
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleMatchingClick(idx)}
                  disabled={isMatched}
                  className={`p-4 h-24 rounded-xl flex items-center justify-center text-center text-sm font-medium transition-all duration-300 cursor-pointer ${cardStyle}`}
                >
                  {item.text}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderBottomStats = () => (
    <div className="bg-white border-t py-6 mt-auto">
      <div className="container mx-auto max-w-4xl flex items-center justify-center gap-12 md:gap-24">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-medium text-blue-500">{correctCount}</div>
          <div className="text-xs text-gray-400 mt-1">
            {mode === 'matching' ? '最高连击' : '正确'}
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-medium text-red-500">{wrongCount}</div>
          <div className="text-xs text-gray-400 mt-1">错误</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-medium text-gray-400">{accuracy}%</div>
          <div className="text-xs text-gray-400 mt-1">正确率</div>
        </div>
        <Button
          onClick={() => setShowResults(true)}
          className="bg-[#FFF0F3] hover:bg-[#FFE4E9] text-[#E85D75] border border-[#FFD6E0] rounded-lg px-6 py-2 h-auto text-sm font-medium cursor-pointer shadow-none"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          结束测试
        </Button>
      </div>
    </div>
  )

  // Results Page
  const renderResults = () => (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      {renderHeader()}

      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="p-6 md:p-8 max-w-3xl w-full bg-white rounded-3xl shadow-lg border-0">
          {/* Title */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              🎉 测试完成！
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            {/* Correct */}
            <div className="text-center p-4 md:p-6 bg-[#E8F5E9] rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#4CAF50] mb-1">{correctCount}</div>
              <div className="text-xs md:text-sm font-medium text-[#4CAF50]/70">正确</div>
            </div>

            {/* Wrong */}
            <div className="text-center p-4 md:p-6 bg-[#FFEBEE] rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#F44336] mb-1">{wrongCount}</div>
              <div className="text-xs md:text-sm font-medium text-[#F44336]/70">错误</div>
            </div>

            {/* Accuracy */}
            <div className="text-center p-4 md:p-6 bg-[#E3F2FD] rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-[#2196F3] mb-1">{accuracy}%</div>
              <div className="text-xs md:text-sm font-medium text-[#2196F3]/70">正确率</div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="mb-6">
            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">详细结果</h3>
            <div className="max-h-96 overflow-y-auto p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[...wordResults]
                  .sort((a, b) => (a.isCorrect === b.isCorrect ? 0 : a.isCorrect ? 1 : -1))
                  .map((result, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2 md:gap-3 p-3 rounded-xl border transition-all ${result.isCorrect
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                        }`}
                    >
                      {/* Status Icon */}
                      <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center ${result.isCorrect ? 'bg-green-500' : 'bg-red-500'
                        }`}>
                        {result.isCorrect ? (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        )}
                      </div>

                      {/* Word Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-base md:text-lg text-gray-900">{result.word.word}</span>
                          <button
                            onClick={() => speakWord(result.word.word)}
                            className="p-1 hover:bg-white/60 rounded-full transition-colors flex-shrink-0"
                          >
                            <Volume2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 truncate">{result.word.definition}</div>
                      </div>

                      {/* Star Button */}
                      <button
                        onClick={() => {
                          const idStr = String(result.word.id)
                          const newStarred = toggleStarredWord(result.word.id)
                          setStarredIds(prev => {
                            const next = new Set(prev)
                            if (newStarred) {
                              next.add(idStr)
                            } else {
                              next.delete(idStr)
                            }
                            return next
                          })
                        }}
                        className="flex-shrink-0 p-1.5 hover:bg-white/60 rounded-full transition-colors"
                      >
                        {starredIds.has(String(result.word.id)) ? (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#FBC02D" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ) : (
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        )}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={() => {
                setShowResults(false)
                setCurrentIndex(0)
                setCorrectCount(0)
                setWrongCount(0)
                setWordResults([])
                setStarredIds(new Set())
              }}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 h-12 rounded-xl font-medium"
            >
              再测一次
            </Button>
            <Button
              onClick={() => router.push('/starred')}
              className="flex-1 bg-gradient-to-r from-[#E85D75] to-[#FF9A9E] hover:opacity-90 text-white h-12 rounded-xl font-medium"
            >
              返回列表
            </Button>
          </div>
        </Card>
      </div >
    </div >
  )

  if (!words || words.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
        {renderHeader()}
        <div className="flex-1 flex items-center justify-center p-8">
          <Card className="p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              📚 暂无星标单词
            </h2>
            <p className="text-gray-600 mb-4">
              您还没有收藏任何单词，快去学习并收藏吧！
            </p>
            <Link href="/">
              <Button className="bg-[#E85D75] hover:bg-[#D54D65]">
                去学习
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    )
  }

  if (showResults) {
    return renderResults()
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col font-sans">
      {renderHeader()}
      {renderModeSelector()}
      {renderProgressBar()}

      <div className="flex-1 flex flex-col">
        {mode === 'flashcard' && renderFlashcard()}
        {mode === 'dictation' && renderDictation()}
        {mode === 'choice' && renderChoice()}
        {mode === 'matching' && renderMatching()}
      </div>

      {mode !== 'flashcard' && renderBottomStats()}
    </div>
  )
}
