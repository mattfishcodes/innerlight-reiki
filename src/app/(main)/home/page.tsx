'use client'

import HeroSection from './components/HeroSection'
import ServicesCards from './components/ServicesCards'
import MapEmbed from './components/MapEmbed'
import Disclaimer from './components/Disclaimer'

const Home = () => {
  return (
    <div className='pb-3 text-center'>
      <HeroSection />

      <ServicesCards />

      <MapEmbed />

      <Disclaimer />
    </div>
  )
}

export default Home
