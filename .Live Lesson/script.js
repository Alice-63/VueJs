
new Vue({
    el:"#app",
    data:
    {
        changeTitel:"Ali",
        message:"Ali Cetindag",
        link:"http://www.google.com",
        box:"background-color:red"
    },
    methods:
    {
        hello:function ()
        {
            return this.changeTitel="ALi degisti"
            
        }
    }
   
    
})