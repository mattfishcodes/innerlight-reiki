'use client'

import { useState } from 'react'

import Image from 'next/image'

import secondaryColorLogo from '@/assets/images/customcolor_logo_transparent_background.png'
import mountainLakeImg from '@/assets/images/mountain-lake.jpg'
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
        src={mountainLakeImg}
        alt=''
        fill
        sizes='(max-width: 1200px) 400px, 1200px'
        className='-z-10 object-cover'
        priority
        onLoad={() => setLoaded(true)}
      />

      <div className='container flex flex-col items-center justify-center px-3'>
        <Image
          src={secondaryColorLogo}
          alt=''
          className='drop-shadow-2xl/50 drop-shadow-black'
          sizes='(max-width: 1200px) 400px, 1200px'
          priority
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
