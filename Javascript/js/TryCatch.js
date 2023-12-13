//Try-Catch oluşturma

let items; //Dizi olduğu belli değil

try{
    items.forEach(item => { //items dizi olduğu belli olmadığı için hata verir
        console.log(item)
    });
}catch(error){ //Hata yakalanır, parametre hata mesajını verir
    console.log("Hata:", error) //Hata konsola yazdırılır
    console.log("Hata yakalandı")
}

console.log("Merhaba Dünya") //Program hata vermesine rağmen bu satır çalışır