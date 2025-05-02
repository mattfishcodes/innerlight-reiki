'use client'

import { Modal, Button } from 'react-bootstrap'

const BookingModal = ({
  show,
  handleClose,
}: {
  show: boolean
  handleClose: () => void
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
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
  )
}

export default BookingModal
