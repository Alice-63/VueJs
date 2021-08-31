<template>
  <div id="app">
 <div class="inputs">
   <input type="text" v-model="inp_name" placeholder="Name">
   <input type="text" v-model="inp_surname" placeholder="Surname">
   <input type="number" v-model="inp_age" placeholder="Age">
   <button @click="add">Add</button>
 </div>
 <div class="resulst">
   <div v-for="(person,i) in personen" :key="person.id">
     <div>{{i}}</div>
     <div>{{person.name}}</div>
     <div>{{person.surname}}</div>
     <div>{{person.age}}</div>
     <div class="delete" @click="del()">
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
        
        
      ],
      inp_name:"",
      inp_surname:"",
      inp_age:""
    }
  },
  methods:
  {
    add:function()
    {
      this.personen.push(
        {
          
          name:this.inp_name,
          surname:this.inp_surname,
          age:this.inp_age
        }
      )
      this.inp_name="",
      this.inp_surname="",
      this.inp_age=""

    },
    del:function(i){
      this.personen.splice(i,1)
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


