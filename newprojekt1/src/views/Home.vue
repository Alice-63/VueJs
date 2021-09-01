<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <KayitFormu/>
    <Uhr/>
    
    <p>{{adlar}}</p>
    <button @click="add()">Ekle</button>
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
     "Ali",
     "Meryem",
     "Mustafa"

    ],
    adlar:
    [

    ]
  
    }
  },
  methods:
  {
    add:function(){
      this.adlar=this.names.slice(0,3)
    }
  }
  
}



</script>
