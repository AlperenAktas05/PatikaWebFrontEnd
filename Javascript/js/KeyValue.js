//Nesne tanımlama

let user = {
    firstName: "Alperen", //Genel değer atama şekli
    surName: "Aktaş",
    age: 19,
    "gender": "Male" //Farklı bir değer atama şekli
}

console.log(user)

//Nesne içinden değer çağırma
console.log(user.firstName) //Genel değer çağırma şekli
console.log(user["surName"]) //Farklı bir değer çağırma şekli
console.log(user.age)
console.log(user["gender"]) //Değer string olarak atanmış ise sadece bu yöntem ile çağırılabilir

//Nesne içine daha sonra değer ekleme
user.nationality = "Turk"
console.log(user)

//Nesne içindeki key'leri görme fonksiyonu
keys = Object.keys(user) //keys bir dizidir
console.log(keys)

keys.forEach(item => {
    console.log(item) //keyler
    console.log(user[item]) //value'lar (manuel yöntem)
});

//Nesne içindeki value'ları görme fonksiyonu
values = Object.values(user) //values bir dizidir
console.log(values)

values.forEach(item => {
    console.log(item)
})