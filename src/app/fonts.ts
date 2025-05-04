import localFont from 'next/font/local'

export const notoSans = localFont({
  src: '../assets/fonts/NotoSans-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-noto-sans',
})

export const notoSansDisplay = localFont({
  src: '../assets/fonts/NotoSansDisplay-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-noto-sans-display',
})

export const notoSansJP = localFont({
  src: '../assets/fonts/NotoSansJP-VariableFont_wght.ttf',
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

export const notoSerif = localFont({
  src: '../assets/fonts/NotoSerif-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-noto-serif',
})

export const notoSerifDisplay = localFont({
  src: '../assets/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf',
  display: 'swap',
  variable: '--font-noto-serif-display',
})
