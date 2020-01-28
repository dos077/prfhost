import asyncStorage from '@/firebase/async-storage'
import { isNil } from 'lodash'

const acceptableTypes = ['image/jpeg', 'image/png', 'bmp']

const maxSize = 5 * 1024 * 1024

const isImg = async ({ userId, imageFile }) => {
  const storageRef = (await asyncStorage()).ref()
  const images = await storageRef.child(`user/${userId}/images/`).listAll()
  if (!images) return false
  const { name, size } = imageFile
  for (let i = 0; i < images.length; i += 1) {
    const imgRef = images[0]
    if (imgRef.name === `${size}-${name}`) return true
  }
  return false
}

const downUrl = async fullPath => {
  const storageRef = (await asyncStorage()).ref()
  const imgRef = storageRef.child(fullPath)
  if (imgRef) return imgRef.getDownloadURL()
  return false
}

const upload = async ({ imgFile, userId }) => {
  if (isNil(imgFile)) return false
  const { name, type, size } = imgFile
  if (!type || !acceptableTypes.includes(type) || size > maxSize) return false
  const storageRef = (await asyncStorage()).ref()
  const imagesRef = storageRef.child(`user/${userId}/images`)
  const imgName = `${size}-${name}`
  const imgRef = imagesRef.child(imgName)
  await imgRef.put(imgFile)
  const uploadedImg = {
    title: imgName,
    caption: '',
    path: imgRef.fullPath
  }
  return uploadedImg
}

const destroy = async ({ path }) => {
  const storageRef = (await asyncStorage()).ref()
  const imgRef = storageRef.child(path)
  await imgRef.delete()
}

export default {
  upload,
  downUrl,
  isImg,
  destroy
}
