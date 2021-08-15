
Vue.component("test",{
    template:"<button>Ali</button>"
})




const app= new Vue({


    el:"#app",
    data:
    {

    },
    components:
    {
        test1:
        {
            template:"<button @click='x++'>Mustafa: {{x}}</button>",
            data:function()
        {
            return{x:1}
        }
        },
        
    }
})





























