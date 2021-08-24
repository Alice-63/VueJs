
new Vue({
    el:"#app",
    data:
    {
        changeTitel:"",
        message:"Ali Cetindag",
        link:"http://www.google.com"
    },
    methods:
    {
        hello:function ()
        {
            return "Merhaba "+ this.changeTitel+ this.message
        }
    }
   
    
})