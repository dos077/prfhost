<template>
  <nav-content :title="!!user ? 'Profile' : 'Login'" :bg-color="'#424242'">
    <template v-slot:nav> </template>
    <template v-slot:content>
      <v-overlay :value="!networkOnLine" absolute>
        <v-card>
          <v-card-text>
            <p class="text-primary">
              Please check your connection, login feature is not available
              offline.
            </p>
          </v-card-text>
        </v-card>
      </v-overlay>
      <v-container fill-height>
        <v-row align-content="center" justify="center" style="height:100%;">
          <v-alert v-if="loginError" type="error">
            {{ loginError }}
          </v-alert>
          <v-btn light>
            <v-icon>mdi-google</v-icon>
            <span class="px-2">Sign in with Google</span>
          </v-btn>
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
  watch: {
    user: {
      handler(user) {
        if (user) {
          const redirectUrl = !this.$route.query.redirectUrl
            ? '/'
            : this.$route.query.redirectUrl
          this.$router.push(redirectUrl)
        }
      },
      immediate: true
    }
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
