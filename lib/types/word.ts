/**
 * 单词数据类型定义
 */

// 单词难度等级
export type DifficultyLevel = 'CET4' | 'CET6' | 'TOEFL' | 'IELTS' | 'GRE' | 'CUSTOM'

// 例句接口
export interface Example {
  english: string        // 英文例句
  chinese: string        // 中文翻译
  source?: string        // 来源（可选）：'manual' | 'ai' | 'dictionary'
}

// 单词接口
export interface Word {
  id: string | number           // 唯一标识
  word: string                  // 单词
  phonetic: string              // 音标（美式）
  phoneticUK?: string           // 英式音标（可选）
  translation: string           // 中文释义（主要）
  definition?: string           // 英文释义（可选）
  examples: Example[]           // 例句列表
  audioUrl?: string             // 发音URL（可选，优先使用）
  difficulty?: DifficultyLevel  // 难度等级
  frequency?: number            // 词频（1-10000，数字越小越常用）
  tags?: string[]               // 标签（如：动词、名词等）
  synonyms?: string[]           // 同义词
  antonyms?: string[]           // 反义词
  createdAt?: Date              // 创建时间
  updatedAt?: Date              // 更新时间
}

// 词书接口
export interface Wordbook {
  id: string
  name: string                  // 词书名称
  description?: string          // 描述
  coverImage?: string           // 封面图
  difficulty: DifficultyLevel   // 难度等级
  totalWords: number            // 总单词数
  sections: WordbookSection[]   // 章节列表
  createdAt?: Date
  updatedAt?: Date
}

// 词书章节接口
export interface WordbookSection {
  id: string
  wordbookId: string
  name: string                  // 章节名称（如：Unit 1）
  order: number                 // 排序
  wordIds: (string | number)[]  // 单词ID列表
  words?: Word[]                // 单词详情（可选，用于预加载）
}

// 学习记录接口（用于SRS算法）
export interface StudyRecord {
  id: string
  userId: string
  wordId: string | number
  wordbookId: string
  lastReviewDate: Date          // 上次复习时间
  nextReviewDate: Date          // 下次复习时间
  easeFactor: number            // 难度因子（Anki算法）
  interval: number              // 复习间隔（天）
  repetitions: number           // 重复次数
  quality: number               // 记忆质量（0-5）
  isStarred: boolean            // 是否收藏
  correctCount: number          // 正确次数
  wrongCount: number            // 错误次数
}
