'use client'

import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function Header() {
  const router = useRouter()
  const [user, setUser] = useState<{ phone: string; expireDate: string } | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      const parsed = JSON.parse(userData)
      if (parsed.isLoggedIn) {
        setUser({ phone: parsed.phone, expireDate: parsed.expireDate })
      }
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setShowDropdown(false)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-[0_2px_8px_rgba(232,93,117,0.15)] group-hover:shadow-[0_4px_12px_rgba(232,93,117,0.25)] transition-all duration-300 group-hover:scale-105">
            <Image
              src="/bunny-icon.png"
              alt="兔兔单词"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#E85D75] to-[#F7A1B0] bg-clip-text text-transparent tracking-tight group-hover:opacity-80 transition-opacity">
            兔兔单词
          </span>
        </Link>

        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#E85D75] to-[#F7A1B0] text-white flex items-center justify-center text-sm md:text-base font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              1
            </button>

            {showDropdown && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowDropdown(false)}
                />
                <div className="absolute right-0 top-14 w-72 bg-white rounded-2xl shadow-2xl z-50 p-5 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#FFF0F3] flex items-center justify-center text-[#E85D75]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <span className="font-semibold text-base text-foreground">{user.phone}</span>
                  </div>

                  <div className="mb-4 py-3 px-4 bg-gradient-to-r from-[#FFF9E6] to-[#FFFEF5] rounded-xl border border-yellow-100 shadow-sm">
                    <span className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      到期：<span className="font-semibold text-foreground">{user.expireDate}</span>
                    </span>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 text-sm text-foreground hover:text-[#E85D75] hover:bg-[#FFF5F8] transition-all duration-200 py-3 px-3 rounded-lg font-medium cursor-pointer group"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    退出登录
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <Link href="/login">
            <Button className="rounded-full bg-gradient-to-r from-[#E85D75] to-[#F7A1B0] text-white hover:shadow-lg hover:shadow-[#E85D75]/30 hover:scale-105 transition-all duration-300 text-sm md:text-base px-6 md:px-8 min-h-[44px] font-semibold cursor-pointer border-0">
              登录
            </Button>
          </Link>
        )}
      </div>
    </header>
  )
}
