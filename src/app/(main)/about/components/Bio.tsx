'use client'

import Image from 'next/image'

const Bio = () => {
  return (
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
          I worked for more than 35 years as a registered nurse specializing in
          neonatal intensive care. During that time, I took a Therapeutic Touch
          course and found that it seemed to help babies to calm during stress.
          After retiring in 2017, I attended an introductory session on Reiki. I
          had no personal experience with Reiki but I knew people who had and
          they all had positive things to say about it. From my first
          experience, I felt a sense of calm and peace and I wanted to learn
          more.
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
          better physically, emotionally, and spiritually. My family and friends
          feel that it helps them when I share Reiki with them. I find that it
          makes me feel grateful and more connected to Reiki when I share it
          with others.
        </p>
      </div>
    </div>
  )
}

export default Bio
