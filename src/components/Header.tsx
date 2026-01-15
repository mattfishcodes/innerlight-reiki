'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './Navbar'
import { Offcanvas } from './Offcanvas'

const Header = () => {
  return (
    <header className='bg-primary flex justify-center'>
      <div className='container flex items-center justify-between px-4 py-4 lg:px-0'>
        <div className='w-[50%] md:w-[25%]'>
          <Link className='' href='/home'>
            <Image
              src='/customcolor_logo_transparent_background.png'
              alt=''
              width={2969}
              height={658}
              priority
              unoptimized
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

export default Header
