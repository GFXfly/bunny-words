'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import { registerUser } from '@/lib/utils/auth-manager'
import { toast } from 'sonner'

export default function RegisterPage() {
  const router = useRouter()
  const [phone, setPhone] = useState('')
  const [registrationCode, setRegistrationCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // 验证两次密码是否一致
    if (password !== confirmPassword) {
      setError('两次密码输入不一致')
      return
    }

    // 验证注册码不能为空
    if (!registrationCode.trim()) {
      setError('请输入注册码')
      return
    }

    setIsLoading(true)

    // 调用注册函数
    const result = registerUser(phone, password, registrationCode)

    setIsLoading(false)

    if (result.success) {
      // 注册成功，显示成功消息并跳转到登录页
      toast.success('注册成功', {
        description: '请登录您的账号'
      })
      router.push('/login')
    } else {
      // 注册失败，显示错误消息
      setError(result.message)
      toast.error('注册失败', {
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
            注册账号
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl shadow-gray-100/50 p-8 md:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">创建账号</h2>
            <p className="text-gray-500 text-sm">加入 Bunny Words 开始学习之旅</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
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
                注册码
              </label>
              <Input
                type="text"
                placeholder="请输入注册码"
                value={registrationCode}
                onChange={(e) => setRegistrationCode(e.target.value)}
                required
                className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-[#E85D75] transition-all rounded-xl"
              />
              <p className="text-xs text-gray-400 mt-1">
                💡 提示：注册码可从学习卡或购买凭证中获取
              </p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                设置密码
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="8-20位字母和数字组合"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  maxLength={20}
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
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                确认密码
              </label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="请再次输入密码"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full h-12 bg-gray-50 border-gray-200 focus:bg-white focus:border-[#E85D75] transition-all rounded-xl pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#E85D75] transition-colors cursor-pointer p-1"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#E85D75] to-[#F7A1B0] hover:from-[#D84B67] hover:to-[#E690A0] text-white h-12 text-base font-medium rounded-xl shadow-lg shadow-[#E85D75]/20 hover:shadow-[#E85D75]/30 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isLoading ? '注册中...' : '注册'}
            </Button>

            <div className="text-center text-sm text-gray-500 mt-6">
              已有账号？{' '}
              <Link href="/login" className="text-[#E85D75] font-medium hover:text-[#D84B67] hover:underline transition-all">
                立即登录
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
