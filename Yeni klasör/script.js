const nutzer =
[
    {
        id: 0,
        vorname: "Max",
        nachname: "Mustermann",
		alter: 25
    },
    {
        id: 1,
        vorname: "Lucas",
        nachname: "Müller",
		alter: 38
    },
    {
        id: 2,
        vorname: "Laura",
        nachname: "Musterfrau",
		alter: 30
    },
    {
        id: 3,
        vorname: "Emma",
        nachname: "Jäger",
		alter: 26
    },
    {
        id: 4,
        vorname: "Anton",
        nachname: "Schneider",
		alter: 40
    },
    {
        id: 5,
        vorname: "Martin",
        nachname: "Schmidt",
		alter: 38
    },
    {
        id: 6,
        vorname: "Jena",
        nachname: "Fischer",
		alter: 21
    },
    {
        id: 7,
        vorname: "Alex",
        nachname: "Weber",
		alter: 34
    },
    {
        id: 8,
        vorname: "Karl",
        nachname: "Meyer",
		alter: 51
    },
    {
        id: 9,
        vorname: "Marcus",
        nachname: "Wagner",
		alter: 29
    },
    {
        id: 10,
        vorname: "Helen",
        nachname: "Becker",
		alter: 22
    },
    {
        id: 11,
        vorname: "Lina",
        nachname: "Schulz",
		alter: 19
    },
    {
        id: 12,
        vorname: "Peter",
        nachname: "Hoffmann",
		alter: 42
    },
]

const app= new Vue({
    el:"#app",
    data:{
        step:1,
        inputVorname:""
       
    },
    methods:
    {
      
        next(){
            check();
            
            
        },
        abmelden(){
            app.step--
        }
    }
})


function check()
{
//    var inputName=document.getElementById("inputName");
    var inputPass=document.getElementById("inputPass");
    var i=document.getElementById("i")
    var i2=document.getElementById("i2")
   if( app.inputVorname=="")
   {
     
      inputName.style.borderColor="red"
      i.style.color="red"
     
   }
   else
   {
    
   
    if(inputPass.value=="")
    {
        inputPass.style.borderColor="red"
        i2.style.color="red"
        
    }
    else
    {
        inputPass.style.borderColor="dodgerBlue"
        i2.style.color="dodgerBlue"
        app.step++
    }
   }
   
   
}
function check2 (){
    
    var inputName=document.getElementById("inputName");
    var inputPass=document.getElementById("inputPass");
    var i=document.getElementById("i")
    var i2=document.getElementById("i2")
    var valueName=inputName.value;
    var valuePass=inputPass.value;
  if(app.inputVorname.length<5)
  {
      console.log(app.inputVorname.length)
    inputName.style.borderColor="red"
    i.style.color="red"
  }
  else
  {
   inputName.style.borderColor="dodgerBlue"
   i.style.color="dodgerBlue"

    if(valuePass.length<5)
  {
    console.log("Check")
    inputPass.style.borderColor="red"
    i2.style.color="red"
  }
  else
  {
   inputPass.style.borderColor="dodgerBlue"
   i2.style.color="dodgerBlue"
  }
  }
 
}