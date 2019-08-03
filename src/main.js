import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './plugins/http'
import './assets/css/kico.css'

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
