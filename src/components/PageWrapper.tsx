'use client'

import { ReactNode } from 'react'

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='relative min-h-[80vh] p-0'>
        <div className='absolute top-0 left-0 -z-10 h-full w-full bg-[url(/images/mountain-lake-blue-1200.webp)] bg-cover bg-fixed bg-position-[50%_30%] bg-no-repeat opacity-10' />
        <div className='flex justify-center'>
          <div className='container px-4 lg:px-0'>{children}</div>
        </div>
      </div>
    </>
  )
}
