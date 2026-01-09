'use client'

import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

const BookingModal = ({
  show,
  handleClose,
}: {
  show: boolean
  handleClose: () => void
}) => {
  return createPortal(
    <>
      <div
        className={cn('fixed inset-0 z-30 hidden bg-black/40', show && 'block')}
        onClick={handleClose}
      />
      <div
        className={cn(
          'fixed top-[50%] left-[50%] z-100 -translate-1/2 bg-white',
          'origin-top transform-gpu',
          'transition-all duration-300 ease-out',
          'pointer-events-none opacity-0',
          'flex flex-col rounded-md border border-black/50 text-left',
          'motion-reduce:transition-none',
          show && 'pointer-events-auto opacity-100',
        )}
      >
        <div className='border-b border-black/50 px-4 pt-2'>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>
        <div className='p-4'>
          <header>
            <h3>Schedule an Appointment</h3>
          </header>
          <div>
            <p>What type of appointment would you like to book?</p>
            <button
              className='hover:bg-primary-100 bg-primary cursor-pointer rounded-md px-4 py-2 text-white transition-all hover:scale-102'
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
              className='hover:bg-primary-100 bg-primary ml-2 cursor-pointer rounded-md px-4 py-2 text-white transition-all hover:scale-102'
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
    </>,
    document.body,
  )
}

export default BookingModal
