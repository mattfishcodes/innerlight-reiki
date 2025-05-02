'use client'

import { Card } from 'react-bootstrap'
import Image from 'next/image'

const ServicesCards = () => {
  return (
    <>
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
                promote relaxation, balance, and holistic healing through gentle
                energy transfer.
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
                energy healing promotes relaxation and balance from the comfort
                of your home.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ServicesCards
