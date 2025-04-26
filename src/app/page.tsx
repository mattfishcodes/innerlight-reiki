import Image from 'next/image'

export default function Home() {
  return (
    <div
      className='overlay-container'
      style={{ backgroundImage: `url('/mountain-lake.jpg')` }}
    >
      <div className='logo-container'>
        <Image
          src='/customcolor_logo_transparent_background-e1720475243793.png'
          alt=''
          width={1000}
          height={500}
        />
        <a id='enter-link' href='/home'>
          Enter
        </a>
      </div>
    </div>
  )
}
