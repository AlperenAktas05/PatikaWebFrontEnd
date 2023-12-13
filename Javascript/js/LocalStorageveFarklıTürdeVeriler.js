//Local Storage'e Obje Ekleme
let user = { username: "Alperen", age: 19}
localStorage.setItem("userInfo", JSON.stringify(user))

//Local Storage'den Obje Yazdırma
let writeUserInfoKey = JSON.parse(localStorage.getItem("userInfo"))
console.log(writeUserInfoKey)

//-----------------------------------------------------------------

//Local Storage'e Liste Ekleme
let list = [1, 2, 3, 4, 5]
localStorage.setItem("listInfo", JSON.stringify(list))

//Local Storage'den Liste Yazdırma
let writeListInfoKey = JSON.parse(localStorage.getItem("listInfo"))
console.log(writeListInfoKey)