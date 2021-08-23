
new Vue({
    el:"#app",
    data:
    {
        titel:"This is a titel"
    },
    methods:
    {
        changeTitel:function(x)
        {
            this.titel=x.target.value
        }
    }
})