'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'

const Header = () => {
  const pn = usePathname()
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
      <div className='container'>
        <Link className={`navbar-brand w-lg-25 w-50`} href='/home'>
          <Image
            className='img-fluid'
            src='/customcolor_logo_transparent_background.png'
            alt=''
            width={2969}
            height={658}
            priority
            unoptimized
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarToggler'
          aria-controls='navbarToggler'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='navbar-collapse justify-content-end collapse'
          id='navbarToggler'
        >
          <ul className='navbar-nav'>
            {routes.map((v, i) => (
              <li key={i} className='nav-item'>
                <Link
                  className={`nav-link m-2 p-0 ${pn.startsWith(v.href) ? 'active' : ''}`}
                  href={v.href}
                >
                  {v.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
