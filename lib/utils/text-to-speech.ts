/**
 * 文本转语音工具
 * 使用浏览器内置的 Web Speech API
 */

export class TextToSpeech {
    private static instance: TextToSpeech
    private synth: SpeechSynthesis | null = null
    private voices: SpeechSynthesisVoice[] = []
    private isInitialized = false

    private constructor() {
        if (typeof window !== 'undefined') {
            this.synth = window.speechSynthesis
            this.loadVoices()
        }
    }

    static getInstance(): TextToSpeech {
        if (!TextToSpeech.instance) {
            TextToSpeech.instance = new TextToSpeech()
        }
        return TextToSpeech.instance
    }

    /**
     * 加载可用的语音列表
     */
    private loadVoices() {
        if (!this.synth) return

        const loadVoicesCallback = () => {
            this.voices = this.synth!.getVoices()
            this.isInitialized = true
        }

        // Chrome 需要等待 voiceschanged 事件
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = loadVoicesCallback
        }

        // 立即尝试加载一次
        loadVoicesCallback()
    }

    /**
   * 获取英语语音
   * 优先选择高质量的语音引擎
   */
    private getEnglishVoice(): SpeechSynthesisVoice | null {
        if (!this.isInitialized || this.voices.length === 0) {
            return null
        }

        // 高质量语音优先级列表（按质量排序）
        const preferredVoices = [
            // Google 语音（质量最好）
            'Google US English',
            'Google UK English Female',
            'Google UK English Male',

            // Microsoft 语音（质量好）
            'Microsoft Zira - English (United States)',
            'Microsoft David - English (United States)',
            'Microsoft Mark - English (United States)',
            'Microsoft Aria - English (United States)',

            // Apple 语音（Mac/iOS）
            'Samantha',
            'Alex',
            'Karen',
            'Daniel',

            // 其他高质量语音
            'en-US-Neural2-A',
            'en-US-Neural2-C',
            'en-US-Wavenet-A',
            'en-US-Wavenet-C',
        ]

        // 1. 首先尝试匹配高质量语音
        for (const preferredName of preferredVoices) {
            const voice = this.voices.find(v =>
                v.name.includes(preferredName) ||
                v.name === preferredName
            )
            if (voice) {
                console.log('🎤 Selected high-quality voice:', voice.name)
                return voice
            }
        }

        // 2. 如果没有高质量语音，尝试任何英语语音
        const anyEnglishVoice = this.voices.find(v => v.lang.startsWith('en'))
        if (anyEnglishVoice) {
            return anyEnglishVoice
        }

        return null
    }

    /**
     * 朗读文本
     * @param text 要朗读的文本
     * @param options 朗读选项
     */
    speak(
        text: string,
        options: {
            rate?: number // 语速 (0.1 - 10, 默认 1)
            pitch?: number // 音调 (0 - 2, 默认 1)
            volume?: number // 音量 (0 - 1, 默认 1)
            lang?: string // 语言 (默认 en-US)
            onEnd?: () => void // 朗读结束回调
            onError?: (error: SpeechSynthesisErrorEvent) => void // 错误回调
        } = {}
    ): void {
        if (!this.synth) {
            console.warn('Speech synthesis not supported in this browser')
            return
        }

        // 停止当前正在播放的语音
        this.stop()

        const utterance = new SpeechSynthesisUtterance(text)

        // 设置语音
        const voice = this.getEnglishVoice()
        if (voice) {
            utterance.voice = voice
        }

        // 优化后的参数设置
        utterance.rate = options.rate ?? 1.0  // 正常语速，更自然
        utterance.pitch = options.pitch ?? 1.05  // 稍微提高音调，更清晰
        utterance.volume = options.volume ?? 1.0  // 最大音量
        utterance.lang = options.lang ?? 'en-US'

        // 设置回调
        if (options.onEnd) {
            utterance.onend = options.onEnd
        }

        if (options.onError) {
            utterance.onerror = options.onError
        }

        // 开始朗读
        this.synth.speak(utterance)
    }

    /**
     * 朗读单词（专门为单词学习优化）
     * @param word 单词
     * @param options 选项
     */
    speakWord(
        word: string,
        options: {
            slow?: boolean // 是否慢速朗读
            repeat?: number // 重复次数（默认1次）
            onComplete?: () => void // 全部完成回调
        } = {}
    ): void {
        const { slow = false, repeat = 1, onComplete } = options
        let count = 0

        const speakOnce = () => {
            count++
            this.speak(word, {
                rate: slow ? 0.75 : 1.0,  // 慢速时0.75，正常时1.0
                pitch: 1.05,  // 稍微提高音调
                onEnd: () => {
                    if (count < repeat) {
                        // 重复朗读，间隔600ms
                        setTimeout(speakOnce, 600)
                    } else if (onComplete) {
                        onComplete()
                    }
                },
            })
        }

        speakOnce()
    }

    /**
     * 朗读例句
     * @param sentence 例句
     * @param options 选项
     */
    speakSentence(
        sentence: string,
        options: {
            rate?: number
            onEnd?: () => void
        } = {}
    ): void {
        this.speak(sentence, {
            rate: options.rate ?? 0.95,  // 例句稍慢，更容易理解
            pitch: 1.05,  // 保持清晰的音调
            onEnd: options.onEnd,
        })
    }

    /**
     * 停止朗读
     */
    stop(): void {
        if (this.synth) {
            this.synth.cancel()
        }
    }

    /**
     * 暂停朗读
     */
    pause(): void {
        if (this.synth) {
            this.synth.pause()
        }
    }

    /**
     * 恢复朗读
     */
    resume(): void {
        if (this.synth) {
            this.synth.resume()
        }
    }

    /**
     * 检查是否正在朗读
     */
    isSpeaking(): boolean {
        return this.synth?.speaking ?? false
    }

    /**
     * 获取可用的语音列表
     */
    getAvailableVoices(): SpeechSynthesisVoice[] {
        return this.voices
    }

    /**
     * 列出所有可用的英语语音（调试用）
     */
    listEnglishVoices(): void {
        const englishVoices = this.voices.filter(v => v.lang.startsWith('en'))
        console.log('📢 Available English Voices:')
        englishVoices.forEach((voice, index) => {
            console.log(`${index + 1}. ${voice.name} (${voice.lang}) ${voice.default ? '⭐ DEFAULT' : ''}`)
        })
        console.log(`\nTotal: ${englishVoices.length} English voices available`)

        const currentVoice = this.getEnglishVoice()
        if (currentVoice) {
            console.log(`\n🎤 Currently selected: ${currentVoice.name}`)
        }
    }
}

// 导出单例实例
export const tts = typeof window !== 'undefined' ? TextToSpeech.getInstance() : null

// 便捷函数
export const speakWord = (word: string, options?: Parameters<TextToSpeech['speakWord']>[1]) => {
    tts?.speakWord(word, options)
}

export const speakSentence = (sentence: string, options?: Parameters<TextToSpeech['speakSentence']>[1]) => {
    tts?.speakSentence(sentence, options)
}

export const stopSpeaking = () => {
    tts?.stop()
}
