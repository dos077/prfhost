<template>
  <v-card outlined class="ma-4">
    <v-dialog v-if="project" v-model="dConfirm" width="80vw" max-width="500px">
      <v-card dark="">
        <v-card-title>
          Press confirm to delete {{ project.name }}
        </v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dConfirm = false">Cancel</v-btn>
          <v-btn color="red" outlined @click="confirmDelete">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-form v-if="project" @submit.prevent="save">
      <v-alert v-if="storageError" color="red lighten-4" class="ma-2">
        {{ storageError }}
      </v-alert>
      <v-card-title>
        <v-text-field :value="project.name" label="Title" @input="nameInput" />
      </v-card-title>
      <v-card-text>
        <v-file-input
          ref="imgFileInput"
          v-model="imageFile"
          accept="image/jpeg"
          placeholder="select a file for upload"
          label="Change Banner Image"
          prepend-icon="mdi-camera"
          :rules="imageRules"
        />
        <v-btn
          color="blue"
          text
          :disabled="loading || !imageFile"
          @click="upload"
        >
          upload
        </v-btn>
        <v-text-field
          :value="project.github"
          label="Github"
          :disabled="loading"
          @input="githubInput"
        />
        <v-text-field
          :value="project.demo"
          label="Demo Link"
          :disabled="loading"
          @input="demoInput"
        />
      </v-card-text>
    </v-form>
    <v-card-actions>
      <v-btn
        v-if="changes"
        color="success"
        dark
        :disabled="loading"
        @click="save"
      >
        save <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <v-btn
        v-if="!changes"
        text
        color="success"
        :disabled="loading"
        @click="$router.push('/profolio')"
      >
        done
      </v-btn>
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
import { imageRules } from '@/helpers/storage/imageFile'

export default {
  name: 'ProjectForm',
  props: {
    project: Object,
    loading: Boolean
  },
  data: () => ({
    imageFile: null,
    newName: null,
    newDemo: null,
    newGithub: null,
    uploading: false,
    dConfirm: false,
    imageRules,
    storageError: null
  }),
  computed: {
    ...mapState('authentication', ['user']),
    changes() {
      return this.newName || this.newGithub || this.newDemo
    }
  },
  methods: {
    ...mapActions('profolio', {
      update: 'update',
      deleteProject: 'deleteProject',
      addBanner: 'addBanner'
    }),
    nameInput(value) {
      this.newName = value
    },
    githubInput(value) {
      this.newGithub = value
    },
    demoInput(value) {
      this.newDemo = value
    },
    async upload() {
      if (this.imageFile) {
        try {
          this.storageError = null
          await this.addBanner(this.imageFile)
        } catch (e) {
          this.storageError = e
        }
        this.imageFile = null
      }
    },
    async save() {
      if (this.newName || this.newDemo || this.newGithub) {
        const clone = { ...this.project }
        if (this.newName) clone.name = this.newName
        if (this.newDemo) clone.demo = this.newDemo
        if (this.newGithub) clone.github = this.newGithub
        await this.update(clone)
      }
      this.newName = null
      this.newDemo = null
      this.newGithub = null
    },
    async confirmDelete() {
      await this.deleteProject(this.project)
      this.$router.push('/profolio')
    }
  }
}
</script>
