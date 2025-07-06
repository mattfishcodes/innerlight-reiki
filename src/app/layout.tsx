import type { Metadata } from 'next'
import './globals.scss'
import {
  notoSans,
  notoSansDisplay,
  notoSansJP,
  notoSerif,
  notoSerifDisplay,
} from './fonts'
import AddBootstrap from './components/AddBootstrap/AddBootstrap'

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
        <link
          rel='preload'
          href='/images/mountain-lake-blue-1200.webp'
          as='image'
        />
      </head>
      <body
        className={`${notoSans.variable} ${notoSansDisplay.variable} ${notoSansJP.variable} ${notoSerif.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        {children}
        <AddBootstrap />
      </body>
    </html>
  )
}
