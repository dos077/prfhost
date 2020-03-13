<template>
  <v-app>
    <v-navigation-drawer
      v-if="user"
      v-model="drawerOn"
      app
      dark
      color="#212121"
    >
      <v-list>
        <v-list-item link to="/galleries">
          {{ galleriesName }}
        </v-list-item>
        <v-list-item link to="/profolio">
          {{ profolioName }}
        </v-list-item>
        <v-list-item link to="/account">
          Account
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <div
        class="content-grid"
        :class="{ mobile: !isDesktop, desktop: isDesktop }"
      >
        <title-bar @toggleDrawer="drawerOn = !drawerOn"></title-bar>
        <router-view id="main-content"></router-view>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TitleBar from './views/components/TitleBar.vue'

export default {
  name: 'App',

  components: {
    TitleBar
  },

  data: () => ({
    drawerOn: null
  }),

  computed: {
    ...mapState('authentication', ['user']),
    ...mapState('profolio', { profolioName: 'collectionName' }),
    ...mapState('galleries', { galleriesName: 'collectionName' }),
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    }
  },

  watch: {
    user: {
      handler(to) {
        if (to) {
          this.getProfolioMeta()
          this.getGalleriesMeta()
          this.getProfileMeta()
        }
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions('profolio', { getProfolioMeta: 'readMeta' }),
    ...mapActions('galleries', { getGalleriesMeta: 'readMeta' }),
    ...mapActions('profile', { getProfileMeta: 'readMeta' })
  }
}
</script>

<style lang="scss">
.content-grid {
  display: grid;
  min-height: 100vh;
  &.mobile {
    grid-template-columns: 1fr;
    grid-template-rows: 64px auto;
  }
  &.desktop {
    grid-template-columns: 72px auto;
  }
}
</style>
