Vue.directive("focus",
{
    inserted:function(el)
    {
        el.focus()
    }
})

const app=new Vue
(
    {
    el:"#app"    
    }

)

const benutzer=
[
    {name:"ALi",surname:"Cetin",age:37},
    {name:"Mustafa",surname:"Cetin",age:12},
    {name:"Zeynep",surname:"Cetin",age:8}
]



const alle=benutzer.map(function(b)
{return benutzer.name})
console.log(alle)





















