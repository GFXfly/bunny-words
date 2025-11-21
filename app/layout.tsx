import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Caveat } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _caveat = Caveat({ subsets: ["latin"], variable: '--font-handwritten' });

export const metadata: Metadata = {
  title: '个人学习工具',
  description: '让词汇学习变得有趣又温暖 - 兔兔单词，你的友好语言学习伙伴',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans antialiased ${_caveat.variable}`}>
        {children}
      </body>
    </html>
  )
}
