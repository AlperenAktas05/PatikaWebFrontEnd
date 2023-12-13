let name = prompt("Lütfen Adınızı Giriniz")
console.log(name)

let p1 = document.querySelector("#p-1")
p1.innerHTML = `Adınız: <b class="text-danger">${name}</b>`
