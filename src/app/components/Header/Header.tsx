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
        <Link className='navbar-brand w-25' href='/home'>
          <Image
            className='img-fluid'
            src='/customcolor_logo_transparent_background.png'
            alt=''
            width={500}
            height={250}
            priority
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
          aria-controls='navbarTogglerDemo01'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarTogglerDemo01'
        >
          <ul className='navbar-nav'>
            {routes.map((v, i) => (
              <li key={i} className='nav-item'>
                <Link
                  className={`nav-link p-0 ms-2 ms-md-4 ${pn.startsWith(v.href) ? 'active' : ''}`}
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
