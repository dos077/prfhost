<template>
  <div>
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
      updatePending: 'updatePending'
    }),
    loading() {
      return (
        this.gallery == null || this.updatePending.includes(this.gallery.id)
      )
    }
  },
  watch: {
    gallery: {
      handler(to) {
        if (to === null) this.$router.push({ path: '/galleries' })
      },
      immediate: true
    }
  },
  mounted() {
    if (this.$route.params.gid) this.read(this.$route.params.gid)
    else this.$router.push({ path: '/galleries' })
  },
  methods: {
    ...mapActions('galleries', { read: 'read' }),
    cancel() {
      this.$router.push('/galleries')
    }
  }
}
</script>
