import { Suspense } from 'react'
import StarredStudyClient from './starred-study-client'

export default async function StarredStudyPage({
  searchParams,
}: {
  searchParams: Promise<{ mode?: string }>
}) {
  const { mode = 'flashcard' } = await searchParams

  return (
    <Suspense fallback={<div>加载中...</div>}>
      <StarredStudyClient mode={mode} />
    </Suspense>
  )
}
