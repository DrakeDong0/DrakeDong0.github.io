import sharp from 'sharp'
import { readdir, writeFile, stat } from 'fs/promises'
import { join } from 'path'

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await findImages(fullPath)))
    } else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

const images = await findImages('./src')
let fixed = 0

for (const imgPath of images) {
  const meta = await sharp(imgPath).metadata()
  if (meta.orientation && meta.orientation !== 1) {
    const buffer = await sharp(imgPath).rotate().toBuffer()
    await writeFile(imgPath, buffer)
    console.log(`Auto-rotated: ${imgPath} (orientation ${meta.orientation})`)
    fixed++
  }
}

console.log(`Fixed ${fixed} image(s)`)
