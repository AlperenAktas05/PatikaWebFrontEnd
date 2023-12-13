//Dizi tanımlama
let items = [1, 2, 3, 4, 5]
console.log("Dizi tanımlandı:", items)

//Dizi sonuna eleman ekleme ve silme
items.push(6)
console.log("Dizi sonuna 6 eklendi:", items)

let lastItem = items.pop()
console.log("Dizi sonundan silinen eleman:", lastItem, "Yeni Dizi:", items)

//Dizi başına eleman ekleme ve silme
items.unshift(0)
console.log("Dizi başına 0 eklendi:", items)

let firstItem = items.shift()
console.log("Dizi başından silinen eleman:", firstItem, "Yeni Dizi:", items)

//Dizi elemanını düzenleme
items[0] = 10 //Dizi başı değişti
items[items.length-1] = 50 //Dizi sonu değişti
items[Math.floor(items.length/2)] = 30 //Dizi ortası değişti
console.log("Dizi başı, ortası ve sonu değişti:", items)
