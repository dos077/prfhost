<template>
  <v-card class="mr-2">
    <v-dialog v-model="dConfirm" max-width="500px" width="90%">
      <v-card>
        <v-card-title>Remove Section?</v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn outlined color="red" @click="confirmDelete">
            confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-toolbar color="primary" dark>
      <v-file-input
        v-model="newFile"
        prepend-icon="mdi-camera"
        single-line
        class="mr-4"
        hide-details
        label="Add Image"
        :rules="imageRules"
      />
      <v-btn outlined :disabled="loading" @click="upload">upload</v-btn>
    </v-toolbar>
    <v-alert v-if="storageError" color="red lighten-4" class="ma-2">
      {{ storageError }}
    </v-alert>
    <v-card-text>
      <v-container v-if="section.images">
        <v-row>
          <v-col
            v-for="image in section.images"
            :key="image.path"
            :cols="imageOnly ? '6' : '12'"
          >
            <v-img :src="image.src" :aspect-ratio="imageOnly ? 4 / 3 : 16 / 9">
              <v-btn
                fab
                absolute
                right
                small
                color="red darken-1"
                dark
                class="my-2"
                @click="confirmImageDelete(image.path)"
              >
                <v-icon>mdi-trash-can</v-icon>
              </v-btn>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-textarea
        :value="section.text"
        :disabled="imageOnly"
        label="Body Text"
        @input="textInput"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn
        v-if="newText"
        color="green"
        :disabled="loading"
        outlined
        @click="save"
      >
        save <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn color="red" outlined :disabled="loading" @click="dConfirm = true">
        remove section <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import { imageRules } from '@/helpers/storage/imageFile'

export default {
  name: 'SectionForm',
  props: {
    section: Object,
    loading: Boolean
  },
  data: () => ({
    newFile: null,
    newText: null,
    dConfirm: false,
    imageRules,
    storageError: null
  }),
  computed: {
    imageOnly() {
      return this.section.images && this.section.images.length > 1
    }
  },
  methods: {
    ...mapActions('profolio', {
      addImage: 'addImage',
      deleteImage: 'deleteImage',
      updateSection: 'updateSection',
      deleteSection: 'deleteSection',
      verify: 'verifyImage'
    }),
    textInput(text) {
      this.newText = text
    },
    async upload() {
      if (this.newFile) {
        try {
          this.storageError = null
          await this.addImage({ imgFile: this.newFile, section: this.section })
          this.newFile = null
        } catch (e) {
          this.storageError = e
        }
      }
    },
    async save() {
      await this.updateSection({ section: this.section, newText: this.newText })
      this.newText = null
    },
    async confirmDelete() {
      await this.deleteSection(this.section)
      this.dConfirm = false
    },
    confirmImageDelete(path) {
      this.deleteImage({ path, section: this.section })
    }
  }
}
</script>
