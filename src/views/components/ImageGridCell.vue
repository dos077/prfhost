<template>
  <v-hover v-slot:default="{ hover }" open-delay="200" close-delay="200">
    <div
      class="image-grid-cell"
      :class="{ 'elevation-8': hover }"
      :style="
        `width: ${containerAspect * widthBasis}px;
      flex-grow: ${containerAspect * widthBasis}`
      "
      @click="$emit('openImage')"
    >
      <i :style="`padding-bottom: ${iPadding}%`"></i>
      <img
        :id="image.fileId"
        ref="img"
        :src="id2url(image.fileId)"
        :style="`width: ${imageWidth}%; top: ${imageTop}%; left:${imageLeft}%;`"
      />
      <v-expand-transition v-if="hover">
        <div v-if="image.caption" class="caption">
          <span class="display-2">{{ image.caption }}</span>
        </div>
      </v-expand-transition>
    </div>
  </v-hover>
</template>

<script>
const minAspect = 3 / 4
const maxAspect = 3 / 2
const minRowWidth = 360

export default {
  name: 'ImageGridCell',
  props: {
    image: Object
  },
  data() {
    return {
      widthBasis: minRowWidth / maxAspect,
      imgHeight: 100,
      imgWidth: 100
    }
  },
  computed: {
    imageAspect() {
      return this.imgWidth / this.imgHeight
    },
    containerAspect() {
      if (this.imageAspect > maxAspect) return maxAspect
      if (this.imageAspect < minAspect) return minAspect
      return this.imageAspect
    },
    iPadding() {
      if (this.imageAspect < minAspect) return (1 / minAspect) * 100
      if (this.imageAspect > maxAspect) return (1 / maxAspect) * 100
      return (1 / this.imageAspect) * 100
    },
    imageWidth() {
      if (this.imageAspect < maxAspect) return 100
      return (this.imageAspect / maxAspect) * 100
    },
    imageTop() {
      if (this.imageAspect > minAspect) return 0
      return (
        ((minAspect - this.imageAspect) /
          (this.imageAspect * minAspect * minAspect)) *
        -50
      )
    },
    imageLeft() {
      if (this.imageAspect < maxAspect) return 0
      return ((this.imageAspect - maxAspect) / maxAspect) * -50
    }
  },
  mounted() {
    this.$refs.img.addEventListener('load', this.getImgDimension)
  },
  methods: {
    id2url(fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`
    },
    getImgDimension() {
      this.imgHeight = this.$refs.img.naturalHeight
      this.imgWidth = this.$refs.img.naturalWidth
    }
  }
}
</script>

<style lang="scss" scoped>
.image-grid-cell {
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  @media screen and (min-width: 769px) {
    margin: 8px;
  }

  i {
    display: block;
  }
  img {
    position: absolute;
    vertical-align: bottom;
    width: 100%;
  }
  .caption {
    position: absolute;
    display: flex;
    align-items: flex-end;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fafafa;
  }
}
</style>
