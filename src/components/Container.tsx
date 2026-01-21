'use client'

import { type ReactNode } from 'react'

export default function Container({
  children,
}: {
  children?: ReactNode | ReactNode[]
}) {
  return (
    <div className='flex justify-center'>
      <div className='container px-4 lg:px-0'>{children}</div>
    </div>
  )
}
