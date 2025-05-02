'use client'

import { ReactNode } from 'react'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div id='page-wrapper'>
        <div id='page-background' />
        <div className='container'>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
