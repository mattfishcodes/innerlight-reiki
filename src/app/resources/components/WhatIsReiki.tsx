'use client'

import Image from 'next/image'
import { images } from '@/lib/images'

const WhatIsReiki = () => {
  return (
    <div className='row py-3'>
      <div className='col-lg order-lg-2 pb-3'>
        <h3 className='text-primary text-center text-lg-start'>
          What is Reiki?{' '}
          <span
            lang='ja-jp'
            style={{
              fontFamily: 'Noto Sans JP',
              fontWeight: 300,
            }}
          >
            (レイキ)
          </span>
        </h3>
        <p className='m-0'>
          Reiki is a Japanese healing energy technique used for the treatment of
          self and others. It was developed in the early 1900&apos;s by a
          Japanese Buddhist named Mikao Usui. The word Reiki comes from the
          Japanese word &quot;Rei&quot; meaning Universal Life, and
          &quot;Ki&quot; which means energy. Reiki is the energy that flows
          through all living things. When energy is blocked, it can lead to
          emotional, physical and spiritual imbalances.
        </p>
        <hr className='border border-primary rounded' />
        <p className='lead m-0 fw-medium'>
          Reiki is NOT a substitute or replacement for conventional medical
          treatment.
        </p>
        <hr className='border border-primary rounded' />
        <p className='m-0'>
          During a Reiki session, energy is shared by a trained practitioner
          through touch and intention to promote the health of the body, mind
          and spirit. Common reactions after a Reiki session include feelings of
          relaxation, a sense of calm, pain relief and a sense of well being.
          People seek out Reiki for a variety of reasons. Some of these include
          pain, anxiety or emotional distress. I have shared Reiki with people
          who are grieving and also with people who have a terminal illness and
          are in the process of dying.
        </p>
      </div>
      <div className='col-lg-4 order-lg-1'>
        <Image
          src={images.pagoda.src}
          alt={images.pagoda.alt}
          className='img-fluid rounded'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default WhatIsReiki
