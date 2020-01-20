<template>
  <nav-content title="Gallery" :bg-color="'#616161'">
    <template v-slot:nav>
      <v-tabs
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        :slider-size="isDesktop ? '0' : '2'"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab v-for="gallery in galleries" :key="gallery.id">
          {{ gallery.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <h1 class="display-2">No gallery selected for edit</h1>
      <v-btn>new gallery<v-icon>mdi-new</v-icon></v-btn>
    </template>
  </nav-content>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import NavContent from '@/views/components/NavContent.vue'

export default {
  name: 'Galleries',
  components: { NavContent },
  computed: {
    ...mapGetters('galleries', ['isDeletionPending']),
    ...mapState('galleries', { galleries: 'items' }),
    ...mapState('app', ['networkOnline']),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  }
}
</script>

<style lang="scss" scoped></style>
