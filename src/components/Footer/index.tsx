'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import routes from '@/app/routes'
import primaryColorIcon from '@/assets/images/base_icon_transparent_background.png'
import { cn } from '@/lib/utils'

import { ImageWithSkeleton } from '../ImageWithSkeleton'

export const Footer = () => {
  const pn = usePathname()

  const linkStyle = cn(
    'text-foreground flex flex-col gap-1 rounded-3xl px-4 py-2 text-lg transition-all outline-none md:text-sm',

    'hover:bg-primary hover:text-white',
    'active:bg-primary/80',

    'data-[active=true]:bg-primary/20',
    'data-[active=true]:hover:bg-primary data-[active=true]:hover:text-white',
    'data-[active=true]:active:bg-primary/80',

    'focus-visible:ring-ring/50 focus-visible:ring-3',

    '[&_svg:not([class*="size-"])]:size-4',
    '[&_svg:not([class*="text-"])]:text-muted-foreground',
  )

  return (
    <footer className='flex justify-center bg-white'>
      <div className='container flex flex-col justify-center px-4 py-4 lg:flex-row lg:justify-between lg:px-0'>
        <div className='mb-1 flex flex-col items-center gap-1 lg:mb-0 lg:flex-row lg:gap-3'>
          <div className='hidden h-20 w-auto lg:block'>
            <ImageWithSkeleton
              src={primaryColorIcon}
              alt=''
              sizes='5vw'
              className='h-20 w-auto'
            />
          </div>

          {routes.map((r, i) => {
            const isActive = pn === r.href
            return (
              <Link
                className={linkStyle}
                href={r.href}
                key={i}
                data-active={isActive}
                aria-current={isActive && 'page'}
              >
                {r.name}
              </Link>
            )
          })}
        </div>

        <div className='flex flex-col items-center gap-1 lg:flex-row lg:gap-3'>
          <Link
            className={linkStyle}
            href='/privacy-policy'
            data-active={pn === '/privacy-policy/'}
            aria-current={pn === '/privacy-policy/' && 'page'}
          >
            Privacy Policy
          </Link>
          <span className='py-4 lg:py-0'>&copy; 2025 Inner Light Reiki</span>
        </div>
      </div>
    </footer>
  )
}
