'use client'

import WhatIsReiki from './components/WhatIsReiki'
import ReikiSession from './components/ReikiSession'
import ResourceLinks from './components/ResourceLinks'

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
