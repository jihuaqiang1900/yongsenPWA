import Vue from 'vue'
import App from './App.vue'
import router from './router'
import platform from './utils/platform'

Vue.use(platform)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
