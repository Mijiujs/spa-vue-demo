// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/public/login.vue')
    },
    {
      path: '/forgetPwd',
      name: 'forgetPwd',
      component: () => import(/* webpackChunkName: "forgetPwd" */ '@/views/public/forgetPwd.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "register" */ '@/views/public/register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/public/home.vue')
    },
    {
      path: '/js',
      name: 'js',
      component: () => import(/* webpackChunkName: "js" */ '../views/layout.vue'),
      redirect: '/js/curry',
      children: [
        {
          path: 'curry',
          name: 'curry',
          component: () => import('../views/js/curry.vue')
        },
        {
          path: 'promise',
          name: 'promise',
          component: () => import('../views/js/promise.vue')
        },
        {
          path: 'proxy',
          name: 'proxy',
          component: () => import('../views/js/proxy.vue')
        },
        {
          path: 'reflect',
          name: 'reflect',
          component: () => import('../views/js/reflect.vue')
        },
        {
          path: 'fn',
          name: 'fn',
          component: () => import('../views/js/fn.vue')
        }
      ]
    },
    {
      path: '/css',
      name: 'css',
      component: () => import(/* webpackChunkName: "about" */ '../views/layout.vue'),
      redirect: '/css/center',
      children: [
        {
          path: 'center',
          name: 'center',
          component: () => import('../views/css/center.vue')
        },
        {
          path: 'twoColumnLayout',
          name: 'twoColumnLayout',
          component: () => import('../views/css/twoColumnLayout.vue')
        },
        {
          path: 'threeColumnLayout',
          name: 'threeColumnLayout',
          component: () => import('../views/css/threeColumnLayout.vue')
        }
      ]
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import(/* webpackChunkName: "about" */ '../views/chart.vue')
    },
  ]
})

export default router
