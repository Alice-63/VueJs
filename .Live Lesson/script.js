Vue.component("test3",{
    template:"<button class='btn btn-info' @click='zahl++'> Klick :{{zahl}}</button>",
    data:function(){
        return{zahl:0}
    }

})


const app=new Vue
({
    el:"#app",
  components:
  {
      test:
      {
          template:"<button class='btn btn-primary' > Klick </button>",
          data:function() {
              return {zahl:0}
          }
      },
      test2:
      {
          template:"<button class='btn btn-warning' > Klick:{{zahl}}</button>"
          ,data:function() {
            return {zahl:0}
        }
        },
    
  },

})



















// {
//     name:"Ali",
//     surname:"Cetindag",
//     age:37,
// },
// {
//    name:"Mustafa",
//    surname:"Cetindag",
//    age:12,
// },
// {
//    name:"Zeynep",
//    surname:"Cetindag",
//    age:8,
// }