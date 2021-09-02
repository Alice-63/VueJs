<template>
  <div id="app">
    <header style="display:flex; justify-content:space-between; align-items:center">
      <div class="wrapper" style="width:">
      <div>
        <img src="./assets/logo.png" alt="" style="width:100px">
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> 
      
      </div>
      </div>
    </header>
   <main> 
     <Props v-bind="maxData"/>
     <Props v-bind="martinData"/>
  
     
     <router-view/>
   </main>
   <footer>
     Digitalle Kariere
     
   </footer>
  </div>
</template>
<script>
// @ is an alias to /src

import Props from "./components/Props.vue"


export default {
  name: 'Home',
  components: {
    Props
   
  },
  props:
  {
    
  },
  data:function()
  { return{
    maxData:
    {
  "vorname":"Max",
  "nachname":"Mustermann",
  "sport":false
    },
    
       martinData:
    {
  "vorname":"Martin",
  "nachname":"Mustermann",
  "sport":true
    }
    }
    
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
