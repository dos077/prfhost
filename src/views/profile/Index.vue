<template>
  <nav-content title="Account" :bg-color="color">
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
        <v-tab @click="clickLogout">Logout</v-tab>
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
      <alias-form />
    </template>
  </nav-content>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { isNil } from 'lodash'
import firebase from 'firebase/app'
import NavContent from '@/views/components/NavContent.vue'
import AliasForm from './_form.vue'

export default {
  name: 'UserProfile',
  components: {
    NavContent,
    AliasForm
  },
  data: () => ({
    loginError: null
  }),
  computed: {
    isDesktop() {
      return this.$vuetify.breakpoint.mdAndUp
    },
    ...mapState('app', ['networkOnLine', 'appTitle']),
    ...mapState('authentication', ['user']),
    ...mapState('profile', ['color'])
  },
  watch: {
    user: {
      handler(user) {
        if (!isNil(user)) {
          const redirectUrl = isNil(this.$route.query.redirectUrl)
            ? '/account'
            : this.$route.query.redirectUrl
          this.$router.push(redirectUrl)
        }
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions('authentication', ['logout']),
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
        const res = await firebase.auth().signInWithRedirect(provider)
        console.log(res)
      } catch (err) {
        this.loginError = err
        this.setUser(null)
      }
    },
    async clickLogout() {
      await firebase.auth().signOut()
      await this.logout()
      this.$router.push('/')
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
