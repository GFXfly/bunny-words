'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { isUserLoggedIn } from '@/lib/utils/auth-manager'

export function HeroSection() {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setLoggedIn(isUserLoggedIn())

    // 监听登出事件
    const handleLogout = () => {
      setLoggedIn(false)
    }

    window.addEventListener('bunny_user_logout', handleLogout)

    return () => {
      window.removeEventListener('bunny_user_logout', handleLogout)
    }
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#FFF9F0]">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#FFE4E9]/30 blur-3xl" />
        <div className="absolute top-[20%] right-[0%] w-[40%] h-[40%] rounded-full bg-[#E0F7FA]/30 blur-3xl" />
        <div className="absolute bottom-[0%] left-[20%] w-[30%] h-[30%] rounded-full bg-[#FFF3E0]/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-12 md:py-20 lg:py-24">

          {/* Left Content */}
          <div className="max-w-xl text-left space-y-6 md:space-y-8 shrink-0">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.15]">
                <span className="block text-[#E85D75]">轻松学习</span>
                <span className="block mt-2">兔兔陪伴</span>
              </h1>
            </div>

            {/* 只在未登录时显示注册按钮 */}
            {!loggedIn && (
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto rounded-full bg-[#E85D75] hover:bg-[#D64C63] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#E85D75]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer border-0"
                  >
                    立即注册
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="w-full max-w-md md:max-w-lg relative">
            <div className="relative aspect-[4/3] w-full">
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-[#E85D75]/10 bg-white/50 backdrop-blur-sm border border-white/50 transform hover:scale-[1.02] transition-transform duration-500">
                <Image
                  src="/bunny-studying.png"
                  alt="Bunny Studying"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-[#FFD4DC] rounded-full blur-xl opacity-60 animate-pulse" />
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-[#E0F7FA] rounded-full blur-xl opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
