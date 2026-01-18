'use client'

import Link from 'next/link'

import secondaryColorLogo from '@/assets/images/customcolor_logo_transparent_background.png'

import { ImageWithSkeleton } from '../ImageWithSkeleton'
import { Navbar } from '../Navbar'
import { Offcanvas } from '../Offcanvas'

export const Header = () => {
  return (
    <header className='bg-primary flex justify-center'>
      <div className='container flex items-center justify-between px-4 py-4 lg:px-0'>
        <div className='w-[50%] md:w-[25%]'>
          <Link className='' href='/home'>
            <ImageWithSkeleton
              className=''
              src={secondaryColorLogo}
              alt=''
              sizes='30vw'
              loading='eager'
            />
          </Link>
        </div>

        {/* desktop nav */}

        <div className='hidden md:flex'>
          <Navbar />
        </div>

        {/* mobile nav */}
        <div className='md:hidden'>
          <Offcanvas />
        </div>
      </div>
    </header>
  )
}
