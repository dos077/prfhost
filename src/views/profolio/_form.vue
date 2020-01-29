<template>
  <v-card outlined class="ma-4" :loading="loading">
    <v-dialog v-if="project" v-model="dConfirm" width="80vw" max-width="500px">
      <v-card dark="" :loading="loading">
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
    <v-form v-if="project">
      <v-card-title>
        <v-text-field :value="project.name" label="Title" @input="nameInput" />
      </v-card-title>
      <v-card-text>
        <v-file-input
          v-model="imageFile"
          accept="image/jpeg"
          placeholder="select a file for upload"
          label="Change Banner Image"
          prepend-icon="mdi-camera"
        />
        <v-btn color="blue" text @click="upload">upload</v-btn
        ><v-text-field
          :value="project.github"
          label="Github"
          @input="githubInput"
        />
        <v-text-field
          :value="project.demo"
          label="Demo Link"
          @input="demoInput"
        />
      </v-card-text>
    </v-form>
    <v-card-actions>
      <v-btn text color="success" @click="save">done</v-btn>
      <v-spacer />
      <v-btn outlined color="red darken-2" @click="dConfirm = true">
        delete<v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
    dConfirm: false
  }),
  computed: {
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapActions('profolio', {
      update: 'update',
      deleteProject: 'delete',
      addBanner: 'addBanner'
    }),
    async changeFile(file) {
      this.imageFile = file
    },
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
        await this.addBanner(this.imageFile)
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
      this.$router.push('/profolio')
    },
    async confirmDelete() {
      await this.deleteProject(this.project.id)
      this.$router.push('/profolio')
    }
  }
}
</script>
