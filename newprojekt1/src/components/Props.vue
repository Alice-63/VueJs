<template>
    <div>
      <h1>{{vorname}}</h1>
      <h2>{{nachname}}</h2>
      
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
        
    }
        

    
}
</script>