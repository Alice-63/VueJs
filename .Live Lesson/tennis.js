const app = new Vue({
    el: "#app",
    data: {
        score1: 0,
        score2: 0,
        info: "Love",
        p1_p: 0,
        p2_p: 0,
        step1: 0,
        step2: 0
    
    },
    methods: {
        ply1: function () {
            if (this.step1 == 0) {
                this.score1 += 15;
                this.step1++;
                this.p1_p++
                this.scoreCheck();
            }
            
        
            else if (this.step1 == 1) {
                this.score1 = 30;
                this.step1++;
                this.p1_p++
                this.scoreCheck();
            }
            else if (this.step1 == 2) {
                this.score1 = 40;
                this.step1++;
                this.p1_p++
                this.scoreCheck();
            }
            else if (this.step1 == 3) {
                this.info = "advantage Player1";
                this.step1++;
                this.p1_p++;
                }
                
            else if (this.step1 == 4 && this.step2<5) {
                this.info = "Winner Player1";
                
                return;
                }
        }
        
        ,
        ply2: function () {
            if (this.step2 == 0) {
                this.score2 = 15;
                this.step2++;
                this.p2_p++;
                this.scoreCheck();
            }
            
        
            else if (this.step2 == 1) {
                this.score2 = 30;
                this.step2++;
                this.p2_p++;
                this.scoreCheck();
            }
            else if (this.step2 == 2) {
                this.score2 = 40;
                this.step2++;
                this.p2_p++
                this.scoreCheck();
            }
            else if (this.step2 == 3)
            {
                this.info = "advantage Player2";
                this.step2++;
                this.p2_p++;
            }
            else if (this.step2 == 4 && this.step1<5) {
                this.info = "Winner Player2";
                
                return;
            }
            
        },
        scoreCheck: function () {
            if (this.score1 == this.score2) {
                
                if (this.score1 == 15) {
                     this.info = "15 all";
                }
                else if (this.score1 == 30) {
                     this.info = "30 all";
                }
                else if (this.score1 == 40) {
                     this.info = "deuce*";
                }
                
            }
            else  this.info = ".....";
        }
    
    }
}
);