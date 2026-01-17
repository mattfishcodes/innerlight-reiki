import './globals.css'
import type { Metadata } from 'next'
import {
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Serif,
  Noto_Serif_Display,
} from 'next/font/google'
import { Toaster } from 'sonner'

const notoSans = Noto_Sans({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

const notoSansDisplay = Noto_Sans_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-display',
})

const notoSerif = Noto_Serif({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-serif',
})

const notoSerifDisplay = Noto_Serif_Display({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
})

export const metadata: Metadata = {
  title: 'Inner Light Reiki',
  description: 'Reiki energy sharing',
  manifest: '/site.webmanifest',
  appleWebApp: { capable: true, title: 'Inner Light Reiki' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth'>
      <head>
        <link
          rel='preload'
          href='/images/mountain-lake-blue-1200.webp'
          as='image'
        />
      </head>
      <body
        className={`${notoSans.variable} ${notoSansDisplay.variable} ${notoSerif.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        {children}
        <Toaster position='top-center' toastOptions={{ duration: 10000 }} />
      </body>
    </html>
  )
}
