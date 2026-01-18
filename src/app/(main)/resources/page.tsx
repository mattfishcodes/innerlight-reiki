'use client'

import ReikiSession from './components/ReikiSession'
import ResourceLinks from './components/ResourceLinks'
import WhatIsReiki from './components/WhatIsReiki'

const Resources = () => {
  return (
    <div className='py-3'>
      <WhatIsReiki />
      <ReikiSession />
      <ResourceLinks />
    </div>
  )
}

export default Resources
