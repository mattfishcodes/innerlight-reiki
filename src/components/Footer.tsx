'use client'

import routes from '@/app/routes'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import primaryColorIcon from '@/assets/images//base_icon_transparent_background.png'

const Footer = () => {
  const pn = usePathname()

  const linkStyle = cn(
    'text-foreground flex flex-col gap-1 rounded-3xl px-4 py-2 text-lg transition-all outline-none md:text-sm',

    'hover:text-secondary-foreground hover:bg-white',
    'active:text-secondary-foreground active:bg-white',

    'data-[active=true]:bg-primary/20',
    'data-[active=true]:hover:text-secondary-foreground data-[active=true]:hover:bg-white',
    'data-[active=true]:active:text-secondary-foreground data-[active=true]:active:bg-white',

    'focus-visible:ring-ring/50 focus-visible:ring-3',

    '[&_svg:not([class*="size-"])]:size-4',
    '[&_svg:not([class*="text-"])]:text-muted-foreground',
  )

  return (
    <div className='flex justify-center'>
      <div className='container flex flex-col justify-center px-4 py-4 lg:flex-row lg:justify-between lg:px-0'>
        <div className='mb-1 flex flex-col items-center gap-1 lg:mb-0 lg:flex-row lg:gap-3'>
          <Image
            src={primaryColorIcon}
            alt=''
            className='me-4 hidden h-20 w-auto lg:block'
            sizes='5vw'
          />

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
          <span>&copy; 2025 Inner Light Reiki</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
