const app= new Vue({
    el:"#app",
    data:{
        step:1,
        text:"Anmelden"
    },
    methods:
    {
        next(){
            app.step++
        }
    }
})