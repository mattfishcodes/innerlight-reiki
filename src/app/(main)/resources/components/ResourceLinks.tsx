'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

const ResourceLinks = () => {
  return (
    <div className='py-3'>
      <h3 className='text-primary text-center lg:text-start'>Links</h3>
      <ul className='border-primary/40 bg-primary/20 flex flex-col rounded-md border'>
        <a
          href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871310/'
          className='border-primary/40 hover:bg-primary-100/20 flex items-center gap-1 border-b px-4 py-2 transition-colors'
        >
          Reiki is Better Than Placebo and Has Broad Potential as a
          Complementary Health Therapy <SquareArrowOutUpRight size={16} />
        </a>
        <a
          href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022/'
          className='border-primary/40 hover:bg-primary-100/20 flex items-center gap-1 border-b px-4 py-2 transition-colors'
        >
          A Large Scale Effectiveness Trial of Reiki for Physical and
          Psychological Health <SquareArrowOutUpRight size={16} />
        </a>
        <a
          href='https://centerforreikiresearch.com/'
          className='hover:bg-primary-100/20 flex items-center gap-1 px-4 py-2 transition-colors'
        >
          The Center for Reiki Research <SquareArrowOutUpRight size={16} />
        </a>
      </ul>
    </div>
  )
}

export default ResourceLinks
