<template>
  <gallery-form :gallery="gallery" />
</template>

<script>
import { mapState, mapActions } from 'vuex'
import GalleryForm from './_form.vue'

export default {
  name: 'GalleryEdit',
  components: {
    GalleryForm
  },
  computed: {
    ...mapState('galleries', { gallery: 'current' })
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
    // else this.$router.push({ path: '/galleries' })
  },
  methods: {
    ...mapActions('galleries', { read: 'read' }),
    cancel() {
      this.$router.push('/galleries')
    }
  }
}
</script>
