'use client'

import routes from '@/app/routes'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pn = usePathname()

  return (
    <div className='border-top'>
      <div className='container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between navbar navbar-light'>
        <div className='d-flex align-items-center flex-column flex-lg-row gap-1 gap-lg-3 mb-1 mb-lg-0'>
          <Image
            src='/base_icon_transparent_background.png'
            alt=''
            className='img-fluid me-4 d-none d-lg-block'
            width={20}
            height={20}
            unoptimized
          />
          {routes.map((v, i) => (
            <Link
              className={`nav-link p-0 ${pn === v.href ? 'active' : ''}`}
              href={v.href}
              key={i}
            >
              {v.name}
            </Link>
          ))}
        </div>

        <div className='d-flex align-items-center flex-column flex-lg-row gap-1 gap-lg-3'>
          <Link
            className={`nav-link ${pn === '/privacy-policy' ? 'active' : ''}`}
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
