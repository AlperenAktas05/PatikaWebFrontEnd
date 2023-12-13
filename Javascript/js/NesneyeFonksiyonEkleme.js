//Nesne tanımlama

let user = {
    firstName: "Alperen",
    surName: "Aktaş",
    age: 19,
    gender: "Male",
    favoriteGame: ["Lol", "Minecraft", "Rocket League", "GTA5"],
    isHuman: true,
    nickName: function(){
        return `${this.firstName[0].toUpperCase()}. ${this.surName}`
    } 
}

console.log(user) //Nesneyi yazdırma
console.log(user.favoriteGame) //Nesnenin içindeki diziyi yazdırma
console.log(user.favoriteGame[0]) //Nesnenin içindeki dizinin elemanını yazdırma
console.log(user.nickName()) //Nesnenin içindeki fonksiyonu çağırma
