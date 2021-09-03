<template>
    <div>
        
        <b>Username: {{$route.params.username}}</b>
        <h1>Hallo {{name}}</h1>
        This Page is for You
        <div class="">
            Hallo
        </div>
    </div>
</template>
<script>
export default {
    computed:
    {
        name:function(){
            var b=this.$route.params.username
            if(b=="Ali")
            {
                return "Ali Cetindag"
            }
            else if(b=="max_M")
            {
                return "Max Mustermann"
            }
            return "This Page is dont find"
        }
    }
}
</script>