'use client'

import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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
        <p>
          My in-person sessions will be held at{' '}
          <a href='https://www.google.com/maps/place/The+BOX/@44.7599051,-85.618129,16z/data=!4m15!1m8!3m7!1s0x881e32a455cd8c5d:0x90fd911229bfc5e5!2s425+Boardman+Ave,+Traverse+City,+MI+49684!3b1!8m2!3d44.7599051!4d-85.6155541!16s%2Fg%2F11dzqcxs3k!3m5!1s0x881e32a4571c28df:0x72dd1dc36132b1e1!8m2!3d44.7594982!4d-85.6154932!16s%2Fg%2F1pp2vm55r?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D'>
            The Box, 425 Boardman Ave, Traverse City, MI 49684{' '}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </p>

        <Disclaimer />

        <BookingModal show={showModal} handleClose={handleClose} />
      </div>
    </PageWrapper>
  )
}

export default Home
