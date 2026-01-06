'use client'

import PageWrapper from '@/components/PageWrapper'
import WhatIsReiki from './components/WhatIsReiki'
import ReikiSession from './components/ReikiSession'
import ResourceLinks from './components/ResourceLinks'

const Resources = () => {
  return (
    <PageWrapper>
      <div className='py-3'>
        <WhatIsReiki />
        <ReikiSession />
        <ResourceLinks />
      </div>
    </PageWrapper>
  )
}

export default Resources
