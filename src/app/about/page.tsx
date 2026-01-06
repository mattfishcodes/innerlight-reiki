'use client'

import PageWrapper from '@/components/PageWrapper'
import Bio from './components/Bio'
import Qualifications from './components/Qualifications'

const About = () => {
  return (
    <PageWrapper>
      <div className='py-3'>
        <Bio />
        <hr className='border-primary rounded border' />
        <Qualifications />
      </div>
    </PageWrapper>
  )
}

export default About
