//Kullanıcıdan alınan ismi yazdıran yoksa uyaran program

let username = prompt("Lütfen Kullanıcı Adinizi Giriniz:")
let info = document.querySelector("#info")

info.innerHTML = `${username ? username : "Kullanici Adi Bos Birakilamaz"}`
