<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <input type="text" v-model="title">
    <p>{{title}}</p>
    <button @click="changeName()">Adimi Degistir</button>
  <p>{{ChangeData}}</p>
  <p>{{age}}</p>
    <hr>
    <div class="row">
      <app-user-detail @yas="age=$event" :age="age"></app-user-detail>
      <app-user-edit @yeni="ChangeData=$event" :name="title" :age="age"></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit
    
    },
      data:function(){
        return{
          title:"",
          ChangeData:"",
          age:"25"
        }
      },
      methods:
      {
       changeName:function(){
         return this.title="Mustafa Cetin"
       },
       
      }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
