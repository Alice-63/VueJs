Vue.component("test",{
    template:"<input type='text' :placeholder='num' @mouseout='num++'>",
    data:function(){
        return {num:0}
    }
})



const app= new Vue({
    el:"#app",
    data:
    {

    },
    components:
    {
       test2:
       {
           template:"<button>Tikla</button>"
       }
    }
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