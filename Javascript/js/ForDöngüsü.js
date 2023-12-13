//For döngüsünü tanımlamak
for(let i=0; i<10; i++){ //Döngü değişkeni tanımla, başlangıç değeri, bitiş değeri, değişim miktarı
    console.log(i)
}

//Bir dizinin elemanlarını HTML yapısında listeleme
let users = ["Alperen", "Mert", "Selen", "Cengiz"]

let userListDOM = document.querySelector("#userList")

for(let i=0; i<users.length; i++){
    let userListIndexDOM = document.createElement("li")
    userListIndexDOM.innerHTML = users[i]
    userListIndexDOM.classList.add("list-group-item", "text-center")
    userListDOM.append(userListIndexDOM)
}
