'use client'

import Image from 'next/image'

const WhatIsReiki = () => {
  return (
    <div className='d-lg-flex align-items-stretch mb-3 gap-3'>
      <div className='order-lg-2'>
        <h3 className='text-primary text-lg-start text-center'>
          What is Reiki? (
          <span
            lang='ja-jp'
            style={{ fontFamily: 'var(--font-noto-sans-jp)', fontWeight: 300 }}
          >
            レイキ
          </span>
          )
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
        <hr className='border-primary rounded border' />
        <p className='lead fw-medium m-0'>
          Reiki is NOT a substitute or replacement for conventional medical
          treatment.
        </p>
        <hr className='border-primary rounded border' />
        <p className='m-lg-0 mb-3'>
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
      <div>
        <Image
          src='pagoda'
          alt=''
          className='img-fluid h-100 rounded'
          width={768}
          height={1117}
          sizes='(max-width: 768px) 50vw, 25vw'
        />
      </div>
    </div>
  )
}

export default WhatIsReiki
