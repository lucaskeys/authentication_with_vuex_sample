import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from '@/plugins/firebase'

Vue.config.productionTip = false

new Vue({
  firebase,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
