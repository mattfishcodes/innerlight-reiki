import { TriangleAlert } from 'lucide-react'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='flex h-screen w-screen flex-col items-center justify-center'>
      <h1 className='flex items-center gap-2'>
        <TriangleAlert />
        <span>404 Page Not Found</span>
      </h1>
      <Link
        href='/home'
        className='rounded-md p-4 transition-colors hover:bg-black hover:text-white'
      >
        Go back to homepage
      </Link>
    </main>
  )
}
