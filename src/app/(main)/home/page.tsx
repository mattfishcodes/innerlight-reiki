'use client'

import HeroSection from './components/HeroSection'
import ServicesCards from './components/ServicesCards'
import Disclaimer from './components/Disclaimer'

const Home = () => {
  return (
    <div className='pb-3 text-center'>
      <HeroSection />
      <ServicesCards />

      <div className='m-5'>
        <button
          className='bg-primary hover:bg-primary-100 cursor-pointer rounded-md p-4 text-2xl text-white transition-all hover:scale-105'
          onClick={() =>
            window.open(
              'https://inner-light-reiki.moxieapp.com/public/inner-light-reiki/60-minute-in-person',
            )
          }
        >
          Book an Appointment Now
        </button>
      </div>

      <Disclaimer />
    </div>
  )
}

export default Home
