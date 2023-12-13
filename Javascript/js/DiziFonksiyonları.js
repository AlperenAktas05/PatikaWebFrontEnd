//Dizi tanımlama
let items = [1, 2, 3, 4, 5]
console.log("Dizi:", items)

// Dizi içine dizi ekleme
let maleList = ["Alperen", "Volkan", "Eren"]
let femaleList = ["Selen", "Öykü", "Damla"]

items.unshift(maleList) //maleList, dizinin başına eklendi
items.push(femaleList) //femaleList, dizinin sonuna eklendi
console.log("Dizi içine dizi eklendi:", items)

console.log("Dizinin uzunluğu:", items.length) //Dizi içindeki dizileri 1 eleman olarak saydı
console.log("Dizi içerisindeki dizinin uzunluğu:", items[0].length) //Dizi içerisindeki dizinin uzunluğu
console.log("Dizi içindeki dizinin elemanlarına erişmek:", items[0][0], items[0][1], items[0][2]) //Dizi içindeki dizinin elemanlarına erişmek

//Dizi içerisinden eleman ayırma
let smallItems = items.splice(1, 5) //1. parametre index numarası, 2. parametre çıkarılan eleman adeti
console.log("smallItems:", smallItems)
console.log("Yeni items:", items)

//Dizi elemanının yerini bulma
items.unshift("Lorem")
items.push("ipsum")
console.log("Dizi:", items)

console.log("ipsum elemanının index'i:", items.indexOf("ipsum")) //elemanın değerine göre index numarası bulunur

//Dizi kopyalama
let copyArray = items
copyArray.pop() //Kopyalanan listenin son elemanı silindi

console.log("Kopyalanan Liste:", copyArray)
console.log("items:", items) // Dizi kopyalanmaz sadece kısayolu oluşur, silinen eleman ana diziden de silinir

copyArray.push("ipsum") //Silinen eleman geri eklendi

//------------------------------------------------------------------------------------------------------------

copyArray = items.slice() // Dizi kopyalama fonksiyonu
copyArray.pop() //Kopyalanan listenin son elemanı yine silindi

console.log("Kopyalanan Liste:", copyArray)
console.log("items:", items) //Kopyalanan listeden silinen eleman ana diziden silinmedi

//Dizi içeriğini string'e çevirme
console.log("Dizinin string hali:", items.toString()) //Elemanlar arasına , koyar
console.log("Dizinin string hali", items.join(" -- ")) //Elemanlar arasına parametreyi koyar

//İki diziyi birleştirme
let genderList = [...maleList, ...femaleList] //Bu yöntem dizi kopyalamak için de kullanılabilir
console.log("genderList:", genderList)

//İstediğimiz index yerine eleman ekleme
items.splice(items.length-1, 0, "dolor") //eklemek istediğimiz index numarasının 1 fazlasını parametreye göndeririz
console.log("Dizi:", items)