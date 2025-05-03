'use client'

import { ReactNode } from 'react'
import Header from '@/app/components/Header/Header'
import Footer from '@/app/components/Footer/Footer'
import { images } from '@/lib/images'
import styles from './PageWrapper.module.scss'

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <div
          className={styles.pageBackground}
          style={{ backgroundImage: `url('${images.mountainLakeBlue.src}')` }}
        />
        <div className='container'>{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default PageWrapper
