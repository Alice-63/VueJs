

const gelenVeri = 
{
    musteriler:
    [
        {id: 0, ad: "Max", soyad: "Mustermann", meslek: "Yazilimci", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Maria", soyad: "Müller", meslek: "Muhasebeci", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Alex", soyad: "Nachname", meslek: "Insaatci", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Thomas", soyad: "Meier", meslek: "Tasarimci", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Mustafa", soyad: "Demir", meslek: "Is Adami", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Mehmet", soyad: "Simsek", meslek: "Youtuber", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Ali", soyad: "Yildirim", meslek: "Emlakci", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Fatma", soyad: "Aslan", meslek: "Garson", kayitTarihi: "01.01.2021", email: "test@test.com"},
        {id: 0, ad: "Caroline", soyad: "Musterfrau", meslek: "Pedagog", kayitTarihi: "01.01.2021", email: "test@test.com"},
    ]
}




const app= new Vue({
    el:"#app",
    data:
    {
        musteriler:gelenVeri.musteriler
    
    }
   


})





















// Vue.component("hallo",
// {
//     template:"<button> Click </button>"
// })

// const app=new Vue({
//     el:"#app",
//     data:{

//     },
//     components:
//     {
//         hallo1:
//         {
//             template:"<button style='color:blue'> Click </button>"
//         }
//     }
// })




















