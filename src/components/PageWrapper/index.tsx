'use client'

import { ReactNode } from 'react'
import mountainBackgroundImg from '@/assets/images/mountain-lake-blue.jpg'
import { motion, useScroll } from 'motion/react'
import Image from 'next/image'

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const { scrollY } = useScroll()

  return (
    <>
      <div className='relative min-h-[80vh] overflow-hidden p-0'>
        <motion.div style={{ y: scrollY }} className='absolute inset-0 -z-10'>
          <Image
            src={mountainBackgroundImg}
            alt=''
            fill
            className='object-cover object-[50%_30%] opacity-10'
          />
        </motion.div>
        <div className='flex justify-center'>
          <div className='container px-4 lg:px-0'>{children}</div>
        </div>
      </div>
    </>
  )
}
