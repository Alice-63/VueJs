import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Test from './components/Test.vue'


Vue.config.productionTip = false
Vue.component("Test",Test)

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
