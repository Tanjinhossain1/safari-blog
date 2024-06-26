import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
  return (
    <>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </>
  )
}
