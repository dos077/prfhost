<template>
  <div v-if="project">
    <v-overlay :value="loading" absolute>
      <v-progress-circular indeterminate />
    </v-overlay>
    <v-img
      v-if="project.bannerImage"
      width="100%"
      :aspect-ratio="$vuetify.breakpoint.lgAndUp ? 2.2 : 1.89"
      :src="project.bannerImage.src"
      class="banner"
    />
    <project-form :project="project" :loading="loading" />
    <project-sections :project="project" :loading="loading" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectForm from './_form.vue'
import ProjectSections from './_sections.vue'

export default {
  name: 'ProjectEdit',
  components: {
    ProjectForm,
    ProjectSections
  },
  computed: {
    ...mapState('profolio', {
      project: 'current',
      updatePending: 'updatePending',
      creationPending: 'creationPending',
      deletionPending: 'deletionPending'
    }),
    loading() {
      return (
        this.project == null ||
        this.creationPending ||
        this.updatePending.includes(this.project.id) ||
        this.deletionPending.includes(this.project.id)
      )
    }
  },
  watch: {
    '$route.params.pid': {
      handler(to) {
        this.loadProject(to)
      },
      immediate: true
    }
  },
  mounted() {
    this.loadProject(this.$route.params.pid)
  },
  methods: {
    ...mapActions('profolio', { read: 'read' }),
    async loadProject(id) {
      if (!id) this.$router.push('/profolio')
      else if (!this.project || this.project.id !== id) {
        await this.read(id)
        if (!this.project) this.$router.push('/profolio')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: -6rem;
}
</style>
