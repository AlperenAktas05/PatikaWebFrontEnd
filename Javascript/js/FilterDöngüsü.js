//Filter döngüsü tanımlama

let fruits = ["elma", "çilek", "muz", "portakal", "kiraz"]
console.log(fruits)

let longFruits = fruits.filter(fruit => fruit.length > 4) //4'ten fazla harf içeren meyveleri yeni diziye atama
console.log(longFruits)

let users = [
    {username: "Alperen", isActive: true},
    {username: "Mert", isActive: false},
    {username: "Selen", isActive: false},
    {username: "Cengiz", isActive: false}
]

let onlineUsers = users.filter(user => user.isActive == true) //isActive = true olan user'ları yeni diziye atma
console.log(onlineUsers)
