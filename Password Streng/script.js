

const app= new Vue({


    el:"#app",
    data:
    {
        password:""
    },
    methods:
    {
        check: function()
        {
           if(this.password.match(/[a-z]/))
           {
                console.log("Kücük Harf")
           }
           if(this.password.match(/[A-Z]/))
           {
            console.log("Büyük Harf")
           }

           if(this.password.match(/[0-9]/))
           {
            console.log("Sayi")
           }
           if(this.password.match(/[a-z]/))
           {

           }
        }
    }
})

















