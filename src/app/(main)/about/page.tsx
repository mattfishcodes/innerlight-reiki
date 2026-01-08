'use client'

import Bio from './components/Bio'
import Qualifications from './components/Qualifications'

const About = () => {
  return (
    <div className='py-3'>
      <Bio />
      <hr className='border-primary rounded-xl border' />
      <Qualifications />
    </div>
  )
}

export default About
