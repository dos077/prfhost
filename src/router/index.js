import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: () =>
        import(/* webpackChunkName: "client-chunk-account" */ '@/views/profile/Index.vue')
    },
    {
      path: '/galleries',
      name: 'galleries',
      component: () =>
        import(/* webpackChunkName: "client-chunk-account" */ '@/views/Gallery/Index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/Gallery/_notice.vue')
        },
        {
          path: '/:gid'
        }
      ]
    },
    { path: '*', redirect: '/home' }
  ]
})

/**
 * Handle user redirections
 */

router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    store.state.authentication.user == null
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    next(`${path}?redirectUrl=${to.path}`)
  } else {
    next()
  }
})

export default router
