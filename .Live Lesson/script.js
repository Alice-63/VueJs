const teilnehmer =
[
    {
        id: 0,
        ad: "Max",
        soyad: "Mustermann",
        puan: 84,
        bolum: 2
    },
    {
        id: 1,
        ad: "Martin",
        soyad: "Müller",
        puan: 100,
        bolum: 0
    },
    {
        id: 2,
        ad: "Maria",
        soyad: "Musterfrau",
        puan: 52,
        bolum: 2
    },
    {
        id: 3,
        ad: "Max",
        soyad: "Nachname",
        puan: 93,
        bolum: 1
    },
    {
        id: 4,
        ad: "Anna",
        soyad: "Bella",
        puan: 70,
        bolum: 1
    },
    {
        id: 5,
        ad: "Johannes",
        soyad: "Kempler",
        puan: 15,
        bolum: 0
    },
    {
        id: 6,
        ad: "Bastian",
        soyad: "Alt",
        puan: 98,
        bolum: 2
    },
]

const bolumler =
[
    {
        id: 0,
        isim: "Matematik"
    },
    {
        id: 1,
        isim: "Dil Bilgisi"
    },
    {
        id: 2,
        isim: "Spor"
    }
]



const app= new Vue({

    el:"#app",
    data:
        {
            
            
        },

        methods:
        {

        },
        computed:
        {
           enYuksek:function()
           {
               let enY=0;
               let kim =-1
               for(t of teilnehmer)
               {
                   if(t.puan>enY)
                   {
                       enY=t.puan;
                       kim=t.id
                   }
               }
               return teilnehmer[kim].ad+" "+enY
           }
        }


})


