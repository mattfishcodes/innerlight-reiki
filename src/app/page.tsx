'use client'

import Image from 'next/image'
import { images } from '@/lib/images'
import { useState } from 'react'
import styles from './page.module.scss'

export default function Welcome() {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`position-relative d-flex justify-content-center align-items-center ${styles.pageWrapper} ${loaded ? styles.loaded : ''}`}
    >
      <Image
        src={images.mountainLake.src}
        alt=''
        fill
        sizes='100vh'
        style={{ objectFit: 'cover', zIndex: -1 }}
        priority
        onLoad={() => setLoaded(true)}
      />

      <div className='d-flex flex-column justify-content-center align-items-center px-3'>
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
