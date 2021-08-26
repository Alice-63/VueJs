<template>
  <div id="app">
    <header>
      <div>
        
      </div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/team">Unsere Team</router-link> |
        <router-link to="/kontakt">Kontakt</router-link>
      </div>
    </header>
   <main> 
     <router-view/>
   </main>
   <footer>
     Digitalle Kariere
   </footer>
  </div>
</template>

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
