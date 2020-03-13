const acceptableTypes = ['image/jpeg', 'image/png', 'bmp', 'image/webp']

const maxSize = 1.5 * 1024 * 1024

const galleryImageLimit = 12

const sectionLimit = 4
const sectionImageLimit = 4

const imageRules = [
  value =>
    !value ||
    value.size <= maxSize ||
    `image exceeded max size ${maxSize} bytes`,
  value =>
    !value ||
    acceptableTypes.includes(value.type) ||
    `wrong image type, only ${acceptableTypes.join(', ')}`
]

export {
  acceptableTypes,
  maxSize,
  imageRules,
  galleryImageLimit,
  sectionLimit,
  sectionImageLimit
}
