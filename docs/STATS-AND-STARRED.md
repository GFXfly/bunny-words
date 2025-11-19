# 学习情况统计与星标功能说明

## 功能概述

已完成学习情况统计的优化和星标单词功能的实现。

## 学习情况统计

### 新的统计指标

根据 SRS 系统，我们重新设计了学习情况统计，包含以下四个核心指标：

#### 1. 总单词数 📚
- **颜色**：粉色 (#E85D75)
- **说明**：该词书包含的所有单词数量
- **图标**：书本图标
- **数据来源**：词书配置文件

#### 2. 已学习 ✅
- **颜色**：蓝色 (#2196F3)
- **说明**：至少复习过一次的单词数量
- **图标**：对勾图标
- **数据来源**：`localStorage` 中的 SRS 进度数据
- **计算逻辑**：统计所有 `reviewCount > 0` 的单词

#### 3. 待复习 ⏰
- **颜色**：橙色 (#FF9800)
- **说明**：当前需要复习的单词数量
- **图标**：时钟图标
- **数据来源**：`localStorage` 中的 SRS 进度数据
- **计算逻辑**：统计所有 `reviewCount > 0` 且 `nextReviewDate <= now` 的单词

#### 4. 已收藏 ⭐
- **颜色**：黄色 (#F57F17)
- **说明**：用户收藏的单词数量
- **图标**：星星图标
- **数据来源**：`localStorage` 中的星标数据
- **计算逻辑**：统计该词书中被星标的单词数量

### 布局优化

- **排列方式**：2x2 网格布局
- **卡片样式**：横向布局，图标在左，数据在右
- **内边距**：p-4（紧凑设计）
- **间距**：gap-3（适中间距）
- **悬停效果**：scale-[1.02]（轻微放大）

## 星标功能

### 功能实现

#### 1. 星标管理器 (`starred-manager.ts`)

提供以下核心函数：

```typescript
// 获取所有星标单词ID
getStarredWords(): Array<string | number>

// 检查单词是否已星标
isWordStarred(wordId: string | number): boolean

// 添加星标
addStarredWord(wordId: string | number): void

// 移除星标
removeStarredWord(wordId: string | number): void

// 切换星标状态
toggleStarredWord(wordId: string | number): boolean
```

#### 2. 数据存储

- **存储位置**：`localStorage`
- **Key**：`starred_words`
- **格式**：`Array<string | number>`（单词ID数组）

#### 3. UI 联动

**记忆卡片右上角的星标按钮**：
- 点击切换星标状态
- 状态实时同步到 `localStorage`
- 切换单词时自动加载星标状态
- 已星标：实心星星（黄色）
- 未星标：空心星星（灰色）

**学习情况统计**：
- 实时显示已收藏单词数量
- 只统计当前词书的星标单词

### 使用流程

1. **收藏单词**
   - 用户在学习时点击卡片右上角的星星
   - 系统将单词ID保存到 `localStorage`
   - 星星图标变为实心黄色

2. **取消收藏**
   - 再次点击星星
   - 系统从 `localStorage` 移除该单词ID
   - 星星图标变为空心灰色

3. **查看收藏**
   - 学习情况统计显示收藏数量
   - 可以在"星标单词本"页面查看所有收藏的单词

## 技术实现

### 数据流

```
用户点击星星
    ↓
toggleStarredWord(wordId)
    ↓
localStorage.setItem('starred_words', [...])
    ↓
setIsStarred(newState)
    ↓
UI 更新
```

### 统计计算

```
getWordbookStats(wordbookId)
    ↓
遍历所有 List 的 SRS 进度
    ↓
统计 learnedWords, dueForReview
    ↓
读取 starred_words
    ↓
过滤当前词书的星标单词
    ↓
返回统计结果
```

## 优势

1. **数据准确**：基于实际的学习进度和用户行为
2. **实时更新**：每次学习后立即更新统计
3. **持久化**：使用 `localStorage` 保存数据
4. **高性能**：只在需要时计算统计数据
5. **用户友好**：直观的视觉反馈

## 未来优化

1. **云端同步**：将数据同步到服务器
2. **学习曲线**：添加学习进度图表
3. **学习提醒**：根据待复习数量推送提醒
4. **导出功能**：导出星标单词列表
5. **分类管理**：支持自定义星标分类
