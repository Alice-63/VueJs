import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/team',
    name:'Unsere Team',
    component:() => import('../views/team.vue')
  },
  {
    path:'/kontakt',
    name:'Kontakt',
    component:()=> import('../views/kontakt.vue')
  },
  {
    path:"/yeniSayfa",
    name:"Yeni Sayfa",
    component:()=>{"../views/yeniSayfa.vue"}
  }
]

const router = new VueRouter({
  routes
})

export default router
