'use client'

import { useCallback, useRef, useEffect } from 'react'

// Simple sound synthesis using Web Audio API
// This avoids the need for external audio files and ensures immediate playback
export function useSoundEffects(enabled: boolean = true) {
    const audioContextRef = useRef<AudioContext | null>(null)

    // Initialize AudioContext on user interaction (or lazily)
    const getAudioContext = useCallback(() => {
        if (!audioContextRef.current) {
            // @ts-ignore - webkitAudioContext for Safari
            const AudioContextClass = window.AudioContext || window.webkitAudioContext
            if (AudioContextClass) {
                audioContextRef.current = new AudioContextClass()
            }
        }
        if (audioContextRef.current?.state === 'suspended') {
            audioContextRef.current.resume()
        }
        return audioContextRef.current
    }, [])

    const playTone = useCallback((
        frequency: number,
        type: OscillatorType,
        duration: number,
        startTime: number = 0,
        volume: number = 0.1
    ) => {
        if (!enabled) return
        const ctx = getAudioContext()
        if (!ctx) return

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = type
        osc.frequency.setValueAtTime(frequency, ctx.currentTime + startTime)

        gain.gain.setValueAtTime(volume, ctx.currentTime + startTime)
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + startTime + duration)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(ctx.currentTime + startTime)
        osc.stop(ctx.currentTime + startTime + duration)
    }, [enabled, getAudioContext])

    const playClick = useCallback(() => {
        // Soft click: short sine wave
        playTone(800, 'sine', 0.05, 0, 0.05)
    }, [playTone])

    const playFlip = useCallback(() => {
        if (!enabled) return
        // Flip sound: quick low-pass filtered noise (simulated with rapid frequency sweep)
        const ctx = getAudioContext()
        if (!ctx) return

        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        // Sweep from low to high to simulate air movement
        osc.frequency.setValueAtTime(200, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.1)

        gain.gain.setValueAtTime(0.05, ctx.currentTime)
        gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.1)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start()
        osc.stop(ctx.currentTime + 0.1)
    }, [enabled, getAudioContext])

    const playCorrect = useCallback(() => {
        // Success: Major chord arpeggio (C5 - E5 - G5)
        playTone(523.25, 'sine', 0.2, 0, 0.1) // C5
        playTone(659.25, 'sine', 0.2, 0.1, 0.1) // E5
        playTone(783.99, 'sine', 0.4, 0.2, 0.1) // G5
    }, [playTone])

    const playWrong = useCallback(() => {
        // Error: Low dissonant tone
        playTone(150, 'sawtooth', 0.3, 0, 0.05)
        playTone(140, 'sawtooth', 0.3, 0.1, 0.05)
    }, [playTone])

    const playWin = useCallback(() => {
        // Win: Victory fanfare
        const now = 0
        playTone(523.25, 'square', 0.1, now, 0.05)
        playTone(523.25, 'square', 0.1, now + 0.1, 0.05)
        playTone(523.25, 'square', 0.1, now + 0.2, 0.05)
        playTone(659.25, 'square', 0.4, now + 0.3, 0.05)
    }, [playTone])

    const playTypewriter = useCallback(() => {
        if (!enabled) return
        const ctx = getAudioContext()
        if (!ctx) return

        const t = ctx.currentTime

        // 1. High-pitched "Tick" (The initial contact) - 极短的高频扫描，制造"咔"的尖锐感
        const tickOsc = ctx.createOscillator()
        tickOsc.type = 'sine'
        tickOsc.frequency.setValueAtTime(8000, t)
        tickOsc.frequency.exponentialRampToValueAtTime(2000, t + 0.005)

        const tickGain = ctx.createGain()
        tickGain.gain.setValueAtTime(0.6, t)
        tickGain.gain.exponentialRampToValueAtTime(0.01, t + 0.005)

        tickOsc.connect(tickGain)
        tickGain.connect(ctx.destination)
        tickOsc.start(t)
        tickOsc.stop(t + 0.005)

        // 2. Mechanical "Crunch" (Noise burst) - 高通滤波噪音，模拟机械摩擦
        const bufferSize = ctx.sampleRate * 0.02 // 20ms
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
        const data = buffer.getChannelData(0)
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1
        }

        const noise = ctx.createBufferSource()
        noise.buffer = buffer

        const noiseFilter = ctx.createBiquadFilter()
        noiseFilter.type = 'highpass'
        noiseFilter.frequency.value = 3000 // 只保留高频

        const noiseGain = ctx.createGain()
        noiseGain.gain.setValueAtTime(0.8, t)
        noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.015)

        noise.connect(noiseFilter)
        noiseFilter.connect(noiseGain)
        noiseGain.connect(ctx.destination)
        noise.start(t)

        // 3. Body/Bottom out (The "Ka" body) - 短促的方波，增加机械质感
        const bodyOsc = ctx.createOscillator()
        bodyOsc.type = 'square'
        bodyOsc.frequency.setValueAtTime(600, t)
        bodyOsc.frequency.exponentialRampToValueAtTime(200, t + 0.02)

        const bodyGain = ctx.createGain()
        bodyGain.gain.setValueAtTime(0.15, t)
        bodyGain.gain.exponentialRampToValueAtTime(0.01, t + 0.02)

        bodyOsc.connect(bodyGain)
        bodyGain.connect(ctx.destination)
        bodyOsc.start(t)
        bodyOsc.stop(t + 0.02)
    }, [enabled, getAudioContext])

    return {
        playClick,
        playFlip,
        playCorrect,
        playWrong,
        playWin,
        playTypewriter
    }
}
