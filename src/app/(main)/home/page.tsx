'use client'

import Disclaimer from './components/Disclaimer'
import HeroSection from './components/HeroSection'
import MapEmbed from './components/MapEmbed'
import ServicesCards from './components/ServicesCards'

const Home = () => {
  return (
    <div className='pb-3 text-center'>
      <HeroSection />

      <ServicesCards />

      <div className='bg-primary mt-6 h-0.5 rounded-md' />
      <div className='py-8 text-xl'>
        Contact me to schedule an appointment at{' '}
        <address>
          <a
            href='mailto:innerlightreikija@gmail.com'
            className='hover:text-primary active:text-primary not-italic underline transition-colors'
          >
            innerlightreikija@gmail.com
          </a>
        </address>
      </div>
      <div className='bg-primary mb-6 h-0.5 rounded-md' />

      <div className='text-md md:text-lg'>
        <address className='font-noto-serif'>
          Bodies in Motion Studio, 10660 E Carter Rd, Traverse City, MI 49684
        </address>
      </div>

      <MapEmbed />

      <Disclaimer />
    </div>
  )
}

export default Home
