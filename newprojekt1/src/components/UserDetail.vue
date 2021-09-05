<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Yasi:{{age}}</p>
    <button @click="yeniYas()">Degistir</button>
    
  </div>
</template>
<script>
import {EventBus} from '../main'
export default
{
  props:{
    age:String
  },
  methods:
  {
    yeniYas:function(){
      // this.$emit("yas","30")
      EventBus.$emit("yas","30")
    }
  }
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
