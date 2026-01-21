'use client'

import Bio from './components/Bio'
import Qualifications from './components/Qualifications'

export default function About() {
  return (
    <div className='py-3'>
      <Bio />
      <hr className='border-primary my-4 rounded-xl border' />
      <Qualifications />
    </div>
  )
}
