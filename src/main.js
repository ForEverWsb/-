import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'
import './assets/css/iconfont.css'
Vue.prototype.$center = new Vue();



import Page from '@/components/common/ipage.vue' ;
Vue.component('Page',Page)


Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
