# 词库系统 API 快速参考

## 📚 词库管理 (`wordbook-manager.ts`)

### 获取词书
```typescript
import { getWordbookById, ALL_WORDBOOKS } from '@/lib/utils/wordbook-manager'

// 获取所有词书
const allWordbooks = ALL_WORDBOOKS

// 获取特定词书
const cet4 = getWordbookById('cet4_wordbook')
const cet6 = getWordbookById('cet6_wordbook')
```

### 获取单词
```typescript
import { 
  getWordById, 
  getWordsByIds, 
  getSectionWords 
} from '@/lib/utils/wordbook-manager'

// 通过ID获取单词
const word = getWordById('cet4_001')

// 批量获取单词
const words = getWordsByIds(['cet4_001', 'cet4_002'])

// 获取章节的所有单词
const sectionWords = getSectionWords('cet4_wordbook', 'cet4_section_a')
```

### 搜索单词
```typescript
import { searchWords, getRandomWords } from '@/lib/utils/wordbook-manager'

// 搜索单词
const results = searchWords('abandon', {
  difficulty: 'CET4',  // 可选：按难度过滤
  limit: 10            // 可选：限制结果数量
})

// 获取随机单词
const randomWords = getRandomWords(10, {
  difficulty: 'CET4',           // 可选：按难度过滤
  excludeIds: ['cet4_001']      // 可选：排除特定单词
})
```

### 验证拼写
```typescript
import { validateSpelling } from '@/lib/utils/wordbook-manager'

const result = validateSpelling('abanbon', 'abandon')
console.log(result.isCorrect)    // false
console.log(result.similarity)   // 0.857 (相似度 0-1)
```

### 获取统计信息
```typescript
import { getWordbookStats } from '@/lib/utils/wordbook-manager'

const stats = getWordbookStats('cet4_wordbook')
console.log(stats)
// {
//   totalWords: 20,
//   totalSections: 1,
//   averageWordsPerSection: 20,
//   difficulty: 'CET4'
// }
```

## 🔊 文本转语音 (`text-to-speech.ts`)

### 基础用法
```typescript
import { speakWord, speakSentence, stopSpeaking } from '@/lib/utils/text-to-speech'

// 朗读单词（普通速度）
speakWord('abandon')

// 朗读单词（慢速，重复2次）
speakWord('abandon', {
  slow: true,
  repeat: 2,
  onComplete: () => console.log('完成')
})

// 朗读例句
speakSentence('They had to abandon the car.')

// 停止朗读
stopSpeaking()
```

### 高级用法
```typescript
import { tts } from '@/lib/utils/text-to-speech'

// 自定义朗读参数
tts?.speak('Hello', {
  rate: 0.9,      // 语速 (0.1-10)
  pitch: 1,       // 音调 (0-2)
  volume: 1,      // 音量 (0-1)
  lang: 'en-US',  // 语言
  onEnd: () => console.log('结束'),
  onError: (err) => console.error(err)
})

// 暂停/恢复
tts?.pause()
tts?.resume()

// 检查是否正在朗读
if (tts?.isSpeaking()) {
  console.log('正在朗读...')
}

// 获取可用语音列表
const voices = tts?.getAvailableVoices()
```

## 📝 例句生成 (`example-generator.ts`)

### 从词典API获取例句
```typescript
import { fetchExamplesFromDictionary } from '@/lib/utils/example-generator'

const examples = await fetchExamplesFromDictionary('abandon')
console.log(examples)
// [
//   {
//     english: 'They abandoned the car.',
//     chinese: '',
//     source: 'dictionary'
//   }
// ]
```

### 使用模板生成例句
```typescript
import { generateTemplateExamples } from '@/lib/utils/example-generator'

const examples = generateTemplateExamples('abandon', '放弃', 2)
console.log(examples)
// [
//   {
//     english: 'I need to abandon this task.',
//     chinese: '我需要放弃这个任务。',
//     source: 'template'
//   },
//   ...
// ]
```

### 批量补充例句
```typescript
import { enrichWordsWithExamples } from '@/lib/utils/example-generator'

const words = [
  { word: 'abandon', translation: '放弃', examples: [] },
  { word: 'ability', translation: '能力', examples: [] }
]

await enrichWordsWithExamples(words, {
  useAI: false,           // 是否使用AI生成
  useDictionary: true,    // 是否从词典获取
  minExamples: 1          // 最少例句数
})
```

## 📊 数据类型

### Word 类型
```typescript
interface Word {
  id: string | number
  word: string                  // 单词
  phonetic: string              // 音标（美式）
  phoneticUK?: string           // 英式音标
  translation: string           // 中文释义
  definition?: string           // 英文释义
  examples: Example[]           // 例句列表
  difficulty?: DifficultyLevel  // 难度等级
  frequency?: number            // 词频
  tags?: string[]               // 标签
  synonyms?: string[]           // 同义词
  antonyms?: string[]           // 反义词
}
```

