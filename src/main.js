import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/misc/register-service-worker'
import '@/misc/handle-network-status'
import '@/firebase/init'
import '@/firebase/authentication'
import '@/misc/handle-apple-install-prompt'
import 'pwacompat'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    if (sessionStorage.redirect) {
      const { redirect } = sessionStorage
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  },
  render: h => h(App)
}).$mount('#app')
