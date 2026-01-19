'use client'

import { SquareArrowOutUpRight } from 'lucide-react'

const ResourceLinks = () => {
  return (
    <div className='py-3'>
      <h3 className='text-primary text-center lg:text-start'>Links</h3>
      <ul className='border-primary/40 flex flex-col rounded-md border'>
        <li className='border-primary/40 bg-primary/20 hover:bg-primary/15 border-b transition-colors'>
          <a
            href='https://journals.sagepub.com/doi/10.1177/2156587217728644'
            className='flex items-center gap-1 px-4 py-2'
          >
            Reiki is Better Than Placebo and Has Broad Potential as a
            Complementary Health Therapy <SquareArrowOutUpRight size={16} />
          </a>
        </li>
        <li className='border-primary/40 bg-primary/20 hover:bg-primary/15 border-b transition-colors'>
          <a
            href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022'
            className='flex items-center gap-1 px-4 py-2'
          >
            A Large Scale Effectiveness Trial of Reiki for Physical and
            Psychological Health <SquareArrowOutUpRight size={16} />
          </a>
        </li>
        <li className='bg-primary/20 hover:bg-primary/15 transition-colors'>
          <a
            href='https://centerforreikiresearch.com/'
            className='flex items-center gap-1 px-4 py-2'
          >
            The Center for Reiki Research <SquareArrowOutUpRight size={16} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ResourceLinks
