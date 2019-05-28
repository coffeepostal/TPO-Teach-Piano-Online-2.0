import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//  Importing Plugins
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
