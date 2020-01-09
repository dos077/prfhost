<template>
  <div class="image-grid">
    <image-grid-cell
      v-for="(image, index) in images"
      :key="image.fileId"
      :image="image"
      @openImage="imgIndex = index"
    />
    <image-pop-up
      :image="currentImg"
      :images="images"
      :img-index="imgIndex"
      @close="imgIndex = null"
    />
  </div>
</template>

<script>
import ImageGridCell from './ImageGridCell.vue'
import ImagePopUp from './ImagePopUp.vue'

export default {
  name: 'ImageGrid',
  components: {
    ImageGridCell,
    ImagePopUp
  },
  data() {
    return {
      images: [
        {
          fileId: '1c2mkMUR_KH4raCz8wdsWg7lP4IbxRjhU',
          caption: 'MoMa, New York'
        },
        {
          fileId: '1lnguccU1cKpKagS7Vv4W6x_cX8qI-J2P',
          caption: 'SoHo, New York'
        },
        {
          fileId: '1ZvvvELJ3e6VPt_BkwHoZ9WfjMm2-eoIq',
          caption: 'Flat Iron Building'
        },
        {
          fileId: '1a8RSEN_plYogwrYCqMt3kNsa-sVUFDJK',
          caption: 'Cascade of Age, Lower East Side'
        },
        {
          fileId: '1FicCIyM_ejDkak3fP4HoKcvcU0YGY4y4',
          caption: 'Nest, Hudson Yards'
        }
      ],
      imgIndex: null
    }
  },
  computed: {
    currentImg() {
      if (this.imgIndex !== null) {
        return this.images[this.imgIndex]
      }
      return null
    }
  },
  methods: {
    id2url(fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`
    }
  }
}
</script>

<style lang="scss" scoped>
.image-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 769px) {
    padding: 8px;
    &:after {
      content: '';
      flex-grow: 9999999;
    }
  }
}
</style>
