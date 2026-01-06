'use client'

import Image from 'next/image'

const services = [
  {
    price: 60,
    title: 'In Person Reiki',
    description:
      'Experience a personalized in-person Reiki session designed to \
            promote relaxation, balance, and holistic healing through gentle \
            energy transfer.',
  },
  {
    price: 50,
    title: 'Virtual Reiki',
    description:
      'Experience a virtual Reiki session via Zoom or FaceTime, where \
            energy healing promotes relaxation and balance from the comfort of \
            your home.',
  },
]

const ServicesCards = () => {
  return (
    <div className='flex flex-col gap-3 md:flex-row'>
      {services.map((s, i) => {
        return (
          <div
            className='bg-secondary/10 border-primary h-full rounded-md border'
            key={i}
          >
            <header className='text-primary border-b border-black/20 px-3 py-3 text-start'>
              ${s.price}
            </header>
            <div className='flex justify-center pt-3'>
              <Image
                src='/reiki-icon.svg'
                alt=''
                width={100}
                height={100}
                unoptimized
              />
            </div>
            <div className='p-4'>
              <h4>{s.title}</h4>
              <div>{s.description}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ServicesCards
