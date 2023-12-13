//Nesne tanımlama

let user = {} //Nesne oluşturma yöntemi
console.log(typeof(user))

let user2 = new Object() //Bir başka nesne oluşturma yöntemi
console.log(typeof(user2))

//Nesne içerisinde key-value tanımlamak

user = {
    firstName: "Alperen",
    surName: "Aktaş",
    age: 19,
    gender: "Male"
}
console.log(user)

//Nesne içerisindeki bilgiye ulaşma
console.log(user.firstName, user.surName, user.age, user.gender)