'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

const BookingModal = ({
  show,
  handleClose,
}: {
  show: boolean
  handleClose: () => void
}) => {
  return (
    <div className={cn('hidden', show && 'block')}>
      <div className='fixed inset-0 z-30 bg-black/40' onClick={handleClose} />
      <div
        className={cn(
          'fixed inset-x-0 top-0 z-40 bg-white',
          'origin-top transform-gpu',
          'transition-all duration-300 ease-out',
          'pointer-events-none -translate-y-2 scale-y-95 opacity-0',
          'flex flex-col',
          'motion-reduce:transition-none',
          show && 'pointer-events-auto translate-y-0 scale-y-100 opacity-100',
        )}
      >
        <header>
          <X onClick={handleClose} />
          <h3>Schedule an Appointment</h3>
        </header>
        <div>
          <p>What type of appointment would you like to book?</p>
          <button
            className='hover:bg-primary-100 bg-primary mx-2 cursor-pointer rounded-md px-4 py-2 text-white transition-colors'
            onClick={() => {
              window.open(
                'https://inner-light-reiki.moxieapp.com/public/inner-light-reiki/60-minute-in-person',
              )
              handleClose()
            }}
          >
            In Person
          </button>
          <button
            className='hover:bg-primary-100 bg-primary mx-2 cursor-pointer rounded-md px-4 py-2 text-white transition-colors'
            onClick={() => {
              window.open(
                'https://inner-light-reiki.moxieapp.com/public/inner-light-reiki/60-minute-virtual',
              )
              handleClose()
            }}
          >
            Virtual
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
