<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <Profilephoto/>
      <Profiletitle/>
      <Posts/>
      <h1>{{status}}</h1>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Profilephoto from "./components/Profilephoto.vue"
import Profiletitle from "./components/Profiletitle.vue"
import Posts from "./components/Posts.vue"

export default {
  components:
  {
    Profilephoto,
    Profiletitle,
    Posts
  },
  data:function()
  {

    return status:"Pasif"
  }
}
</script>
