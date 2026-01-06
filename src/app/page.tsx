'use client'

import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export default function Welcome() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={cn(
        'relative flex h-svh items-center justify-center opacity-0 transition-opacity',
        loaded && 'opacity-100',
      )}
    >
      <Image
        src='/mountain-lake.png'
        alt=''
        fill
        sizes='(max-width: 1200px) 400px, 1200px'
        className='-z-10 object-cover'
        priority
        onLoad={() => setLoaded(true)}
      />

      <div className='flex flex-col items-center justify-center px-3'>
        <Image
          src='/customcolor_logo_transparent_background.png'
          alt=''
          width={1000}
          height={500}
          className='drop-shadow-2xl/50 drop-shadow-black'
          priority
          unoptimized
        />
        <a
          id='enter-link'
          className='text-secondary border-secondary rounded-xl border-2 px-3 py-2 drop-shadow-2xl drop-shadow-black/50 transition-transform hover:scale-110'
          href='/home'
        >
          Enter
        </a>
      </div>
    </div>
  )
}
