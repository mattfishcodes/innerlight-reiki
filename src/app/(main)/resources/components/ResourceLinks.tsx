'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

const ResourceLinks = () => {
  return (
    <div className='py-3'>
      <h3 className='text-primary text-lg-start text-center'>Links</h3>
      <ul className='list-group'>
        <a
          href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871310/'
          className='list-group-item list-group-item-action list-group-item-primary'
        >
          Reiki is Better Than Placebo and Has Broad Potential as a
          Complementary Health Therapy <SquareArrowOutUpRight size={18} />
        </a>
        <a
          href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022/'
          className='list-group-item list-group-item-action list-group-item-primary'
        >
          A Large Scale Effectiveness Trial of Reiki for Physical and
          Psychological Health <SquareArrowOutUpRight size={18} />
        </a>
        <a
          href='https://centerforreikiresearch.com/'
          className='list-group-item list-group-item-action list-group-item-primary'
        >
          The Center for Reiki Research <SquareArrowOutUpRight size={18} />
        </a>
      </ul>
    </div>
  )
}

export default ResourceLinks
