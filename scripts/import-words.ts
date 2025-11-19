/**
 * 词库数据导入脚本
 * 用于将外部词库数据（如ECDICT、CSV等）转换为系统格式
 * 
 * 使用方法：
 * 1. 准备词库数据文件（JSON或CSV格式）
 * 2. 修改此脚本的导入逻辑
 * 3. 运行: node scripts/import-words.js
 */

import { Word, DifficultyLevel } from '../lib/types/word'
import * as fs from 'fs'
import * as path from 'path'

/**
 * 从JSON文件导入单词
 * 
 * 期望的JSON格式：
 * [
 *   {
 *     "word": "abandon",
 *     "phonetic": "/əˈbændən/",
 *     "translation": "v. 放弃",
 *     "examples": ["example sentence"]
 *   }
 * ]
 */
export async function importFromJSON(
    filePath: string,
    difficulty: DifficultyLevel
): Promise<Word[]> {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const jsonData = JSON.parse(rawData)

        const words: Word[] = jsonData.map((item: any, index: number) => ({
            id: `${difficulty.toLowerCase()}_${String(index + 1).padStart(3, '0')}`,
            word: item.word || '',
            phonetic: item.phonetic || item.pronunciation || '',
            phoneticUK: item.phoneticUK || item.pronunciationUK,
            translation: item.translation || item.definition || '',
            definition: item.englishDefinition,
            examples: parseExamples(item.examples || item.example),
            difficulty,
            frequency: item.frequency || 9999,
            tags: item.tags || item.pos ? [item.pos] : [],
            synonyms: item.synonyms || [],
            antonyms: item.antonyms || []
        }))

        return words
    } catch (error) {
        console.error('Failed to import from JSON:', error)
        return []
    }
}

/**
 * 从CSV文件导入单词
 * 
 * 期望的CSV格式：
 * word,phonetic,translation,example,exampleTranslation
 * abandon,/əˈbændən/,v. 放弃,"They abandoned the car.","他们弃车了。"
 */
export async function importFromCSV(
    filePath: string,
    difficulty: DifficultyLevel
): Promise<Word[]> {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const lines = rawData.split('\n').filter(line => line.trim())

        // 跳过标题行
        const dataLines = lines.slice(1)

        const words: Word[] = dataLines.map((line, index) => {
            const columns = parseCSVLine(line)

            return {
                id: `${difficulty.toLowerCase()}_${String(index + 1).padStart(3, '0')}`,
                word: columns[0] || '',
                phonetic: columns[1] || '',
                translation: columns[2] || '',
                examples: columns[3] && columns[4] ? [{
                    english: columns[3],
                    chinese: columns[4],
                    source: 'manual'
                }] : [],
                difficulty,
                frequency: parseInt(columns[5]) || 9999,
                tags: columns[6] ? columns[6].split(';') : []
            }
        })

        return words
    } catch (error) {
        console.error('Failed to import from CSV:', error)
        return []
    }
}

/**
 * 从ECDICT格式导入
 * ECDICT是一个开源的英汉词典数据库
 * GitHub: https://github.com/skywind3000/ECDICT
 */
export async function importFromECDICT(
    filePath: string,
    difficulty: DifficultyLevel,
    wordList: string[] // 指定要导入的单词列表
): Promise<Word[]> {
    try {
        const rawData = fs.readFileSync(filePath, 'utf-8')
        const lines = rawData.split('\n').filter(line => line.trim())

        const words: Word[] = []
        let idCounter = 1

        for (const line of lines) {
            const columns = line.split('\t')
            const word = columns[0]

            // 只导入指定列表中的单词
            if (!wordList.includes(word.toLowerCase())) {
                continue
            }

            words.push({
                id: `${difficulty.toLowerCase()}_${String(idCounter++).padStart(3, '0')}`,
                word: word,
                phonetic: columns[1] || '',
                translation: columns[3] || '',
                definition: columns[2] || '',
                examples: [],
                difficulty,
                frequency: parseInt(columns[5]) || 9999,
                tags: columns[4] ? [columns[4]] : []
            })
        }

        return words
    } catch (error) {
        console.error('Failed to import from ECDICT:', error)
        return []
    }
}

/**
 * 导出为TypeScript文件
 */
export function exportToTypeScript(
    words: Word[],
    outputPath: string,
    wordbookId: string,
    wordbookName: string,
    difficulty: DifficultyLevel
): void {
    const content = `/**
 * ${wordbookName}
 * 自动生成于 ${new Date().toISOString()}
 */

import { Word, Wordbook, WordbookSection } from '../types/word'

export const WORDS: Word[] = ${JSON.stringify(words, null, 2)}

export const SECTIONS: WordbookSection[] = [
  // TODO: 根据需要划分章节
]

export const WORDBOOK: Wordbook = {
  id: '${wordbookId}',
  name: '${wordbookName}',
  description: '',
  difficulty: '${difficulty}',
  totalWords: ${words.length},
  sections: SECTIONS,
  createdAt: new Date(),
  updatedAt: new Date()
}

export function getWordById(id: string | number): Word | undefined {
  return WORDS.find(w => w.id === id)
}

export function getWordsByIds(ids: (string | number)[]): Word[] {
  return ids.map(id => getWordById(id)).filter(Boolean) as Word[]
}
`

    fs.writeFileSync(outputPath, content, 'utf-8')
    console.log(`✅ Exported ${words.length} words to ${outputPath}`)
}

/**
 * 辅助函数：解析例句
 */
function parseExamples(examples: any): any[] {
    if (!examples) return []

    if (typeof examples === 'string') {
        return [{
            english: examples,
            chinese: '',
            source: 'imported'
        }]
    }

    if (Array.isArray(examples)) {
        return examples.map(ex => {
            if (typeof ex === 'string') {
                return {
                    english: ex,
                    chinese: '',
                    source: 'imported'
                }
            }
            return {
                english: ex.english || ex.en || '',
                chinese: ex.chinese || ex.cn || ex.translation || '',
                source: ex.source || 'imported'
            }
        })
    }

    return []
}

/**
 * 辅助函数：解析CSV行（处理引号内的逗号）
 */
function parseCSVLine(line: string): string[] {
    const result: string[] = []
    let current = ''
    let inQuotes = false

    for (let i = 0; i < line.length; i++) {
        const char = line[i]

        if (char === '"') {
            inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
            result.push(current.trim())
            current = ''
        } else {
            current += char
        }
    }

    result.push(current.trim())
    return result
}

/**
 * 示例：导入CET-4词库
 */
async function exampleImportCET4() {
    // 假设你有一个CET-4单词列表
    const cet4WordList = [
        'abandon', 'ability', 'abroad', 'absent', 'absolute',
        // ... 更多单词
    ]

    // 从ECDICT导入
    const words = await importFromECDICT(
        './data/ecdict.csv',
        'CET4',
        cet4WordList
    )

    // 导出为TypeScript文件
    exportToTypeScript(
        words,
        './lib/data/cet4-words-full.ts',
        'cet4_wordbook',
        'CET-4 核心词汇',
        'CET4'
    )
}

// 如果直接运行此脚本
if (require.main === module) {
    console.log('📚 词库导入脚本')
    console.log('请修改此脚本以适配您的数据格式')
    // exampleImportCET4()
}
