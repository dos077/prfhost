const galleryImageLimit = 12

const buildSubPath = ({ gallery }) => `galleries/${gallery.id}/`

const checkPath = async ({ gallery, storage }) => {
  const galleryRef = await storage.listPath({
    subPath: `${buildSubPath({ gallery })}`
  })
  const images = galleryRef.items || []
  if (images.length >= galleryImageLimit)
    throw Error(
      `Maximum number of image in gallery(${galleryImageLimit}) exceeded`
    )
}

export { buildSubPath, checkPath }
