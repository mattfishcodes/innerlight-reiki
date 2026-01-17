'use client'

import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const isProduction = process.env.NODE_ENV === 'production'

const MapEmbed = () => {
  const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    if (isProduction && iframeRef.current) {
      iframeRef.current.src =
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.0287417365585!2d-85.64371792383768!3d44.78021937881456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881e2d765e94e05b%3A0x9dfa339a8899fda!2s10660%20E%20Carter%20Rd%2C%20Traverse%20City%2C%20MI%2049684!5e0!3m2!1sen!2sus!4v1768001448363!5m2!1sen!2sus'
    }
  }, [])
  return (
    <div className='flex h-100 w-full items-center justify-center py-4'>
      {!loaded && <LoaderCircle size={48} className='animate-spin' />}

      <iframe
        ref={iframeRef}
        onLoad={() => {
          setLoaded(true)
          console.log('loaded')
        }}
        className={cn('hidden h-full w-full border-0', loaded && 'block')}
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  )
}

export default MapEmbed
