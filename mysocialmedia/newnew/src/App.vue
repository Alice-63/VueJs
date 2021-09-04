<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

  <Test v-for="p in prs" :ad="p.ad" :soyad="p.Soyad" :yas="p.yas" :key="p.id"/>

  </div>
</template>

<script>

const person=[
  {
    ad:"Ali",
    Soyad:"Cetin",
    yas:37
  },
  {
    ad:"Mustafa",
    Soyad:"Cetin",
    yas:12
  },
  {
    ad:"Meryem",
    Soyad:"Cetin",
    yas:36
  }
]
import Test from "./components/Test.vue"

export default {
  name: 'App',
  data:function(){
    return{
      prs:person
    }
  },
 components:
{
  Test
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
