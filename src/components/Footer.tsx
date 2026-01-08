'use client'

import routes from '@/app/routes'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Footer = () => {
  const pn = usePathname()

  return (
    <div className='flex justify-center'>
      <div className='container flex flex-col justify-center px-4 py-4 lg:flex-row lg:justify-between lg:px-0'>
        <div className='mb-1 flex flex-col items-center gap-1 lg:mb-0 lg:flex-row lg:gap-3'>
          <Image
            src='/base_icon_transparent_background.png'
            alt=''
            className='me-4 hidden lg:block'
            width={20}
            height={20}
            unoptimized
          />
          {routes.map((r, i) => {
            return (
              <Link
                className={cn(
                  'hover:text-primary p-0 transition-all',
                  pn === r.href && 'text-primary',
                )}
                href={r.href}
                key={i}
              >
                {r.name}
              </Link>
            )
          })}
        </div>

        <div className='flex flex-col items-center gap-1 lg:flex-row lg:gap-3'>
          <Link
            className={cn(
              'hover:text-primary transition-all',
              pn === 'privacy-policy' && 'text-primary',
            )}
            href='/privacy-policy'
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
