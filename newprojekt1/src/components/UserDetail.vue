<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Yasi:{{age}}</p>
    <button @click="yeniYas()">Degistir</button>
    
  </div>
</template>
<script>
import {eventBus} from '../main'
export default
{
  props:{
    age:String
  },
  methods:
  {
    yeniYas:function(){
      console.log("Burda!")
     this.age=30
      eventBus.$emit("yas",this.age)
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
