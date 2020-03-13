<template>
  <v-card outlined class="ma-4">
    <v-dialog v-if="gallery" v-model="dConfirm" width="80vw" max-width="500px">
      <v-card dark="">
        <v-card-title>
          Press confirm to delete {{ gallery.name }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dConfirm = false">Cancel</v-btn>
          <v-btn color="red" outlined @click="confirmDelete">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-alert v-if="storageError" color="red lighten-3" class="ma-2">
      {{ storageError }}
    </v-alert>
    <v-form v-if="gallery" @submit.prevent="save">
      <v-card-title>
        <v-text-field :value="gallery.name" label="Title" @input="nameInput" />
      </v-card-title>
      <v-card-text>
        <v-file-input
          v-model="imageFile"
          :accept="acceptableTypes"
          placeholder="select image file for upload"
          :disabled="limitReached"
          label="Upload Image"
          prepend-icon="mdi-camera"
          :rules="imageRules"
        >
          <template v-slot:append>
            <span class="caption" :class="{ 'red lighten-2': limitReached }">
              {{ uploaderMsg }}
            </span>
          </template>
        </v-file-input>
        <v-btn
          color="blue"
          text
          :disabled="loading || limitReached"
          @click="upload"
        >
          upload
        </v-btn>
      </v-card-text>
    </v-form>
    <v-card-actions>
      <v-btn
        v-if="newName"
        outlined
        color="success"
        :disabled="loading"
        @click="save"
      >
        save <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        v-if="!newName"
        text
        color="success"
        :disabled="loading"
        @click="$router.push('/galleries')"
        >done</v-btn
      >
      <v-spacer />
      <v-btn
        outlined
        color="red darken-2"
        :disabled="loading"
        @click="dConfirm = true"
      >
        delete<v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import {
  imageRules,
  galleryImageLimit,
  acceptableTypes
} from '@/helpers/storage/imageFile'

export default {
  name: 'GalleryForm',
  props: {
    gallery: Object,
    loading: Boolean
  },
  data: () => ({
    imageFile: null,
    newName: null,
    uploading: false,
    dConfirm: false,
    storageError: null,
    imageRules,
    acceptableTypes: acceptableTypes.join(',')
  }),
  computed: {
    ...mapState('authentication', ['user']),
    nImages() {
      return this.gallery.images ? this.gallery.images.length : 0
    },
    uploaderMsg() {
      return `${this.nImages}/${galleryImageLimit} slots used`
    },
    limitReached() {
      return this.nImages >= galleryImageLimit
    }
  },
  methods: {
    ...mapActions('galleries', {
      update: 'update',
      deleteGallery: 'deleteGallery',
      addImage: 'addImage'
    }),
    async changeFile(file) {
      this.imageFile = file
    },
    nameInput(value) {
      this.newName = value
    },
    async upload() {
      if (this.imageFile) {
        this.storageError = null
        try {
          await this.addImage(this.imageFile)
          this.imageFile = null
        } catch (e) {
          this.storageError = e
        }
      }
    },
    async save() {
      if (this.newName) {
        const { id, createTimestamp, images } = this.gallery
        await this.update({ name: this.newName, id, createTimestamp, images })
      }
      this.newName = null
    },
    async confirmDelete() {
      await this.deleteGallery(this.gallery)
      this.$router.push('/galleries')
    }
  }
}
</script>
