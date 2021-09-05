<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Kullanici adi: {{name}}</p>
    <p>{{ switchName()}}</p>

  </div>
</template>
<script>
export default
{
  props:
  {
    name:
    {
      type:String,
      required:true,
      default:"ALi"
      }
  },
  methods:
  {
   switchName:function(){
     return this.name.split("").reverse().join("");
   }
  }
}
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

