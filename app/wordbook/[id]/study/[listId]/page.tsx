'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import StudyPageClient from './study-client'

export default async function StudyPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string; listId: string }>
  searchParams: Promise<{ mode?: string }>
}) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  
  return (
    <StudyPageClient 
      id={resolvedParams.id} 
      listId={resolvedParams.listId}
      mode={(resolvedSearchParams.mode || 'flashcard') as 'flashcard' | 'dictation' | 'choice' | 'matching'}
    />
  )
}
