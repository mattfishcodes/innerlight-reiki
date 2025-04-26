'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <div
      className='vw-100 vh-100 d-flex justify-content-center align-items-center'
      style={{ backgroundImage: `url('/mountain-lake.jpg')` }}
    >
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <Image
          className='img-fluid'
          style={{ filter: 'drop-shadow(5px 5px 5px black)' }}
          src='/customcolor_logo_transparent_background-e1720475243793.png'
          alt=''
          width={1000}
          height={500}
        />
        <a
          id='enter-link'
          className='text-secondary border border-2 border-secondary rounded px-3 py-2'
          href='/home'
        >
          Enter
        </a>
      </div>
    </div>
  )
}
