'use client'

import { ReactNode } from 'react'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className='relative min-h-[80vh] p-0'>
        <div className='absolute top-0 left-0 -z-10 h-full w-full bg-[url(/images/mountain-lake-blue-1200.webp)] bg-cover bg-fixed bg-position-[50%_30%] bg-no-repeat opacity-10' />
        <div className='flex justify-center'>
          <div className='max-w-300'>{children}</div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper
