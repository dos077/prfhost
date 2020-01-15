<template>
  <nav-content title="Account" :bg-color="'#4A148C'">
    <template v-slot:nav>
      <v-tabs
        :vertical="isDesktop"
        grow
        background-color="rgba(0,0,0,0)"
        :slider-size="isDesktop ? '0' : '2'"
        active-class="current"
        style="justify-content: center;"
      >
        <v-tab>Profile</v-tab>
        <v-tab>Logout</v-tab>
      </v-tabs>
    </template>
    <template v-slot:content>
      <v-overlay :value="!networkOnLine" absolute>
        <v-card>
          <v-card-text>
            <p class="text-primary">
              Please check your connection, user profile is not available
              offline.
            </p>
          </v-card-text>
        </v-card>
      </v-overlay>
      <v-container v-if="user" style="max-width: 1280px">
        <v-row>
          <v-col cols="12" style="text-align: center">
            <v-avatar height="120" width="120" style="margin: 0 auto 2rem">
              <img :src="user.photoURL" />
            </v-avatar>
            <h1 class="headline">{{ user.displayName }}</h1>
            <h2 class="subtitle-1" style="color: #616161;">{{ user.email }}</h2>
            <v-card
              style="max-width: 480px; margin: 2rem auto; background-color: rgba(0,0,0,0)"
              outlined
            >
              <v-card-title>
                Profile Customization
              </v-card-title>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Alias"
                    hint="an alias for web directory"
                  />
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </nav-content>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase/app'
import NavContent from '@/views/components/NavContent.vue'

export default {
  name: 'UserProfile',
  components: {
    NavContent
  },
  data: () => ({
    loginError: null
  }),
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    ...mapState('app', ['networkOnLine', 'appTitle']),
    ...mapState('authentication', ['user'])
  },
  methods: {
    ...mapMutations('authentication', ['setUser']),
    async login() {
      this.loginError = null
      const provider = new firebase.auth.GoogleAuthProvider()
      this.setUser(undefined)

      try {
        // Firebase signin with popup is faster than redirect
        // but we can't use it on mobile because it's not well supported
        // when app is running as standalone on ios & android
        // eslint-disable-next-line no-unused-expressions
        this.isDekstop
          ? await firebase.auth().signInWithPopup(provider)
          : await firebase.auth().signInWithRedirect(provider)
      } catch (err) {
        this.loginError = err
        this.setUser(null)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  display: grid;
  &.vertical {
    grid-template-columns: 1fr;
    grid-template-rows: 168px auto;
    section {
      width: 100%;
    }
  }
  &.horizontal {
    height: 100%;
    grid-template-columns: 384px auto;
    section {
      height: 100%;
    }
    .nav {
      position: sticky;
      top: 0;
      padding: 8vh 0 16vh;
    }
  }
  .nav {
    display: flex;
    max-height: 100vh;
    padding-right: 16px;
    align-items: center;
    justify-content: center;
    color: white;
  }
  .current {
    color: white;
  }
}
</style>
