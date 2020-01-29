<template>
  <nav-content title="Profolio" :bg-color="'#EF6C00'">
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
          v-for="project in profolio"
          :key="project.id"
          :to="`/profolio/edit/${project.id}`"
        >
          {{ project.name }}
        </v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </nav-content>
</template>

<script>
import { mapState } from 'vuex'
import NavContent from '@/views/components/NavContent.vue'
import store from '@/store'

export default {
  name: 'Profolio',
  components: { NavContent },
  computed: {
    ...mapState('profolio', { profolio: 'items' }),
    ...mapState('app', ['networkOnline']),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },
  created() {
    if (!store.state.profolio.items) {
      store.dispatch('profolio/getAll')
    }
  }
}
</script>

<style lang="scss" scoped></style>
