'use client'

import routes from '@/app/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pn = usePathname()

  return (
    <div className='border-top'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='navbar navbar-light nav'>
          {routes.map((v, i) => (
            <Link
              className={`nav-link p-0 me-4 ${pn === v.href ? 'active' : ''}`}
              href={v.href}
              key={i}
            >
              {v.name}
            </Link>
          ))}
        </div>
        <div className='d-flex gap-3'>
          <Link
            className={`nav-link ${pn === '/privacy-policy' ? 'active' : ''}`}
            href='/privacy-policy'
          >
            Privacy Policy
          </Link>
          <span>Copyright 2025 Crackerjack Solutions, LLC</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
