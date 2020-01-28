<template>
  <v-container class="mx-1">
    <v-item-group v-if="gallery">
      <v-row>
        <v-item v-for="image in gallery.images" :key="image.path">
          <v-col cols="12" sm="6" xl="4">
            <image-grid-cell :image="image" />
          </v-col>
        </v-item>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import ImageGridCell from './_imgGridCell.vue'

export default {
  name: 'ImageGrid',
  components: {
    ImageGridCell
  },
  props: {
    gallery: Object
  }
}
</script>
