




var app=new Vue({

    el:"#app",
    data:{
        character:"+"
    },
    methods:
    {
        cal(e){
            app.character=e
        },
        
    }

})



function calculate()
{


const spn=document.getElementById("spn");
const result=document.getElementById("result");
var inp1=document.getElementById("inp1").value;
var inp2=document.getElementById("inp2").value;
var war=document.getElementById("warning");

    if(inp1=="" || inp2=="")
    {
        war.innerHTML="Please fill in all fields!";
        war.style.color="red";
        return
    }
    else if(spn.innerHTML== "+")
        {
            result.innerHTML=parseInt(inp1)+parseInt(inp2);
            war.innerHTML=""
        }
    else if(spn.innerHTML=="-")
        {
        result.innerHTML=parseInt(inp1)-parseInt(inp2);
        war.innerHTML=""
        }
}
