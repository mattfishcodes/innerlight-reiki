'use client'

import { useState } from 'react'
import HeroSection from './components/HeroSection'
import ServicesCards from './components/ServicesCards'
import Disclaimer from './components/Disclaimer'
import BookingModal from './components/BookingModal'

const Home = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const handleShow = () => {
    setShowModal(true)
  }

  return (
    <div className='pb-3 text-center'>
      <HeroSection />
      <ServicesCards />

      <div className='m-5'>
        <button
          className='bg-primary hover:bg-primary-dark cursor-pointer rounded-md p-4 text-2xl text-white transition-all hover:scale-105'
          onClick={handleShow}
        >
          Book an Appointment Now
        </button>
      </div>

      <Disclaimer />

      <BookingModal show={showModal} handleClose={handleClose} />
    </div>
  )
}

export default Home
