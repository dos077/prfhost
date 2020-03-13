<template>
  <nav-content :title="collectionName" :bg-color="color">
    <template v-slot:nav>
      <v-tabs
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        slider-size="0"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab
          v-for="gallery in galleries"
          :key="gallery.id"
          :to="`/galleries/edit/${gallery.id}`"
        >
          {{ gallery.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </nav-content>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import NavContent from '@/views/components/NavContent.vue'
import store from '@/store'

export default {
  name: 'Galleries',
  components: { NavContent },
  computed: {
    ...mapGetters('galleries', ['isDeletionPending']),
    ...mapState('galleries', {
      galleries: 'items',
      collectionName: 'collectionName',
      color: 'color'
    }),
    ...mapState('app', ['networkOnline']),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  created() {
    if (!store.state.galleries.items) {
      store.dispatch('galleries/getAll')
    }
  }
}
</script>

<style lang="scss" scoped></style>
