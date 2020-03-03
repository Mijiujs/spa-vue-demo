// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const routes = [
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
        component:()=>import('../views/js/curry.vue')
      }

    ]
  },
  {
    path: '/css',
    name: 'css',
    component: () => import(/* webpackChunkName: "about" */ '../views/css.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "about" */ '../views/chart.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
