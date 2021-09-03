<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      
    <Test/>
    </div>
    <div>
      
   
    </div>
    <router-view/>
  </div>
</template>
<script>
import Test from "./components"


export default {
  components:
  {
    Test
  },
  data:function()
  {

    return{ }
  }
}
</script>
