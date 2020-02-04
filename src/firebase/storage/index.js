import asyncStorage from '@/firebase/async-storage'
import { isNil } from 'lodash'
import { acceptableTypes, maxSize } from '@/helpers/storage/imageFile'

export default async ({ rootState }) => {
  const { user } = rootState.authentication
  const storageRef = (await asyncStorage()).ref()

  const nameImage = ({ name, size }) => `${size}-${name}`

  const listPath = async ({ subPath }) => {
    const pathRef = await storageRef
      .child(`user/${user.id}/images/${subPath}`)
      .listAll()
    return pathRef
  }

  const isImg = async ({ imgFile, subPath }) => {
    const pathRef = await listPath({ subPath })
    const imagesNames = pathRef.items ? pathRef.items.map(i => i.name) : []
    if (imagesNames.includes(nameImage(imgFile))) return true
    return false
  }

  const validateImg = async ({ name, size, type }, subPath) => {
    if (!name || !size || !type) throw Error('Invalid image meta data')
    if (size > maxSize) throw Error(`image exceeded max size ${maxSize} bytes`)
    if (!acceptableTypes.includes(type))
      throw Error(`wrong image type, only ${acceptableTypes.join(', ')}`)
    if (subPath && (await isImg({ imgFile: { name, size }, subPath })))
      throw Error(`Image arealdy exist in folder`)
    return true
  }

  const downUrl = async fullPath => {
    const imgRef = storageRef.child(fullPath)
    if (imgRef) return imgRef.getDownloadURL()
    return false
  }

  const upload = async ({ imgFile, subPath }) => {
    if (isNil(imgFile)) return false
    const imagesRef = storageRef.child(`user/${user.id}/images/${subPath}`)
    const imgName = nameImage(imgFile)
    const imgRef = imagesRef.child(imgName)
    await imgRef.put(imgFile)
    const uploadedImg = {
      title: imgName,
      caption: '',
      path: imgRef.fullPath,
      src: await downUrl(imgRef.fullPath)
    }
    return uploadedImg
  }

  const destroy = async ({ path }) => {
    const imgRef = storageRef.child(path)
    await imgRef.delete()
  }

  return {
    listPath,
    validateImg,
    upload,
    downUrl,
    destroy
  }
}
