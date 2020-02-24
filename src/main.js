import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import qs from 'qs'
import $ from 'jquery';
// ,
//       "@vue/standard"
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$ = $

axios.defaults.withCredentials = true// 跨域
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
// 401回登录页面
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 401:
        router.push({ path: '/' })
    }
  }
})
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    // sessionStorage.removeItem('userInfo')
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
