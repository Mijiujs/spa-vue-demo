// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
    },
    {
      path: '/js',
      name: 'js',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/layout.vue'),
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
