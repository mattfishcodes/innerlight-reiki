'use client'

import { useState } from 'react'

import Image, { type StaticImageData } from 'next/image'

import { cn } from '@/lib/utils'
import { Skeleton } from '@/shadcn/ui/skeleton'

export function ImageWithSkeleton({
  src,
  alt,
  sizes,
  loading = 'lazy',
  className = '',
}: {
  src: StaticImageData
  alt: string
  sizes?: string
  priority?: boolean
  loading?: 'lazy' | 'eager' | undefined
  className?: string
}) {
  const [loaded, setLoaded] = useState(false)

  const aspectRatio = src.width / src.height

  return (
    <div
      className='relative w-full overflow-hidden rounded-lg'
      style={{ aspectRatio }}
    >
      {/* Skeleton */}
      <Skeleton
        className={cn(
          'absolute inset-0 opacity-100 transition-opacity',
          loaded && 'animate-none opacity-0',
        )}
      />

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        sizes={sizes}
        loading={loading}
        className={cn(
          'h-full w-full object-cover opacity-0 transition-opacity duration-500',
          loaded && 'opacity-100',
          className,
        )}
      />
    </div>
  )
}
