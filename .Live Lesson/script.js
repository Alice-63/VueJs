
const app=  new Vue({
    el:"#app",
    data:
    {
        sayi:13,
        sayi2:23,
        sayi3:32
    },
    methods:
    {
        add:function()
        {
           return Math.round(Math.random()*100);
         
        }
    },
    computed:
    {
       add2:function()
       {
        return Math.round(Math.random()*100)
       }
    }
})