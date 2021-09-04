<template>
    <div>
        <p>This is a  test page</p>
        <h1>ALi</h1>
        <h2>Props:{{ad}}</h2>
         <h2>Props:{{soyad}}</h2>
          <h2>Props:{{yas}}</h2>
    </div>
</template>
<script>
export default {
    props:
    {
        ad:String,
        soyad:String,
        yas:Number
    }
}
</script>