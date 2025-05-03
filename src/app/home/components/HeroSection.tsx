'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <div className='container-lg py-5 d-flex flex-column align-items-center text-center'>
        <Image
          className='img-fluid'
          src='/base_textlogo_transparent_background.png'
          alt=''
          width={800}
          height={500}
          priority
        />
      </div>
      <p style={{ fontFamily: 'var(--font-noto-serif-display)' }}>
        Traverse City, MI
      </p>
      <p className='fs-4 mx-auto pb-3'>
        I believe in the profound ability of Reiki to promote healing, balance,
        and inner peace. <br />
        My mission is to guide you on your journey towards well-being through
        the gentle practice of Reiki.
      </p>
    </>
  )
}

export default HeroSection
