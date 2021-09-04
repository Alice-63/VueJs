<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<input type="text" v-model="namem">

    <Test v-bind:ad=nm key="nm"/>
    <p>{{namem}}</p>
  </div>
</template>

<script>
import Test from './components/Test.vue'

export default {
  name: 'App',
  data:function()
  { return  {  namem:""}
  },
  components: {
    Test
  },
  computed:
  {
    nm:this.namem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
