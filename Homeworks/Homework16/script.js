let firstName = prompt("Lütfen Adinizi Giriniz")
let firstNameDOM = document.querySelector("#firstName")
firstNameDOM.innerHTML = `Merhaba, ${firstName}! Hoş Geldin!`

let gunAdlari = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
let date = new Date()
let dateDOM = document.querySelector("#date")
dateDOM.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} ${gunAdlari[date.getDay()]}`

