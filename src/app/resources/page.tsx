'use client'

import Image from 'next/image'
import PageWrapper from '@/app/components/PageWrapper/PageWrapper'
import { images } from '@/lib/images'

const Resources = () => {
  return (
    <PageWrapper>
      <div className='py-3'>
        <div className='row py-3'>
          <div className='col-lg order-lg-2 pb-3'>
            <h3 className='text-primary text-center text-lg-start'>
              What is Reiki? (<span lang='ja-jp'>レイキ</span>)
            </h3>
            <p className='m-0'>
              Reiki is a Japanese healing energy technique used for the
              treatment of self and others. It was developed in the early
              1900&apos;s by a Japanese Buddhist named Mikao Usui. The word
              Reiki comes from the Japanese word &quot;Rei&quot; meaning
              Universal Life, and &quot;Ki&quot; which means energy. Reiki is
              the energy that flows through all living things. When energy is
              blocked, it can lead to emotional, physical and spiritual
              imbalances.
            </p>
            <hr className='border border-primary rounded' />
            <p className='lead m-0 fw-medium'>
              Reiki is NOT a substitute or replacement for conventional medical
              treatment.
            </p>
            <hr className='border border-primary rounded' />
            <p className='m-0'>
              During a Reiki session, energy is shared by a trained practitioner
              through touch and intention to promote the health of the body,
              mind and spirit. Common reactions after a Reiki session include
              feelings of relaxation, a sense of calm, pain relief and a sense
              of well being. People seek out Reiki for a variety of reasons.
              Some of these include pain, anxiety or emotional distress. I have
              shared Reiki with people who are grieving and also with people who
              have a terminal illness and are in the process of dying.
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
        <div>
          <h3 className='text-primary text-center text-lg-start'>
            Reiki Session
          </h3>

          <p className='m-0'>
            The energy sharing session takes about 45 minutes. I will spend some
            time before the session to explain what will happen and share some
            common reactions to Reiki. I will also discuss what issues brought
            you in to receive Reiki and answer any questions you may have. Reiki
            is shared in a peaceful, quiet setting. You may lie on a table or
            sit in a chair. You will be fully clothed and a blanket can be used
            for added warmth and comfort. Soft music may be played in the
            background depending the on the your preference. I will hover my
            hands over and/or place my hands lightly on specific parts of the
            body for the sharing of energy.
          </p>
          <hr className='border border-primary rounded' />
          <p className='lead m-0'>
            You may feel many different sensations such as warmth, coolness,
            calmness, or relaxation.
          </p>
          <hr className='border border-primary rounded' />
          <p className='m-0'>
            Some people even experience visual phenomena such as seeing colors.
            It is also not uncommon to not feel much of anything at all. These
            are all perfectly normal reactions. After the session, I will spend
            more time talking with you about your experiences. Water is
            recommended after a session to enhance the Reiki.
          </p>
        </div>
        <div className='py-3'>
          <h3 className='text-primary text-center text-lg-start'>Links</h3>
          <ul className='list-group'>
            <a
              href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5871310/'
              className='list-group-item list-group-item-action list-group-item-primary'
            >
              Reiki is Better Than Placebo and Has Broad Potential as a
              Complementary Health Therapy{' '}
              <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
            <a
              href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022/'
              className='list-group-item list-group-item-action list-group-item-primary'
            >
              A Large Scale Effectiveness Trial of Reiki for Physical and
              Psychological Health{' '}
              <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
            <a
              href='https://centerforreikiresearch.com/'
              className='list-group-item list-group-item-action list-group-item-primary'
            >
              The Center for Reiki Research{' '}
              <i className='fa-solid fa-arrow-up-right-from-square'></i>
            </a>
          </ul>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Resources
