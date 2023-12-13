//ForEach döngüsü tanımlama

let items = [1, 2, 3, 4, 5]

items.forEach(function(item, index, array){console.log(item)}) //Fonksiyon ile tanımlama

items.forEach((item, index, array) => {console.log(item)}) //Arrow Function ile tanımlama

items.forEach((item, index, array) => {array[index] = item+5}) //Dizinin her elemanına +5 ekleme
console.log(items)

//ForEach ile dizinin elemanlarını HTML listesine ekleme

let users = ["Alperen", "Mert", "Selen", "Cengiz"]

let userListDOM = document.querySelector("#userList")
userListDOM.classList.add("list-group", "col-4", "offset-4", "mt-5")

users.forEach(user => {
    let userListIndexDOM = document.createElement("li")
    userListIndexDOM.innerHTML = user
    userListIndexDOM.classList.add("list-group-item", "text-center")
    userListDOM.append(userListIndexDOM)
})