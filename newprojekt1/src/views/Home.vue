<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <KayitFormu/>
    <Uhr/>
    
    <p>{{names}}</p>
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

    ]
  
    }
  },
  methods:
  {
    add:function(){
      this.names.splice(9,3,"Ayse","Veli")
    }
  }
  
}



</script>
