'use client'

import MapEmbed from './components/MapEmbed'

import Image from 'next/image'

const services = [
  {
    price: 40,
    title: 'In Person Reiki',
    description:
      'Experience a personalized in-person Reiki session designed to \
            promote relaxation, balance, and holistic healing through gentle \
            energy transfer.',
  },
  {
    price: 30,
    title: 'Virtual Reiki',
    description:
      'Experience a virtual Reiki session via Zoom or FaceTime, where \
            energy healing promotes relaxation and balance from the comfort of \
            your home.',
  },
]

const Home = () => {
  return (
    <div className='pb-3 text-center'>
      {/* Hero */}
      <div>
        <div className='flex flex-col items-center py-4'>
          <Image
            className='lg:w-[80%]'
            src='/base_textlogo_transparent_background.png'
            alt=''
            width={1489}
            height={290}
            priority
            unoptimized
          />
        </div>
        <p className='font-noto-serif-display text-2xl font-semibold'>
          Traverse City, MI
        </p>
        <p className='mx-auto my-3 text-xl'>
          I believe in the profound ability of Reiki to promote healing,
          balance, and inner peace. <br className='hidden lg:block' />
          My mission is to guide you on your journey towards well-being through
          the gentle practice of Reiki.
        </p>
      </div>

      {/* Services Cards */}
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
                <h3>{s.title}</h3>
                <div>{s.description}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className='bg-primary mt-6 h-0.5 rounded-md' />
      <div className='py-8 text-xl'>
        Contact me to schedule an appointment at{' '}
        <address>
          <a
            href='mailto:innerlightreikija@gmail.com'
            className='hover:text-primary active:text-primary not-italic underline transition-colors'
          >
            innerlightreikija@gmail.com
          </a>
        </address>
      </div>
      <div className='bg-primary mb-6 h-0.5 rounded-md' />

      <div className='text-md md:text-lg'>
        <address className='font-noto-serif'>
          Bodies in Motion Studio, 10660 E Carter Rd, Traverse City, MI 49684
        </address>
      </div>

      <MapEmbed />

      {/* Disclaimer */}
      <div className='border-primary gap-3 rounded-md border p-4'>
        <p>
          My services are intended to support overall well-being and personal
          development.
        </p>
        <p>
          <strong>
            They are NOT a substitute for professional medical care, diagnosis,
            or treatment.
          </strong>
        </p>
        <p className='mb-0'>
          If you have any medical concerns or require medical assistance, please
          consult with a licensed healthcare professional.
        </p>
      </div>
    </div>
  )
}

export default Home
