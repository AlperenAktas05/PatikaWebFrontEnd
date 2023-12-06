// Bir sayaç etiketini arttıran ve azaltan butonlar

counter = 0
counterDOM = document.querySelector("#counter")

arttirDOM = document.querySelector("#arttir")
azaltDOM = document.querySelector("#azalt")

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