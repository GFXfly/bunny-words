import { Suspense } from 'react'
import StarredWordsClient from './starred-words-client'

export default async function StarredWordsPage({
  searchParams,
}: {
  searchParams: Promise<{ fromWordbook?: string }>
}) {
  const { fromWordbook } = await searchParams

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <StarredWordsClient fromWordbook={fromWordbook} />
    </Suspense>
  )
}
