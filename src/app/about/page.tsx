'use client'

import PageWrapper from '@/app/components/PageWrapper/PageWrapper'
import Image from 'next/image'
import { images } from '@/lib/images'

const About = () => {
  return (
    <PageWrapper>
      <div className='py-3'>
        <div className='clearfix'>
          <div className='float-start me-3 mb-1 w-md-50 w-lg-25'>
            <Image
              src={images.reikiSitting.src}
              alt={images.reikiSitting.alt}
              className='img-fluid rounded'
              width={500}
              height={500}
            />
          </div>

          <div>
            <h3 className='text-primary'>Julie Adams</h3>
            <p>
              I worked for more than 35 years as a registered nurse specializing
              in neonatal intensive care. During that time, I took a Therapeutic
              Touch course and found that it seemed to help babies to calm
              during stress. After retiring in 2017, I attended an introductory
              session on Reiki. I had no personal experience with Reiki but I
              knew people who had and they all had positive things to say about
              it. From my first experience, I felt a sense of calm and peace and
              I wanted to learn more.
            </p>
            <p>
              In the spring of 2018, I began a Japanese Reiki Level 1 class
              taught by Dr. Sally Littleton, Master Teacher and founder of{' '}
              <a href='https://enlightenmentreiki.com/'>Enlightenment Reiki</a>.
              It was a fulfilling experience. I continued on and earned my Reiki
              Levels 2 and 3 with Dr. Littleton over the next year and a half. I
              completed my Master Teacher certification in May of 2021. I also
              completed an Animal Reiki certification in 2019.
            </p>
            <p className='mb-0'>
              Having a daily Reiki practice helps me to manage stress and feel
              better physically, emotionally, and spiritually. My family and
              friends feel that it helps them when I share Reiki with them. I
              find that it makes me feel grateful and more connected to Reiki
              when I share it with others.
            </p>
          </div>
        </div>
        <hr className='border border-primary rounded' />
        <div>
          <h4 className='text-primary pb-3'>Qualifications</h4>
          <ul className='list-group'>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Shoden</strong> (Reiki First Degree){' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                June 2018
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Okuden</strong> (Reiki Second Degree){' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                October 2018
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Shinpiden</strong> (Reiki Master Practitioner){' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                June 2019
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Animal Reiki Practitioner</strong>{' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                September 2019
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Energy Healing Certification</strong> - Northwestern
              Community College{' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                July 2020
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Gokuikaiden</strong> (Shihan, Master Teacher){' '}
              <span className='badge bg-light text-primary-emphasis ms-1'>
                May 2021
              </span>
            </li>
            <li className='list-group-item list-group-item-primary bg-primary-subtle-transparent'>
              <strong>Member of the Rieki Healing Association</strong>
            </li>
          </ul>
        </div>
      </div>
    </PageWrapper>
  )
}

export default About
