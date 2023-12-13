//Nesne tanımlama

let user = {
    firstName: "Alperen",
    surName: "Aktas",
    age: 19,
    gender: "Male"
}

console.log(user)

//Nesnedeki değerleri nesneden çıkarıp değişken yapma
let {firstName, surName, age, gender} = user //Değerler nesneden çıktı ve değişken oldu
console.log(firstName, surName, age, gender) 

firstName = "Mert" //Değişkenin değerini değiştirme
console.log(firstName)

//Nesneden bazı değerleri çıkarıp kalanları yeni nesneye atma
let {firstName: firstName2, surName: surName2, ...newUser} = user //Değişkenlere yeni isim de verebiliriz, age ve gender yeni nesneye gitti
console.log(firstName2, surName2)
console.log(newUser)

//Nesne kopyalama

/* Hatalı Kullanım
let user2 = user
user2.firstName = "Selen"

console.log(user2)
console.log(user) //Ana nesne de değişti
*/

let user2 = {...user}
user2.firstName = "Selen"

console.log(user2)
console.log(user)

//Diziden bazı değerleri çıkarıp kalanları yeni diziye atma

let array = [1, 2, 3, 4, 5]

let [index1, index2, index3, ...newArray] = array
console.log(index1, index2, index3)
console.log(newArray)


//Dizi Kopyalama

let array2 = [1, 2, 3, 4, 5]

/* Hatalı Kullanım
let array2 = array
array2[0] = 0

console.log(array2)
console.log(array) //Ana dizi de değişti
*/

let array3 = [...array2]
array3[0] = 0

console.log(array3)
console.log(array2)