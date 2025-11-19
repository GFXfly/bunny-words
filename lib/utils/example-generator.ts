/**
 * AI 例句生成工具
 * 用于为缺少例句的单词生成高质量例句
 * 
 * 注意：这需要配置OpenAI API Key或其他AI服务
 * 如果不想使用AI服务，可以使用预设的例句模板
 */

import { Example } from '../types/word'

/**
 * 使用AI生成例句（需要配置API）
 */
export async function generateExampleWithAI(
    word: string,
    translation: string,
    options?: {
        difficulty?: string
        count?: number
    }
): Promise<Example[]> {
    const { difficulty = 'CET4', count = 1 } = options || {}

    // TODO: 集成OpenAI API或其他AI服务
    // 这里是示例实现，实际使用时需要配置API Key

    console.warn('AI example generation not configured. Using template examples.')
    return generateTemplateExamples(word, translation, count)
}

/**
 * 使用模板生成例句（不需要AI服务）
 */
export function generateTemplateExamples(
    word: string,
    translation: string,
    count: number = 1
): Example[] {
    // 简单的模板例句生成
    // 实际应用中可以有更复杂的模板库

    const templates = [
        {
            english: `I need to ${word} this task.`,
            chinese: `我需要${translation}这个任务。`
        },
        {
            english: `The ${word} is very important.`,
            chinese: `这个${translation}非常重要。`
        },
        {
            english: `She has a great ${word}.`,
            chinese: `她有很好的${translation}。`
        }
    ]

    return templates.slice(0, count).map(t => ({
        ...t,
        source: 'template'
    }))
}

/**
 * 从在线词典API获取例句
 * 可以使用免费的词典API如：
 * - Free Dictionary API: https://dictionaryapi.dev/
 * - Words API: https://www.wordsapi.com/
 */
export async function fetchExamplesFromDictionary(
    word: string
): Promise<Example[]> {
    try {
        // 使用Free Dictionary API
        const response = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        )

        if (!response.ok) {
            throw new Error('Dictionary API request failed')
        }

        const data = await response.json()

        const examples: Example[] = []

        // 提取例句
        for (const entry of data) {
            for (const meaning of entry.meanings || []) {
                for (const definition of meaning.definitions || []) {
                    if (definition.example) {
                        examples.push({
                            english: definition.example,
                            chinese: '', // 需要翻译服务来填充
                            source: 'dictionary'
                        })
                    }
                }
            }
        }

        return examples
    } catch (error) {
        console.error('Failed to fetch examples from dictionary:', error)
        return []
    }
}

/**
 * 批量为单词补充例句
 */
export async function enrichWordsWithExamples(
    words: Array<{ word: string; translation: string; examples: Example[] }>,
    options?: {
        useAI?: boolean
        useDictionary?: boolean
        minExamples?: number
    }
): Promise<void> {
    const { useAI = false, useDictionary = true, minExamples = 1 } = options || {}

    for (const wordData of words) {
        // 如果已有足够例句，跳过
        if (wordData.examples.length >= minExamples) {
            continue
        }

        const needed = minExamples - wordData.examples.length

        try {
            // 优先从词典获取
            if (useDictionary) {
                const dictExamples = await fetchExamplesFromDictionary(wordData.word)
                wordData.examples.push(...dictExamples.slice(0, needed))
            }

            // 如果还不够，使用AI生成
            if (wordData.examples.length < minExamples && useAI) {
                const aiExamples = await generateExampleWithAI(
                    wordData.word,
                    wordData.translation,
                    { count: minExamples - wordData.examples.length }
                )
                wordData.examples.push(...aiExamples)
            }

            // 如果还不够，使用模板
            if (wordData.examples.length < minExamples) {
                const templateExamples = generateTemplateExamples(
                    wordData.word,
                    wordData.translation,
                    minExamples - wordData.examples.length
                )
                wordData.examples.push(...templateExamples)
            }
        } catch (error) {
            console.error(`Failed to enrich examples for word: ${wordData.word}`, error)
        }
    }
}

/**
 * 翻译例句（需要配置翻译API）
 */
export async function translateExample(
    englishText: string
): Promise<string> {
    // TODO: 集成翻译API（如Google Translate, DeepL等）
    // 这里返回占位符
    return `[翻译: ${englishText}]`
}
