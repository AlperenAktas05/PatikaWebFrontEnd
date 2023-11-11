//length()
let data = "Alperen AKTAS"
console.log(data.length) //Uzunluğu verir

//charAt() 
console.log(data.charAt(4)) //4. harfi verir

//toUpperCase() ve toLowerCase()
console.log(data.toUpperCase()) //Büyük harflerle yazar
console.log(data.toLowerCase()) //Küçük harflerle yazar

//search()
console.log(data.search("T")) //T harfinin index'ini verir

//slice()
console.log(data.slice(4))  //4. harf ve sonraki kısmı verir
console.log(data.slice(4,10)) //4. harften başlayıp 10. harfe kadar olan kısmı verir. (10 dahil değil)

//replace()
console.log(data.replace("Alperen" , "Eren")) //Alperen'i Eren ile değiştirir

//include()
console.log(data.includes("Z")) //Z harfi var mı?

//startsWidth() ve endsWidth()
console.log(data.startsWith("A")) //A harfi ile mi başlar?
console.log(data.endsWith("H")) //H harfi ile mi biter?

//İlk Harfleri Büyük Yapma
let name="aLpErEn"
let surName="aKtAs"
console.log(`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}  ${surName.charAt(0).toUpperCase()}${surName.slice(1).toLowerCase()}`)
