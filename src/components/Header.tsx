'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const scrollY = window.scrollY

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''

      window.scrollTo(0, scrollY)
    }
  }, [locked])
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const pn = usePathname()

  useLockBodyScroll(open)

  return (
    <nav className='bg-primary flex justify-center'>
      <div className='container flex items-center justify-between px-4 py-4 lg:px-0'>
        <div className='w-[50%] lg:w-[25%]'>
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

        <nav className='hidden lg:block'>
          <ul className='flex gap-4'>
            {routes.map((r, i) => {
              return (
                <li key={i}>
                  <Link
                    className={cn(
                      'text-secondary transition-colors hover:text-white',
                      pn === r.href && 'text-white',
                    )}
                    href={r.href}
                  >
                    {r.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* mobile nav */}
        <button
          className='lg:hidden'
          aria-controls='navbarToggler'
          aria-expanded={open}
          aria-label='Toggle navigation'
          onClick={() => setOpen(true)}
        >
          <Menu className='stroke-secondary' />
        </button>

        {open && (
          <div
            onClick={() => setOpen(false)}
            className='fixed inset-0 z-30 bg-black/40 lg:hidden'
          />
        )}

        <nav
          id='navbarToggler'
          ref={ref}
          className={cn(
            'lg:hidden',
            'bg-primary fixed inset-x-0 top-0 z-40',
            'origin-top transform-gpu',
            'transition-all duration-300 ease-in-out',
            'pointer-events-none -translate-y-full opacity-0',
            'flex flex-col py-4',
            'motion-reduce:transition-none',
            'text-right',
            open && 'pointer-events-auto translate-y-0 opacity-100',
          )}
        >
          <div className='mx-4'>
            <button onClick={() => setOpen(false)}>
              <X className='stroke-secondary' size={24} />
            </button>
          </div>
          <ul className='flex flex-col gap-2'>
            {routes.map((v, i) => (
              <li key={i} className='mx-4'>
                <Link
                  className={cn(
                    'text-secondary',
                    pn === v.href && 'text-white',
                  )}
                  href={v.href}
                  onClick={() => setOpen(false)}
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </nav>
  )
}

export default Header
