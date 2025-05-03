import type { Metadata } from 'next'
import {
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Serif,
  Noto_Serif_Display,
} from 'next/font/google'
import './globals.scss'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

const notoSansDisplay = Noto_Sans_Display({
  variable: '--font-noto-sans-display',
  subsets: ['latin'],
})

const notoSerif = Noto_Serif({
  variable: '--font-noto-serif',
  subsets: ['latin'],
})

const notoSerifDisplay = Noto_Serif_Display({
  variable: '--font-noto-serif-display',
  subsets: ['latin'],
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
    <html lang='en'>
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
      </head>
      <body
        className={`${notoSans.variable} ${notoSansDisplay.variable} ${notoSerif.variable} ${notoSerifDisplay.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
