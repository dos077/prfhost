<template>
  <short-read
    :cover="cover"
    :title="title"
    :lines="lines"
    :github="github"
    :demo="demo"
  ></short-read>
</template>

<script>
import ShortRead from './components/ShortRead.vue'

const sampleRead = {
  cover:
    'https://drive.google.com/uc?export=view&id=1InoxJSYoxnEIuuYZCjfIt1s6qstII1sc',
  title: 'Impact Weather',
  github: 'https://github.com/dos077/impact-weather',
  demo: 'https://dos077.github.io/impact-weather/',
  lines: [
    {
      text:
        'A single page vue app with Zeitnow serverless backend handling api requests to Gyphy and Open Weather Map. Styled after popular meme formats with weather related gif and font that resembles Impact.'
    },
    {
      image: {
        fullscreen: true,
        src:
          'https://drive.google.com/uc?export=view&id=1lnguccU1cKpKagS7Vv4W6x_cX8qI-J2P'
      }
    }
  ]
}

export default {
  name: 'Blog',
  components: {
    ShortRead
  },
  data() {
    return sampleRead
  }
}
</script>

<style lang="scss" scoped></style>
