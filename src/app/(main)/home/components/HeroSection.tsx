'use client'

import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <div className='flex flex-col items-center py-4'>
        <Image
          className='lg:w-[80%]'
          src='/base_textlogo_transparent_background.png'
          alt=''
          width={1489}
          height={290}
          priority
          unoptimized
        />
      </div>
      <p className='font-noto-serif-display text-2xl font-semibold'>
        Traverse City, MI
      </p>
      <p className='mx-auto my-3 text-xl'>
        I believe in the profound ability of Reiki to promote healing, balance,
        and inner peace. <br className='hidden lg:block' />
        My mission is to guide you on your journey towards well-being through
        the gentle practice of Reiki.
      </p>
    </>
  )
}

export default HeroSection
