'use client'

import PageWrapper from '@/app/components/PageWrapper/PageWrapper'
import Bio from './components/Bio'
import Qualifications from './components/Qualifications'

const About = () => {
  return (
    <PageWrapper>
      <div className='py-3'>
        <Bio />
        <hr className='border border-primary rounded' />
        <Qualifications />
      </div>
    </PageWrapper>
  )
}

export default About
