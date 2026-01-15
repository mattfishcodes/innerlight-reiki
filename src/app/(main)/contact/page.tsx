'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const isProduction = process.env.NODE_ENV === 'production'

export default function Contact() {
  const [loaded, setLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const injectForm = () => {
    if (iframeRef.current !== null) {
      iframeRef.current.src =
        'https://hello.withmoxie.com/01/inner-light-reiki/website-inquiry-form?inFrame=true&sourceUrl=' +
        encodeURIComponent(window.location.href)

      iframeRef.current.onload = () => {
        setTimeout(() => {
          /* @ts-expect-error iFrameResize included in cdn script below */
          iFrameResize(
            {
              heightCalculationMethod: 'min',
              sizeWidth: true,
              sizeHeight: true,
              log: false,
              checkOrigin: false,
              onResized: () => {
                setLoaded(true)
              },
            },
            '#moxie-website-contact-form',
          )
        }, 100)
      }

      window.addEventListener(
        'message',
        (event) => {
          if (
            event.origin === 'https://hello.withmoxie.com' &&
            event.data &&
            event.data.startsWith('[Redirect]')
          ) {
            const url = event.data.slice(10)
            console.log(event.data)
            window.location = url
          }
        },
        false,
      )
    }
  }

  useEffect(() => {
    if (isProduction) {
      injectForm()
    }
  }, [])

  return (
    <>
      <Script
        type='text/javascript'
        src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js'
      ></Script>
      <div style={{ width: '100%', minHeight: '600px' }} className='py-8'>
        <h2 className='text-primary text-center font-semibold'>
          Fill out this form and I&apos;ll be in touch as soon as possible!
        </h2>
        <iframe
          id='moxie-website-contact-form'
          ref={iframeRef}
          className={cn(
            'border-primary my-8 hidden max-h-full min-w-full rounded-md border-2',
            loaded && 'block',
          )}
        ></iframe>
        {!loaded && (
          <div className='flex justify-center py-8'>
            <LoaderCircle size={64} className='text-primary animate-spin' />
          </div>
        )}
      </div>
    </>
  )
}
