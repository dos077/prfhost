const acceptableTypes = ['image/jpeg', 'image/png', 'bmp']

const maxSize = 3 * 1024 * 1024

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

export { acceptableTypes, maxSize, imageRules }
