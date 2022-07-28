import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Notifications from 'vue-notification'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
