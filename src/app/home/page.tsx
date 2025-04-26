'use client'

import { useState } from 'react'
import { Button, Modal, Card } from 'react-bootstrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import PageWrapper from '../components/PageWrapper/PageWrapper'

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
      <div className='container text-center'>
        <div className='container-lg py-5 d-flex flex-column align-items-center text-center'>
          <Image
            className='img-fluid'
            src='/base_textlogo_transparent_background-e1720827521221.png'
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
          I believe in the profound ability of Reiki to promote healing,
          balance, and inner peace. <br />
          My mission is to guide you on your journey towards well-being through
          the gentle practice of Reiki.
        </p>
        <div className='d-flex flex-column flex-md-row gap-3'>
          <div className=''>
            <Card className='bg-secondary-subtle text-primary border-primary h-100'>
              <Card.Header className='text-start'>$60</Card.Header>
              <div className='w-25 mx-auto pt-3'>
                <Image src='/reiki-icon.svg' alt='' width={100} height={100} />
              </div>
              <Card.Body>
                <Card.Title>In Person Reiki</Card.Title>
                <Card.Text className='text-primary-emphasis'>
                  Experience a personalized in-person Reiki session designed to
                  promote relaxation, balance, and holistic healing through
                  gentle energy transfer.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=''>
            <Card className='bg-secondary-subtle text-primary border-primary h-100'>
              <Card.Header className='text-start'>$50</Card.Header>
              <div className='w-25 mx-auto pt-3'>
                <Image src='/reiki-icon.svg' alt='' width={100} height={100} />
              </div>
              <Card.Body>
                <Card.Title>Virtual Reiki</Card.Title>
                <Card.Text className='text-primary-emphasis'>
                  Experience a virtual Reiki session via Zoom or FaceTime, where
                  energy healing promotes relaxation and balance from the
                  comfort of your home.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
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
        <div className='p-3 border border-primary rounded d-flex flex-column gap-3'>
          <p>
            My services are intended to support overall well-being and personal
            development.
          </p>
          <p>
            <strong>
              They are NOT a substitute for professional medical care,
              diagnosis, or treatment.
            </strong>
          </p>
          <p>
            If you have any medical concerns or require medical assistance,
            please consult with a licensed healthcare professional.
          </p>
        </div>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Schedule an Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>What type of appointment would you like to book?</p>
            <Button
              variant='primary'
              className='me-2'
              onClick={() => {
                window.open(
                  'https://inner-light-reiki.moxieapp.com/public/inner-light-reiki/60-minute-in-person',
                )
                handleClose()
              }}
            >
              In Person
            </Button>
            <Button
              variant='primary'
              className='ms-2'
              onClick={() => {
                window.open(
                  'https://inner-light-reiki.moxieapp.com/public/inner-light-reiki/60-minute-virtual',
                )
                handleClose()
              }}
            >
              Virtual
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </PageWrapper>
  )
}

export default Home
