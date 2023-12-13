// Input Verisini Almak

let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener("submit", writeInput)

function writeInput(event){
    event.preventDefault()

    console.log("Veri Gönderildi")

    let userFormInputDOM = document.querySelector("#score")
    console.log(userFormInputDOM.value)

    localStorage.setItem("userFormInput", userFormInputDOM.value)
}

//Input Verisini Temizlemek
userFormDOM.addEventListener("reset", deleteInput)

function deleteInput(){
    console.log("Veri Temizlendi")
}