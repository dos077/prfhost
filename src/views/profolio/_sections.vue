<template>
  <v-container class="mx-2">
    <v-row>
      <v-col>
        <v-btn color="green" dark :disabled="loading" @click="preAdd">
          new section <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="project">
      <v-col v-for="section in project.sections" :key="section.id" cols="12">
        <section-form :section="section" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import SectionForm from './_sectionForm.vue'

export default {
  name: 'ProjectSections',
  components: {
    SectionForm
  },
  props: {
    project: Object,
    loading: Boolean
  },
  methods: {
    ...mapActions('profolio', {
      addSection: 'addSection',
      deleteProject: 'deleteProject'
    }),
    async preAdd() {
      await this.addSection()
      this.$vuetify.goTo(999999)
    }
  }
}
</script>
