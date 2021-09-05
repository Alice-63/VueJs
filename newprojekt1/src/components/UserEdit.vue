<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Kullanici adi: {{name}}</p>
    <p>Kullanici Yasi: {{age}}</p>
    <p>{{ switchName()}}</p>
    <input type="text" v-model="child">
    <button @click="VeriGonder()">Gönder</button>
   

  </div>
</template>
<script>
import {EventBus} from '../main'
export default
{
  data:function(){
    return{
      child:""
    }
  },
  props:
  {
    name:
    {
      type:String,
      required:true,
      default:"ALi"
      },
      age:String
  },
  methods:
  {
   switchName:function(){
     return this.name.split("").reverse().join("");
   },
   VeriGonder:function(){
     this.$emit("yeni", this.child)
   },
   created()
   {
     EventBus.$on("yeniYas",function(x){
       this.age=x;
     })
   }
   
   
  }
}
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