### Example 类型
```typescript
interface Example {
  english: string    // 英文例句
  chinese: string    // 中文翻译
  source?: string    // 来源
}
```

### Wordbook 类型
```typescript
interface Wordbook {
  id: string
  name: string
  description?: string
  coverImage?: string
  difficulty: DifficultyLevel
  totalWords: number
  sections: WordbookSection[]
  createdAt?: Date
  updatedAt?: Date
}
```

## 🎯 常用场景

### 场景1: 学习页面显示单词
```typescript
import { getSectionWords } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

// 获取单词列表
const words = getSectionWords(wordbookId, sectionId)
const [currentIndex, setCurrentIndex] = useState(0)
const currentWord = words[currentIndex]

// 播放发音
const handlePlayAudio = () => {
  speakWord(currentWord.word)
}

// 下一个单词
const handleNext = () => {
  setCurrentIndex(prev => Math.min(prev + 1, words.length - 1))
}
```

### 场景2: 听写模式
```typescript
import { validateSpelling } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

const [userInput, setUserInput] = useState('')

// 播放单词发音
const playWord = () => {
  speakWord(currentWord.word, { slow: true })
}

// 检查拼写
const checkSpelling = () => {
  const result = validateSpelling(userInput, currentWord.word)
  if (result.isCorrect) {
    console.log('正确！')
  } else {
    console.log(`错误，相似度: ${(result.similarity * 100).toFixed(1)}%`)
  }
}
```

### 场景3: 搜索功能
```typescript
import { searchWords } from '@/lib/utils/wordbook-manager'

const [query, setQuery] = useState('')
const [results, setResults] = useState([])

const handleSearch = () => {
  const searchResults = searchWords(query, {
    difficulty: 'CET4',
    limit: 20
  })
  setResults(searchResults)
}
```

### 场景4: 随机练习
```typescript
import { getRandomWords } from '@/lib/utils/wordbook-manager'

const startPractice = () => {
  const practiceWords = getRandomWords(20, {
    difficulty: 'CET4',
    excludeIds: alreadyLearnedIds
  })
  
  // 开始练习...
}
```

## 🔧 配置选项

### Web Speech API 配置
```typescript
// 在 text-to-speech.ts 中修改默认参数
utterance.rate = 0.9    // 语速（默认0.9，稍慢）
utterance.pitch = 1     // 音调（默认1）
utterance.volume = 1    // 音量（默认1）
utterance.lang = 'en-US' // 语言（默认美式英语）
```

### 搜索配置
```typescript
// 在 wordbook-manager.ts 中修改
const DEFAULT_SEARCH_LIMIT = 50  // 默认搜索结果数量
```

## 📱 浏览器兼容性

### Web Speech API 支持
- ✅ Chrome/Edge (最佳)
- ✅ Safari (良好)
- ⚠️ Firefox (部分支持)
- ❌ IE (不支持)

### 检查支持
```typescript
if ('speechSynthesis' in window) {
  console.log('支持 Web Speech API')
} else {
  console.log('不支持 Web Speech API')
}
```

## 🐛 错误处理

### 处理发音错误
```typescript
import { tts } from '@/lib/utils/text-to-speech'

tts?.speak('hello', {
  onError: (error) => {
    console.error('发音失败:', error)
    // 显示错误提示或使用备用方案
  }
})
```

### 处理数据缺失
```typescript
import { getWordById } from '@/lib/utils/wordbook-manager'

const word = getWordById('invalid_id')
if (!word) {
  console.error('单词不存在')
  // 处理错误...
}
```

## 💡 性能优化建议

### 1. 缓存单词数据
```typescript
const [wordsCache, setWordsCache] = useState<Map<string, Word[]>>(new Map())

const getWords = (sectionId: string) => {
  if (wordsCache.has(sectionId)) {
    return wordsCache.get(sectionId)!
  }
  
  const words = getSectionWords(wordbookId, sectionId)
  setWordsCache(prev => new Map(prev).set(sectionId, words))
  return words
}
```

### 2. 防抖搜索
```typescript
import { debounce } from 'lodash'

const debouncedSearch = debounce((query: string) => {
  const results = searchWords(query)
  setSearchResults(results)
}, 300)
```

### 3. 虚拟滚动（大列表）
```typescript
import { VirtualList } from 'react-virtual'

// 用于显示大量单词时
```

---

**提示**: 
- 所有API都是类型安全的（TypeScript）
- 大部分函数都有详细的JSDoc注释
- 查看源码获取更多细节
