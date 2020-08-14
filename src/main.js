// 以前这些通过npm安装后import引用，现在cdn引用后这些挂载到了全局，可以直接使用
// import Vue from 'vue'
// import axios from 'axios'
// import ElementUI from 'element-ui'
// import qs from 'qs'
// import $ from 'jquery';
// import echarts from 'echarts'
import App from './App.vue'
import router from './router'
import store from './store'
// "@vue/standard"
// 本地引入element css文件
import '../src/assets/css/index.css'
import '@webuy/coral-icon/lib/index.css';
import CoralIcon from '@webuy/coral-icon/lib/component-vue'
import api from '@/assets/js/api.js'
console.log(api)

Vue.config.productionTip = false // 阻止显示生产模式的消息
Vue.use(CoralIcon);

axios.defaults.baseURL = process.env.VUE_APP_BASEURL
axios.defaults.timeout = 5000
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
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
