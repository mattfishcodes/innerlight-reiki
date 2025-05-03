'use client'

import Image from 'next/image'
import { images } from '@/lib/images'

export default function Welcome() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{
        backgroundImage: `url('${images.mountainLake.src}')`,
        height: '100svh',
        backgroundSize: 'cover',
      }}
    >
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Image
          className='img-fluid'
          style={{ filter: 'drop-shadow(5px 5px 5px black)' }}
          src='/customcolor_logo_transparent_background.png'
          alt=''
          width={1000}
          height={500}
          priority
        />
        <a
          id='enter-link'
          className='text-secondary border border-2 border-secondary rounded px-3 py-2'
          style={{ filter: 'drop-shadow(5px 5px 5px black)' }}
          href='/home'
        >
          Enter
        </a>
      </div>
    </div>
  )
}
