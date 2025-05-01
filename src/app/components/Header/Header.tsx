'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import routes from '@/app/routes'

const Header = () => {
  const pn = usePathname()
  return (
    <div className='border-bottom bg-primary'>
      <div className='d-flex flex-nowrap align-items-center justify-content-between container navbar navbar-dark'>
        <a className='navbar-brand  w-25' href='/home'>
          <Image
            className='img-fluid'
            src='/customcolor_logo_transparent_background-e1720475243793.png'
            alt=''
            width={1000}
            height={500}
          />
        </a>
        <div className='nav'>
          {routes.map((v, i) => (
            <Link
              className={`nav-link p-0 ms-4 ${pn === v.href ? 'active' : ''}`}
              href={v.href}
              key={i}
            >
              {v.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
