'use client'

import { useEffect, useState } from 'react'

const loadedImages = new Set<string>()

type ImageSrc = string | { src: string } // StaticImageData-compatible

function getKey(src: ImageSrc) {
  return typeof src === 'string' ? src : src.src
}

export function useImageLoaded(src: ImageSrc) {
  const key = getKey(src)

  const [loaded, setLoaded] = useState(() => loadedImages.has(key))

  useEffect(() => {
    if (loaded) return

    const img = new window.Image()
    img.src = key

    if (img.complete) {
      loadedImages.add(key)
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoaded(true)
    }
  }, [key, loaded])

  const markLoaded = () => {
    loadedImages.add(key)
    setLoaded(true)
  }

  return {
    loaded,
    markLoaded,
  }
}
