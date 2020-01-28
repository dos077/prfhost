<template>
  <v-card outlined class="ma-4" :loading="!gallery">
    <v-form v-if="gallery">
      <v-card-title>
        <v-text-field :value="gallery.name" label="Title" @input="nameInput" />
      </v-card-title>
      <v-card-text>
        <v-file-input
          accept="image/jpeg"
          placeholder="select a file for upload"
          label="Upload Image"
          prepend-icon="mdi-camera"
          @change="changeFile"
        />
        <v-btn color="blue" text @click="upload">upload</v-btn>
      </v-card-text>
    </v-form>
    <v-card-actions>
      <v-btn text color="success" @click="save">done</v-btn>
      <v-spacer />
      <v-btn outlined color="red darken-2">
        delete<v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import storage from '@/helpers/galleries/storage'

export default {
  name: 'GalleryForm',
  data: () => ({
    imageFile: null,
    newName: null
  }),
  computed: {
    ...mapState('authentication', ['user']),
    ...mapState('galleries', { gallery: 'current' })
  },
  methods: {
    ...mapActions('galleries', ['create', 'update']),
    async changeFile(file) {
      this.imageFile = file
    },
    nameInput(value) {
      this.newName = value
    },
    async upload() {
      const imgFile = this.imageFile
      const userId = this.user.id
      const uploadedImg = await storage.upload({ imgFile, userId })
      const images = this.gallery.images
        ? [uploadedImg, ...this.gallery.images]
        : [uploadedImg]
      const { name, id, createTimestamp } = this.gallery
      this.update({ images, name, id, createTimestamp })
    },
    async save() {
      if (this.gallery.id) {
        this.update(this.gallery)
      }
    },
    cancel() {
      this.$router.push('/galleries')
    }
  }
}
</script>
