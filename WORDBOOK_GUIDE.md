# Bunny Words - 词库系统使用指南

## 📚 系统概述

Bunny Words 采用**混合方案**来管理单词和例句数据：

1. **基础词库**: 使用预置的CET-4/6词库数据
2. **发音服务**: 使用浏览器Web Speech API（免费、无需后端）
3. **例句补充**: 支持从词典API获取或AI生成（可选）
4. **数据扩展**: 易于添加新词库和单词

## 🗂️ 文件结构

```
lib/
├── types/
│   └── word.ts                    # 类型定义
├── data/
│   ├── cet4-words.ts              # CET-4词库
│   └── cet6-words.ts              # CET-6词库
└── utils/
    ├── text-to-speech.ts          # 文本转语音工具
    ├── wordbook-manager.ts        # 词库管理工具
    └── example-generator.ts       # 例句生成工具
```

## 🚀 快速开始

### 1. 在组件中使用词库

```typescript
import { getWordbookById, getSectionWords } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

// 获取CET-4词书
const wordbook = getWordbookById('cet4_wordbook')

// 获取某个章节的单词
const words = getSectionWords('cet4_wordbook', 'cet4_section_a')

// 朗读单词
speakWord('hello', { slow: false, repeat: 1 })
```

### 2. 使用文本转语音

```typescript
import { tts, speakWord, speakSentence } from '@/lib/utils/text-to-speech'

// 朗读单词（普通速度）
speakWord('abandon')

// 朗读单词（慢速，重复2次）
speakWord('abandon', { slow: true, repeat: 2 })

// 朗读例句
speakSentence('They had to abandon the car.')

// 停止朗读
tts?.stop()
```

### 3. 搜索和过滤单词

```typescript
import { searchWords, getRandomWords } from '@/lib/utils/wordbook-manager'

// 搜索单词
const results = searchWords('abandon', { difficulty: 'CET4', limit: 10 })

// 获取随机单词（用于练习）
const randomWords = getRandomWords(10, { difficulty: 'CET4' })
```

### 4. 验证拼写

```typescript
import { validateSpelling } from '@/lib/utils/wordbook-manager'

const result = validateSpelling('abanbon', 'abandon')
console.log(result.isCorrect)    // false
console.log(result.similarity)   // 0.857 (相似度)
```

## 📝 数据结构

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

## 🔧 扩展词库

### 添加新单词

编辑 `lib/data/cet4-words.ts` 或 `lib/data/cet6-words.ts`:

```typescript
export const CET4_WORDS: Word[] = [
  // ... 现有单词
  {
    id: 'cet4_021',
    word: 'example',
    phonetic: '/ɪɡˈzæmpl/',
    translation: 'n. 例子；榜样 v. 举例说明',
    examples: [
      {
        english: 'This is a good example.',
        chinese: '这是一个好例子。',
        source: 'manual'
      }
    ],
    difficulty: 'CET4',
    frequency: 500,
    tags: ['名词', '动词']
  }
]
```

### 创建新词书

1. 创建新的数据文件（如 `lib/data/toefl-words.ts`）
2. 在 `lib/utils/wordbook-manager.ts` 中导入并添加到 `ALL_WORDBOOKS`

## 🎯 集成到学习页面

更新 `app/wordbook/[id]/study/[listId]/study-client.tsx`:

```typescript
import { getSectionWords } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

// 替换 mockWords
const words = getSectionWords(id, listId)

// 在播放音频时使用
const handlePlayAudio = () => {
  speakWord(currentWord.word)
}
```

## 🌐 可选：集成外部服务

### 1. 词典API（获取更多例句）

```typescript
import { fetchExamplesFromDictionary } from '@/lib/utils/example-generator'

const examples = await fetchExamplesFromDictionary('abandon')
```

### 2. AI生成例句（需要OpenAI API Key）

在 `.env.local` 中配置:
```
OPENAI_API_KEY=your_api_key_here
```

然后在 `lib/utils/example-generator.ts` 中实现AI调用。

### 3. 在线发音服务（可选）

如果Web Speech API效果不理想，可以使用：
- Google Text-to-Speech API
- Azure Speech Service
- 或预录的音频文件

## 📊 数据来源建议

### 完整词库获取

1. **ECDICT**: https://github.com/skywind3000/ECDICT
   - 77万词条，包含音标、释义、词频
   - 免费开源

2. **CET-4/6词表**: 
   - 可从各大考试网站获取官方词表
   - 或使用现有的开源词库项目

3. **例句来源**:
   - 牛津词典
   - 柯林斯词典
   - Tatoeba项目（开源例句库）

### 数据导入流程

1. 下载词库数据（JSON/CSV格式）
2. 编写转换脚本，转换为我们的Word类型
3. 使用 `example-generator.ts` 补充缺失的例句
4. 导入到数据文件中

## 🎨 最佳实践

1. **性能优化**: 对于大词库，考虑按需加载（lazy loading）
2. **离线支持**: 使用IndexedDB存储词库数据
3. **学习记录**: 使用localStorage或数据库记录学习进度
4. **音频缓存**: 缓存已播放的音频，减少重复请求

## 🐛 故障排除

### Web Speech API不工作

- 检查浏览器兼容性（Chrome/Edge效果最好）
- 确保网站使用HTTPS（某些浏览器要求）
- 检查浏览器语音设置

### 找不到单词

- 确认单词ID格式正确
- 检查词库数据是否正确导入
- 使用 `searchWords` 进行调试

## 📈 下一步计划

- [ ] 扩展CET-4/6词库至完整版本
- [ ] 添加TOEFL、IELTS词库
- [ ] 集成AI例句生成
- [ ] 实现SRS（间隔重复）算法
- [ ] 添加单词收藏和笔记功能
- [ ] 支持自定义词书

## 💡 示例代码

完整的使用示例请参考：
- `app/wordbook/[id]/study/[listId]/study-client.tsx` - 学习页面
- `lib/utils/wordbook-manager.ts` - 词库管理
- `lib/utils/text-to-speech.ts` - 语音功能
