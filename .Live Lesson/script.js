Vue.directive("test",
{
    inserted:function(el)
    {
        el.style.color="pink"
    }
})


const app= new Vue({
    el:"#app",
    data:{}
})


const arr=
[
    {
        name:"Ali",
        surname:"Cetin",
        age:37
    },
    {
        name:"Meryem",
        surname:"Cetin",
        age:37
    },
    {
        name:"Mustafa",
        surname:"Cetin",
        age:12
    }
]

const filterr=arr.filter(function(v){
    return v.name="Ali"
})

console.log(filterr)