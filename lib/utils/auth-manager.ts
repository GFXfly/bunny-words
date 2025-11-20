// 用户认证管理工具

export interface User {
    phone: string
    password: string
    registrationCode: string
    expireDate: string
    isLoggedIn: boolean
    createdAt: string
}

// 预设的有效注册码
const VALID_REGISTRATION_CODES = [
    'BUNNY2024',
    'WORDS2024',
    'STUDY2024',
    'LEARN2024',
    'HAPPY2024',
]

// 验证注册码
export function validateRegistrationCode(code: string): boolean {
    return VALID_REGISTRATION_CODES.includes(code.toUpperCase())
}

// 验证手机号格式
export function validatePhone(phone: string): boolean {
    const phoneRegex = /^1[3-9]\d{9}$/
    return phoneRegex.test(phone)
}

// 验证密码格式（8-20位字母和数字组合）
export function validatePassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/
    return passwordRegex.test(password)
}

// 注册新用户
export function registerUser(
    phone: string,
    password: string,
    registrationCode: string
): { success: boolean; message: string } {
    // 验证手机号
    if (!validatePhone(phone)) {
        return { success: false, message: '请输入有效的手机号' }
    }

    // 验证密码
    if (!validatePassword(password)) {
        return { success: false, message: '密码必须为8-20位字母和数字组合' }
    }

    // 验证注册码
    if (!validateRegistrationCode(registrationCode)) {
        return { success: false, message: '注册码无效' }
    }

    // 检查用户是否已存在
    const users = getAllUsers()
    if (users.some((u) => u.phone === phone)) {
        return { success: false, message: '该手机号已注册' }
    }

    // 创建新用户（默认1年有效期）
    const expireDate = new Date()
    expireDate.setFullYear(expireDate.getFullYear() + 1)

    const newUser: User = {
        phone,
        password,
        registrationCode,
        expireDate: expireDate.toISOString().split('T')[0],
        isLoggedIn: false,
        createdAt: new Date().toISOString(),
    }

    // 保存用户
    users.push(newUser)
    localStorage.setItem('bunny_users', JSON.stringify(users))

    return { success: true, message: '注册成功' }
}

// 用户登录
export function loginUser(
    phone: string,
    password: string
): { success: boolean; message: string; user?: User } {
    // 验证手机号
    if (!validatePhone(phone)) {
        return { success: false, message: '请输入有效的手机号' }
    }

    const users = getAllUsers()
    const user = users.find((u) => u.phone === phone)

    if (!user) {
        return { success: false, message: '用户不存在' }
    }

    if (user.password !== password) {
        return { success: false, message: '密码错误' }
    }

    // 检查账号是否过期
    const today = new Date().toISOString().split('T')[0]
    if (user.expireDate < today) {
        return { success: false, message: '账号已过期，请联系客服续费' }
    }

    // 更新登录状态
    user.isLoggedIn = true
    updateUser(user)

    // 保存当前登录用户
    localStorage.setItem('current_user', JSON.stringify(user))

    // 触发登录事件
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('bunny_user_login'))
    }

    return { success: true, message: '登录成功', user }
}

// 用户登出
export function logoutUser(): void {
    const currentUser = getCurrentUser()
    if (currentUser) {
        currentUser.isLoggedIn = false
        updateUser(currentUser)
    }
    localStorage.removeItem('current_user')

    // 触发登出事件
    window.dispatchEvent(new Event('bunny_user_logout'))
}

// 获取当前登录用户
export function getCurrentUser(): User | null {
    if (typeof window === 'undefined') return null

    const userStr = localStorage.getItem('current_user')
    if (!userStr) return null

    try {
        const user = JSON.parse(userStr)

        // 检查账号是否过期
        const today = new Date().toISOString().split('T')[0]
        if (user.expireDate < today) {
            logoutUser()
            return null
        }

        return user
    } catch {
        return null
    }
}

// 检查用户是否已登录
export function isUserLoggedIn(): boolean {
    return getCurrentUser() !== null
}

// 获取所有用户
function getAllUsers(): User[] {
    if (typeof window === 'undefined') return []

    const usersStr = localStorage.getItem('bunny_users')
    if (!usersStr) return []

    try {
        return JSON.parse(usersStr)
    } catch {
        return []
    }
}

// 更新用户信息
function updateUser(updatedUser: User): void {
    const users = getAllUsers()
    const index = users.findIndex((u) => u.phone === updatedUser.phone)

    if (index !== -1) {
        users[index] = updatedUser
        localStorage.setItem('bunny_users', JSON.stringify(users))

        // 如果是当前用户，也更新当前用户信息
        const currentUser = getCurrentUser()
        if (currentUser && currentUser.phone === updatedUser.phone) {
            localStorage.setItem('current_user', JSON.stringify(updatedUser))
        }
    }
}

// 获取用户剩余天数
export function getUserRemainingDays(): number | null {
    const user = getCurrentUser()
    if (!user) return null

    const today = new Date()
    const expireDate = new Date(user.expireDate)
    const diffTime = expireDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    return diffDays > 0 ? diffDays : 0
}
