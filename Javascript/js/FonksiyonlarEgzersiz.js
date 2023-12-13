// Bir sayaç etiketini arttıran ve azaltan butonlar

let counter = 0
let counterDOM = document.querySelector("#counter")
counterDOM.innerHTML = `Sayaç: ${counter}`

let arttirDOM = document.querySelector("#arttir")
let azaltDOM = document.querySelector("#azalt")

arttirDOM.addEventListener("click", changeCounter)
azaltDOM.addEventListener("click", changeCounter)

function changeCounter(){
    if(this.id == "arttir"){
        counter = counter +1
        counterDOM.innerHTML = `Sayaç: ${counter}`  
    }

    if(this.id == "azalt"){
        counter = counter -1
        counterDOM.innerHTML = `Sayaç: ${counter}`
    }
}