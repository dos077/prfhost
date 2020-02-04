<template>
  <div>
    <v-overlay :value="loading" absolute>
      <v-progress-circular indeterminate />
    </v-overlay>
    <gallery-form :gallery="gallery" :loading="loading" />
    <image-grid :gallery="gallery" :loading="loading" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GalleryForm from './_form.vue'
import ImageGrid from './_imgGrid.vue'

export default {
  name: 'GalleryEdit',
  components: {
    GalleryForm,
    ImageGrid
  },
  computed: {
    ...mapState('galleries', {
      gallery: 'current',
      updatePending: 'updatePending',
      creationPending: 'creationPending'
    }),
    loading() {
      return (
        this.gallery == null ||
        this.creationPending ||
        this.updatePending.includes(this.gallery.id)
      )
    }
  },
  watch: {
    '$route.params.gid': {
      handler(to) {
        this.loadGallery(to)
      },
      immediate: true
    }
  },
  mounted() {
    this.loadGallery(this.$route.params.gid)
  },
  methods: {
    ...mapActions('galleries', { read: 'read' }),
    loadGallery(gid) {
      if (!gid) this.$router.push('/galleries')
      else if (!this.gallery || this.gallery.id !== gid) {
        this.read(gid)
      }
    }
  }
}
</script>
