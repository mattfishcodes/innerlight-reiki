'use client'

import { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'

type ResponsiveImageProps = {
  alt: string
  images: {
    [width: number]: StaticImageData
  }
  sizes?: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
  onLoad?: React.ReactEventHandler<HTMLImageElement>
}

export default function ResponsiveImage({
  alt,
  images,
  sizes = '100vw',
  className,
  style,
  width,
  height,
  onLoad,
}: ResponsiveImageProps) {
  const sortedWidths = Object.keys(images)
    .map(Number)
    .sort((a, b) => a - b)

  const defaultWidth = sortedWidths[Math.floor(sortedWidths.length / 2)]
  const fallback = images[defaultWidth]

  const srcSet = sortedWidths.map((w) => `${images[w].src} ${w}w`).join(', ')

  const imgRef = useRef<HTMLImageElement>(null)
  const [hasFiredLoad, setHasFiredLoad] = useState(false)

  useEffect(() => {
    if (!hasFiredLoad && imgRef.current?.complete) {
      setHasFiredLoad(true)
      onLoad?.({} as React.SyntheticEvent<HTMLImageElement>)
    }
  }, [hasFiredLoad, onLoad])

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (!hasFiredLoad) {
      setHasFiredLoad(true)
      onLoad?.(e)
    }
  }

  return (
    <img
      ref={imgRef}
      src={fallback.src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width ?? fallback.width}
      height={height ?? fallback.height}
      loading='lazy'
      decoding='async'
      className={className}
      style={style}
      onLoad={handleLoad}
    />
  )
}
