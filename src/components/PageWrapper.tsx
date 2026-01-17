'use client'

import { ReactNode } from 'react'
import mountainBackgroundImg from '@/assets/images/mountain-lake-blue.jpg'
import Image from 'next/image'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='relative min-h-[80vh] p-0'>
        <Image
          src={mountainBackgroundImg}
          alt=''
          fill
          className='-z-100 object-cover object-[50%_30%] opacity-10'
        />
        <div className='flex justify-center'>
          <div className='container px-4 lg:px-0'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper
