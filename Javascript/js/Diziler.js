//Dizi oluşturmak
let username = "Alperen"
let isActive = true
let items = [1, 2, 3, 4, 5, username, isActive]

console.log(items)

//Dizi eleman sayısını öğrenmek
console.log("Eleman Sayisi:", items.length)

//Dizi ilk eleman, ortadaki eleman ve son elemanı öğrenmek
console.log("İlk Eleman:", items[0])
console.log("Ortadaki Eleman:", items[Math.floor(items.length/2)])
console.log("Son Eleman:", items[items.length-1])

//Değişkenin dizi olup olmadığını öğrenmek
console.log("Items bir dizi mi?:" ,Array.isArray(items))
console.log("Username bir dizi mi?:", Array.isArray(username))
console.log("IsActive bir dizi mi?:", Array.isArray(isActive))