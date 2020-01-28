<template>
  <v-card outlined class="ma-4" :loading="loading">
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

export default {
  name: 'GalleryForm',
  props: {
    gallery: Object,
    loading: Boolean
  },
  data: () => ({
    imageFile: null,
    newName: null,
    uploading: false
  }),
  computed: {
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapActions('galleries', ['create', 'update', 'addImage']),
    async changeFile(file) {
      this.imageFile = file
    },
    nameInput(value) {
      this.newName = value
    },
    async upload() {
      if (this.imageFile) {
        await this.addImage(this.imageFile)
        this.imageFile = null
      }
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
