'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { loginUser } from '@/lib/utils/auth-manager'
import { toast } from 'sonner'

export default function LoginPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // 调用登录函数
    const result = loginUser(phone, password)

    setIsLoading(false)

    if (result.success) {
      // 登录成功，跳转到首页
      toast.success('登录成功', {
        description: '欢迎回来！'
      })
      router.push('/')
    } else {
      // 登录失败，显示错误消息
      setError(result.message)
      toast.error('登录失败', {
        description: result.message
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-10">
        <div className="container mx-auto flex items-center relative">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#E85D75] transition-colors flex items-center gap-1">
            <span className="text-lg">←</span> 返回首页
          </Link>
          <h1 className="absolute left-1/2 -translate-x-1/2 text-lg font-bold text-gray-900">
            登录
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl shadow-gray-100/50 p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">欢迎回来</h2>
            <p className="text-gray-500 text-sm">登录您的 Bunny Words 账号</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* 错误提示 */}
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                手机号
              </label>
              <Input
                type="tel"
                placeholder="请输入手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-[#E85D75] transition-all rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                密码
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="请输入密码"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-[#E85D75] transition-all rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#E85D75] transition-colors cursor-pointer p-1"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-xs text-gray-400 hover:text-[#E85D75] transition-colors"
                >
                  忘记密码?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#E85D75] to-[#F7A1B0] hover:from-[#D84B67] hover:to-[#E690A0] text-white h-12 text-base font-medium rounded-xl shadow-lg shadow-[#E85D75]/20 hover:shadow-[#E85D75]/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isLoading ? '登录中...' : '登录'}
            </Button>

            <div className="text-center text-sm text-gray-500 mt-6">
              还没有账号？{' '}
              <Link href="/register" className="text-[#E85D75] font-medium hover:text-[#D84B67] hover:underline transition-all">
                立即注册
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

