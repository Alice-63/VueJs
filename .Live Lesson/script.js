Vue.directive("ali",{
    inserted:function(el)
    {
        el.style.backgroundColor="red",
        el.style.fontSize="35px"
    }
})

Vue.directive("focus",
{
    inserted:function(el){
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
    {name:"Zeynep",surname:"Cetin",age:8},
    {name:"Meryem",surname:"Cetin",age:36}
]



// const alle=benutzer.filter(function(b)
// {
//     if(b.name.includes("A"))
//    {return true }
// })

// console.log(alle)


let number=[1,2,3,4,5,6]
let total=1;
number.forEach(function (param) 
{
    total+=param*2
  })

console.log(total)

















