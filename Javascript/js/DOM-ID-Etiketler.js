//Etikete Ulaşma
let h1 = document.getElementsByTagName("h1")
h1.innerHTML = "HELLO WORLD"
console.log(h1)

//ID'ye ulaşma
let link1 = document.getElementById("link-1")
link1.innerHTML = "Hoşgeldin"
console.log(link1.innerHTML)

//QuerySelector
let link3 = document.querySelector("#link-3")
link3.innerHTML = "Ulaşım"
link3.className = "btn btn-warning"
console.log(link3.innerHTML)
