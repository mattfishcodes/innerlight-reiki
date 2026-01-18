'use client'

import { type ReactNode } from 'react'

import { motion, useScroll } from 'motion/react'

import Image from 'next/image'

import mountainBackgroundImg from '@/assets/images/mountain-lake-blue.jpg'

export const PageBackground = ({ children }: { children: ReactNode }) => {
  const { scrollY } = useScroll()

  return (
    <>
      <div className='relative min-h-screen overflow-hidden p-0'>
        <motion.div style={{ y: scrollY }} className='absolute inset-0 -z-10'>
          <Image
            src={mountainBackgroundImg}
            alt=''
            fill
            className='object-cover object-[50%_30%] opacity-10'
          />
        </motion.div>
        {children}
      </div>
    </>
  )
}
