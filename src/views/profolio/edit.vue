<template>
  <div>
    <v-img
      v-if="bannerSrc"
      width="100%"
      :aspect-ratio="$vuetify.breakpoint.lgAndUp ? 2.2 : 1.89"
      :src="bannerSrc"
      class="banner"
    />
    <project-form :project="project" :loading="loading" />
    <div style="height: 100vh" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProjectForm from './_form.vue'
import storage from '@/helpers/galleries/storage'

export default {
  name: 'ProjectEdit',
  components: {
    ProjectForm
  },
  data: () => ({
    bannerSrc: ''
  }),
  computed: {
    ...mapState('profolio', {
      project: 'current',
      updatePending: 'updatePending',
      creationPending: 'creationPending'
    }),
    loading() {
      return (
        this.project == null ||
        this.creationPending ||
        this.updatePending.includes(this.project.id)
      )
    }
  },
  watch: {
    '$route.params.pid': {
      handler(to) {
        this.loadProject(to)
      },
      immediate: true
    },
    project: {
      handler(to) {
        if (to && to.bannerImage) this.loadBanner(to.bannerImage)
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
    },
    async loadBanner({ path }) {
      this.bannerSrc = await storage.downUrl(path)
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: -6rem;
}
</style>
