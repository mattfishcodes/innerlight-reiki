'use client'

import Image from 'next/image'

const WhatIsReiki = () => {
  return (
    <div className='mb-3 items-stretch gap-3 lg:flex'>
      <div className='lg:order-2'>
        <h3 className='text-primary text-center lg:text-start'>
          What is Reiki? (
          <span lang='ja-jp' className='font-light'>
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
        <hr className='border-primary my-4 rounded-md border' />
        <p className='m-0 text-xl font-light'>
          Reiki is NOT a substitute or replacement for conventional medical
          treatment.
        </p>
        <hr className='border-primary my-4 rounded-md border' />
        <p className='mb-3 lg:m-0'>
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
          className='rounded-md'
          width={768}
          height={1117}
          sizes='(max-width: 768px) 50vw, 25vw'
        />
      </div>
    </div>
  )
}

export default WhatIsReiki
