import App from './App.vue'
import router from './router'
import store from './store'
// import Vue from 'vue'
// import axios from 'axios'
// import ElementUI from 'element-ui'
// import qs from 'qs'
// import $ from 'jquery';
// import echarts from 'echarts'
// Vue、Vuex、VueRouter、ELEMENT、$、axios、Qs、echarts可以直接引用
//       "@vue/standard"

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true// 跨域
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.config.productionTip = false
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
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
