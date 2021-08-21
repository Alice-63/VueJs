Vue.directive("test",
{
    inserted:function(el)
    {
        el.style.color="pink"
    }
})


const app= new Vue({
    // el:"#app",
    // data:{}
})
