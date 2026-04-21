'use client'

import Image from 'next/image'

const About = () => {
  return (
    <div className='py-3'>
      {/* Bio */}
      <div className='items-stretch gap-3 lg:flex'>
        <div className='mb-3'>
          <Image
            src='reiki-sitting'
            alt=''
            className='rounded-xl'
            width={1200}
            height={1487}
            sizes='(max-width: 768px) 50vw, 25vw'
          />
        </div>

        <div>
          <h3 className='text-primary'>Julie Adams</h3>
          <p>
            I worked for more than 35 years as a registered nurse specializing
            in neonatal intensive care. During that time, I took a Therapeutic
            Touch course and found that it seemed to help babies to calm during
            stress. After retiring in 2017, I attended an introductory session
            on Reiki. I had no personal experience with Reiki but I knew people
            who had and they all had positive things to say about it. From my
            first experience, I felt a sense of calm and peace and I wanted to
            learn more.
          </p>
          <p>
            In the spring of 2018, I began a Japanese Reiki Level 1 class taught
            by Dr. Sally Littleton, Master Teacher and founder of{' '}
            <a href='https://enlightenmentreiki.com/' className='underline'>
              Enlightenment Reiki
            </a>
            . It was a fulfilling experience. I continued on and earned my Reiki
            Levels 2 and 3 with Dr. Littleton over the next year and a half. I
            completed my Master Teacher certification in May of 2021. I also
            completed an Animal Reiki certification in 2019.
          </p>
          <p>
            Having a daily Reiki practice helps me to manage stress and feel
            better physically, emotionally, and spiritually. My family and
            friends feel that it helps them when I share Reiki with them. I find
            that it makes me feel grateful and more connected to Reiki when I
            share it with others.
          </p>
        </div>
      </div>

      <hr className='border-primary my-4 rounded-xl border' />

      {/* Qualifications */}
      <div>
        <h4 className='text-primary pb-3'>Qualifications</h4>
        <ul className='border-primary/40 bg-primary/20 flex flex-col rounded-md border'>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Shoden</strong> (Reiki First Degree)
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              June 2018
            </span>
          </li>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Okuden</strong> (Reiki Second Degree)
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              October 2018
            </span>
          </li>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Shinpiden</strong> (Reiki Master Practitioner)
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              June 2019
            </span>
          </li>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Animal Reiki Practitioner</strong>
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              September 2019
            </span>
          </li>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Energy Healing Certification</strong> - Northwestern
              Community College
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              July 2020
            </span>
          </li>
          <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
            <span>
              <strong>Gokuikaiden</strong> (Shihan, Master Teacher)
            </span>
            <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
              May 2021
            </span>
          </li>
          <li className='px-4 py-2'>
            <strong>Member of the Reiki Healing Association</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About
