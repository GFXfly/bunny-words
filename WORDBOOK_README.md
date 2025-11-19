# 🐰 Bunny Words - CET-4/6 词库系统

## ✨ 已实现功能

### 📚 核心功能
- ✅ **CET-4/6 词库** - 预置35个示例单词（可扩展至7000+）
- ✅ **Web Speech API** - 免费的文本转语音功能
- ✅ **智能搜索** - 按单词或释义搜索
- ✅ **拼写验证** - 使用Levenshtein算法验证拼写
- ✅ **例句管理** - 支持多种例句来源
- ✅ **数据导入** - 支持JSON/CSV/ECDICT格式

### 🎯 混合方案特点
1. **基础词库**: 预置CET-4/6核心词汇
2. **发音服务**: 浏览器Web Speech API（零成本）
3. **例句来源**: 手动编写 + 词典API + AI生成（可选）
4. **数据扩展**: 灵活的导入工具

## 📁 项目结构

```
bunny-words-homepage/
├── lib/
│   ├── types/
│   │   └── word.ts                    # 类型定义
│   ├── data/
│   │   ├── cet4-words.ts              # CET-4词库（20词）
│   │   └── cet6-words.ts              # CET-6词库（15词）
│   └── utils/
│       ├── text-to-speech.ts          # 文本转语音
│       ├── wordbook-manager.ts        # 词库管理
│       └── example-generator.ts       # 例句生成
├── scripts/
│   └── import-words.ts                # 数据导入脚本
├── app/
│   └── test-wordbook/
│       └── page.tsx                   # 测试页面
├── WORDBOOK_GUIDE.md                  # 使用指南
└── IMPLEMENTATION_SUMMARY.md          # 实施总结
```

## 🚀 快速开始

### 1. 测试词库系统

访问测试页面查看所有功能：

```bash
npm run dev
```

然后打开浏览器访问：
```
http://localhost:3000/test-wordbook
```

### 2. 在代码中使用

```typescript
// 导入工具
import { getWordbookById, getSectionWords } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

// 获取词书
const cet4 = getWordbookById('cet4_wordbook')

// 获取单词
const words = getSectionWords('cet4_wordbook', 'cet4_section_a')

// 朗读单词
speakWord('abandon', { slow: false, repeat: 1 })
```

### 3. 集成到学习页面

在 `app/wordbook/[id]/study/[listId]/study-client.tsx` 中：

```typescript
// 替换 mockWords
import { getSectionWords } from '@/lib/utils/wordbook-manager'
import { speakWord } from '@/lib/utils/text-to-speech'

const words = getSectionWords(id, listId)

// 替换音频播放
const handlePlayAudio = () => {
  speakWord(currentWord.word)
}
```

## 📊 当前数据

### 词库统计
- **CET-4**: 20个单词（示例）
- **CET-6**: 15个单词（示例）
- **总计**: 35个单词

### 单词数据包含
- ✅ 音标（美式 + 英式）
- ✅ 中文释义
- ✅ 英文例句 + 中文翻译
- ✅ 词频、标签、同义词、反义词

## 🔧 扩展词库

### 方法1: 手动添加

编辑 `lib/data/cet4-words.ts`:

```typescript
{
  id: 'cet4_021',
  word: 'example',
  phonetic: '/ɪɡˈzæmpl/',
  translation: 'n. 例子；榜样',
  examples: [{
    english: 'This is a good example.',
    chinese: '这是一个好例子。',
    source: 'manual'
  }],
  difficulty: 'CET4',
  frequency: 500,
  tags: ['名词']
}
```

### 方法2: 批量导入

1. 准备数据文件（JSON/CSV）
2. 使用导入脚本：

```bash
# 编辑 scripts/import-words.ts
# 然后运行
npm run import-words
```

### 推荐数据源

1. **ECDICT** - 77万词条开源词典
   - https://github.com/skywind3000/ECDICT

2. **CET-4/6官方词表** - 权威考试词汇

3. **Tatoeba** - 开源例句库
   - https://tatoeba.org

## 🎨 功能演示

### 测试页面功能
访问 `/test-wordbook` 可以测试：

1. ✅ **词书切换** - CET-4/6切换
2. ✅ **单词显示** - 完整的单词信息
3. ✅ **发音功能** - 单词和例句朗读
4. ✅ **随机单词** - 练习模式
5. ✅ **拼写测试** - 智能验证
6. ✅ **搜索功能** - 模糊搜索

## 📖 文档

- **使用指南**: `WORDBOOK_GUIDE.md`
- **实施总结**: `IMPLEMENTATION_SUMMARY.md`
- **类型定义**: `lib/types/word.ts`

## 🎯 下一步计划

### 短期（1-2周）
- [ ] 扩展CET-4至完整版（4500词）
- [ ] 扩展CET-6至完整版（2500词）
- [ ] 集成到现有学习页面

### 中期（1个月）
- [ ] 添加TOEFL/IELTS词库
- [ ] 实现SRS算法
- [ ] 学习进度追踪

### 长期（3个月+）
- [ ] AI例句生成
- [ ] 用户自定义词书
- [ ] 离线支持

## 💡 技术亮点

### 零成本方案
- ✅ 无需API Key
- ✅ 无需后端服务
- ✅ 浏览器原生支持

### 高性能
- ✅ 纯前端实现
- ✅ TypeScript类型安全
- ✅ 模块化设计

### 易扩展
- ✅ 清晰的API
- ✅ 灵活的数据格式
- ✅ 完善的文档

## 🐛 已知限制

1. **Web Speech API**
   - 某些浏览器可能不支持
   - 需要HTTPS（生产环境）

2. **示例数据**
   - 当前只有35个单词
   - 需要扩展至完整词库

## 🤝 贡献

欢迎贡献：
- 📝 添加更多单词
- 🐛 报告问题
- 💡 提出建议

## 📄 许可

MIT License

---

**开发者**: Bunny Words Team  
**最后更新**: 2025-01-19  
**版本**: 1.0.0
