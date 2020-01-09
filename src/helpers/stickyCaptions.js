import { throttle } from 'lodash'

const stickyCaptionsController = () => {
  const imgs = []

  const addEl = (img, caption) => {
    imgs.push({
      img,
      caption
    })
  }

  const handler = () => {
    imgs.forEach(({ img, caption }) => {
      const imgBox = img.getBoundingClientRect()
      const capBox = caption.getBoundingClientRect()
      const heightDelta =
        imgBox.bottom - imgBox.top - (capBox.bottom - capBox.top)
      if (heightDelta < capBox.top) {
        img.style.position = 'sticky'
        img.style.top = '0'
      } else {
        img.style.position = 'relative'
        img.style.top = `${capBox.bottom - capBox.top}px`
      }
    })
  }

  const throttleHandler = throttle(handler, 100)

  const set = elements => {
    if (elements) {
      elements.forEach(({ img, caption }) => {
        addEl(img, caption)
      })
    }
  }

  const start = () => {
    handler()
    window.addEventListener('scroll', throttleHandler)
  }

  const stop = () => {
    window.removeEventListener('scroll', throttleHandler)
  }

  return {
    set,
    start,
    stop
  }
}

export default stickyCaptionsController
