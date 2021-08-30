new Vue({

    el:"#app",
    data:
    {
        player_heal:100,
        monster_heal:100,
        game_is_on:false,
        logs:[]
    },
    methods:
    {
        start_game:function(){
            this.game_is_on=true
        },
        attack:function(){
            var point=Math.ceil(Math.random()*10);
            this.monster_heal-=point;
            this.add_to_log({turn:"p", text: "Oyuncu Atagi ("+point+")"})
            this.monster_attack()
           

        },
        special_attack:function(){
            var point=Math.ceil(Math.random()*20);
            this.monster_heal-=point;
            this.add_to_log({turn:"p", text: "Özel Oyuncu Atagi ("+point+")"})
            this.monster_attack()
            

            
        },
        heal_up:function(){

            var point=Math.ceil(Math.random()*20);
            this.player_heal+=point;
            this.add_to_log({turn:"p", text: "Ilk Yardim ("+point+")"})
            this.monster_attack()
           

        },
        give_up:function(){
            this.player_heal=0
        },
        monster_attack:function(){

            var point=Math.ceil(Math.random()*15);
            this.player_heal-=point;
            this.add_to_log({turn:"p", text: "Canavar Atagi ("+point+")"})
        
        },
        add_to_log:function(log){
            this.logs.push(log)
            console.log(this.logs)
        }
    },
    watch:
    {
        player_heal:function(value){

            if(value<=0)
            {
                this.player_heal=0;
                if(confirm("Oyunu KAYBETTINIZ. Tekrar etmek ister misniz?"))
                {
                    this.player_heal=100,
                    this.monster_heal=100
                }
            }
            else if(value>=100)
            {
                this.player_heal=100
            }
        },
        monster_heal:function(value){
            if(value<=0)
            {
                this.monster_heal=0
                if(confirm("Oyunu KAZANDINIZ. Tekrar etmek ister misniz?"))
                {
                    this.player_heal=100,
                    this.monster_heal=100
                }
            }
        }
    }
})