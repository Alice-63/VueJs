<template>
    <div>
      <h1>{{vorname}}</h1>
      <h2>{{nachname}}</h2>
      <h3 v-for="hobby in hobbys" :key="hobby">{{hobby}}_</h3>
      <p>{{num}}</p>
    </div>
</template>
<script>
export default {
    data:function()
    {

    },
    props:
    {
        "vorname":String,
        "nachname":String,
        "hobbys":Array,
        num:Number
    }
        

    
}
</script>