import { sectionLimit, sectionImageLimit } from '@/helpers/storage/imageFile'

const buildProjectPath = ({ project }) => `profolio/${project.id}`

const buildSubPath = ({ project, section }) => {
  const projectPath = buildProjectPath({ project })
  return section ? `${projectPath}/sections/${section.id}` : projectPath
}

const checkSectionPath = async ({ project, section, storage }) => {
  const projectRef = await storage.listPath({
    subPath: `${buildProjectPath({ project })}/sections`
  })
  const sectionIds = projectRef.prefixes
    ? projectRef.prefixes.map(p => p.name)
    : []
  if (
    !sectionIds.includes(`${section.id}`) &&
    sectionIds.length >= sectionLimit
  )
    throw Error(`Maximum number of image sections(${sectionLimit}) exceeded`)
  const sectionRef = await storage.listPath({
    subPath: buildSubPath({ project, section })
  })
  const images = sectionRef.items || []
  if (images.length >= sectionImageLimit)
    throw Error(
      `Maximum number of image in section(${sectionImageLimit}) exceeded`
    )
}

export { buildSubPath, checkSectionPath }
