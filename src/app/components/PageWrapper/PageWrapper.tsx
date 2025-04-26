'use client'

import { ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div id='page-wrapper'>
        <div id='page-background' />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
