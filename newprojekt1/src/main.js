import Vue from 'vue'
import App from './App.vue'

export const eventBus=new Vue({
  methods:
  {
    yeniYas:function(age)
    {
      this.$emit("yas",age)
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
