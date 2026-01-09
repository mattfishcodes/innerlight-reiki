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

      <div className='my-6 text-lg'>
        Located inside Bodies In Motion Studio,{' '}
        <address className='underline'>
          <a href='https://maps.app.goo.gl/7F6aetiHUELemHca9'>
            10660 E Carter Rd, Traverse City, MI 49684
          </a>
        </address>
      </div>

      <div className='flex items-center justify-center py-4'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.0287417365585!2d-85.64371792383768!3d44.78021937881456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e2d765e94e05b%3A0x9dfa339a8899fda!2s10660%20E%20Carter%20Rd%2C%20Traverse%20City%2C%20MI%2049684!5e0!3m2!1sen!2sus!4v1768001448363!5m2!1sen!2sus'
          width='400'
          height='300'
          className='border-0'
          allowFullScreen={false}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>

      <Disclaimer />
    </div>
  )
}

export default Home
