
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
            this.sayi+this.sayi2
        }
    },
    computed:
    {

    }
})