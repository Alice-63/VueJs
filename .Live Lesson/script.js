

Vue.component("hallo",
{
    template:"<button @click='add()'> Click {{number}}</button",
    data:function()
    {
        add()
        {
            return {number:1}
        }
    }
})



const app= new Vue({
    el:"#app",
    data:
    {

    },
    components:
    {
        hallo1:
        {
            template:"<button> Click Me</button"
        }
    }



})





















// Vue.component("hallo",
// {
//     template:"<button> Click </button>"
// })

// const app=new Vue({
//     el:"#app",
//     data:{

//     },
//     components:
//     {
//         hallo1:
//         {
//             template:"<button style='color:blue'> Click </button>"
//         }
//     }
// })




















