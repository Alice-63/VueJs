<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Kullanici Yasi:{{age}}</p>
    <button @click="yeniYas()">Degistir</button>
    <input type="text" v-model="age">
  </div>
</template>
<script>
export default
{
  props:{
    age:String
  },
  methods:
  {
    yeniYas:function(){
      this.$emit("yas",this.age)
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
