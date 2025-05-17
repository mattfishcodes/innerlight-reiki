'use client'

import { ReactNode } from 'react'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import styles from './PageWrapper.module.scss'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <div
          className={styles.pageBackground}
          style={{
            backgroundImage: `url('/images/src/mountain-lake-blue.jpg')`,
          }}
        />
        <div className='container'>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
