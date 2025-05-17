/* eslint-disable @typescript-eslint/no-require-imports */
// scripts/optimize-images.js

const sharp = require('sharp')
const fs = require('fs-extra')
const path = require('path')

const inputDir = path.join(__dirname, '../public/images/src')
const outputDir = path.join(__dirname, '../public/images')

// You can customize these sizes
const sizes = [400, 800, 1600]

async function optimizeImages() {
  await fs.ensureDir(outputDir)
  const files = await fs.readdir(inputDir)

  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    const name = path.basename(file, ext)

    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

    const inputFile = path.join(inputDir, file)

    for (const width of sizes) {
      const outputFileWebP = path.join(outputDir, `${name}-${width}.webp`)

      await sharp(inputFile)
        .resize({ width })
        .webp({ quality: 80 })
        .toFile(outputFileWebP)

      console.log(`✓ ${name}-${width}.webp`)
    }
  }
}

optimizeImages().catch(console.error)
