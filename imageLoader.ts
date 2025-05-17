export default function imageLoader({
  src,
  width,
}: {
  src: string
  width: number
}) {
  let variant
  if (width < 800) {
    variant = 400
  } else if (width < 1600) {
    variant = 800
  } else {
    variant = 1600
  }

  return `/images/${src}-${variant}.webp`
}
