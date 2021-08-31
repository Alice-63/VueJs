<template>
  <div id="app">
 

    <Uhr/>
     <Uhr/>
    
  </div>
  <router-view/>
</template>
<script>

import Uhr from "./components/Uhr.vue"

export default{
  name:"app",
  components:{
    Uhr
  }
}


</script>


<style scoped>
div{
  color: red;
}
img
{
  width: 20%;
}
</style>>


