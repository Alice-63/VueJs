<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
       <router-link to="/team">Team</router-link>
    </div>
    <div>
      
   
    </div>
    <router-view/>
  </div>
</template>
<script>



export default {
  components:
  {
  
  },
  data:function()
  {

    return{ }
  }
}
</script>
