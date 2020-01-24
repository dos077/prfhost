<template>
  <v-card outlined class="ma-4" :loading="!gallery">
    <v-form v-if="gallery">
      <v-card-title>
        <v-text-field v-model="gallery.name" label="Title" />
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
import asyncStorage from '@/firebase/async-storage'

export default {
  name: 'GalleryForm',
  props: {
    gallery: Object
  },
  data: () => ({
    imageFile: null
  }),
  computed: {
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapActions('galleries', ['create', 'update']),
    changeFile(file) {
      this.imageFile = file
    },
    async upload() {
      const storageRef = (await asyncStorage()).ref()
      const imagesRef = storageRef.child(`user/${this.user.id}/images`)
      console.log(imagesRef)
      console.log(this.imageFile)
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
