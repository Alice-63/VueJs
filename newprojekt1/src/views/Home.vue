<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <KayitFormu/>
    <Uhr/>
    
    <p v-for="(a,b,c) in names" :key="a">{{c}}.{{b}}:{{a}}</p>
    <button @click="add">Ekle</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import KayitFormu from "../components/KayitFormu.vue"
import Uhr from "../components/Uhr.vue"

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Uhr,
     KayitFormu
  },
  data:()=>{
    return{
    names:
    [
      {
        ad:"Meryem",
        soyad:"Cetin",
        age:36
      },
      {
        ad:"Ali",
        soyad:"Cetin",
        age:36
      },
      {
        ad:"Mustafa",
        soyad:"Cetin",
        age:11
      }

    ]
  
    }
  },
  methods:
  {
    add:function(){
      this.names.push('ad:"zeynep",soyad:"Cetin", age:8')
    }
  }
  
}



</script>
