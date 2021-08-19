

const app= new Vue
(
    {
        el:"#app2",
        data:
        {
            name:"Ali",
            surname:"Cetindag",
            age:37
        },
        computed:
        {
            fullname:function()
            {
                return this.name+ " "+ this.surname+" "+this.age
            }
        }
    }

    
)
app.name="Mustafa";
app.age="12"















