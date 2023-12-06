// HTML etiketine tıklandıkça renk değiştiren program

let info = document.querySelector("#info")
info.innerHTML = "Merhaba"
info.style.fontSize = "50px"

info.addEventListener("click",changeColor)

let sayac = 0
let sayacDOM = document.querySelector("#sayac")
sayacDOM.style.fontSize = "50px"

function changeColor(){
    console.log("Renk Değişti")
    
    if(this.style.color == "red"){
        this.style.color = "black"
        sayac = sayac + 1
        sayacDOM.innerHTML = sayac
    }
    else{
        this.style.color = "red"
        sayac = sayac + 1
        sayacDOM.innerHTML = sayac
    }
}