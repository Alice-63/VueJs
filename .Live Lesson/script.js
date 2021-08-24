
new Vue({
    el:"#app",
    data:
    {
        changeTitel:"",
        message:"Ali Cetindag"
    },
    methods:
    {
        hello:function ()
        {
            return "Merhaba"+ this.changeTitel+ this.message
        }
    }
   
    
})