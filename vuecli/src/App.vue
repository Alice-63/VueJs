<template>
  <div id="app">
 <div class="inputs">
   <input type="text" v-model="inp_name" placeholder="Name">
   <input type="text" v-model="inp_surname" placeholder="Surname">
   <input type="number" v-model="inp_age" placeholder="Age">
   <button>Add</button>
 </div>
 <div class="resulst">
   <div v-for="person in personen" :key="person.id">
     <div>{{person.name}}</div>
     <div>{{person.surname}}</div>
     <div>{{person.age}}</div>
     <div class="delete">
       Delete
     </div>
   </div>
 </div>


    
  </div>
  <router-view/>
</template>
<script>



export default{
  name:"app",
  data:function()
  {
    return{
      personen:
      [
        {
          id:0,
          name:"Max",
          surname:"Mustermann",
          age:25
        },
        {
          id:1,
          name:"Test",
          surname:"Mustermann",
          age:25
        }
      ]
    }
  }
}


</script>


<style scoped>

.inputs
{
  margin-bottom: 40px;
  width: 100%;
  display: flex;

}
.inputs>input
{
  width: 120px;
  padding:5px 8px;
  margin-right: 3px;
  
}
.inputs>input:last-of-type
{
  width: 50px;
}
.delete
{
  margin-top: 15px;
  font-size: 0.8em;
  color: brown;
  cursor: pointer;
  display: block;
  text-align: right;
}
.delete:hover
{
  text-decoration: underline;
}


.resulst>div
{
  border: 1px solid black;
  margin-bottom: 25px;
  padding: 15px;
  width: 300px;;
}
</style>>


