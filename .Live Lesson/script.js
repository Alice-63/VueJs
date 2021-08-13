
Vue.component("hallo",
{
    template:"<button> Click </button>"
})

const app=new Vue({
    el:"#app",
    data:{

    },
    components:
    {
        hallo1:
        {
            template:"<button> Click </button>"
        }
    }
})




















