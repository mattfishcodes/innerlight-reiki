'use client'

import { useState } from 'react'
import { Button } from 'react-bootstrap'
import PageWrapper from '@/app/components/PageWrapper/PageWrapper'
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
    <PageWrapper>
      <div className='text-center pb-3'>
        <HeroSection />
        <ServicesCards />

        <div className='m-5'>
          <Button variant='primary' className='fs-3 p-3' onClick={handleShow}>
            Book an Appointment Now
          </Button>
        </div>

        <Disclaimer />

        <BookingModal show={showModal} handleClose={handleClose} />
      </div>
    </PageWrapper>
  )
}

export default Home
