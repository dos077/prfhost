<template>
  <v-card outlined :loading="loading || imgSrc === ''">
    <v-dialog v-model="dConfirm" :width="isDesktop ? '500px' : '80vw'">
      <v-card dark="" :loading="loading">
        <v-card-title> Press confirm to delete {{ image.title }} </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dConfirm = false">Cancel</v-btn>
          <v-btn color="red" outlined @click="confirmDelete">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-img
      :aspect-ratio="isDesktop ? '1.67' : '2.2'"
      width="100%"
      :src="imgSrc"
      class="align-start text-right pa-1"
    >
      <v-btn color="red" dark icon @click="dConfirm = true">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-img>
    <v-card-text>
      <v-text-field :value="image.title" label="title" @input="inputTitle" />
      <v-text-field
        :value="image.caption"
        label="caption"
        @input="inputCaption"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="newTitle || newCap" color="green" dark @click="saveImage"
        >save <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import storage from '@/helpers/galleries/storage'
import { mapActions } from 'vuex'

export default {
  name: 'ImageGridCell',
  props: {
    image: Object,
    loading: Boolean
  },
  data: () => ({
    imgSrc: '',
    dConfirm: false,
    newTitle: null,
    newCap: null
  }),
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.lgAndUp
    }
  },
  async mounted() {
    this.imgSrc = await storage.downUrl(this.image.path)
  },
  methods: {
    ...mapActions('galleries', ['deleteImage', 'updateImage']),
    confirmDelete() {
      this.deleteImage(this.image)
      this.dConfirm = false
    },
    inputTitle(value) {
      this.newTitle = value
    },
    inputCaption(value) {
      this.newCap = value
    },
    async saveImage() {
      const { path } = this.image
      const title = this.newTitle
      const caption = this.newCap
      await this.updateImage({ path, title, caption })
      this.newTitle = null
      this.newCap = null
    }
  }
}
</script>
