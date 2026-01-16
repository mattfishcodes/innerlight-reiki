import './globals.css'
import type { Metadata } from 'next'
import {
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Serif,
  Noto_Serif_Display,
} from 'next/font/google'

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
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <meta name='apple-mobile-web-app-title' content='Inner Light Reiki' />
        <link rel='manifest' href='/site.webmanifest' />
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
      </body>
    </html>
  )
}
