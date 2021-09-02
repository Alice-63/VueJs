<template>
    <div>
      <h1>{{vorname}}</h1>
      <h2>{{nachname}}</h2>
      <h3>Er mag Sport: {{sport}}</h3>
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
        "sport":Boolean
    }
        

    
}
</script>