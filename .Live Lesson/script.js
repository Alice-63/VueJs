
new Vue({
    el:"#app",
    data:
    {
        changeTitel:"Ali",
        message:"Ali Cetindag",
        link:"http://www.google.com",
        box:"background-color:red",
        blogLink:"<a href='https://www.youtube.com/'>Link</a>"
    },
    methods:
    {
        hello:function ()
        {
            return this.changeTitel="ALi degisti"
            
        }
    }
   
    
})